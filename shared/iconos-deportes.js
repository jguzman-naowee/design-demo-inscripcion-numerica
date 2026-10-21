/* Íconos de deporte: mapa nombre -> SVG y InscNum.iconoDeporte(nombre).
   Un deporte sin archivo propio usa el trofeo genérico. Para sumar uno: copiar su SVG a
   iconos-deportes/ y cambiar su entrada del mapa. */
(function () {
  var G = 'shared/iconos-deportes/generico.svg';
  var MAPA = {
  "Actividades Subacuáticas": G,
  "Ajedrez": G,
  "Arquería": G,
  "Atletismo": G,
  "Bádminton": G,
  "Baloncesto": G,
  "Balonmano": G,
  "Béisbol": G,
  "Billar": G,
  "Bowling": G,
  "Boxeo": G,
  "Canotaje": G,
  "Ciclismo": G,
  "Ecuestre": G,
  "Esgrima": G,
  "Esquí Náutico": G,
  "Fútbol": G,
  "Fútbol Salón": G,
  "Gimnasia": G,
  "Golf": G,
  "Hapkido": G,
  "Judo": G,
  "Karate": G,
  "Levantamiento de Pesas": G,
  "Lucha": G,
  "Natación": G,
  "Patinaje": G,
  "Porrismo (exhibición)": G,
  "Rugby 7": G,
  "Softbol": G,
  "Squash": G,
  "Surf": G,
  "Taekwondo": G,
  "Tejo": G,
  "Tenis de Campo": G,
  "Tenis Mesa": G,
  "Tiro Deportivo": G,
  "Triatlón": G,
  "Vela": G,
  "Voleibol": G
  };
  var cs = document.currentScript, BASE = cs && cs.src ? cs.src.replace(/iconos-deportes\.js.*$/, '') : '';
  function url(nombre) { return BASE + (MAPA[nombre] || G).replace(/^shared\//, ''); }
  function html(nombre, px) {
    var t = px || 24;
    return '<img src="' + url(nombre) + '" alt="" aria-hidden="true" width="' + t + '" height="' + t + '">';
  }
  window.INSCNUM_ICONOS_DEPORTES = MAPA;
  window.InscNum = window.InscNum || {};
  window.InscNum.iconoDeporte = url;
  window.InscNum.iconoDeporteHTML = html;
})();
