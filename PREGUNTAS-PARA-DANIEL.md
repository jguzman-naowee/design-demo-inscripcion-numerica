# Inscripción numérica: preguntas para Daniel

Fecha: 9-oct-2026. Preparado por diseño (Jorge Guzmán) a partir del demo y de los archivos del levantamiento.
Cómo responder: para cada pregunta, marcar **✅ correcto** o **✏️ cambiar a…**. Cada una trae lo que el demo asume hoy.

## A. Reglas del negocio (lo que más cambia el comportamiento)

**Q1. ¿Superar el cupo bloquea o solo avisa?** ✅ Resuelta por negocio (9-oct-2026).
Los topes no se pueden superar: la grilla limita al máximo y no muestra error. El demo ya no tiene el interruptor «Bloquea / Solo avisa».
Queda por confirmar solo con el acta del 11-ago («no restrictiva en cupos»), que parece hablar de otra cosa.

**Q2. ¿La delegación declara por modalidad o por prueba?**
La matriz tiene 351 pruebas, y varios topes son por prueba: Atletismo «hasta 3 atletas por prueba», Patinaje velocidad 2 o 3 según la prueba, Tenis 2 en Individual y 1 pareja en Dobles, Tejo 1 en individual.
Hoy asumimos: declara por **modalidad** (84 combinaciones en Atlántico) y los topes por prueba solo **avisan**.
Si declara por prueba, la grilla crece de 182 a cientos de filas por delegación.

**Q3. Las reglas por equipos: ¿se declara el número de equipos?**
Ejemplos: «máx. 2 equipos mixtos por delegación» (Tiro), «1 pareja por delegación» (Tenis dobles), «dos botes por género y modalidad» (Vela).
Hoy asumimos: se declaran **personas**, no equipos; el tope de equipos se calcula sobre los cupos mixtos.

**Q4. Cupo mixto: ¿son atletas y suplentes, o un solo número?**
La hoja de declaraciones trae «Cupos mixtos» vacío en las 3.916 filas. La hoja de reglas lo escribe como composición («4 MASC + 8 FEM + 1 suplente de cualquier género»).
Hoy asumimos: un solo número («cupos mixtos») validado contra la composición cuando existe.

**Q5. Sin cupo en la hoja: ¿es «sin tope»?**
Billar (Carambola, Pool, Heybal) y Lucha (Greco, Libre) no traen ningún cupo; también el femenino de Atletismo, Ecuestre y Natación artística (9 filas).
Hoy asumimos: **sin tope** («la delegación solo declara que va»).

**Q6. Suplentes en blanco: ¿es «no hay suplentes»?**
Hoy asumimos: **sin suplentes** (la celda queda deshabilitada). Excepciones que dejamos: Surf Shortboard (1 suplente por género, por la nota de la hoja) y Tiro «máx. 1 suplente por arma».

**Q7. Criterio aplicado a los conflictos entre hoja, matriz e historias.**
Hoy asumimos: matriz > hoja de reglas > historias, y casi todo es complementario (la hoja da el total por modalidad, la matriz el tope por prueba). ¿Es correcto en cada caso?
- Tenis de Campo: cupo 4 + 1 (hoja) = 2 individuales + 1 pareja (matriz).
- Atletismo: hasta 90 en total (hoja) y 3 por prueba (matriz).
- Natación artística: 10 = equipo de 4 a 8 + 2 reservas; «máx. 2 hombres» es composición del equipo mixto.
- Patinaje: el tope de 2 aplica solo a Velocidad (la historia lo aplicaba a las 4 modalidades).
- Duatlón máx. 3 por género y Triatlón máx. 4 por género (la historia decía 4 para ambos); se cuentan por separado.
- Esgrima: el 12 + 3 se suma entre Espada, Florete y Sable (la hoja las agrupa en «Única»).
- Boxeo: 13 + 3 masculino y 12 + 3 femenino. ¿Es correcto o es un error de la hoja?
- Ajedrez masculino (Blitz y Clásico): la hoja lo deja en blanco y HU-IN-05 dice 5 y 1. Mostramos 5/1 con asterisco.

**Q8. Cupos prellenados en la hoja de declaraciones.**
312 de 756 filas comparables traen un cupo distinto al de la hoja de reglas, siempre menor (Subacuáticas hombres 9 + 1 contra 18 + 2; Ajedrez mujeres 2 + 1 contra 5 + 1; Atletismo hombres 8 + 1 contra 90). ¿Qué representan: un cupo por delegación, un cálculo previo, un error?
Hoy asumimos: ignorarlos; manda la hoja de reglas.

**Q9. Topes por delegación y género que no suman con el cupo.**
Triatlón: 7 + 2 de cupo contra 4 por género (4 + 4 = 8 > 7). ¿Cuál manda?

## B. Datos y nombres

**Q10. Combinaciones declaradas con un género que el instructivo no habilita (9 filas de Atlántico).**
Ajedrez Blitz/Clásico/Rápido con Hombres; Ecuestre Salto/Adiestramiento/Prueba completa con Mixto; Gimnasia Trampolín, Natación Carreras y Squash con Mixto.
Hoy: quedan deshabilitadas con «El instructivo no habilita este género». ¿Se corrige la intención de la delegación o se habilita el género?

**Q11. Mixto habilitado sin composición (10 modalidades).**
Ajedrez Rápido/Clásico/Blitz, Tiro con Arco Compuesto, Atletismo Pista, Bádminton Única, Billar Pool y Heybal, Patinaje Artístico, Taekwondo Poomsae. ¿Cuál es su composición?

**Q12. Equivalencias de nombres entre las dos hojas.**
Aplicadas hoy (¿correctas?): Esgrima Espada/Florete/Sable → «Única»; Tiro con Arco ↔ Arquería; Fútbol de Salón; Rugby 7 ↔ Rugby Siete; Tenis Mesa ↔ Tenis de Mesa; Surf SUP Racing ↔ SUP Race; y cinco agrupaciones donde el tope usa el **mayor** cupo del grupo: Vela Bote (ILCA 6/7, Optimist, Sunfish, Snipe), Vela Tabla, Cheer (nivel 3/4), Performance Cheer (Pomp/Hiphop), Skateboarding (Park/Street).
Sin casar: «Surf · Aloha Cup Shortboard Dupla» (matriz) y «Ciclismo · BMX Freestyle» (sin ninguna declaración).

**Q13. Delegaciones: ¿33 o 34?** El acta habla de 34 y la hoja trae 33. ¿Cuál falta?

**Q14. Intenciones con fecha posterior al cierre (hasta el 01-sep-2026).** Asumimos que son válidas (excepciones).

## C. Flujo, estados y roles

**Q15. Etapas y fechas.** El acta fija: intención de participación → inscripción de deportes y modalidades → inscripción numérica → lista larga → inscripción nominal. En el demo: «Preinscripción de delegaciones» (hecha fuera), «Intención de participación» (cerró 30-08-2026 23:59), «Inscripción numérica» (activa), «Lista larga», «Inscripción nominal».
¿Son esos los nombres? ¿«Inscripción de deportes y modalidades» es lo mismo que la intención? ¿Cuándo abre y cierra la numérica? (Las fechas del demo son de ejemplo.)

**Q16. Ciclo de la declaración.** ¿Hay borrador y confirmación? ¿Se puede modificar después de confirmar mientras la ventana siga abierta? ¿Se guardan versiones? ¿Se puede confirmar con deportes sin declarar o en cero?
Hoy asumimos: borrador → confirmar con resumen → editable hasta el cierre → congelada al cierre.
Nuevo (negocio, 9-oct-2026): el delegado descarga un **reporte ligero de avance** mientras inscribe (borrador, no es el certificado). ¿Qué columnas y formato (PDF, Excel o ambos)? ¿Lleva el mismo membrete? ¿Queda registro de cada descarga?

**Q17. Usuarios.** El acta dice hasta 3 usuarios autorizados por departamento. ¿Cuántos son gestor y cuántos auxiliares? ¿Un auxiliar captura pero no confirma?
Hoy asumimos: el auxiliar captura y **solo el gestor confirma**.

**Q18. Qué pasa si el admin baja un cupo cuando ya hay declaraciones.** Hoy el demo avisa cuántas delegaciones quedan afectadas (28 en Boxeo mujeres) y deja constancia de quién y cuándo. ¿Se recalcula, se notifica, se bloquea?

## D. Certificado, reportes y membrete

**Q19. Certificado.** ¿Se emite una vez al cierre o cada vez que se descarga («fecha y hora de la última emisión», acta)? ¿Una delegación por documento, con las 5 columnas nuevas?
**Q20. Reporte consolidado (HU-IN-14).** ¿«Correo Electrónico» es el del gestor? ¿«Cupos mixtos» es un número o la composición? ¿Debe ser `.xlsx` real?
**Q21. Membrete (HU-IN-17).** ¿Es el banner del certificado actual, o lo define el Manual de Marca? ¿Aplica a todas las descargas de todos los roles?
**Q22. HU-IN-15 («propuesta — validar»).** ¿Exportar respeta filtros y la pestaña activa (Por deporte / Por organización)?

## E. Dashboard (HU-IN-10 a 13)

**Q23. ¿Quién mantiene `web-dashboard`?** Hoy el tablero es un iframe a `web-dashboard.naoweesuite.com/inscripciones`. ¿El cambio es por evento (para no tocar Intercolegiados)?
**Q24. «Región».** HU-IN-12 retira «Regionales» y HU-IN-13 pide que «región» conviva con los filtros. Hoy: se queda el filtro de región y se retira el indicador. ¿Correcto?
**Q25. Grupos de inscripción.** ¿De dónde salen los datos de Prensa, Voluntarios, Proveedores, etc.? ¿Qué es «Preinscripciones» y «Progreso de cobertura municipal» en el tablero de los Juegos Nacionales?

## F. Alcance

**Q26. Reglas de edad de la matriz** (nacidos hasta…, Sub18, Sub20, marca mínima): ¿entran en la inscripción numérica o solo en la nominal? Hoy: fuera de alcance.

---

## Archivos que faltan para afinar el modelo

1. **Las demás pestañas** de `Inscripción_Numérica_V3.xlsx` y de `DEPORTES MODALIDADES JN 2027.xlsx` (solo tenemos «Intención de participación», «DEPORTES Y MODALIDADES» y «MATRIZ»), incluidas pestañas ocultas.
2. **La hoja de historias PR-08** (`PR-08_VM_2026-10-01_MODULO_INSCRIPCION_NUMERICA`): solo se bajó la primera pestaña; faltan las otras si existen.
3. **Resolución 001258 de 2024, artículo 69** (Plan escalonado de inscripción, numeral 2): citada en el encabezado de la hoja de reglas y puede definir si la numérica es restrictiva.
4. **Instructivos de competencia** de los deportes en conflicto: Tenis, Atletismo, Natación artística, Patinaje, Triatlón/Duatlón, Boxeo, Surf, Esgrima y Vela.
5. **Manual de Marca (Brand Book)** del comité organizador, con logos en alta resolución.
6. **Acta del 25-ago-2026** que cita HU-IN-17 (la que encontramos es del 11-ago).
7. **Un certificado de varias páginas** de la fase anterior (el que tenemos trae 5 filas).
8. **Contrato del backend** (endpoints y estados) para el `.xlsx`, el PDF y la ventana.
9. **Código o acceso a `web-dashboard`** y las capturas del resto del tablero.
