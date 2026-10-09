/* Recorrido guiado por HU (inscripción numérica). Cada fase.html llama mountTour(catalogo) o define window.TOURS_INSCNUM.
   Catálogo = { 'HU-IN-NN': { rol, title, purpose, steps:[{ sel, body, board?, open?, click? }] } } (o arreglo con `code`).
   Paso: board = id del tablero (scroll + «Ahora»); open = selector que se pulsa si sel aún no existe; click = pulsar sel al avanzar. */
(function () {
  'use strict';
  if (window.__inscnumTour) return; window.__inscnumTour = true;

  function qs(k) { return new URLSearchParams(location.search).get(k); }
  /* En embed el shell no puede tocar este DOM: solo vive el tour pedido con ?tour=. */
  var EMBED = new URLSearchParams(location.search).has('embed');
  var DONE_KEY = 'naowee-inscnum-tour-hechos';
  var AHORA = '[data-v="ahora"], [data-m^="ahora:"]';

  var TOURS = {}, ORDER = [], mounted = false;
  var curHu = null, curStep = 0, _retry = null, _stepActed = false, _curEl = null, _spotFresh = false;

  function doneList() { try { return JSON.parse(localStorage.getItem(DONE_KEY) || '[]'); } catch (e) { return []; } }
  function markDone(hu) {
    var l = doneList(); if (l.indexOf(hu) < 0) l.push(hu);
    try { localStorage.setItem(DONE_KEY, JSON.stringify(l)); } catch (e) {}
  }

  function injectCSS() {
    if (document.getElementById('inscnumTourCSS')) return;
    var st = document.createElement('style'); st.id = 'inscnumTourCSS';
    st.textContent =
      '.tt-spot{position:fixed;border-radius:12px;box-shadow:0 0 0 9999px rgba(20,22,38,.52);z-index:9000;pointer-events:none;transition:top .25s,left .25s,width .25s,height .25s;border:2px solid var(--accent,#d74009);}' +
      '.tt-backdrop{position:fixed;inset:0;background:rgba(20,22,38,.52);z-index:9000;pointer-events:none;}' +
      '.tt-coach{position:fixed;z-index:9002;width:346px;max-width:calc(100vw - 28px);background:#fff;color:#282834;border-radius:18px;box-shadow:0 24px 60px -16px rgba(20,22,38,.42);pointer-events:auto;overflow:hidden;font-family:"Inter",-apple-system,BlinkMacSystemFont,sans-serif;line-height:1.4;}' +
      '.tt-coach-h{display:flex;align-items:center;gap:8px;padding:14px 16px 0;}' +
      '.tt-chip{font-size:10px;font-weight:800;letter-spacing:.05em;color:#d74009;background:#fff3e6;padding:3px 9px;border-radius:999px;text-transform:uppercase;}' +
      '.tt-phase{font-size:10.5px;font-weight:600;color:#646587;}' +
      '.tt-x{margin-left:auto;background:none;border:0;cursor:pointer;color:#9aa3af;font-size:20px;line-height:1;padding:2px 4px;border-radius:8px;}' +
      '.tt-x:hover{color:#282834;background:#f3f4f8;}' +
      '.tt-title{font-size:16.5px;font-weight:800;color:#282834;padding:9px 16px 0;letter-spacing:-.2px;line-height:1.25;}' +
      '.tt-purpose{font-size:12px;color:#646587;padding:5px 16px 0;line-height:1.45;}' +
      '.tt-body{font-size:13.5px;color:#282834;padding:12px 16px 0;line-height:1.5;}' +
      '.tt-body b{color:#d74009;font-weight:700;}' +
      '.tt-f{display:flex;align-items:center;gap:8px;padding:14px 16px 16px;margin-top:10px;border-top:1px solid #e7e9f3;}' +
      '.tt-count{font-size:11.5px;font-weight:700;color:#646587;}' +
      '.tt-btns{margin-left:auto;display:flex;gap:8px;}' +
      '.tt-btn{font-family:inherit;font-size:12.5px;font-weight:700;border-radius:10px;padding:8px 15px;cursor:pointer;color:#282834;background:#fff;border:1px solid #d0d4e6;transition:background .14s,border-color .14s;}' +
      '.tt-btn:hover{background:#f6f7fb;border-color:#bcc2d8;}' +
      '.tt-btn--p{color:#fff;border:1px solid transparent;background:#d74009;box-shadow:0 6px 16px -6px rgba(215,64,9,.5);}' +
      '.tt-btn--p:hover{background:#d74009;}' +
      '.tt-launch{position:fixed;right:20px;bottom:20px;z-index:8000;display:flex;align-items:center;gap:8px;background:#002B5B;border:1px solid rgba(255,255,255,.12);border-radius:999px;padding:10px 17px;font-family:"Inter",sans-serif;font-size:12.5px;font-weight:700;color:#fff;cursor:pointer;box-shadow:0 10px 30px -10px rgba(0,43,91,.55);transition:box-shadow .16s,transform .16s;}' +
      '.tt-launch:hover{box-shadow:0 14px 36px -10px rgba(0,43,91,.6);transform:translateY(-1px);}' +
      '.tt-panel{position:fixed;right:20px;bottom:68px;z-index:8001;width:340px;max-height:70vh;overflow:auto;background:#fff;color:#282834;border:1px solid #e7e9f3;border-radius:16px;box-shadow:0 20px 50px -14px rgba(20,22,38,.34);padding:8px;display:none;font-family:"Inter",sans-serif;}' +
      '.tt-panel.open{display:block;}' +
      '.tt-panel-h{font-size:13px;font-weight:800;padding:8px 10px 2px;}' +
      '.tt-panel-sub{font-size:11px;color:#646587;padding:0 10px 8px;line-height:1.4;}' +
      '.tt-grp{font-size:9.5px;font-weight:800;text-transform:uppercase;letter-spacing:.06em;color:#646587;padding:12px 10px 4px;}' +
      '.tt-item{width:100%;display:flex;align-items:center;gap:9px;background:none;border:0;cursor:pointer;padding:8px 10px;border-radius:10px;text-align:left;font-family:inherit;color:inherit;}' +
      '.tt-item:hover{background:#fff3e6;}' +
      '.tt-item-code{font-size:9.5px;font-weight:800;color:#d74009;background:#fff3e6;border-radius:6px;padding:3px 6px;flex-shrink:0;min-width:64px;text-align:center;letter-spacing:.02em;}' +
      '.tt-item-t{font-size:12.5px;font-weight:600;line-height:1.3;}' +
      '.tt-item--ok .tt-item-t::after{content:" \\2713";color:#1f9d24;font-weight:800;}' +
      '@media (prefers-reduced-motion:reduce){.tt-spot{transition:none;}.tt-launch:hover{transform:none;}}' +
      '@media (max-width:760px){.tt-launch{left:14px;right:auto;}.tt-panel{left:14px;right:auto;width:calc(100vw - 28px);max-width:340px;}.tt-coach{left:50%!important;transform:translateX(-50%);bottom:14px!important;top:auto!important;}}';
    document.head.appendChild(st);
  }

  /* ── Lanzador + panel (índice de HU del rol) ── */
  function renderLauncher() {
    if (document.getElementById('ttLaunch')) return;
    var b = document.createElement('button'); b.id = 'ttLaunch'; b.className = 'tt-launch'; b.type = 'button';
    b.setAttribute('aria-haspopup', 'true'); b.setAttribute('aria-expanded', 'false');
    b.innerHTML = '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><polygon points="15.5 8.5 10.5 10.5 8.5 15.5 13.5 13.5" fill="currentColor" stroke="none"/></svg>Recorrido por HU';
    b.onclick = function (e) { e.stopPropagation(); togglePanel(); };
    var p = document.createElement('div'); p.id = 'ttPanel'; p.className = 'tt-panel'; p.setAttribute('role', 'menu');
    var groups = {}, gOrder = [];
    ORDER.forEach(function (h) { var r = TOURS[h].rol || 'Historias'; if (!groups[r]) { groups[r] = []; gOrder.push(r); } groups[r].push(h); });
    var html = '<div class="tt-panel-h">Recorrido guiado por historia de usuario</div>'
      + '<div class="tt-panel-sub">Cada paso muestra el criterio de aceptación y resalta dónde verlo en la pantalla.</div>';
    gOrder.forEach(function (r) {
      html += '<div class="tt-grp">' + r + '</div>';
      groups[r].forEach(function (h) {
        html += '<button class="tt-item" data-hu="' + h + '" role="menuitem"><span class="tt-item-code">' + h + '</span><span class="tt-item-t">' + TOURS[h].title + '</span></button>';
      });
    });
    p.innerHTML = html;
    document.body.appendChild(b); document.body.appendChild(p);
    p.querySelectorAll('.tt-item').forEach(function (it) {
      it.onclick = function (e) { e.stopPropagation(); togglePanel(false); runTour(it.dataset.hu); };
    });
    document.addEventListener('click', function (e) {
      if (p.classList.contains('open') && !p.contains(e.target) && !(e.target.closest && e.target.closest('#ttLaunch'))) togglePanel(false);
    });
  }
  function togglePanel(force) {
    var p = document.getElementById('ttPanel'), b = document.getElementById('ttLaunch'); if (!p) return;
    var open = force === false ? false : (force === true ? true : !p.classList.contains('open'));
    if (open) { var d = doneList(); p.querySelectorAll('.tt-item').forEach(function (it) { it.classList.toggle('tt-item--ok', d.indexOf(it.dataset.hu) >= 0); }); }
    p.classList.toggle('open', open);
    if (b) b.setAttribute('aria-expanded', open ? 'true' : 'false');
  }

  /* ── Ejecución de un tour ── */
  function runTour(hu) {
    if (!TOURS[hu]) return;
    endTour(true);
    curHu = hu; curStep = 0; _stepActed = false; _spotFresh = true; renderStep();
  }
  function findTarget(sel) {
    var els = sel.split(',').map(function (s) { return s.trim(); });
    for (var i = 0; i < els.length; i++) {
      var el = document.querySelector(els[i]);
      if (el && el.offsetParent !== null) return el;
    }
    return null;
  }
  /* Deja el tablero visible y en «Ahora»; abre lo que el paso necesita si su objetivo aún no existe. */
  function prepare(step) {
    /* Prototipo navegable: la fase muestra una pantalla a la vez, así que se pide la del paso. */
    var bid = step.board || ((String(step.sel).match(/#(n\d+|estados)\b/) || [])[1]);
    if (bid && window.InscNumShowScreen) window.InscNumShowScreen(bid);
    var root = step.board && document.getElementById(step.board);
    if (root) {
      try { root.scrollIntoView({ block: 'start', behavior: 'auto' }); } catch (e) {}
      var sw = root.querySelector(AHORA);
      if (sw && !sw.disabled && sw.getAttribute('aria-pressed') !== 'true') sw.click();
    }
    /* open: selectores alternativos «a || b» (se pulsa el primero que exista) y se reintenta hasta que aparezca el objetivo. */
    if (step.open) {
      var alt = String(step.open).split('||').map(function (x) { return x.trim(); });
      for (var k = 0; k < 3 && !findTarget(step.sel); k++) {
        var o = null; for (var m = 0; m < alt.length && !o; m++) o = document.querySelector(alt[m]);
        if (!o) break; o.click();
      }
    }
  }
  function renderStep() {
    var t = TOURS[curHu]; if (!t) return; var step = t.steps[curStep];
    clearTimeout(_retry);
    prepare(step);
    var tries = 0;
    (function locate() {
      var el = findTarget(step.sel);
      if (el || tries > 14) { paint(t, step, el); return; }
      tries++; _retry = setTimeout(locate, 110);
    })();
  }
  function paint(t, step, el) {
    if (!curHu) return;
    var spot = document.getElementById('ttSpot') || mk('div', 'tt-spot', 'ttSpot');
    var coach = document.getElementById('ttCoach') || mk('div', 'tt-coach', 'ttCoach');
    var last = curStep === t.steps.length - 1;
    _curEl = el || null;
    if (el) {
      hideBackdrop();
      placeSpot(spot, el);
      try { el.scrollIntoView({ block: 'center', behavior: 'smooth' }); } catch (e) {}
      setTimeout(function () { if (curHu && _curEl === el && document.body.contains(el)) { placeSpot(spot, el); positionCoach(coach, el); } }, 280);
      if (step.click) { el.addEventListener('click', function () { _stepActed = true; }, { once: true }); }
    } else {
      /* Sin objetivo: backdrop atenuado para que el coach lea como modal y no flote suelto. */
      spot.style.display = 'none';
      showBackdrop();
    }
    coach.innerHTML =
      '<div class="tt-coach-h"><span class="tt-chip">' + curHu + '</span><span class="tt-phase">' + (t.rol || '') + '</span><button class="tt-x" aria-label="Cerrar recorrido">&times;</button></div>'
      + '<div class="tt-title">' + t.title + '</div>'
      + '<div class="tt-purpose">' + t.purpose + '</div>'
      + '<div class="tt-body">' + step.body + '</div>'
      + '<div class="tt-f"><span class="tt-count">Paso ' + (curStep + 1) + ' de ' + t.steps.length + '</span>'
      + '<div class="tt-btns">'
      + (curStep > 0 ? '<button class="tt-btn" data-a="prev">Anterior</button>' : '')
      + '<button class="tt-btn tt-btn--p" data-a="' + (last ? 'done' : 'next') + '">' + (last ? 'Finalizar' : 'Siguiente') + '</button>'
      + '</div></div>';
    positionCoach(coach, el);
    coach.querySelector('.tt-x').onclick = function () { endTour(); };
    coach.querySelectorAll('[data-a]').forEach(function (btn) {
      btn.onclick = function () {
        var a = btn.dataset.a;
        if (a === 'prev') { _stepActed = false; curStep = Math.max(0, curStep - 1); renderStep(); return; }
        if (a === 'done') { markDone(curHu); endTour(); return; }
        var s = t.steps[curStep];
        if (s.click && !_stepActed) {
          var tgt = findTarget(s.sel);
          if (tgt) { _stepActed = true; try { tgt.click(); } catch (e) {} setTimeout(function () { _stepActed = false; curStep = Math.min(t.steps.length - 1, curStep + 1); renderStep(); }, 420); return; }
        }
        _stepActed = false; curStep = Math.min(t.steps.length - 1, curStep + 1); renderStep();
      };
    });
  }
  function placeSpot(spot, el) {
    /* Un checkbox es diminuto: se resalta su etiqueta. */
    var box = (el.type === 'checkbox' || el.type === 'radio') && el.closest('label') || el;
    var r = box.getBoundingClientRect(), pad = 4;
    var n = parseFloat(getComputedStyle(box).borderTopLeftRadius) || 0;
    spot.style.display = 'block';
    /* Primera aparición sin transición: no «vuela» desde la esquina. */
    if (_spotFresh) spot.style.transition = 'none';
    spot.style.top = (r.top - pad) + 'px';
    spot.style.left = (r.left - pad) + 'px';
    spot.style.width = (r.width + pad * 2) + 'px';
    spot.style.height = (r.height + pad * 2) + 'px';
    spot.style.borderRadius = (n > 0 ? n + pad : 8) + 'px';
    if (_spotFresh) { void spot.offsetWidth; spot.style.transition = ''; _spotFresh = false; }
  }
  function reposition() {
    if (!curHu) return;
    var coach = document.getElementById('ttCoach'), spot = document.getElementById('ttSpot');
    if (!coach) return;
    /* Los tableros se redibujan con innerHTML: si el nodo murió, se vuelve a buscar. */
    if (_curEl && !document.body.contains(_curEl)) _curEl = findTarget(TOURS[curHu].steps[curStep].sel);
    if (_curEl && _curEl.offsetParent !== null) {
      hideBackdrop();
      if (spot) placeSpot(spot, _curEl);
      positionCoach(coach, _curEl);
    } else { if (spot) spot.style.display = 'none'; showBackdrop(); positionCoach(coach, null); }
  }
  function positionCoach(coach, el) {
    coach.style.display = 'block';
    var cw = 346, ch = coach.offsetHeight || 260, m = 14;
    var top, left;
    if (el) {
      var r = el.getBoundingClientRect();
      if (r.bottom + ch + m < window.innerHeight) top = r.bottom + m;
      else if (r.top - ch - m > 0) top = r.top - ch - m;
      else top = Math.max(m, (window.innerHeight - ch) / 2);
      left = Math.min(Math.max(m, r.left), window.innerWidth - cw - m);
    } else {
      top = (window.innerHeight - ch) / 2; left = (window.innerWidth - cw) / 2;
    }
    coach.style.top = top + 'px'; coach.style.left = left + 'px';
  }
  function mk(tag, cls, id) { var e = document.createElement(tag); e.className = cls; e.id = id; document.body.appendChild(e); return e; }
  function showBackdrop() { var b = document.getElementById('ttBackdrop') || mk('div', 'tt-backdrop', 'ttBackdrop'); b.style.display = 'block'; }
  function hideBackdrop() { var b = document.getElementById('ttBackdrop'); if (b) b.style.display = 'none'; }
  function endTour(silent) {
    clearTimeout(_retry); curHu = null; _curEl = null; _spotFresh = false;
    ['ttSpot', 'ttCoach', 'ttBackdrop'].forEach(function (id) { var e = document.getElementById(id); if (e) e.remove(); });
    if (silent || !qs('tour')) return;
    /* En file:// replaceState puede lanzar; quitar ?tour= es solo cosmético. */
    try { var u = new URL(location.href); u.searchParams.delete('tour'); history.replaceState(null, '', u); } catch (e) {}
  }
  window.addEventListener('resize', reposition);
  window.addEventListener('scroll', reposition, true);
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && curHu) endTour(); });

  /* ── Montaje: acepta objeto por código o arreglo con `code` ── */
  function onReady(fn) { if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', fn); else fn(); }
  function mountTour(cat) {
    var map = {}, order = [];
    if (Array.isArray(cat)) cat.forEach(function (e) { if (e && e.code) { map[e.code] = e; order.push(e.code); } });
    else if (cat && typeof cat === 'object') Object.keys(cat).forEach(function (k) { map[k] = cat[k]; order.push(k); });
    if (!order.length) return;
    TOURS = map; ORDER = order; mounted = true;
    onReady(function () {
      var auto = qs('tour'), run = !!(auto && TOURS[auto] && TOURS[auto].steps && TOURS[auto].steps.length);
      if (EMBED && !run) return;
      injectCSS();
      if (!EMBED) renderLauncher();
      /* Un código de otro rol no está en este catálogo: se ignora sin romper nada. */
      if (run) setTimeout(function () { runTour(auto); }, 500);
    });
  }
  window.mountTour = mountTour;
  onReady(function () { if (!mounted && window.TOURS_INSCNUM) mountTour(window.TOURS_INSCNUM); });
})();
