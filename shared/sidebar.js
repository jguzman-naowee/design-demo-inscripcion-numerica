/* NAOWEE INSCRIPCIÓN NUMÉRICA — shell: header, maqueta a ancho completo y datos del demo.
   Script clásico (no módulo) para que la demo abra también con file://.
   Expone window.InscNum: datos (ROLES, HU, FASE) y bootRole()/landing helpers. */
(function () {
  'use strict';

  var P = 'naowee-inscnum-';
  var ROL_KEY = P + 'rol';            // último rol abierto

  /* Con tablero:false se oculta el Tablero (C6) y sus HU 10 a 13 (config-demo.js). */
  var TABLERO = !(window.INSCNUM_CONFIG && window.INSCNUM_CONFIG.tablero === false);
  var HU_TABLERO = ['10', '11', '12', '13'];

  /* ─── Datos (copiados de indice-anterior.html) ─── */
  var ROLES = {
    delegado: { code: 'delegado', page: 'delegado.html', label: 'Delegado', avatar: 'DE', color: '#1f78d1',
      d: 'Gestor de una delegación: declara la cantidad de atletas y suplentes de su delegación y descarga su certificado.',
      dir: 'inscripcion-numerica-rol-delegado', usuario: 'AT' },
    admin: { code: 'admin', page: 'admin.html', label: 'Admin de plataforma', avatar: 'AP', color: '#d74009',
      d: 'Carga y mantiene los cupos oficiales y la ventana de la fase. El delegado solo los ve como tope y como estado.',
      dir: 'inscripcion-numerica-rol-admin' },
    comite: { code: 'comite', page: 'comite.html', label: 'Comité organizador', avatar: 'CO', color: '#1f8923',
      d: 'Sigue el avance del evento: consolidado' + (TABLERO ? ', tablero' : '') + ' y reportes.' + (TABLERO ? ' El tablero vive en un dashboard externo, no en este repo.' : ''),
      dir: 'inscripcion-numerica-rol-comite' }
  };
  var ORDER = ['delegado', 'admin', 'comite'];

  var HU = [
    ['01', 'admin', 'Parametrización de cupos', 'Cupos máximos por deporte, modalidad y género'],
    ['02', 'admin', 'Parametrización de cupos', 'Cupos de las modalidades mixtas'],
    ['03', 'admin', 'Parametrización de cupos', 'Ventana de la fase de inscripción numérica'],
    ['04', 'delegado', 'Captura de cantidades', 'Grilla de captura de la delegación'],
    ['05', 'comite', 'Captura de cantidades', 'Visualización del cupo máximo en el consolidado'],
    ['06', 'delegado', 'Captura de cantidades', 'Registro de cantidad de atletas y suplentes'],
    ['07', 'delegado', 'Validaciones', 'Validación contra el cupo parametrizado'],
    ['08', 'delegado', 'Validaciones', 'Validación de reglas de composición de equipo'],
    ['09', 'delegado', 'Validaciones', 'Validación de topes agregados de la delegación'],
    ['10', 'comite', 'Dashboard', 'Renombrar y ajustar los indicadores del tablero'],
    ['11', 'comite', 'Dashboard', 'Nuevos indicadores por género'],
    ['12', 'comite', 'Dashboard', 'Retirar del tablero lo que no aplica'],
    ['13', 'comite', 'Dashboard', 'Filtro por grupo de inscripción'],
    ['14', 'comite', 'Reportes', 'Reporte consolidado de inscripción numérica'],
    ['15', 'comite', 'Reportes', 'Exportación desde el consolidado'],
    ['16', 'delegado', 'Certificado de cierre', 'Certificado de inscripción numérica por delegación'],
    ['17', 'comite', 'Certificado de cierre', 'Membrete oficial en las descargas']
  ].filter(function (h) { return TABLERO || HU_TABLERO.indexOf(h[0]) < 0; });

  /* [id, código, título, notas opcionales que se listan en Configuraciones → Pantallas] */
  var FASE = {
    delegado: [['n1', 'N1', 'Hero con fases'], ['n2', 'N2', 'Grilla de captura'], ['n3', 'N3', 'Error de cupo'], ['n4', 'N4', 'Composición de equipo'], ['n5', 'N5', 'Tope de delegación'], ['n6', 'N6', 'Guardar y confirmar'], ['n7', 'N7', 'Cerrada y certificado'], ['estados', 'EV', 'Estados de la ventana']],
    admin: [['a5', 'A5', 'Ventana de la fase'], ['a1', 'A1', 'Pestaña Cupos'], ['a2', 'A2', 'Importar desde Excel'], ['a3', 'A3', 'Editar el cupo de una modalidad'], ['a4', 'A4', 'Límites conjuntos'], ['a6', 'A6', 'Cambios a mitad de fase']],
    comite: [['c1', 'C1', 'Consolidado: por deporte y por delegación'], ['c3', 'C3', 'Quién falta'], ['c4', 'C4', 'Exportar'], ['c5', 'C5', 'Reporte consolidado']].concat(!TABLERO ? [] : [['c6', 'C6', 'Tablero y membrete', ['Diseño del cambio: el tablero real vive en un dashboard externo, no en este repo.', 'Las cifras son de ejemplo (modelo simple y determinista); solo «Delegaciones Registradas» (33 sin filtros) es real.']]])
  };

  function husOf(code) { return HU.filter(function (h) { return h[1] === code; }); }
  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }
  function lsGet(k) { try { return localStorage.getItem(k); } catch (_) { return null; } }
  function lsSet(k, v) { try { localStorage.setItem(k, v); } catch (_) { } }

  /* ─── URLs del contenido embebido ─── */
  function faseUrl(code) { return ROLES[code].dir + '/fase.html?embed=1'; }
  function urlFor(code, kind, id) {
    if (kind === 'fase') return faseUrl(code) + '#' + id;
    if (kind === 'hu') return faseUrl(code) + '&tour=HU-IN-' + id;
    return '#';
  }

  /* ─── Header: marca y el usuario de la maqueta (el rol se cambia desde el flotante) ─── */
  var BELL = '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M6 8a6 6 0 1 1 12 0c0 7 3 8 3 8H3s3-1 3-8M10 20a2 2 0 0 0 4 0"/></svg>';
  var CHEV = '<svg viewBox="0 0 12 12" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 4l4 4 4-4"/></svg>';
  function headerHtml(role) {
    return '<div class="header-brand"><img src="shared/logos/ministerio.svg" alt="Ministerio del Deporte" class="sb-logo-img"/><div class="logo-sep"></div>' +
      '<img src="shared/logos/suid.png" alt="SUID" class="sb-logo-img"/></div>' +
      (role.usuario ? '<div class="hdr-user">' + BELL + '<span class="hdr-me"><span class="hdr-av">' + esc(role.usuario) + '</span>' + CHEV + '</span></div>' : '');
  }

  /* «Reiniciar demo»: borra solo las claves del prefijo del demo; el panel ya pidió la confirmación. */
  function resetDemo(confirmado) {
    if (!confirmado && !window.confirm('¿Reiniciar la demo? Se borra lo guardado (rol y avances) y se vuelve al inicio.')) return;
    [sessionStorage, localStorage].forEach(function (store) {
      try {
        for (var i = store.length - 1; i >= 0; i--) {
          var k = store.key(i);
          if (k && k.indexOf(P) === 0) store.removeItem(k);
        }
      } catch (_) { }
    });
    window.location.href = 'index.html';
  }

  var frame = null;
  /* Navega la maqueta: kind 'fase' = pantalla (hash), 'hu' = recorrido de la HU. */
  function go(code, kind, id) {
    if (frame) frame.src = urlFor(code, kind, id);
  }

  function bootRole(code) {
    var role = ROLES[code];
    if (!role) { window.location.href = 'index.html'; return; }
    lsSet(ROL_KEY, code);

    var headerEl = document.getElementById('topHeader');
    var page = document.getElementById('page');
    var stage = document.getElementById('stage');

    headerEl.innerHTML = headerHtml(role);
    page.classList.add('page--embed');
    stage.innerHTML = '<iframe class="stage-frame" name="maqueta" title="Maqueta de ' + esc(role.label) + '"></iframe>';
    frame = stage.querySelector('iframe');
    frame.src = faseUrl(code);
  }

  window.InscNum = {
    ROLES: ROLES, ORDER: ORDER, HU: HU, FASE: FASE,
    huVisible: function (n) { return TABLERO || HU_TABLERO.indexOf(String(n)) < 0; }, tablero: TABLERO,
    husOf: husOf, bootRole: bootRole, go: go, resetDemo: resetDemo, esc: esc,
    lastRole: function () { var r = lsGet(ROL_KEY); return ROLES[r] ? r : null; },
    keys: { rol: ROL_KEY }
  };
})();
