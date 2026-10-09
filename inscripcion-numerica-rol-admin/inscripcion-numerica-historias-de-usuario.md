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
