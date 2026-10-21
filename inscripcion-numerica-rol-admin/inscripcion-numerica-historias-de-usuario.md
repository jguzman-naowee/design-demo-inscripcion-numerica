# Módulo de inscripción numérica — rol admin de plataforma — historias de usuario

> Fuente: Google Sheet `PR-08_VM_2026-10-01_MODULO_INSCRIPCION_NUMERICA.xlsx` (propietario d***@naowee.com, modificado 2026-10-05).
> Hoja: https://docs.google.com/spreadsheets/d/1Qhh1jiNRdnF5628IZlsMCULt3c1aELsD2XuZrz7RNJM
> Bajado el 2026-10-08, solo la primera pestaña (gid=0). 17 historias, HU-IN-01 a HU-IN-17.

## Índice

- **HU-IN-01** · Parametrización de cupos · Cupos máximos por deporte, modalidad y género
- **HU-IN-02** · — · Cupos de las modalidades mixtas
- **HU-IN-03** · — · Ventana de la fase de inscripción numérica

> Las otras 14 HU son de los roles delegado y comité; ver ../inscripcion-numerica-fuente/

---

## HU-IN-01 — Cupos máximos por deporte, modalidad y género

- **Submódulo:** Parametrización de cupos

**Historia:** Como administrador de la plataforma, quiero que el sistema tenga cargado el cupo máximo de atletas y de suplentes de cada deporte, modalidad y género según el instructivo de competencia, para que toda cantidad que registre una delegación se valide contra el tope oficial.

**Criterios de aceptación:**

- El sistema almacena, por cada combinación deporte + modalidad + género, el cupo máximo de atletas y el de suplentes.
- En la pestaña Cupos cada fila es una modalidad: una sola celda «Hombres / Mujeres» resume el cupo de atletas y de suplentes de ambos géneros (un solo valor si son iguales) y un solo botón «Editar cupo» abre un formulario que muestra a la vez los campos de Hombres y Mujeres (y, solo en Ecuestre, Mixto), con atletas y suplentes en bloques separados.
- El cupo NO es una constante: «los instructivos de competencia tienen parámetros diferentes entre ellos. Es un dato parametrizable por modalidad.

**Adjuntos/referencias:** Inscripción_Numérica_V3.xlsx · DEPORTES MODALIDADES JN 2027.xlsx

## HU-IN-02 — Cupos de las modalidades mixtas

- **Submódulo:** —

**Historia:** Como administrador de la plataforma, quiero parametrizar el cupo de las modalidades de composición mixta, para que las delegaciones puedan declarar equipos mixtos dentro del tope reglamentario.

**Criterios de aceptación:**

- El sistema soporta un cupo propio para las modalidades marcadas como mixtas.
- El instructivo oficial sí define composiciones mixtas: Tiro con Arco equipos mixtos (1 atleta de cada género), Natación artística equipos (máximo 2 hombres), Porrismo Nivel 4 (4 MASC + 8 FEM + 1 suplente de cualquier género), Triatlón relevo (2 FEM + 2 MASC).

**Adjuntos/referencias:** Inscripción_Numérica_V3.xlsx · DEPORTES MODALIDADES JN 2027.xlsx

## HU-IN-03 — Ventana de la fase de inscripción numérica

- **Submódulo:** —

**Historia:** Como administrador de la plataforma, quiero definir la fecha y hora de apertura y de cierre de la fase de inscripción numérica, para que las delegaciones solo registren dentro del plazo oficial y el cierre dispare la emisión de certificados.

**Criterios de aceptación:**

- El sistema acepta registros únicamente dentro de la ventana definida.
- Al cerrar la ventana se congela lo registrado y se habilita el certificado de cierre
- Precedente de la fase anterior: la intención de participación cerró el 30-08-2026, y esa fecha se imprime en el certificado.

**Adjuntos/referencias:** Intención de participación.pdf (certificado fase anterior)

## Notas de revisión (8-oct-2026)

- Cupos por género: la hoja de reglas trae cupos distintos según el género en varias modalidades (Boxeo 13+3 y 12+3; Rifle 27+3 y 21+3; Cheer nivel 4 con 4 MASC + 8 FEM). El parámetro debe guardar atletas y suplentes por modalidad y género, no un solo valor por modalidad.
- Géneros habilitados: no todas las modalidades admiten los tres géneros. El parámetro debe registrar cuáles aplican.
- Celdas combinadas: en la hoja de reglas, los cupos de varias modalidades comparten celda. La carga debe asignar ese valor a cada modalidad de la celda.
- Modalidades sin cupo: Billar y Lucha no tienen cupo en la hoja. Definir si se cargan sin tope o se bloquean. (Resuelto en D4: sin tope.)
- Notas de la hoja: algunas filas dicen «El instructivo no menciona suplentes». Esos suplentes quedan por confirmar. (Resuelto en D5: sin suplentes.)
- Error de escritura: el nombre «Actividades Subacautic*as*» tiene un error en la hoja de reglas. Debe escribirse «Actividades Subacuáticas», como en HU-IN-05.
- Cupos prellenados: la hoja de declaraciones trae cupos distintos a la de reglas (ejemplos: Subacuáticas Hombres 9+1 vs 18+2; Ajedrez Mujeres 2+1 vs 5+1). Manda la hoja de reglas.
- Nombres: 16 combinaciones de nombres no coinciden entre las dos hojas (Esgrima Espada/Florete/Sable vs «Única»; Vela Bote/Tabla vs submodalidades; Porrismo; Surf; Skateboarding; Tiro con Arco vs Arquería). Se resuelven con un mapa de equivalencias. (Resuelto en D8.)
- Fecha de intención: algunas filas traen fecha hasta el 01-09-2026, posterior al cierre del 30-08. Revisar esas filas antes de cargarlas. (Resuelto en D9: son válidas.)

### Decisiones del 9-oct-2026 (Jorge Guzmán)

- **D1 · HU-IN-07:** el exceso de cupo **bloquea**. «Cupo excedido: Bloquea» es el valor por defecto; el interruptor «Solo avisa» de «Simular» queda solo como herramienta de demo.
- **D2/D3 · Criterio oficial:** manda lo documentado, con precedencia matriz (transcribe el instructivo de competencia) > hoja de reglas > texto de las HU. Muchos «conflictos» eran complementarios: la hoja da el total por modalidad y la matriz el tope por prueba. Tenis de Campo: 4 + 1 por modalidad y, por prueba, 2 en Individual y 1 pareja en Dobles. Atletismo: hasta 90 en total y 3 por prueba (aviso). Natación artística: equipo de 4 a 8 + 2 reservas (matriz) con máximo 2 hombres en el mixto (hoja), confirmado y validado. Patinaje: el tope de 2 por delegación es solo de Velocidad y por prueba (aviso). Duatlón 3 y Triatlón 4 por género, sin sumarse. Boxeo 13 + 3 / 12 + 3 queda tal cual (sin contraste). `conflictos[]` pasa a `criteriosAplicados[]` y la pantalla dice «Criterio aplicado: …» con la cita; ya no queda ningún dato «por confirmar».
- **D4 · Sin cupo = sin tope:** Billar, Lucha y los géneros en blanco (Atletismo y Ecuestre femenino) se etiquetan «Sin tope en el instructivo»: se capturan sin validar tope y no cuentan como pendientes. (Natación artística femenino toma el 8 + 2 de la matriz, por D3.)
- **D5 · Suplentes en blanco = sin suplentes (cupo 0):** la celda queda deshabilitada con «Sin suplentes». Excepciones documentadas: Surf Shortboard (1 por género, nota de la hoja) y Natación artística (2 reservas, matriz). Si atletas y suplentes están en blanco, es «sin tope».
- **D6 · HU-IN-13:** se queda el filtro de región (Caribe, Andina, Pacífica, Orinoquía, Amazonía, Insular), combinable con los demás; la Federación Deportiva Militar queda «Sin región». «Regionales» como indicador y gráfico sigue retirado (HU-IN-12).
- **D7 · Propuestas P01 a P09:** validadas por Jorge Guzmán.
- **D8 · Equivalencias de nombres V3 → hoja/matriz:** renombres (Esgrima Espada/Florete/Sable → «Única», con el 12 + 3 sumado entre las tres armas; Arquería → Tiro con Arco; Fútbol Salón → Fútbol de Salón; Rugby 7 → Rugby Siete; Tenis Mesa → Tenis de Mesa; SUP Racing → SUP Race) y agrupaciones (Vela Bote, Vela Tabla, Cheer, Performance Cheer, Skateboarding): la fila usa el mayor cupo documentado del grupo y un tooltip lista las modalidades y sus cupos. Filas sin regla por nombre: 0; las 9 filas de Atlántico con un género no habilitado siguen deshabilitadas.
- **D9 · Intenciones posteriores al 30-08:** las fechas hasta el 01-09-2026 son válidas (casos excepcionales); no se marcan ni se filtran.
- **D10 · Hero:** las etapas quedan como están y la actual es «Inscripción numérica». Las fechas de la ventana son de ejemplo y se rotulan así.
- **D11 · Rol auxiliar:** captura pero no confirma; la grilla arranca vacía.
- **D12 · Delegaciones:** se usan las 33 de la hoja. El acta menciona 34: queda como diferencia sin resolver.
- Pestaña Cupos tras las decisiones: «Sin tope en el instructivo» reemplaza a «Sin cupo definido» y «En blanco en la hoja» (no es pendiente; acción «Poner tope»), y desaparecen el filtro y el conteo «Suplentes sin definir». A4 avisa las modalidades que habilitan Mixto sin composición (por ejemplo Tiro con Arco · Compuesto).

## Historias propuestas (validadas por Jorge Guzmán, 9-oct-2026)

## HU-IN-P06 — Carga masiva de cupos desde Excel

- **Submódulo:** Parametrización de cupos

**Historia:** Como administrador de la plataforma, quiero cargar los cupos de todas las modalidades desde un Excel con vista previa y errores por fila, para no capturar cientos de combinaciones a mano.

**Criterios de aceptación:**

- Antes de confirmar, la vista previa muestra fila por fila qué se va a crear o cambiar.
- Las filas con error se marcan con su motivo: nombre de modalidad sin equivalencia, cupo no numérico o género no habilitado para la modalidad.
- Los nombres del Excel se resuelven con el mapa de equivalencias; un nombre sin equivalencia es un error de fila.

**Adjuntos/referencias:** DEPORTES MODALIDADES JN 2027.xlsx (hoja de reglas).

**Nota:** Propuesta del equipo de diseño. Validada por Jorge Guzmán el 9-oct-2026.

## HU-IN-P07 — Cambios de cupo a mitad de fase

- **Submódulo:** Parametrización de cupos

**Historia:** Como administrador de la plataforma, quiero cambiar un cupo mientras la ventana está abierta sabiendo qué delegaciones se afectan, para corregir un tope sin dejar a nadie fuera por sorpresa.

**Criterios de aceptación:**

- Antes de guardar, lista las delegaciones que ya declararon por encima del nuevo cupo o que usan esa combinación.
- Al guardar, avisa a esas delegaciones.
- Cada cambio queda registrado con quién lo hizo, cuándo, el valor anterior y el nuevo.

**Adjuntos/referencias:** Ninguno en la hoja. Base: HU-IN-01 y HU-IN-03.

**Nota:** Propuesta del equipo de diseño. Validada por Jorge Guzmán el 9-oct-2026.

### Decisiones del 16-oct-2026 · D14 (respuestas de Daniel, negocio)

- **D14.1 · Pruebas fuera de esta fase:** la inscripción numérica es solo Deporte + Modalidad + Género. A1 pierde la columna «Matriz», los KPI de pruebas casadas y el filtro de parametrización; los topes por prueba se ocultan (criterios reescritos). Se mantienen cupos y suplentes por modalidad y género y los topes por delegación y por género por deporte. Las etiquetas «según matriz» pasan a «según instructivo».
- **D14.2 · Ventana y etapas (A5):** valores por defecto `abre 2027-03-01T08:00`, `cierra 2027-03-30T23:59`, `hoy 2027-03-15T12:00` en `localStorage['naowee-inscnum-ventana']` (el valor de `hoy` ahora lleva hora). Rótulo «Fechas de ejemplo»; la apertura es «presunta, sin confirmación oficial». La card pasa a «Intención de participación en deportes y modalidades · Cerrada · 30-08-2026 · 23:59». Etapas: intención de participación (30-08-2025), intención en deportes y modalidades (30-08-2026), inscripción numérica (cierra 30-03-2027), lista larga (30-05-2027), nominal (30-09-2027). Fuera de la ventana nadie cambia nada en la plataforma.
- **D14.3 · Mixtos (A4):** solo Ecuestre es mixto abierto (se habilita Mixto en sus tres modalidades, sin composición fija). Las demás modalidades con Mixto son pruebas mixtas con especificaciones del instructivo: card informativa con el cupo mixto de la hoja, sin alerta «sin composición», sin editor y sin chips en A1. *(Reemplazado en lo que toca a las pruebas mixtas por D19, 19-oct-2026.)*
- **D14.4 · Cambios a mitad de fase (A6):** si el cupo baja con declaraciones, se recalcula, se avisa a las delegaciones afectadas y se registra (quién, cuándo, antes → después, cuántas delegaciones). Se muestra en la confirmación, en el resultado y en el registro. El encargado departamental solo cambia dentro de la ventana; fuera, solo un cambio extraordinario autorizado por el comité.
- **D14.5 · 34 delegaciones:** el universo es 34 (33 con intención en deportes y modalidades + Vichada, habilitada de forma preventiva por un posible permiso extraordinario). Sustituye a D12. Las «afectadas» salen de las declaraciones y no dependen de si el consolidado trae 33 o 34.

### Decisiones del 19-oct-2026 · D19 (Daniel, negocio)

- **D19 · Límite conjunto Hombres + Mujeres:** la columna «Cupos mixtos» no sirve. En las 27 modalidades que traían una fila Mixto en la hoja de reglas (todas salvo Ecuestre, que es completamente mixta y conserva el cupo mixto) se habilitan Hombres y Mujeres, y el límite general es la **suma de ambos** (atletas con atletas, suplentes con suplentes) contra el cupo mixto total de la hoja. Ejemplo: «4 en total · 2 MASC + 2 FEM» → hombres + mujeres ≤ 4. Si la modalidad ya tiene cupo propio por género, cada uno se mantiene y además aplica el límite conjunto.
- **A1:** desaparecen las filas Mixto fuera de Ecuestre; la indicación «Límite conjunto Hombres + Mujeres: N atletas + M suplentes» va en la columna Notas de las filas Hombres y Mujeres. Los géneros recién habilitados sin cupo propio muestran «Rige el límite conjunto» (o «Sin tope en el instructivo» si la modalidad no tiene límite). Nuevo filtro de estado «Con límite conjunto». El filtro de género «Mixto» solo muestra Ecuestre.
- **A3:** el formulario sustituye la casilla «Modalidad mixta» por los campos de límite conjunto (atletas y suplentes); no admiten negativos ni texto, reparten el cupo entre ambos géneros en vivo (ver el último ajuste de A3) y avisan si ya hay delegaciones que declararon la modalidad (se recalcula, se avisa y se registra).
- **A4:** pasa a «Límites conjuntos» (el hash `#a4` no cambia): card con las modalidades afectadas, su límite de atletas y de suplentes y su estado (Definido, Por revisar, Sin límite definido), y card «Mixto abierto» solo con Ecuestre. Se elimina la edición de composición.
- **A2:** la plantilla pide «Límite conjunto atletas» y «Límite conjunto suplentes»; «Cupos mixtos» solo se llena en Ecuestre. La vista previa muestra el límite por fila.
- **Sin límite en la hoja:** 12 de las 27 modalidades no traen cupo mixto; quedan «Sin límite definido» y no se valida hasta que el admin lo ponga.
- **Fuente única:** la base de estos 27 límites vive en `shared/limites-conjuntos.js` y la leen igual el Admin (A1/A3/A4), el comité (C1/C2) y la delegación (N2); A3/A4 solo cambian el estado de la sesión. Las 25 combinaciones del comité (13 definidas, 12 sin definir) salen de las mismas 27 reglas.
- **Por confirmar con Daniel:** en 8 modalidades el límite de la hoja o del instructivo (equipos de 2 a 4) es menor que el cupo de un género (por ejemplo Subacuáticas 4 frente a 18). Se aplica tal cual y se marcan «Por revisar».
- **Membrete:** queda como está (banner del certificado de referencia) y rige para todas las descargas. En el Admin la única vista con formato es el certificado de cierre, que ya lo lleva; el informe de errores .csv es un archivo de datos sin membrete.

### Ajustes de diseño del 21-oct-2026 (DC-249, DC-250, DC-253)

- **DC-249 · Orden de pestañas:** «Ventana de la fase» (A5) pasa a ser la primera pestaña y la pantalla de entrada al Admin sin hash; luego «Cupos» y «Límites conjuntos». Los hashes `#a1`…`#a6` no cambian.
- **DC-250 · A1:** el título «Cupos por modalidad», la búsqueda y los selectores quedan dentro de la misma card que la tabla y la paginación.
- **DC-253 · Una fila por modalidad (A1/A3):** la tabla pierde la columna Género y las filas por género; la celda «Cupo Hombres / Mujeres» resume ambos («H: 13 + 3 · M: 12 + 3», o «12 + 3 · Hombres y Mujeres» si son iguales; en Ecuestre se agrega «Mixto»). El contador del encabezado cuenta modalidades. Los filtros de género, «Cupo distinto por género», «Sin suplentes» y «Con límite conjunto» actúan sobre la modalidad (basta con que un género cumpla). A3 es un formulario por modalidad que edita ambos géneros a la vez, sin selector; el mínimo y el límite conjunto son de toda la modalidad (el tope por delegación ya no se edita aquí; ver DC-317). Se guarda todo junto, pero el registro de cambios anota una línea por género y otra «toda la modalidad». Si un género baja con declaraciones, rige el flujo de A6 (recalcula, avisa, registra). A2 sigue leyendo filas H/M/X y las agrupa por modalidad. El cupo Mixto de Ecuestre, antes sin dato, ahora es editable.
- **DC-254 · A1:** se quita el interruptor «Cupos distintos por género»; la opción «Cupo distinto por género» del selector «Estados» queda como único acceso.
- **DC-255 · A1:** la caja de búsqueda crece y ocupa el espacio sobrante de la fila; «Deportes», «Géneros» y «Estados» van a su derecha con su ancho natural. Una fila desde 900 px; apilado en móvil.
- **A3 · Hombres y Mujeres a la vez, y «Suplentes por arma» donde aplica:** el formulario sale sin pestañas de género: secciones «Atletas» y «Suplentes», cada una con el cupo máximo (entre ambos) primero y debajo los campos Hombres | Mujeres (y Mixto solo en Ecuestre). Si la modalidad tiene límite conjunto, ese total reparte: al editar un género, el máximo del otro pasa a «total − lo ya asignado» (se muestra bajo cada campo como «máx. N según el total»), el valor que lo supera se ajusta con un aviso suave y, si se baja el total por debajo de lo repartido, se ajusta el campo editado en último lugar. Sin límite conjunto, los campos son independientes y el total queda vacío («Sin límite»). Si una modalidad llega con un reparto que ya supera el total (por ejemplo Subacuáticas, 18 + 18 frente a 4), se avisa en lenguaje natural y el reparto se corrige al editar. «Suplentes por arma» se muestra solo en las modalidades cuya regla lo trae (hoy Tiro Deportivo: Rifle, Pistola y Escopeta; si ninguna modalidad lo trajera, quedaría disponible para todas): bloque con explicación, máximo por arma (obligatorio, entero ≥ 0, sin superar el cupo de suplentes) y las armas del deporte a la vista. El registro conserva «suplentes por arma X → Y», una línea por género y el aviso a delegaciones al bajar un cupo.
- **DC-315 · A3, Atletas:** el total pasa a ir primero, como «Cupo máximo de atletas (entre ambos)», con la ayuda «Hombres y Mujeres se reparten este máximo». Hombres y Mujeres quedan debajo, con la misma lógica viva (editar uno recalcula el máximo del otro). Si la modalidad no tiene límite conjunto, el total no se edita: se ve vacío con «Sin límite».
- **DC-316 · A3, Suplentes:** igual: «Cupo máximo de suplentes (entre ambos)» primero y luego Hombres y Mujeres. Sin total definido, el campo queda vacío con el texto «Sin límite» y la ayuda «Sin total: Hombres y Mujeres son independientes».
- **DC-317 · A3 sin tope por delegación:** se quitan del formulario «Tope por delegación (toda la modalidad)» y «El tope se cuenta», porque los máximos de arriba ya fijan los límites. El dato y su validación en el Delegado se conservan, y A2 sigue leyéndolo. Si la modalidad lo tiene, se muestra bajo «Atletas» como texto: «Tope por delegación: N». A1 conserva la columna «Tope por delegación» y A2 la columna de la plantilla; A6 no lo menciona.
- **DC-318 · A3 sin cards internas:** «Atletas», «Suplentes» y «Suplentes por arma» son secciones planas separadas por una línea fina, con el título en peso 600; sin cajas anidadas.
- **DC-319 · A3, el mínimo junto al máximo:** la sección «Mínimo» desaparece y su campo pasa al bloque «Atletas», como «Mínimo de atletas», lado a lado con «Cupo máximo de atletas (entre ambos)» (una columna bajo ~480 px). Debajo siguen Hombres | Mujeres y, si existe, «Tope por delegación: N». El máximo conserva su comportamiento (editable solo con límite conjunto; sin él, solo lectura). Si el mínimo supera el cupo máximo entre ambos o la suma de los cupos, se muestra un aviso suave amarillo que no impide guardar; no admite negativos. Guardar sigue registrando «mínimo X → Y» como línea de toda la modalidad.
