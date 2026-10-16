# Módulo de inscripción numérica — rol comité organizador — historias de usuario

> Fuente: Google Sheet `PR-08_VM_2026-10-01_MODULO_INSCRIPCION_NUMERICA.xlsx` (propietario d***@naowee.com, modificado 2026-10-05).
> Hoja: https://docs.google.com/spreadsheets/d/1Qhh1jiNRdnF5628IZlsMCULt3c1aELsD2XuZrz7RNJM
> Bajado el 2026-10-08, solo la primera pestaña (gid=0). 17 historias, HU-IN-01 a HU-IN-17.

## Índice

- **HU-IN-05** · — · Visualización del cupo máximo en el consolidado
- **HU-IN-10** · Dashboard · Renombrar y ajustar los indicadores del tablero
- **HU-IN-11** · — · Nuevos indicadores por género
- **HU-IN-12** · — · Retirar del tablero lo que no aplica
- **HU-IN-13** · — · Filtro por grupo de inscripción
- **HU-IN-14** · Reportes · Reporte consolidado de inscripción numérica
- **HU-IN-15** · — · Exportación desde el consolidado
- **HU-IN-17** · — · Membrete oficial en las descargas

> Las otras 9 HU son de los roles delegado y admin; ver ../inscripcion-numerica-fuente/

---

## HU-IN-05 — Visualización del cupo máximo en el consolidado

- **Submódulo:** —

**Historia:** Como comité organizador, quiero ver el cupo máximo de atletas y suplentes de cada deporte y modalidad en la pantalla de consolidado de intenciones, para contrastar de un vistazo lo declarado contra el tope reglamentario.

**Criterios de aceptación:**

- En la pantalla «Consolidado de intenciones» se agregan cuatro columnas entre Modalidad y los indicadores de género: bajo MASC «Cupos» y «Suplentes», y bajo FEM «Cupos» y «Suplentes».
- Los valores anotados a mano por Daniel en el mockup son: Actividades Subacuáticas Cortas-Piscina y Largas-Aguas Abiertas = 18 y 2 en ambos géneros; Ajedrez Blitz, Clásico y Rápido = 5 y 1 en ambos géneros; Arquería Compuesto y Recurvo = 4 y 1 en ambos géneros.
- Se conserva lo existente en la pantalla: pestañas «Por deporte» / «Por organización», filtros, selector de organización, paginación, conteo de organizaciones por fila y botón Exportar.

**Adjuntos/referencias:** Levantamiento Inscripción Numérica.docx (mockup a mano) · Inscripción_Numérica_V3.xlsx

## HU-IN-10 — Renombrar y ajustar los indicadores del tablero

- **Submódulo:** Dashboard

**Historia:** Como comité organizador, quiero que el tablero de inscripciones hable el lenguaje de los Juegos Nacionales y no el de Intercolegiados, para leer el avance del evento sin traducir conceptos.

**Criterios de aceptación:**

- «Instituciones Registradas» pasa a llamarse «Delegaciones Registradas».
- Se conserva el indicador «Deportistas Registrados».
- Se conserva el indicador «Personal de Apoyo Registrado».
- Todo textual del documento guía (29-sep-2026), sección DashBoard.

**Adjuntos/referencias:** Levantamiento Inscripción Numérica.docx — imágenes 2 a 4

## HU-IN-11 — Nuevos indicadores por género

- **Submódulo:** —

**Historia:** Como comité organizador, quiero ver cuántos inscritos hay por género y qué porcentaje representa cada uno, para verificar el equilibrio de la participación.

**Criterios de aceptación:**

- Se agrega el indicador «Cantidades de inscritos por género».
- Se agrega el indicador «Porcentajes de inscritos por género».
- Textual del documento guía (29-sep-2026).

**Adjuntos/referencias:** Levantamiento Inscripción Numérica.docx — imágenes 2 a 5

## HU-IN-12 — Retirar del tablero lo que no aplica

- **Submódulo:** —

**Historia:** Como comité organizador, quiero que el tablero no muestre «Instituciones» ni «Regionales», porque no son categorías de los Juegos Nacionales.

**Criterios de aceptación:**

- Se retira «Instituciones» del tablero.
- Se retira «Regionales» del tablero.
- Textual del documento guía: «Quitar “Instituciones” y “Regionales”».

**Adjuntos/referencias:** Levantamiento Inscripción Numérica.docx — imágenes 2 a 6

## HU-IN-13 — Filtro por grupo de inscripción

- **Submódulo:** —

**Historia:** Como comité organizador, quiero filtrar el tablero por grupo de inscripción, para analizar por separado a deportistas, personal de apoyo, prensa y demás grupos acreditables.

**Criterios de aceptación:**

- Se agrega al filtro la dimensión «grupos de inscripción» con estos ocho valores, textuales del documento guía: Deportistas · Personal de Apoyo · Prensa · Voluntarios · Autoridades de Juzgamiento (Federaciones) · Comités Organizadores · Proveedores · Otros.
- El filtro convive con los existentes: periodo, región, departamento, tipo de deporte y deporte.

**Adjuntos/referencias:** Levantamiento Inscripción Numérica.docx — imágenes 2 a 7

## HU-IN-14 — Reporte consolidado de inscripción numérica

- **Submódulo:** Reportes

**Historia:** Como comité organizador, quiero descargar un reporte consolidado de lo declarado por todas las delegaciones, para hacer seguimiento y soportar la planeación del evento.

**Criterios de aceptación:**

- El reporte tiene exactamente estas doce columnas, tomadas del reporte propuesto por Daniel: Delegación · Deporte · Modalidad · Sexo · Cupos MASC · Suplentes MASC · Cupos FEM · Suplentes FEM · Cupos mixtos · Fecha de Intención · Rol · Correo Electrónico.
- Una fila por combinación delegación × deporte × modalidad × sexo. Volumen actual del insumo: 3.916 filas.
- Descargable en Excel.

**Adjuntos/referencias:** Inscripción_Numérica_V3.xlsx

## HU-IN-15 — Exportación desde el consolidado

- **Submódulo:** —

**Historia:** Como comité organizador, quiero exportar lo que estoy viendo en el consolidado con los filtros aplicados, para trabajar sobre el corte que me interesa.

**Criterios de aceptación:**

- El botón «Exportar» de la pantalla «Consolidado de intenciones» incluye las nuevas columnas de cupos y cantidades.
- La exportación respeta los filtros y la pestaña activa (Por deporte / Por organización).
- (propuesta — validar) Ninguno de los insumos habla del botón Exportar; se deduce de que ya existe en la pantalla base.

**Adjuntos/referencias:** Levantamiento Inscripción Numérica.docx — imagen 1

## HU-IN-17 — Membrete oficial en las descargas

- **Submódulo:** —

**Historia:** Como comité organizador, quiero que todas las descargas de la plataforma salgan con el membrete oficial del evento, para que sirvan como documento formal ante las delegaciones y el Ministerio.

**Criterios de aceptación:**

- Las descargas de los distintos roles llevan el membrete definido para el evento.
- El certificado de la fase anterior ya trae el encabezado del evento; sirve de referencia.

**Adjuntos/referencias:** Acta 25-ago-2026 · Intención de participación.pdf

## Dónde vive hoy

Hallazgos del código de `suite-web-v2` (verificados):

- **Consolidado de intenciones** (HU-IN-05, 15): existe en `src/app/features/preinscripciones/pages/consolidado/`, ruta `/home/events/:eventCode/consolidado`, con roles EVENT_MANAGER, ADMIN, ROOT, SUPPORT y ACCESS_MANAGER. Su botón Exportar baja el reporte oficial `intencion-de-participacion` en xlsx SIN filtros.
- **Tablero de inscripciones** (HU-IN-10 a HU-IN-13): es un iframe a un dashboard externo (`features/analytics/.../dashboard-frame`). Los textos «Instituciones Registradas», los indicadores y los filtros NO están en este repo; se cambian en ese dashboard externo.

## Notas de revisión (8-oct-2026)

- Consolidado: la pantalla real es una lista de filas desplegables con chips Hombre / Mujer / Mixto y «N organizaciones». Las columnas de Daniel (HU-IN-05) van entre la modalidad y los chips, no entre los indicadores de género.
- HU-IN-10 a HU-IN-13: ya tienen capturas del tablero real (Intercolegiados) como referencia en ADJUNTOS/REFERENCIAS/images/.
- HU-IN-17: el certificado real ya trae un banner superior con los logos del evento, que puede ser el membrete. Falta el acta del 25-ago-2026 para confirmarlo.
- HU-IN-15 sigue marcada «(propuesta — validar)».

### Decisiones del 9-oct-2026 (Jorge Guzmán)

- **D1 · HU-IN-07:** el exceso de cupo **bloquea**. «Cupo excedido: Bloquea» es el valor por defecto; el interruptor «Solo avisa» de «Simular» queda solo como herramienta de demo.
- **D2/D3 · Criterio oficial:** manda lo documentado, con precedencia matriz (transcribe el instructivo de competencia) > hoja de reglas > texto de las HU. Muchos «conflictos» eran complementarios: la hoja da el total por modalidad y la matriz el tope por prueba. Tenis de Campo: 4 + 1 por modalidad y, por prueba, 2 en Individual y 1 pareja en Dobles. Atletismo: hasta 90 en total y 3 por prueba (aviso). Natación artística: equipo de 4 a 8 + 2 reservas (matriz) con máximo 2 hombres en el mixto (hoja), confirmado y validado. Patinaje: el tope de 2 por delegación es solo de Velocidad y por prueba (aviso). Duatlón 3 y Triatlón 4 por género, sin sumarse. Boxeo 13 + 3 / 12 + 3 queda tal cual (sin contraste). `conflictos[]` pasa a `criteriosAplicados[]` y la pantalla dice «Criterio aplicado: …» con la cita; ya no queda ningún dato «por confirmar».
- **D4 · Sin cupo = sin tope:** Billar, Lucha y los géneros en blanco (Atletismo y Ecuestre femenino) se etiquetan «Sin tope en el instructivo»: se capturan sin validar tope y no cuentan como pendientes. (Natación artística femenino toma el 8 + 2 de la matriz, por D3.)
- **D5 · Suplentes en blanco = sin suplentes (cupo 0):** la celda queda deshabilitada con «Sin suplentes». Excepciones documentadas: Surf Shortboard (1 por género, nota de la hoja) y Natación artística (2 reservas, matriz). Si atletas y suplentes están en blanco, es «sin tope».
- **D6 · HU-IN-13:** se queda el filtro de región (Caribe, Andina, Pacífica, Orinoquía, Amazonía, Insular), combinable con los demás; la Federación Deportiva Militar queda «Sin región». «Regionales» como indicador y gráfico sigue retirado (HU-IN-12).
- **D7 · Propuestas P01 a P09:** validadas por Jorge Guzmán.
- **D8 · Equivalencias de nombres V3 → hoja/matriz:** renombres (Esgrima Espada/Florete/Sable → «Única», con el 12 + 3 sumado entre las tres armas; Arquería → Tiro con Arco; Fútbol Salón → Fútbol de Salón; Rugby 7 → Rugby Siete; Tenis Mesa → Tenis de Mesa; SUP Racing → SUP Race) y agrupaciones (Vela Bote, Vela Tabla, Cheer, Performance Cheer, Skateboarding): la fila usa el mayor cupo documentado del grupo y un tooltip lista las modalidades y sus cupos. Filas sin regla por nombre: 0; las 9 filas de Atlántico con un género no habilitado siguen deshabilitadas.
- **D9 · Intenciones posteriores al 30-08:** las fechas hasta el 01-09-2026 son válidas (casos excepcionales); no se marcan ni se filtran.
- **D10 · Hero (reemplazada por D14.4):** las etapas quedan como están y la actual es «Inscripción numérica». Las fechas de la ventana son de ejemplo y se rotulan así.
- **D11 · Rol auxiliar:** captura pero no confirma; la grilla arranca vacía.
- **D12 · Delegaciones (reemplazada por D14.1):** se usan las 33 de la hoja. El acta menciona 34: queda como diferencia sin resolver.
- Tablero (D6): la tabla delegación → región vive en `shared/datos-consolidado.js` (`regiones`), con el criterio y los casos de borde (Antioquia → Andina; Cauca y Nariño → Pacífica; Guainía y Guaviare → Amazonía).

### Decisiones del 16-oct-2026 (respuesta de Daniel, negocio)

- **D14 · Aplicación de las respuestas de Daniel en el comité:**
  1. **34 delegaciones** (32 departamentos + Bogotá D.C. + Federación Deportiva Militar). Se agrega VICHADA al consolidado sin filas ni correo: «Sin intención · habilitada preventivamente» (no hizo la intención; posible permiso extraordinario del comité). Se muestra «34 · 33 con intención + 1 habilitada» en C1, C2, C3, C5 y el tablero; el tablero suma la habilitada solo según región y departamento. Vichada no entra en el avance global ni en «Sin declarar», y no tiene «Recordar» (sin correo).
  2. **Pruebas fuera de esta fase:** la unidad es deporte + modalidad + género; «Varía por prueba» pasa a «Varía según la modalidad». No había columna de matriz en C1/C2.
  3. **Reporte en Excel real** (.xlsx con SheetJS 0.18.5 desde cdnjs, carga perezosa; si falla, CSV con aviso). Doce columnas: Delegación, Deporte, Modalidad, Sexo, Cupos Masculinos, Suplentes Masculinos, Cupos Femeninos, Suplentes Femeninos, Cupos Mixtos, Fecha de registro, Rol registrador, Correo electrónico. Hoja inicial «Membrete» y hoja «Consolidado». C4 respeta los filtros; C5 es siempre el reporte completo. «Rol registrador» = Gestor o Auxiliar (el insumo solo trae Gestor). «Fecha de registro» es la de la intención (2026).
  4. **Etapas oficiales:** Intención de participación (cerró 30-08-2025), Intención en deportes y modalidades (cerró 30-08-2026), Inscripción numérica (presunta apertura 01-03-2027, cierra 30-03-2027), Lista larga (30-05-2027), Nominal (30-09-2027). Se retira «Preinscripción de delegaciones». El indicador del tablero «Preinscripciones» pasa a «Intenciones registradas» (solo rótulo; cifra de ejemplo).
  5. **Tablero C6:** Prensa, Voluntarios, Federaciones, Comités y Proveedores no tienen fase numérica (se inscriben en convocatoria o nominal) y Personal de Apoyo entra desde Lista larga. Se mantiene «sin dato» con el motivo y el indicador «Personal de Apoyo Registrado». Se quita la franja «En proceso · Datos pendientes» y el atenuado en gris: el tablero se ve a color y con los filtros activos.
  6. **Edad:** nada que mostrar (aplica desde lista larga).
- Las menciones de «matriz» en D2, D3 y D8 son decisiones históricas sobre la precedencia de fuentes y se conservan.

## Historias propuestas (validadas por Jorge Guzmán, 9-oct-2026)

## HU-IN-P08 — Declarado contra cupo en el consolidado

- **Submódulo:** Consolidado de intenciones

**Historia:** Como comité organizador, quiero ver en cada fila del consolidado cuánto declaró la delegación frente al cupo, para detectar de un vistazo quién se pasa y quién se queda corto.

**Criterios de aceptación:**

- Cada chip de género (Hombre, Mujer, Mixto) muestra «declarado / cupo» para atletas y para suplentes.
- Un valor por encima del cupo se marca con estado de alerta, y el filtro permite ver solo esos casos.
- Las combinaciones sin cupo parametrizado muestran «sin cupo» en lugar de un número.

**Adjuntos/referencias:** Levantamiento Inscripción Numérica.docx (mockup a mano) · HU-IN-05 (columnas de cupo).

**Nota:** Propuesta del equipo de diseño. Validada por Jorge Guzmán el 9-oct-2026.

## HU-IN-P09 — Seguimiento «quién falta» por delegación

- **Submódulo:** Seguimiento

**Historia:** Como comité organizador, quiero ver qué delegaciones todavía no han declarado o tienen filas pendientes mientras la ventana está abierta, para contactarlas antes del cierre.

**Criterios de aceptación:**

- Lista las delegaciones con filas sin cantidades y cuántas filas les faltan.
- Permite ordenar por cantidad de filas pendientes.
- Permite exportar la lista con el correo de contacto de la delegación.

**Adjuntos/referencias:** HU-IN-14 (columna Correo Electrónico del reporte).

**Nota:** Propuesta del equipo de diseño. Validada por Jorge Guzmán el 9-oct-2026.
