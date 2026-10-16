# Inscripción numérica: segunda ronda de preguntas para Daniel

Fecha: 16-oct-2026. Preparado por diseño (Jorge Guzmán).
Demo en línea: https://jguzman-naowee.github.io/design-demo-inscripcion-numerica/

Gracias por las respuestas. Ya las aplicamos en el demo (resumen abajo). Quedan pocas dudas, ahora con el contexto completo, porque varias preguntas de la primera ronda llegaron cortadas. Para cada una marca **✅ correcto** o **✏️ cambiar a…**.

## Lo que ya aplicamos con tus respuestas

- La declaración es por **deporte, modalidad y género**. Las pruebas no entran en esta fase, así que quitamos los topes por prueba (por ejemplo, el tope de 4 del Triatlón queda para la nominal).
- Se declaran **atletas**, no equipos, respetando cupos y suplentes de cada instructivo.
- El delegado puede **modificar cuantas veces quiera** mientras la ventana esté abierta, y vale la última versión guardada. Al cerrar solo hay reportes y certificado.
- El **auxiliar tiene los mismos permisos que el gestor**.
- Si cambia un cupo: **se recalcula, se avisa y queda trazabilidad**. Fuera de la ventana nadie puede cambiar nada.
- El **certificado** se descarga al terminar la fase, las veces que quieran, siempre el mismo. El **reporte es Excel real** con las 12 columnas que indicaste.
- Son **34 delegaciones**; Vichada queda habilitada de forma preventiva y marcada «sin intención».
- Etapas y fechas oficiales: intención (30-ago-2025), deportes y modalidades (30-ago-2026), numérica (hasta 30-mar-2027), lista larga (30-may-2027), nominal (30-sep-2027).
- Prensa, Voluntarios, Federaciones, Comités y Proveedores no tienen fase numérica; Personal de Apoyo entra desde lista larga.

## Preguntas que quedan

**P1. Apertura de la inscripción numérica.**
Dijiste que presuntamente abre el 1 de marzo de 2027, sin confirmación oficial. En el demo la mostramos como «presunta». ¿La dejamos así hasta que haya fecha oficial?
Dónde verlo: ventana de la fase (Admin, pantalla A5) y las etapas del inicio (Delegado, N1).

**P2. Modalidades «mixtas».**
Dijiste que solo Ecuestre es completamente mixto y que los demás tienen pruebas mixtas con especificaciones. La hoja de cupos trae un «cupo mixto» en otras modalidades (por ejemplo Ajedrez, Tiro con Arco Compuesto, Bádminton, Patinaje Artístico, Taekwondo Poomsae). En esta fase, ¿el delegado declara ese cupo mixto o solo se declara en la nominal cuando inscribe la prueba?
Hoy asumimos: se muestra el cupo mixto que trae la hoja, como informativo; solo Ecuestre es mixto abierto.
Dónde verlo: Admin A4 y la columna «Cupos mixtos» del Delegado (N2).

**P3. Cupos que no coinciden entre dos archivos.**
Tenemos dos archivos con cupos: la hoja de reglas (con los máximos de cada instructivo) y la hoja de declaraciones de la intención de participación. En 312 de 756 filas comparables, el cupo de la hoja de declaraciones es menor que el de las reglas (ejemplos: Actividades Subacuáticas hombres 9 + 1 contra 18 + 2; Ajedrez mujeres 2 + 1 contra 5 + 1; Atletismo hombres 8 + 1 contra 90).
¿Qué representan esos cupos menores: un cupo particular por delegación, un cálculo previo o un error? Hoy los ignoramos y usamos el máximo del instructivo.

**P4. Intenciones registradas después del cierre.**
Hay intenciones de deportes y modalidades con fecha hasta el 1 de septiembre de 2026, cuando el cierre era el 30 de agosto. ¿Se consideran válidas o solo si el comité las aprobó?
Hoy asumimos: válidas.

**P5. Cuando dos documentos dicen cosas distintas.**
Con tu aclaración de que las pruebas no entran, la mayoría de los choques entre la hoja de reglas y la matriz de pruebas desaparece. Quedan estos casos entre la hoja de reglas y lo que dicen las historias de usuario. Confirma el máximo que debe aplicar la plataforma:
- Boxeo: 13 + 3 masculino y 12 + 3 femenino.
- Esgrima: el 12 + 3 se suma entre Espada, Florete y Sable.
- Ajedrez masculino (Blitz y Clásico): la hoja lo deja en blanco y la historia dice 5 + 1.
- Patinaje: el tope de 2 aplicaría solo a Velocidad.
Hoy asumimos lo que dice la hoja de reglas y, si está en blanco, la historia.

**P6. Edad.**
Entendimos que las reglas de edad aplican desde lista larga, que es cuando se pide la fecha de nacimiento, y no en la numérica. ¿Correcto?

**P7. Género declarado que el instructivo no habilita (9 combinaciones en Atlántico).**
Ajedrez Blitz, Clásico y Rápido con Hombres; Ecuestre Salto, Adiestramiento y Prueba completa con Mixto; Gimnasia Trampolín, Natación Carreras y Squash con Mixto. En el demo la delegación ve esas filas apagadas con «El instructivo no habilita este género». ¿Se corrige la intención de la delegación o se habilita el género?

---

## Archivos que seguimos necesitando

1. Las demás pestañas de `Inscripción_Numérica_V3.xlsx` y de `DEPORTES MODALIDADES JN 2027.xlsx`, incluidas las ocultas.
2. Los instructivos de competencia de Tenis, Atletismo, Natación artística, Patinaje, Triatlón/Duatlón, Boxeo, Surf, Esgrima y Vela.
3. El Manual de Marca, con logos en alta resolución.
4. Un certificado de varias páginas de la fase anterior.
5. El acta del 25-ago-2026.
6. La Resolución 001258 de 2024, artículo 69.
