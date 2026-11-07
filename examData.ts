/**
 * Exam data for 7th grade Spanish Literature practice exam
 * EXAMEN DE PRÁCTICA DE LITERATURA — 7.º CURSO
 * ԳՐԱԿԱՆՈՒԹՅԱՆ ՓՈՐՁՆԱԿԱՆ ՔՆՆՈՒԹՅՈՒՆ — 7-ՐԴ ԴԱՍԱՐԱՆ
 */

export interface TranslationPair {
  es: string;
  hy: string;
}

export interface QuestionItem {
  id: string;
  number?: number | string;
  title?: TranslationPair;
  prompt: TranslationPair;
  contextText?: TranslationPair;
  options?: { key: string; es: string; hy: string }[];
  subQuestions?: {
    id: string;
    key?: string;
    prompt: TranslationPair;
    answer: TranslationPair;
  }[];
  answer: TranslationPair;
  notes?: TranslationPair[];
  tags?: string[];
  blockId: string;
}

export interface BlockSection {
  id: string;
  part: 1 | 2;
  number: string;
  title: TranslationPair;
  intro?: TranslationPair;
  summary?: TranslationPair;
  questions: QuestionItem[];
}

export interface Flashcard {
  id: string;
  term: TranslationPair;
  category: 'fónico' | 'morfosintáctico' | 'semántico' | 'género' | 'métrica' | 'teatro' | 'tradición';
  definition: TranslationPair;
  example: TranslationPair;
  explanation: TranslationPair;
}

export interface QuizQuestion {
  id: string;
  question: TranslationPair;
  options: {
    id: string;
    text: TranslationPair;
    isCorrect: boolean;
  }[];
  explanation: TranslationPair;
}

export const EXAM_SECTIONS: BlockSection[] = [
  // ==========================================
  // PARTE 1 - BLOQUE 1
  // ==========================================
  {
    id: 'bloque-1',
    part: 1,
    number: 'BLOQUE 1 / ՄԱՍ 1',
    title: {
      es: 'EL LENGUAJE LITERARIO',
      hy: 'ԳԵՂԱՐՎԵՍՏԱԿԱՆ ԼԵԶՈՒ'
    },
    intro: {
      es: 'Antes de empezar: El lenguaje literario utiliza las palabras de forma expresiva y estética. No solo importa qué se dice, sino también cómo se dice. Puede emplear imágenes, ritmo, musicalidad y figuras literarias. Aparece tanto en verso como en prosa.',
      hy: 'Նախ՝ հասկանանք թեման․ Գեղարվեստական լեզուն բառերն օգտագործում է արտահայտիչ և գեղագիտական ձևով։ Կարևոր է ոչ միայն այն, թե ինչ է ասվում, այլև՝ ինչպես է ասվում։ Այն կարող է օգտագործել պատկերներ, ռիթմ, երաժշտականություն և պատկերավորման միջոցներ։ Հանդիպում է և՛ չափածո, և՛ արձակ ստեղծագործություններում։'
    },
    questions: [
      {
        id: 'q1',
        number: 1,
        blockId: 'bloque-1',
        tags: ['lenguaje literario', 'expresividad'],
        prompt: {
          es: 'Compara estas dos frases. ¿Cuál utiliza un lenguaje literario? Justifica tu respuesta.',
          hy: 'Համեմատի՛ր երկու նախադասությունները։ Ո՞րն է օգտագործում գեղարվեստական լեզու։ Հիմնավորի՛ր։'
        },
        options: [
          {
            key: 'A',
            es: '«El sol se puso y empezó la noche».',
            hy: '«Արևը մայր մտավ, և գիշերը սկսվեց»։'
          },
          {
            key: 'B',
            es: '«El cielo se vistió de oro antes de dormir».',
            hy: '«Երկինքը քնելուց առաջ ոսկի հագավ»։'
          }
        ],
        answer: {
          es: 'La frase B utiliza un lenguaje más literario. Presenta el cielo como si pudiera vestirse y dormir. «Oro» sugiere el color dorado del atardecer. La frase A comunica el hecho de forma directa.',
          hy: 'B նախադասությունն ավելի գեղարվեստական է։ Երկինքը ներկայացված է այնպես, կարծես կարող է հագնվել և քնել։ «Ոսկին» հուշում է մայրամուտի ոսկեգույն երանգը։ A նախադասությունն ուղղակիորեն հաղորդում է իրադարձությունը։'
        }
      },
      {
        id: 'q2',
        number: 2,
        blockId: 'bloque-1',
        tags: ['rima', 'prosa', 'verso'],
        prompt: {
          es: 'Un alumno afirma: «Si un texto no tiene rima, no puede ser literario». ¿Tiene razón?',
          hy: 'Աշակերտն ասում է․ «Եթե տեքստը հանգ չունի, այն չի կարող գեղարվեստական լինել»։ Ճի՞շտ է։'
        },
        answer: {
          es: 'No. Las novelas y los cuentos suelen estar escritos en prosa y también son literatura. Además, existen poemas sin rima.',
          hy: 'Ո՛չ։ Վեպերն ու պատմվածքները սովորաբար գրվում են արձակ, բայց նույնպես գեղարվեստական գրականություն են։ Կան նաև անհանգ բանաստեղծություններ։'
        }
      },
      {
        id: 'q3',
        number: 3,
        blockId: 'bloque-1',
        tags: ['creatividad', 'metáfora'],
        prompt: {
          es: 'Transforma esta frase cotidiana en una frase literaria: «Estoy triste porque mi amiga se ha ido».',
          hy: 'Այս առօրյա նախադասությունը դարձրո՛ւ գեղարվեստական․ «Ես տխուր եմ, որովհետև ընկերուհիս գնացել է»։'
        },
        answer: {
          es: '«Desde que te fuiste, llevo una nube gris en el corazón».',
          hy: '«Քո գնալուց հետո սրտիս մեջ մոխրագույն ամպ եմ կրում»։'
        },
        notes: [
          {
            es: 'Explicación: La nube gris representa la tristeza. No es una nube real.',
            hy: 'Բացատրություն․ Մոխրագույն ամպը խորհրդանշում է տխրությունը։ Դա իրական ամպ չէ։'
          }
        ]
      }
    ]
  },

  // ==========================================
  // PARTE 1 - BLOQUE 2
  // ==========================================
  {
    id: 'bloque-2',
    part: 1,
    number: 'BLOQUE 2 / ՄԱՍ 2',
    title: {
      es: 'LOS GÉNEROS LITERARIOS',
      hy: 'ԳՐԱԿԱՆ ՍԵՌԵՐԸ'
    },
    intro: {
      es: 'La lírica expresa sentimientos y una visión subjetiva. La narrativa cuenta una historia mediante un narrador. El teatro presenta acciones destinadas a representarse ante un público, principalmente mediante diálogos.',
      hy: 'Քնարերգությունն արտահայտում է զգացմունքներ և անձնական վերաբերմունք։ Պատմողական գրականությունը պատմողի միջոցով ներկայացնում է պատմություն։ Դրամատիկական գրականությունը նախատեսված է հանդիսատեսի առջև բեմադրվելու համար և հիմնականում հիմնվում է երկխոսությունների վրա։'
    },
    questions: [
      {
        id: 'q4',
        number: 4,
        blockId: 'bloque-2',
        tags: ['lírica', 'versos', 'sentimientos'],
        prompt: {
          es: 'Lee el texto e identifica el género. Señala dos pruebas.',
          hy: 'Կարդա՛ տեքստը և որոշի՛ր գրական սեռը։ Նշի՛ր երկու հիմնավորում։'
        },
        contextText: {
          es: 'Te recuerdo cada tarde,\ncuando se apaga la luz;\nmi corazón guarda siempre\nlo que me dejaste tú.',
          hy: 'Ամեն երեկո քեզ եմ հիշում,\nերբ լույսը մարում է,\nսիրտս միշտ պահում է\nայն, ինչ դու ինձ թողեցիր։'
        },
        answer: {
          es: 'Es lírica: expresa sentimientos de recuerdo y nostalgia y está organizado en versos. La prueba principal es la expresión de sentimientos; escribir en verso, por sí solo, no basta para identificar la lírica.',
          hy: 'Սա քնարերգություն է․ արտահայտում է հիշողություն ու կարոտ և գրված է չափածո տողերով։ Գլխավոր հիմնավորումը զգացմունքների արտահայտությունն է։ Միայն չափածո լինելը դեռ չի նշանակում, որ ստեղծագործությունը քնարական է։'
        }
      },
      {
        id: 'q5',
        number: 5,
        blockId: 'bloque-2',
        tags: ['narrativa', 'tercera persona'],
        prompt: {
          es: 'Lee el texto. ¿A qué género pertenece? ¿En qué persona narra el narrador?',
          hy: 'Կարդա՛ տեքստը։ Ո՞ր սեռին է պատկանում։ Պատմողը ո՞ր դեմքով է պատմում։'
        },
        contextText: {
          es: 'Clara abrió la puerta y encontró una carta en el suelo. La recogió con cuidado y reconoció la letra de su hermano.',
          hy: 'Կլարան բացեց դուռը և հատակին նամակ գտավ։ Նա զգուշորեն վերցրեց այն ու ճանաչեց եղբոր ձեռագիրը։'
        },
        answer: {
          es: 'Pertenece a la narrativa. Un narrador cuenta las acciones de Clara en tercera persona: «abrió», «encontró», «recogió», «reconoció».',
          hy: 'Պատկանում է պատմողական գրականությանը։ Պատմողը երրորդ դեմքով ներկայացնում է Կլարայի գործողությունները՝ բացեց, գտավ, վերցրեց, ճանաչեց։'
        }
      },
      {
        id: 'q6',
        number: 6,
        blockId: 'bloque-2',
        tags: ['teatro', 'acotación', 'atrezo'],
        prompt: {
          es: 'Analiza este fragmento teatral.',
          hy: 'Վերլուծի՛ր այս դրամատիկական հատվածը։'
        },
        contextText: {
          es: 'LUCÍA: ¿Has oído ese ruido?\nMARCOS: Sí. Viene del jardín.\n(Lucía coge una linterna y se acerca a la ventana.)',
          hy: 'ԼՈՒՍԻԱ․ Լսեցի՞ր այդ ձայնը։\nՄԱՐԿՈՍ․ Այո՛։ Այգուց է գալիս։\n(Լուսիան վերցնում է լապտերը և մոտենում պատուհանին։)'
        },
        subQuestions: [
          {
            id: 'q6a',
            key: 'a)',
            prompt: {
              es: '¿Qué rasgos indican que es teatro?',
              hy: 'Ի՞նչ հատկանիշներից է երևում, որ սա դրամատիկական տեքստ է։'
            },
            answer: {
              es: 'Aparecen los nombres de los personajes y sus diálogos. La acción puede representarse en un escenario.',
              hy: 'Կան գործող անձանց անուններն ու երկխոսությունը։ Գործողությունը հնարավոր է ներկայացնել բեմում։'
            }
          },
          {
            id: 'q6b',
            key: 'b)',
            prompt: {
              es: '¿Cómo se llama la indicación entre paréntesis?',
              hy: 'Ինչպե՞ս է կոչվում փակագծերի մեջ գրված ցուցումը։'
            },
            answer: {
              es: 'Es una acotación: indica lo que hace un personaje.',
              hy: 'Դա բեմական ցուցում՝ ռեմարկ (acotación) է․ բացատրում է կերպարի գործողությունը։'
            }
          },
          {
            id: 'q6c',
            key: 'c)',
            prompt: {
              es: '¿Qué objeto de atrezo aparece?',
              hy: 'Ի՞նչ բեմական առարկա է նշված։'
            },
            answer: {
              es: 'La linterna es un objeto de atrezo.',
              hy: 'Լապտերը բեմական առարկա (atrezo) է։'
            }
          }
        ],
        answer: {
          es: 'a) Nombres de personajes y diálogos (representable en escenario). b) Acotación. c) La linterna (objeto de atrezo).',
          hy: 'a) Կերպարների անուններ և երկխոսություններ։ b) Բեմական ցուցում (ռեմարկ)։ c) Լապտերը (բեմական առարկա)։'
        }
      },
      {
        id: 'q7',
        number: 7,
        blockId: 'bloque-2',
        tags: ['autor', 'narrador'],
        prompt: {
          es: 'Explica la diferencia entre autor y narrador.',
          hy: 'Բացատրի՛ր հեղինակի և պատմողի տարբերությունը։'
        },
        answer: {
          es: 'El autor es la persona real que escribe la obra. El narrador es la voz que cuenta la historia dentro del texto. Aunque aparezca «yo», no significa necesariamente que hable el autor.',
          hy: 'Հեղինակը ստեղծագործությունը գրող իրական մարդն է։ Պատմողը տեքստում պատմությունը ներկայացնող ձայնն է։ Եթե նույնիսկ օգտագործվում է «ես», դա պարտադիր չի նշանակում, որ հենց հեղինակն է խոսում։'
        }
      }
    ]
  },

  // ==========================================
  // PARTE 1 - BLOQUE 3
  // ==========================================
  {
    id: 'bloque-3',
    part: 1,
    number: 'BLOQUE 3 / ՄԱՍ 3',
    title: {
      es: 'LITERATURA POPULAR Y CULTA',
      hy: 'ԺՈՂՈՎՐԴԱԿԱՆ ԵՎ ՀԵՂԻՆԱԿԱՅԻՆ ԳՐԱԿԱՆՈՒԹՅՈՒՆ'
    },
    intro: {
      es: 'La literatura popular se transmite tradicionalmente de forma oral y muchas obras son anónimas. Puede cambiar al pasar de una generación a otra. La literatura culta suele tener un autor conocido y se elabora por escrito con una forma cuidadosamente trabajada.',
      hy: 'Ժողովրդական գրականությունն ավանդաբար փոխանցվում է բանավոր, և շատ ստեղծագործությունների հեղինակներն անհայտ են։ Այն կարող է փոփոխվել սերնդեսերունդ փոխանցվելիս։ Հեղինակային գրականությունը սովորաբար ունի հայտնի հեղինակ և ստեղծվում է գրավոր՝ մշակված լեզվով ու ձևով։'
    },
    questions: [
      {
        id: 'q8',
        number: 8,
        blockId: 'bloque-3',
        tags: ['literatura popular', 'oralidad'],
        prompt: {
          es: 'Lee la situación y explica qué tipo de literatura representa.',
          hy: 'Կարդա՛ իրավիճակը և բացատրի՛ր՝ ինչ տեսակի գրականություն է ներկայացված։'
        },
        contextText: {
          es: 'Una abuela canta una canción que aprendió de su madre. No sabe quién la creó. Su nieta la aprende, pero cambia algunas palabras.',
          hy: 'Տատիկը երգում է մի երգ, որը սովորել է իր մորից։ Նա չգիտի, թե ով է ստեղծել այն։ Թոռնուհին սովորում է երգը, բայց փոխում է որոշ բառեր։'
        },
        answer: {
          es: 'Es literatura popular: se transmite oralmente, su autor es desconocido y presenta modificaciones durante la transmisión.',
          hy: 'Սա ժողովրդական գրականություն է․ փոխանցվում է բանավոր, հեղինակն անհայտ է, և փոխանցման ընթացքում փոփոխություններ են առաջանում։'
        }
      },
      {
        id: 'q9',
        number: 9,
        blockId: 'bloque-3',
        tags: ['literatura popular', 'escritura'],
        prompt: {
          es: 'Si esa canción se recoge en un libro, ¿deja de ser popular? Explica.',
          hy: 'Եթե այդ երգը գրի առնվի գրքում, այն կդադարի՞ ժողովրդական լինել։ Բացատրի՛ր։'
        },
        answer: {
          es: 'No. Su origen y su tradición siguen siendo populares. Recogerla por escrito ayuda a conservarla.',
          hy: 'Ո՛չ։ Դրա ծագումն ու ավանդույթը շարունակում են ժողովրդական մնալ։ Գրի առնելն օգնում է պահպանել այն։'
        }
      },
      {
        id: 'q10',
        number: 10,
        blockId: 'bloque-3',
        tags: ['estribillo', 'ritmo'],
        prompt: {
          es: '¿Qué es un estribillo y para qué sirve?',
          hy: 'Ի՞նչ է կրկներգը, և ինչի՞ համար է այն օգտագործվում։'
        },
        answer: {
          es: 'Es un verso o grupo de versos que se repite en una canción o poema. Aporta ritmo y facilita que se recuerde y se cante.',
          hy: 'Կրկներգը երգի կամ բանաստեղծության մեջ կրկնվող տողն է կամ տողերի խումբը։ Այն ռիթմ է հաղորդում և հեշտացնում հիշելն ու երգելը։'
        }
      },
      {
        id: 'q11',
        number: 11,
        blockId: 'bloque-3',
        tags: ['literatura culta', 'autor'],
        prompt: {
          es: 'Una escritora publica una novela firmada después de revisar varias veces el lenguaje. ¿Es literatura popular o culta?',
          hy: 'Գրողը լեզուն բազմիցս մշակելուց հետո իր անունով վեպ է հրատարակում։ Սա ժողովրդակա՞ն, թե՞ հեղինակային գրականություն է։'
        },
        answer: {
          es: 'Es literatura culta: tiene una autora conocida y se ha elaborado por escrito. «Culta» no significa que sea mejor que la popular.',
          hy: 'Սա հեղինակային գրականություն է․ ունի հայտնի հեղինակ և ստեղծվել է գրավոր։ «Culta» բառը չի նշանակում, որ այն ժողովրդական գրականությունից ավելի լավն է։'
        }
      }
    ]
  },

  // ==========================================
  // PARTE 1 - BLOQUE 4
  // ==========================================
  {
    id: 'bloque-4',
    part: 1,
    number: 'BLOQUE 4 / ՄԱՍ 4',
    title: {
      es: 'ROMANCE, LEYENDA, MITO Y CUENTO',
      hy: 'ՌՈՄԱՆՍ, ԱՎԱՆԴԱԶՐՈՒՅՑ, ԱՌԱՍՊԵԼ ԵՎ ՊԱՏՄՎԱԾՔ'
    },
    intro: {
      es: 'Diferenciación de subgéneros narrativos y la forma métrica del romance: versos octosílabos, rima asonante en versos pares y versos sueltos en impares.',
      hy: 'Պատմողական ենթաժանրերի տարբերակում և ռոմանսի չափական կառուցվածք․ ութվանկ տողեր, ձայնավորային հանգ զույգ տողերում և անհանգ կենտ տողեր։'
    },
    questions: [
      {
        id: 'q12',
        number: 12,
        blockId: 'bloque-4',
        tags: ['mito', 'leyenda', 'cuento'],
        prompt: {
          es: 'Identifica cada tipo de relato y justifica tu elección.',
          hy: 'Որոշի՛ր յուրաքանչյուր պատմության տեսակը և հիմնավորի՛ր ընտրությունդ։'
        },
        subQuestions: [
          {
            id: 'q12a',
            key: 'A.',
            prompt: {
              es: 'Un relato tradicional cuenta que una diosa creó las estrellas para iluminar el camino de los seres humanos.',
              hy: 'Ավանդական պատմությունը պատմում է, որ մի աստվածուհի ստեղծել է աստղերը՝ մարդկանց ճանապարհը լուսավորելու համար։'
            },
            answer: {
              es: 'Mito: Interviene una diosa y se explica el origen de un elemento del mundo: las estrellas.',
              hy: 'Առասպել (Mito)․ Գործում է աստվածուհի, և բացատրվում է աշխարհի մի տարրի՝ աստղերի ծագումը։'
            }
          },
          {
            id: 'q12b',
            key: 'B.',
            prompt: {
              es: 'En un castillo real de la región, según la tradición, aparece cada noche el fantasma de una antigua reina.',
              hy: 'Ըստ ավանդության՝ շրջանի իրական ամրոցներից մեկում ամեն գիշեր հայտնվում է մի հին թագուհու ուրվականը։'
            },
            answer: {
              es: 'Leyenda: Se relaciona con un lugar real e incorpora un elemento fantástico: el fantasma.',
              hy: 'Ավանդազրույց (Leyenda)․ Կապված է իրական վայրի հետ և ներառում է երևակայական տարր՝ ուրվական։'
            }
          },
          {
            id: 'q12c',
            key: 'C.',
            prompt: {
              es: 'Un relato breve cuenta cómo un niño pierde una llave y la encuentra gracias a su perro. Tiene pocos personajes.',
              hy: 'Կարճ պատմությունը ներկայացնում է, թե ինչպես է տղան կորցնում բանալին և շան օգնությամբ գտնում այն։ Կերպարները քիչ են։'
            },
            answer: {
              es: 'Cuento: Es una narración breve, con pocos personajes y un argumento sencillo.',
              hy: 'Պատմվածք (Cuento)․ Կարճ պատմողական ստեղծագործություն է՝ քիչ կերպարներով և պարզ սյուժեով։'
            }
          }
        ],
        answer: {
          es: 'A. Mito (origen del mundo con seres divinos) | B. Leyenda (lugar real + elemento fantástico) | C. Cuento (breve, argumento cotidiano/sencillo)',
          hy: 'A. Առասպել (աստվածներ, աշխարհի ծագում) | B. Ավանդազրույց (իրական վայր + երևակայական տարր) | C. Պատմվածք (կարճ, քիչ կերպարներ, պարզ սյուժե)'
        }
      },
      {
        id: 'q13',
        number: 13,
        blockId: 'bloque-4',
        tags: ['romance', 'octosílabos', 'rima asonante'],
        prompt: {
          es: 'Explica qué es un romance. ¿Tiene que tratar de amor?',
          hy: 'Բացատրի՛ր՝ ինչ է ռոմանսը։ Այն պարտադի՞ր պետք է սիրո մասին լինի։'
        },
        answer: {
          es: 'Es un poema de un número indeterminado de versos octosílabos, con rima asonante en los versos pares y versos impares sin rima. No tiene que tratar de amor: puede contar aventuras, hechos históricos u otras historias.',
          hy: 'Ռոմանսը ութվանկ տողերով բանաստեղծություն է, որի տողերի քանակը նախապես սահմանված չէ։ Զույգ տողերն ունեն ձայնավորային հանգ, իսկ կենտերը չեն հանգավորվում։ Այն պարտադիր սիրո մասին չէ․ կարող է պատմել արկածների, պատմական դեպքերի կամ այլ իրադարձությունների մասին։'
        }
      },
      {
        id: 'q14',
        number: 14,
        blockId: 'bloque-4',
        tags: ['esquema métrico', 'romance', 'versos sueltos'],
        prompt: {
          es: 'Explica este esquema: 8– / 8a / 8– / 8a.',
          hy: 'Բացատրի՛ր այս սխեման՝ 8– / 8a / 8– / 8a։'
        },
        answer: {
          es: '• 8: cada verso tiene ocho sílabas métricas.\n• –: el verso no participa en la rima (verso suelto).\n• a: los versos marcados con esa letra comparten la rima asonante.\n• En el romance riman los versos 2, 4, 6, 8… de forma asonante.',
          hy: '• 8․ յուրաքանչյուր տողն ունի ութ բանաստեղծական վանկ։\n• –․ տվյալ տողը չի մասնակցում հանգավորմանը (անհանգ տող՝ verso suelto)։\n• a․ նույն տառով նշված տողերը հանգավորվում են ձայնավորային հանգով։\n• Ռոմանսում ձայնավորային հանգ ունեն 2-րդ, 4-րդ, 6-րդ, 8-րդ… տողերը։'
        },
        notes: [
          {
            es: 'Los versos impares se llaman versos sueltos: mantienen la medida de ocho sílabas aunque no rimen.',
            hy: 'Կենտ տողերը կոչվում են versos sueltos․ թեև չեն հանգավորվում, պահպանում են ութվանկ չափը։'
          }
        ]
      },
      {
        id: 'q15',
        number: 15,
        blockId: 'bloque-4',
        tags: ['sílabas métricas', 'sinalefa', 'rima consonante', 'rima asonante'],
        prompt: {
          es: 'Cuenta las sílabas y estudia la rima de este fragmento creado para practicar.',
          hy: 'Հաշվի՛ր վանկերը և ուսումնասիրի՛ր այս ուսումնական հատվածի հանգավորումը։'
        },
        contextText: {
          es: 'Por el camino del monte,\ncamina Pedro sin prisa;\nlleva pan para su hermano,\nbajo la luz de la brisa.',
          hy: 'Լեռնային ճանապարհով\nՊեդրոն քայլում է առանց շտապելու,\nեղբոր համար հաց է տանում՝\nմեղմ քամու լույսի ներքո։'
        },
        answer: {
          es: '1. Por / el / ca / mi / no / del / mon / te → 8–\n2. ca / mi / na / Pe / dro / sin / pri / sa → 8a\n3. lle / va / pan / pa / ra / su_her / ma / no → 9, pero «su_her» forma sinalefa → 8–\n4. ba / jo / la / luz / de / la / bri / sa → 8a',
          hy: '1. Por / el / ca / mi / no / del / mon / te → 8–\n2. ca / mi / na / Pe / dro / sin / pri / sa → 8a\n3. lle / va / pan / pa / ra / su_her / ma / no → 9, բայց «su_her» միավորվում է սինալեֆայով → 8–\n4. ba / jo / la / luz / de / la / bri / sa → 8a'
        },
        notes: [
          {
            es: '«Prisa» y «brisa» comparten vocales y consonantes desde la vocal tónica: tienen rima consonante. Por eso, aunque todos los versos son octosílabos, este ejemplo no reproduce exactamente la rima asonante propia del romance.',
            hy: '«Prisa» և «brisa» բառերում շեշտված ձայնավորից սկսած համընկնում են և՛ ձայնավորները, և՛ բաղաձայնները․ սա լրիվ (բաղաձայնական) հանգ է։ Հետևաբար, թեև բոլոր տողերն ութվանկ են, այս օրինակը ճշգրտորեն չի համապատասխանում ռոմանսի ձայնավորային հանգին։'
          },
          {
            es: 'Una pareja como «brisa / vida» sí tiene rima asonante: coinciden las vocales i–a, pero cambian las consonantes.',
            hy: 'Իսկ «brisa / vida» զույգն ունի ձայնավորային հանգ (rima asonante)․ համընկնում են i–a ձայնավորները, բայց բաղաձայնները տարբեր են։'
          }
        ]
      }
    ]
  },

  // ==========================================
  // PARTE 1 - BLOQUE 5
  // ==========================================
  {
    id: 'bloque-5',
    part: 1,
    number: 'BLOQUE 5 / ՄԱՍ 5',
    title: {
      es: 'LAS FIGURAS LITERARIAS',
      hy: 'ՊԱՏԿԵՐԱՎՈՐՄԱՆ ԵՎ ԱՐՏԱՀԱՅՏՉԱԿԱՆ ՄԻՋՈՑՆԵՐ'
    },
    intro: {
      es: 'Para reconocer una figura, observa qué cambia: el sonido (nivel fónico), la organización de las palabras (nivel morfosintáctico) o el significado (nivel semántico).',
      hy: 'Միջոցը ճանաչելու համար ուշադրություն դարձրու՝ ինչի վրա է այն հիմնված՝ հնչողության (հնչյունական մակարդակ), բառերի դասավորության (ձևաբանական-շարահյուսական մակարդակ), թե իմաստի (իմաստային մակարդակ)։'
    },
    questions: [
      {
        id: 'q16',
        number: 16,
        blockId: 'bloque-5',
        tags: ['aliteración', 'nivel fónico'],
        prompt: {
          es: 'Identifica la figura y explica qué se repite: «Sus suaves susurros sonaban».',
          hy: 'Որոշի՛ր միջոցը և բացատրի՛ր՝ ինչ է կրկնվում․ «Նրա մեղմ շշուկները հնչում էին»։'
        },
        answer: {
          es: 'Aliteración, nivel fónico. Se repite especialmente el sonido «s», que sugiere un susurro.',
          hy: 'Հնչյունների կրկնություն՝ aliteración, հնչյունական մակարդակ։ Հատկապես կրկնվում է «s» հնչյունը՝ շշուկի տպավորություն ստեղծելով։'
        }
      },
      {
        id: 'q17',
        number: 17,
        blockId: 'bloque-5',
        tags: ['onomatopeya', 'nivel fónico'],
        prompt: {
          es: 'Analiza: «Tic-tac, tic-tac: el reloj rompía el silencio».',
          hy: 'Վերլուծի՛ր․ «Տիկ-տակ, տիկ-տակ․ ժամացույցը խախտում էր լռությունը»։'
        },
        answer: {
          es: '«Tic-tac» es una onomatopeya porque imita el sonido del reloj. Pertenece al nivel fónico.',
          hy: '«Tic-tac»-ը ձայնի նմանակում՝ onomatopeya է, քանի որ նմանակում է ժամացույցի ձայնը։ Պատկանում է հնչյունական մակարդակին։'
        }
      },
      {
        id: 'q18',
        number: 18,
        blockId: 'bloque-5',
        tags: ['paronomasia', 'nivel fónico'],
        prompt: {
          es: 'Explica la figura de «Entre casado y cansado hay una letra de diferencia».',
          hy: 'Բացատրի՛ր միջոցը․ «Ամուսնացածի և հոգնածի միջև մեկ տառի տարբերություն կա»։'
        },
        answer: {
          es: 'Paronomasia. «Casado» y «cansado» tienen sonidos parecidos, pero significados distintos. Es del nivel fónico.',
          hy: 'Նմանահունչ բառերի խաղ՝ paronomasia։ «Casado» (ամուսնացած) և «cansado» (հոգնած) նման են հնչում, բայց տարբեր իմաստներ ունեն։ Հնչյունական մակարդակ է։'
        }
      },
      {
        id: 'q19',
        number: 19,
        blockId: 'bloque-5',
        tags: ['anáfora', 'epanadiplosis'],
        prompt: {
          es: 'Compara los ejemplos. ¿Cuál contiene anáfora y cuál epanadiplosis?',
          hy: 'Համեմատի՛ր օրինակները։ Ո՞րում է անաֆորա, իսկ որո՞ւմ՝ էպանադիպլոսիս։'
        },
        options: [
          {
            key: 'A',
            es: '«Quiero verte. / Quiero hablarte. / Quiero escucharte».',
            hy: '«Ուզում եմ քեզ տեսնել։ / Ուզում եմ քեզ հետ խոսել։ / Ուզում եմ քեզ լսել»։'
          },
          {
            key: 'B',
            es: '«Verde que te quiero verde».',
            hy: '«Կանաչ, ինչքան եմ քեզ սիրում կանաչ»։'
          }
        ],
        answer: {
          es: 'A contiene anáfora: «quiero» se repite al principio de varias frases. B contiene epanadiplosis: «verde» aparece al principio y al final del mismo verso.',
          hy: 'A-ում անաֆորա է․ «quiero» բառը կրկնվում է մի քանի նախադասությունների սկզբում։ B-ում էպանադիպլոսիս է․ «verde» բառը կրկնվում է նույն տողի սկզբում և վերջում։'
        },
        notes: [
          {
            es: 'En tus apuntes la epanadiplosis está en el nivel fónico; aquí seguimos esa clasificación. También es frecuente clasificarla entre las figuras morfosintácticas de repetición.',
            hy: 'Քո տետրում էպանադիպլոսիսը հնչյունական մակարդակում է, և այստեղ հետևում ենք այդ դասակարգմանը։ Այն նաև հաճախ դասվում է ձևաբանական-շարահյուսական կրկնության միջոցների շարքին։'
          }
        ]
      },
      {
        id: 'q20',
        number: 20,
        blockId: 'bloque-5',
        tags: ['hipérbaton', 'nivel morfosintáctico'],
        prompt: {
          es: 'Identifica la figura y devuelve la oración al orden habitual: «De tu jardín las flores recogí».',
          hy: 'Որոշի՛ր միջոցը և վերականգնի՛ր բառերի սովորական դասավորությունը․ «Քո այգու ծաղիկները հավաքեցի»։'
        },
        answer: {
          es: 'Hipérbaton, nivel morfosintáctico. El orden habitual sería: «Recogí las flores de tu jardín». Se altera el orden de las palabras.',
          hy: 'Շրջադասություն՝ hipérbaton, ձևաբանական-շարահյուսական մակարդակ։ Սովորական տարբերակը կլինի՝ «Recogí las flores de tu jardín» (Հավաքեցի քո այգու ծաղիկները)։ Փոխված է բառերի սովորական դասավորությունը։'
        }
      },
      {
        id: 'q21',
        number: 21,
        blockId: 'bloque-5',
        tags: ['asíndeton', 'polisíndeton', 'nivel morfosintáctico'],
        prompt: {
          es: 'Compara las dos frases y explica la diferencia.',
          hy: 'Համեմատի՛ր երկու նախադասությունները և բացատրի՛ր տարբերությունը։'
        },
        options: [
          {
            key: 'A',
            es: '«Corre, salta, ríe, canta».',
            hy: '«Վազում է, ցատկում, ծիծաղում, երգում»։'
          },
          {
            key: 'B',
            es: '«Y corre y salta y ríe y canta».',
            hy: '«Եվ վազում է, և ցատկում, և ծիծաղում, և երգում»։'
          }
        ],
        answer: {
          es: 'A presenta asíndeton: se omiten las conjunciones. B presenta polisíndeton: se repite la conjunción «y». Ambas pertenecen al nivel morfosintáctico.',
          hy: 'A-ում անշաղկապություն՝ asíndeton է․ շաղկապները բաց են թողնված։ B-ում բազմաշաղկապություն՝ polisíndeton է․ կրկնվում է «y» («և») շաղկապը։ Երկուսն էլ ձևաբանական-շարահյուսական մակարդակից են։'
        }
      },
      {
        id: 'q22',
        number: 22,
        blockId: 'bloque-5',
        tags: ['enumeración', 'asíndeton'],
        prompt: {
          es: '¿Puede una enumeración aparecer junto con otra figura? Analiza: «Compró pan, leche, fruta, queso».',
          hy: 'Կարո՞ղ է թվարկումը միաժամանակ հանդիպել մեկ այլ միջոցի հետ։ Վերլուծի՛ր․ «Գնեց հաց, կաթ, միրգ, պանիր»։'
        },
        answer: {
          es: 'Sí. Hay enumeración porque se presenta una lista de alimentos. También hay asíndeton porque se omite la conjunción antes del último elemento.',
          hy: 'Այո՛։ Կա թվարկում (enumeración), քանի որ ներկայացվում է մթերքների ցանկ։ Կա նաև անշաղկապություն (asíndeton), որովհետև վերջին անդամից առաջ շաղկապը բաց է թողնված։'
        }
      },
      {
        id: 'q23',
        number: 23,
        blockId: 'bloque-5',
        tags: ['pleonasmo', 'nivel morfosintáctico'],
        prompt: {
          es: 'Explica el pleonasmo de «Lo vi con mis propios ojos».',
          hy: 'Բացատրի՛ր «Ես դա տեսա իմ սեփական աչքերով» նախադասության պլեոնազմը։'
        },
        answer: {
          es: '«Con mis propios ojos» no es necesario para entender «lo vi», pero refuerza que la persona fue testigo directo. Es un pleonasmo, del nivel morfosintáctico.',
          hy: '«Իմ սեփական աչքերով» արտահայտությունը անհրաժեշտ չէ «տեսա» բառը հասկանալու համար, բայց ընդգծում է, որ մարդն անձամբ է ականատես եղել։ Սա իմաստային ավելադրություն՝ pleonasmo է՝ ձևաբանական-շարահյուսական մակարդակից։'
        }
      },
      {
        id: 'q24',
        number: 24,
        blockId: 'bloque-5',
        tags: ['metáfora', 'nivel semántico'],
        prompt: {
          es: 'Analiza la metáfora: «Tus dientes son perlas». Identifica A, B y su semejanza.',
          hy: 'Վերլուծի՛ր փոխաբերությունը․ «Քո ատամները մարգարիտներ են»։ Գտի՛ր A-ն, B-ն և նմանությունը։'
        },
        answer: {
          es: '• A, elemento real: los dientes.\n• B, elemento figurado: las perlas.\n• Semejanza: la blancura y el brillo.\n• Forma: A es B.\n• Nivel: semántico.',
          hy: '• A՝ իրական տարր․ ատամները։\n• B՝ փոխաբերական պատկեր․ մարգարիտները։\n• Նմանություն․ սպիտակությունը և փայլը։\n• Ձև․ A-ն B է։\n• Մակարդակ․ իմաստային (semántico)։'
        }
      },
      {
        id: 'q25',
        number: 25,
        blockId: 'bloque-5',
        tags: ['formas de metáfora'],
        prompt: {
          es: 'Identifica la forma de estas metáforas.',
          hy: 'Որոշի՛ր այս փոխաբերությունների ձևը։'
        },
        subQuestions: [
          {
            id: 'q25a',
            key: 'a)',
            prompt: {
              es: '«Tu cabello es oro».',
              hy: '«Քո մազերը ոսկի են»։'
            },
            answer: {
              es: 'A es B: cabello = A; oro = B.',
              hy: 'A-ն B է․ մազերը՝ A, ոսկին՝ B։'
            }
          },
          {
            id: 'q25b',
            key: 'b)',
            prompt: {
              es: '«El oro brillaba sobre sus hombros», referido al cabello.',
              hy: '«Ոսկին փայլում էր նրա ուսերին»՝ նկատի ունենալով մազերը։'
            },
            answer: {
              es: 'Solo B: se menciona «oro», pero el elemento real, el cabello, queda implícito.',
              hy: 'Միայն B․ նշված է ոսկին, իսկ իրական տարրը՝ մազերը, ուղղակիորեն չի ասվում (թաքնված է)։'
            }
          },
          {
            id: 'q25c',
            key: 'c)',
            prompt: {
              es: '«El fuego de su pasión».',
              hy: '«Նրա կրքի կրակը»։'
            },
            answer: {
              es: 'B de A: fuego = B; pasión = A.',
              hy: 'B de A․ կրակը՝ B, կիրքը՝ A։'
            }
          }
        ],
        answer: {
          es: 'a) A es B (cabello = oro) | b) Solo B (el oro = el cabello implícito) | c) B de A (el fuego de su pasión)',
          hy: 'a) A-ն B է (մազերը = ոսկի) | b) Միայն B (ոսկին՝ մազերի փոխարեն) | c) B de A (կրքի կրակը)'
        }
      }
    ]
  },

  // ==========================================
  // PARTE 1 - BLOQUE 6
  // ==========================================
  {
    id: 'bloque-6',
    part: 1,
    number: 'BLOQUE 6 / ՄԱՍ 6',
    title: {
      es: 'ANÁLISIS COMPLETO DE UN TEXTO',
      hy: 'ՏԵՔՍՏԻ ԱՄԲՈՂՋԱԿԱՆ ՎԵՐԼՈՒԾՈՒԹՅՈՒՆ'
    },
    intro: {
      es: 'Lee este texto creado para el ejercicio:\n«Quiero guardar tu sonrisa,\nquiero guardar tu mirada.\nTus ojos son dos luceros\nque iluminan mi mañana.\nY te busco y te recuerdo\ny te espero en la ventana».',
      hy: 'Կարդա՛ առաջադրանքի համար ստեղծված այս տեքստը․\n«Ուզում եմ պահել քո ժպիտը,\nուզում եմ պահել քո հայացքը։\nՔո աչքերը երկու պայծառ աստղեր են,\nոր լուսավորում են իմ առավոտը։\nԵվ քեզ փնտրում եմ, և քեզ հիշում,\nև քեզ սպասում պատուհանի մոտ»։'
    },
    questions: [
      {
        id: 'q26',
        number: 26,
        blockId: 'bloque-6',
        tags: ['género lírico'],
        prompt: {
          es: '¿A qué género pertenece? Justifica con el contenido.',
          hy: 'Ո՞ր գրական սեռին է պատկանում։ Հիմնավորի՛ր բովանդակությամբ։'
        },
        answer: {
          es: 'Pertenece a la lírica porque expresa afecto, deseo de conservar el recuerdo y espera de una persona.',
          hy: 'Պատկանում է քնարերգությանը, որովհետև արտահայտում է ջերմ զգացմունք, հիշողությունը պահելու ցանկություն և մեկին սպասելու ապրում։'
        }
      },
      {
        id: 'q27',
        number: 27,
        blockId: 'bloque-6',
        tags: ['anáfora'],
        prompt: {
          es: 'Localiza una anáfora y explica su efecto.',
          hy: 'Գտի՛ր անաֆորա և բացատրի՛ր դրա ազդեցությունը։'
        },
        answer: {
          es: '«Quiero guardar» se repite al comienzo de los dos primeros versos. Destaca el deseo de conservar el recuerdo de esa persona.',
          hy: '«Quiero guardar» արտահայտությունը կրկնվում է առաջին երկու տողերի սկզբում։ Այն ընդգծում է այդ մարդու հիշողությունը պահպանելու ցանկությունը։'
        }
      },
      {
        id: 'q28',
        number: 28,
        blockId: 'bloque-6',
        tags: ['metáfora'],
        prompt: {
          es: 'Localiza una metáfora e identifica sus elementos.',
          hy: 'Գտի՛ր փոխաբերություն և որոշի՛ր դրա տարրերը։'
        },
        answer: {
          es: '«Tus ojos son dos luceros». A = ojos; B = luceros. La semejanza está en el brillo y en la luz que simbólicamente aportan.',
          hy: '«Tus ojos son dos luceros» (Քո աչքերը երկու պայծառ աստղեր են)։ A = աչքեր, B = աստղեր/լուսատուներ։ Նմանությունը փայլն է և նրանց խորհրդանշական լույսը։'
        }
      },
      {
        id: 'q29',
        number: 29,
        blockId: 'bloque-6',
        tags: ['polisíndeton'],
        prompt: {
          es: '¿Qué figura aparece en «Y te busco y te recuerdo y te espero»? ¿Qué aporta?',
          hy: 'Ի՞նչ միջոց կա «Եվ քեզ փնտրում եմ, և քեզ հիշում, և քեզ սպասում» հատվածում։ Ի՞նչ է հաղորդում այն։'
        },
        answer: {
          es: 'Hay polisíndeton por la repetición de «y». Insiste en la acumulación de acciones y sentimientos.',
          hy: 'Կա բազմաշաղկապություն (polisíndeton)՝ «y» («և») շաղկապի կրկնություն։ Այն ընդգծում է գործողությունների ու զգացմունքների կուտակումը։'
        }
      }
    ]
  },

  // ==========================================
  // PARTE 1 - BLOQUE 7
  // ==========================================
  {
    id: 'bloque-7',
    part: 1,
    number: 'BLOQUE 7 / ՄԱՍ 7',
    title: {
      es: 'CREA Y EXPLICA',
      hy: 'ՍՏԵՂԾԻ՛Ր ԵՎ ԲԱՑԱՏՐԻ՛Ր'
    },
    intro: {
      es: 'Actividades de producción y método de respuesta de examen: Nombre de la figura + ejemplo del texto + explicación + efecto.',
      hy: 'Ստեղծագործական առաջադրանքներ և քննական պատասխանի բանաձև․ Միջոցի անունը + օրինակ տեքստից + բացատրություն + ազդեցություն։'
    },
    questions: [
      {
        id: 'q30',
        number: 30,
        blockId: 'bloque-7',
        tags: ['producción', 'onomatopeya', 'anáfora', 'metáfora'],
        prompt: {
          es: 'Escribe tres ejemplos propios: una onomatopeya, una anáfora y una metáfora. Explica cada uno.',
          hy: 'Գրի՛ր քո սեփական երեք օրինակները՝ ձայնի նմանակում, անաֆորա և փոխաբերություն։ Բացատրի՛ր յուրաքանչյուրը։'
        },
        answer: {
          es: '• Onomatopeya: «Toc, toc. Alguien llamó a la puerta». Imita los golpes en la puerta.\n• Anáfora: «Aquí te espero. / Aquí te recuerdo». «Aquí» se repite al principio de las dos frases.\n• Metáfora: «Tu voz es música». La voz se identifica con la música por resultar agradable. A = voz; B = música.',
          hy: '• Onomatopeya (ձայնի նմանակում)․ «Toc, toc. Alguien llamó a la puerta» («Թակ-թակ։ Ինչ-որ մեկը թակեց դուռը»)․ «Toc, toc»-ը նմանակում է դռան թակոցը։\n• Anáfora (անաֆորա)․ «Aquí te espero. / Aquí te recuerdo» («Այստեղ քեզ սպասում եմ։ / Այստեղ քեզ հիշում եմ»)․ «Aquí» բառը կրկնվում է երկու նախադասությունների սկզբում։\n• Metáfora (փոխաբերություն)․ «Tu voz es música» («Քո ձայնը երաժշտություն է»)․ Ձայնը նույնացվում է երաժշտության հետ, քանի որ հաճելի է։ A = ձայն, B = երաժշտություն։'
        }
      },
      {
        id: 'q31',
        number: 31,
        blockId: 'bloque-7',
        tags: ['teatro', 'acotación', 'diálogo'],
        prompt: {
          es: 'Convierte esta narración en un pequeño diálogo teatral con una acotación: «Pablo encontró una caja. Llamó a su hermana y le preguntó si quería abrirla con él».',
          hy: 'Այս պատմողական հատվածը վերածի՛ր կարճ դրամատիկական երկխոսության՝ ավելացնելով բեմական ցուցում․ «Պաբլոն մի տուփ գտավ։ Նա կանչեց քրոջը և հարցրեց՝ արդյոք ուզում է միասին բացել այն»։'
        },
        contextText: {
          es: 'PABLO: ¡Mira lo que he encontrado!\nANA: ¿Qué hay dentro?\nPABLO: No lo sé. ¿La abrimos juntos?\n(Ana se acerca y levanta la tapa con cuidado.)',
          hy: 'ՊԱԲԼՈ․ Տե՛ս՝ ինչ եմ գտել։\nԱՆԱ․ Ի՞նչ կա ներսում։\nՊԱԲԼՈ․ Չգիտեմ։ Միասի՞ն բացենք։\n(Անան մոտենում է և զգուշորեն բարձրացնում կափարիչը։)'
        },
        answer: {
          es: 'La narración se ha transformado en palabras de los personajes y una indicación escénica (acotación).',
          hy: 'Պատմողի խոսքը վերածվել է կերպարների խոսքի և բեմական ցուցման (ռեմարկ)։'
        }
      },
      {
        id: 'q32',
        number: 32,
        blockId: 'bloque-7',
        tags: ['fórmula de examen', 'metodología'],
        prompt: {
          es: 'Responde como en un examen: «¿Cómo reconoces una figura literaria?». Usa un ejemplo y justifica.',
          hy: 'Պատասխանի՛ր այնպես, ինչպես քննության ժամանակ․ «Ինչպե՞ս ես ճանաչում պատկերավորման կամ արտահայտչական միջոցը»։ Բե՛ր օրինակ և հիմնավորի՛ր։'
        },
        answer: {
          es: '«En “Y ríe y canta y baila” aparece un polisíndeton, del nivel morfosintáctico, porque se repite la conjunción “y” delante de los elementos. Esa repetición destaca cada acción».',
          hy: '«“Եվ ծիծաղում է, և երգում, և պարում” նախադասության մեջ կա բազմաշաղկապություն՝ ձևաբանական-շարահյուսական մակարդակից, որովհետև անդամներից առաջ կրկնվում է “և” շաղկապը։ Այդ կրկնությունն ընդգծում է յուրաքանչյուր գործողությունը»։'
        },
        notes: [
          {
            es: 'Fórmula para responder bien: Nombre de la figura + ejemplo del texto + explicación + efecto.',
            hy: 'Լավ պատասխանի կառուցվածք․ Միջոցի անունը + օրինակ տեքստից + բացատրություն + ազդեցություն։'
          }
        ]
      }
    ]
  },

  // ==========================================
  // PARTE 2 - EXAMEN DE PRÁCTICA
  // ==========================================
  {
    id: 'parte-2-ex',
    part: 2,
    number: 'PARTE 2 / ՄԱՍ 2',
    title: {
      es: 'EXAMEN DE PRÁCTICA (14 EJERCICIOS)',
      hy: 'ՓՈՐՁՆԱԿԱՆ ՔՆՆՈՒԹՅՈՒՆ (14 ԱՌԱՋԱԴՐԱՆՔ)'
    },
    intro: {
      es: 'Esta vez vamos a comparar textos, corregir errores y justificar las respuestas. No basta con nombrar una figura: hay que señalar dónde aparece y explicar cómo funciona.',
      hy: 'Այս անգամ համեմատելու ենք տեքստեր, ուղղելու սխալները և հիմնավորելու պատասխանները։ Միայն միջոցի անունն ասելը բավարար չէ․ պետք է ցույց տալ, թե որտեղ է այն և ինչպես է գործում։'
    },
    questions: [
      {
        id: 'p2-q1',
        number: 'P2-1',
        blockId: 'parte-2-ex',
        tags: ['tres géneros', 'comparación'],
        title: {
          es: '1. UN MISMO TEMA, TRES GÉNEROS',
          hy: '1. ՆՈՒՅՆ ԹԵՄԱՆ՝ ԵՐԵՔ ԳՐԱԿԱՆ ՍԵՌՈՎ'
        },
        prompt: {
          es: 'Lee estos textos sobre una despedida y responde a las preguntas.',
          hy: 'Կարդա՛ հրաժեշտի մասին այս տեքստերը և պատասխանի՛ր հարցերին։'
        },
        contextText: {
          es: 'Texto A:\nDesde que te fuiste,\nla casa parece más grande\ny mi alegría más pequeña.\n\nTexto B:\nCuando llegó el tren, Elena abrazó a su hermano. Él subió al vagón y buscó un asiento junto a la ventana. Elena permaneció en el andén hasta que el tren desapareció.\n\nTexto C:\nELENA: ¿Cuándo volverás?\nDAVID: Antes de que termine el verano.\n(Elena lo abraza. Se oye el silbato del tren.)',
          hy: 'Տեքստ A․\nՔո գնալուց հետո\nտունն ավելի մեծ է թվում,\nիսկ իմ ուրախությունը՝ ավելի փոքր։\n\nՏեքստ B․\nԵրբ գնացքը հասավ, Ելենան գրկեց եղբորը։ Նա բարձրացավ վագոն և պատուհանի մոտ տեղ գտավ։ Ելենան մնաց կառամատույցում, մինչև գնացքը անհետացավ։\n\nՏեքստ C․\nԵԼԵՆԱ․ Ե՞րբ կվերադառնաս։\nԴԱՎԻԴ․ Մինչև ամառվա վերջը։\n(Ելենան գրկում է նրան։ Լսվում է գնացքի սուլոցը։)'
        },
        subQuestions: [
          {
            id: 'p2-q1a',
            key: 'a)',
            prompt: {
              es: 'Identifica el género de cada texto.',
              hy: 'Որոշի՛ր յուրաքանչյուր տեքստի գրական սեռը։'
            },
            answer: {
              es: 'A es lírico; B es narrativo; C es teatral.',
              hy: 'A-ն քնարական է, B-ն՝ պատմողական, C-ն՝ դրամատիկական։'
            }
          },
          {
            id: 'p2-q1b',
            key: 'b)',
            prompt: {
              es: '¿Qué expresa principalmente el texto A?',
              hy: 'Ի՞նչ է հիմնականում արտահայտում A տեքստը։'
            },
            answer: {
              es: 'Expresa tristeza y soledad después de una despedida.',
              hy: 'Արտահայտում է հրաժեշտից հետո առաջացած տխրությունն ու միայնությունը։'
            }
          },
          {
            id: 'p2-q1c',
            key: 'c)',
            prompt: {
              es: '¿Quién cuenta lo que sucede en el texto B?',
              hy: 'Ո՞վ է պատմում B տեքստի իրադարձությունները։'
            },
            answer: {
              es: 'Un narrador en tercera persona cuenta las acciones de Elena y su hermano.',
              hy: 'Երրորդ դեմքով պատմողը ներկայացնում է Ելենայի և նրա եղբոր գործողությունները։'
            }
          },
          {
            id: 'p2-q1d',
            key: 'd)',
            prompt: {
              es: '¿Qué información aporta la acotación del texto C?',
              hy: 'Ի՞նչ տեղեկություն է տալիս C տեքստի բեմական ցուցումը։'
            },
            answer: {
              es: 'Indica un gesto de los personajes y un efecto sonoro: el abrazo y el silbato.',
              hy: 'Ցույց է տալիս կերպարների շարժումը և ձայնային ազդեցությունը՝ գրկախառնությունն ու սուլոցը։'
            }
          }
        ],
        answer: {
          es: 'a) A lírico, B narrativo, C teatral. b) Tristeza y soledad. c) Narrador en 3.ª persona. d) Gesto (abrazo) y efecto sonoro (silbato).',
          hy: 'a) A քնարական, B պատմողական, C դրամատիկական։ b) Տխրություն և միայնություն։ c) Երրորդ դեմքով պատմող։ d) Շարժում (գրկախառնություն) և ձայն (սուլոց)։'
        },
        notes: [
          {
            es: 'Conclusión: Los tres textos tratan el mismo tema, pero lo presentan de maneras diferentes: sentimiento, relato y representación.',
            hy: 'Եզրակացություն․ Երեք տեքստերի թեման նույնն է, սակայն ներկայացման ձևերը տարբեր են՝ զգացմունքի արտահայտում, պատմություն և բեմական գործողություն։'
          }
        ]
      },
      {
        id: 'p2-q2',
        number: 'P2-2',
        blockId: 'parte-2-ex',
        tags: ['corrección', 'conceptos'],
        title: {
          es: '2. CORRIGE LAS AFIRMACIONES',
          hy: '2. ՈՒՂՂԻ՛Ր ՊՆԴՈՒՄՆԵՐԸ'
        },
        prompt: {
          es: 'No respondas solo «verdadero» o «falso»: corrige lo que sea incorrecto.',
          hy: 'Մի՛ պատասխանիր միայն «ճիշտ» կամ «սխալ»․ ուղղի՛ր սխալ մասը։'
        },
        subQuestions: [
          {
            id: 'p2-q2a',
            key: 'a)',
            prompt: {
              es: '«Todos los poemas pertenecen a la lírica».',
              hy: '«Բոլոր բանաստեղծությունները պատկանում են քնարերգությանը»։'
            },
            answer: {
              es: 'Es falso. Un poema también puede contar una historia. El verso es una forma de escritura; la lírica es un género.',
              hy: 'Սխալ է։ Չափածո ստեղծագործությունը կարող է նաև պատմություն պատմել։ Չափածոն գրելու ձև է, իսկ քնարերգությունը՝ գրական սեռ։'
            }
          },
          {
            id: 'p2-q2b',
            key: 'b)',
            prompt: {
              es: '«Una obra popular deja de ser popular cuando se escribe».',
              hy: '«Ժողովրդական ստեղծագործությունը դադարում է ժողովրդական լինել, երբ այն գրի են առնում»։'
            },
            answer: {
              es: 'Es falso. Escribirla permite conservarla, pero no cambia su origen popular.',
              hy: 'Սխալ է։ Գրի առնելը թույլ է տալիս պահպանել այն, բայց չի փոխում ժողովրդական ծագումը։'
            }
          },
          {
            id: 'p2-q2c',
            key: 'c)',
            prompt: {
              es: '«En el teatro solo importan las palabras».',
              hy: '«Թատրոնում կարևոր են միայն բառերը»։'
            },
            answer: {
              es: 'Es falso. También comunican los gestos, la música, el vestuario, el decorado y los objetos de atrezo.',
              hy: 'Սխալ է։ Տեղեկություն են փոխանցում նաև շարժումները, երաժշտությունը, հագուստը, բեմի ձևավորումն ու բեմական առարկաները։'
            }
          },
          {
            id: 'p2-q2d',
            key: 'd)',
            prompt: {
              es: '«El narrador siempre es el autor».',
              hy: '«Պատմողը միշտ հեղինակն է»։'
            },
            answer: {
              es: 'Es falso. El autor crea la obra; el narrador es la voz que cuenta la historia.',
              hy: 'Սխալ է։ Հեղինակը ստեղծում է գործը, իսկ պատմողը պատմությունը ներկայացնող ձայնն է։'
            }
          }
        ],
        answer: {
          es: 'Todas son falsas: verso ≠ género lírico; escribir no borra el origen popular; en teatro importan atrezo/gestos/música; autor ≠ narrador.',
          hy: 'Բոլորն էլ սխալ են․ չափածոն գրելաձև է, ոչ թե սեռ; գրառումը չի փոխում ծագումը; թատրոնում կարևոր են բեմական միջոցները; հեղինակը պատմողը չէ։'
        }
      },
      {
        id: 'p2-q3',
        number: 'P2-3',
        blockId: 'parte-2-ex',
        tags: ['narrador', 'punto de vista'],
        title: {
          es: '3. EL NARRADOR',
          hy: '3. ՊԱՏՄՈՂԸ'
        },
        prompt: {
          es: 'Lee los dos fragmentos y analiza la persona del narrador.',
          hy: 'Կարդա՛ երկու հատվածները և վերլուծի՛ր պատմողի դեմքը։'
        },
        contextText: {
          es: 'A. «Abrí la caja y encontré una fotografía que nunca había visto».\nB. «Andrés abrió la caja y encontró una fotografía que nunca había visto».',
          hy: 'A. «Բացեցի տուփը և գտա մի լուսանկար, որը երբեք չէի տեսել»։\nB. «Անդրեսը բացեց տուփը և գտավ մի լուսանկար, որը երբեք չէր տեսել»։'
        },
        subQuestions: [
          {
            id: 'p2-q3a',
            key: 'a)',
            prompt: {
              es: '¿En qué persona está narrado cada fragmento?',
              hy: 'Յուրաքանչյուր հատվածը ո՞ր դեմքով է պատմվում։'
            },
            answer: {
              es: 'A está en primera persona («yo»). B está en tercera persona («él»).',
              hy: 'A-ն առաջին դեմքով է («ես»), B-ն՝ երրորդ դեմքով («նա/Անդրեսը»)։'
            }
          },
          {
            id: 'p2-q3b',
            key: 'b)',
            prompt: {
              es: '¿En cuál participa el narrador en la historia?',
              hy: 'Ո՞ր հատվածում է պատմողը մասնակցում պատմությանը։'
            },
            answer: {
              es: 'En el fragmento A: el narrador es personaje y participa en los hechos.',
              hy: 'A հատվածում․ պատմողը մասնակցում է իրադարձություններին (հանդես է գալիս որպես գործող անձ)։'
            }
          },
          {
            id: 'p2-q3c',
            key: 'c)',
            prompt: {
              es: 'Señala las palabras que justifican tu respuesta.',
              hy: 'Նշի՛ր պատասխանդ հիմնավորող բառերը։'
            },
            answer: {
              es: 'En A: «abrí», «encontré», «había visto». En B: «Andrés abrió», «encontró».',
              hy: 'A-ում՝ «abrí» (բացեցի), «encontré» (գտա), «había visto» (չէի տեսել)։ B-ում՝ «Andrés abrió» (Անդրեսը բացեց), «encontró» (գտավ)։'
            }
          }
        ],
        answer: {
          es: 'A: 1.ª persona («abrí», «encontré», narrador participa). B: 3.ª persona («Andrés abrió», narrador externo).',
          hy: 'A՝ 1-ին դեմք («բացեցի», մասնակից պատմող)։ B՝ 3-րդ դեմք («Անդրեսը բացեց», դիտորդ պատմող)։'
        }
      },
      {
        id: 'p2-q4',
        number: 'P2-4',
        blockId: 'parte-2-ex',
        tags: ['teatro', 'elementos'],
        title: {
          es: '4. EL TEATRO Y SUS ELEMENTOS',
          hy: '4. ԹԱՏՐՈՆԸ ԵՎ ԴՐԱ ՏԱՐՐԵՐԸ'
        },
        prompt: {
          es: 'Relaciona cada elemento con su función en la representación teatral.',
          hy: 'Յուրաքանչյուր տարրը կապի՛ր իր դերի հետ բեմական ներկայացման մեջ։'
        },
        contextText: {
          es: '(Una habitación antigua. En el centro hay una mesa y una silla. Clara entra con una carta en la mano. Lleva un vestido negro.)\nCLARA: Esta carta llegó demasiado tarde.\nLUIS: Quizá todavía podamos hacer algo.\n(Se escucha una música suave.)',
          hy: '(Հին սենյակ։ Կենտրոնում սեղան և աթոռ կա։ Կլարան ներս է մտնում՝ ձեռքին նամակ։ Նա սև զգեստ է հագել։)\nԿԼԱՐԱ․ Այս նամակը չափազանց ուշ հասավ։\nԼՈՒԻՍ․ Գուցե դեռ կարողանանք ինչ-որ բան անել։\n(Լսվում է մեղմ երաժշտություն։)'
        },
        answer: {
          es: '• La habitación antigua → Decorado: representa el lugar de la acción.\n• La carta → Atrezo: objeto que utiliza un personaje.\n• El vestido negro → Vestuario: ropa del personaje.\n• La música suave → Recurso sonoro: contribuye al ambiente.\n• «Clara entra…» → Acotación: indicación para la representación.',
          hy: '• La habitación antigua (Հին սենյակը) → Decorado (Բեմի ձևավորում)․ ներկայացնում է գործողության վայրը։\n• La carta (Նամակը) → Atrezo (Բեմական առարկա)․ կերպարի օգտագործած առարկան։\n• El vestido negro (Սև զգեստը) → Vestuario (Բեմական հագուստ)․ կերպարի հագուստը։\n• La música suave (Մեղմ երաժշտությունը) → Recurso sonoro (Ձայնային միջոց)․ օգնում է մթնոլորտ ստեղծել։\n• «Clara entra…» («Կլարան ներս է մտնում…») → Acotación (Բեմական ցուցում/ռեմարկ)․ ներկայացման համար տրված հրահանգ։'
        },
        notes: [
          {
            es: 'Pregunta de reflexión: ¿Las acotaciones se dicen normalmente en voz alta como parte del diálogo? Respuesta: No. Orientan la representación: los actores realizan las acciones indicadas y el equipo prepara los efectos.',
            hy: 'Մտածելու հարց․ Բեմական ցուցումները սովորաբար բարձրաձայն ասվո՞ւմ են որպես երկխոսության մաս։ Պատասխան․ Ո՛չ։ Դրանք ուղղորդում են բեմադրությունը․ դերասանները կատարում են նշված գործողությունները, իսկ բեմադրող խումբն ապահովում է համապատասխան ազդեցությունները։'
          }
        ]
      },
      {
        id: 'p2-q5',
        number: 'P2-5',
        blockId: 'parte-2-ex',
        tags: ['mito', 'leyenda'],
        title: {
          es: '5. MITO O LEYENDA: JUSTIFICA',
          hy: '5. ԱՌԱՍՊԵ՞Լ, ԹԵ՞ ԱՎԱՆԴԱԶՐՈՒՅՑ'
        },
        prompt: {
          es: 'Clasifica los textos en mito o leyenda y justifica con sus rasgos distintivos.',
          hy: 'Դասակարգի՛ր տեքստերը՝ առասպել, թե ավանդազրույց, և հիմնավորի՛ր բնորոշ հատկանիշներով։'
        },
        contextText: {
          es: 'Texto A:\nSegún una antigua tradición, el dios del viento abrió una montaña con su aliento y así nació el primer valle.\n\nTexto B:\nLos habitantes del pueblo cuentan que, junto al puente medieval, aparece una mujer vestida de blanco que busca a su hijo.',
          hy: 'Տեքստ A․\nՀին ավանդության համաձայն՝ քամու աստվածն իր շնչով ճեղքեց լեռը, և այդպես առաջացավ առաջին հովիտը։\n\nՏեքստ B․\nԳյուղի բնակիչները պատմում են, որ միջնադարյան կամրջի մոտ հայտնվում է սպիտակ հագուստով մի կին, որը փնտրում է իր որդուն։'
        },
        subQuestions: [
          {
            id: 'p2-q5a',
            key: 'a)',
            prompt: {
              es: '¿Cuál explica un origen?',
              hy: 'Ո՞րն է բացատրում որևէ բանի ծագումը։'
            },
            answer: {
              es: 'El texto A: explica cómo nació el primer valle.',
              hy: 'Տեքստ A-ն․ բացատրում է, թե ինչպես առաջացավ առաջին հովիտը։'
            }
          },
          {
            id: 'p2-q5b',
            key: 'b)',
            prompt: {
              es: '¿Cuál se vincula a un lugar concreto?',
              hy: 'Ո՞րն է կապված որոշակի վայրի հետ։'
            },
            answer: {
              es: 'El texto B: se vincula con el puente medieval del pueblo.',
              hy: 'Տեքստ B-ն․ կապված է գյուղի միջնադարյան կամրջի հետ։'
            }
          },
          {
            id: 'p2-q5c',
            key: 'c)',
            prompt: {
              es: 'Clasifica los textos.',
              hy: 'Դասակարգի՛ր տեքստերը։'
            },
            answer: {
              es: 'A es un mito (un dios explica el origen de un elemento natural). B es una leyenda (historia tradicional en lugar concreto con elemento fantástico).',
              hy: 'A-ն առասպել է (աստծո գործողությամբ բացատրվում է բնական տարրի ծագումը)։ B-ն ավանդազրույց է (ավանդական պատմությունը որոշակի վայր է կապում երևակայական դեպքի հետ)։'
            }
          }
        ],
        answer: {
          es: 'A es mito (origen natural + dios); B es leyenda (lugar real/puente medieval + fantasma). Ambos contienen elementos maravillosos, por lo que ese rasgo por sí solo no basta.',
          hy: 'A-ն առասպել է (բնական տարրի ծագում + աստված); B-ն ավանդազրույց է (իրական վայր/միջնադարյան կամուրջ + ուրվական)։'
        }
      },
      {
        id: 'p2-q6',
        number: 'P2-6',
        blockId: 'parte-2-ex',
        tags: ['romance', 'sinalefa', 'métrica', 'rima asonante'],
        title: {
          es: '6. ANALIZA UN ROMANCE',
          hy: '6. ՎԵՐԼՈՒԾԻ՛Ր ՌՈՄԱՆՍԸ'
        },
        prompt: {
          es: 'Analiza la estructura métrica de este fragmento de romance.',
          hy: 'Վերլուծի՛ր ռոմանսի այս հատվածի չափական կառուցվածքը։'
        },
        contextText: {
          es: 'Por el sendero del bosque,\ncamina la niña Clara;\nlleva flores en la mano,\npara su querida hermana.',
          hy: 'Անտառի արահետով\nքայլում է Կլարա աղջիկը,\nձեռքին ծաղիկներ է տանում\nիր սիրելի քրոջ համար։'
        },
        subQuestions: [
          {
            id: 'p2-q6a',
            key: 'a)',
            prompt: {
              es: '¿Cuántos versos tiene el fragmento?',
              hy: 'Քանի՞ տող ունի հատվածը։'
            },
            answer: {
              es: 'Tiene cuatro versos.',
              hy: 'Ունի չորս տող։'
            }
          },
          {
            id: 'p2-q6b',
            key: 'b)',
            prompt: {
              es: 'Cuenta las sílabas métricas.',
              hy: 'Հաշվի՛ր բանաստեղծական վանկերը։'
            },
            answer: {
              es: '1. Por / el / sen / de / ro / del / bos / que → 8\n2. ca / mi / na / la / ni / ña / Cla / ra → 8\n3. lle / va / flo / res / en / la / ma / no → 8\n4. pa / ra / su / que / ri / da_her / ma / na → 8 (con sinalefa en «da_her»)',
              hy: '1. Por / el / sen / de / ro / del / bos / que → 8\n2. ca / mi / na / la / ni / ña / Cla / ra → 8\n3. lle / va / flo / res / en / la / ma / no → 8\n4. pa / ra / su / que / ri / da_her / ma / na → 8 («da_her»-ում սինալեֆա)'
            }
          },
          {
            id: 'p2-q6c',
            key: 'c)',
            prompt: {
              es: '¿Qué versos riman?',
              hy: 'Ո՞ր տողերն են հանգավորվում։'
            },
            answer: {
              es: 'Riman el segundo y el cuarto verso: Clara / hermana.',
              hy: 'Հանգավորվում են երկրորդ և չորրորդ տողերը՝ Clara / hermana։'
            }
          },
          {
            id: 'p2-q6d',
            key: 'd)',
            prompt: {
              es: '¿La rima es asonante o consonante?',
              hy: 'Հանգը ձայնավորայի՞ն է, թե՞ լրիվ։'
            },
            answer: {
              es: 'Es rima asonante: coinciden las vocales a–a desde la última vocal tónica, pero no todas las consonantes.',
              hy: 'Հանգը ձայնավորային է (rima asonante)․ վերջին շեշտված ձայնավորից սկսած համընկնում են a–a ձայնավորները, բայց բոլոր բաղաձայնները չեն համընկնում։'
            }
          },
          {
            id: 'p2-q6e',
            key: 'e)',
            prompt: {
              es: 'Escribe el esquema métrico.',
              hy: 'Գրի՛ր չափի և հանգավորման սխեման։'
            },
            answer: {
              es: '8– / 8a / 8– / 8a',
              hy: '8– / 8a / 8– / 8a'
            }
          }
        ],
        answer: {
          es: '4 versos octosílabos (8 sílabas), con sinalefa en «querida_hermana», rima asonante en versos pares (Clara / hermana), esquema: 8– / 8a / 8– / 8a.',
          hy: '4 ութվանկ տողեր (8 վանկ), սինալեֆա «querida_hermana»-ում, ձայնավորային հանգ զույգ տողերում (Clara / hermana), սխեման՝ 8– / 8a / 8– / 8a։'
        },
        notes: [
          {
            es: 'En el cuarto verso hay sinalefa en «querida_hermana». La «h» no impide que se unan las vocales al contar las sílabas métricas.',
            hy: 'Չորրորդ տողում «querida_hermana» կապակցության մեջ կա սինալեֆա՝ հարակից ձայնավորների միավորում մեկ բանաստեղծական վանկում։ H տառը չի խանգարում այդ միավորմանը։'
          }
        ]
      },
      {
        id: 'p2-q7',
        number: 'P2-7',
        blockId: 'parte-2-ex',
        tags: ['repetición', 'aliteración', 'anáfora', 'epanadiplosis'],
        title: {
          es: '7. DISTINGUE TRES FORMAS DE REPETICIÓN',
          hy: '7. ՏԱՐԲԵՐԱԿԻ՛Ր ԿՐԿՆՈՒԹՅԱՆ ԵՐԵՔ ՁԵՎԵՐԸ'
        },
        prompt: {
          es: '¿Qué figura aparece en cada ejemplo? ¿Se repite un sonido, el comienzo o una palabra en los extremos?',
          hy: 'Ի՞նչ միջոց կա յուրաքանչյուր օրինակում։ Կրկնվում է հնչյո՞ւնը, նախադասությունների սկի՞զբը, թե՞ բառը տողի սկզբում ու վերջում։'
        },
        contextText: {
          es: 'A. «Sus suaves suspiros».\nB. «Siempre te busco. / Siempre te espero».\nC. «Sueños, solo quiero sueños».',
          hy: 'A. «Նրա մեղմ հառաչանքները»։\nB. «Միշտ քեզ փնտրում եմ։ / Միշտ քեզ սպասում եմ»։\nC. «Երազներ, միայն երազներ եմ ուզում»։'
        },
        answer: {
          es: '• A. Aliteración: se repite el sonido «s» en varias palabras.\n• B. Anáfora: «Siempre» se repite al comienzo de dos enunciados.\n• C. Epanadiplosis: «Sueños» aparece al principio y al final del mismo enunciado.',
          hy: '• A. Aliteración (հնչյունների կրկնություն)․ մի քանի բառերում կրկնվում է «s» հնչյունը։\n• B. Anáfora (անաֆորա)․ «Siempre» բառը կրկնվում է երկու նախադասությունների սկզբում։\n• C. Epanadiplosis (էպանադիպլոսիս)․ «Sueños» բառը նույն նախադասության սկզբում և վերջում է։'
        }
      },
      {
        id: 'p2-q8',
        number: 'P2-8',
        blockId: 'parte-2-ex',
        tags: ['onomatopeya', 'anáfora', 'error'],
        title: {
          es: '8. DETECTA EL ERROR DEL ALUMNO',
          hy: '8. ԳՏԻ՛Ր ԱՇԱԿԵՐՏԻ ՍԽԱԼԸ'
        },
        prompt: {
          es: 'Un alumno analiza «Tic-tac, tic-tac» y escribe: «Es una anáfora porque se repite lo mismo». ¿Por qué la explicación no es suficiente? ¿Cuál es la respuesta más adecuada?',
          hy: 'Աշակերտը վերլուծում է «Tic-tac, tic-tac» արտահայտությունը և գրում․ «Սա անաֆորա է, որովհետև նույն բանն է կրկնվում»։ Ինչո՞ւ բացատրությունը բավարար չէ։ Ո՞ր պատասխանն է ավելի համապատասխան։'
        },
        answer: {
          es: 'No toda repetición es anáfora. Para reconocerla, debe repetirse una palabra o grupo de palabras al comienzo de varios versos o enunciados. Aquí lo más característico es la imitación del sonido del reloj: una onomatopeya.',
          hy: 'Ամեն կրկնություն անաֆորա չէ։ Անաֆորայի դեպքում բառը կամ բառախումբը կրկնվում է մի քանի տողերի կամ նախադասությունների սկզբում։ Այստեղ գլխավոր հատկանիշը ժամացույցի ձայնի նմանակումն է՝ onomatopeya (ձայնի նմանակում)։'
        }
      },
      {
        id: 'p2-q9',
        number: 'P2-9',
        blockId: 'parte-2-ex',
        tags: ['enumeración', 'asíndeton', 'polisíndeton'],
        title: {
          es: '9. ENUMERACIÓN, ASÍNDETON Y POLISÍNDETON',
          hy: '9. ԹՎԱՐԿՈՒՄ, ԱՆՇԱՂԿԱՊՈՒԹՅՈՒՆ ԵՎ ԲԱԶՄԱՇԱՂԿԱՊՈՒԹՅՈՒՆ'
        },
        prompt: {
          es: 'Compara estas versiones: a) ¿Qué tienen en común? b) ¿Qué cambia en B y C?',
          hy: 'Համեմատի՛ր տարբերակները․ a) Ի՞նչ ընդհանուր բան ունեն։ b) Ի՞նչ է փոխվում B-ում և C-ում։'
        },
        contextText: {
          es: 'A. «En la mochila llevaba libros, cuadernos y lápices».\nB. «En la mochila llevaba libros, cuadernos, lápices».\nC. «En la mochila llevaba libros y cuadernos y lápices».',
          hy: 'A. «Ուսապարկում գրքեր, տետրեր և մատիտներ ուներ»։\nB. «Ուսապարկում գրքեր, տետրեր, մատիտներ ուներ»։\nC. «Ուսապարկում գրքեր և տետրեր և մատիտներ ուներ»։'
        },
        answer: {
          es: 'Las tres contienen una enumeración, porque presentan una serie de objetos. A utiliza una coordinación habitual. B añade asíndeton, porque omite la conjunción final. C añade polisíndeton, porque repite la conjunción «y».',
          hy: 'Երեքում էլ կա թվարկում (enumeración), քանի որ ներկայացվում է առարկաների շարք։ A-ում կապակցումը սովորական է։ B-ում կա նաև անշաղկապություն (asíndeton), որովհետև վերջին շաղկապը բաց է թողնված։ C-ում կա նաև բազմաշաղկապություն (polisíndeton), որովհետև «y»-ը («և») կրկնվում է։'
        }
      },
      {
        id: 'p2-q10',
        number: 'P2-10',
        blockId: 'parte-2-ex',
        tags: ['hipérbaton', 'orden sintáctico'],
        title: {
          es: '10. HIPÉRBATON: RECONSTRUYE LA FRASE',
          hy: '10. ՇՐՋԱԴԱՍՈՒԹՅՈՒՆ․ ՎԵՐԱԿԱՆԳՆԻ՛Ր ՆԱԽԱԴԱՍՈՒԹՅՈՒՆԸ'
        },
        prompt: {
          es: 'Analiza la frase: «De verdes hojas se cubrió el árbol».',
          hy: 'Վերլուծի՛ր նախադասությունը․ «Կանաչ տերևներով ծածկվեց ծառը»։'
        },
        subQuestions: [
          {
            id: 'p2-q10a',
            key: 'a)',
            prompt: {
              es: 'Escribe la oración en un orden más habitual.',
              hy: 'Գրի՛ր նախադասությունն ավելի սովորական դասավորությամբ։'
            },
            answer: {
              es: '«El árbol se cubrió de hojas verdes».',
              hy: '«Ծառը ծածկվեց կանաչ տերևներով»։'
            }
          },
          {
            id: 'p2-q10b',
            key: 'b)',
            prompt: {
              es: '¿Cambia el significado básico?',
              hy: 'Հիմնական իմաստը փոխվո՞ւմ է։'
            },
            answer: {
              es: 'No cambia el hecho principal, pero sí la manera de presentarlo y el énfasis expresivo.',
              hy: 'Հիմնական փաստը չի փոխվում, բայց փոխվում են ներկայացման ձևն ու շեշտադրումը։'
            }
          },
          {
            id: 'p2-q10c',
            key: 'c)',
            prompt: {
              es: '¿A qué nivel pertenece la figura?',
              hy: 'Ո՞ր մակարդակին է պատկանում միջոցը։'
            },
            answer: {
              es: 'Es un hipérbaton, del nivel morfosintáctico.',
              hy: 'Սա շրջադասություն (hipérbaton) է՝ ձևաբանական-շարահյուսական մակարդակից։'
            }
          }
        ],
        answer: {
          es: 'a) «El árbol se cubrió de hojas verdes» | b) No cambia el significado esencial, solo el énfasis | c) Hipérbaton, nivel morfosintáctico.',
          hy: 'a) «El árbol se cubrió de hojas verdes» | b) Իմաստը չի փոխվում, փոխվում է շեշտը | c) Շրջադասություն (hipérbaton), ձևաբանական-շարահյուսական մակարդակ։'
        }
      },
      {
        id: 'p2-q11',
        number: 'P2-11',
        blockId: 'parte-2-ex',
        tags: ['metáfora', 'contexto', 'semántica'],
        title: {
          es: '11. METÁFORA: INTERPRETA EL SIGNIFICADO',
          hy: '11. ՓՈԽԱԲԵՐՈՒԹՅՈՒՆ․ ՄԵԿՆԱԲԱՆԻ՛Ր ԻՄԱՍՏԸ'
        },
        prompt: {
          es: '«Después de escuchar la noticia, sintió un invierno en el corazón». Responde a las preguntas:',
          hy: '«Լուրը լսելուց հետո նա սրտում ձմեռ զգաց»։ Պատասխանի՛ր հարցերին․'
        },
        subQuestions: [
          {
            id: 'p2-q11a',
            key: 'a)',
            prompt: {
              es: '¿Se refiere a una estación real dentro del corazón?',
              hy: 'Խոսքը սրտի ներսում իրական եղանակի՞ մասին է։'
            },
            answer: {
              es: 'No se refiere a un invierno real.',
              hy: 'Ո՛չ, իրական ձմռան մասին չէ խոսքը։'
            }
          },
          {
            id: 'p2-q11b',
            key: 'b)',
            prompt: {
              es: '¿Qué puede representar «invierno»?',
              hy: 'Ի՞նչ կարող է ներկայացնել «ձմեռը»։'
            },
            answer: {
              es: 'En este contexto puede representar tristeza, soledad o frialdad emocional.',
              hy: 'Այստեղ ձմեռը կարող է ներկայացնել տխրություն, միայնություն կամ հուզական սառնություն։'
            }
          },
          {
            id: 'p2-q11c',
            key: 'c)',
            prompt: {
              es: '¿Por qué es una metáfora?',
              hy: 'Ինչո՞ւ է սա փոխաբերություն։'
            },
            answer: {
              es: 'Es una metáfora porque una experiencia interior se expresa mediante la imagen del invierno.',
              hy: 'Սա փոխաբերություն է, որովհետև ներքին ապրումը ներկայացվում է ձմռան պատկերով։'
            }
          }
        ],
        answer: {
          es: 'No es estación real; representa tristeza/frialdad; es metáfora porque traslada las cualidades del invierno a un sentimiento interior.',
          hy: 'Իրական եղանակ չէ․ ներկայացնում է տխրություն/սառնություն․ փոխաբերություն է, որովհետև ներքին զգացմունքը նկարագրվում է ձմռան պատկերով։'
        },
        notes: [
          {
            es: 'Regla: Para interpretar una metáfora, hay que leer el contexto: no siempre existe una única palabra que traduzca todo su significado.',
            hy: 'Կանոն․ Փոխաբերությունը հասկանալու համար պետք է կարդալ համատեքստը․ միշտ չէ, որ մեկ բառով կարելի է փոխանցել դրա ամբողջ իմաստը։'
          }
        ]
      },
      {
        id: 'p2-q12',
        number: 'P2-12',
        blockId: 'parte-2-ex',
        tags: ['análisis completo', 'literatura popular', 'estribillo'],
        title: {
          es: '12. ANÁLISIS COMPLETO',
          hy: '12. ԱՄԲՈՂՋԱԿԱՆ ՎԵՐԼՈՒԾՈՒԹՅՈՒՆ'
        },
        prompt: {
          es: 'Lee este texto y responde a las preguntas.',
          hy: 'Կարդա՛ այս տեքստը և պատասխանի՛ր հարցերին։'
        },
        contextText: {
          es: 'Mi abuela me enseñó una canción que había aprendido de su madre. Nadie recordaba quién la había creado. Cada familia del pueblo la cantaba con palabras un poco diferentes. Al final de cada estrofa se repetía: «Vuelve, vuelve, primavera».',
          hy: 'Տատիկս ինձ մի երգ սովորեցրեց, որը սովորել էր իր մորից։ Ոչ ոք չէր հիշում՝ ով էր ստեղծել այն։ Գյուղի յուրաքանչյուր ընտանիք երգում էր այն փոքր-ինչ տարբեր բառերով։ Ամեն տան վերջում կրկնվում էր․ «Վերադարձի՛ր, վերադարձի՛ր, գարո՛ւն»։'
        },
        subQuestions: [
          {
            id: 'p2-q12a',
            key: 'a)',
            prompt: {
              es: '¿La canción pertenece a la literatura popular o culta?',
              hy: 'Երգը ժողովրդակա՞ն, թե՞ հեղինակային գրականություն է։'
            },
            answer: {
              es: 'La canción pertenece a la literatura popular.',
              hy: 'Երգը պատկանում է ժողովրդական գրականությանը։'
            }
          },
          {
            id: 'p2-q12b',
            key: 'b)',
            prompt: {
              es: 'Encuentra tres pruebas.',
              hy: 'Գտի՛ր երեք հիմնավորում։'
            },
            answer: {
              es: 'Se transmite entre generaciones (de forma oral), su autor es desconocido (anónima) y existen versiones diferentes en el pueblo.',
              hy: 'Փոխանցվում է սերնդեսերունդ (բանավոր), հեղինակն անհայտ է, և գյուղում կան տարբեր տարբերակներ։'
            }
          },
          {
            id: 'p2-q12c',
            key: 'c)',
            prompt: {
              es: '¿Cómo se llama la parte que se repite?',
              hy: 'Ինչպե՞ս է կոչվում կրկնվող մասը։'
            },
            answer: {
              es: 'La parte repetida es el estribillo («Vuelve, vuelve, primavera»).',
              hy: 'Կրկնվող մասը կրկներգն է (estribillo)՝ «Վերադարձի՛ր, վերադարձի՛ր, գարո՛ւն»։'
            }
          },
          {
            id: 'p2-q12d',
            key: 'd)',
            prompt: {
              es: '¿El texto que explica la historia de la canción está en prosa o en verso?',
              hy: 'Երգի պատմությունը ներկայացնող տեքստն արձա՞կ է, թե՞ չափածո։'
            },
            answer: {
              es: 'El texto que cuenta esta historia está en prosa.',
              hy: 'Այս պատմությունը ներկայացնող տեքստը արձակ է (prosa)։'
            }
          },
          {
            id: 'p2-q12e',
            key: 'e)',
            prompt: {
              es: '¿En qué persona está narrado?',
              hy: 'Ո՞ր դեմքով է պատմվում։'
            },
            answer: {
              es: 'Está narrado en primera persona, como muestra «mi abuela me enseñó».',
              hy: 'Պատմվում է առաջին դեմքով, ինչը երևում է «տատիկս ինձ սովորեցրեց» («mi abuela me enseñó») արտահայտությունից։'
            }
          }
        ],
        answer: {
          es: 'a) Popular | b) 3 pruebas: transmisión generacional, anónima, variantes | c) Estribillo | d) En prosa | e) 1.ª persona («me enseñó»).',
          hy: 'a) Ժողովրդական | b) 3 հիմնավորում՝ սերնդեսերունդ, անհայտ հեղինակ, տարբերակներ | c) Կրկներգ | d) Արձակ | e) 1-ին դեմք («ինձ սովորեցրեց»)։'
        }
      },
      {
        id: 'p2-q13',
        number: 'P2-13',
        blockId: 'parte-2-ex',
        tags: ['creación', 'versos', 'amistad', 'anáfora', 'metáfora'],
        title: {
          es: '13. CREA UN TEXTO Y ANALÍZALO',
          hy: '13. ՍՏԵՂԾԻ՛Ր ՏԵՔՍՏ ԵՎ ՎԵՐԼՈՒԾԻ՛Ր ԱՅՆ'
        },
        prompt: {
          es: 'Consigna: Escribe cuatro versos sobre la amistad. Incluye una anáfora y una metáfora. Después señala ambas figuras.',
          hy: 'Առաջադրանք․ Գրի՛ր չորս չափածո տող ընկերության մասին։ Օգտագործի՛ր անաֆորա և փոխաբերություն։ Հետո նշի՛ր երկու միջոցները։'
        },
        contextText: {
          es: 'Contigo comparto mis sueños,\ncontigo descubro el camino.\nTu amistad es un refugio\ndonde descansa mi miedo.',
          hy: 'Քեզ հետ կիսում եմ երազանքներս,\nքեզ հետ բացահայտում եմ ճանապարհը։\nՔո ընկերությունն ապաստան է,\nորտեղ հանգստանում է իմ վախը։'
        },
        answer: {
          es: '• Anáfora: «contigo» se repite al principio de los dos primeros versos.\n• Metáfora: «tu amistad es un refugio». A = amistad; B = refugio. La amistad se relaciona con la protección y la seguridad.\n• Género: lírica, porque expresa sentimientos hacia una persona.',
          hy: '• Անաֆորա․ «contigo» բառը կրկնվում է առաջին երկու տողերի սկզբում։\n• Փոխաբերություն․ «tu amistad es un refugio» («քո ընկերությունն ապաստան է»)։ A = ընկերություն, B = ապաստան։ Ընկերությունը կապվում է պաշտպանության և ապահովության հետ։\n• Գրական սեռ․ քնարերգություն (lírica), որովհետև արտահայտվում են մեկի հանդեպ զգացմունքներ։'
        }
      },
      {
        id: 'p2-q14',
        number: 'P2-14',
        blockId: 'parte-2-ex',
        tags: ['examen largo', 'niveles', 'fónico', 'morfosintáctico', 'semántico'],
        title: {
          es: '14. RESPUESTA LARGA DE EXAMEN',
          hy: '14. ՔՆՆՈՒԹՅԱՆ ԾԱՎԱԼՈՒՆ ՊԱՏԱՍԽԱՆ'
        },
        prompt: {
          es: 'Explica las diferencias entre el nivel fónico, el morfosintáctico y el semántico. Incluye un ejemplo de cada uno y analízalo.',
          hy: 'Բացատրի՛ր հնչյունական, ձևաբանական-շարահյուսական և իմաստային մակարդակների տարբերությունները։ Յուրաքանչյուրից բե՛ր օրինակ և վերլուծի՛ր։'
        },
        answer: {
          es: '1. Nivel fónico: Se relaciona con los sonidos de las palabras. Por ejemplo, en «Sus suaves susurros» se repite el sonido «s». Esta figura se llama aliteración.\n\n2. Nivel morfosintáctico: Se relaciona con la organización, la repetición o la omisión de palabras y nexos. En «Y canta y ríe y baila» se repite la conjunción «y». Es un polisíndeton.\n\n3. Nivel semántico: Se relaciona con el significado. En «Tus dientes son perlas» se identifican los dientes con las perlas por su blancura y su brillo. Es una metáfora.',
          hy: '1. Հնչյունական մակարդակ (nivel fónico)․ Կապված է բառերի հնչողության հետ։ Օրինակ՝ «Sus suaves susurros» արտահայտության մեջ կրկնվում է «s» հնչյունը։ Այս միջոցը կոչվում է ալիտերացիա (aliteración)՝ հնչյունների կրկնություն։\n\n2. Ձևաբանական-շարահյուսական մակարդակ (nivel morfosintáctico)․ Կապված է բառերի ու շաղկապների դասավորության, կրկնության կամ բացթողման հետ։ «Y canta y ríe y baila» նախադասության մեջ կրկնվում է «y» շաղկապը։ Սա բազմաշաղկապություն (polisíndeton) է։\n\n3. Իմաստային մակարդակ (nivel semántico)․ Կապված է իմաստի հետ։ «Tus dientes son perlas» նախադասության մեջ ատամները նույնացվում են մարգարիտների հետ՝ սպիտակության և փայլի պատճառով։ Սա փոխաբերություն (metáfora) է։'
        }
      }
    ]
  }
];

export const FLASHCARDS: Flashcard[] = [
  {
    id: 'fc-1',
    category: 'fónico',
    term: { es: 'Aliteración', hy: 'Ալիտերացիա (Հնչյունների կրկնություն)' },
    definition: {
      es: 'Repetición de uno o varios sonidos iguales o parecidos para lograr un efecto rítmico o imitativo.',
      hy: 'Նույն կամ նման հնչյունների կրկնություն տողում կամ նախադասության մեջ՝ ռիթմիկ կամ արտահայտիչ ազդեցություն ստանալու համար։'
    },
    example: {
      es: '«Sus suaves susurros sonaban»',
      hy: '«Նրա մեղմ շշուկները հնչում էին»'
    },
    explanation: {
      es: 'La repetición del sonido «s» evoca la sensación acústica de un susurro.',
      hy: '«s» հնչյունի կրկնությունը շշուկի ձայնային տպավորություն է ստեղծում։'
    }
  },
  {
    id: 'fc-2',
    category: 'fónico',
    term: { es: 'Onomatopeya', hy: 'Օնոմատոպեա (Ձայնի նմանակում)' },
    definition: {
      es: 'Palabra que imita o reproduce el sonido de una acción, objeto o animal.',
      hy: 'Բառ կամ արտահայտություն, որը նմանակում է բնության, կենդանու կամ իրի իրական ձայնը։'
    },
    example: {
      es: '«Tic-tac, tic-tac: el reloj rompía el silencio»',
      hy: '«Տիկ-տակ, տիկ-տակ․ ժամացույցը խախտում էր լռությունը»'
    },
    explanation: {
      es: '«Tic-tac» imita el sonido rítmico del mecanismo del reloj.',
      hy: '«Տիկ-տակ»-ը վերարտադրում է ժամացույցի մեխանիզմի ձայնը։'
    }
  },
  {
    id: 'fc-3',
    category: 'fónico',
    term: { es: 'Paronomasia', hy: 'Պարոնոմազիա (Նմանահունչ բառերի խաղ)' },
    definition: {
      es: 'Uso cercano de palabras de forma fónica muy semejante pero de significado distinto.',
      hy: 'Նման հնչողություն, բայց տարբեր իմաստներ ունեցող բառերի կողք կողքի գործածություն։'
    },
    example: {
      es: '«Entre casado y cansado hay una letra de diferencia»',
      hy: '«Ամուսնացածի և հոգնածի միջև մեկ տառի տարբերություն կա»'
    },
    explanation: {
      es: '«Casado» (ամուսնացած) y «cansado» (հոգնած) տարբերվում են միայն մեկ տառով/հնչյունով։',
      hy: '«Casado» և «cansado» բառերը նման են հնչում, սակայն իմաստները լրիվ տարբեր են։'
    }
  },
  {
    id: 'fc-4',
    category: 'morfosintáctico',
    term: { es: 'Anáfora', hy: 'Անաֆորա (Սկզբնակրկնություն)' },
    definition: {
      es: 'Repetición de una o más palabras al comienzo de frases o versos sucesivos.',
      hy: 'Միևնույն բառի կամ բառախմբի կրկնությունը հաջորդական նախադասությունների կամ տողերի սկզբում։'
    },
    example: {
      es: '«Quiero verte. / Quiero hablarte. / Quiero escucharte».',
      hy: '«Ուզում եմ քեզ տեսնել։ / Ուզում եմ քեզ հետ խոսել։ / Ուզում եմ քեզ լսել»։'
    },
    explanation: {
      es: '«Quiero» se repite al inicio de cada cláusula, enfatizando la insistencia y el deseo.',
      hy: '«Quiero» (Ուզում եմ) բառը կրկնվում է յուրաքանչյուր տողի սկզբում՝ ընդգծելով ցանկությունը։'
    }
  },
  {
    id: 'fc-5',
    category: 'fónico',
    term: { es: 'Epanadiplosis', hy: 'Էպանադիպլոսիս (Ծայրային կրկնություն)' },
    definition: {
      es: 'Repetición de la misma palabra al principio y al final de un mismo verso o enunciado.',
      hy: 'Միևնույն բառի կրկնությունը նույն տողի կամ նախադասության սկզբում և վերջում։'
    },
    example: {
      es: '«Verde que te quiero verde»',
      hy: '«Կանաչ, ինչքան եմ քեզ սիրում կանաչ»'
    },
    explanation: {
      es: 'La palabra «verde» abre y cierra el enunciado, creando un marco rítmico cerrado.',
      hy: '«Verde» բառը դրված է տողի և՛ սկզբում, և՛ վերջում։'
    }
  },
  {
    id: 'fc-6',
    category: 'morfosintáctico',
    term: { es: 'Hipérbaton', hy: 'Հիպերբատոն (Շրջադասություն)' },
    definition: {
      es: 'Alteración del orden sintáctico habitual y lógico de los elementos de una oración.',
      hy: 'Նախադասության անդամների սովորական, քերականական շարադասության փոփոխություն։'
    },
    example: {
      es: '«De tu jardín las flores recogí» → Orden lógico: «Recogí las flores de tu jardín»',
      hy: '«De tu jardín las flores recogí» → Սովորական կարգ․ «Recogí las flores de tu jardín»'
    },
    explanation: {
      es: 'Se adelanta el complemento de lugar para darle mayor relieve poético.',
      hy: 'Տեղի պարագան առաջ է բերվել՝ խոսքին բանաստեղծական շունչ հաղորդելու համար։'
    }
  },
  {
    id: 'fc-7',
    category: 'morfosintáctico',
    term: { es: 'Asíndeton', hy: 'Ասինդետոն (Անշաղկապություն)' },
    definition: {
      es: 'Omisión de conjunciones (como «y») entre palabras o cláusulas para dar rapidez y dinamismo.',
      hy: 'Շաղկապների բացթողում համադաս նախադասությունների կամ անդամների միջև՝ խոսքին արագություն և դինամիկա տալու համար։'
    },
    example: {
      es: '«Corre, salta, ríe, canta»',
      hy: '«Վազում է, ցատկում, ծիծաղում, երգում»'
    },
    explanation: {
      es: 'La falta de nexos acelera el ritmo de la narración.',
      hy: 'Շաղկապների բացակայությունն արագացնում է գործողությունների ընթացքը։'
    }
  },
  {
    id: 'fc-8',
    category: 'morfosintáctico',
    term: { es: 'Polisíndeton', hy: 'Պոլիսինդետոն (Բազմաշաղկապություն)' },
    definition: {
      es: 'Repetición intencionada de conjunciones coordinantes (especialmente «y») para dar solemnidad o lentitud.',
      hy: 'Միևնույն շաղկապի (հատկապես «և» / «y») նպատակային կրկնություն՝ խոսքը ծանրակշիռ դարձնելու և գործողությունները կուտակելու համար։'
    },
    example: {
      es: '«Y corre y salta y ríe y canta»',
      hy: '«Եվ վազում է, և ցատկում, և ծիծաղում, և երգում»'
    },
    explanation: {
      es: 'Insiste en la acumulación emotiva y da un compás marcado.',
      hy: 'Ընդգծում է յուրաքանչյուր գործողության նշանակությունը և հուզական կուտակումը։'
    }
  },
  {
    id: 'fc-9',
    category: 'morfosintáctico',
    term: { es: 'Pleonasmo', hy: 'Պլեոնազմ (Իմաստային ավելադրություն)' },
    definition: {
      es: 'Uso de palabras redundantes o innecesarias para el sentido estricto, pero que refuerzan la expresividad.',
      hy: 'Իմաստային առումով ավելորդ բառերի գործածություն, որոնք սակայն ուժեղացնում են խոսքի հուզականությունն ու համոզչականությունը։'
    },
    example: {
      es: '«Lo vi con mis propios ojos»',
      hy: '«Ես դա տեսա իմ սեփական աչքերով»'
    },
    explanation: {
      es: '«Con mis propios ojos» no añade información objetiva a «lo vi», pero insiste en la certeza testimonial.',
      hy: '«Իմ սեփական աչքերով» արտահայտությունը նոր տեղեկություն չի տալիս, բայց ընդգծում է անձնական վկայությունը։'
    }
  },
  {
    id: 'fc-10',
    category: 'semántico',
    term: { es: 'Metáfora', hy: 'Փոխաբերություն (Metáfora)' },
    definition: {
      es: 'Identificación de un término real (A) con uno imaginario o figurado (B) sobre la base de una semejanza.',
      hy: 'Իրական առարկայի (A) նույնացումը փոխաբերական պատկերի (B) հետ՝ նրանց միջև եղած որևէ նմանության հիման վրա։'
    },
    example: {
      es: '«Tus dientes son perlas» (A es B)',
      hy: '«Քո ատամները մարգարիտներ են» (A-ն B է)'
    },
    explanation: {
      es: 'Formas: A es B («el cabello es oro»), Solo B («el oro brillaba en sus hombros»), B de A («el fuego de su pasión»).',
      hy: 'Ձևերը․ A-ն B է («մազերը ոսկի են»), Միայն B («ուսերին փայլում էր ոսկին»), B de A («կրքի կրակը»)։'
    }
  },
  {
    id: 'fc-11',
    category: 'métrica',
    term: { es: 'Romance y Métrica', hy: 'Ռոմանս և Չափականություն' },
    definition: {
      es: 'Poema característico de versos octosílabos (8 sílabas), sin límite de versos, con rima asonante en versos pares (– a – a).',
      hy: 'Իսպանական ավանդական չափածո ձև․ ութվանկ տողեր (8 sílabas), անսահմանափակ տողաքանակ, զույգ տողերում ձայնավորային հանգ (– a – a), կենտերը՝ անհանգ (versos sueltos)։'
    },
    example: {
      es: 'Esquema: 8– / 8a / 8– / 8a',
      hy: 'Սխեմա․ 8– / 8a / 8– / 8a'
    },
    explanation: {
      es: 'La sinalefa une la vocal final de una palabra con la inicial de la siguiente formando una sola sílaba métrica.',
      hy: 'Սինալեֆան (sinalefa) միավորում է բառավերջի ձայնավորը հաջորդ բառասկզբի ձայնավորի հետ մեկ բանաստեղծական վանկի մեջ։'
    }
  },
  {
    id: 'fc-12',
    category: 'teatro',
    term: { es: 'Acotación y Atrezo', hy: 'Ռեմարկ (Acotación) և Բեմական առարկա (Atrezo)' },
    definition: {
      es: 'Acotación: indicación del autor entre paréntesis para orientar la puesta en escena. Atrezo: objetos usados por los actores.',
      hy: 'Acotación (Ռեմարկ)․ հեղինակի բեմական ցուցումները փակագծերում։ Atrezo․ դերասանների կողմից օգտագործվող բեմական առարկաները (օր․՝ նամակ, լապտեր)։'
    },
    example: {
      es: '(Lucía coge una linterna y se acerca a la ventana.)',
      hy: '(Լուսիան վերցնում է լապտերը և մոտենում պատուհանին։)'
    },
    explanation: {
      es: 'Las acotaciones no se leen en voz alta por los personajes; guían la actuación y técnica.',
      hy: 'Բեմական ցուցումները բարձրաձայն չեն կարդացվում, այլ ուղղորդում են դերասանին և բեմադրող խմբին։'
    }
  }
];

export const QUIZ_ITEMS: QuizQuestion[] = [
  {
    id: 'qz-1',
    question: {
      es: '¿Cuál de las siguientes frases utiliza un lenguaje verdaderamente literario?',
      hy: 'Հետևյալ նախադասություններից ո՞րն է օգտագործում իսկական գեղարվեստական լեզու։'
    },
    options: [
      {
        id: 'opt-1a',
        text: {
          es: '«El sol se puso y empezó la noche».',
          hy: '«Արևը մայր մտավ, և գիշերը սկսվեց»։'
        },
        isCorrect: false
      },
      {
        id: 'opt-1b',
        text: {
          es: '«El cielo se vistió de oro antes de dormir».',
          hy: '«Երկինքը քնելուց առաջ ոսկի հագավ»։'
        },
        isCorrect: true
      },
      {
        id: 'opt-1c',
        text: {
          es: '«A las ocho de la tarde la temperatura bajó».',
          hy: '«Երեկոյան ժամը ութին ջերմաստիճանն իջավ»։'
        },
        isCorrect: false
      }
    ],
    explanation: {
      es: '«El cielo se vistió de oro antes de dormir» personifica el cielo («vestirse», «dormir») y utiliza una metáfora de color («oro» = atardecer).',
      hy: '«Երկինքը քնելուց առաջ ոսկի հագավ» նախադասության մեջ երկինքն անձնավորված է, իսկ «ոսկին» փոխաբերաբար ներկայացնում է մայրամուտի գույնը։'
    }
  },
  {
    id: 'qz-2',
    question: {
      es: '¿Qué figura literaria encontramos en «Sus suaves susurros sonaban»?',
      hy: 'Ի՞նչ գեղարվեստական միջոց կա «Sus suaves susurros sonaban» արտահայտության մեջ։'
    },
    options: [
      {
        id: 'opt-2a',
        text: { es: 'Aliteración (nivel fónico)', hy: 'Ալիտերացիա (հնչյունական մակարդակ)' },
        isCorrect: true
      },
      {
        id: 'opt-2b',
        text: { es: 'Hipérbaton (nivel morfosintáctico)', hy: 'Շրջադասություն (ձևաբանական մակարդակ)' },
        isCorrect: false
      },
      {
        id: 'opt-2c',
        text: { es: 'Asíndeton (nivel morfosintáctico)', hy: 'Անշաղկապություն (ձևաբանական մակարդակ)' },
        isCorrect: false
      }
    ],
    explanation: {
      es: 'Se repite insistentemente el sonido consonántico «s», produciendo un efecto fónico similar al susurro.',
      hy: 'Կրկնվում է «s» հնչյունը՝ շշուկ հիշեցնող հնչյունական տպավորություն ստեղծելով։'
    }
  },
  {
    id: 'qz-3',
    question: {
      es: '¿Cómo se llama la figura en «De tu jardín las flores recogí»?',
      hy: 'Ինչպե՞ս է կոչվում «De tu jardín las flores recogí» նախադասության միջոցը։'
    },
    options: [
      {
        id: 'opt-3a',
        text: { es: 'Polisíndeton', hy: 'Բազմաշաղկապություն' },
        isCorrect: false
      },
      {
        id: 'opt-3b',
        text: { es: 'Hipérbaton', hy: 'Հիպերբատոն (Շրջադասություն)' },
        isCorrect: true
      },
      {
        id: 'opt-3c',
        text: { es: 'Pleonasmo', hy: 'Պլեոնազմ' },
        isCorrect: false
      }
    ],
    explanation: {
      es: 'Es un hipérbaton porque se altera el orden habitual (que sería «Recogí las flores de tu jardín»).',
      hy: 'Շրջադասություն է, քանի որ փոխվել է սովորական կարգը («Recogí las flores de tu jardín»)։'
    }
  },
  {
    id: 'qz-4',
    question: {
      es: 'En el esquema métrico del romance: 8– / 8a / 8– / 8a, ¿qué significa el guion «–»?',
      hy: 'Ռոմանսի 8– / 8a / 8– / 8a սխեմայում ի՞նչ է նշանակում գծիկը «–»։'
    },
    options: [
      {
        id: 'opt-4a',
        text: { es: 'Verso suelto (verso que no rima)', hy: 'Անհանգ տող (verso suelto, հանգ չունեցող տող)' },
        isCorrect: true
      },
      {
        id: 'opt-4b',
        text: { es: 'Verso con rima consonante', hy: 'Լրիվ հանգ ունեցող տող' },
        isCorrect: false
      },
      {
        id: 'opt-4c',
        text: { es: 'Verso que tiene menos de 8 sílabas', hy: '8-ից պակաս վանկ ունեցող տող' },
        isCorrect: false
      }
    ],
    explanation: {
      es: 'Los versos impares en el romance son versos sueltos: mantienen la medida de 8 sílabas métricas pero no riman.',
      hy: 'Ռոմանսի կենտ տողերը versos sueltos են․ պահպանում են 8 վանկ չափը, բայց չեն հանգավորվում։'
    }
  },
  {
    id: 'qz-5',
    question: {
      es: '¿Si una canción popular tradicional se imprime en un libro, deja de ser literatura popular?',
      hy: 'Եթե ժողովրդական երգը տպագրվում է գրքում, այն դադարո՞ւմ է ժողովրդական գրականություն լինել։'
    },
    options: [
      {
        id: 'opt-5a',
        text: { es: 'Sí, automáticamente se convierte en literatura culta.', hy: 'Այո՛, այն ավտոմատ դառնում է հեղինակային գրականություն։' },
        isCorrect: false
      },
      {
        id: 'opt-5b',
        text: { es: 'No, su origen y tradición siguen siendo populares; el libro solo ayuda a conservarla.', hy: 'Ո՛չ, դրա ծագումն ու ավանդույթը շարունակում են ժողովրդական մնալ․ գիրքը պարզապես օգնում է պահպանել այն։' },
        isCorrect: true
      }
    ],
    explanation: {
      es: 'El soporte escrito no cambia su origen oral, tradicional ni anónimo.',
      hy: 'Գրավոր տարբերակը չի փոխում երգի բանավոր, ժողովրդական և անհայտ հեղինակային ծագումը։'
    }
  },
  {
    id: 'qz-6',
    question: {
      es: '¿Qué es una «acotación» en un texto teatral?',
      hy: 'Ի՞նչ է «բեմական ցուցումը» (acotación / ռեմարկ) դրամատիկական տեքստում։'
    },
    options: [
      {
        id: 'opt-6a',
        text: { es: 'El poema que recita el protagonista al final.', hy: 'Գլխավոր հերոսի արտասանած բանաստեղծությունը վերջում։' },
        isCorrect: false
      },
      {
        id: 'opt-6b',
        text: { es: 'Una indicación entre paréntesis del autor sobre gestos, movimientos o decorado.', hy: 'Հեղինակի ցուցումը փակագծերում՝ կերպարների շարժումների, ձայների կամ բեմի մասին։' },
        isCorrect: true
      },
      {
        id: 'opt-6c',
        text: { es: 'El precio de la entrada al teatro.', hy: 'Թատրոնի տոմսի գինը։' },
        isCorrect: false
      }
    ],
    explanation: {
      es: 'Las acotaciones guían a los actores y al director sobre cómo representar la obra en el escenario.',
      hy: 'Բեմական ցուցումները (ռեմարկները) ուղղորդում են դերասաններին և ռեժիսորին, թե ինչպես բեմադրել տեսարանը։'
    }
  }
];
