/* Datos reales del demo de inscripcion numerica; generado desde los CSV oficiales. */
window.INSCNUM_DATA = {
 "meta": {
  "generado": "2026-10-08",
  "fuentes": [
   "DEPORTES MODALIDADES JN 2027.xlsx",
   "Inscripción_Numérica_V3.xlsx",
   "HU-IN-08",
   "HU-IN-09",
   "DEPORTES MODALIDADES JN 2027.xlsx - MATRIZ"
  ],
  "decisiones": "2026-10-09"
 },
 "reglas": [
  {
   "id": "actividades-subacauticas--cortas-piscina",
   "deporte": "ACTIVIDADES SUBACAUTICAS",
   "modalidad": "CORTAS - PISCINA",
   "generos": {
    "H": true,
    "M": true,
    "X": true
   },
   "masc": {
    "atletas": 18,
    "suplentes": 2,
    "nota": null
   },
   "fem": {
    "atletas": 18,
    "suplentes": 2,
    "nota": null
   },
   "mixtaComposicion": null,
   "notas": [],
   "minimo": null,
   "topeDelegacion": null,
   "heredado": false,
   "sinCupo": false,
   "matriz": {
    "pruebas": 19,
    "sedes": [
     "Montería"
    ],
    "estado": "SIN PARAMETRIZAR",
    "parametrizadas": 0
   },
   "restriccionesEdad": 0,
   "composicion": [
    {
     "tipo": "mixta",
     "total": 4,
     "fem": 2,
     "masc": 2,
     "fuente": "MATRIZ",
     "confirmado": true,
     "citaMatriz": "Equipos conformados por 4 atletas. 2 y 2",
     "pruebas": [
      "Relevo 4x50 m superficie",
      "Relevo 4x100 m superficie",
      "Relevo 4x200 m superficie",
      "Relevo 4x100 m SB",
      "Relevo4x100 m bialetas"
     ]
    }
   ]
  },
  {
   "id": "actividades-subacauticas--largas-aguas-abiertas",
   "deporte": "ACTIVIDADES SUBACAUTICAS",
   "modalidad": "LARGAS - AGUAS ABIERTAS",
   "generos": {
    "H": true,
    "M": true,
    "X": true
   },
   "masc": {
    "atletas": 18,
    "suplentes": 2,
    "nota": null
   },
   "fem": {
    "atletas": 18,
    "suplentes": 2,
    "nota": null
   },
   "mixtaComposicion": null,
   "notas": [],
   "minimo": null,
   "topeDelegacion": null,
   "heredado": true,
   "sinCupo": false,
   "heredadoCampos": [
    "masc",
    "fem"
   ],
   "heredadoDe": "actividades-subacauticas--cortas-piscina",
   "matriz": {
    "pruebas": 5,
    "sedes": [
     "Coveñas"
    ],
    "estado": "SIN PARAMETRIZAR",
    "parametrizadas": 0
   },
   "restriccionesEdad": 0,
   "composicion": [
    {
     "tipo": "mixta",
     "total": 4,
     "fem": 2,
     "masc": 2,
     "fuente": "MATRIZ",
     "confirmado": true,
     "citaMatriz": "Equipos conformados por 4 atletas. 2 y 2",
     "pruebas": [
      "Relevo 4x1000 m SB"
     ]
    }
   ]
  },
  {
   "id": "ajedrez--rapido",
   "deporte": "AJEDREZ",
   "modalidad": "Rápido",
   "generos": {
    "H": false,
    "M": true,
    "X": true
   },
   "masc": {
    "atletas": 5,
    "suplentes": 1,
    "nota": null
   },
   "fem": {
    "atletas": 5,
    "suplentes": 1,
    "nota": null
   },
   "mixtaComposicion": null,
   "notas": [],
   "minimo": null,
   "topeDelegacion": null,
   "heredado": false,
   "sinCupo": false,
   "matriz": {
    "pruebas": 2,
    "sedes": [
     "Montería"
    ],
    "estado": "SIN PARAMETRIZAR",
    "parametrizadas": 0
   },
   "restriccionesEdad": 0
  },
  {
   "id": "ajedrez--clasico",
   "deporte": "AJEDREZ",
   "modalidad": "Clasico",
   "generos": {
    "H": false,
    "M": true,
    "X": true
   },
   "masc": {
    "atletas": null,
    "suplentes": null,
    "nota": null
   },
   "fem": {
    "atletas": 5,
    "suplentes": 1,
    "nota": null
   },
   "mixtaComposicion": null,
   "notas": [],
   "minimo": null,
   "topeDelegacion": null,
   "heredado": true,
   "sinCupo": false,
   "heredadoCampos": [
    "fem"
   ],
   "heredadoDe": "ajedrez--rapido",
   "matriz": {
    "pruebas": 2,
    "sedes": [
     "Montería"
    ],
    "estado": "SIN PARAMETRIZAR",
    "parametrizadas": 0
   },
   "restriccionesEdad": 3
  },
  {
   "id": "ajedrez--blitz",
   "deporte": "AJEDREZ",
   "modalidad": "Blitz",
   "generos": {
    "H": false,
    "M": true,
    "X": true
   },
   "masc": {
    "atletas": null,
    "suplentes": null,
    "nota": null
   },
   "fem": {
    "atletas": 5,
    "suplentes": 1,
    "nota": null
   },
   "mixtaComposicion": null,
   "notas": [],
   "minimo": null,
   "topeDelegacion": null,
   "heredado": true,
   "sinCupo": false,
   "heredadoCampos": [
    "fem"
   ],
   "heredadoDe": "ajedrez--clasico",
   "matriz": {
    "pruebas": 1,
    "sedes": [
     "Montería"
    ],
    "estado": "SIN PARAMETRIZAR",
    "parametrizadas": 0
   },
   "restriccionesEdad": 0
  },
  {
   "id": "tiro-con-arco--recurvo",
   "deporte": "TIRO CON ARCO",
   "modalidad": "RECURVO",
   "generos": {
    "H": true,
    "M": true,
    "X": true
   },
   "masc": {
    "atletas": 4,
    "suplentes": 1,
    "nota": null
   },
   "fem": {
    "atletas": 4,
    "suplentes": 1,
    "nota": null
   },
   "mixtaComposicion": null,
   "notas": [],
   "minimo": null,
   "topeDelegacion": null,
   "heredado": false,
   "sinCupo": false,
   "matriz": {
    "pruebas": 3,
    "sedes": [
     "Montería"
    ],
    "estado": "SIN PARAMETRIZAR",
    "parametrizadas": 0
   },
   "restriccionesEdad": 0,
   "maximoEquipo": {
    "fuente": "MATRIZ",
    "confirmado": true,
    "citaMatriz": "Equipos por genero de a 3 ateltas por equipo",
    "pruebas": [
     "Recurvo Equipos"
    ],
    "alcance": "prueba",
    "atletas": 3,
    "fijo": true
   },
   "composicion": [
    {
     "tipo": "mixta",
     "total": 2,
     "fem": 1,
     "masc": 1,
     "fuente": "MATRIZ",
     "confirmado": true,
     "citaMatriz": "Equipos mixtos 1 atelta de cada género (2 atletas en el equipo)",
     "pruebas": [
      "Recurvo Equipos"
     ]
    }
   ]
  },
  {
   "id": "tiro-con-arco--compuesto",
   "deporte": "TIRO CON ARCO",
   "modalidad": "COMPUESTO",
   "generos": {
    "H": true,
    "M": true,
    "X": true
   },
   "masc": {
    "atletas": 4,
    "suplentes": 1,
    "nota": null
   },
   "fem": {
    "atletas": 4,
    "suplentes": 1,
    "nota": null
   },
   "mixtaComposicion": null,
   "notas": [],
   "minimo": null,
   "topeDelegacion": null,
   "heredado": false,
   "sinCupo": false,
   "matriz": {
    "pruebas": 3,
    "sedes": [
     "Montería"
    ],
    "estado": "SIN PARAMETRIZAR",
    "parametrizadas": 0
   },
   "restriccionesEdad": 0
  },
  {
   "id": "atletismo--pista",
   "deporte": "ATLETISMO",
   "modalidad": "PISTA",
   "generos": {
    "H": true,
    "M": true,
    "X": true
   },
   "masc": {
    "atletas": 90,
    "suplentes": 0,
    "nota": null,
    "hasta": true,
    "sinSuplentes": true
   },
   "fem": {
    "atletas": null,
    "suplentes": null,
    "nota": null,
    "sinTope": true
   },
   "mixtaComposicion": null,
   "notas": [],
   "minimo": null,
   "topeDelegacion": {
    "atletas": 3,
    "por": "prueba",
    "excepcion": "hasta 4 en maratón y media maratón marcha",
    "fuente": "MATRIZ",
    "confirmado": true,
    "citaMatriz": "Cada Delegación podrá inscribir hasta 3 atletas por prueba, y hasta 4 en maratón y media maratón marcha",
    "pruebas": [
     "100 m",
     "200 m",
     "400 m",
     "800 m",
     "1500 m",
     "5000 m",
     "10 000 m",
     "100 m Vallas",
     "110 m Vallas",
     "400 m Vallas",
     "3000 m Obstáculos",
     "4x100 m Relevo",
     "4x400 m Relevo"
    ],
    "alcance": "deporte",
    "aviso": true
   },
   "heredado": false,
   "sinCupo": false,
   "matriz": {
    "pruebas": 13,
    "sedes": [
     "Montería"
    ],
    "estado": "SIN PARAMETRIZAR",
    "parametrizadas": 0
   },
   "restriccionesEdad": 4
  },
  {
   "id": "atletismo--campo",
   "deporte": "ATLETISMO",
   "modalidad": "CAMPO",
   "generos": {
    "H": true,
    "M": true,
    "X": false
   },
   "masc": {
    "atletas": 90,
    "suplentes": 0,
    "nota": null,
    "hasta": true,
    "sinSuplentes": true
   },
   "fem": {
    "atletas": null,
    "suplentes": null,
    "nota": null,
    "sinTope": true
   },
   "mixtaComposicion": null,
   "notas": [],
   "minimo": null,
   "topeDelegacion": {
    "atletas": 3,
    "por": "prueba",
    "excepcion": "hasta 4 en maratón y media maratón marcha",
    "fuente": "MATRIZ",
    "confirmado": true,
    "citaMatriz": "Cada Delegación podrá inscribir hasta 3 atletas por prueba, y hasta 4 en maratón y media maratón marcha",
    "pruebas": [
     "Salto de Altura",
     "Salto de Longitud",
     "Salto Triple",
     "Salto con Pértiga",
     "Lanzamiento de Bala",
     "Lanzamiento de Disco",
     "Lanzamiento de Jabalina",
     "Lanzamiento de Martillo"
    ],
    "alcance": "deporte",
    "aviso": true
   },
   "heredado": true,
   "sinCupo": false,
   "heredadoCampos": [
    "masc"
   ],
   "heredadoDe": "atletismo--pista",
   "matriz": {
    "pruebas": 8,
    "sedes": [
     "Montería"
    ],
    "estado": "SIN PARAMETRIZAR",
    "parametrizadas": 0
   },
   "restriccionesEdad": 3
  },
  {
   "id": "atletismo--ruta",
   "deporte": "ATLETISMO",
   "modalidad": "RUTA",
   "generos": {
    "H": true,
    "M": true,
    "X": false
   },
   "masc": {
    "atletas": 90,
    "suplentes": 0,
    "nota": null,
    "hasta": true,
    "sinSuplentes": true
   },
   "fem": {
    "atletas": null,
    "suplentes": null,
    "nota": null,
    "sinTope": true
   },
   "mixtaComposicion": null,
   "notas": [],
   "minimo": null,
   "topeDelegacion": {
    "atletas": 3,
    "por": "prueba",
    "excepcion": "hasta 4 en maratón y media maratón marcha",
    "fuente": "MATRIZ",
    "confirmado": true,
    "citaMatriz": "Cada Delegación podrá inscribir hasta 3 atletas por prueba, y hasta 4 en maratón y media maratón marcha",
    "pruebas": [
     "Media Maratón Marcha",
     "Maratón"
    ],
    "alcance": "deporte",
    "aviso": true
   },
   "heredado": true,
   "sinCupo": false,
   "heredadoCampos": [
    "masc"
   ],
   "heredadoDe": "atletismo--campo",
   "matriz": {
    "pruebas": 2,
    "sedes": [
     "Montería"
    ],
    "estado": "SIN PARAMETRIZAR",
    "parametrizadas": 0
   },
   "restriccionesEdad": 1
  },
  {
   "id": "atletismo--marcha",
   "deporte": "ATLETISMO",
   "modalidad": "MARCHA",
   "generos": {
    "H": true,
    "M": true,
    "X": false
   },
   "masc": {
    "atletas": 90,
    "suplentes": 0,
    "nota": null,
    "hasta": true,
    "sinSuplentes": true
   },
   "fem": {
    "atletas": null,
    "suplentes": null,
    "nota": null,
    "sinTope": true
   },
   "mixtaComposicion": null,
   "notas": [],
   "minimo": null,
   "topeDelegacion": {
    "atletas": 3,
    "por": "prueba",
    "excepcion": "hasta 4 en maratón y media maratón marcha",
    "fuente": "MATRIZ",
    "confirmado": true,
    "citaMatriz": "Cada Delegación podrá inscribir hasta 3 atletas por prueba, y hasta 4 en maratón y media maratón marcha",
    "pruebas": [],
    "alcance": "deporte",
    "aviso": true
   },
   "heredado": true,
   "sinCupo": false,
   "heredadoCampos": [
    "masc"
   ],
   "heredadoDe": "atletismo--ruta",
   "matriz": {
    "pruebas": 0,
    "sedes": [],
    "estado": null,
    "parametrizadas": 0
   },
   "restriccionesEdad": 0
  },
  {
   "id": "atletismo--combinadas",
   "deporte": "ATLETISMO",
   "modalidad": "COMBINADAS",
   "generos": {
    "H": true,
    "M": true,
    "X": false
   },
   "masc": {
    "atletas": 90,
    "suplentes": 0,
    "nota": null,
    "hasta": true,
    "sinSuplentes": true
   },
   "fem": {
    "atletas": null,
    "suplentes": null,
    "nota": null,
    "sinTope": true
   },
   "mixtaComposicion": null,
   "notas": [],
   "minimo": null,
   "topeDelegacion": {
    "atletas": 3,
    "por": "prueba",
    "excepcion": "hasta 4 en maratón y media maratón marcha",
    "fuente": "MATRIZ",
    "confirmado": true,
    "citaMatriz": "Cada Delegación podrá inscribir hasta 3 atletas por prueba, y hasta 4 en maratón y media maratón marcha",
    "pruebas": [
     "Decatlón",
     "Heptatlón"
    ],
    "alcance": "deporte",
    "aviso": true
   },
   "heredado": true,
   "sinCupo": false,
   "heredadoCampos": [
    "masc"
   ],
   "heredadoDe": "atletismo--marcha",
   "matriz": {
    "pruebas": 2,
    "sedes": [
     "Montería"
    ],
    "estado": "SIN PARAMETRIZAR",
    "parametrizadas": 0
   },
   "restriccionesEdad": 0
  },
  {
   "id": "badminton--unica",
   "deporte": "BADMINTON",
   "modalidad": "UNICA",
   "generos": {
    "H": true,
    "M": true,
    "X": true
   },
   "masc": {
    "atletas": 4,
    "suplentes": 1,
    "nota": null
   },
   "fem": {
    "atletas": 4,
    "suplentes": 1,
    "nota": null
   },
   "mixtaComposicion": null,
   "notas": [],
   "minimo": null,
   "topeDelegacion": null,
   "heredado": false,
   "sinCupo": false,
   "matriz": {
    "pruebas": 3,
    "sedes": [
     "Montería"
    ],
    "estado": "SIN PARAMETRIZAR",
    "parametrizadas": 0
   },
   "restriccionesEdad": 1,
   "maximoEquipo": {
    "fuente": "MATRIZ",
    "confirmado": true,
    "citaMatriz": "Los equipos serán de 8 atletas",
    "pruebas": [
     "Equipos"
    ],
    "alcance": "prueba",
    "atletas": 8,
    "fijo": true
   }
  },
  {
   "id": "baloncesto--conjunto-5x5",
   "deporte": "BALONCESTO",
   "modalidad": "CONJUNTO 5X5",
   "generos": {
    "H": true,
    "M": true,
    "X": false
   },
   "masc": {
    "atletas": 12,
    "suplentes": 3,
    "nota": null
   },
   "fem": {
    "atletas": 12,
    "suplentes": 3,
    "nota": null
   },
   "mixtaComposicion": null,
   "notas": [],
   "minimo": {
    "fuente": "MATRIZ",
    "confirmado": true,
    "citaMatriz": "Máximo 12, mínimo 10 atletas por equipo",
    "pruebas": [
     "Equipos"
    ],
    "alcance": "modalidad",
    "atletas": 10,
    "maximo": 12
   },
   "topeDelegacion": null,
   "heredado": false,
   "sinCupo": false,
   "matriz": {
    "pruebas": 1,
    "sedes": [
     "Sincelejo"
    ],
    "estado": "SIN PARAMETRIZAR",
    "parametrizadas": 0
   },
   "restriccionesEdad": 1,
   "maximoEquipo": {
    "fuente": "MATRIZ",
    "confirmado": true,
    "citaMatriz": "Máximo 12, mínimo 10 atletas por equipo",
    "pruebas": [
     "Equipos"
    ],
    "alcance": "modalidad",
    "atletas": 12,
    "fijo": false
   }
  },
  {
   "id": "baloncesto--conjunto-3x3",
   "deporte": "BALONCESTO",
   "modalidad": "CONJUNTO 3X3",
   "generos": {
    "H": true,
    "M": true,
    "X": false
   },
   "masc": {
    "atletas": 4,
    "suplentes": 2,
    "nota": null
   },
   "fem": {
    "atletas": 4,
    "suplentes": 2,
    "nota": null
   },
   "mixtaComposicion": null,
   "notas": [],
   "minimo": {
    "fuente": "MATRIZ",
    "confirmado": true,
    "citaMatriz": "Maximo 4, minimo 3 atletas por equipo",
    "pruebas": [
     "Equipos"
    ],
    "alcance": "modalidad",
    "atletas": 3,
    "maximo": 4
   },
   "topeDelegacion": null,
   "heredado": false,
   "sinCupo": false,
   "matriz": {
    "pruebas": 1,
    "sedes": [
     "Montería"
    ],
    "estado": "SIN PARAMETRIZAR",
    "parametrizadas": 0
   },
   "restriccionesEdad": 0,
   "maximoEquipo": {
    "fuente": "MATRIZ",
    "confirmado": true,
    "citaMatriz": "Maximo 4, minimo 3 atletas por equipo",
    "pruebas": [
     "Equipos"
    ],
    "alcance": "modalidad",
    "atletas": 4,
    "fijo": false
   }
  },
  {
   "id": "balonmano--conjunto",
   "deporte": "BALONMANO",
   "modalidad": "CONJUNTO",
   "generos": {
    "H": true,
    "M": true,
    "X": false
   },
   "masc": {
    "atletas": 16,
    "suplentes": 2,
    "nota": null
   },
   "fem": {
    "atletas": 16,
    "suplentes": 2,
    "nota": null
   },
   "mixtaComposicion": null,
   "notas": [],
   "minimo": {
    "fuente": "MATRIZ",
    "confirmado": true,
    "citaMatriz": "Maximo 16, mínimo 14 atletas por equipo",
    "pruebas": [
     "Equipos"
    ],
    "alcance": "modalidad",
    "atletas": 14,
    "maximo": 16
   },
   "topeDelegacion": null,
   "heredado": false,
   "sinCupo": false,
   "matriz": {
    "pruebas": 1,
    "sedes": [
     "Sincelejo"
    ],
    "estado": "SIN PARAMETRIZAR",
    "parametrizadas": 0
   },
   "restriccionesEdad": 0,
   "maximoEquipo": {
    "fuente": "MATRIZ",
    "confirmado": true,
    "citaMatriz": "Maximo 16, mínimo 14 atletas por equipo",
    "pruebas": [
     "Equipos"
    ],
    "alcance": "modalidad",
    "atletas": 16,
    "fijo": false
   }
  },
  {
   "id": "beisbol--conjunto",
   "deporte": "BÉISBOL",
   "modalidad": "CONJUNTO",
   "generos": {
    "H": true,
    "M": false,
    "X": false
   },
   "masc": {
    "atletas": 22,
    "suplentes": 3,
    "nota": null
   },
   "fem": {
    "atletas": null,
    "suplentes": null,
    "nota": null
   },
   "mixtaComposicion": null,
   "notas": [],
   "minimo": {
    "fuente": "MATRIZ",
    "confirmado": true,
    "citaMatriz": "Máximo 22, mínimo 9 atletas por equipo",
    "pruebas": [
     "Equipos"
    ],
    "alcance": "modalidad",
    "atletas": 9,
    "maximo": 22
   },
   "topeDelegacion": null,
   "heredado": false,
   "sinCupo": false,
   "matriz": {
    "pruebas": 1,
    "sedes": [
     "Sincelejo"
    ],
    "estado": "SIN PARAMETRIZAR",
    "parametrizadas": 0
   },
   "restriccionesEdad": 0,
   "maximoEquipo": {
    "fuente": "MATRIZ",
    "confirmado": true,
    "citaMatriz": "Máximo 22, mínimo 9 atletas por equipo",
    "pruebas": [
     "Equipos"
    ],
    "alcance": "modalidad",
    "atletas": 22,
    "fijo": false
   },
   "composicion": [
    {
     "tipo": "limiteLiga",
     "profesionales": 8,
     "fuente": "MATRIZ",
     "confirmado": true,
     "citaMatriz": "Máximo 8 atletas profesoinales por liga",
     "pruebas": [
      "Equipos"
     ]
    }
   ]
  },
  {
   "id": "billar--carambola",
   "deporte": "BILLAR",
   "modalidad": "CARAMBOLA",
   "generos": {
    "H": true,
    "M": true,
    "X": false
   },
   "masc": {
    "atletas": null,
    "suplentes": null,
    "nota": null,
    "sinTope": true
   },
   "fem": {
    "atletas": null,
    "suplentes": null,
    "nota": null,
    "sinTope": true
   },
   "mixtaComposicion": null,
   "notas": [],
   "minimo": null,
   "topeDelegacion": null,
   "heredado": false,
   "sinCupo": true,
   "matriz": {
    "pruebas": 0,
    "sedes": [],
    "estado": null,
    "parametrizadas": 0
   },
   "restriccionesEdad": 0
  },
  {
   "id": "billar--pool",
   "deporte": "BILLAR",
   "modalidad": "POOL",
   "generos": {
    "H": true,
    "M": true,
    "X": true
   },
   "masc": {
    "atletas": null,
    "suplentes": null,
    "nota": null,
    "sinTope": true
   },
   "fem": {
    "atletas": null,
    "suplentes": null,
    "nota": null,
    "sinTope": true
   },
   "mixtaComposicion": null,
   "notas": [],
   "minimo": null,
   "topeDelegacion": null,
   "heredado": false,
   "sinCupo": true,
   "matriz": {
    "pruebas": 0,
    "sedes": [],
    "estado": null,
    "parametrizadas": 0
   },
   "restriccionesEdad": 0
  },
  {
   "id": "billar--heybal",
   "deporte": "BILLAR",
   "modalidad": "HEYBAL",
   "generos": {
    "H": true,
    "M": true,
    "X": true
   },
   "masc": {
    "atletas": null,
    "suplentes": null,
    "nota": null,
    "sinTope": true
   },
   "fem": {
    "atletas": null,
    "suplentes": null,
    "nota": null,
    "sinTope": true
   },
   "mixtaComposicion": null,
   "notas": [],
   "minimo": null,
   "topeDelegacion": null,
   "heredado": false,
   "sinCupo": true,
   "matriz": {
    "pruebas": 0,
    "sedes": [],
    "estado": null,
    "parametrizadas": 0
   },
   "restriccionesEdad": 0
  },
  {
   "id": "bowling--unica",
   "deporte": "BOWLING",
   "modalidad": "UNICA",
   "generos": {
    "H": true,
    "M": true,
    "X": false
   },
   "masc": {
    "atletas": 6,
    "suplentes": 1,
    "nota": null
   },
   "fem": {
    "atletas": 6,
    "suplentes": 1,
    "nota": null
   },
   "mixtaComposicion": null,
   "notas": [],
   "minimo": null,
   "topeDelegacion": null,
   "heredado": false,
   "sinCupo": false,
   "matriz": {
    "pruebas": 4,
    "sedes": [
     "Sincelejo"
    ],
    "estado": "SIN PARAMETRIZAR",
    "parametrizadas": 0
   },
   "restriccionesEdad": 0,
   "maximoEquipo": {
    "fuente": "MATRIZ",
    "confirmado": true,
    "citaMatriz": "quintas son conformadas por 6 atletas",
    "pruebas": [
     "Quintas"
    ],
    "alcance": "prueba",
    "atletas": 6,
    "fijo": true
   }
  },
  {
   "id": "boxeo--unica",
   "deporte": "BOXEO",
   "modalidad": "UNICA",
   "generos": {
    "H": true,
    "M": true,
    "X": false
   },
   "masc": {
    "atletas": 13,
    "suplentes": 3,
    "nota": null
   },
   "fem": {
    "atletas": 12,
    "suplentes": 3,
    "nota": null
   },
   "mixtaComposicion": null,
   "notas": [],
   "minimo": null,
   "topeDelegacion": {
    "fuente": "MATRIZ",
    "confirmado": true,
    "citaMatriz": "Solo se acepta un boxeador por delegación por prueba",
    "pruebas": [
     "44 kg hasta 46 kg",
     "46 kg hasta 48 kg",
     "48 kg hasta 51 kg",
     "49 kg hasta 50 kg",
     "51 kg hasta 54 kg",
     "51 kg hasta 55 kg",
     "54 kg hasta 57 kg",
     "55 kg hasta 60 kg",
     "57 kg hasta 60 kg",
     "60 kg hasta 63 kg",
     "60 kg hasta 65 kg",
     "63 kg hasta 65 kg",
     "65 kg hasta 67.5 kg",
     "66 kg hasta 70 kg",
     "67.5 kg hasta 70 kg",
     "70 kg hasta 75 kg",
     "75 kg hasta 78 kg",
     "75 kg hasta 80 kg",
     "78 kg hasta 80 kg",
     "Más 80 kg",
     "80 kg hasta 85 kg",
     "85 kg hasta 90 kg",
     "Más 90 kg"
    ],
    "alcance": "modalidad",
    "atletas": 1,
    "por": "prueba",
    "aviso": true
   },
   "heredado": false,
   "sinCupo": false,
   "matriz": {
    "pruebas": 23,
    "sedes": [
     "Sincelejo"
    ],
    "estado": "SIN PARAMETRIZAR",
    "parametrizadas": 0
   },
   "restriccionesEdad": 2
  },
  {
   "id": "canotaje--velocidad",
   "deporte": "CANOTAJE",
   "modalidad": "VELOCIDAD",
   "generos": {
    "H": true,
    "M": true,
    "X": false
   },
   "masc": {
    "atletas": 14,
    "suplentes": 2,
    "nota": null
   },
   "fem": {
    "atletas": 14,
    "suplentes": 2,
    "nota": null
   },
   "mixtaComposicion": null,
   "notas": [],
   "minimo": null,
   "topeDelegacion": {
    "fuente": "MATRIZ",
    "confirmado": true,
    "citaMatriz": "un (1) bote por evento",
    "pruebas": [
     "K1 200 m",
     "K1 500 m",
     "K1 1000 m",
     "K2 200 m",
     "K2 500 m",
     "K2 1000 m",
     "K4 200 m",
     "K4 500 m",
     "K4 1000 m",
     "C1 200 m",
     "C1 500 m",
     "C1 1000 m",
     "C2 200 m",
     "C2 500 m",
     "C2 1000 m"
    ],
    "alcance": "modalidad",
    "botes": 1,
    "por": "evento",
    "aviso": true
   },
   "heredado": false,
   "sinCupo": false,
   "matriz": {
    "pruebas": 15,
    "sedes": [
     "Montería"
    ],
    "estado": "SIN PARAMETRIZAR",
    "parametrizadas": 0
   },
   "restriccionesEdad": 0
  },
  {
   "id": "canotaje--slalom",
   "deporte": "CANOTAJE",
   "modalidad": "SLALOM",
   "generos": {
    "H": true,
    "M": true,
    "X": false
   },
   "masc": {
    "atletas": 6,
    "suplentes": 2,
    "nota": null
   },
   "fem": {
    "atletas": 6,
    "suplentes": 2,
    "nota": null
   },
   "mixtaComposicion": null,
   "notas": [],
   "minimo": null,
   "topeDelegacion": {
    "fuente": "MATRIZ",
    "confirmado": true,
    "citaMatriz": "dos (2) botes por genero y modalidad",
    "pruebas": [
     "Kayak K1",
     "Canoa C1"
    ],
    "alcance": "modalidad",
    "botes": 2,
    "por": "genero y modalidad",
    "aviso": true
   },
   "heredado": false,
   "sinCupo": false,
   "matriz": {
    "pruebas": 2,
    "sedes": [
     "Montería"
    ],
    "estado": "SIN PARAMETRIZAR",
    "parametrizadas": 0
   },
   "restriccionesEdad": 0
  },
  {
   "id": "canotaje--kayak-cross",
   "deporte": "CANOTAJE",
   "modalidad": "KAYAK CROSS",
   "generos": {
    "H": true,
    "M": true,
    "X": false
   },
   "masc": {
    "atletas": 6,
    "suplentes": 2,
    "nota": null
   },
   "fem": {
    "atletas": 6,
    "suplentes": 2,
    "nota": null
   },
   "mixtaComposicion": null,
   "notas": [],
   "minimo": null,
   "topeDelegacion": null,
   "heredado": true,
   "sinCupo": false,
   "heredadoCampos": [
    "masc",
    "fem"
   ],
   "heredadoDe": "canotaje--slalom",
   "matriz": {
    "pruebas": 1,
    "sedes": [
     "Montería"
    ],
    "estado": "SIN PARAMETRIZAR",
    "parametrizadas": 0
   },
   "restriccionesEdad": 0
  },
  {
   "id": "ciclismo--mtb",
   "deporte": "CICLISMO",
   "modalidad": "MTB",
   "generos": {
    "H": true,
    "M": true,
    "X": false
   },
   "masc": {
    "atletas": 4,
    "suplentes": 1,
    "nota": null
   },
   "fem": {
    "atletas": 4,
    "suplentes": 1,
    "nota": null
   },
   "mixtaComposicion": null,
   "notas": [],
   "minimo": null,
   "topeDelegacion": null,
   "heredado": false,
   "sinCupo": false,
   "matriz": {
    "pruebas": 1,
    "sedes": [
     "Montería"
    ],
    "estado": "SIN PARAMETRIZAR",
    "parametrizadas": 0
   },
   "restriccionesEdad": 0
  },
  {
   "id": "ciclismo--bmx",
   "deporte": "CICLISMO",
   "modalidad": "BMX",
   "generos": {
    "H": true,
    "M": true,
    "X": false
   },
   "masc": {
    "atletas": 6,
    "suplentes": 2,
    "nota": null
   },
   "fem": {
    "atletas": 6,
    "suplentes": 2,
    "nota": null
   },
   "mixtaComposicion": null,
   "notas": [],
   "minimo": null,
   "topeDelegacion": null,
   "heredado": false,
   "sinCupo": false,
   "matriz": {
    "pruebas": 1,
    "sedes": [
     "Montería"
    ],
    "estado": "SIN PARAMETRIZAR",
    "parametrizadas": 0
   },
   "restriccionesEdad": 1
  },
  {
   "id": "ciclismo--bmx-freestyle",
   "deporte": "CICLISMO",
   "modalidad": "BMX FREESTYLE",
   "generos": {
    "H": true,
    "M": true,
    "X": false
   },
   "masc": {
    "atletas": 4,
    "suplentes": 1,
    "nota": null
   },
   "fem": {
    "atletas": 4,
    "suplentes": 1,
    "nota": null
   },
   "mixtaComposicion": null,
   "notas": [],
   "minimo": null,
   "topeDelegacion": null,
   "heredado": false,
   "sinCupo": false,
   "matriz": {
    "pruebas": 1,
    "sedes": [
     "Montería"
    ],
    "estado": "SIN PARAMETRIZAR",
    "parametrizadas": 0
   },
   "restriccionesEdad": 0
  },
  {
   "id": "ciclismo--pista",
   "deporte": "CICLISMO",
   "modalidad": "PISTA",
   "generos": {
    "H": true,
    "M": true,
    "X": false
   },
   "masc": {
    "atletas": 12,
    "suplentes": 2,
    "nota": null
   },
   "fem": {
    "atletas": 12,
    "suplentes": 2,
    "nota": null
   },
   "mixtaComposicion": null,
   "notas": [],
   "minimo": null,
   "topeDelegacion": null,
   "heredado": false,
   "sinCupo": false,
   "matriz": {
    "pruebas": 6,
    "sedes": [
     "Cali"
    ],
    "estado": "SIN PARAMETRIZAR",
    "parametrizadas": 0
   },
   "restriccionesEdad": 1,
   "composicion": [
    {
     "tipo": "mixta",
     "fem": 3,
     "masc": 3,
     "fuente": "MATRIZ",
     "confirmado": true,
     "citaMatriz": "FEM 3 MASC 3",
     "pruebas": [
      "Velocidad",
      "Keirin"
     ]
    },
    {
     "tipo": "mixta",
     "fem": 1,
     "masc": 1,
     "fuente": "MATRIZ",
     "confirmado": true,
     "citaMatriz": "FEM 1 MASC 1",
     "pruebas": [
      "Omnium"
     ]
    },
    {
     "tipo": "reserva",
     "atletas": 3,
     "reservas": 1,
     "fuente": "MATRIZ",
     "confirmado": true,
     "citaMatriz": "FEM 1 Equipo 3 atletas +1 reserva MASC 1 Equipo 3 atletas +1 reserva",
     "pruebas": [
      "Velocidad por equipos"
     ]
    },
    {
     "tipo": "reserva",
     "atletas": 4,
     "reservas": 1,
     "fuente": "MATRIZ",
     "confirmado": true,
     "citaMatriz": "FEM 1 Equipo 4 atletas +1 reserva MASC 1 Equipo 4 atletas +1 reserva",
     "pruebas": [
      "Persecución por equipos"
     ]
    },
    {
     "tipo": "equipoPorGenero",
     "atletas": 2,
     "fuente": "MATRIZ",
     "confirmado": true,
     "citaMatriz": "FEM 1 Equipo 2 atletas MASC 1 Equipo 2 atletas",
     "pruebas": [
      "Madison"
     ]
    }
   ]
  },
  {
   "id": "ciclismo--ruta",
   "deporte": "CICLISMO",
   "modalidad": "RUTA",
   "generos": {
    "H": true,
    "M": true,
    "X": false
   },
   "masc": {
    "atletas": 8,
    "suplentes": 2,
    "nota": null
   },
   "fem": {
    "atletas": 8,
    "suplentes": 2,
    "nota": null
   },
   "mixtaComposicion": null,
   "notas": [],
   "minimo": null,
   "topeDelegacion": null,
   "heredado": false,
   "sinCupo": false,
   "matriz": {
    "pruebas": 2,
    "sedes": [
     "Montería"
    ],
    "estado": "SIN PARAMETRIZAR",
    "parametrizadas": 0
   },
   "restriccionesEdad": 1,
   "composicion": [
    {
     "tipo": "equipoPorGenero",
     "atletas": 2,
     "genero": "FEM",
     "fuente": "MATRIZ",
     "confirmado": true,
     "citaMatriz": "2 atletas FEM",
     "pruebas": [
      "Contra reloj individual"
     ]
    },
    {
     "tipo": "equipoPorGenero",
     "atletas": 2,
     "genero": "MASC",
     "fuente": "MATRIZ",
     "confirmado": true,
     "citaMatriz": "2 atletas MASC",
     "pruebas": [
      "Contra reloj individual"
     ]
    },
    {
     "tipo": "equipoPorGenero",
     "atletas": 6,
     "genero": "FEM",
     "fuente": "MATRIZ",
     "confirmado": true,
     "citaMatriz": "6 atletas FEM",
     "pruebas": [
      "Ruta"
     ]
    },
    {
     "tipo": "equipoPorGenero",
     "atletas": 6,
     "genero": "MASC",
     "fuente": "MATRIZ",
     "confirmado": true,
     "citaMatriz": "6 atletas MASC",
     "pruebas": [
      "Ruta"
     ]
    }
   ]
  },
  {
   "id": "ecuestre--salto",
   "deporte": "ECUESTRE",
   "modalidad": "SALTO",
   "generos": {
    "H": true,
    "M": true,
    "X": false
   },
   "masc": {
    "atletas": 5,
    "suplentes": 3,
    "nota": null
   },
   "fem": {
    "atletas": null,
    "suplentes": null,
    "nota": null,
    "sinTope": true
   },
   "mixtaComposicion": null,
   "notas": [],
   "minimo": {
    "fuente": "MATRIZ",
    "confirmado": true,
    "citaMatriz": "Equipos de 5 minimo 3",
    "pruebas": [
     "Equipos"
    ],
    "alcance": "prueba",
    "atletas": 3,
    "maximo": 5
   },
   "topeDelegacion": null,
   "heredado": false,
   "sinCupo": false,
   "matriz": {
    "pruebas": 3,
    "sedes": [
     "Bogotá D.C."
    ],
    "estado": "SIN PARAMETRIZAR",
    "parametrizadas": 0
   },
   "restriccionesEdad": 1,
   "maximoEquipo": {
    "fuente": "MATRIZ",
    "confirmado": true,
    "citaMatriz": "Equipos de 5 minimo 3",
    "pruebas": [
     "Equipos"
    ],
    "alcance": "prueba",
    "atletas": 5,
    "fijo": false
   }
  },
  {
   "id": "ecuestre--adiestramiento",
   "deporte": "ECUESTRE",
   "modalidad": "ADIESTRAMIENTO",
   "generos": {
    "H": true,
    "M": true,
    "X": false
   },
   "masc": {
    "atletas": 5,
    "suplentes": 3,
    "nota": null
   },
   "fem": {
    "atletas": null,
    "suplentes": null,
    "nota": null,
    "sinTope": true
   },
   "mixtaComposicion": null,
   "notas": [],
   "minimo": {
    "fuente": "MATRIZ",
    "confirmado": true,
    "citaMatriz": "Equipos de 5 minimo 3",
    "pruebas": [
     "Equipos"
    ],
    "alcance": "prueba",
    "atletas": 3,
    "maximo": 5
   },
   "topeDelegacion": null,
   "heredado": false,
   "sinCupo": false,
   "matriz": {
    "pruebas": 2,
    "sedes": [
     "Bogotá D.C."
    ],
    "estado": "SIN PARAMETRIZAR",
    "parametrizadas": 0
   },
   "restriccionesEdad": 0,
   "maximoEquipo": {
    "fuente": "MATRIZ",
    "confirmado": true,
    "citaMatriz": "Equipos de 5 minimo 3",
    "pruebas": [
     "Equipos"
    ],
    "alcance": "prueba",
    "atletas": 5,
    "fijo": false
   }
  },
  {
   "id": "ecuestre--prueba-completa",
   "deporte": "ECUESTRE",
   "modalidad": "PRUEBA COMPLETA",
   "generos": {
    "H": true,
    "M": true,
    "X": false
   },
   "masc": {
    "atletas": 5,
    "suplentes": 3,
    "nota": null
   },
   "fem": {
    "atletas": null,
    "suplentes": null,
    "nota": null,
    "sinTope": true
   },
   "mixtaComposicion": null,
   "notas": [],
   "minimo": {
    "fuente": "MATRIZ",
    "confirmado": true,
    "citaMatriz": "Equipos de 5 minimo 3",
    "pruebas": [
     "Equipos"
    ],
    "alcance": "prueba",
    "atletas": 3,
    "maximo": 5
   },
   "topeDelegacion": null,
   "heredado": false,
   "sinCupo": false,
   "matriz": {
    "pruebas": 2,
    "sedes": [
     "Bogotá D.C."
    ],
    "estado": "SIN PARAMETRIZAR",
    "parametrizadas": 0
   },
   "restriccionesEdad": 0,
   "maximoEquipo": {
    "fuente": "MATRIZ",
    "confirmado": true,
    "citaMatriz": "Equipos de 5 minimo 3",
    "pruebas": [
     "Equipos"
    ],
    "alcance": "prueba",
    "atletas": 5,
    "fijo": false
   }
  },
  {
   "id": "esgrima--unica",
   "deporte": "ESGRIMA",
   "modalidad": "UNICA",
   "generos": {
    "H": true,
    "M": true,
    "X": false
   },
   "masc": {
    "atletas": 12,
    "suplentes": 3,
    "nota": null
   },
   "fem": {
    "atletas": 12,
    "suplentes": 3,
    "nota": null
   },
   "mixtaComposicion": null,
   "notas": [],
   "minimo": null,
   "topeDelegacion": {
    "atletas": 12,
    "por": "genero",
    "alcance": "modalidad",
    "etiqueta": "Única (Espada + Florete + Sable)",
    "fuente": "HOJA",
    "confirmado": true,
    "citaHoja": "12 + 3 suplentes (modalidad Única)"
   },
   "heredado": false,
   "sinCupo": false,
   "matriz": {
    "pruebas": 6,
    "sedes": [
     "Montería"
    ],
    "estado": "SIN PARAMETRIZAR",
    "parametrizadas": 0
   },
   "restriccionesEdad": 1,
   "maximoEquipo": {
    "fuente": "MATRIZ",
    "confirmado": true,
    "citaMatriz": "Equipos de 4 atletas",
    "pruebas": [
     "Espada por Equipos"
    ],
    "alcance": "prueba",
    "atletas": 4,
    "fijo": true
   }
  },
  {
   "id": "esqui-nautico--clasicos",
   "deporte": "ESQUI NAUTICO",
   "modalidad": "CLASICOS",
   "generos": {
    "H": true,
    "M": true,
    "X": false
   },
   "masc": {
    "atletas": 4,
    "suplentes": 2,
    "nota": null
   },
   "fem": {
    "atletas": 4,
    "suplentes": 2,
    "nota": null
   },
   "mixtaComposicion": null,
   "notas": [],
   "minimo": null,
   "topeDelegacion": null,
   "heredado": false,
   "sinCupo": false,
   "matriz": {
    "pruebas": 4,
    "sedes": [
     "San Antero"
    ],
    "estado": "SIN PARAMETRIZAR",
    "parametrizadas": 0
   },
   "restriccionesEdad": 0
  },
  {
   "id": "esqui-nautico--wakeboard",
   "deporte": "ESQUI NAUTICO",
   "modalidad": "WAKEBOARD",
   "generos": {
    "H": true,
    "M": true,
    "X": false
   },
   "masc": {
    "atletas": 4,
    "suplentes": 2,
    "nota": null
   },
   "fem": {
    "atletas": 4,
    "suplentes": 2,
    "nota": null
   },
   "mixtaComposicion": null,
   "notas": [],
   "minimo": null,
   "topeDelegacion": null,
   "heredado": true,
   "sinCupo": false,
   "heredadoCampos": [
    "masc",
    "fem"
   ],
   "heredadoDe": "esqui-nautico--clasicos",
   "matriz": {
    "pruebas": 1,
    "sedes": [
     "San Antero"
    ],
    "estado": "SIN PARAMETRIZAR",
    "parametrizadas": 0
   },
   "restriccionesEdad": 0
  },
  {
   "id": "futbol--campo",
   "deporte": "FUTBOL",
   "modalidad": "CAMPO",
   "generos": {
    "H": true,
    "M": true,
    "X": false
   },
   "masc": {
    "atletas": 18,
    "suplentes": 3,
    "nota": null
   },
   "fem": {
    "atletas": 18,
    "suplentes": 3,
    "nota": null
   },
   "mixtaComposicion": null,
   "notas": [],
   "minimo": null,
   "topeDelegacion": null,
   "heredado": false,
   "sinCupo": false,
   "matriz": {
    "pruebas": 2,
    "sedes": [
     "Montería",
     "Sincelejo"
    ],
    "estado": "SIN PARAMETRIZAR",
    "parametrizadas": 0
   },
   "restriccionesEdad": 1
  },
  {
   "id": "futbol--sala",
   "deporte": "FUTBOL",
   "modalidad": "SALA",
   "generos": {
    "H": true,
    "M": true,
    "X": false
   },
   "masc": {
    "atletas": 12,
    "suplentes": 3,
    "nota": null
   },
   "fem": {
    "atletas": 12,
    "suplentes": 3,
    "nota": null
   },
   "mixtaComposicion": null,
   "notas": [],
   "minimo": {
    "fuente": "MATRIZ",
    "confirmado": true,
    "citaMatriz": "Equipos mínimo de 10 integrantes",
    "pruebas": [
     "Equipos"
    ],
    "alcance": "modalidad",
    "atletas": 10
   },
   "topeDelegacion": null,
   "heredado": false,
   "sinCupo": false,
   "matriz": {
    "pruebas": 1,
    "sedes": [
     "Sincelejo"
    ],
    "estado": "SIN PARAMETRIZAR",
    "parametrizadas": 0
   },
   "restriccionesEdad": 1
  },
  {
   "id": "futbol-de-salon--unico",
   "deporte": "FUTBOL DE SALON",
   "modalidad": "UNICO",
   "generos": {
    "H": true,
    "M": true,
    "X": false
   },
   "masc": {
    "atletas": 12,
    "suplentes": 3,
    "nota": null
   },
   "fem": {
    "atletas": 12,
    "suplentes": 3,
    "nota": null
   },
   "mixtaComposicion": null,
   "notas": [],
   "minimo": null,
   "topeDelegacion": null,
   "heredado": false,
   "sinCupo": false,
   "matriz": {
    "pruebas": 1,
    "sedes": [
     "Sincelejo"
    ],
    "estado": "SIN PARAMETRIZAR",
    "parametrizadas": 0
   },
   "restriccionesEdad": 1
  },
  {
   "id": "gimnasia--artistica",
   "deporte": "GIMNASIA",
   "modalidad": "ARTISTICA",
   "generos": {
    "H": true,
    "M": true,
    "X": false
   },
   "masc": {
    "atletas": 6,
    "suplentes": 0,
    "nota": null,
    "sinSuplentes": true
   },
   "fem": {
    "atletas": 6,
    "suplentes": 0,
    "nota": null,
    "sinSuplentes": true
   },
   "mixtaComposicion": null,
   "notas": [
    "Sin suplentes definidos"
   ],
   "minimo": null,
   "topeDelegacion": null,
   "heredado": false,
   "sinCupo": false,
   "matriz": {
    "pruebas": 10,
    "sedes": [
     "Cerete"
    ],
    "estado": "SIN PARAMETRIZAR",
    "parametrizadas": 0
   },
   "restriccionesEdad": 1
  },
  {
   "id": "gimnasia--ritmica",
   "deporte": "GIMNASIA",
   "modalidad": "RITMICA",
   "generos": {
    "H": false,
    "M": true,
    "X": false
   },
   "masc": {
    "atletas": null,
    "suplentes": null,
    "nota": null
   },
   "fem": {
    "atletas": 10,
    "suplentes": 0,
    "nota": null,
    "sinSuplentes": true
   },
   "mixtaComposicion": null,
   "notas": [],
   "minimo": null,
   "topeDelegacion": null,
   "heredado": false,
   "sinCupo": false,
   "matriz": {
    "pruebas": 9,
    "sedes": [
     "Cerete"
    ],
    "estado": "SIN PARAMETRIZAR",
    "parametrizadas": 0
   },
   "restriccionesEdad": 1,
   "maximoEquipo": {
    "fuente": "MATRIZ",
    "confirmado": true,
    "citaMatriz": "Equipos de 6 atletas",
    "pruebas": [
     "5 Balones",
     "3 Aros / 2 Mazas"
    ],
    "alcance": "prueba",
    "atletas": 6,
    "fijo": true
   }
  },
  {
   "id": "gimnasia--trampolin",
   "deporte": "GIMNASIA",
   "modalidad": "TRAMPOLIN",
   "generos": {
    "H": true,
    "M": true,
    "X": false
   },
   "masc": {
    "atletas": 3,
    "suplentes": 0,
    "nota": null,
    "sinSuplentes": true
   },
   "fem": {
    "atletas": 3,
    "suplentes": 0,
    "nota": null,
    "sinSuplentes": true
   },
   "mixtaComposicion": null,
   "notas": [],
   "minimo": null,
   "topeDelegacion": null,
   "heredado": false,
   "sinCupo": false,
   "matriz": {
    "pruebas": 2,
    "sedes": [
     "Cerete"
    ],
    "estado": "SIN PARAMETRIZAR",
    "parametrizadas": 0
   },
   "restriccionesEdad": 1,
   "composicion": [
    {
     "tipo": "dupla",
     "fuente": "MATRIZ",
     "confirmado": true,
     "citaMatriz": "Duplas",
     "pruebas": [
      "Sincronizado"
     ]
    }
   ]
  },
  {
   "id": "golf--unica",
   "deporte": "GOLF",
   "modalidad": "UNICA",
   "generos": {
    "H": true,
    "M": true,
    "X": false
   },
   "masc": {
    "atletas": 3,
    "suplentes": 1,
    "nota": null
   },
   "fem": {
    "atletas": 3,
    "suplentes": 1,
    "nota": null
   },
   "mixtaComposicion": null,
   "notas": [],
   "minimo": null,
   "topeDelegacion": null,
   "heredado": false,
   "sinCupo": false,
   "matriz": {
    "pruebas": 1,
    "sedes": [
     "Sincelejo"
    ],
    "estado": "SIN PARAMETRIZAR",
    "parametrizadas": 0
   },
   "restriccionesEdad": 0
  },
  {
   "id": "hapkido--combate",
   "deporte": "HAPKIDO",
   "modalidad": "COMBATE",
   "generos": {
    "H": true,
    "M": true,
    "X": true
   },
   "masc": {
    "atletas": 8,
    "suplentes": 0,
    "nota": null,
    "sinSuplentes": true
   },
   "fem": {
    "atletas": 8,
    "suplentes": 0,
    "nota": null,
    "sinSuplentes": true
   },
   "mixtaComposicion": null,
   "notas": [
    "Sin suplentes definidos"
   ],
   "minimo": null,
   "topeDelegacion": null,
   "heredado": false,
   "sinCupo": false,
   "matriz": {
    "pruebas": 9,
    "sedes": [],
    "estado": "SIN PARAMETRIZAR",
    "parametrizadas": 0
   },
   "restriccionesEdad": 1,
   "composicion": [
    {
     "tipo": "mixta",
     "total": 4,
     "fem": 2,
     "masc": 2,
     "fuente": "MATRIZ",
     "confirmado": true,
     "citaMatriz": "Equipos conformados por 2 atletas FEM y 2 MASC",
     "pruebas": [
      "Equipos"
     ]
    }
   ]
  },
  {
   "id": "judo--shiai",
   "deporte": "JUDO",
   "modalidad": "SHIAI",
   "generos": {
    "H": true,
    "M": true,
    "X": false
   },
   "masc": {
    "atletas": 17,
    "suplentes": 2,
    "nota": null
   },
   "fem": {
    "atletas": 17,
    "suplentes": 2,
    "nota": null
   },
   "mixtaComposicion": null,
   "notas": [
    "Los suplentes solo pueden ir en la modalidad de combate"
   ],
   "minimo": null,
   "topeDelegacion": null,
   "heredado": false,
   "sinCupo": false,
   "matriz": {
    "pruebas": 18,
    "sedes": [
     "Sincelejo"
    ],
    "estado": "SIN PARAMETRIZAR",
    "parametrizadas": 0
   },
   "restriccionesEdad": 1,
   "maximoEquipo": {
    "fuente": "MATRIZ",
    "confirmado": true,
    "citaMatriz": "7 atletas por equipo",
    "pruebas": [
     "Equipo"
    ],
    "alcance": "prueba",
    "atletas": 7,
    "fijo": true
   }
  },
  {
   "id": "judo--kata",
   "deporte": "JUDO",
   "modalidad": "KATA",
   "generos": {
    "H": true,
    "M": true,
    "X": false
   },
   "masc": {
    "atletas": 17,
    "suplentes": 2,
    "nota": null
   },
   "fem": {
    "atletas": 17,
    "suplentes": 2,
    "nota": null
   },
   "mixtaComposicion": null,
   "notas": [],
   "minimo": null,
   "topeDelegacion": null,
   "heredado": true,
   "sinCupo": false,
   "heredadoCampos": [
    "masc",
    "fem"
   ],
   "heredadoDe": "judo--shiai",
   "matriz": {
    "pruebas": 4,
    "sedes": [
     "Sincelejo"
    ],
    "estado": "SIN PARAMETRIZAR",
    "parametrizadas": 0
   },
   "restriccionesEdad": 0,
   "composicion": [
    {
     "tipo": "dupla",
     "fuente": "MATRIZ",
     "confirmado": true,
     "citaMatriz": "Katas son en pareja",
     "pruebas": [
      "Kata Nage no Kata"
     ]
    }
   ]
  },
  {
   "id": "karate--kata",
   "deporte": "KARATE",
   "modalidad": "KATA",
   "generos": {
    "H": true,
    "M": true,
    "X": false
   },
   "masc": {
    "atletas": 14,
    "suplentes": 3,
    "nota": null
   },
   "fem": {
    "atletas": 14,
    "suplentes": 3,
    "nota": null
   },
   "mixtaComposicion": null,
   "notas": [],
   "minimo": null,
   "topeDelegacion": null,
   "heredado": false,
   "sinCupo": false,
   "matriz": {
    "pruebas": 2,
    "sedes": [
     "Montería"
    ],
    "estado": "SIN PARAMETRIZAR",
    "parametrizadas": 0
   },
   "restriccionesEdad": 1,
   "maximoEquipo": {
    "fuente": "MATRIZ",
    "confirmado": true,
    "citaMatriz": "Equipo de a 4 atletas",
    "pruebas": [
     "Kata Equipos"
    ],
    "alcance": "prueba",
    "atletas": 4,
    "fijo": true
   }
  },
  {
   "id": "karate--kumite",
   "deporte": "KARATE",
   "modalidad": "KUMITE",
   "generos": {
    "H": true,
    "M": true,
    "X": false
   },
   "masc": {
    "atletas": 14,
    "suplentes": 3,
    "nota": null
   },
   "fem": {
    "atletas": 14,
    "suplentes": 3,
    "nota": null
   },
   "mixtaComposicion": null,
   "notas": [],
   "minimo": null,
   "topeDelegacion": null,
   "heredado": true,
   "sinCupo": false,
   "heredadoCampos": [
    "masc",
    "fem"
   ],
   "heredadoDe": "karate--kata",
   "matriz": {
    "pruebas": 11,
    "sedes": [
     "Montería"
    ],
    "estado": "SIN PARAMETRIZAR",
    "parametrizadas": 0
   },
   "restriccionesEdad": 1,
   "composicion": [
    {
     "tipo": "equipoPorGenero",
     "masc": 7,
     "fem": 4,
     "fuente": "MATRIZ",
     "confirmado": true,
     "citaMatriz": "Equipo MASC de 7 atletas. Equipo FEM de 4 atletas",
     "pruebas": [
      "Kumite Equipos"
     ]
    }
   ]
  },
  {
   "id": "levantamiento-de-pesas--individual",
   "deporte": "LEVANTAMIENTO DE PESAS",
   "modalidad": "INDIVIDUAL",
   "generos": {
    "H": true,
    "M": true,
    "X": false
   },
   "masc": {
    "atletas": 8,
    "suplentes": 3,
    "nota": null
   },
   "fem": {
    "atletas": 8,
    "suplentes": 3,
    "nota": null
   },
   "mixtaComposicion": null,
   "notas": [],
   "minimo": null,
   "topeDelegacion": null,
   "heredado": false,
   "sinCupo": false,
   "matriz": {
    "pruebas": 16,
    "sedes": [
     "Montería"
    ],
    "estado": "SIN PARAMETRIZAR",
    "parametrizadas": 0
   },
   "restriccionesEdad": 1
  },
  {
   "id": "lucha--greco",
   "deporte": "LUCHA",
   "modalidad": "GRECO",
   "generos": {
    "H": true,
    "M": false,
    "X": false
   },
   "masc": {
    "atletas": null,
    "suplentes": null,
    "nota": null,
    "sinTope": true
   },
   "fem": {
    "atletas": null,
    "suplentes": null,
    "nota": null
   },
   "mixtaComposicion": null,
   "notas": [],
   "minimo": null,
   "topeDelegacion": null,
   "heredado": false,
   "sinCupo": true,
   "matriz": {
    "pruebas": 0,
    "sedes": [],
    "estado": null,
    "parametrizadas": 0
   },
   "restriccionesEdad": 0
  },
  {
   "id": "lucha--libre",
   "deporte": "LUCHA",
   "modalidad": "LIBRE",
   "generos": {
    "H": true,
    "M": true,
    "X": false
   },
   "masc": {
    "atletas": null,
    "suplentes": null,
    "nota": null,
    "sinTope": true
   },
   "fem": {
    "atletas": null,
    "suplentes": null,
    "nota": null,
    "sinTope": true
   },
   "mixtaComposicion": null,
   "notas": [],
   "minimo": null,
   "topeDelegacion": null,
   "heredado": false,
   "sinCupo": true,
   "matriz": {
    "pruebas": 0,
    "sedes": [],
    "estado": null,
    "parametrizadas": 0
   },
   "restriccionesEdad": 0
  },
  {
   "id": "natacion--aguas-abiertas",
   "deporte": "NATACIÓN",
   "modalidad": "AGUAS ABIERTAS",
   "generos": {
    "H": true,
    "M": true,
    "X": false
   },
   "masc": {
    "atletas": 2,
    "suplentes": 1,
    "nota": null
   },
   "fem": {
    "atletas": 2,
    "suplentes": 1,
    "nota": null
   },
   "mixtaComposicion": null,
   "notas": [],
   "minimo": null,
   "topeDelegacion": null,
   "heredado": false,
   "sinCupo": false,
   "matriz": {
    "pruebas": 2,
    "sedes": [
     "Montería"
    ],
    "estado": "SIN PARAMETRIZAR",
    "parametrizadas": 0
   },
   "restriccionesEdad": 1,
   "composicion": [
    {
     "tipo": "mixta",
     "fem": 2,
     "masc": 2,
     "fuente": "MATRIZ",
     "confirmado": true,
     "citaMatriz": "2 FEM 2 MASC",
     "pruebas": [
      "4x1500 m Relevo"
     ]
    }
   ]
  },
  {
   "id": "natacion--carreras",
   "deporte": "NATACIÓN",
   "modalidad": "CARRERAS",
   "generos": {
    "H": true,
    "M": true,
    "X": false
   },
   "masc": {
    "atletas": 14,
    "suplentes": 2,
    "nota": null
   },
   "fem": {
    "atletas": 14,
    "suplentes": 2,
    "nota": null
   },
   "mixtaComposicion": null,
   "notas": [],
   "minimo": null,
   "topeDelegacion": null,
   "heredado": false,
   "sinCupo": false,
   "matriz": {
    "pruebas": 20,
    "sedes": [
     "Montería"
    ],
    "estado": "SIN PARAMETRIZAR",
    "parametrizadas": 0
   },
   "restriccionesEdad": 1,
   "composicion": [
    {
     "tipo": "mixta",
     "fem": 2,
     "masc": 2,
     "fuente": "MATRIZ",
     "confirmado": true,
     "citaMatriz": "2 FEM 2 MASC",
     "pruebas": [
      "4x100 m libre",
      "4x100 m combinado"
     ]
    }
   ]
  },
  {
   "id": "natacion--clavados",
   "deporte": "NATACIÓN",
   "modalidad": "CLAVADOS",
   "generos": {
    "H": true,
    "M": true,
    "X": false
   },
   "masc": {
    "atletas": 10,
    "suplentes": 1,
    "nota": null
   },
   "fem": {
    "atletas": 10,
    "suplentes": 1,
    "nota": null
   },
   "mixtaComposicion": null,
   "notas": [],
   "minimo": null,
   "topeDelegacion": null,
   "heredado": false,
   "sinCupo": false,
   "matriz": {
    "pruebas": 4,
    "sedes": [
     "Cali"
    ],
    "estado": "SIN PARAMETRIZAR",
    "parametrizadas": 0
   },
   "restriccionesEdad": 1,
   "composicion": [
    {
     "tipo": "dupla",
     "fuente": "MATRIZ",
     "confirmado": true,
     "citaMatriz": "Parejas",
     "pruebas": [
      "Trampolín 3 m Sincronizado"
     ]
    }
   ]
  },
  {
   "id": "natacion--artistica",
   "deporte": "NATACIÓN",
   "modalidad": "ARTISTICA",
   "generos": {
    "H": true,
    "M": true,
    "X": true
   },
   "masc": {
    "atletas": 8,
    "suplentes": 2,
    "nota": "máximo 2 hombres en los equipos mixtos",
    "fuente": "MATRIZ"
   },
   "fem": {
    "atletas": 8,
    "suplentes": 2,
    "nota": null,
    "fuente": "MATRIZ"
   },
   "mixtaComposicion": "8 ; máximo 2 hombres + 2 suplentes",
   "notas": [
    "«10 ; máximo 2 hombres»: 8 atletas + 2 reservas = 10"
   ],
   "minimo": {
    "atletas": 4,
    "maximo": 8,
    "reservas": 2,
    "ambito": "equipos",
    "generos": [
     "M"
    ],
    "alcance": "modalidad",
    "fuente": "MATRIZ",
    "confirmado": true,
    "citaMatriz": "Cada equipo debe estar conformado entre cuatro (4) y ocho (8) atletas, más dos (2) reservas. Se puede incluir máximo 2 hombres para las pruebas de equipos mixtos",
    "pruebas": [
     "Equipos Rutina Técnica",
     "Equipos Rutina Libre",
     "Equipos Rutina Acrobática"
    ]
   },
   "topeDelegacion": null,
   "heredado": false,
   "sinCupo": false,
   "matriz": {
    "pruebas": 7,
    "sedes": [
     "Montería"
    ],
    "estado": "SIN PARAMETRIZAR",
    "parametrizadas": 0
   },
   "restriccionesEdad": 1,
   "composicion": [
    {
     "tipo": "mixta",
     "total": 8,
     "maxHombres": 2,
     "reservas": 2,
     "fuente": "MATRIZ",
     "confirmado": true,
     "citaMatriz": "Cada equipo debe estar conformado entre cuatro (4) y ocho (8) atletas, más dos (2) reservas. Se puede incluir máximo 2 hombres para las pruebas de equipos mixtos",
     "pruebas": [
      "Equipos Rutina Técnica",
      "Equipos Rutina Libre",
      "Equipos Rutina Acrobática"
     ]
    },
    {
     "tipo": "reserva",
     "reservas": 1,
     "ambito": "duetos",
     "fuente": "MATRIZ",
     "confirmado": true,
     "citaMatriz": "Cada dueto puede tener un (1) nadador(a) reserva",
     "pruebas": [
      "Duetos Rutina Técnica"
     ]
    },
    {
     "tipo": "equipoRango",
     "min": 4,
     "max": 8,
     "reservas": 2,
     "maxHombres": 2,
     "fuente": "MATRIZ",
     "confirmado": true,
     "citaMatriz": "Cada equipo debe estar conformado entre cuatro (4) y ocho (8) atletas, más dos (2) reservas. Se puede incluir máximo 2 hombres para las pruebas de equipos mixtos",
     "pruebas": [
      "Equipos Rutina Técnica"
     ]
    }
   ],
   "mixtaComposicionHoja": "10 ; máximo 2 hombres",
   "mixtaFuente": "MATRIZ"
  },
  {
   "id": "natacion--polo-acuatico",
   "deporte": "NATACIÓN",
   "modalidad": "POLO ACUATICO",
   "generos": {
    "H": true,
    "M": false,
    "X": false
   },
   "masc": {
    "atletas": 15,
    "suplentes": 2,
    "nota": null
   },
   "fem": {
    "atletas": null,
    "suplentes": null,
    "nota": null
   },
   "mixtaComposicion": null,
   "notas": [],
   "minimo": null,
   "topeDelegacion": null,
   "heredado": false,
   "sinCupo": false,
   "matriz": {
    "pruebas": 1,
    "sedes": [
     "Montería"
    ],
    "estado": "SIN PARAMETRIZAR",
    "parametrizadas": 0
   },
   "restriccionesEdad": 0
  },
  {
   "id": "patinaje--artistico",
   "deporte": "PATINAJE",
   "modalidad": "ARTÍSTICO",
   "generos": {
    "H": true,
    "M": true,
    "X": true
   },
   "masc": {
    "atletas": 6,
    "suplentes": 1,
    "nota": null
   },
   "fem": {
    "atletas": 6,
    "suplentes": 1,
    "nota": null
   },
   "mixtaComposicion": null,
   "notas": [],
   "minimo": null,
   "topeDelegacion": null,
   "heredado": false,
   "sinCupo": false,
   "matriz": {
    "pruebas": 3,
    "sedes": [
     "Montería"
    ],
    "estado": "SIN PARAMETRIZAR",
    "parametrizadas": 0
   },
   "restriccionesEdad": 0
  },
  {
   "id": "patinaje--velocidad",
   "deporte": "PATINAJE",
   "modalidad": "VELOCIDAD",
   "generos": {
    "H": true,
    "M": true,
    "X": false
   },
   "masc": {
    "atletas": 6,
    "suplentes": 2,
    "nota": null
   },
   "fem": {
    "atletas": 6,
    "suplentes": 2,
    "nota": null
   },
   "mixtaComposicion": null,
   "notas": [],
   "minimo": null,
   "topeDelegacion": {
    "atletas": 2,
    "por": "prueba",
    "alcance": "prueba",
    "excepcion": "hasta 3 en 10 000 m eliminación, 5000 m puntos, 15 000 m eliminación y 10 000 m puntos",
    "fuente": "MATRIZ",
    "confirmado": true,
    "citaMatriz": "Hasta 2 atletas por delegación · Hasta 3 atletas por delegación",
    "pruebasMatriz": [
     {
      "prueba": "200 m meta contra meta",
      "cita": "Hasta 2 atletas por delegación"
     },
     {
      "prueba": "500 m + distancia",
      "cita": "Hasta 2 atletas por delegación"
     },
     {
      "prueba": "10 000 m eliminación",
      "cita": "Hasta 3 atletas por delegación"
     },
     {
      "prueba": "1000 m sprint",
      "cita": "Hasta 2 atletas por delegación"
     },
     {
      "prueba": "5000 m puntos",
      "cita": "Hasta 3 atletas por delegación"
     },
     {
      "prueba": "100 m carriles",
      "cita": "Hasta 2 atletas por delegación"
     },
     {
      "prueba": "Vuelta al circuito",
      "cita": "Hasta 2 atletas por delegación"
     },
     {
      "prueba": "15 000 m eliminación",
      "cita": "Hasta 3 atletas por delegación"
     },
     {
      "prueba": "10 000 m puntos",
      "cita": "Hasta 3 atletas por delegación"
     }
    ],
    "aviso": true
   },
   "heredado": false,
   "sinCupo": false,
   "matriz": {
    "pruebas": 10,
    "sedes": [
     "Montería"
    ],
    "estado": "SIN PARAMETRIZAR",
    "parametrizadas": 0
   },
   "restriccionesEdad": 1,
   "composicion": [
    {
     "equipos": 1,
     "por": "delegacion",
     "equipoDe": 4,
     "tipo": "topeEquipos",
     "fuente": "MATRIZ",
     "confirmado": true,
     "citaMatriz": "1 Equipo de 4 atletas por delegación",
     "pruebas": [
      "3x3000 m relevos"
     ]
    }
   ]
  },
  {
   "id": "patinaje--skateboarding-park",
   "deporte": "PATINAJE",
   "modalidad": "SKATEBOARDING - PARK",
   "generos": {
    "H": true,
    "M": true,
    "X": false
   },
   "masc": {
    "atletas": 4,
    "suplentes": 2,
    "nota": null
   },
   "fem": {
    "atletas": 4,
    "suplentes": 2,
    "nota": null
   },
   "mixtaComposicion": null,
   "notas": [],
   "minimo": null,
   "topeDelegacion": null,
   "heredado": false,
   "sinCupo": false,
   "matriz": {
    "pruebas": 1,
    "sedes": [
     "Montería"
    ],
    "estado": "SIN PARAMETRIZAR",
    "parametrizadas": 0
   },
   "restriccionesEdad": 1
  },
  {
   "id": "patinaje--skateboarding-street",
   "deporte": "PATINAJE",
   "modalidad": "SKATEBOARDING - STREET",
   "generos": {
    "H": true,
    "M": true,
    "X": false
   },
   "masc": {
    "atletas": 4,
    "suplentes": 2,
    "nota": null
   },
   "fem": {
    "atletas": 4,
    "suplentes": 2,
    "nota": null
   },
   "mixtaComposicion": null,
   "notas": [],
   "minimo": null,
   "topeDelegacion": null,
   "heredado": false,
   "sinCupo": false,
   "matriz": {
    "pruebas": 1,
    "sedes": [
     "Montería"
    ],
    "estado": "SIN PARAMETRIZAR",
    "parametrizadas": 0
   },
   "restriccionesEdad": 0
  },
  {
   "id": "porrismo-exhibicion--cheer-nivel-3",
   "deporte": "PORRISMO (Exhibición)",
   "modalidad": "CHEER-NIVEL 3",
   "generos": {
    "H": false,
    "M": true,
    "X": false
   },
   "masc": {
    "atletas": null,
    "suplentes": null,
    "nota": null
   },
   "fem": {
    "atletas": 12,
    "suplentes": 1,
    "nota": null
   },
   "mixtaComposicion": null,
   "notas": [],
   "minimo": null,
   "topeDelegacion": null,
   "heredado": false,
   "sinCupo": false,
   "matriz": {
    "pruebas": 1,
    "sedes": [],
    "estado": "SIN PARAMETRIZAR",
    "parametrizadas": 0
   },
   "restriccionesEdad": 0
  },
  {
   "id": "porrismo-exhibicion--cheer-nivel-4",
   "deporte": "PORRISMO (Exhibición)",
   "modalidad": "CHEER-NIVEL 4",
   "generos": {
    "H": false,
    "M": false,
    "X": true
   },
   "masc": {
    "atletas": 4,
    "suplentes": null,
    "nota": null
   },
   "fem": {
    "atletas": 8,
    "suplentes": null,
    "nota": null
   },
   "mixtaComposicion": "MASC 4 / FEM 8 + 1 suplente de cualquier género",
   "notas": [],
   "minimo": null,
   "topeDelegacion": null,
   "heredado": false,
   "sinCupo": false,
   "matriz": {
    "pruebas": 1,
    "sedes": [],
    "estado": "SIN PARAMETRIZAR",
    "parametrizadas": 0
   },
   "restriccionesEdad": 0
  },
  {
   "id": "porrismo-exhibicion--performance-cheer-pomp",
   "deporte": "PORRISMO (Exhibición)",
   "modalidad": "PERFORMANCE CHEER-POMP",
   "generos": {
    "H": false,
    "M": false,
    "X": true
   },
   "masc": {
    "atletas": 6,
    "suplentes": 1,
    "nota": null
   },
   "fem": {
    "atletas": null,
    "suplentes": null,
    "nota": null
   },
   "mixtaComposicion": "MASC 6 + 1 suplentes",
   "notas": [],
   "minimo": null,
   "topeDelegacion": null,
   "heredado": false,
   "sinCupo": false,
   "matriz": {
    "pruebas": 1,
    "sedes": [],
    "estado": "SIN PARAMETRIZAR",
    "parametrizadas": 0
   },
   "restriccionesEdad": 0
  },
  {
   "id": "porrismo-exhibicion--performance-cheer-hiphop",
   "deporte": "PORRISMO (Exhibición)",
   "modalidad": "PERFORMANCE CHEER-HIPHOP",
   "generos": {
    "H": false,
    "M": false,
    "X": true
   },
   "masc": {
    "atletas": 6,
    "suplentes": 1,
    "nota": null
   },
   "fem": {
    "atletas": null,
    "suplentes": null,
    "nota": null
   },
   "mixtaComposicion": "MASC 6 + 1 suplentes",
   "notas": [],
   "minimo": null,
   "topeDelegacion": null,
   "heredado": false,
   "sinCupo": false,
   "matriz": {
    "pruebas": 1,
    "sedes": [],
    "estado": "SIN PARAMETRIZAR",
    "parametrizadas": 0
   },
   "restriccionesEdad": 0
  },
  {
   "id": "rugby-siete--unico",
   "deporte": "RUGBY SIETE",
   "modalidad": "UNICO",
   "generos": {
    "H": true,
    "M": true,
    "X": false
   },
   "masc": {
    "atletas": 15,
    "suplentes": 3,
    "nota": null
   },
   "fem": {
    "atletas": 15,
    "suplentes": 3,
    "nota": null
   },
   "mixtaComposicion": null,
   "notas": [],
   "minimo": {
    "fuente": "MATRIZ",
    "confirmado": true,
    "citaMatriz": "Equipos minimo de 12 atletas",
    "pruebas": [
     "Equipos"
    ],
    "alcance": "modalidad",
    "atletas": 12
   },
   "topeDelegacion": null,
   "heredado": false,
   "sinCupo": false,
   "matriz": {
    "pruebas": 1,
    "sedes": [
     "Cerete"
    ],
    "estado": "SIN PARAMETRIZAR",
    "parametrizadas": 0
   },
   "restriccionesEdad": 0
  },
  {
   "id": "softbol--unico",
   "deporte": "SÓFTBOL",
   "modalidad": "UNICO",
   "generos": {
    "H": true,
    "M": true,
    "X": false
   },
   "masc": {
    "atletas": 15,
    "suplentes": 2,
    "nota": null
   },
   "fem": {
    "atletas": 15,
    "suplentes": 2,
    "nota": null
   },
   "mixtaComposicion": null,
   "notas": [],
   "minimo": {
    "fuente": "MATRIZ",
    "confirmado": true,
    "citaMatriz": "Minimo 10 atletas por equipo",
    "pruebas": [
     "Equipos"
    ],
    "alcance": "prueba",
    "atletas": 10
   },
   "topeDelegacion": null,
   "heredado": false,
   "sinCupo": false,
   "matriz": {
    "pruebas": 2,
    "sedes": [
     "Sincelejo",
     "Lorica"
    ],
    "estado": "SIN PARAMETRIZAR",
    "parametrizadas": 0
   },
   "restriccionesEdad": 1
  },
  {
   "id": "surf--shortboard",
   "deporte": "SURF",
   "modalidad": "SHORTBOARD",
   "generos": {
    "H": true,
    "M": true,
    "X": false
   },
   "masc": {
    "atletas": 2,
    "suplentes": 1,
    "nota": null
   },
   "fem": {
    "atletas": 2,
    "suplentes": 1,
    "nota": null
   },
   "mixtaComposicion": null,
   "notas": [
    "Hasta 1 suplente por género (2)"
   ],
   "minimo": null,
   "topeDelegacion": null,
   "heredado": false,
   "sinCupo": false,
   "matriz": {
    "pruebas": 1,
    "sedes": [
     "San Bernardo del Viento"
    ],
    "estado": "SIN PARAMETRIZAR",
    "parametrizadas": 0
   },
   "restriccionesEdad": 0,
   "suplentesFuente": "Nota de la hoja: «Hasta 1 suplente por género (2)»"
  },
  {
   "id": "surf--longboard",
   "deporte": "SURF",
   "modalidad": "LONGBOARD",
   "generos": {
    "H": true,
    "M": true,
    "X": false
   },
   "masc": {
    "atletas": 2,
    "suplentes": 0,
    "nota": null,
    "sinSuplentes": true
   },
   "fem": {
    "atletas": 1,
    "suplentes": 0,
    "nota": null,
    "sinSuplentes": true
   },
   "mixtaComposicion": null,
   "notas": [],
   "minimo": null,
   "topeDelegacion": null,
   "heredado": false,
   "sinCupo": false,
   "matriz": {
    "pruebas": 1,
    "sedes": [
     "San Bernardo del Viento"
    ],
    "estado": "SIN PARAMETRIZAR",
    "parametrizadas": 0
   },
   "restriccionesEdad": 0
  },
  {
   "id": "surf--bodyboard",
   "deporte": "SURF",
   "modalidad": "BODYBOARD",
   "generos": {
    "H": true,
    "M": true,
    "X": false
   },
   "masc": {
    "atletas": 2,
    "suplentes": 0,
    "nota": null,
    "sinSuplentes": true
   },
   "fem": {
    "atletas": 1,
    "suplentes": 0,
    "nota": null,
    "sinSuplentes": true
   },
   "mixtaComposicion": null,
   "notas": [],
   "minimo": null,
   "topeDelegacion": null,
   "heredado": false,
   "sinCupo": false,
   "matriz": {
    "pruebas": 1,
    "sedes": [
     "San Bernardo del Viento"
    ],
    "estado": "SIN PARAMETRIZAR",
    "parametrizadas": 0
   },
   "restriccionesEdad": 0
  },
  {
   "id": "surf--sup-race",
   "deporte": "SURF",
   "modalidad": "SUP RACE",
   "generos": {
    "H": true,
    "M": true,
    "X": false
   },
   "masc": {
    "atletas": 2,
    "suplentes": 0,
    "nota": null,
    "sinSuplentes": true
   },
   "fem": {
    "atletas": 1,
    "suplentes": 0,
    "nota": null,
    "sinSuplentes": true
   },
   "mixtaComposicion": null,
   "notas": [],
   "minimo": null,
   "topeDelegacion": null,
   "heredado": false,
   "sinCupo": false,
   "matriz": {
    "pruebas": 1,
    "sedes": [
     "San Bernardo del Viento"
    ],
    "estado": "SIN PARAMETRIZAR",
    "parametrizadas": 0
   },
   "restriccionesEdad": 0
  },
  {
   "id": "surf--sup-surf",
   "deporte": "SURF",
   "modalidad": "SUP SURF",
   "generos": {
    "H": true,
    "M": false,
    "X": false
   },
   "masc": {
    "atletas": 2,
    "suplentes": 0,
    "nota": null,
    "sinSuplentes": true
   },
   "fem": {
    "atletas": null,
    "suplentes": null,
    "nota": null
   },
   "mixtaComposicion": null,
   "notas": [],
   "minimo": null,
   "topeDelegacion": null,
   "heredado": false,
   "sinCupo": false,
   "matriz": {
    "pruebas": 1,
    "sedes": [
     "San Bernardo del Viento"
    ],
    "estado": "SIN PARAMETRIZAR",
    "parametrizadas": 0
   },
   "restriccionesEdad": 0
  },
  {
   "id": "squash--unica",
   "deporte": "SQUASH",
   "modalidad": "UNICA",
   "generos": {
    "H": true,
    "M": true,
    "X": false
   },
   "masc": {
    "atletas": 4,
    "suplentes": 1,
    "nota": null
   },
   "fem": {
    "atletas": 4,
    "suplentes": 1,
    "nota": null
   },
   "mixtaComposicion": null,
   "notas": [],
   "minimo": {
    "fuente": "MATRIZ",
    "confirmado": true,
    "citaMatriz": "Minimo 3 máximo 4 atletas por equipo",
    "pruebas": [
     "Equipos"
    ],
    "alcance": "prueba",
    "atletas": 3,
    "maximo": 4
   },
   "topeDelegacion": null,
   "heredado": false,
   "sinCupo": false,
   "matriz": {
    "pruebas": 3,
    "sedes": [
     "Montería"
    ],
    "estado": "SIN PARAMETRIZAR",
    "parametrizadas": 0
   },
   "restriccionesEdad": 0,
   "maximoEquipo": {
    "fuente": "MATRIZ",
    "confirmado": true,
    "citaMatriz": "Minimo 3 máximo 4 atletas por equipo",
    "pruebas": [
     "Equipos"
    ],
    "alcance": "prueba",
    "atletas": 4,
    "fijo": false
   }
  },
  {
   "id": "taekwondo--kyorugi",
   "deporte": "TAEKWONDO",
   "modalidad": "KYORUGI",
   "generos": {
    "H": true,
    "M": true,
    "X": false
   },
   "masc": {
    "atletas": 15,
    "suplentes": 3,
    "nota": null
   },
   "fem": {
    "atletas": 15,
    "suplentes": 3,
    "nota": null
   },
   "mixtaComposicion": null,
   "notas": [],
   "minimo": null,
   "topeDelegacion": null,
   "heredado": false,
   "sinCupo": false,
   "matriz": {
    "pruebas": 18,
    "sedes": [
     "Sincelejo"
    ],
    "estado": "SIN PARAMETRIZAR",
    "parametrizadas": 0
   },
   "restriccionesEdad": 1
  },
  {
   "id": "taekwondo--poomsae",
   "deporte": "TAEKWONDO",
   "modalidad": "POOMSAE",
   "generos": {
    "H": true,
    "M": true,
    "X": true
   },
   "masc": {
    "atletas": 15,
    "suplentes": 3,
    "nota": null
   },
   "fem": {
    "atletas": 15,
    "suplentes": 3,
    "nota": null
   },
   "mixtaComposicion": null,
   "notas": [],
   "minimo": null,
   "topeDelegacion": null,
   "heredado": true,
   "sinCupo": false,
   "heredadoCampos": [
    "masc",
    "fem"
   ],
   "heredadoDe": "taekwondo--kyorugi",
   "matriz": {
    "pruebas": 3,
    "sedes": [
     "Sincelejo"
    ],
    "estado": "SIN PARAMETRIZAR",
    "parametrizadas": 0
   },
   "restriccionesEdad": 0
  },
  {
   "id": "tejo--unica",
   "deporte": "TEJO",
   "modalidad": "UNICA",
   "generos": {
    "H": true,
    "M": true,
    "X": false
   },
   "masc": {
    "atletas": 10,
    "suplentes": 1,
    "nota": null
   },
   "fem": {
    "atletas": 10,
    "suplentes": 1,
    "nota": null
   },
   "mixtaComposicion": null,
   "notas": [],
   "minimo": null,
   "topeDelegacion": {
    "atletas": 1,
    "por": "delegacion",
    "ambito": "individual",
    "fuente": "MATRIZ",
    "confirmado": true,
    "citaMatriz": "1 atleta por delegación",
    "pruebas": [
     "Individual"
    ],
    "alcance": "prueba"
   },
   "heredado": false,
   "sinCupo": false,
   "matriz": {
    "pruebas": 5,
    "sedes": [
     "Montería"
    ],
    "estado": "SIN PARAMETRIZAR",
    "parametrizadas": 0
   },
   "restriccionesEdad": 1,
   "maximoEquipo": {
    "fuente": "MATRIZ",
    "confirmado": true,
    "citaMatriz": "6 atletas por equipo",
    "pruebas": [
     "Equipos"
    ],
    "alcance": "prueba",
    "atletas": 6,
    "fijo": true
   },
   "composicion": [
    {
     "tipo": "dupla",
     "fuente": "MATRIZ",
     "confirmado": true,
     "citaMatriz": "3 atletas para duplas",
     "pruebas": [
      "Duplas"
     ]
    }
   ]
  },
  {
   "id": "tenis-de-campo--unica",
   "deporte": "TENIS DE CAMPO",
   "modalidad": "UNICA",
   "generos": {
    "H": true,
    "M": true,
    "X": true
   },
   "masc": {
    "atletas": 4,
    "suplentes": 1,
    "nota": null
   },
   "fem": {
    "atletas": 4,
    "suplentes": 1,
    "nota": null
   },
   "mixtaComposicion": null,
   "notas": [],
   "minimo": null,
   "topeDelegacion": {
    "atletas": 2,
    "por": "prueba",
    "ambito": "individual",
    "alcance": "prueba",
    "pruebas": [
     "Individual"
    ],
    "fuente": "MATRIZ",
    "confirmado": true,
    "citaMatriz": "2 ateltas por delegación",
    "aviso": true
   },
   "heredado": false,
   "sinCupo": false,
   "matriz": {
    "pruebas": 3,
    "sedes": [
     "Montería"
    ],
    "estado": "SIN PARAMETRIZAR",
    "parametrizadas": 0
   },
   "restriccionesEdad": 1,
   "maximoEquipo": {
    "fuente": "MATRIZ",
    "confirmado": true,
    "citaMatriz": "4 atletas por equipo",
    "pruebas": [
     "Equipos"
    ],
    "alcance": "prueba",
    "atletas": 4,
    "fijo": true
   },
   "composicion": [
    {
     "parejas": 1,
     "por": "delegacion",
     "tipo": "topeParejas",
     "fuente": "MATRIZ",
     "confirmado": true,
     "citaMatriz": "1 pareja por delegación",
     "pruebas": [
      "Dobles"
     ]
    }
   ]
  },
  {
   "id": "tenis-de-mesa--unica",
   "deporte": "TENIS DE MESA",
   "modalidad": "UNICA",
   "generos": {
    "H": true,
    "M": true,
    "X": true
   },
   "masc": {
    "atletas": 4,
    "suplentes": 1,
    "nota": null
   },
   "fem": {
    "atletas": 4,
    "suplentes": 1,
    "nota": null
   },
   "mixtaComposicion": null,
   "notas": [],
   "minimo": {
    "fuente": "MATRIZ",
    "confirmado": true,
    "citaMatriz": "Mínimo 3 maximo 4 atletas por equipo",
    "pruebas": [
     "Equipos"
    ],
    "alcance": "prueba",
    "atletas": 3,
    "maximo": 4
   },
   "topeDelegacion": {
    "fuente": "MATRIZ",
    "confirmado": true,
    "citaMatriz": "Hasta 4 atletas por delegación",
    "pruebas": [
     "Individual"
    ],
    "alcance": "prueba",
    "atletas": 4,
    "por": "delegacion",
    "aviso": true
   },
   "heredado": false,
   "sinCupo": false,
   "matriz": {
    "pruebas": 3,
    "sedes": [
     "Montería"
    ],
    "estado": "SIN PARAMETRIZAR",
    "parametrizadas": 0
   },
   "restriccionesEdad": 1,
   "maximoEquipo": {
    "fuente": "MATRIZ",
    "confirmado": true,
    "citaMatriz": "Mínimo 3 maximo 4 atletas por equipo",
    "pruebas": [
     "Equipos"
    ],
    "alcance": "prueba",
    "atletas": 4,
    "fijo": false
   },
   "composicion": [
    {
     "parejas": 4,
     "por": "delegacion",
     "tipo": "topeParejas",
     "fuente": "MATRIZ",
     "confirmado": true,
     "citaMatriz": "Hasta 4 parejas por delegación",
     "pruebas": [
      "Dobles"
     ]
    }
   ]
  },
  {
   "id": "tiro-deportivo--rifle",
   "deporte": "TIRO DEPORTIVO",
   "modalidad": "RIFLE",
   "generos": {
    "H": true,
    "M": true,
    "X": true
   },
   "masc": {
    "atletas": 27,
    "suplentes": 3,
    "nota": "Max 1 suplente por arma"
   },
   "fem": {
    "atletas": 21,
    "suplentes": 3,
    "nota": "Max 1 suplente por arma"
   },
   "mixtaComposicion": null,
   "notas": [],
   "minimo": {
    "atletas": null,
    "maxSuplentesPorArma": 1,
    "fuente": "HOJA",
    "confirmado": true,
    "citaHoja": "Max 1 suplente por arma",
    "alcance": "modalidad"
   },
   "topeDelegacion": {
    "equiposMixtos": 2,
    "por": "delegacion",
    "fuente": "MATRIZ",
    "confirmado": true,
    "citaMatriz": "Máx 2 equipos mixtos por delegación",
    "pruebas": [
     "Rifle 10 m Aire Equipos"
    ],
    "alcance": "prueba"
   },
   "heredado": false,
   "sinCupo": false,
   "matriz": {
    "pruebas": 3,
    "sedes": [
     "Montería"
    ],
    "estado": "SIN PARAMETRIZAR",
    "parametrizadas": 0
   },
   "restriccionesEdad": 1,
   "maximoEquipo": {
    "fuente": "MATRIZ",
    "confirmado": true,
    "citaMatriz": "Equipos por género conformados por 3 atletas",
    "pruebas": [
     "Rifle 10 m Aire Equipos"
    ],
    "alcance": "prueba",
    "atletas": 3,
    "fijo": true
   },
   "composicion": [
    {
     "tipo": "mixta",
     "total": 2,
     "fuente": "MATRIZ",
     "confirmado": true,
     "citaMatriz": "Equipos mixtos conformados por 2 atletas",
     "pruebas": [
      "Rifle 10 m Aire Equipos"
     ]
    }
   ]
  },
  {
   "id": "tiro-deportivo--pistola",
   "deporte": "TIRO DEPORTIVO",
   "modalidad": "PISTOLA",
   "generos": {
    "H": true,
    "M": true,
    "X": true
   },
   "masc": {
    "atletas": 27,
    "suplentes": 3,
    "nota": "Max 1 suplente por arma"
   },
   "fem": {
    "atletas": 21,
    "suplentes": 3,
    "nota": "Max 1 suplente por arma"
   },
   "mixtaComposicion": null,
   "notas": [],
   "minimo": {
    "atletas": null,
    "maxSuplentesPorArma": 1,
    "fuente": "HOJA",
    "confirmado": true,
    "citaHoja": "Max 1 suplente por arma",
    "alcance": "modalidad"
   },
   "topeDelegacion": {
    "equiposMixtos": 2,
    "por": "delegacion",
    "fuente": "MATRIZ",
    "confirmado": true,
    "citaMatriz": "Máx 2 equipos mixtos por delegación",
    "pruebas": [
     "Pistola 10 m Aire Equipos"
    ],
    "alcance": "prueba"
   },
   "heredado": true,
   "sinCupo": false,
   "heredadoCampos": [
    "masc",
    "fem"
   ],
   "heredadoDe": "tiro-deportivo--rifle",
   "matriz": {
    "pruebas": 4,
    "sedes": [
     "Montería"
    ],
    "estado": "SIN PARAMETRIZAR",
    "parametrizadas": 0
   },
   "restriccionesEdad": 0,
   "maximoEquipo": {
    "fuente": "MATRIZ",
    "confirmado": true,
    "citaMatriz": "Equipos por género conformados por 3 atletas",
    "pruebas": [
     "Pistola 10 m Aire Equipos"
    ],
    "alcance": "prueba",
    "atletas": 3,
    "fijo": true
   },
   "composicion": [
    {
     "tipo": "mixta",
     "total": 2,
     "fuente": "MATRIZ",
     "confirmado": true,
     "citaMatriz": "Equipos mixtos conformados por 2 atletas",
     "pruebas": [
      "Pistola 10 m Aire Equipos"
     ]
    }
   ]
  },
  {
   "id": "tiro-deportivo--escopeta",
   "deporte": "TIRO DEPORTIVO",
   "modalidad": "ESCOPETA",
   "generos": {
    "H": true,
    "M": true,
    "X": false
   },
   "masc": {
    "atletas": 27,
    "suplentes": 3,
    "nota": "Max 1 suplente por arma"
   },
   "fem": {
    "atletas": 21,
    "suplentes": 3,
    "nota": "Max 1 suplente por arma"
   },
   "mixtaComposicion": null,
   "notas": [],
   "minimo": {
    "atletas": null,
    "maxSuplentesPorArma": 1,
    "fuente": "HOJA",
    "confirmado": true,
    "citaHoja": "Max 1 suplente por arma",
    "alcance": "modalidad"
   },
   "topeDelegacion": null,
   "heredado": true,
   "sinCupo": false,
   "heredadoCampos": [
    "masc",
    "fem"
   ],
   "heredadoDe": "tiro-deportivo--pistola",
   "matriz": {
    "pruebas": 6,
    "sedes": [
     "Montería"
    ],
    "estado": "SIN PARAMETRIZAR",
    "parametrizadas": 0
   },
   "restriccionesEdad": 0,
   "maximoEquipo": {
    "fuente": "MATRIZ",
    "confirmado": true,
    "citaMatriz": "Equipos conformados por 3 atletas",
    "pruebas": [
     "Trap Equipos",
     "Sporting Clays Equipos"
    ],
    "alcance": "prueba",
    "atletas": 3,
    "fijo": true
   }
  },
  {
   "id": "triatlon--triathlon",
   "deporte": "TRIATLÓN",
   "modalidad": "TRIATHLON",
   "generos": {
    "H": true,
    "M": true,
    "X": true
   },
   "masc": {
    "atletas": 7,
    "suplentes": 2,
    "nota": null
   },
   "fem": {
    "atletas": 7,
    "suplentes": 2,
    "nota": null
   },
   "mixtaComposicion": null,
   "notas": [],
   "minimo": null,
   "topeDelegacion": {
    "atletas": 4,
    "por": "genero",
    "fuente": "MATRIZ",
    "confirmado": true,
    "citaMatriz": "Máx 4 atletas por delegación y género",
    "pruebas": [
     "Individual Triatlón Sprint"
    ],
    "alcance": "prueba"
   },
   "heredado": false,
   "sinCupo": false,
   "matriz": {
    "pruebas": 2,
    "sedes": [
     "Tolú"
    ],
    "estado": "SIN PARAMETRIZAR",
    "parametrizadas": 0
   },
   "restriccionesEdad": 1,
   "composicion": [
    {
     "tipo": "mixta",
     "total": 4,
     "fem": 2,
     "masc": 2,
     "fuente": "MATRIZ",
     "confirmado": true,
     "citaMatriz": "Equipos de 4 atletas 2 FEM 2 MASC",
     "pruebas": [
      "Relevo Triatlón"
     ]
    },
    {
     "equipos": 2,
     "por": "delegacion",
     "tipo": "topeEquipos",
     "fuente": "MATRIZ",
     "confirmado": true,
     "citaMatriz": "Máx 2 equipos por delegación",
     "pruebas": [
      "Relevo Triatlón"
     ]
    }
   ]
  },
  {
   "id": "triatlon--duathlon",
   "deporte": "TRIATLÓN",
   "modalidad": "DUATHLON",
   "generos": {
    "H": true,
    "M": true,
    "X": true
   },
   "masc": {
    "atletas": 7,
    "suplentes": 2,
    "nota": null
   },
   "fem": {
    "atletas": 7,
    "suplentes": 2,
    "nota": null
   },
   "mixtaComposicion": null,
   "notas": [],
   "minimo": null,
   "topeDelegacion": {
    "atletas": 3,
    "por": "genero",
    "alcance": "prueba",
    "pruebas": [
     "Individual Duatlón Sprint"
    ],
    "fuente": "MATRIZ",
    "confirmado": true,
    "citaMatriz": "Máx 3 atletas por delegación y género"
   },
   "heredado": true,
   "sinCupo": false,
   "heredadoCampos": [
    "masc",
    "fem"
   ],
   "heredadoDe": "triatlon--triathlon",
   "matriz": {
    "pruebas": 2,
    "sedes": [
     "Tolú"
    ],
    "estado": "SIN PARAMETRIZAR",
    "parametrizadas": 0
   },
   "restriccionesEdad": 0,
   "composicion": [
    {
     "tipo": "mixta",
     "total": 2,
     "fem": 1,
     "masc": 1,
     "fuente": "MATRIZ",
     "confirmado": true,
     "citaMatriz": "Equipos de 2 atletas 1 FEM 1 MASC",
     "pruebas": [
      "Relevo Duatlón"
     ]
    }
   ]
  },
  {
   "id": "vela--tabla-a-vela-wingfoil",
   "deporte": "VELA",
   "modalidad": "Tabla a Vela - Wingfoil",
   "generos": {
    "H": false,
    "M": false,
    "X": true
   },
   "masc": {
    "atletas": 3,
    "suplentes": null,
    "nota": null
   },
   "fem": {
    "atletas": null,
    "suplentes": null,
    "nota": null
   },
   "mixtaComposicion": "MASC 3",
   "notas": [],
   "minimo": null,
   "topeDelegacion": null,
   "heredado": false,
   "sinCupo": false,
   "matriz": {
    "pruebas": 1,
    "sedes": [
     "Coveñas"
    ],
    "estado": "SIN PARAMETRIZAR",
    "parametrizadas": 0
   },
   "restriccionesEdad": 0,
   "maximoEquipo": {
    "fuente": "MATRIZ",
    "confirmado": true,
    "citaMatriz": "Equipo de 3 atletas",
    "pruebas": [
     "Tabla a Vela - Wingfoil"
    ],
    "alcance": "modalidad",
    "atletas": 3,
    "fijo": true
   }
  },
  {
   "id": "vela--tabla-kite-formula-kite",
   "deporte": "VELA",
   "modalidad": "Tabla Kite - Formula Kite",
   "generos": {
    "H": true,
    "M": true,
    "X": false
   },
   "masc": {
    "atletas": 3,
    "suplentes": 1,
    "nota": null
   },
   "fem": {
    "atletas": 3,
    "suplentes": 1,
    "nota": null
   },
   "mixtaComposicion": null,
   "notas": [],
   "minimo": null,
   "topeDelegacion": null,
   "heredado": false,
   "sinCupo": false,
   "matriz": {
    "pruebas": 1,
    "sedes": [
     "Coveñas"
    ],
    "estado": "SIN PARAMETRIZAR",
    "parametrizadas": 0
   },
   "restriccionesEdad": 0
  },
  {
   "id": "vela--tabla-kite-twin-tip",
   "deporte": "VELA",
   "modalidad": "Tabla Kite - Twin Tip",
   "generos": {
    "H": true,
    "M": true,
    "X": false
   },
   "masc": {
    "atletas": 3,
    "suplentes": 1,
    "nota": null
   },
   "fem": {
    "atletas": 3,
    "suplentes": 1,
    "nota": null
   },
   "mixtaComposicion": null,
   "notas": [],
   "minimo": null,
   "topeDelegacion": null,
   "heredado": false,
   "sinCupo": false,
   "matriz": {
    "pruebas": 1,
    "sedes": [
     "Coveñas"
    ],
    "estado": "SIN PARAMETRIZAR",
    "parametrizadas": 0
   },
   "restriccionesEdad": 0
  },
  {
   "id": "vela--bote-optimist",
   "deporte": "VELA",
   "modalidad": "Bote - Optimist",
   "generos": {
    "H": false,
    "M": false,
    "X": true
   },
   "masc": {
    "atletas": 3,
    "suplentes": null,
    "nota": null
   },
   "fem": {
    "atletas": null,
    "suplentes": null,
    "nota": null
   },
   "mixtaComposicion": "MASC 3",
   "notas": [],
   "minimo": null,
   "topeDelegacion": null,
   "heredado": false,
   "sinCupo": false,
   "matriz": {
    "pruebas": 1,
    "sedes": [
     "Coveñas"
    ],
    "estado": "SIN PARAMETRIZAR",
    "parametrizadas": 0
   },
   "restriccionesEdad": 0,
   "maximoEquipo": {
    "fuente": "MATRIZ",
    "confirmado": true,
    "citaMatriz": "Equipo de 3 atletas",
    "pruebas": [
     "Bote - Optimist"
    ],
    "alcance": "modalidad",
    "atletas": 3,
    "fijo": true
   }
  },
  {
   "id": "vela--bote-sunfish",
   "deporte": "VELA",
   "modalidad": "Bote - Sunfish",
   "generos": {
    "H": true,
    "M": true,
    "X": false
   },
   "masc": {
    "atletas": 3,
    "suplentes": 1,
    "nota": null
   },
   "fem": {
    "atletas": 3,
    "suplentes": 1,
    "nota": null
   },
   "mixtaComposicion": null,
   "notas": [],
   "minimo": null,
   "topeDelegacion": null,
   "heredado": false,
   "sinCupo": false,
   "matriz": {
    "pruebas": 1,
    "sedes": [
     "Coveñas"
    ],
    "estado": "SIN PARAMETRIZAR",
    "parametrizadas": 0
   },
   "restriccionesEdad": 0
  },
  {
   "id": "vela--bote-ilca-6",
   "deporte": "VELA",
   "modalidad": "Bote - ILCA 6",
   "generos": {
    "H": false,
    "M": true,
    "X": false
   },
   "masc": {
    "atletas": null,
    "suplentes": null,
    "nota": null
   },
   "fem": {
    "atletas": 3,
    "suplentes": 1,
    "nota": null
   },
   "mixtaComposicion": null,
   "notas": [],
   "minimo": null,
   "topeDelegacion": null,
   "heredado": false,
   "sinCupo": false,
   "matriz": {
    "pruebas": 1,
    "sedes": [
     "Coveñas"
    ],
    "estado": "SIN PARAMETRIZAR",
    "parametrizadas": 0
   },
   "restriccionesEdad": 0
  },
  {
   "id": "vela--bote-ilca-7",
   "deporte": "VELA",
   "modalidad": "Bote - ILCA 7",
   "generos": {
    "H": true,
    "M": false,
    "X": false
   },
   "masc": {
    "atletas": 3,
    "suplentes": 1,
    "nota": null
   },
   "fem": {
    "atletas": null,
    "suplentes": null,
    "nota": null
   },
   "mixtaComposicion": null,
   "notas": [],
   "minimo": null,
   "topeDelegacion": null,
   "heredado": false,
   "sinCupo": false,
   "matriz": {
    "pruebas": 1,
    "sedes": [
     "Coveñas"
    ],
    "estado": "SIN PARAMETRIZAR",
    "parametrizadas": 0
   },
   "restriccionesEdad": 0
  },
  {
   "id": "vela--bote-snipe",
   "deporte": "VELA",
   "modalidad": "Bote - Snipe",
   "generos": {
    "H": false,
    "M": false,
    "X": true
   },
   "masc": {
    "atletas": 1,
    "suplentes": null,
    "nota": null
   },
   "fem": {
    "atletas": 1,
    "suplentes": null,
    "nota": null
   },
   "mixtaComposicion": "MASC 1 / FEM 1",
   "notas": [],
   "minimo": null,
   "topeDelegacion": null,
   "heredado": false,
   "sinCupo": false,
   "matriz": {
    "pruebas": 1,
    "sedes": [
     "Coveñas"
    ],
    "estado": "SIN PARAMETRIZAR",
    "parametrizadas": 0
   },
   "restriccionesEdad": 0,
   "maximoEquipo": {
    "fuente": "MATRIZ",
    "confirmado": true,
    "citaMatriz": "Equipo de 2 atletas",
    "pruebas": [
     "Bote - Snipe"
    ],
    "alcance": "modalidad",
    "atletas": 2,
    "fijo": true
   }
  },
  {
   "id": "voleibol--conjunto-coliseo",
   "deporte": "VOLEIBOL",
   "modalidad": "CONJUNTO COLISEO",
   "generos": {
    "H": true,
    "M": true,
    "X": false
   },
   "masc": {
    "atletas": 14,
    "suplentes": 2,
    "nota": null
   },
   "fem": {
    "atletas": 14,
    "suplentes": 2,
    "nota": null
   },
   "mixtaComposicion": null,
   "notas": [],
   "minimo": {
    "fuente": "MATRIZ",
    "confirmado": true,
    "citaMatriz": "Equipos de minimo 9 atletas, Máx 14",
    "pruebas": [
     "Equipos"
    ],
    "alcance": "modalidad",
    "atletas": 9,
    "maximo": 14
   },
   "topeDelegacion": null,
   "heredado": false,
   "sinCupo": false,
   "matriz": {
    "pruebas": 1,
    "sedes": [
     "Sincelejo"
    ],
    "estado": "SIN PARAMETRIZAR",
    "parametrizadas": 0
   },
   "restriccionesEdad": 0,
   "maximoEquipo": {
    "fuente": "MATRIZ",
    "confirmado": true,
    "citaMatriz": "Equipos de minimo 9 atletas, Máx 14",
    "pruebas": [
     "Equipos"
    ],
    "alcance": "modalidad",
    "atletas": 14,
    "fijo": false
   }
  },
  {
   "id": "voleibol--conjunto-playa",
   "deporte": "VOLEIBOL",
   "modalidad": "CONJUNTO PLAYA",
   "generos": {
    "H": true,
    "M": true,
    "X": false
   },
   "masc": {
    "atletas": 2,
    "suplentes": 2,
    "nota": null
   },
   "fem": {
    "atletas": 2,
    "suplentes": 2,
    "nota": null
   },
   "mixtaComposicion": null,
   "notas": [],
   "minimo": null,
   "topeDelegacion": null,
   "heredado": false,
   "sinCupo": false,
   "matriz": {
    "pruebas": 1,
    "sedes": [
     "Ciénaga de Oro"
    ],
    "estado": "SIN PARAMETRIZAR",
    "parametrizadas": 0
   },
   "restriccionesEdad": 0,
   "maximoEquipo": {
    "fuente": "MATRIZ",
    "confirmado": true,
    "citaMatriz": "Equipos de 2 atletas",
    "pruebas": [
     "Equipos"
    ],
    "alcance": "modalidad",
    "atletas": 2,
    "fijo": true
   }
  }
 ],
 "mapaNombres": [
  {
   "deporte": "Actividades Subacuáticas",
   "modalidad": "Cortas - Piscina",
   "reglaId": "actividades-subacauticas--cortas-piscina",
   "reglaIds": [
    "actividades-subacauticas--cortas-piscina"
   ],
   "confianza": "alta",
   "sinRegla": false
  },
  {
   "deporte": "Actividades Subacuáticas",
   "modalidad": "Largas - Aguas Abiertas",
   "reglaId": "actividades-subacauticas--largas-aguas-abiertas",
   "reglaIds": [
    "actividades-subacauticas--largas-aguas-abiertas"
   ],
   "confianza": "alta",
   "sinRegla": false
  },
  {
   "deporte": "Ajedrez",
   "modalidad": "Blitz",
   "reglaId": "ajedrez--blitz",
   "reglaIds": [
    "ajedrez--blitz"
   ],
   "confianza": "alta",
   "sinRegla": false
  },
  {
   "deporte": "Ajedrez",
   "modalidad": "Clásico",
   "reglaId": "ajedrez--clasico",
   "reglaIds": [
    "ajedrez--clasico"
   ],
   "confianza": "alta",
   "sinRegla": false
  },
  {
   "deporte": "Ajedrez",
   "modalidad": "Rápido",
   "reglaId": "ajedrez--rapido",
   "reglaIds": [
    "ajedrez--rapido"
   ],
   "confianza": "alta",
   "sinRegla": false
  },
  {
   "deporte": "Arquería",
   "modalidad": "Compuesto",
   "reglaId": "tiro-con-arco--compuesto",
   "reglaIds": [
    "tiro-con-arco--compuesto"
   ],
   "confianza": "alta",
   "sinRegla": false,
   "equivalencia": "renombre"
  },
  {
   "deporte": "Arquería",
   "modalidad": "Recurvo",
   "reglaId": "tiro-con-arco--recurvo",
   "reglaIds": [
    "tiro-con-arco--recurvo"
   ],
   "confianza": "alta",
   "sinRegla": false,
   "equivalencia": "renombre"
  },
  {
   "deporte": "Atletismo",
   "modalidad": "Campo",
   "reglaId": "atletismo--campo",
   "reglaIds": [
    "atletismo--campo"
   ],
   "confianza": "alta",
   "sinRegla": false
  },
  {
   "deporte": "Atletismo",
   "modalidad": "Combinadas",
   "reglaId": "atletismo--combinadas",
   "reglaIds": [
    "atletismo--combinadas"
   ],
   "confianza": "alta",
   "sinRegla": false
  },
  {
   "deporte": "Atletismo",
   "modalidad": "Marcha",
   "reglaId": "atletismo--marcha",
   "reglaIds": [
    "atletismo--marcha"
   ],
   "confianza": "alta",
   "sinRegla": false
  },
  {
   "deporte": "Atletismo",
   "modalidad": "Pista",
   "reglaId": "atletismo--pista",
   "reglaIds": [
    "atletismo--pista"
   ],
   "confianza": "alta",
   "sinRegla": false
  },
  {
   "deporte": "Atletismo",
   "modalidad": "Ruta",
   "reglaId": "atletismo--ruta",
   "reglaIds": [
    "atletismo--ruta"
   ],
   "confianza": "alta",
   "sinRegla": false
  },
  {
   "deporte": "Baloncesto",
   "modalidad": "Conjunto 3x3",
   "reglaId": "baloncesto--conjunto-3x3",
   "reglaIds": [
    "baloncesto--conjunto-3x3"
   ],
   "confianza": "alta",
   "sinRegla": false
  },
  {
   "deporte": "Baloncesto",
   "modalidad": "Conjunto 5x5",
   "reglaId": "baloncesto--conjunto-5x5",
   "reglaIds": [
    "baloncesto--conjunto-5x5"
   ],
   "confianza": "alta",
   "sinRegla": false
  },
  {
   "deporte": "Balonmano",
   "modalidad": "Conjunto",
   "reglaId": "balonmano--conjunto",
   "reglaIds": [
    "balonmano--conjunto"
   ],
   "confianza": "alta",
   "sinRegla": false
  },
  {
   "deporte": "Billar",
   "modalidad": "Carambola",
   "reglaId": "billar--carambola",
   "reglaIds": [
    "billar--carambola"
   ],
   "confianza": "alta",
   "sinRegla": false
  },
  {
   "deporte": "Billar",
   "modalidad": "Heybal",
   "reglaId": "billar--heybal",
   "reglaIds": [
    "billar--heybal"
   ],
   "confianza": "alta",
   "sinRegla": false
  },
  {
   "deporte": "Billar",
   "modalidad": "Pool",
   "reglaId": "billar--pool",
   "reglaIds": [
    "billar--pool"
   ],
   "confianza": "alta",
   "sinRegla": false
  },
  {
   "deporte": "Bowling",
   "modalidad": "Única",
   "reglaId": "bowling--unica",
   "reglaIds": [
    "bowling--unica"
   ],
   "confianza": "alta",
   "sinRegla": false
  },
  {
   "deporte": "Boxeo",
   "modalidad": "Única",
   "reglaId": "boxeo--unica",
   "reglaIds": [
    "boxeo--unica"
   ],
   "confianza": "alta",
   "sinRegla": false
  },
  {
   "deporte": "Bádminton",
   "modalidad": "Única",
   "reglaId": "badminton--unica",
   "reglaIds": [
    "badminton--unica"
   ],
   "confianza": "alta",
   "sinRegla": false
  },
  {
   "deporte": "Béisbol",
   "modalidad": "Conjunto",
   "reglaId": "beisbol--conjunto",
   "reglaIds": [
    "beisbol--conjunto"
   ],
   "confianza": "alta",
   "sinRegla": false
  },
  {
   "deporte": "Canotaje",
   "modalidad": "Kayak Cross",
   "reglaId": "canotaje--kayak-cross",
   "reglaIds": [
    "canotaje--kayak-cross"
   ],
   "confianza": "alta",
   "sinRegla": false
  },
  {
   "deporte": "Canotaje",
   "modalidad": "Slalom",
   "reglaId": "canotaje--slalom",
   "reglaIds": [
    "canotaje--slalom"
   ],
   "confianza": "alta",
   "sinRegla": false
  },
  {
   "deporte": "Canotaje",
   "modalidad": "Velocidad",
   "reglaId": "canotaje--velocidad",
   "reglaIds": [
    "canotaje--velocidad"
   ],
   "confianza": "alta",
   "sinRegla": false
  },
  {
   "deporte": "Ciclismo",
   "modalidad": "BMX",
   "reglaId": "ciclismo--bmx",
   "reglaIds": [
    "ciclismo--bmx"
   ],
   "confianza": "alta",
   "sinRegla": false
  },
  {
   "deporte": "Ciclismo",
   "modalidad": "MTB",
   "reglaId": "ciclismo--mtb",
   "reglaIds": [
    "ciclismo--mtb"
   ],
   "confianza": "alta",
   "sinRegla": false
  },
  {
   "deporte": "Ciclismo",
   "modalidad": "Pista",
   "reglaId": "ciclismo--pista",
   "reglaIds": [
    "ciclismo--pista"
   ],
   "confianza": "alta",
   "sinRegla": false
  },
  {
   "deporte": "Ciclismo",
   "modalidad": "Ruta",
   "reglaId": "ciclismo--ruta",
   "reglaIds": [
    "ciclismo--ruta"
   ],
   "confianza": "alta",
   "sinRegla": false
  },
  {
   "deporte": "Ecuestre",
   "modalidad": "Adiestramiento",
   "reglaId": "ecuestre--adiestramiento",
   "reglaIds": [
    "ecuestre--adiestramiento"
   ],
   "confianza": "alta",
   "sinRegla": false
  },
  {
   "deporte": "Ecuestre",
   "modalidad": "Prueba Completa",
   "reglaId": "ecuestre--prueba-completa",
   "reglaIds": [
    "ecuestre--prueba-completa"
   ],
   "confianza": "alta",
   "sinRegla": false
  },
  {
   "deporte": "Ecuestre",
   "modalidad": "Salto",
   "reglaId": "ecuestre--salto",
   "reglaIds": [
    "ecuestre--salto"
   ],
   "confianza": "alta",
   "sinRegla": false
  },
  {
   "deporte": "Esgrima",
   "modalidad": "Espada",
   "reglaId": "esgrima--unica",
   "reglaIds": [
    "esgrima--unica"
   ],
   "confianza": "alta",
   "sinRegla": false,
   "equivalencia": "renombre"
  },
  {
   "deporte": "Esgrima",
   "modalidad": "Florete",
   "reglaId": "esgrima--unica",
   "reglaIds": [
    "esgrima--unica"
   ],
   "confianza": "alta",
   "sinRegla": false,
   "equivalencia": "renombre"
  },
  {
   "deporte": "Esgrima",
   "modalidad": "Sable",
   "reglaId": "esgrima--unica",
   "reglaIds": [
    "esgrima--unica"
   ],
   "confianza": "alta",
   "sinRegla": false,
   "equivalencia": "renombre"
  },
  {
   "deporte": "Esquí Náutico",
   "modalidad": "Clásicos",
   "reglaId": "esqui-nautico--clasicos",
   "reglaIds": [
    "esqui-nautico--clasicos"
   ],
   "confianza": "alta",
   "sinRegla": false
  },
  {
   "deporte": "Esquí Náutico",
   "modalidad": "Wakeboard",
   "reglaId": "esqui-nautico--wakeboard",
   "reglaIds": [
    "esqui-nautico--wakeboard"
   ],
   "confianza": "alta",
   "sinRegla": false
  },
  {
   "deporte": "Fútbol",
   "modalidad": "Campo",
   "reglaId": "futbol--campo",
   "reglaIds": [
    "futbol--campo"
   ],
   "confianza": "alta",
   "sinRegla": false
  },
  {
   "deporte": "Fútbol",
   "modalidad": "Sala",
   "reglaId": "futbol--sala",
   "reglaIds": [
    "futbol--sala"
   ],
   "confianza": "alta",
   "sinRegla": false
  },
  {
   "deporte": "Fútbol Salón",
   "modalidad": "Único",
   "reglaId": "futbol-de-salon--unico",
   "reglaIds": [
    "futbol-de-salon--unico"
   ],
   "confianza": "alta",
   "sinRegla": false,
   "equivalencia": "renombre"
  },
  {
   "deporte": "Gimnasia",
   "modalidad": "Artística",
   "reglaId": "gimnasia--artistica",
   "reglaIds": [
    "gimnasia--artistica"
   ],
   "confianza": "alta",
   "sinRegla": false
  },
  {
   "deporte": "Gimnasia",
   "modalidad": "Rítmica",
   "reglaId": "gimnasia--ritmica",
   "reglaIds": [
    "gimnasia--ritmica"
   ],
   "confianza": "alta",
   "sinRegla": false
  },
  {
   "deporte": "Gimnasia",
   "modalidad": "Trampolín",
   "reglaId": "gimnasia--trampolin",
   "reglaIds": [
    "gimnasia--trampolin"
   ],
   "confianza": "alta",
   "sinRegla": false
  },
  {
   "deporte": "Golf",
   "modalidad": "Única",
   "reglaId": "golf--unica",
   "reglaIds": [
    "golf--unica"
   ],
   "confianza": "alta",
   "sinRegla": false
  },
  {
   "deporte": "Hapkido",
   "modalidad": "Combate",
   "reglaId": "hapkido--combate",
   "reglaIds": [
    "hapkido--combate"
   ],
   "confianza": "alta",
   "sinRegla": false
  },
  {
   "deporte": "Judo",
   "modalidad": "Kata",
   "reglaId": "judo--kata",
   "reglaIds": [
    "judo--kata"
   ],
   "confianza": "alta",
   "sinRegla": false
  },
  {
   "deporte": "Judo",
   "modalidad": "Shiai",
   "reglaId": "judo--shiai",
   "reglaIds": [
    "judo--shiai"
   ],
   "confianza": "alta",
   "sinRegla": false
  },
  {
   "deporte": "Karate",
   "modalidad": "Kata",
   "reglaId": "karate--kata",
   "reglaIds": [
    "karate--kata"
   ],
   "confianza": "alta",
   "sinRegla": false
  },
  {
   "deporte": "Karate",
   "modalidad": "Kumite",
   "reglaId": "karate--kumite",
   "reglaIds": [
    "karate--kumite"
   ],
   "confianza": "alta",
   "sinRegla": false
  },
  {
   "deporte": "Levantamiento de Pesas",
   "modalidad": "Individual",
   "reglaId": "levantamiento-de-pesas--individual",
   "reglaIds": [
    "levantamiento-de-pesas--individual"
   ],
   "confianza": "alta",
   "sinRegla": false
  },
  {
   "deporte": "Lucha",
   "modalidad": "Greco",
   "reglaId": "lucha--greco",
   "reglaIds": [
    "lucha--greco"
   ],
   "confianza": "alta",
   "sinRegla": false
  },
  {
   "deporte": "Lucha",
   "modalidad": "Libre",
   "reglaId": "lucha--libre",
   "reglaIds": [
    "lucha--libre"
   ],
   "confianza": "alta",
   "sinRegla": false
  },
  {
   "deporte": "Natación",
   "modalidad": "Aguas Abiertas",
   "reglaId": "natacion--aguas-abiertas",
   "reglaIds": [
    "natacion--aguas-abiertas"
   ],
   "confianza": "alta",
   "sinRegla": false
  },
  {
   "deporte": "Natación",
   "modalidad": "Artística",
   "reglaId": "natacion--artistica",
   "reglaIds": [
    "natacion--artistica"
   ],
   "confianza": "alta",
   "sinRegla": false
  },
  {
   "deporte": "Natación",
   "modalidad": "Carreras",
   "reglaId": "natacion--carreras",
   "reglaIds": [
    "natacion--carreras"
   ],
   "confianza": "alta",
   "sinRegla": false
  },
  {
   "deporte": "Natación",
   "modalidad": "Clavados",
   "reglaId": "natacion--clavados",
   "reglaIds": [
    "natacion--clavados"
   ],
   "confianza": "alta",
   "sinRegla": false
  },
  {
   "deporte": "Natación",
   "modalidad": "Polo Acuático",
   "reglaId": "natacion--polo-acuatico",
   "reglaIds": [
    "natacion--polo-acuatico"
   ],
   "confianza": "alta",
   "sinRegla": false
  },
  {
   "deporte": "Patinaje",
   "modalidad": "Artístico",
   "reglaId": "patinaje--artistico",
   "reglaIds": [
    "patinaje--artistico"
   ],
   "confianza": "alta",
   "sinRegla": false
  },
  {
   "deporte": "Patinaje",
   "modalidad": "Skateboarding",
   "reglaId": "grupo--patinaje-skateboarding",
   "reglaIds": [
    "patinaje--skateboarding-park",
    "patinaje--skateboarding-street"
   ],
   "confianza": "alta",
   "sinRegla": false,
   "equivalencia": "agrupacion"
  },
  {
   "deporte": "Patinaje",
   "modalidad": "Velocidad",
   "reglaId": "patinaje--velocidad",
   "reglaIds": [
    "patinaje--velocidad"
   ],
   "confianza": "alta",
   "sinRegla": false
  },
  {
   "deporte": "Porrismo (exhibición)",
   "modalidad": "Cheer",
   "reglaId": "grupo--porrismo-cheer",
   "reglaIds": [
    "porrismo-exhibicion--cheer-nivel-3",
    "porrismo-exhibicion--cheer-nivel-4"
   ],
   "confianza": "alta",
   "sinRegla": false,
   "equivalencia": "agrupacion"
  },
  {
   "deporte": "Porrismo (exhibición)",
   "modalidad": "Performance Cheer",
   "reglaId": "grupo--porrismo-performance-cheer",
   "reglaIds": [
    "porrismo-exhibicion--performance-cheer-pomp",
    "porrismo-exhibicion--performance-cheer-hiphop"
   ],
   "confianza": "alta",
   "sinRegla": false,
   "equivalencia": "agrupacion"
  },
  {
   "deporte": "Rugby 7",
   "modalidad": "Único",
   "reglaId": "rugby-siete--unico",
   "reglaIds": [
    "rugby-siete--unico"
   ],
   "confianza": "alta",
   "sinRegla": false,
   "equivalencia": "renombre"
  },
  {
   "deporte": "Softbol",
   "modalidad": "Único",
   "reglaId": "softbol--unico",
   "reglaIds": [
    "softbol--unico"
   ],
   "confianza": "alta",
   "sinRegla": false
  },
  {
   "deporte": "Squash",
   "modalidad": "Única",
   "reglaId": "squash--unica",
   "reglaIds": [
    "squash--unica"
   ],
   "confianza": "alta",
   "sinRegla": false
  },
  {
   "deporte": "Surf",
   "modalidad": "Bodyboard",
   "reglaId": "surf--bodyboard",
   "reglaIds": [
    "surf--bodyboard"
   ],
   "confianza": "alta",
   "sinRegla": false
  },
  {
   "deporte": "Surf",
   "modalidad": "Longboard",
   "reglaId": "surf--longboard",
   "reglaIds": [
    "surf--longboard"
   ],
   "confianza": "alta",
   "sinRegla": false
  },
  {
   "deporte": "Surf",
   "modalidad": "SUP Racing",
   "reglaId": "surf--sup-race",
   "reglaIds": [
    "surf--sup-race"
   ],
   "confianza": "alta",
   "sinRegla": false,
   "equivalencia": "renombre"
  },
  {
   "deporte": "Surf",
   "modalidad": "Shortboard",
   "reglaId": "surf--shortboard",
   "reglaIds": [
    "surf--shortboard"
   ],
   "confianza": "alta",
   "sinRegla": false
  },
  {
   "deporte": "Surf",
   "modalidad": "Sup surf",
   "reglaId": "surf--sup-surf",
   "reglaIds": [
    "surf--sup-surf"
   ],
   "confianza": "alta",
   "sinRegla": false
  },
  {
   "deporte": "Taekwondo",
   "modalidad": "Kyorugi",
   "reglaId": "taekwondo--kyorugi",
   "reglaIds": [
    "taekwondo--kyorugi"
   ],
   "confianza": "alta",
   "sinRegla": false
  },
  {
   "deporte": "Taekwondo",
   "modalidad": "Poomsae",
   "reglaId": "taekwondo--poomsae",
   "reglaIds": [
    "taekwondo--poomsae"
   ],
   "confianza": "alta",
   "sinRegla": false
  },
  {
   "deporte": "Tejo",
   "modalidad": "Única",
   "reglaId": "tejo--unica",
   "reglaIds": [
    "tejo--unica"
   ],
   "confianza": "alta",
   "sinRegla": false
  },
  {
   "deporte": "Tenis Mesa",
   "modalidad": "Única",
   "reglaId": "tenis-de-mesa--unica",
   "reglaIds": [
    "tenis-de-mesa--unica"
   ],
   "confianza": "alta",
   "sinRegla": false,
   "equivalencia": "renombre"
  },
  {
   "deporte": "Tenis de Campo",
   "modalidad": "Única",
   "reglaId": "tenis-de-campo--unica",
   "reglaIds": [
    "tenis-de-campo--unica"
   ],
   "confianza": "alta",
   "sinRegla": false
  },
  {
   "deporte": "Tiro Deportivo",
   "modalidad": "Escopeta",
   "reglaId": "tiro-deportivo--escopeta",
   "reglaIds": [
    "tiro-deportivo--escopeta"
   ],
   "confianza": "alta",
   "sinRegla": false
  },
  {
   "deporte": "Tiro Deportivo",
   "modalidad": "Pistola",
   "reglaId": "tiro-deportivo--pistola",
   "reglaIds": [
    "tiro-deportivo--pistola"
   ],
   "confianza": "alta",
   "sinRegla": false
  },
  {
   "deporte": "Tiro Deportivo",
   "modalidad": "Rifle",
   "reglaId": "tiro-deportivo--rifle",
   "reglaIds": [
    "tiro-deportivo--rifle"
   ],
   "confianza": "alta",
   "sinRegla": false
  },
  {
   "deporte": "Triatlón",
   "modalidad": "Duathlon",
   "reglaId": "triatlon--duathlon",
   "reglaIds": [
    "triatlon--duathlon"
   ],
   "confianza": "alta",
   "sinRegla": false
  },
  {
   "deporte": "Triatlón",
   "modalidad": "Triathlon",
   "reglaId": "triatlon--triathlon",
   "reglaIds": [
    "triatlon--triathlon"
   ],
   "confianza": "alta",
   "sinRegla": false
  },
  {
   "deporte": "Vela",
   "modalidad": "Bote",
   "reglaId": "grupo--vela-bote",
   "reglaIds": [
    "vela--bote-optimist",
    "vela--bote-sunfish",
    "vela--bote-ilca-6",
    "vela--bote-ilca-7",
    "vela--bote-snipe"
   ],
   "confianza": "alta",
   "sinRegla": false,
   "equivalencia": "agrupacion"
  },
  {
   "deporte": "Vela",
   "modalidad": "Tabla",
   "reglaId": "grupo--vela-tabla",
   "reglaIds": [
    "vela--tabla-a-vela-wingfoil",
    "vela--tabla-kite-formula-kite",
    "vela--tabla-kite-twin-tip"
   ],
   "confianza": "alta",
   "sinRegla": false,
   "equivalencia": "agrupacion"
  },
  {
   "deporte": "Voleibol",
   "modalidad": "Conjunto Coliseo",
   "reglaId": "voleibol--conjunto-coliseo",
   "reglaIds": [
    "voleibol--conjunto-coliseo"
   ],
   "confianza": "alta",
   "sinRegla": false
  },
  {
   "deporte": "Voleibol",
   "modalidad": "Conjunto Playa",
   "reglaId": "voleibol--conjunto-playa",
   "reglaIds": [
    "voleibol--conjunto-playa"
   ],
   "confianza": "alta",
   "sinRegla": false
  }
 ],
 "atlantico": [
  {
   "deporte": "Actividades Subacuáticas",
   "modalidad": "Cortas - Piscina",
   "sexo": "Hombres",
   "fecha": "2026-08-24",
   "reglaId": "actividades-subacauticas--cortas-piscina",
   "sinRegla": false
  },
  {
   "deporte": "Actividades Subacuáticas",
   "modalidad": "Cortas - Piscina",
   "sexo": "Mujeres",
   "fecha": "2026-08-24",
   "reglaId": "actividades-subacauticas--cortas-piscina",
   "sinRegla": false
  },
  {
   "deporte": "Actividades Subacuáticas",
   "modalidad": "Cortas - Piscina",
   "sexo": "Mixto",
   "fecha": "2026-08-24",
   "reglaId": "actividades-subacauticas--cortas-piscina",
   "sinRegla": false
  },
  {
   "deporte": "Actividades Subacuáticas",
   "modalidad": "Largas - Aguas Abiertas",
   "sexo": "Hombres",
   "fecha": "2026-08-24",
   "reglaId": "actividades-subacauticas--largas-aguas-abiertas",
   "sinRegla": false
  },
  {
   "deporte": "Actividades Subacuáticas",
   "modalidad": "Largas - Aguas Abiertas",
   "sexo": "Mujeres",
   "fecha": "2026-08-24",
   "reglaId": "actividades-subacauticas--largas-aguas-abiertas",
   "sinRegla": false
  },
  {
   "deporte": "Actividades Subacuáticas",
   "modalidad": "Largas - Aguas Abiertas",
   "sexo": "Mixto",
   "fecha": "2026-08-24",
   "reglaId": "actividades-subacauticas--largas-aguas-abiertas",
   "sinRegla": false
  },
  {
   "deporte": "Ajedrez",
   "modalidad": "Blitz",
   "sexo": "Hombres",
   "fecha": "2026-08-25",
   "reglaId": null,
   "sinRegla": true,
   "motivo": "genero"
  },
  {
   "deporte": "Ajedrez",
   "modalidad": "Blitz",
   "sexo": "Mujeres",
   "fecha": "2026-08-25",
   "reglaId": "ajedrez--blitz",
   "sinRegla": false
  },
  {
   "deporte": "Ajedrez",
   "modalidad": "Clásico",
   "sexo": "Hombres",
   "fecha": "2026-08-25",
   "reglaId": null,
   "sinRegla": true,
   "motivo": "genero"
  },
  {
   "deporte": "Ajedrez",
   "modalidad": "Clásico",
   "sexo": "Mujeres",
   "fecha": "2026-08-25",
   "reglaId": "ajedrez--clasico",
   "sinRegla": false
  },
  {
   "deporte": "Ajedrez",
   "modalidad": "Rápido",
   "sexo": "Hombres",
   "fecha": "2026-08-25",
   "reglaId": null,
   "sinRegla": true,
   "motivo": "genero"
  },
  {
   "deporte": "Ajedrez",
   "modalidad": "Rápido",
   "sexo": "Mujeres",
   "fecha": "2026-08-25",
   "reglaId": "ajedrez--rapido",
   "sinRegla": false
  },
  {
   "deporte": "Arquería",
   "modalidad": "Compuesto",
   "sexo": "Hombres",
   "fecha": "2026-08-24",
   "reglaId": "tiro-con-arco--compuesto",
   "sinRegla": false
  },
  {
   "deporte": "Arquería",
   "modalidad": "Compuesto",
   "sexo": "Mujeres",
   "fecha": "2026-08-24",
   "reglaId": "tiro-con-arco--compuesto",
   "sinRegla": false
  },
  {
   "deporte": "Arquería",
   "modalidad": "Compuesto",
   "sexo": "Mixto",
   "fecha": "2026-08-24",
   "reglaId": "tiro-con-arco--compuesto",
   "sinRegla": false
  },
  {
   "deporte": "Arquería",
   "modalidad": "Recurvo",
   "sexo": "Hombres",
   "fecha": "2026-08-24",
   "reglaId": "tiro-con-arco--recurvo",
   "sinRegla": false
  },
  {
   "deporte": "Arquería",
   "modalidad": "Recurvo",
   "sexo": "Mujeres",
   "fecha": "2026-08-24",
   "reglaId": "tiro-con-arco--recurvo",
   "sinRegla": false
  },
  {
   "deporte": "Arquería",
   "modalidad": "Recurvo",
   "sexo": "Mixto",
   "fecha": "2026-08-24",
   "reglaId": "tiro-con-arco--recurvo",
   "sinRegla": false
  },
  {
   "deporte": "Atletismo",
   "modalidad": "Campo",
   "sexo": "Hombres",
   "fecha": "2026-08-24",
   "reglaId": "atletismo--campo",
   "sinRegla": false
  },
  {
   "deporte": "Atletismo",
   "modalidad": "Campo",
   "sexo": "Mujeres",
   "fecha": "2026-08-24",
   "reglaId": "atletismo--campo",
   "sinRegla": false
  },
  {
   "deporte": "Atletismo",
   "modalidad": "Combinadas",
   "sexo": "Hombres",
   "fecha": "2026-08-24",
   "reglaId": "atletismo--combinadas",
   "sinRegla": false
  },
  {
   "deporte": "Atletismo",
   "modalidad": "Combinadas",
   "sexo": "Mujeres",
   "fecha": "2026-08-24",
   "reglaId": "atletismo--combinadas",
   "sinRegla": false
  },
  {
   "deporte": "Atletismo",
   "modalidad": "Marcha",
   "sexo": "Hombres",
   "fecha": "2026-08-24",
   "reglaId": "atletismo--marcha",
   "sinRegla": false
  },
  {
   "deporte": "Atletismo",
   "modalidad": "Marcha",
   "sexo": "Mujeres",
   "fecha": "2026-08-24",
   "reglaId": "atletismo--marcha",
   "sinRegla": false
  },
  {
   "deporte": "Atletismo",
   "modalidad": "Pista",
   "sexo": "Hombres",
   "fecha": "2026-08-24",
   "reglaId": "atletismo--pista",
   "sinRegla": false
  },
  {
   "deporte": "Atletismo",
   "modalidad": "Pista",
   "sexo": "Mujeres",
   "fecha": "2026-08-24",
   "reglaId": "atletismo--pista",
   "sinRegla": false
  },
  {
   "deporte": "Atletismo",
   "modalidad": "Pista",
   "sexo": "Mixto",
   "fecha": "2026-08-24",
   "reglaId": "atletismo--pista",
   "sinRegla": false
  },
  {
   "deporte": "Atletismo",
   "modalidad": "Ruta",
   "sexo": "Hombres",
   "fecha": "2026-08-24",
   "reglaId": "atletismo--ruta",
   "sinRegla": false
  },
  {
   "deporte": "Atletismo",
   "modalidad": "Ruta",
   "sexo": "Mujeres",
   "fecha": "2026-08-24",
   "reglaId": "atletismo--ruta",
   "sinRegla": false
  },
  {
   "deporte": "Baloncesto",
   "modalidad": "Conjunto 3x3",
   "sexo": "Hombres",
   "fecha": "2026-08-24",
   "reglaId": "baloncesto--conjunto-3x3",
   "sinRegla": false
  },
  {
   "deporte": "Baloncesto",
   "modalidad": "Conjunto 3x3",
   "sexo": "Mujeres",
   "fecha": "2026-08-24",
   "reglaId": "baloncesto--conjunto-3x3",
   "sinRegla": false
  },
  {
   "deporte": "Baloncesto",
   "modalidad": "Conjunto 5x5",
   "sexo": "Hombres",
   "fecha": "2026-08-24",
   "reglaId": "baloncesto--conjunto-5x5",
   "sinRegla": false
  },
  {
   "deporte": "Baloncesto",
   "modalidad": "Conjunto 5x5",
   "sexo": "Mujeres",
   "fecha": "2026-08-24",
   "reglaId": "baloncesto--conjunto-5x5",
   "sinRegla": false
  },
  {
   "deporte": "Balonmano",
   "modalidad": "Conjunto",
   "sexo": "Hombres",
   "fecha": "2026-08-24",
   "reglaId": "balonmano--conjunto",
   "sinRegla": false
  },
  {
   "deporte": "Balonmano",
   "modalidad": "Conjunto",
   "sexo": "Mujeres",
   "fecha": "2026-08-24",
   "reglaId": "balonmano--conjunto",
   "sinRegla": false
  },
  {
   "deporte": "Billar",
   "modalidad": "Carambola",
   "sexo": "Hombres",
   "fecha": "2026-08-24",
   "reglaId": "billar--carambola",
   "sinRegla": false
  },
  {
   "deporte": "Billar",
   "modalidad": "Carambola",
   "sexo": "Mujeres",
   "fecha": "2026-08-24",
   "reglaId": "billar--carambola",
   "sinRegla": false
  },
  {
   "deporte": "Billar",
   "modalidad": "Heybal",
   "sexo": "Hombres",
   "fecha": "2026-08-24",
   "reglaId": "billar--heybal",
   "sinRegla": false
  },
  {
   "deporte": "Billar",
   "modalidad": "Heybal",
   "sexo": "Mujeres",
   "fecha": "2026-08-24",
   "reglaId": "billar--heybal",
   "sinRegla": false
  },
  {
   "deporte": "Billar",
   "modalidad": "Heybal",
   "sexo": "Mixto",
   "fecha": "2026-08-24",
   "reglaId": "billar--heybal",
   "sinRegla": false
  },
  {
   "deporte": "Billar",
   "modalidad": "Pool",
   "sexo": "Hombres",
   "fecha": "2026-08-24",
   "reglaId": "billar--pool",
   "sinRegla": false
  },
  {
   "deporte": "Billar",
   "modalidad": "Pool",
   "sexo": "Mujeres",
   "fecha": "2026-08-24",
   "reglaId": "billar--pool",
   "sinRegla": false
  },
  {
   "deporte": "Billar",
   "modalidad": "Pool",
   "sexo": "Mixto",
   "fecha": "2026-08-24",
   "reglaId": "billar--pool",
   "sinRegla": false
  },
  {
   "deporte": "Bowling",
   "modalidad": "Única",
   "sexo": "Hombres",
   "fecha": "2026-08-24",
   "reglaId": "bowling--unica",
   "sinRegla": false
  },
  {
   "deporte": "Bowling",
   "modalidad": "Única",
   "sexo": "Mujeres",
   "fecha": "2026-08-24",
   "reglaId": "bowling--unica",
   "sinRegla": false
  },
  {
   "deporte": "Boxeo",
   "modalidad": "Única",
   "sexo": "Hombres",
   "fecha": "2026-08-24",
   "reglaId": "boxeo--unica",
   "sinRegla": false
  },
  {
   "deporte": "Boxeo",
   "modalidad": "Única",
   "sexo": "Mujeres",
   "fecha": "2026-08-24",
   "reglaId": "boxeo--unica",
   "sinRegla": false
  },
  {
   "deporte": "Bádminton",
   "modalidad": "Única",
   "sexo": "Hombres",
   "fecha": "2026-08-24",
   "reglaId": "badminton--unica",
   "sinRegla": false
  },
  {
   "deporte": "Bádminton",
   "modalidad": "Única",
   "sexo": "Mujeres",
   "fecha": "2026-08-24",
   "reglaId": "badminton--unica",
   "sinRegla": false
  },
  {
   "deporte": "Bádminton",
   "modalidad": "Única",
   "sexo": "Mixto",
   "fecha": "2026-08-24",
   "reglaId": "badminton--unica",
   "sinRegla": false
  },
  {
   "deporte": "Béisbol",
   "modalidad": "Conjunto",
   "sexo": "Hombres",
   "fecha": "2026-08-24",
   "reglaId": "beisbol--conjunto",
   "sinRegla": false
  },
  {
   "deporte": "Canotaje",
   "modalidad": "Kayak Cross",
   "sexo": "Hombres",
   "fecha": "2026-08-24",
   "reglaId": "canotaje--kayak-cross",
   "sinRegla": false
  },
  {
   "deporte": "Canotaje",
   "modalidad": "Kayak Cross",
   "sexo": "Mujeres",
   "fecha": "2026-08-24",
   "reglaId": "canotaje--kayak-cross",
   "sinRegla": false
  },
  {
   "deporte": "Canotaje",
   "modalidad": "Slalom",
   "sexo": "Hombres",
   "fecha": "2026-08-24",
   "reglaId": "canotaje--slalom",
   "sinRegla": false
  },
  {
   "deporte": "Canotaje",
   "modalidad": "Slalom",
   "sexo": "Mujeres",
   "fecha": "2026-08-24",
   "reglaId": "canotaje--slalom",
   "sinRegla": false
  },
  {
   "deporte": "Canotaje",
   "modalidad": "Velocidad",
   "sexo": "Hombres",
   "fecha": "2026-08-24",
   "reglaId": "canotaje--velocidad",
   "sinRegla": false
  },
  {
   "deporte": "Canotaje",
   "modalidad": "Velocidad",
   "sexo": "Mujeres",
   "fecha": "2026-08-24",
   "reglaId": "canotaje--velocidad",
   "sinRegla": false
  },
  {
   "deporte": "Ciclismo",
   "modalidad": "BMX",
   "sexo": "Hombres",
   "fecha": "2026-08-24",
   "reglaId": "ciclismo--bmx",
   "sinRegla": false
  },
  {
   "deporte": "Ciclismo",
   "modalidad": "BMX",
   "sexo": "Mujeres",
   "fecha": "2026-08-24",
   "reglaId": "ciclismo--bmx",
   "sinRegla": false
  },
  {
   "deporte": "Ciclismo",
   "modalidad": "MTB",
   "sexo": "Hombres",
   "fecha": "2026-08-24",
   "reglaId": "ciclismo--mtb",
   "sinRegla": false
  },
  {
   "deporte": "Ciclismo",
   "modalidad": "MTB",
   "sexo": "Mujeres",
   "fecha": "2026-08-24",
   "reglaId": "ciclismo--mtb",
   "sinRegla": false
  },
  {
   "deporte": "Ciclismo",
   "modalidad": "Pista",
   "sexo": "Hombres",
   "fecha": "2026-08-24",
   "reglaId": "ciclismo--pista",
   "sinRegla": false
  },
  {
   "deporte": "Ciclismo",
   "modalidad": "Pista",
   "sexo": "Mujeres",
   "fecha": "2026-08-24",
   "reglaId": "ciclismo--pista",
   "sinRegla": false
  },
  {
   "deporte": "Ciclismo",
   "modalidad": "Ruta",
   "sexo": "Hombres",
   "fecha": "2026-08-24",
   "reglaId": "ciclismo--ruta",
   "sinRegla": false
  },
  {
   "deporte": "Ciclismo",
   "modalidad": "Ruta",
   "sexo": "Mujeres",
   "fecha": "2026-08-24",
   "reglaId": "ciclismo--ruta",
   "sinRegla": false
  },
  {
   "deporte": "Ecuestre",
   "modalidad": "Adiestramiento",
   "sexo": "Mixto",
   "fecha": "2026-08-24",
   "reglaId": null,
   "sinRegla": true,
   "motivo": "genero"
  },
  {
   "deporte": "Ecuestre",
   "modalidad": "Prueba Completa",
   "sexo": "Mixto",
   "fecha": "2026-08-24",
   "reglaId": null,
   "sinRegla": true,
   "motivo": "genero"
  },
  {
   "deporte": "Ecuestre",
   "modalidad": "Salto",
   "sexo": "Mixto",
   "fecha": "2026-08-24",
   "reglaId": null,
   "sinRegla": true,
   "motivo": "genero"
  },
  {
   "deporte": "Esgrima",
   "modalidad": "Espada",
   "sexo": "Hombres",
   "fecha": "2026-08-25",
   "reglaId": "esgrima--unica",
   "sinRegla": false
  },
  {
   "deporte": "Esgrima",
   "modalidad": "Espada",
   "sexo": "Mujeres",
   "fecha": "2026-08-25",
   "reglaId": "esgrima--unica",
   "sinRegla": false
  },
  {
   "deporte": "Esgrima",
   "modalidad": "Florete",
   "sexo": "Hombres",
   "fecha": "2026-08-25",
   "reglaId": "esgrima--unica",
   "sinRegla": false
  },
  {
   "deporte": "Esgrima",
   "modalidad": "Florete",
   "sexo": "Mujeres",
   "fecha": "2026-08-25",
   "reglaId": "esgrima--unica",
   "sinRegla": false
  },
  {
   "deporte": "Esgrima",
   "modalidad": "Sable",
   "sexo": "Hombres",
   "fecha": "2026-08-25",
   "reglaId": "esgrima--unica",
   "sinRegla": false
  },
  {
   "deporte": "Esgrima",
   "modalidad": "Sable",
   "sexo": "Mujeres",
   "fecha": "2026-08-25",
   "reglaId": "esgrima--unica",
   "sinRegla": false
  },
  {
   "deporte": "Esquí Náutico",
   "modalidad": "Clásicos",
   "sexo": "Hombres",
   "fecha": "2026-08-24",
   "reglaId": "esqui-nautico--clasicos",
   "sinRegla": false
  },
  {
   "deporte": "Esquí Náutico",
   "modalidad": "Clásicos",
   "sexo": "Mujeres",
   "fecha": "2026-08-24",
   "reglaId": "esqui-nautico--clasicos",
   "sinRegla": false
  },
  {
   "deporte": "Esquí Náutico",
   "modalidad": "Wakeboard",
   "sexo": "Hombres",
   "fecha": "2026-08-24",
   "reglaId": "esqui-nautico--wakeboard",
   "sinRegla": false
  },
  {
   "deporte": "Esquí Náutico",
   "modalidad": "Wakeboard",
   "sexo": "Mujeres",
   "fecha": "2026-08-24",
   "reglaId": "esqui-nautico--wakeboard",
   "sinRegla": false
  },
  {
   "deporte": "Fútbol",
   "modalidad": "Campo",
   "sexo": "Hombres",
   "fecha": "2026-08-24",
   "reglaId": "futbol--campo",
   "sinRegla": false
  },
  {
   "deporte": "Fútbol",
   "modalidad": "Campo",
   "sexo": "Mujeres",
   "fecha": "2026-08-24",
   "reglaId": "futbol--campo",
   "sinRegla": false
  },
  {
   "deporte": "Fútbol",
   "modalidad": "Sala",
   "sexo": "Hombres",
   "fecha": "2026-08-24",
   "reglaId": "futbol--sala",
   "sinRegla": false
  },
  {
   "deporte": "Fútbol",
   "modalidad": "Sala",
   "sexo": "Mujeres",
   "fecha": "2026-08-24",
   "reglaId": "futbol--sala",
   "sinRegla": false
  },
  {
   "deporte": "Fútbol Salón",
   "modalidad": "Único",
   "sexo": "Hombres",
   "fecha": "2026-08-24",
   "reglaId": "futbol-de-salon--unico",
   "sinRegla": false
  },
  {
   "deporte": "Fútbol Salón",
   "modalidad": "Único",
   "sexo": "Mujeres",
   "fecha": "2026-08-24",
   "reglaId": "futbol-de-salon--unico",
   "sinRegla": false
  },
  {
   "deporte": "Gimnasia",
   "modalidad": "Artística",
   "sexo": "Hombres",
   "fecha": "2026-08-24",
   "reglaId": "gimnasia--artistica",
   "sinRegla": false
  },
  {
   "deporte": "Gimnasia",
   "modalidad": "Artística",
   "sexo": "Mujeres",
   "fecha": "2026-08-24",
   "reglaId": "gimnasia--artistica",
   "sinRegla": false
  },
  {
   "deporte": "Gimnasia",
   "modalidad": "Rítmica",
   "sexo": "Mujeres",
   "fecha": "2026-08-24",
   "reglaId": "gimnasia--ritmica",
   "sinRegla": false
  },
  {
   "deporte": "Gimnasia",
   "modalidad": "Trampolín",
   "sexo": "Hombres",
   "fecha": "2026-08-24",
   "reglaId": "gimnasia--trampolin",
   "sinRegla": false
  },
  {
   "deporte": "Gimnasia",
   "modalidad": "Trampolín",
   "sexo": "Mujeres",
   "fecha": "2026-08-24",
   "reglaId": "gimnasia--trampolin",
   "sinRegla": false
  },
  {
   "deporte": "Gimnasia",
   "modalidad": "Trampolín",
   "sexo": "Mixto",
   "fecha": "2026-08-29",
   "reglaId": null,
   "sinRegla": true,
   "motivo": "genero"
  },
  {
   "deporte": "Golf",
   "modalidad": "Única",
   "sexo": "Hombres",
   "fecha": "2026-08-24",
   "reglaId": "golf--unica",
   "sinRegla": false
  },
  {
   "deporte": "Golf",
   "modalidad": "Única",
   "sexo": "Mujeres",
   "fecha": "2026-08-24",
   "reglaId": "golf--unica",
   "sinRegla": false
  },
  {
   "deporte": "Hapkido",
   "modalidad": "Combate",
   "sexo": "Hombres",
   "fecha": "2026-08-24",
   "reglaId": "hapkido--combate",
   "sinRegla": false
  },
  {
   "deporte": "Hapkido",
   "modalidad": "Combate",
   "sexo": "Mujeres",
   "fecha": "2026-08-24",
   "reglaId": "hapkido--combate",
   "sinRegla": false
  },
  {
   "deporte": "Hapkido",
   "modalidad": "Combate",
   "sexo": "Mixto",
   "fecha": "2026-08-24",
   "reglaId": "hapkido--combate",
   "sinRegla": false
  },
  {
   "deporte": "Judo",
   "modalidad": "Kata",
   "sexo": "Hombres",
   "fecha": "2026-08-25",
   "reglaId": "judo--kata",
   "sinRegla": false
  },
  {
   "deporte": "Judo",
   "modalidad": "Kata",
   "sexo": "Mujeres",
   "fecha": "2026-08-25",
   "reglaId": "judo--kata",
   "sinRegla": false
  },
  {
   "deporte": "Judo",
   "modalidad": "Shiai",
   "sexo": "Hombres",
   "fecha": "2026-08-25",
   "reglaId": "judo--shiai",
   "sinRegla": false
  },
  {
   "deporte": "Judo",
   "modalidad": "Shiai",
   "sexo": "Mujeres",
   "fecha": "2026-08-25",
   "reglaId": "judo--shiai",
   "sinRegla": false
  },
  {
   "deporte": "Karate",
   "modalidad": "Kata",
   "sexo": "Hombres",
   "fecha": "2026-08-24",
   "reglaId": "karate--kata",
   "sinRegla": false
  },
  {
   "deporte": "Karate",
   "modalidad": "Kata",
   "sexo": "Mujeres",
   "fecha": "2026-08-24",
   "reglaId": "karate--kata",
   "sinRegla": false
  },
  {
   "deporte": "Karate",
   "modalidad": "Kumite",
   "sexo": "Hombres",
   "fecha": "2026-08-24",
   "reglaId": "karate--kumite",
   "sinRegla": false
  },
  {
   "deporte": "Karate",
   "modalidad": "Kumite",
   "sexo": "Mujeres",
   "fecha": "2026-08-24",
   "reglaId": "karate--kumite",
   "sinRegla": false
  },
  {
   "deporte": "Levantamiento de Pesas",
   "modalidad": "Individual",
   "sexo": "Hombres",
   "fecha": "2026-08-24",
   "reglaId": "levantamiento-de-pesas--individual",
   "sinRegla": false
  },
  {
   "deporte": "Levantamiento de Pesas",
   "modalidad": "Individual",
   "sexo": "Mujeres",
   "fecha": "2026-08-24",
   "reglaId": "levantamiento-de-pesas--individual",
   "sinRegla": false
  },
  {
   "deporte": "Lucha",
   "modalidad": "Greco",
   "sexo": "Hombres",
   "fecha": "2026-08-24",
   "reglaId": "lucha--greco",
   "sinRegla": false
  },
  {
   "deporte": "Lucha",
   "modalidad": "Libre",
   "sexo": "Hombres",
   "fecha": "2026-08-24",
   "reglaId": "lucha--libre",
   "sinRegla": false
  },
  {
   "deporte": "Lucha",
   "modalidad": "Libre",
   "sexo": "Mujeres",
   "fecha": "2026-08-24",
   "reglaId": "lucha--libre",
   "sinRegla": false
  },
  {
   "deporte": "Natación",
   "modalidad": "Aguas Abiertas",
   "sexo": "Hombres",
   "fecha": "2026-08-24",
   "reglaId": "natacion--aguas-abiertas",
   "sinRegla": false
  },
  {
   "deporte": "Natación",
   "modalidad": "Aguas Abiertas",
   "sexo": "Mujeres",
   "fecha": "2026-08-24",
   "reglaId": "natacion--aguas-abiertas",
   "sinRegla": false
  },
  {
   "deporte": "Natación",
   "modalidad": "Artística",
   "sexo": "Hombres",
   "fecha": "2026-08-24",
   "reglaId": "natacion--artistica",
   "sinRegla": false
  },
  {
   "deporte": "Natación",
   "modalidad": "Artística",
   "sexo": "Mujeres",
   "fecha": "2026-08-24",
   "reglaId": "natacion--artistica",
   "sinRegla": false
  },
  {
   "deporte": "Natación",
   "modalidad": "Artística",
   "sexo": "Mixto",
   "fecha": "2026-08-24",
   "reglaId": "natacion--artistica",
   "sinRegla": false
  },
  {
   "deporte": "Natación",
   "modalidad": "Carreras",
   "sexo": "Hombres",
   "fecha": "2026-08-24",
   "reglaId": "natacion--carreras",
   "sinRegla": false
  },
  {
   "deporte": "Natación",
   "modalidad": "Carreras",
   "sexo": "Mujeres",
   "fecha": "2026-08-24",
   "reglaId": "natacion--carreras",
   "sinRegla": false
  },
  {
   "deporte": "Natación",
   "modalidad": "Carreras",
   "sexo": "Mixto",
   "fecha": "2026-08-29",
   "reglaId": null,
   "sinRegla": true,
   "motivo": "genero"
  },
  {
   "deporte": "Natación",
   "modalidad": "Clavados",
   "sexo": "Hombres",
   "fecha": "2026-08-24",
   "reglaId": "natacion--clavados",
   "sinRegla": false
  },
  {
   "deporte": "Natación",
   "modalidad": "Clavados",
   "sexo": "Mujeres",
   "fecha": "2026-08-24",
   "reglaId": "natacion--clavados",
   "sinRegla": false
  },
  {
   "deporte": "Natación",
   "modalidad": "Polo Acuático",
   "sexo": "Hombres",
   "fecha": "2026-08-24",
   "reglaId": "natacion--polo-acuatico",
   "sinRegla": false
  },
  {
   "deporte": "Patinaje",
   "modalidad": "Artístico",
   "sexo": "Hombres",
   "fecha": "2026-08-24",
   "reglaId": "patinaje--artistico",
   "sinRegla": false
  },
  {
   "deporte": "Patinaje",
   "modalidad": "Artístico",
   "sexo": "Mujeres",
   "fecha": "2026-08-24",
   "reglaId": "patinaje--artistico",
   "sinRegla": false
  },
  {
   "deporte": "Patinaje",
   "modalidad": "Artístico",
   "sexo": "Mixto",
   "fecha": "2026-08-24",
   "reglaId": "patinaje--artistico",
   "sinRegla": false
  },
  {
   "deporte": "Patinaje",
   "modalidad": "Skateboarding",
   "sexo": "Hombres",
   "fecha": "2026-08-24",
   "reglaId": "grupo--patinaje-skateboarding",
   "sinRegla": false
  },
  {
   "deporte": "Patinaje",
   "modalidad": "Skateboarding",
   "sexo": "Mujeres",
   "fecha": "2026-08-24",
   "reglaId": "grupo--patinaje-skateboarding",
   "sinRegla": false
  },
  {
   "deporte": "Patinaje",
   "modalidad": "Velocidad",
   "sexo": "Hombres",
   "fecha": "2026-08-24",
   "reglaId": "patinaje--velocidad",
   "sinRegla": false
  },
  {
   "deporte": "Patinaje",
   "modalidad": "Velocidad",
   "sexo": "Mujeres",
   "fecha": "2026-08-24",
   "reglaId": "patinaje--velocidad",
   "sinRegla": false
  },
  {
   "deporte": "Porrismo (exhibición)",
   "modalidad": "Cheer",
   "sexo": "Mujeres",
   "fecha": "2026-08-24",
   "reglaId": "grupo--porrismo-cheer",
   "sinRegla": false
  },
  {
   "deporte": "Porrismo (exhibición)",
   "modalidad": "Cheer",
   "sexo": "Mixto",
   "fecha": "2026-08-24",
   "reglaId": "grupo--porrismo-cheer",
   "sinRegla": false
  },
  {
   "deporte": "Porrismo (exhibición)",
   "modalidad": "Performance Cheer",
   "sexo": "Mixto",
   "fecha": "2026-08-24",
   "reglaId": "grupo--porrismo-performance-cheer",
   "sinRegla": false
  },
  {
   "deporte": "Rugby 7",
   "modalidad": "Único",
   "sexo": "Hombres",
   "fecha": "2026-08-24",
   "reglaId": "rugby-siete--unico",
   "sinRegla": false
  },
  {
   "deporte": "Rugby 7",
   "modalidad": "Único",
   "sexo": "Mujeres",
   "fecha": "2026-08-24",
   "reglaId": "rugby-siete--unico",
   "sinRegla": false
  },
  {
   "deporte": "Softbol",
   "modalidad": "Único",
   "sexo": "Hombres",
   "fecha": "2026-08-24",
   "reglaId": "softbol--unico",
   "sinRegla": false
  },
  {
   "deporte": "Softbol",
   "modalidad": "Único",
   "sexo": "Mujeres",
   "fecha": "2026-08-24",
   "reglaId": "softbol--unico",
   "sinRegla": false
  },
  {
   "deporte": "Squash",
   "modalidad": "Única",
   "sexo": "Hombres",
   "fecha": "2026-08-24",
   "reglaId": "squash--unica",
   "sinRegla": false
  },
  {
   "deporte": "Squash",
   "modalidad": "Única",
   "sexo": "Mujeres",
   "fecha": "2026-08-24",
   "reglaId": "squash--unica",
   "sinRegla": false
  },
  {
   "deporte": "Squash",
   "modalidad": "Única",
   "sexo": "Mixto",
   "fecha": "2026-08-28",
   "reglaId": null,
   "sinRegla": true,
   "motivo": "genero"
  },
  {
   "deporte": "Surf",
   "modalidad": "Bodyboard",
   "sexo": "Hombres",
   "fecha": "2026-08-24",
   "reglaId": "surf--bodyboard",
   "sinRegla": false
  },
  {
   "deporte": "Surf",
   "modalidad": "Bodyboard",
   "sexo": "Mujeres",
   "fecha": "2026-08-24",
   "reglaId": "surf--bodyboard",
   "sinRegla": false
  },
  {
   "deporte": "Surf",
   "modalidad": "Longboard",
   "sexo": "Hombres",
   "fecha": "2026-08-24",
   "reglaId": "surf--longboard",
   "sinRegla": false
  },
  {
   "deporte": "Surf",
   "modalidad": "Longboard",
   "sexo": "Mujeres",
   "fecha": "2026-08-24",
   "reglaId": "surf--longboard",
   "sinRegla": false
  },
  {
   "deporte": "Surf",
   "modalidad": "SUP Racing",
   "sexo": "Hombres",
   "fecha": "2026-08-24",
   "reglaId": "surf--sup-race",
   "sinRegla": false
  },
  {
   "deporte": "Surf",
   "modalidad": "SUP Racing",
   "sexo": "Mujeres",
   "fecha": "2026-08-24",
   "reglaId": "surf--sup-race",
   "sinRegla": false
  },
  {
   "deporte": "Surf",
   "modalidad": "Shortboard",
   "sexo": "Hombres",
   "fecha": "2026-08-24",
   "reglaId": "surf--shortboard",
   "sinRegla": false
  },
  {
   "deporte": "Surf",
   "modalidad": "Shortboard",
   "sexo": "Mujeres",
   "fecha": "2026-08-24",
   "reglaId": "surf--shortboard",
   "sinRegla": false
  },
  {
   "deporte": "Surf",
   "modalidad": "Sup surf",
   "sexo": "Hombres",
   "fecha": "2026-08-24",
   "reglaId": "surf--sup-surf",
   "sinRegla": false
  },
  {
   "deporte": "Taekwondo",
   "modalidad": "Kyorugi",
   "sexo": "Hombres",
   "fecha": "2026-08-24",
   "reglaId": "taekwondo--kyorugi",
   "sinRegla": false
  },
  {
   "deporte": "Taekwondo",
   "modalidad": "Kyorugi",
   "sexo": "Mujeres",
   "fecha": "2026-08-24",
   "reglaId": "taekwondo--kyorugi",
   "sinRegla": false
  },
  {
   "deporte": "Taekwondo",
   "modalidad": "Poomsae",
   "sexo": "Hombres",
   "fecha": "2026-08-24",
   "reglaId": "taekwondo--poomsae",
   "sinRegla": false
  },
  {
   "deporte": "Taekwondo",
   "modalidad": "Poomsae",
   "sexo": "Mujeres",
   "fecha": "2026-08-24",
   "reglaId": "taekwondo--poomsae",
   "sinRegla": false
  },
  {
   "deporte": "Taekwondo",
   "modalidad": "Poomsae",
   "sexo": "Mixto",
   "fecha": "2026-08-24",
   "reglaId": "taekwondo--poomsae",
   "sinRegla": false
  },
  {
   "deporte": "Tejo",
   "modalidad": "Única",
   "sexo": "Hombres",
   "fecha": "2026-08-24",
   "reglaId": "tejo--unica",
   "sinRegla": false
  },
  {
   "deporte": "Tejo",
   "modalidad": "Única",
   "sexo": "Mujeres",
   "fecha": "2026-08-24",
   "reglaId": "tejo--unica",
   "sinRegla": false
  },
  {
   "deporte": "Tenis Mesa",
   "modalidad": "Única",
   "sexo": "Hombres",
   "fecha": "2026-08-24",
   "reglaId": "tenis-de-mesa--unica",
   "sinRegla": false
  },
  {
   "deporte": "Tenis Mesa",
   "modalidad": "Única",
   "sexo": "Mujeres",
   "fecha": "2026-08-24",
   "reglaId": "tenis-de-mesa--unica",
   "sinRegla": false
  },
  {
   "deporte": "Tenis Mesa",
   "modalidad": "Única",
   "sexo": "Mixto",
   "fecha": "2026-08-24",
   "reglaId": "tenis-de-mesa--unica",
   "sinRegla": false
  },
  {
   "deporte": "Tenis de Campo",
   "modalidad": "Única",
   "sexo": "Hombres",
   "fecha": "2026-08-24",
   "reglaId": "tenis-de-campo--unica",
   "sinRegla": false
  },
  {
   "deporte": "Tenis de Campo",
   "modalidad": "Única",
   "sexo": "Mujeres",
   "fecha": "2026-08-24",
   "reglaId": "tenis-de-campo--unica",
   "sinRegla": false
  },
  {
   "deporte": "Tenis de Campo",
   "modalidad": "Única",
   "sexo": "Mixto",
   "fecha": "2026-08-24",
   "reglaId": "tenis-de-campo--unica",
   "sinRegla": false
  },
  {
   "deporte": "Tiro Deportivo",
   "modalidad": "Escopeta",
   "sexo": "Hombres",
   "fecha": "2026-08-24",
   "reglaId": "tiro-deportivo--escopeta",
   "sinRegla": false
  },
  {
   "deporte": "Tiro Deportivo",
   "modalidad": "Escopeta",
   "sexo": "Mujeres",
   "fecha": "2026-08-24",
   "reglaId": "tiro-deportivo--escopeta",
   "sinRegla": false
  },
  {
   "deporte": "Tiro Deportivo",
   "modalidad": "Pistola",
   "sexo": "Hombres",
   "fecha": "2026-08-24",
   "reglaId": "tiro-deportivo--pistola",
   "sinRegla": false
  },
  {
   "deporte": "Tiro Deportivo",
   "modalidad": "Pistola",
   "sexo": "Mujeres",
   "fecha": "2026-08-24",
   "reglaId": "tiro-deportivo--pistola",
   "sinRegla": false
  },
  {
   "deporte": "Tiro Deportivo",
   "modalidad": "Pistola",
   "sexo": "Mixto",
   "fecha": "2026-08-24",
   "reglaId": "tiro-deportivo--pistola",
   "sinRegla": false
  },
  {
   "deporte": "Tiro Deportivo",
   "modalidad": "Rifle",
   "sexo": "Hombres",
   "fecha": "2026-08-24",
   "reglaId": "tiro-deportivo--rifle",
   "sinRegla": false
  },
  {
   "deporte": "Tiro Deportivo",
   "modalidad": "Rifle",
   "sexo": "Mujeres",
   "fecha": "2026-08-24",
   "reglaId": "tiro-deportivo--rifle",
   "sinRegla": false
  },
  {
   "deporte": "Tiro Deportivo",
   "modalidad": "Rifle",
   "sexo": "Mixto",
   "fecha": "2026-08-24",
   "reglaId": "tiro-deportivo--rifle",
   "sinRegla": false
  },
  {
   "deporte": "Triatlón",
   "modalidad": "Duathlon",
   "sexo": "Hombres",
   "fecha": "2026-08-24",
   "reglaId": "triatlon--duathlon",
   "sinRegla": false
  },
  {
   "deporte": "Triatlón",
   "modalidad": "Duathlon",
   "sexo": "Mujeres",
   "fecha": "2026-08-24",
   "reglaId": "triatlon--duathlon",
   "sinRegla": false
  },
  {
   "deporte": "Triatlón",
   "modalidad": "Duathlon",
   "sexo": "Mixto",
   "fecha": "2026-08-24",
   "reglaId": "triatlon--duathlon",
   "sinRegla": false
  },
  {
   "deporte": "Triatlón",
   "modalidad": "Triathlon",
   "sexo": "Hombres",
   "fecha": "2026-08-24",
   "reglaId": "triatlon--triathlon",
   "sinRegla": false
  },
  {
   "deporte": "Triatlón",
   "modalidad": "Triathlon",
   "sexo": "Mujeres",
   "fecha": "2026-08-24",
   "reglaId": "triatlon--triathlon",
   "sinRegla": false
  },
  {
   "deporte": "Triatlón",
   "modalidad": "Triathlon",
   "sexo": "Mixto",
   "fecha": "2026-08-24",
   "reglaId": "triatlon--triathlon",
   "sinRegla": false
  },
  {
   "deporte": "Vela",
   "modalidad": "Bote",
   "sexo": "Hombres",
   "fecha": "2026-09-01",
   "reglaId": "grupo--vela-bote",
   "sinRegla": false
  },
  {
   "deporte": "Vela",
   "modalidad": "Bote",
   "sexo": "Mujeres",
   "fecha": "2026-09-01",
   "reglaId": "grupo--vela-bote",
   "sinRegla": false
  },
  {
   "deporte": "Vela",
   "modalidad": "Bote",
   "sexo": "Mixto",
   "fecha": "2026-09-01",
   "reglaId": "grupo--vela-bote",
   "sinRegla": false
  },
  {
   "deporte": "Vela",
   "modalidad": "Tabla",
   "sexo": "Hombres",
   "fecha": "2026-09-01",
   "reglaId": "grupo--vela-tabla",
   "sinRegla": false
  },
  {
   "deporte": "Vela",
   "modalidad": "Tabla",
   "sexo": "Mujeres",
   "fecha": "2026-09-01",
   "reglaId": "grupo--vela-tabla",
   "sinRegla": false
  },
  {
   "deporte": "Vela",
   "modalidad": "Tabla",
   "sexo": "Mixto",
   "fecha": "2026-09-01",
   "reglaId": "grupo--vela-tabla",
   "sinRegla": false
  },
  {
   "deporte": "Voleibol",
   "modalidad": "Conjunto Coliseo",
   "sexo": "Hombres",
   "fecha": "2026-08-24",
   "reglaId": "voleibol--conjunto-coliseo",
   "sinRegla": false
  },
  {
   "deporte": "Voleibol",
   "modalidad": "Conjunto Coliseo",
   "sexo": "Mujeres",
   "fecha": "2026-08-24",
   "reglaId": "voleibol--conjunto-coliseo",
   "sinRegla": false
  },
  {
   "deporte": "Voleibol",
   "modalidad": "Conjunto Playa",
   "sexo": "Hombres",
   "fecha": "2026-08-24",
   "reglaId": "voleibol--conjunto-playa",
   "sinRegla": false
  },
  {
   "deporte": "Voleibol",
   "modalidad": "Conjunto Playa",
   "sexo": "Mujeres",
   "fecha": "2026-08-24",
   "reglaId": "voleibol--conjunto-playa",
   "sinRegla": false
  }
 ],
 "resumenDelegaciones": [
  {
   "nombre": "AMAZONAS",
   "filas": 18,
   "deportes": [
    "Billar",
    "Boxeo",
    "Fútbol",
    "Natación",
    "Voleibol"
   ]
  },
  {
   "nombre": "FEDERACION DEPORTIVA MILITAR",
   "filas": 106,
   "deportes": [
    "Actividades Subacuáticas",
    "Ajedrez",
    "Arquería",
    "Atletismo",
    "Boxeo",
    "Béisbol",
    "Ciclismo",
    "Ecuestre",
    "Esgrima",
    "Judo",
    "Karate",
    "Levantamiento de Pesas",
    "Lucha",
    "Natación",
    "Softbol",
    "Taekwondo",
    "Tejo",
    "Tenis Mesa",
    "Tenis de Campo",
    "Tiro Deportivo",
    "Triatlón",
    "Vela",
    "Voleibol"
   ]
  },
  {
   "nombre": "INSTITUTO DE CULTURA, DEPORTES, LA EDUCACIÓN FÍSICA Y LA RECREACIÓN DEL DEPARTAMENTO DEL PUTUMAYO",
   "filas": 21,
   "deportes": [
    "Atletismo",
    "Baloncesto",
    "Ciclismo",
    "Fútbol",
    "Fútbol Salón",
    "Patinaje",
    "Tenis Mesa"
   ]
  },
  {
   "nombre": "INSTITUTO DEL DEPORTE LA EDUCACIÓN FÍSICA Y LA RECREACION DEL CHOCO",
   "filas": 86,
   "deportes": [
    "Ajedrez",
    "Arquería",
    "Atletismo",
    "Baloncesto",
    "Balonmano",
    "Boxeo",
    "Bádminton",
    "Béisbol",
    "Canotaje",
    "Fútbol",
    "Fútbol Salón",
    "Gimnasia",
    "Judo",
    "Karate",
    "Levantamiento de Pesas",
    "Lucha",
    "Patinaje",
    "Porrismo (exhibición)",
    "Softbol",
    "Surf",
    "Taekwondo",
    "Tenis Mesa",
    "Tenis de Campo",
    "Voleibol"
   ]
  },
  {
   "nombre": "INSTITUTO DEL DEPORTE, LA EDUCACIÓN FISICA Y LA RECREACIÓN DEL VALLE DEL CAUCA",
   "filas": 182,
   "deportes": [
    "Actividades Subacuáticas",
    "Ajedrez",
    "Arquería",
    "Atletismo",
    "Baloncesto",
    "Balonmano",
    "Billar",
    "Bowling",
    "Boxeo",
    "Bádminton",
    "Béisbol",
    "Canotaje",
    "Ciclismo",
    "Ecuestre",
    "Esgrima",
    "Esquí Náutico",
    "Fútbol",
    "Fútbol Salón",
    "Gimnasia",
    "Golf",
    "Hapkido",
    "Judo",
    "Karate",
    "Levantamiento de Pesas",
    "Lucha",
    "Natación",
    "Patinaje",
    "Porrismo (exhibición)",
    "Rugby 7",
    "Softbol",
    "Squash",
    "Surf",
    "Taekwondo",
    "Tejo",
    "Tenis Mesa",
    "Tenis de Campo",
    "Tiro Deportivo",
    "Triatlón",
    "Vela",
    "Voleibol"
   ]
  },
  {
   "nombre": "INSTITUTO DEPARTAMENTAL DE CULTURA, DEPORTE Y TURISMO DEL CAQUETÁ",
   "filas": 62,
   "deportes": [
    "Ajedrez",
    "Atletismo",
    "Baloncesto",
    "Balonmano",
    "Bádminton",
    "Ciclismo",
    "Fútbol",
    "Fútbol Salón",
    "Gimnasia",
    "Levantamiento de Pesas",
    "Patinaje",
    "Porrismo (exhibición)",
    "Taekwondo"
   ]
  },
  {
   "nombre": "INSTITUTO DEPARTAMENTAL DE DEPORTE Y RECREACIÓN DEL META",
   "filas": 135,
   "deportes": [
    "Actividades Subacuáticas",
    "Ajedrez",
    "Arquería",
    "Atletismo",
    "Baloncesto",
    "Balonmano",
    "Billar",
    "Bowling",
    "Boxeo",
    "Bádminton",
    "Béisbol",
    "Canotaje",
    "Ciclismo",
    "Esgrima",
    "Fútbol",
    "Fútbol Salón",
    "Gimnasia",
    "Hapkido",
    "Judo",
    "Karate",
    "Levantamiento de Pesas",
    "Lucha",
    "Natación",
    "Patinaje",
    "Porrismo (exhibición)",
    "Rugby 7",
    "Softbol",
    "Taekwondo",
    "Tejo",
    "Tenis Mesa",
    "Tenis de Campo",
    "Triatlón",
    "Voleibol"
   ]
  },
  {
   "nombre": "INSTITUTO DEPARTAMENTAL DE DEPORTES DE ANTIOQUIA",
   "filas": 182,
   "deportes": [
    "Actividades Subacuáticas",
    "Ajedrez",
    "Arquería",
    "Atletismo",
    "Baloncesto",
    "Balonmano",
    "Billar",
    "Bowling",
    "Boxeo",
    "Bádminton",
    "Béisbol",
    "Canotaje",
    "Ciclismo",
    "Ecuestre",
    "Esgrima",
    "Esquí Náutico",
    "Fútbol",
    "Fútbol Salón",
    "Gimnasia",
    "Golf",
    "Hapkido",
    "Judo",
    "Karate",
    "Levantamiento de Pesas",
    "Lucha",
    "Natación",
    "Patinaje",
    "Porrismo (exhibición)",
    "Rugby 7",
    "Softbol",
    "Squash",
    "Surf",
    "Taekwondo",
    "Tejo",
    "Tenis Mesa",
    "Tenis de Campo",
    "Tiro Deportivo",
    "Triatlón",
    "Vela",
    "Voleibol"
   ]
  },
  {
   "nombre": "INSTITUTO DEPARTAMENTAL DE DEPORTES DE CÓRDOBA",
   "filas": 132,
   "deportes": [
    "Actividades Subacuáticas",
    "Ajedrez",
    "Arquería",
    "Atletismo",
    "Baloncesto",
    "Balonmano",
    "Billar",
    "Boxeo",
    "Bádminton",
    "Béisbol",
    "Canotaje",
    "Ciclismo",
    "Fútbol",
    "Fútbol Salón",
    "Golf",
    "Judo",
    "Karate",
    "Levantamiento de Pesas",
    "Natación",
    "Patinaje",
    "Rugby 7",
    "Softbol",
    "Surf",
    "Taekwondo",
    "Tejo",
    "Tenis Mesa",
    "Tenis de Campo",
    "Tiro Deportivo",
    "Triatlón",
    "Voleibol"
   ]
  },
  {
   "nombre": "INSTITUTO DEPARTAMENTAL DE DEPORTES DE LA GUAJIRA",
   "filas": 113,
   "deportes": [
    "Actividades Subacuáticas",
    "Ajedrez",
    "Arquería",
    "Atletismo",
    "Baloncesto",
    "Balonmano",
    "Boxeo",
    "Béisbol",
    "Ciclismo",
    "Fútbol",
    "Fútbol Salón",
    "Judo",
    "Karate",
    "Levantamiento de Pesas",
    "Natación",
    "Patinaje",
    "Porrismo (exhibición)",
    "Rugby 7",
    "Softbol",
    "Surf",
    "Taekwondo",
    "Tejo",
    "Tenis Mesa",
    "Tenis de Campo",
    "Tiro Deportivo",
    "Vela",
    "Voleibol"
   ]
  },
  {
   "nombre": "INSTITUTO DEPARTAMENTAL DE DEPORTES DEL CAUCA",
   "filas": 100,
   "deportes": [
    "Actividades Subacuáticas",
    "Ajedrez",
    "Atletismo",
    "Baloncesto",
    "Boxeo",
    "Bádminton",
    "Ciclismo",
    "Fútbol",
    "Fútbol Salón",
    "Gimnasia",
    "Golf",
    "Judo",
    "Karate",
    "Levantamiento de Pesas",
    "Natación",
    "Patinaje",
    "Rugby 7",
    "Softbol",
    "Taekwondo",
    "Tejo",
    "Tenis Mesa",
    "Tenis de Campo",
    "Tiro Deportivo",
    "Triatlón",
    "Voleibol"
   ]
  },
  {
   "nombre": "INSTITUTO DEPARTAMENTAL DE DEPORTES DEL MAGDALENA",
   "filas": 182,
   "deportes": [
    "Actividades Subacuáticas",
    "Ajedrez",
    "Arquería",
    "Atletismo",
    "Baloncesto",
    "Balonmano",
    "Billar",
    "Bowling",
    "Boxeo",
    "Bádminton",
    "Béisbol",
    "Canotaje",
    "Ciclismo",
    "Ecuestre",
    "Esgrima",
    "Esquí Náutico",
    "Fútbol",
    "Fútbol Salón",
    "Gimnasia",
    "Golf",
    "Hapkido",
    "Judo",
    "Karate",
    "Levantamiento de Pesas",
    "Lucha",
    "Natación",
    "Patinaje",
    "Porrismo (exhibición)",
    "Rugby 7",
    "Softbol",
    "Squash",
    "Surf",
    "Taekwondo",
    "Tejo",
    "Tenis Mesa",
    "Tenis de Campo",
    "Tiro Deportivo",
    "Triatlón",
    "Vela",
    "Voleibol"
   ]
  },
  {
   "nombre": "INSTITUTO DEPARTAMENTAL DE DEPORTES DEL TOLIMA",
   "filas": 142,
   "deportes": [
    "Actividades Subacuáticas",
    "Ajedrez",
    "Arquería",
    "Atletismo",
    "Baloncesto",
    "Balonmano",
    "Billar",
    "Bowling",
    "Boxeo",
    "Bádminton",
    "Ciclismo",
    "Esgrima",
    "Fútbol",
    "Fútbol Salón",
    "Gimnasia",
    "Golf",
    "Hapkido",
    "Judo",
    "Karate",
    "Levantamiento de Pesas",
    "Lucha",
    "Natación",
    "Patinaje",
    "Porrismo (exhibición)",
    "Rugby 7",
    "Softbol",
    "Taekwondo",
    "Tejo",
    "Tenis Mesa",
    "Tenis de Campo",
    "Triatlón",
    "Voleibol"
   ]
  },
  {
   "nombre": "INSTITUTO DEPARTAMENTAL DE DEPORTES Y RECREACIÓN DE BOLÍVAR",
   "filas": 182,
   "deportes": [
    "Actividades Subacuáticas",
    "Ajedrez",
    "Arquería",
    "Atletismo",
    "Baloncesto",
    "Balonmano",
    "Billar",
    "Bowling",
    "Boxeo",
    "Bádminton",
    "Béisbol",
    "Canotaje",
    "Ciclismo",
    "Ecuestre",
    "Esgrima",
    "Esquí Náutico",
    "Fútbol",
    "Fútbol Salón",
    "Gimnasia",
    "Golf",
    "Hapkido",
    "Judo",
    "Karate",
    "Levantamiento de Pesas",
    "Lucha",
    "Natación",
    "Patinaje",
    "Porrismo (exhibición)",
    "Rugby 7",
    "Softbol",
    "Squash",
    "Surf",
    "Taekwondo",
    "Tejo",
    "Tenis Mesa",
    "Tenis de Campo",
    "Tiro Deportivo",
    "Triatlón",
    "Vela",
    "Voleibol"
   ]
  },
  {
   "nombre": "INSTITUTO DEPARTAMENTAL DE DEPORTES Y RECREACIÓN DE SUCRE",
   "filas": 182,
   "deportes": [
    "Actividades Subacuáticas",
    "Ajedrez",
    "Arquería",
    "Atletismo",
    "Baloncesto",
    "Balonmano",
    "Billar",
    "Bowling",
    "Boxeo",
    "Bádminton",
    "Béisbol",
    "Canotaje",
    "Ciclismo",
    "Ecuestre",
    "Esgrima",
    "Esquí Náutico",
    "Fútbol",
    "Fútbol Salón",
    "Gimnasia",
    "Golf",
    "Hapkido",
    "Judo",
    "Karate",
    "Levantamiento de Pesas",
    "Lucha",
    "Natación",
    "Patinaje",
    "Porrismo (exhibición)",
    "Rugby 7",
    "Softbol",
    "Squash",
    "Surf",
    "Taekwondo",
    "Tejo",
    "Tenis Mesa",
    "Tenis de Campo",
    "Tiro Deportivo",
    "Triatlón",
    "Vela",
    "Voleibol"
   ]
  },
  {
   "nombre": "INSTITUTO DEPARTAMENTAL DE RECREACION Y DEPORTE DEL GUAINÍA",
   "filas": 10,
   "deportes": [
    "Arquería",
    "Fútbol",
    "Voleibol"
   ]
  },
  {
   "nombre": "INSTITUTO DEPARTAMENTAL DE RECREACIÓN Y DEPORTE DEL ATLÁNTICO",
   "filas": 182,
   "deportes": [
    "Actividades Subacuáticas",
    "Ajedrez",
    "Arquería",
    "Atletismo",
    "Baloncesto",
    "Balonmano",
    "Billar",
    "Bowling",
    "Boxeo",
    "Bádminton",
    "Béisbol",
    "Canotaje",
    "Ciclismo",
    "Ecuestre",
    "Esgrima",
    "Esquí Náutico",
    "Fútbol",
    "Fútbol Salón",
    "Gimnasia",
    "Golf",
    "Hapkido",
    "Judo",
    "Karate",
    "Levantamiento de Pesas",
    "Lucha",
    "Natación",
    "Patinaje",
    "Porrismo (exhibición)",
    "Rugby 7",
    "Softbol",
    "Squash",
    "Surf",
    "Taekwondo",
    "Tejo",
    "Tenis Mesa",
    "Tenis de Campo",
    "Tiro Deportivo",
    "Triatlón",
    "Vela",
    "Voleibol"
   ]
  },
  {
   "nombre": "INSTITUTO DEPARTAMENTAL DE RECREACIÓN Y DEPORTES DE SANTANDER",
   "filas": 144,
   "deportes": [
    "Actividades Subacuáticas",
    "Ajedrez",
    "Arquería",
    "Atletismo",
    "Baloncesto",
    "Billar",
    "Bowling",
    "Boxeo",
    "Bádminton",
    "Canotaje",
    "Ciclismo",
    "Esgrima",
    "Esquí Náutico",
    "Fútbol",
    "Fútbol Salón",
    "Gimnasia",
    "Golf",
    "Judo",
    "Karate",
    "Levantamiento de Pesas",
    "Lucha",
    "Natación",
    "Patinaje",
    "Rugby 7",
    "Softbol",
    "Squash",
    "Taekwondo",
    "Tenis Mesa",
    "Tenis de Campo",
    "Tiro Deportivo",
    "Vela",
    "Voleibol"
   ]
  },
  {
   "nombre": "INSTITUTO DEPARTAMENTAL DEL DEPORTE DE BOYACÁ",
   "filas": 124,
   "deportes": [
    "Ajedrez",
    "Arquería",
    "Atletismo",
    "Baloncesto",
    "Balonmano",
    "Billar",
    "Bowling",
    "Boxeo",
    "Bádminton",
    "Canotaje",
    "Ciclismo",
    "Esquí Náutico",
    "Fútbol",
    "Fútbol Salón",
    "Gimnasia",
    "Judo",
    "Karate",
    "Levantamiento de Pesas",
    "Natación",
    "Patinaje",
    "Porrismo (exhibición)",
    "Taekwondo",
    "Tejo",
    "Tenis Mesa",
    "Tenis de Campo",
    "Tiro Deportivo",
    "Voleibol"
   ]
  },
  {
   "nombre": "INSTITUTO DEPARTAMENTAL DEL DEPORTE Y LA RECREACIÓN DE ARAUCA",
   "filas": 95,
   "deportes": [
    "Actividades Subacuáticas",
    "Ajedrez",
    "Atletismo",
    "Baloncesto",
    "Billar",
    "Boxeo",
    "Bádminton",
    "Ciclismo",
    "Fútbol",
    "Fútbol Salón",
    "Levantamiento de Pesas",
    "Natación",
    "Patinaje",
    "Rugby 7",
    "Softbol",
    "Taekwondo",
    "Tejo",
    "Tenis Mesa",
    "Tenis de Campo",
    "Voleibol"
   ]
  },
  {
   "nombre": "INSTITUTO DEPARTAMENTAL DEL DEPORTE Y RECREACIÓN DEL QUINDIO",
   "filas": 153,
   "deportes": [
    "Actividades Subacuáticas",
    "Ajedrez",
    "Atletismo",
    "Baloncesto",
    "Balonmano",
    "Billar",
    "Bowling",
    "Boxeo",
    "Bádminton",
    "Béisbol",
    "Canotaje",
    "Ciclismo",
    "Ecuestre",
    "Esgrima",
    "Esquí Náutico",
    "Fútbol",
    "Fútbol Salón",
    "Gimnasia",
    "Golf",
    "Hapkido",
    "Judo",
    "Karate",
    "Levantamiento de Pesas",
    "Lucha",
    "Natación",
    "Patinaje",
    "Porrismo (exhibición)",
    "Rugby 7",
    "Softbol",
    "Squash",
    "Taekwondo",
    "Tejo",
    "Tenis Mesa",
    "Tenis de Campo",
    "Triatlón",
    "Voleibol"
   ]
  },
  {
   "nombre": "INSTITUTO DEPARTAMENTAL DEL DEPORTE, LA EDUCACIÓN FÍSICA, LA RECREACIÓN Y EL APROVECHAMIENTO DEL TIEMPO LIBRE DEL HUILA",
   "filas": 130,
   "deportes": [
    "Actividades Subacuáticas",
    "Ajedrez",
    "Atletismo",
    "Baloncesto",
    "Balonmano",
    "Billar",
    "Boxeo",
    "Bádminton",
    "Canotaje",
    "Ciclismo",
    "Fútbol",
    "Fútbol Salón",
    "Gimnasia",
    "Golf",
    "Hapkido",
    "Judo",
    "Karate",
    "Levantamiento de Pesas",
    "Lucha",
    "Natación",
    "Patinaje",
    "Porrismo (exhibición)",
    "Taekwondo",
    "Tejo",
    "Tenis Mesa",
    "Tenis de Campo",
    "Triatlón",
    "Voleibol"
   ]
  },
  {
   "nombre": "INSTITUTO DEPARTAMENTAL DEL DEPORTE, LA RECREACIÓN, EL APROVECHAMIENTO DEL TIEMPO LIBRE Y LA EDUCACIÓN EXTRAESCOLAR DEL GUAVIARE",
   "filas": 18,
   "deportes": [
    "Atletismo",
    "Billar",
    "Fútbol",
    "Taekwondo"
   ]
  },
  {
   "nombre": "INSTITUTO DEPARTAMENTAL PARA EL DEPORTE DE NORTE DE SANTANDER",
   "filas": 95,
   "deportes": [
    "Ajedrez",
    "Arquería",
    "Atletismo",
    "Baloncesto",
    "Balonmano",
    "Boxeo",
    "Ciclismo",
    "Fútbol",
    "Fútbol Salón",
    "Gimnasia",
    "Golf",
    "Judo",
    "Karate",
    "Natación",
    "Patinaje",
    "Rugby 7",
    "Softbol",
    "Taekwondo",
    "Tejo",
    "Tenis Mesa",
    "Tenis de Campo",
    "Triatlón",
    "Voleibol"
   ]
  },
  {
   "nombre": "INSTITUTO DEPARTAMENTAL PARA LA RECREACIÓN Y EL DEPORTE DE CUNDINAMARCA",
   "filas": 181,
   "deportes": [
    "Actividades Subacuáticas",
    "Ajedrez",
    "Arquería",
    "Atletismo",
    "Baloncesto",
    "Balonmano",
    "Billar",
    "Bowling",
    "Boxeo",
    "Bádminton",
    "Canotaje",
    "Ciclismo",
    "Ecuestre",
    "Esgrima",
    "Esquí Náutico",
    "Fútbol",
    "Fútbol Salón",
    "Gimnasia",
    "Golf",
    "Hapkido",
    "Judo",
    "Karate",
    "Levantamiento de Pesas",
    "Lucha",
    "Natación",
    "Patinaje",
    "Porrismo (exhibición)",
    "Rugby 7",
    "Softbol",
    "Squash",
    "Surf",
    "Taekwondo",
    "Tejo",
    "Tenis Mesa",
    "Tenis de Campo",
    "Tiro Deportivo",
    "Triatlón",
    "Vela",
    "Voleibol"
   ]
  },
  {
   "nombre": "INSTITUTO DISTRITAL DE RECREACIÓN Y EL DEPORTE DE BOGOTÁ",
   "filas": 182,
   "deportes": [
    "Actividades Subacuáticas",
    "Ajedrez",
    "Arquería",
    "Atletismo",
    "Baloncesto",
    "Balonmano",
    "Billar",
    "Bowling",
    "Boxeo",
    "Bádminton",
    "Béisbol",
    "Canotaje",
    "Ciclismo",
    "Ecuestre",
    "Esgrima",
    "Esquí Náutico",
    "Fútbol",
    "Fútbol Salón",
    "Gimnasia",
    "Golf",
    "Hapkido",
    "Judo",
    "Karate",
    "Levantamiento de Pesas",
    "Lucha",
    "Natación",
    "Patinaje",
    "Porrismo (exhibición)",
    "Rugby 7",
    "Softbol",
    "Squash",
    "Surf",
    "Taekwondo",
    "Tejo",
    "Tenis Mesa",
    "Tenis de Campo",
    "Tiro Deportivo",
    "Triatlón",
    "Vela",
    "Voleibol"
   ]
  },
  {
   "nombre": "INSTITUTO PARA LA RECREACIÓN, EL DEPORTE, LA EDUCACIÓN EXTRAESCOLAR Y EL APROVECHAMIENTO DEL TIEMPO LIBRE EN EL DEPARTAMENTO DE CASANARE",
   "filas": 124,
   "deportes": [
    "Ajedrez",
    "Arquería",
    "Atletismo",
    "Baloncesto",
    "Balonmano",
    "Billar",
    "Boxeo",
    "Béisbol",
    "Ciclismo",
    "Fútbol",
    "Fútbol Salón",
    "Gimnasia",
    "Judo",
    "Karate",
    "Levantamiento de Pesas",
    "Natación",
    "Patinaje",
    "Porrismo (exhibición)",
    "Softbol",
    "Taekwondo",
    "Tejo",
    "Tenis Mesa",
    "Tenis de Campo",
    "Tiro Deportivo",
    "Triatlón",
    "Voleibol"
   ]
  },
  {
   "nombre": "SECRETARIA DE DEPORTE, RECREACIÓN Y ACTIVIDAD FÍSICA DE CALDAS",
   "filas": 182,
   "deportes": [
    "Actividades Subacuáticas",
    "Ajedrez",
    "Arquería",
    "Atletismo",
    "Baloncesto",
    "Balonmano",
    "Billar",
    "Bowling",
    "Boxeo",
    "Bádminton",
    "Béisbol",
    "Canotaje",
    "Ciclismo",
    "Ecuestre",
    "Esgrima",
    "Esquí Náutico",
    "Fútbol",
    "Fútbol Salón",
    "Gimnasia",
    "Golf",
    "Hapkido",
    "Judo",
    "Karate",
    "Levantamiento de Pesas",
    "Lucha",
    "Natación",
    "Patinaje",
    "Porrismo (exhibición)",
    "Rugby 7",
    "Softbol",
    "Squash",
    "Surf",
    "Taekwondo",
    "Tejo",
    "Tenis Mesa",
    "Tenis de Campo",
    "Tiro Deportivo",
    "Triatlón",
    "Vela",
    "Voleibol"
   ]
  },
  {
   "nombre": "SECRETARIA DE DEPORTE, RECREACIÓN Y CULTURA DE RISARALDA",
   "filas": 124,
   "deportes": [
    "Actividades Subacuáticas",
    "Ajedrez",
    "Arquería",
    "Atletismo",
    "Baloncesto",
    "Balonmano",
    "Billar",
    "Bowling",
    "Boxeo",
    "Bádminton",
    "Ciclismo",
    "Esgrima",
    "Fútbol",
    "Fútbol Salón",
    "Gimnasia",
    "Golf",
    "Hapkido",
    "Judo",
    "Levantamiento de Pesas",
    "Lucha",
    "Natación",
    "Patinaje",
    "Porrismo (exhibición)",
    "Rugby 7",
    "Softbol",
    "Taekwondo",
    "Tejo",
    "Tenis Mesa",
    "Tenis de Campo",
    "Tiro Deportivo",
    "Triatlón",
    "Voleibol"
   ]
  },
  {
   "nombre": "SECRETARIA DE DEPORTES Y RECREACIÓN DE LA GOBERNACIÓN DEL ARCHIPIÉLAGO DE SAN ANDRES",
   "filas": 89,
   "deportes": [
    "Actividades Subacuáticas",
    "Ajedrez",
    "Atletismo",
    "Baloncesto",
    "Balonmano",
    "Boxeo",
    "Béisbol",
    "Fútbol",
    "Fútbol Salón",
    "Judo",
    "Karate",
    "Levantamiento de Pesas",
    "Natación",
    "Patinaje",
    "Porrismo (exhibición)",
    "Softbol",
    "Taekwondo",
    "Tenis de Campo",
    "Triatlón",
    "Voleibol"
   ]
  },
  {
   "nombre": "SECRETARIA DE RECREACIÓN Y DEPORTES - GOBERNACIÓN DE NARIÑO",
   "filas": 94,
   "deportes": [
    "Ajedrez",
    "Atletismo",
    "Baloncesto",
    "Billar",
    "Bowling",
    "Boxeo",
    "Ciclismo",
    "Fútbol",
    "Fútbol Salón",
    "Gimnasia",
    "Hapkido",
    "Judo",
    "Karate",
    "Levantamiento de Pesas",
    "Lucha",
    "Natación",
    "Patinaje",
    "Porrismo (exhibición)",
    "Taekwondo",
    "Tenis Mesa",
    "Tenis de Campo",
    "Voleibol"
   ]
  },
  {
   "nombre": "SECRETARIA DE RECREACIÓN Y DEPORTES DEL CESAR",
   "filas": 142,
   "deportes": [
    "Actividades Subacuáticas",
    "Ajedrez",
    "Arquería",
    "Atletismo",
    "Baloncesto",
    "Balonmano",
    "Billar",
    "Boxeo",
    "Béisbol",
    "Canotaje",
    "Ciclismo",
    "Esgrima",
    "Fútbol",
    "Fútbol Salón",
    "Gimnasia",
    "Judo",
    "Karate",
    "Natación",
    "Patinaje",
    "Rugby 7",
    "Softbol",
    "Squash",
    "Taekwondo",
    "Tejo",
    "Tenis Mesa",
    "Tenis de Campo",
    "Tiro Deportivo",
    "Triatlón",
    "Voleibol"
   ]
  },
  {
   "nombre": "VAUPÉS",
   "filas": 22,
   "deportes": [
    "Ciclismo",
    "Fútbol",
    "Fútbol Salón",
    "Taekwondo",
    "Tenis Mesa"
   ]
  }
 ],
 "resumenMatriz": {
  "archivo": "DEPORTES MODALIDADES  JN 2027.xlsx - MATRIZ.csv",
  "descargado": "2026-10-08",
  "filas": 351,
  "deportes": 39,
  "casadas": 350,
  "sinCasar": 1,
  "sinCasarDetalle": [
   {
    "linea": 289,
    "deporte": "SURF",
    "modalidad": "-",
    "competencia": "Aloha Cup Shortboard Dupla"
   }
  ],
  "reglasConFilas": 86,
  "reglasSinFilas": [
   "atletismo--marcha",
   "billar--carambola",
   "billar--pool",
   "billar--heybal",
   "lucha--greco",
   "lucha--libre"
  ],
  "estado": {
   "SIN PARAMETRIZAR": 351
  },
  "parametrizadas": 0,
  "camposConfirmados": {
   "MATRIZ": 88,
   "HOJA": 4
  },
  "camposPorConfirmar": {},
  "reglasConComposicion": 22,
  "restriccionesEdad": 44,
  "criteriosAplicados": 19
 },
 "criteriosAplicados": [
  {
   "id": "precedencia",
   "tipo": "precedencia",
   "tema": "Criterio oficial",
   "criterio": "Manda lo documentado, con precedencia matriz (transcribe las reglas oficiales) > hoja de reglas > texto de las HU. Donde dos fuentes dicen cosas distintas pero compatibles, se aplican las dos.",
   "porque": "Decisión de Jorge Guzmán, 9-oct-2026 (D2/D3)."
  },
  {
   "id": "tenis-de-campo",
   "ref": "tenis-de-campo--unica",
   "tipo": "complementario",
   "tema": "Tenis de Campo",
   "criterio": "Cupo 4 + 1 por modalidad y género (hoja) y, por prueba, 2 atletas en Individual y 1 pareja en Dobles (matriz). El tope por prueba es aviso: la grilla declara por modalidad.",
   "porque": "2 en Individual + 2 de la pareja de Dobles = 4: el total de la hoja y el detalle de la matriz son coherentes.",
   "citas": {
    "hoja": "4 + 1 suplente",
    "matriz": "2 ateltas por delegación · 1 pareja por delegación · 4 atletas por equipo",
    "HU": "2 atletas por delegación"
   }
  },
  {
   "id": "atletismo",
   "ref": "atletismo--pista",
   "refs": [
    "atletismo--pista",
    "atletismo--campo",
    "atletismo--ruta",
    "atletismo--marcha",
    "atletismo--combinadas"
   ],
   "tipo": "complementario",
   "tema": "Atletismo",
   "criterio": "Hasta 90 atletas en total (hoja) y hasta 3 por prueba, 4 en maratón y media maratón marcha (matriz). El tope por prueba se muestra como aviso porque la grilla declara por modalidad.",
   "porque": "La hoja da el total y la matriz el tope por prueba: valen las dos.",
   "citas": {
    "hoja": "Hasta 90",
    "matriz": "Cada Delegación podrá inscribir hasta 3 atletas por prueba, y hasta 4 en maratón y media maratón marcha"
   }
  },
  {
   "id": "natacion-artistica",
   "ref": "natacion--artistica",
   "tipo": "complementario",
   "tema": "Natación artística",
   "criterio": "Equipo de 4 a 8 atletas + 2 reservas y máximo 2 hombres en los equipos mixtos. El delegado lo valida: mínimo 4 y máximo 8 atletas, 2 suplentes, y el mixto con hasta 2 hombres.",
   "porque": "El «10» del cupo es 8 atletas + 2 reservas; HU-IN-08 dice lo mismo.",
   "citas": {
    "hoja": "10 ; máximo 2 hombres",
    "matriz": "Cada equipo debe estar conformado entre cuatro (4) y ocho (8) atletas, más dos (2) reservas. Se puede incluir máximo 2 hombres para las pruebas de equipos mixtos",
    "HU": "entre 4 y 8 atletas más 2 reservas"
   }
  },
  {
   "id": "patinaje",
   "ref": "patinaje--velocidad",
   "refs": [
    "patinaje--velocidad",
    "patinaje--artistico",
    "patinaje--skateboarding-park",
    "patinaje--skateboarding-street"
   ],
   "tipo": "precedencia",
   "tema": "Patinaje",
   "criterio": "El tope «hasta 2 atletas por delegación» (hasta 3 en las pruebas largas) aplica solo a Velocidad y por prueba, como aviso. Artístico y Skateboarding no llevan tope por delegación.",
   "porque": "La matriz lo trae solo en las pruebas de Velocidad; la HU-IN-09 lo generalizaba a todo Patinaje.",
   "citas": {
    "matriz": "Hasta 2 atletas por delegación · Hasta 3 atletas por delegación",
    "HU": "2 atletas por delegación por prueba"
   }
  },
  {
   "id": "triatlon",
   "ref": "triatlon--duathlon",
   "refs": [
    "triatlon--triathlon",
    "triatlon--duathlon"
   ],
   "tipo": "precedencia",
   "tema": "Triatlón y Duatlón",
   "criterio": "Triatlón: máximo 4 atletas por delegación y género. Duatlón: máximo 3 por delegación y género. Cada modalidad se cuenta por separado y bloquea al excederse.",
   "porque": "La matriz da un tope distinto para cada modalidad; la HU-IN-09 decía 4 para las dos.",
   "citas": {
    "hoja": "7 + 2 suplentes",
    "matriz": "Máx 4 atletas por delegación y género · Máx 3 atletas por delegación y género",
    "HU": "máx 4 atletas por delegación y género"
   }
  },
  {
   "id": "tejo",
   "ref": "tejo--unica",
   "tipo": "complementario",
   "tema": "Tejo",
   "criterio": "Cupo 10 + 1 (hoja) y 1 atleta por delegación en Individual (matriz), como aviso.",
   "porque": "La hoja da el total de la modalidad y la matriz el tope de la prueba individual.",
   "citas": {
    "hoja": "10 + 1 suplente",
    "matriz": "1 atleta por delegación",
    "HU": "1 atleta por delegación en individual"
   }
  },
  {
   "id": "tiro-deportivo",
   "ref": "tiro-deportivo--rifle",
   "refs": [
    "tiro-deportivo--rifle",
    "tiro-deportivo--pistola",
    "tiro-deportivo--escopeta"
   ],
   "tipo": "complementario",
   "tema": "Tiro Deportivo",
   "criterio": "Máximo 1 suplente por arma (cada modalidad es un arma) y máximo 2 equipos mixtos por delegación en Rifle y Pistola.",
   "porque": "«Max 1 suplente por arma» está en la hoja de reglas y la matriz trae los equipos mixtos.",
   "citas": {
    "hoja": "27 + 3 suplentes · Max 1 suplente por arma",
    "matriz": "Máx 2 equipos mixtos por delegación"
   }
  },
  {
   "id": "esgrima",
   "ref": "esgrima--unica",
   "tipo": "equivalencia",
   "tema": "Esgrima",
   "criterio": "Espada, Florete y Sable comparten la modalidad «Única»: el cupo 12 + 3 se suma entre las tres armas, por género.",
   "porque": "Sin la suma, la delegación podría declarar 12 por arma (36 en total).",
   "citas": {
    "hoja": "12 + 3 suplentes (Única)"
   }
  },
  {
   "id": "equipos-matriz",
   "ref": "baloncesto--conjunto-5x5",
   "refs": [
    "baloncesto--conjunto-5x5",
    "balonmano--conjunto",
    "beisbol--conjunto",
    "voleibol--conjunto-coliseo",
    "tenis-de-mesa--unica"
   ],
   "tipo": "complementario",
   "tema": "Deportes de conjunto",
   "criterio": "Máximo y mínimo por equipo: Baloncesto 5x5 10 a 12, Balonmano 14 a 16, Béisbol 9 a 22, Voleibol coliseo 9 a 14, Tenis de Mesa 3 a 4 por equipo.",
   "porque": "El mínimo se suma al máximo ya definido; la HU no menciona suplentes y se conservan los del cupo."
  },
  {
   "id": "boxeo",
   "ref": "boxeo--unica",
   "tipo": "sin-contraste",
   "tema": "Boxeo",
   "criterio": "Hombres 13 + 3 y mujeres 12 + 3, tal cual la hoja.",
   "porque": "Dato de la hoja sin contraste en la matriz.",
   "citas": {
    "hoja": "13 + 3 suplentes · 12 + 3 suplentes"
   }
  },
  {
   "id": "sin-tope",
   "tipo": "decision",
   "tema": "Sin tope definido",
   "criterio": "Billar, Lucha y los géneros en blanco de la hoja (Atletismo y Ecuestre femenino) no tienen tope: la delegación solo declara que va. No cuentan como pendientes.",
   "porque": "Decisión del 9-oct-2026 (D4).",
   "refs": [
    "atletismo--campo",
    "atletismo--combinadas",
    "atletismo--marcha",
    "atletismo--pista",
    "atletismo--ruta",
    "billar--carambola",
    "billar--heybal",
    "billar--pool",
    "ecuestre--adiestramiento",
    "ecuestre--prueba-completa",
    "ecuestre--salto",
    "lucha--greco",
    "lucha--libre"
   ]
  },
  {
   "id": "sin-suplentes",
   "tipo": "decision",
   "tema": "Suplentes en blanco",
   "criterio": "Si la hoja trae atletas y deja suplentes en blanco, la modalidad no tiene suplentes (cupo 0). Excepciones documentadas: Surf Shortboard (1 por género, nota de la hoja) y Natación artística (2 reservas, matriz).",
   "porque": "Decisión del 9-oct-2026 (D5).",
   "refs": [
    "atletismo--campo",
    "atletismo--combinadas",
    "atletismo--marcha",
    "atletismo--pista",
    "atletismo--ruta",
    "gimnasia--artistica",
    "gimnasia--ritmica",
    "gimnasia--trampolin",
    "hapkido--combate",
    "surf--bodyboard",
    "surf--longboard",
    "surf--sup-race",
    "surf--sup-surf"
   ]
  },
  {
   "id": "nombres",
   "tipo": "equivalencia",
   "tema": "Nombres V3 → hoja",
   "criterio": "Las combinaciones de V3 con otro nombre se resuelven con la tabla «equivalencias»: renombres (mismo cupo) y agrupaciones (mayor cupo del grupo, detalle en el tooltip). Filas sin regla por nombre: 0.",
   "porque": "Decisión del 9-oct-2026 (D8)."
  },
  {
   "id": "genero",
   "tipo": "genero",
   "filas": 175,
   "tema": "Géneros no habilitados",
   "criterio": "Filas de V3 con un sexo que la hoja de reglas no habilita para esa modalidad (se marcan sinRegla, motivo genero): Ajedrez/Blitz/Hombres; Ajedrez/Clásico/Hombres; Ajedrez/Rápido/Hombres; Ecuestre/Adiestramiento/Mixto; Ecuestre/Prueba Completa/Mixto; Ecuestre/Salto/Mixto; Gimnasia/Trampolín/Mixto; Natación/Carreras/Mixto; Squash/Única/Mixto. Siguen deshabilitadas en la grilla.",
   "porque": "La hoja de reglas no habilita ese género en esa modalidad."
  },
  {
   "id": "cupos-prellenados",
   "tipo": "observacion",
   "tema": "Cupos prellenados en V3",
   "criterio": "Filas de V3 con cupo prellenado distinto del de la hoja de reglas (manda la hoja; ninguno la supera, V3 prellena valores menores).",
   "porque": "Manda la hoja de reglas.",
   "filas": 312,
   "de": 756,
   "ejemplos": [
    {
     "delegacion": "INSTITUTO DEPARTAMENTAL DE DEPORTES DE ANTIOQUIA",
     "deporte": "Actividades Subacuáticas",
     "modalidad": "Cortas - Piscina",
     "sexo": "Hombres",
     "v3": {
      "atletas": 9,
      "suplentes": 1
     },
     "regla": {
      "atletas": 18,
      "suplentes": 2
     },
     "reglaId": "actividades-subacauticas--cortas-piscina"
    },
    {
     "delegacion": "INSTITUTO DEPARTAMENTAL DE DEPORTES DE ANTIOQUIA",
     "deporte": "Ajedrez",
     "modalidad": "Blitz",
     "sexo": "Mujeres",
     "v3": {
      "atletas": 2,
      "suplentes": 1
     },
     "regla": {
      "atletas": 5,
      "suplentes": 1
     },
     "reglaId": "ajedrez--blitz"
    },
    {
     "delegacion": "INSTITUTO DEPARTAMENTAL DE DEPORTES DE ANTIOQUIA",
     "deporte": "Atletismo",
     "modalidad": "Campo",
     "sexo": "Hombres",
     "v3": {
      "atletas": 8,
      "suplentes": 1
     },
     "regla": {
      "atletas": 90,
      "suplentes": null
     },
     "reglaId": "atletismo--campo"
    }
   ]
  },
  {
   "id": "heredados",
   "tipo": "observacion",
   "tema": "Celdas combinadas",
   "criterio": "Judo Kata, Karate Kumite y otras modalidades heredan el cupo del renglón anterior de la hoja (marca «heredado»).",
   "porque": "La hoja usa celdas combinadas."
  },
  {
   "id": "sin-declaraciones",
   "tipo": "observacion",
   "tema": "Regla sin declaraciones",
   "criterio": "Ciclismo · BMX Freestyle no tiene ninguna declaración en V3.",
   "porque": "Ninguna delegación la declaró."
  },
  {
   "id": "intenciones-tardias",
   "tipo": "decision",
   "tema": "Intenciones posteriores al 30-08",
   "criterio": "Las intenciones con fecha hasta el 01-09-2026 son válidas (casos excepcionales): no se marcan ni se filtran.",
   "porque": "Decisión del 9-oct-2026 (D9)."
  }
 ],
 "equivalencias": [
  {
   "v3": {
    "deporte": "Esgrima",
    "modalidad": "Espada"
   },
   "hoja": {
    "deporte": "ESGRIMA",
    "modalidad": "UNICA"
   },
   "tipo": "renombre",
   "reglaId": "esgrima--unica",
   "regla": "Mismo cupo: el nombre de V3 es otra forma de escribir la modalidad de la hoja (la hoja agrupa las tres armas en «Única»; el 12 + 3 cuenta para la suma de las tres, por género)"
  },
  {
   "v3": {
    "deporte": "Esgrima",
    "modalidad": "Florete"
   },
   "hoja": {
    "deporte": "ESGRIMA",
    "modalidad": "UNICA"
   },
   "tipo": "renombre",
   "reglaId": "esgrima--unica",
   "regla": "Mismo cupo: el nombre de V3 es otra forma de escribir la modalidad de la hoja (la hoja agrupa las tres armas en «Única»; el 12 + 3 cuenta para la suma de las tres, por género)"
  },
  {
   "v3": {
    "deporte": "Esgrima",
    "modalidad": "Sable"
   },
   "hoja": {
    "deporte": "ESGRIMA",
    "modalidad": "UNICA"
   },
   "tipo": "renombre",
   "reglaId": "esgrima--unica",
   "regla": "Mismo cupo: el nombre de V3 es otra forma de escribir la modalidad de la hoja (la hoja agrupa las tres armas en «Única»; el 12 + 3 cuenta para la suma de las tres, por género)"
  },
  {
   "v3": {
    "deporte": "Arquería",
    "modalidad": "Recurvo"
   },
   "hoja": {
    "deporte": "TIRO CON ARCO",
    "modalidad": "RECURVO"
   },
   "tipo": "renombre",
   "reglaId": "tiro-con-arco--recurvo",
   "regla": "Mismo cupo: el nombre de V3 es otra forma de escribir la modalidad de la hoja"
  },
  {
   "v3": {
    "deporte": "Arquería",
    "modalidad": "Compuesto"
   },
   "hoja": {
    "deporte": "TIRO CON ARCO",
    "modalidad": "COMPUESTO"
   },
   "tipo": "renombre",
   "reglaId": "tiro-con-arco--compuesto",
   "regla": "Mismo cupo: el nombre de V3 es otra forma de escribir la modalidad de la hoja"
  },
  {
   "v3": {
    "deporte": "Fútbol Salón",
    "modalidad": "Único"
   },
   "hoja": {
    "deporte": "FUTBOL DE SALON",
    "modalidad": "UNICO"
   },
   "tipo": "renombre",
   "reglaId": "futbol-de-salon--unico",
   "regla": "Mismo cupo: el nombre de V3 es otra forma de escribir la modalidad de la hoja"
  },
  {
   "v3": {
    "deporte": "Rugby 7",
    "modalidad": "Único"
   },
   "hoja": {
    "deporte": "RUGBY SIETE",
    "modalidad": "UNICO"
   },
   "tipo": "renombre",
   "reglaId": "rugby-siete--unico",
   "regla": "Mismo cupo: el nombre de V3 es otra forma de escribir la modalidad de la hoja"
  },
  {
   "v3": {
    "deporte": "Tenis Mesa",
    "modalidad": "Única"
   },
   "hoja": {
    "deporte": "TENIS DE MESA",
    "modalidad": "UNICA"
   },
   "tipo": "renombre",
   "reglaId": "tenis-de-mesa--unica",
   "regla": "Mismo cupo: el nombre de V3 es otra forma de escribir la modalidad de la hoja"
  },
  {
   "v3": {
    "deporte": "Surf",
    "modalidad": "SUP Racing"
   },
   "hoja": {
    "deporte": "SURF",
    "modalidad": "SUP RACE"
   },
   "tipo": "renombre",
   "reglaId": "surf--sup-race",
   "regla": "Mismo cupo: el nombre de V3 es otra forma de escribir la modalidad de la hoja"
  },
  {
   "v3": {
    "deporte": "Vela",
    "modalidad": "Bote"
   },
   "hoja": [
    {
     "deporte": "VELA",
     "modalidad": "Bote - ILCA 6",
     "cupo": "FEM 3+1"
    },
    {
     "deporte": "VELA",
     "modalidad": "Bote - ILCA 7",
     "cupo": "MASC 3+1"
    },
    {
     "deporte": "VELA",
     "modalidad": "Bote - Optimist",
     "cupo": "Mixto 3 («MASC 3»)"
    },
    {
     "deporte": "VELA",
     "modalidad": "Bote - Sunfish",
     "cupo": "MASC 3+1, FEM 3+1"
    },
    {
     "deporte": "VELA",
     "modalidad": "Bote - Snipe",
     "cupo": "Mixto 2 («MASC 1 / FEM 1»)"
    }
   ],
   "tipo": "agrupacion",
   "reglaId": "grupo--vela-bote",
   "reglaIds": [
    "vela--bote-ilca-6",
    "vela--bote-ilca-7",
    "vela--bote-optimist",
    "vela--bote-sunfish",
    "vela--bote-snipe"
   ],
   "regla": "Agrupación: la fila de V3 usa el mayor cupo documentado del grupo, para no bloquear de más; el detalle por modalidad va en el tooltip"
  },
  {
   "v3": {
    "deporte": "Vela",
    "modalidad": "Tabla"
   },
   "hoja": [
    {
     "deporte": "VELA",
     "modalidad": "Tabla a Vela - Wingfoil",
     "cupo": "Mixto 3 («MASC 3»)"
    },
    {
     "deporte": "VELA",
     "modalidad": "Tabla Kite - Formula Kite",
     "cupo": "MASC 3+1, FEM 3+1"
    },
    {
     "deporte": "VELA",
     "modalidad": "Tabla Kite - Twin Tip",
     "cupo": "MASC 3+1, FEM 3+1"
    }
   ],
   "tipo": "agrupacion",
   "reglaId": "grupo--vela-tabla",
   "reglaIds": [
    "vela--tabla-a-vela-wingfoil",
    "vela--tabla-kite-formula-kite",
    "vela--tabla-kite-twin-tip"
   ],
   "regla": "Agrupación: la fila de V3 usa el mayor cupo documentado del grupo, para no bloquear de más; el detalle por modalidad va en el tooltip"
  },
  {
   "v3": {
    "deporte": "Porrismo (exhibición)",
    "modalidad": "Cheer"
   },
   "hoja": [
    {
     "deporte": "PORRISMO (Exhibición)",
     "modalidad": "CHEER-NIVEL 3",
     "cupo": "FEM 12+1"
    },
    {
     "deporte": "PORRISMO (Exhibición)",
     "modalidad": "CHEER-NIVEL 4",
     "cupo": "Mixto 12 («MASC 4 / FEM 8 + 1 suplente de cualquier género»)"
    }
   ],
   "tipo": "agrupacion",
   "reglaId": "grupo--porrismo-cheer",
   "reglaIds": [
    "porrismo-exhibicion--cheer-nivel-3",
    "porrismo-exhibicion--cheer-nivel-4"
   ],
   "regla": "Agrupación: la fila de V3 usa el mayor cupo documentado del grupo, para no bloquear de más; el detalle por modalidad va en el tooltip"
  },
  {
   "v3": {
    "deporte": "Porrismo (exhibición)",
    "modalidad": "Performance Cheer"
   },
   "hoja": [
    {
     "deporte": "PORRISMO (Exhibición)",
     "modalidad": "PERFORMANCE CHEER-POMP",
     "cupo": "Mixto 6 («MASC 6 + 1 suplentes»)"
    },
    {
     "deporte": "PORRISMO (Exhibición)",
     "modalidad": "PERFORMANCE CHEER-HIPHOP",
     "cupo": "Mixto 6 («MASC 6 + 1 suplentes»)"
    }
   ],
   "tipo": "agrupacion",
   "reglaId": "grupo--porrismo-performance-cheer",
   "reglaIds": [
    "porrismo-exhibicion--performance-cheer-pomp",
    "porrismo-exhibicion--performance-cheer-hiphop"
   ],
   "regla": "Agrupación: la fila de V3 usa el mayor cupo documentado del grupo, para no bloquear de más; el detalle por modalidad va en el tooltip"
  },
  {
   "v3": {
    "deporte": "Patinaje",
    "modalidad": "Skateboarding"
   },
   "hoja": [
    {
     "deporte": "PATINAJE",
     "modalidad": "SKATEBOARDING - PARK",
     "cupo": "MASC 4+2, FEM 4+2"
    },
    {
     "deporte": "PATINAJE",
     "modalidad": "SKATEBOARDING - STREET",
     "cupo": "MASC 4+2, FEM 4+2"
    }
   ],
   "tipo": "agrupacion",
   "reglaId": "grupo--patinaje-skateboarding",
   "reglaIds": [
    "patinaje--skateboarding-park",
    "patinaje--skateboarding-street"
   ],
   "regla": "Agrupación: la fila de V3 usa el mayor cupo documentado del grupo, para no bloquear de más; el detalle por modalidad va en el tooltip"
  }
 ],
 "reglasGrupo": [
  {
   "id": "grupo--vela-bote",
   "deporte": "Vela",
   "modalidad": "Bote",
   "grupo": true,
   "agrupa": [
    {
     "id": "vela--bote-ilca-6",
     "modalidad": "ILCA 6",
     "cupo": "FEM 3+1"
    },
    {
     "id": "vela--bote-ilca-7",
     "modalidad": "ILCA 7",
     "cupo": "MASC 3+1"
    },
    {
     "id": "vela--bote-optimist",
     "modalidad": "Optimist",
     "cupo": "Mixto 3 («MASC 3»)"
    },
    {
     "id": "vela--bote-sunfish",
     "modalidad": "Sunfish",
     "cupo": "MASC 3+1, FEM 3+1"
    },
    {
     "id": "vela--bote-snipe",
     "modalidad": "Snipe",
     "cupo": "Mixto 2 («MASC 1 / FEM 1»)"
    }
   ],
   "criterio": "Tope = mayor cupo documentado del grupo, para no bloquear de más",
   "generos": {
    "H": true,
    "M": true,
    "X": true
   },
   "masc": {
    "atletas": 3,
    "suplentes": 1,
    "nota": null
   },
   "fem": {
    "atletas": 3,
    "suplentes": 1,
    "nota": null
   },
   "mixtaComposicion": null,
   "notas": [],
   "minimo": null,
   "topeDelegacion": null,
   "heredado": false,
   "sinCupo": false,
   "composicion": [
    {
     "tipo": "mixta",
     "total": 3,
     "fuente": "HOJA",
     "confirmado": true,
     "agrupacion": true,
     "citaHoja": "Optimist: MASC 3 · Snipe: MASC 1 / FEM 1"
    }
   ]
  },
  {
   "id": "grupo--vela-tabla",
   "deporte": "Vela",
   "modalidad": "Tabla",
   "grupo": true,
   "agrupa": [
    {
     "id": "vela--tabla-a-vela-wingfoil",
     "modalidad": "Tabla a Vela - Wingfoil",
     "cupo": "Mixto 3 («MASC 3»)"
    },
    {
     "id": "vela--tabla-kite-formula-kite",
     "modalidad": "Tabla Kite - Formula Kite",
     "cupo": "MASC 3+1, FEM 3+1"
    },
    {
     "id": "vela--tabla-kite-twin-tip",
     "modalidad": "Tabla Kite - Twin Tip",
     "cupo": "MASC 3+1, FEM 3+1"
    }
   ],
   "criterio": "Tope = mayor cupo documentado del grupo, para no bloquear de más",
   "generos": {
    "H": true,
    "M": true,
    "X": true
   },
   "masc": {
    "atletas": 3,
    "suplentes": 1,
    "nota": null
   },
   "fem": {
    "atletas": 3,
    "suplentes": 1,
    "nota": null
   },
   "mixtaComposicion": null,
   "notas": [],
   "minimo": null,
   "topeDelegacion": null,
   "heredado": false,
   "sinCupo": false,
   "composicion": [
    {
     "tipo": "mixta",
     "total": 3,
     "fuente": "HOJA",
     "confirmado": true,
     "agrupacion": true,
     "citaHoja": "Tabla a Vela - Wingfoil: MASC 3"
    }
   ]
  },
  {
   "id": "grupo--porrismo-cheer",
   "deporte": "Porrismo (exhibición)",
   "modalidad": "Cheer",
   "grupo": true,
   "agrupa": [
    {
     "id": "porrismo-exhibicion--cheer-nivel-3",
     "modalidad": "Cheer Nivel 3",
     "cupo": "FEM 12+1"
    },
    {
     "id": "porrismo-exhibicion--cheer-nivel-4",
     "modalidad": "Cheer Nivel 4",
     "cupo": "Mixto 12 («MASC 4 / FEM 8 + 1 suplente de cualquier género»)"
    }
   ],
   "criterio": "Tope = mayor cupo documentado del grupo, para no bloquear de más",
   "generos": {
    "H": false,
    "M": true,
    "X": true
   },
   "masc": {
    "atletas": null,
    "suplentes": null,
    "nota": null
   },
   "fem": {
    "atletas": 12,
    "suplentes": 1,
    "nota": null
   },
   "mixtaComposicion": null,
   "notas": [],
   "minimo": null,
   "topeDelegacion": null,
   "heredado": false,
   "sinCupo": false,
   "composicion": [
    {
     "tipo": "mixta",
     "total": 12,
     "fuente": "HOJA",
     "confirmado": true,
     "agrupacion": true,
     "citaHoja": "Cheer Nivel 4: MASC 4 / FEM 8 + 1 suplente de cualquier género"
    }
   ]
  },
  {
   "id": "grupo--porrismo-performance-cheer",
   "deporte": "Porrismo (exhibición)",
   "modalidad": "Performance Cheer",
   "grupo": true,
   "agrupa": [
    {
     "id": "porrismo-exhibicion--performance-cheer-pomp",
     "modalidad": "Performance Cheer Pomp",
     "cupo": "Mixto 6 («MASC 6 + 1 suplentes»)"
    },
    {
     "id": "porrismo-exhibicion--performance-cheer-hiphop",
     "modalidad": "Performance Cheer Hip Hop",
     "cupo": "Mixto 6 («MASC 6 + 1 suplentes»)"
    }
   ],
   "criterio": "Tope = mayor cupo documentado del grupo, para no bloquear de más",
   "generos": {
    "H": false,
    "M": false,
    "X": true
   },
   "masc": {
    "atletas": null,
    "suplentes": null,
    "nota": null
   },
   "fem": {
    "atletas": null,
    "suplentes": null,
    "nota": null
   },
   "mixtaComposicion": null,
   "notas": [],
   "minimo": null,
   "topeDelegacion": null,
   "heredado": false,
   "sinCupo": false,
   "composicion": [
    {
     "tipo": "mixta",
     "total": 6,
     "fuente": "HOJA",
     "confirmado": true,
     "agrupacion": true,
     "citaHoja": "Performance Cheer Pomp: MASC 6 + 1 suplentes · Performance Cheer Hip Hop: MASC 6 + 1 suplentes"
    }
   ]
  },
  {
   "id": "grupo--patinaje-skateboarding",
   "deporte": "Patinaje",
   "modalidad": "Skateboarding",
   "grupo": true,
   "agrupa": [
    {
     "id": "patinaje--skateboarding-park",
     "modalidad": "Skateboarding Park",
     "cupo": "MASC 4+2, FEM 4+2"
    },
    {
     "id": "patinaje--skateboarding-street",
     "modalidad": "Skateboarding Street",
     "cupo": "MASC 4+2, FEM 4+2"
    }
   ],
   "criterio": "Tope = mayor cupo documentado del grupo, para no bloquear de más",
   "generos": {
    "H": true,
    "M": true,
    "X": false
   },
   "masc": {
    "atletas": 4,
    "suplentes": 2,
    "nota": null
   },
   "fem": {
    "atletas": 4,
    "suplentes": 2,
    "nota": null
   },
   "mixtaComposicion": null,
   "notas": [],
   "minimo": null,
   "topeDelegacion": null,
   "heredado": false,
   "sinCupo": false,
   "composicion": []
  }
 ]
};
