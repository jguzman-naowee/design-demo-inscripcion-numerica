# Módulo de inscripción numérica — rol delegado — historias de usuario

> Fuente: Google Sheet `PR-08_VM_2026-10-01_MODULO_INSCRIPCION_NUMERICA.xlsx` (propietario d***@naowee.com, modificado 2026-10-05).
> Hoja: https://docs.google.com/spreadsheets/d/1Qhh1jiNRdnF5628IZlsMCULt3c1aELsD2XuZrz7RNJM
> Bajado el 2026-10-08, solo la primera pestaña (gid=0). 17 historias, HU-IN-01 a HU-IN-17.
> Solo las 6 HU del gestor de una delegación (delegado). Las otras 11 son de los roles admin y comité; ver ../inscripcion-numerica-fuente/.

## Índice


---

## HU-IN-04 — Grilla de captura de la delegación

- **Submódulo:** Captura de cantidades

**Historia:** Como Gestor de una Delegación, quiero ver los deportes y modalidades en los que mi delegación declaró intención de participación y registrar allí las cantidades, para declarar el tamaño de mi delegación sin salirme de lo que ya manifesté.

**Criterios de aceptación:**

- La grilla lista únicamente las combinaciones deporte + modalidad + género que la delegación declaró en la intención de participación.
- Volumen de referencia del insumo: 3.467 combinaciones (3.916 antes de D19), 33 delegaciones, 40 deportes, 68 modalidades declaradas.
- La delegación solo ve y edita lo suyo

**Adjuntos/referencias:** Levantamiento Inscripción Numérica.docx (mockup a mano) · Inscripción_Numérica_V3.xlsx

## HU-IN-06 — Registro de cantidad de atletas y suplentes

- **Submódulo:** —

**Historia:** Como Gestor de una Delegación, quiero ingresar la cantidad de atletas y de suplentes por deporte, modalidad y género, para declarar formalmente cuántas personas llevará mi delegación.

**Criterios de aceptación:**

- Por cada fila habilitada el sistema permite capturar: cantidad de atletas y cantidad de suplentes, diferenciadas por género (MASC / FEM) ~~y, cuando aplique, para la composición mixta~~ (**reemplazado por D19**: donde la hoja trae cupo mixto no hay columna mixta; se capturan hombres y mujeres y el límite es la suma de ambos).
- Cada valor se valida contra el cupo parametrizado de esa combinación (ver HU-IN-09).

**Adjuntos/referencias:** Inscripción_Numérica_V3.xlsx · DEPORTES MODALIDADES JN 2027.xlsx

## HU-IN-07 — Validación contra el cupo parametrizado

- **Submódulo:** Validaciones

**Historia:** Como sistema, quiero validar que la cantidad de atletas y suplentes registrada no exceda el cupo oficial para esa combinación de deporte, modalidad y género, para que ninguna delegación declare por encima del tope oficial.

**Criterios de aceptación:**

- La validación se resuelve contra el cupo parametrizado de la combinación exacta deporte + modalidad + género, no contra una regla general.
- Atletas y suplentes se validan por separado, cada uno contra su propio tope.
- El mensaje de error indica el cupo máximo de esa fila, no solo que el valor es inválido.

**Adjuntos/referencias:** Inscripción_Numérica_V3.xlsx

## HU-IN-08 — Validación de reglas de composición de equipo

- **Submódulo:** —

**Historia:** Como sistema, quiero aplicar las reglas de composición propias de cada modalidad, para que lo declarado sea inscribible según el reglamento y no solo un número dentro del tope.

**Criterios de aceptación:**

- Las reglas oficiales definen reglas que no son un simple máximo. Ejemplos textuales: Baloncesto 5x5 «máximo 12, mínimo 10 atletas por equipo»; Balonmano «máximo 16, mínimo 14»; Béisbol «máximo 22, mínimo 9»; Voleibol coliseo «mínimo 9, máx 14»; Natación artística equipos «entre 4 y 8 atletas más 2 reservas»; Tiro Deportivo «máx 1 suplente por arma».

**Adjuntos/referencias:** DEPORTES MODALIDADES JN 2027.xlsx

## HU-IN-09 — Validación de topes agregados de la delegación

- **Submódulo:** —

**Historia:** Como sistema, quiero validar los topes que aplican al conjunto de la delegación y no a una fila individual, para que el total declarado respete los límites del evento.

**Criterios de aceptación:**

- Las reglas oficiales traen topes por delegación en varias modalidades: Patinaje «hasta 2 atletas por delegación» por prueba, Tenis «2 atletas por delegación», Triatlón «máx 4 atletas por delegación y género», Tiro Deportivo «máx 2 equipos mixtos por delegación», Tejo «1 atleta por delegación» en individual.

**Adjuntos/referencias:** DEPORTES MODALIDADES JN 2027.xlsx

**Nota (16-oct-2026):** los topes por prueba de este criterio (Patinaje, Tenis, Triatlón, Tiro Deportivo, Tejo) salen de la fase por D14; el texto original se conserva tal cual.

## HU-IN-16 — Certificado de inscripción numérica por delegación

- **Submódulo:** Certificado de cierre

**Historia:** Como Gestor de una Delegación, quiero descargar el certificado oficial de mi inscripción numérica al cierre de la fase, para tener el soporte formal de lo que declaró mi delegación.

**Criterios de aceptación:**

- Mismo formato del certificado de la fase anterior, añadiendo las columnas del reporte propuesto (textual del documento guía).
- Estructura confirmada del certificado anterior: encabezado «XXIII Juegos deportivos nacionales / Córdoba – Sucre 2027»; «Informe generado el DD-MM-AAAA»; «Fecha de cierre de inscripción...: DD-MM-AAAA»; numeración «Pág X de Y»; título del reporte; «DELEGACIÓN: <nombre>»; párrafo de declaración; tabla Deporte · Modalidad · Género · Fecha de intención; y «Fecha de última actualización...».
- Al certificado se le agregan las columnas: Cupos MASC · Suplentes MASC · Cupos FEM · Suplentes FEM · Cupos mixtos (D19: esta última solo se llena en Ecuestre).
- Sale en PDF, una delegación por documento.
- Se habilita al terminar la fase; se puede descargar las veces que se quiera y es siempre el mismo (D17).

**Adjuntos/referencias:** Intención de participación.pdf

## Notas de revisión (8-oct-2026)

- HU-IN-06 remite a «ver HU-IN-09» en su criterio de validación; debe decir HU-IN-07. HU-IN-07 es la validación contra el cupo parametrizado; HU-IN-09 son los topes agregados de la delegación.
- Certificado (HU-IN-16): el PDF real de la fase anterior pone «Fecha de última actualización…» y «DELEGACIÓN: <nombre>» arriba, y «Informe generado el…», «Fecha de cierre de inscripción…» y «Pág X de Y» al pie. La tabla de cabecera es verde.
- Género: el certificado y la hoja de declaraciones escriben Hombre / Mujer / Mixto, no MASC / FEM.
- En la hoja de declaraciones, «Mixto» es un sexo propio de cada fila (como Hombres o Mujeres), no un subtotal. **Reemplazado por D19** salvo en Ecuestre: en las demás modalidades la fila Mixto desaparece de la grilla y se captura como hombres + mujeres.
- HU-IN-04: Atlántico declaró 40 deportes y 84 modalidades, que son 182 filas (78 Hombres, 76 Mujeres, 28 Mixto). La hoja original tenía 33 delegaciones y 3.916 filas, como dice el criterio (3.467 tras D19). Pero el criterio dice 68 modalidades declaradas en total y Atlántico sola declaró 84: hay que revisar cuál es el dato correcto.
- La hoja de reglas NO trae mínimos de equipo ni topes por delegación. Los que usa el demo son los que citan HU-IN-08 y HU-IN-09, y quedan «por confirmar». (9-oct-2026: la matriz sí los trae y manda; ver D2/D3.)
- Conflictos entre la hoja de reglas y las HU (resueltos el 9-oct-2026 con el criterio de D2/D3):
  - Tenis de Campo: hoja 4+1; HU-IN-09 dice «2 atletas por delegación».
  - Baloncesto 5x5: hoja 12+3 suplentes; HU-IN-08 dice «máx 12, mín 10».
  - Natación artística: hoja «10; máx 2 hombres»; HU-IN-08 dice «entre 4 y 8 + 2 reservas».
  - Tejo: hoja 10+1; HU-IN-09 dice «1 atleta por delegación».
  - Triatlón: hoja 7+2; HU-IN-09 dice «máx 4 por delegación y género».

### Decisiones del 9-oct-2026 (Jorge Guzmán)

- **D1 · HU-IN-07:** el exceso de cupo **bloquea**. «Cupo excedido: Bloquea» es el valor por defecto; el interruptor «Solo avisa» de «Simular» queda solo como herramienta de demo. **Reemplazada por D13:** el interruptor ya no existe.
- **D2/D3 · Criterio oficial:** manda lo documentado, con precedencia matriz (transcribe el instructivo de competencia) > hoja de reglas > texto de las HU. Muchos «conflictos» eran complementarios: la hoja da el total por modalidad y la matriz el tope por prueba. Tenis de Campo: 4 + 1 por modalidad y, por prueba, 2 en Individual y 1 pareja en Dobles. Atletismo: hasta 90 en total y 3 por prueba (aviso). Natación artística: equipo de 4 a 8 + 2 reservas (matriz) con máximo 2 hombres en el mixto (hoja), confirmado y validado. Patinaje: el tope de 2 por delegación es solo de Velocidad y por prueba (aviso). Duatlón 3 y Triatlón 4 por género, sin sumarse. Boxeo 13 + 3 / 12 + 3 queda tal cual (sin contraste). **Lo que dice «por prueba» queda superado por D14.** `conflictos[]` pasa a `criteriosAplicados[]` y la pantalla dice «Criterio aplicado: …» con la cita; ya no queda ningún dato «por confirmar».
- **D4 · Sin cupo = sin tope:** Billar, Lucha y los géneros en blanco (Atletismo y Ecuestre femenino) se etiquetan «Sin tope»: se capturan sin validar tope y no cuentan como pendientes. (Natación artística femenino toma el 8 + 2 de la matriz, por D3.)
- **D5 · Suplentes en blanco = sin suplentes (cupo 0):** la celda queda deshabilitada con «Sin suplentes». Excepciones documentadas: Surf Shortboard (1 por género, nota de la hoja) y Natación artística (2 reservas, matriz). Si atletas y suplentes están en blanco, es «sin tope».
- **D6 · HU-IN-13:** se queda el filtro de región (Caribe, Andina, Pacífica, Orinoquía, Amazonía, Insular), combinable con los demás; la Federación Deportiva Militar queda «Sin región». «Regionales» como indicador y gráfico sigue retirado (HU-IN-12).
- **D7 · Propuestas P01 a P09:** validadas por Jorge Guzmán.
- **D8 · Equivalencias de nombres V3 → hoja/matriz:** renombres (Esgrima Espada/Florete/Sable → «Única», con el 12 + 3 sumado entre las tres armas; Arquería → Tiro con Arco; Fútbol Salón → Fútbol de Salón; Rugby 7 → Rugby Siete; Tenis Mesa → Tenis de Mesa; SUP Racing → SUP Race) y agrupaciones (Vela Bote, Vela Tabla, Cheer, Performance Cheer, Skateboarding): la fila usa el mayor cupo documentado del grupo y un tooltip lista las modalidades y sus cupos. Filas sin regla por nombre: 0; las 9 filas de Atlántico con un género no habilitado siguen deshabilitadas.
- **D9 · Intenciones posteriores al 30-08:** las fechas hasta el 01-09-2026 son válidas (casos excepcionales); no se marcan ni se filtran.
- **D10 · Hero:** la etapa actual es «Inscripción numérica». Las etapas y fechas pasan a ser las oficiales por D16.
- **D11 · Rol auxiliar:** ~~captura pero no confirma~~; la grilla arranca vacía. **Reemplazada por D15** en lo de confirmar: la grilla vacía sigue vigente.
- **D12 · Delegaciones:** se usan las 33 de la hoja. El acta menciona 34: queda como diferencia sin resolver.
- **D13 · HU-IN-07, HU-IN-08 y HU-IN-09 (9-oct-2026):** Negocio: los topes no se pueden superar; la grilla limita al máximo y no muestra error. Al teclear, pegar o sumar, el valor se limita al menor entre el cupo de la fila y lo que queda del tope de la delegación (por género, equipos mixtos); junto al campo se lee «máx. N» y, al llegar al límite, el botón «+» se deshabilita (sin etiqueta adicional). Se elimina el interruptor «Cupo excedido: Bloquea | Solo avisa», el estado de celda en error por exceso y los mensajes de exceso; Confirmar ya no se bloquea por topes. Siguen igual los mínimos de equipo (HU-IN-08), que bloquean al confirmar; los topes por prueba, que eran solo informativos, **salen de esta fase por D14**. El panel «Topes y validaciones» muestra el uso («val de max») y «Tope alcanzado». Los textos de las HU quedan fieles al original.
- Fechas de intención (D9): 72 filas del consolidado (entre ellas las 5 de Vela de Atlántico) traen fecha 01-09-2026, posterior al cierre del 30-08-2026 a las 23:59. Son casos excepcionales y válidos: la grilla y el certificado las muestran sin marca.
- Ventana (D10, actualizada por D16): el demo usa por defecto apertura 01-03-2027 a las 08:00 (presunta, sin confirmación oficial) y cierre 30-03-2027 a las 23:59, igual en las pantallas del admin y del delegado, con un «hoy» simulado de 15-03-2027 a las 12:00; todo en `localStorage['naowee-inscnum-ventana']` = `{abre:'2027-03-01T08:00', cierra:'2027-03-30T23:59', hoy:'2027-03-15T12:00'}`. Si el admin guarda `hoy: null`, el estado se calcula con el reloj real.

### Respuestas de Negocio (Daniel), 16-oct-2026

- **D14 · Pruebas fuera de esta fase (HU-IN-07, HU-IN-08 y HU-IN-09):** Negocio: las pruebas no entran en la inscripción numérica; el tope de 4 del Triatlón aplica desde la nominal. La declaración es solo por deporte + modalidad + género. El demo quita todo tope y aviso «por prueba» (Atletismo 3 por prueba, Patinaje, Tejo, Tenis de Campo, Tenis de Mesa, Boxeo y Canotaje por prueba, Triatlón 4 y Duatlón 3 por género, equipos mixtos de Tiro Deportivo) y los mínimos de equipo que la matriz fija por prueba (Ecuestre, Softbol, Squash, Tenis de Mesa). Se conservan: cupos y suplentes por modalidad y género de la hoja (Triatlón 7 + 2 por género, Natación carreras 14 + 2 suplentes), el total por deporte (Atletismo hasta 90), el tope por delegación y género de Esgrima (12 sumando las tres armas) y los mínimos y máximos de equipo de modalidad (D13). El panel «Topes y validaciones» ya no lista avisos, y los criterios aplicados (D2/D3) que hablaban de pruebas dejan de mostrarse. Los textos de las HU quedan fieles al original.
- **D15 · Auxiliar = Gestor (reemplaza HU-IN-P05 y D11):** el auxiliar tiene los mismos permisos que el gestor: declarar, guardar, confirmar, modificar y descargar reportes y certificado. Se quitan los bloqueos y avisos de «solo el gestor confirma». El rol de quien registra («Gestor» o «Auxiliar») queda guardado por fila y sale en el reporte de avance (columna «Rol registrador»).
- **D16 · Etapas y fechas oficiales (HU-IN-P01 y D10):** 1 Intención de participación (cerró 30-08-2025); 2 Intención de participación en deportes y modalidades (cerró 30-08-2026); 3 Inscripción numérica (activa; abre 01-03-2027, presunta y sin confirmación oficial, y cierra 30-03-2027); 4 Inscripción lista larga (hasta 30-05-2027); 5 Inscripción nominal (hasta 30-09-2027). Desaparece «Preinscripción de delegaciones».
- **D17 · Editar tras confirmar (HU-IN-P02, HU-IN-P03 y HU-IN-16):** el delegado puede modificar su declaración cuantas veces quiera mientras la ventana esté abierta; vale la última versión guardada. Tras confirmar, la grilla queda a la vista con «Modificar declaración» hasta el cierre. Al cierre solo hay lectura, reportes y certificado, salvo un cambio extraordinario autorizado por el comité. El certificado se habilita al terminar la fase, se descarga las veces que se quiera y es siempre el mismo.
- **D18 · Reporte de avance en Excel real (HU-IN-P10):** «Descargar avance» genera un .xlsx (SheetJS, carga perezosa desde cdnjs, versión 0.18.5) con una hoja «Membrete» y una hoja «Avance». Si la librería no carga, se descarga el CSV anterior con un aviso. Se mantiene la vista previa PDF del borrador con su leyenda. Columnas exactas y en este orden: Delegación, Deporte, Modalidad, Sexo, Cupos Masculinos, Suplentes Masculinos, Cupos Femeninos, Suplentes Femeninos, Cupos Mixtos, Fecha de registro, Rol registrador, Correo electrónico.
- **D19 · Cupos mixtos como suma de hombres + mujeres (19-oct-2026, Daniel):** la columna «Cupos mixtos» no sirve. En las modalidades cuya fila de hoja trae «Cupos Mixtos» por sus pruebas (todas las que hoy traen género Mixto en la hoja de reglas, **excepto Ecuestre**, que es completamente mixto y conserva el cupo mixto), la grilla muestra Atletas y Suplentes de Hombres y de Mujeres, y el **límite general es la suma de ambas columnas** contra el cupo mixto total de la hoja (atletas con atletas, suplentes con suplentes). Ejemplo: «4 en total · 2 MASC + 2 FEM» → hombres + mujeres ≤ 4. Si la modalidad ya tenía filas Hombres y Mujeres con cupo propio, se mantiene el tope de cada género y además aplica el límite conjunto (vale el menor); si solo existía la fila Mixto, se crean las filas de hombres y mujeres, limitadas solo por la suma. El límite es duro (motor `limOf`/`setV`): al llegar a la suma el valor se limita y el botón «+» queda deshabilitado; el panel «Topes y validaciones» lista «Hombres + Mujeres: val de max». La fila Mixto desaparece de la grilla, de los contadores y de los totales: «Cupos mixtos» en la barra inferior y en el resumen solo cuenta Ecuestre y se oculta cuando es 0. El xlsx de «Descargar avance» mantiene las 12 columnas exactas; «Cupos Mixtos» solo se llena en Ecuestre. **Reemplaza** la parte de cupos mixtos de HU-IN-06 y HU-IN-16, de las notas de revisión («Mixto es un sexo propio de cada fila»), de HU-IN-P01 y de D18.
  - Interpretación del demo: el límite conjunto sale de `shared/limites-conjuntos.js`, el mismo que parametriza el Admin (A4) y que lee el comité (C1); la grilla ya no lo deriva. Hoy: 15 reglas con límite definido (p. ej. Triatlón Triathlon 4, Natación artística 8 + 2, Cheer 12 + 1; en una agrupación vale el mayor del grupo) y 12 sin definir (Ajedrez ×3, Arquería Compuesto, Atletismo, Bádminton, Billar ×2, Patinaje artístico, Taekwondo, Tenis de Campo y Tenis de Mesa): ahí no se valida un tope conjunto, solo se quita la fila Mixto y cada género conserva su cupo.
  - Ajedrez (la hoja lo trae con mixto y sin cupo numérico, es decir, sin límite conjunto definido): las filas de Hombres que estaban deshabilitadas por la hoja pasan a habilitarse, con su cupo por género. Ecuestre: sus tres filas Mixto estaban deshabilitadas por no tener regla; se habilitan «sin tope» para que el cupo mixto exista. Ambas lecturas se pueden revertir sin tocar el resto.
  - Efecto en la grilla: de 182 declaraciones de intención se pasa a 163 filas de captura (se retiran 22 filas Mixto y se crean 3 de hombres o mujeres que no existían).
- **Membrete (19-oct-2026):** el membrete queda como está (el banner del certificado) y aplica a todas las descargas: certificado, vista previa del avance y hoja «Membrete» del Excel.
- Numeración: D14 es la que dictó Negocio; D15 a D19 las asignó el equipo de diseño y se pueden renumerar sin tocar el contenido.

## Historias propuestas (validadas por Jorge Guzmán, 9-oct-2026)

## HU-IN-P01 — Hero con fases y estado de la delegación

- **Submódulo:** Inicio

**Historia:** Como Gestor de una Delegación, quiero ver en la parte superior en qué fase está la inscripción y cuál es el estado de mi delegación, para saber qué puedo hacer hoy y cuánto falta para el cierre.

**Criterios de aceptación:**

- La línea de tiempo muestra las cinco etapas oficiales (D16): 1 Intención de participación (cerró 30-08-2025), 2 Intención de participación en deportes y modalidades (cerró 30-08-2026), 3 Inscripción numérica (activa; abre 01-03-2027, presunta, y cierra 30-03-2027), 4 Inscripción lista larga (hasta 30-05-2027) y 5 Inscripción nominal (hasta 30-09-2027). Las etapas 4 y 5 aparecen como «próximamente».
- Muestra indicadores de avance (combinaciones con cantidades sobre las declaradas) y los días restantes al cierre.
- Si la ventana aún no abre, muestra la fecha de apertura en lugar de los días al cierre.

**Adjuntos/referencias:** Ninguno en la hoja. Precedente: Intención de participación.pdf (fase anterior).

**Nota:** Propuesta del equipo de diseño. Validada por Jorge Guzmán el 9-oct-2026.

## HU-IN-P02 — Estados de la ventana vistos por el delegado

- **Submódulo:** Ventana de inscripción

**Historia:** Como Gestor de una Delegación, quiero saber de un vistazo si la ventana está cerrada, abierta o aún no abre, para no intentar registrar fuera de plazo.

**Criterios de aceptación:**

- Antes de la apertura: la pantalla muestra la fecha y hora de apertura y no habilita la captura.
- Abierta: muestra la fecha y hora de cierre y habilita la captura.
- Abierta: la delegación puede modificar la declaración cuantas veces quiera; vale la última versión guardada (D17).
- Cerrada: la delegación queda en solo lectura y se muestra la fecha de cierre; solo hay reportes y certificado, salvo un cambio extraordinario del comité (D17).

**Adjuntos/referencias:** Precedente: HU-IN-03 (la intención de participación cerró el 30-08-2026).

**Nota (16-oct-2026):** ver D16 y D17.

**Nota:** Propuesta del equipo de diseño. Validada por Jorge Guzmán el 9-oct-2026.

## HU-IN-P03 — Ciclo de guardado de la grilla

- **Submódulo:** Captura de cantidades

**Historia:** Como Gestor de una Delegación, quiero saber cuándo tengo cambios sin guardar y confirmar antes de guardar, para no perder ni enviar cifras por error.

**Criterios de aceptación:**

- Con cambios sin guardar, la pantalla lo indica de forma visible y el botón de guardar queda activo.
- Antes de guardar, un resumen muestra qué filas cambian (atletas y suplentes) y pide confirmar.
- Si el guardado falla, se conserva lo escrito y el error se muestra con opción de reintentar.
- Tras confirmar, la declaración sigue modificable hasta el cierre con «Modificar declaración» (D17).

**Adjuntos/referencias:** Ninguno en la hoja. Base: HU-IN-04 y HU-IN-06.

**Nota:** Propuesta del equipo de diseño. Validada por Jorge Guzmán el 9-oct-2026.

## HU-IN-P04 — Resumen de la delegación

- **Submódulo:** Resumen

**Historia:** Como Gestor de una Delegación, quiero ver el total de mi delegación por género y el estado de cada deporte, para revisar mi declaración antes del cierre.

**Criterios de aceptación:**

- Muestra totales de atletas y de suplentes por género (Hombre, Mujer; Mixto solo aparece cuando es mayor que cero, es decir, con Ecuestre, por D19).
- Muestra el estado de cada deporte (sin cantidades, con cantidades, con error de validación).
- Los totales coinciden con la suma de las filas de la grilla (HU-IN-04).

**Adjuntos/referencias:** Ninguno en la hoja. Fuente de datos: HU-IN-04 y HU-IN-06.

**Nota:** Propuesta del equipo de diseño. Validada por Jorge Guzmán el 9-oct-2026.

## HU-IN-P05 — Rol auxiliar: mismos permisos que el gestor

- **Submódulo:** Roles y permisos

**Historia:** Como auxiliar de una delegación, quiero registrar, guardar y confirmar la declaración igual que el gestor, para sacar adelante la inscripción sin depender de que él esté disponible.

**Criterios de aceptación:**

- El auxiliar tiene los mismos permisos que el gestor: declarar, guardar, confirmar, modificar y descargar los reportes y el certificado (D15).
- No hay bloqueos ni avisos del tipo «solo el gestor confirma».
- Lo que se guarda queda marcado con el rol de quien registra («Gestor» o «Auxiliar») y la fecha, y ese rol sale en el reporte de avance.

**Adjuntos/referencias:** Ninguno en la hoja.

**Nota:** Propuesta del equipo de diseño. Validada por Jorge Guzmán el 9-oct-2026 con «el auxiliar captura pero no confirma»; **cambiada por respuesta de Negocio (Daniel) el 16-oct-2026 (D15)**.

## HU-IN-P10 — Descargar avance de la declaración

- **Submódulo:** Captura de cantidades

**Historia:** Como Gestor de una Delegación, quiero descargar un reporte ligero de mi avance mientras inscribo, para revisar cómo voy antes de confirmar.

**Criterios de aceptación:**

- Mientras la declaración es un borrador (sin confirmar), la barra de la grilla y el inicio ofrecen «Descargar avance».
- El reporte lista por deporte, modalidad y género los atletas y suplentes declarados frente al cupo, con los totales, la delegación, la fecha y hora de generación y el estado «Borrador, sin confirmar».
- La vista previa en PDF (imprimir o guardar como PDF) conserva el membrete del certificado y la leyenda y marca de agua «BORRADOR — no es el certificado».
- «Descargar Excel» genera un archivo .xlsx real (D18) con una hoja inicial «Membrete» (evento, título del reporte, leyenda de borrador, delegación, estado, fecha de generación y fecha de cierre) y una hoja «Avance» con una fila por combinación deporte + modalidad + sexo y estas columnas exactas, en este orden: Delegación, Deporte, Modalidad, Sexo, Cupos Masculinos, Suplentes Masculinos, Cupos Femeninos, Suplentes Femeninos, Cupos Mixtos, Fecha de registro, Rol registrador, Correo electrónico.
- En «Sexo» va Masculino, Femenino o Mixto según la fila (Mixto solo en Ecuestre, D19); las columnas de los otros géneros y las celdas sin suplentes quedan vacías. «Fecha de registro», «Rol registrador» (Gestor o Auxiliar) y «Correo electrónico» se llenan solo en las filas que alguien registró.
- Si la librería del Excel no carga, se descarga el CSV con las mismas filas y un aviso en pantalla.
- No reemplaza al certificado de HU-IN-16, que solo se descarga al cierre.

**Adjuntos/referencias:** Ninguno en la hoja. Base: HU-IN-16 (membrete) y la vista de confirmación.

**Nota:** Propuesta del equipo de diseño por pedido de Negocio (9-oct-2026). Pendiente de validación de Jorge Guzmán. Formato Excel y columnas por respuesta de Negocio (Daniel), 16-oct-2026.
