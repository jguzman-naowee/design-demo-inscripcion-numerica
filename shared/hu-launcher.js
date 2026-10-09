/* Flotante «Configuraciones» del shell: panel lateral derecho con perfil, simulación, pantallas e historias del rol.
   Navega la maqueta con InscNum.go (sidebar.js), que arma las URLs. */
(function () {
  'use strict';
  var data = window.HU_DATA, N = window.InscNum;
  if (!data || !N) return;
  var role = N.lastRole(); if (!role) return;
  var hus = data.filter(function (h) { return h.rol === role; });
  var esc = N.esc;
  var screens = N.FASE[role], activeScreen = screens[0][0];
  var I_HOME = '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V21h14V9.5"/></svg>';
  var I_RESET = '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 3-6.7"/><polyline points="3 3 3 9 9 9"/></svg>';
  var I_FIT = '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M15 4v16"/><path d="M10 10l-2 2 2 2"/></svg>';
  var CORTO = { admin: 'Admin', comite: 'Comité' };
  var RESET_ICON = '<button type="button" class="tt-ib" id="ttReset" title="Reiniciar demo: borra el estado guardado" aria-label="Reiniciar demo">' + I_RESET + '</button>';

  var PK = 'naowee-inscnum-', K_POS = PK + 'flotante-pos', K_VISTA = PK + 'flotante-vista', K_ROL = PK + 'rol-ver', K_AJ = PK + 'flotante-ajuste';
  function lsG(k) { try { return localStorage.getItem(k); } catch (_) { return null; } }
  function lsS(k, v) { try { localStorage.setItem(k, v); } catch (_) { } }
  var vista = lsG(K_VISTA) === 'pantallas' ? 'pantallas' : 'historias';
  var rolVer = lsG(K_ROL) === 'auxiliar' ? 'auxiliar' : 'gestor';
  var esDelegado = role === 'delegado';
  var ajustar = lsG(K_AJ) === '1';
  var simDisp = false, simAbierto = false;   // estado de la barra «Simular» de la pantalla (inscnum-simular-estado)
  var simG = [];   // grupos de «Simular» que manda la maqueta (inscnum-sim)

  var b = document.createElement('button');
  b.id = 'ttLaunch'; b.className = 'tt-launch'; b.type = 'button';
  b.setAttribute('aria-haspopup', 'true'); b.setAttribute('aria-expanded', 'false');
  b.innerHTML = '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="7" x2="20" y2="7"/><line x1="4" y1="17" x2="20" y2="17"/><circle cx="9" cy="7" r="2.2" fill="currentColor"/><circle cx="15" cy="17" r="2.2" fill="currentColor"/></svg>Configuraciones Demo';

  var p = document.createElement('div');
  p.id = 'ttPanel'; p.className = 'tt-panel'; p.setAttribute('role', 'dialog'); p.setAttribute('aria-label', 'Configuraciones de la demo');

  var SIM_NOTA = 'Esta pantalla no tiene simulación';
  function simHtml() {
    return '<div class="tt-grp">Simulador de la pantalla</div><div class="tt-simpan">' +
      '<button type="button" class="tt-sw" id="ttSimBar" aria-pressed="' + (simDisp && simAbierto) + '" aria-describedby="ttSimNota"' + (simDisp ? '' : ' disabled') + '><span class="tt-sw-t">Mostrar controles de simulación</span><span class="tt-sw-k" aria-hidden="true"></span></button>' +
      '<p class="tt-sim-n" id="ttSimNota"' + (simDisp ? ' hidden' : '') + '>' + SIM_NOTA + '</p></div>';
  }
  /* Actualiza en sitio, sin re-renderizar (no pierde el scroll ni las HU abiertas). */
  function pintarSim() {
    var bt = p.querySelector('#ttSimBar'), nt = p.querySelector('#ttSimNota');
    if (!bt) return;
    bt.disabled = !simDisp; bt.setAttribute('aria-pressed', String(simDisp && simAbierto)); if (nt) nt.hidden = simDisp;
  }
  function simReset() { simDisp = false; simAbierto = false; pintarSim(); }
  function enviarSimular(accion) {
    var f = document.querySelector('iframe[name="maqueta"]');
    if (f && f.contentWindow) { try { f.contentWindow.postMessage({ type: 'inscnum-simular', accion: accion }, '*'); } catch (_) { } }
  }

  function render() {
    var scr = screens.map(function (f) {
      var notas = (f[3] || []).map(function (n) { return '<span class="tt-scr-n">' + esc(n) + '</span>'; }).join('');
      return '<button type="button" class="tt-scr' + (f[0] === activeScreen ? ' is-active' : '') + '" data-id="' + esc(f[0]) + '"><b>' + esc(f[1]) + '</b><span class="tt-scr-b"><span class="tt-scr-t">' + esc(f[2]) + '</span>' + notas + '</span></button>';
    }).join('');
    var perf = N.ORDER.map(function (c) {
      var r = N.ROLES[c], on = c === role;
      return '<a class="tt-seg-b' + (on ? ' is-active' : '') + '" href="' + r.page + '" data-perfil="' + c + '"' + (on ? ' aria-current="page"' : '') + '>' + esc(CORTO[c] || r.label) + '</a>';
    }).join('');
    var sim = simG.map(function (g) {
      return '<div class="tt-sim-l">' + esc(g.label) + '</div><div class="tt-seg" role="group" aria-label="' + esc(g.label) + '">' + g.opts.map(function (o) {
        var on = o[0] === g.cur;
        return '<button type="button" class="tt-seg-b' + (on ? ' is-active' : '') + '" data-sim="' + esc(g.attr) + '" data-val="' + esc(o[0]) + '" aria-pressed="' + on + '">' + esc(o[1]) + '</button>';
      }).join('') + '</div>' + (g.n ? '<p class="tt-sim-n">' + esc(g.n) + '</p>' : '');
    }).join('');
    function seg(attr, val, opts) {
      return '<div class="tt-seg" role="group">' + opts.map(function (o) {
        return '<button type="button" class="tt-seg-b' + (o[0] === val ? ' is-active' : '') + '" data-' + attr + '="' + o[0] + '" aria-pressed="' + (o[0] === val) + '">' + o[1] + '</button>';
      }).join('') + '</div>';
    }
    var html = '<div class="tt-panel-h"><span>Demo · ' + esc(N.ROLES[role].label) + '</span><span class="tt-h-acts">' +
      '<button type="button" class="tt-ib tt-aj' + (ajustar ? ' is-on' : '') + '" aria-pressed="' + ajustar + '" title="' + (ajustar ? 'Volver a empujar el contenido' : 'Ajustar el contenido al espacio disponible') + '" aria-label="Ajustar el contenido al espacio disponible">' + I_FIT + '</button>' +
      '<a class="tt-ib" href="index.html" title="Inicio" aria-label="Inicio">' + I_HOME + '</a>' +
      '<span id="ttResetBox">' + RESET_ICON + '</span>' +
      '<button type="button" class="tt-x" aria-label="Cerrar">×</button></span></div>' +
      '<div class="tt-body">' +
      '<div class="tt-grp">Perfil (simulado)</div><div class="tt-seg" role="group" aria-label="Perfil">' + perf + '</div>' +
      (esDelegado ? '<div class="tt-grp">Ver como</div>' + seg('rolver', rolVer, [['gestor', 'Gestor'], ['auxiliar', 'Auxiliar']]) : '') +
      simHtml() +
      (sim ? '<div class="tt-grp">Simular</div><div class="tt-sim">' + sim + '</div>' : '') +
      '<div class="tt-grp">Mostrar</div>' + seg('vista', vista, [['historias', 'Historias'], ['pantallas', 'Pantallas']]);
    if (vista === 'pantallas') {
      html += '<div class="tt-scrs">' + scr + '</div>';
    } else {
      html += '<div class="tt-panel-sub">Abre una para ver sus criterios; «Ver recorrido» resalta dónde verlos en la pantalla.</div>';
      var last = null;
      hus.forEach(function (h) {
        if (h.submodulo !== last) { html += '<div class="tt-grp tt-grp--sub">' + esc(h.submodulo) + '</div>'; last = h.submodulo; }
        html += '<div class="tt-hu" data-n="' + esc(h.n) + '">' +
          '<button type="button" class="tt-item" aria-expanded="false"><span class="tt-item-code">' + esc(h.code) + '</span>' +
          '<span class="tt-item-b"><span class="tt-item-t">' + esc(h.titulo) + '</span><span class="tt-item-h">' + esc(h.historia) + '</span></span></button>' +
          '<div class="tt-det"><ul class="tt-crit">' + (h.criterios || []).map(function (c) { return '<li>' + esc(c) + '</li>'; }).join('') + '</ul>' +
          '<button type="button" class="tt-go">Ver recorrido</button></div></div>';
      });
    }
    p.innerHTML = html + '</div>';
  }

  /* Arrastre con clic sostenido; pasado el umbral deja de ser un clic. */
  function clampBtn() {
    var r = b.getBoundingClientRect(), vw = window.innerWidth, vh = window.innerHeight;
    var l = Math.max(6, Math.min(r.left, vw - r.width - 6)), t = Math.max(6, Math.min(r.top, vh - r.height - 6));
    b.style.left = l + 'px'; b.style.top = t + 'px'; b.style.right = 'auto'; b.style.bottom = 'auto';
    return { l: l, t: t };
  }
  function restorePos() {
    var pos = null; try { pos = JSON.parse(lsG(K_POS)); } catch (_) { }
    if (!pos || typeof pos.l !== 'number' || typeof pos.t !== 'number') return;
    b.style.left = pos.l + 'px'; b.style.top = pos.t + 'px'; b.style.right = 'auto'; b.style.bottom = 'auto';
    clampBtn();
  }
  var drag = null, moved = false;
  b.addEventListener('pointerdown', function (e) {
    if (e.button > 0) return;
    var r = b.getBoundingClientRect();
    drag = { id: e.pointerId, x: e.clientX, y: e.clientY, dx: e.clientX - r.left, dy: e.clientY - r.top, on: false };
    moved = false;
    try { b.setPointerCapture(e.pointerId); } catch (_) { }
  });
  b.addEventListener('pointermove', function (e) {
    if (!drag || e.pointerId !== drag.id) return;
    if (!drag.on) {
      if (Math.abs(e.clientX - drag.x) + Math.abs(e.clientY - drag.y) < 6) return;
      drag.on = moved = true; b.classList.add('is-dragging');
      toggle(false);
    }
    b.style.left = (e.clientX - drag.dx) + 'px'; b.style.top = (e.clientY - drag.dy) + 'px';
    b.style.right = 'auto'; b.style.bottom = 'auto'; clampBtn();
  });
  function endDrag(e) {
    if (!drag || e.pointerId !== drag.id) return;
    if (drag.on) { var q = clampBtn(); lsS(K_POS, JSON.stringify(q)); b.classList.remove('is-dragging'); }
    drag = null;
  }
  b.addEventListener('pointerup', endDrag);
  b.addEventListener('pointercancel', endDrag);
  window.addEventListener('resize', function () {
    if (b.style.left) clampBtn();
  });

  /* «Ver como» (solo delegado): el iframe escucha {type:'inscnum-rol', rol}. */
  function enviarRol() {
    var f = document.querySelector('iframe[name="maqueta"]');
    if (f && f.contentWindow) { try { f.contentWindow.postMessage({ type: 'inscnum-rol', rol: rolVer }, '*'); } catch (_) { } }
  }

  function toggle(force) {
    var open = typeof force === 'boolean' ? force : !p.classList.contains('open');
    if (open) render();
    p.classList.toggle('open', open);
    document.body.classList.toggle('tt-open', open);
    b.setAttribute('aria-expanded', open ? 'true' : 'false');
  }

  function setScreen(id) {
    activeScreen = id;
    p.querySelectorAll('.tt-scr').forEach(function (x) { x.classList.toggle('is-active', x.dataset.id === id); });
  }
  /* El prototipo avisa su pantalla al navegar por clic; se resalta en «Pantallas». */
  window.addEventListener('message', function (e) {
    var f = document.querySelector('iframe[name="maqueta"]'), d = e.data;
    if (!f || e.source !== f.contentWindow || !d) return;
    if (d.type === 'inscnum-screen') setScreen(d.id);
    if (d.type === 'inscnum-simular-estado') { simDisp = d.disponible === true; simAbierto = simDisp && d.abierto === true; pintarSim(); }
    if (d.type === 'inscnum-sim') { simG = d.grupos || []; if (p.classList.contains('open')) render(); }
  });

  b.addEventListener('click', function (e) {
    e.stopPropagation();
    if (moved) { moved = false; return; }
    toggle();
  });
  /* Reiniciar en dos toques: el icono se vuelve un botón rojo «Reiniciar» que confirma. */
  function desarmar() { var bx = p.querySelector('#ttResetBox'); if (bx && bx.querySelector('#ttResetGo')) bx.innerHTML = RESET_ICON; }
  p.addEventListener('click', function (e) {
    e.stopPropagation();
    if (e.target.closest('#ttResetGo')) return N.resetDemo(true);
    if (e.target.closest('#ttReset')) {
      p.querySelector('#ttResetBox').innerHTML = '<button type="button" class="tt-reset-go" id="ttResetGo">Reiniciar</button>';
      p.querySelector('#ttResetGo').focus();
      return;
    }
    desarmar();
    var sb = e.target.closest('#ttSimBar');
    if (sb) { if (simDisp) enviarSimular('alternar'); return; }
    var sm = e.target.closest('[data-sim]');
    if (sm) {
      var f = document.querySelector('iframe[name="maqueta"]');
      if (f && f.contentWindow) { try { f.contentWindow.postMessage({ type: 'inscnum-sim-set', attr: sm.dataset.sim, val: sm.dataset.val }, '*'); } catch (_) { } }
      return;
    }
    if (e.target.closest('.tt-x')) return toggle(false);
    if (e.target.closest('.tt-aj')) { ajustar = !ajustar; lsS(K_AJ, ajustar ? '1' : ''); document.body.classList.toggle('tt-fit', ajustar); return render(); }
    var sv = e.target.closest('[data-vista]');
    if (sv) { vista = sv.dataset.vista; lsS(K_VISTA, vista); return render(); }
    var sr = e.target.closest('[data-rolver]');
    if (sr) { rolVer = sr.dataset.rolver; lsS(K_ROL, rolVer); simReset(); enviarRol(); return render(); }
    var go = e.target.closest('.tt-go');
    if (go) {
      var n = go.closest('.tt-hu').dataset.n;
      toggle(false); simReset();
      N.go(role, 'hu', n);
      return;
    }
    var sc = e.target.closest('.tt-scr');
    if (sc) { setScreen(sc.dataset.id); simReset(); N.go(role, 'fase', sc.dataset.id); return; }
    var pf = e.target.closest('[data-perfil]');
    if (pf && pf.dataset.perfil === role) { e.preventDefault(); return; }
    var it = e.target.closest('.tt-item');
    if (it) { var box = it.parentNode, o = box.classList.toggle('is-open'); it.setAttribute('aria-expanded', o ? 'true' : 'false'); }
  });
  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape' || !p.classList.contains('open')) return;
    if (p.querySelector('#ttResetGo')) return desarmar();
    toggle(false);
  });

  document.body.classList.toggle('tt-fit', ajustar);
  document.body.appendChild(b); document.body.appendChild(p);
  restorePos();
  var mq = document.querySelector('iframe[name="maqueta"]');
  if (mq) mq.addEventListener('load', function () {
    simG = []; if (p.classList.contains('open')) render();
    try { mq.contentWindow.postMessage({ type: 'inscnum-sim-get' }, '*'); } catch (_) { }
  });
  if (esDelegado) {
    var fr = document.querySelector('iframe[name="maqueta"]');
    if (fr) fr.addEventListener('load', enviarRol);
    enviarRol();
  }
})();
