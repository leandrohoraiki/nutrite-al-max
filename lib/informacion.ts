// Contenido editorial de la sección «Información».
// Los textos son los aprobados por Leandro Horaiki: no reescribirlos
// sin su revisión. Para cambiar una foto, completar `image` del apartado.

export type InfoImage = {
  src: string;
  alt: string;
  /** Encuadre del recorte (object-position de CSS). */
  position?: string;
};

export type InfoBlock =
  | { type: "p"; text: string }
  | { type: "h"; text: string }
  /** Párrafo con cifras de recomendaciones para fútbol competitivo. */
  | { type: "football"; text: string }
  | {
      type: "example";
      lead?: string;
      text?: string;
      items?: string[];
      after?: string[];
    }
  | { type: "list"; lead: string; items: string[] }
  | { type: "formula"; title: string; terms: string[] }
  | { type: "cases"; items: { label: string; text: string }[] }
  | { type: "remember"; title: string; text: string };

export type InfoSource = {
  label: string;
  citation: string;
  url: string;
};

export type InfoItem = {
  id: string;
  num: string;
  category: string;
  title: string;
  intro: string;
  facts: [string, string][];
  image?: InfoImage;
  /** Variante de color del panel tipográfico cuando no hay foto. */
  panel: "violet" | "ink";
  panelWord: string;
  article: {
    title: string;
    blocks: InfoBlock[];
    sources: InfoSource[];
  };
};

export const infoItems: InfoItem[] = [
  {
    id: "alimentacion",
    num: "01",
    category: "Alimentación deportiva",
    title: "Qué comer antes, durante y después de entrenar",
    intro:
      "Una banana puede ser una buena colación, pero no resuelve por sí sola la alimentación de un día de entrenamiento. El horario, la exigencia y la próxima sesión cambian el plan.",
    facts: [
      ["3–4 horas antes:", "puede haber tiempo para una comida completa."],
      ["Durante:", "los esfuerzos prolongados pueden requerir carbohidratos."],
      [
        "Después:",
        "la recuperación depende también de cuándo volvés a entrenar.",
      ],
    ],
    panel: "violet",
    panelWord: "Alimentación",
    article: {
      title: "Qué comer antes, durante y después de entrenar",
      blocks: [
        {
          type: "p",
          text: "La alimentación deportiva no consiste en repetir el mismo menú todos los días. Para elegir qué comer, primero respondé tres preguntas: ¿a qué hora empieza la actividad?, ¿cuánto y con qué intensidad vas a entrenar?, ¿cuándo será la siguiente sesión?",
        },
        {
          type: "p",
          text: "Los carbohidratos ayudan a disponer de energía para el trabajo muscular, especialmente cuando el esfuerzo es intenso o prolongado. Las proteínas aportan aminoácidos necesarios para mantener y reparar tejidos. También importa comer suficiente a lo largo del día: ninguna colación aislada compensa una alimentación que habitualmente queda corta para la carga de entrenamiento.",
        },
        { type: "h", text: "Si faltan 3 o 4 horas para empezar" },
        {
          type: "p",
          text: "Generalmente hay tiempo para una comida principal. Puede incluir una fuente de carbohidratos —fideos, arroz, papa, pan o una combinación de ellos— y una fuente de proteína, como pollo, carne, huevo, lácteos o legumbres. Ajustá las verduras, las grasas y el tamaño de la comida según lo que tolerás antes de moverte.",
        },
        {
          type: "example",
          lead: "Ejemplo de comida:",
          text: "fideos con pollo y una fruta. Otra posibilidad es arroz con huevo y pan. Son ejemplos de composición, no porciones que todo deportista deba copiar.",
        },
        {
          type: "football",
          text: "Para un partido de fútbol competitivo, el consenso de expertos de UEFA propone una comida rica en carbohidratos unas 3–4 horas antes del inicio. Presenta un rango orientativo de 1–3 gramos de carbohidratos por kilogramo de peso corporal para ese momento. Es un rango amplio que un profesional ajusta según el jugador, la comida previa, el horario y la tolerancia; no es una obligación de comer el extremo superior.",
        },
        { type: "h", text: "Si falta aproximadamente 1 hora" },
        {
          type: "p",
          text: "Una comida abundante puede causar pesadez. Si necesitás comer, elegí una colación pequeña que hayas probado: por ejemplo, una banana, pan con mermelada, una fruta con yogur o una opción equivalente que toleres bien.",
        },
        {
          type: "p",
          text: "Si almorzaste hace poco y llegás con energía, tal vez no necesites agregar una colación. Si pasaron muchas horas desde la última comida, la situación es distinta. No hay que indicar la misma banana a todos sin preguntar qué comieron antes.",
        },
        {
          type: "p",
          text: "Los alimentos con mucha grasa o fibra cerca de un esfuerzo intenso pueden producir molestias en algunas personas. Eso no los convierte en alimentos “malos”: se trata de elegir el momento y la cantidad adecuados para cada caso.",
        },
        {
          type: "p",
          text: "Probá estas estrategias en entrenamientos. El día del partido no es el momento para estrenar un alimento, una bebida o un gel.",
        },
        { type: "h", text: "Durante el ejercicio" },
        {
          type: "p",
          text: "En una sesión corta y de baja exigencia, generalmente no hace falta comer mientras entrenás. En un partido o actividad prolongada e intensa, consumir carbohidratos puede ayudar a mantener su disponibilidad durante el esfuerzo.",
        },
        {
          type: "football",
          text: "Para fútbol competitivo, UEFA plantea como referencia unos 30–60 gramos de carbohidratos por hora durante el partido. No significa que toda práctica requiera esa cantidad. Las pausas, el tiempo efectivo de juego, lo ingerido antes y la tolerancia digestiva condicionan cómo aplicarla.",
        },
        {
          type: "p",
          text: "Una bebida deportiva, un gel o un alimento fácil de transportar pueden aportar carbohidratos. Ninguno es obligatorio por su nombre comercial: se selecciona una opción cuando existe una necesidad concreta y se comprueba durante los entrenamientos que el deportista la tolera.",
        },
        { type: "h", text: "Después del entrenamiento" },
        {
          type: "p",
          text: "Una comida con carbohidratos y proteínas contribuye a reponer energía y a la recuperación muscular. También hay que considerar los líquidos perdidos.",
        },
        {
          type: "example",
          lead: "Ejemplos posibles:",
          items: [
            "Arroz o papa con pollo y verduras.",
            "Un sándwich de huevo o carne acompañado de fruta.",
            "Yogur con cereales y fruta como solución práctica hasta la siguiente comida principal.",
          ],
        },
        {
          type: "p",
          text: "La urgencia depende del calendario. Si hay una segunda sesión intensa en pocas horas, prepará con anticipación qué vas a comer y beber al terminar la primera. Hay menos tiempo disponible para reponer las reservas utilizadas.",
        },
        {
          type: "p",
          text: "Si la próxima sesión será al día siguiente y podés realizar tus comidas normalmente, no necesitás obsesionarte con una supuesta “ventana” de 30 minutos. La ingesta suficiente de energía, carbohidratos y proteínas durante el resto del día sigue siendo fundamental.",
        },
        { type: "h", text: "Dos ejemplos de organización" },
        {
          type: "cases",
          items: [
            {
              label: "Entrenamiento temprano",
              text: "Una persona que comienza a las 7:00 y no tolera un desayuno grande puede probar una colación sencilla antes, llevar agua y completar el desayuno después. Hay que considerar lo que cenó la noche anterior y la intensidad de la sesión.",
            },
            {
              label: "Entrenamiento por la tarde",
              text: "Una persona que entrena a las 18:00 puede llegar bien preparada mediante un almuerzo suficiente y, si lo necesita, una merienda que tolere bien. Después puede cenar una comida que contribuya a su recuperación.",
            },
          ],
        },
        {
          type: "p",
          text: "Los ejemplos muestran cómo razonar. No son planes alimentarios personalizados.",
        },
        {
          type: "remember",
          title: "Para recordar",
          text: "Una banana puede ser una colación útil. No reemplaza automáticamente una comida previa a un partido ni toda la recuperación. La mejor elección depende de lo que hiciste antes, lo que vas a entrenar y cuándo volvés a hacerlo.",
        },
      ],
      sources: [
        {
          label: "UEFA expert group statement on nutrition in elite football",
          citation:
            "Collins J, Maughan RJ, Gleeson M, et al. Br J Sports Med. 2021;55(8):416.",
          url: "https://pubmed.ncbi.nlm.nih.gov/33097528/",
        },
        {
          label:
            "Position of the Academy of Nutrition and Dietetics, Dietitians of Canada, and ACSM: Nutrition and Athletic Performance",
          citation:
            "Thomas DT, Erdman KA, Burke LM. J Acad Nutr Diet. 2016;116(3):501-528.",
          url: "https://pubmed.ncbi.nlm.nih.gov/26920240/",
        },
        {
          label:
            "Fueling Soccer Players: revisión de la evidencia específica para fútbol",
          citation:
            "Foo WL, Tester E, Close GL, Areta JL, Morton JP. Sports Med. 2025;55(6):1467-1485.",
          url: "https://pubmed.ncbi.nlm.nih.gov/40261535/",
        },
        {
          label: "Metaanálisis sobre el momento de consumo de proteína",
          citation: "Casuso RA, Goossens L. Nutrients. 2025;17(13):2070.",
          url: "https://pubmed.ncbi.nlm.nih.gov/40647175/",
        },
      ],
    },
  },
  {
    id: "hidratacion",
    num: "02",
    category: "Hidratación",
    title: "Cómo saber cuánto líquido necesitás",
    intro:
      "Dos personas pueden hacer el mismo entrenamiento y perder cantidades distintas de líquido. El calor, la intensidad y el acceso al agua cambian la estrategia.",
    facts: [
      ["Antes:", "asegurá oportunidades para beber."],
      ["Durante:", "el agua suele alcanzar en sesiones breves."],
      [
        "Después:",
        "reponé según las pérdidas y el tiempo hasta la próxima sesión.",
      ],
    ],
    image: {
      src: "/nutrite-al-max-info-hidratacion.webp",
      alt: "Mesa de hidratación junto a la cancha durante un entrenamiento, con botellas de agua, bebidas, un mate y un termo",
      position: "70% 55%",
    },
    panel: "ink",
    panelWord: "Hidratación",
    article: {
      title: "Hidratación: cómo pasar del consejo general a un plan útil",
      blocks: [
        {
          type: "p",
          text: "La cantidad de líquido que una persona pierde por sudor depende del ambiente, la intensidad, la duración del ejercicio, la ropa y sus características individuales. Además, una misma persona puede transpirar de manera diferente en dos días de entrenamiento. Por eso, “tomá dos litros” no describe lo que necesita durante cada sesión.",
        },
        { type: "h", text: "Antes de empezar" },
        {
          type: "p",
          text: "Asegurate de contar con agua u otra bebida apropiada y de saber cuándo podrás tomarla. En un partido de fútbol, las oportunidades para beber pueden estar limitadas a la entrada en calor, determinadas pausas y el entretiempo.",
        },
        {
          type: "p",
          text: "Comé y bebé de manera habitual durante las horas previas. Si sabés que llegás con sed o que entrenarás bajo mucho calor, organizá el acceso a líquidos con anticipación. Tomar una gran cantidad de golpe justo antes de empezar puede resultar incómodo.",
        },
        { type: "h", text: "Durante: cuándo alcanza el agua" },
        {
          type: "p",
          text: "En una práctica habitual de menos de una hora, el agua generalmente es suficiente. No toda actividad exige electrolitos, bebidas deportivas o una pauta rígida de mililitros por hora.",
        },
        {
          type: "p",
          text: "En sesiones prolongadas, intensas o bajo el calor, conviene planificar mejor. La sed es una señal útil, pero en deportes de equipo la oportunidad de beber no siempre coincide con el momento en que aparece. La estrategia debe adaptarse a las pausas disponibles y a la experiencia previa del deportista.",
        },
        {
          type: "p",
          text: "El objetivo tampoco es beber todo lo posible. Tomar líquido por encima de las pérdidas, especialmente durante actividades prolongadas, puede resultar peligroso. Una señal de revisión del plan es terminar pesando más que al comenzar por haber bebido demasiado.",
        },
        { type: "h", text: "¿Cuándo puede servir una bebida deportiva?" },
        {
          type: "p",
          text: "Estas bebidas pueden aportar tres cosas: líquido, carbohidratos y sodio. En una sesión prolongada o exigente, los carbohidratos pueden ayudar a cubrir parte de la demanda energética; cuando las pérdidas de sudor son importantes, el sodio también puede ser relevante.",
        },
        {
          type: "p",
          text: "Su utilidad depende del contexto. Una bebida deportiva no es obligatoria para una práctica corta ni sustituye una alimentación adecuada. No agregues suplementos de sal ni recomiendes grandes cantidades de sodio de forma universal.",
        },
        { type: "h", text: "Cómo estimar las pérdidas por sudor" },
        {
          type: "p",
          text: "Podés hacer una prueba en una sesión representativa. Registrá el peso corporal justo antes y después, con ropa y condiciones comparables; anotá cuánto bebiste y si orinaste durante el ejercicio.",
        },
        { type: "p", text: "Usá esta aproximación:" },
        {
          type: "formula",
          title: "Pérdida estimada de sudor, en litros =",
          terms: [
            "peso antes, en kg",
            "− peso después, en kg",
            "+ litros bebidos",
            "− litros de orina durante la sesión.",
          ],
        },
        {
          type: "example",
          lead: "Ejemplo:",
          items: [
            "Peso antes: 70,0 kg.",
            "Peso después: 69,2 kg.",
            "Líquido bebido: 0,6 L.",
            "Orina durante la sesión: ninguna.",
          ],
          after: [
            "La diferencia de peso es de 0,8 kg. Al sumarle los 0,6 L bebidos, la pérdida estimada por sudor es de 1,4 L. Si el entrenamiento duró 90 minutos, el promedio aproximado fue de 0,9 L por hora.",
          ],
        },
        {
          type: "p",
          text: "Ese resultado ayuda a conocer cómo respondió la persona en esas condiciones. No significa que deba beber exactamente 0,9 L por hora en cualquier clima ni que tenga que reemplazar todo el sudor mientras juega. No hace falta realizar este cálculo después de cada práctica.",
        },
        { type: "h", text: "Después de la actividad" },
        {
          type: "p",
          text: "Volvé a beber y a comer. Las comidas habituales también aportan agua y sodio. Si existe otra sesión en pocas horas, planificá la reposición con más atención. Si hay suficiente tiempo y podés realizar comidas y bebidas habituales, la recuperación puede distribuirse a lo largo de varias horas.",
        },
        {
          type: "p",
          text: "Una pérdida aguda de peso durante una práctica puede ayudar a estimar líquidos perdidos. No debe interpretarse como una pérdida de grasa corporal.",
        },
        {
          type: "remember",
          title: "Para recordar",
          text: "Una práctica corta en clima templado y un partido bajo el sol necesitan planes diferentes. Empezá por asegurar acceso a líquidos, observar las condiciones y conocer tu respuesta individual. Después definí si el agua alcanza o si conviene una estrategia más precisa.",
        },
      ],
      sources: [
        {
          label:
            "National Athletic Trainers’ Association: Fluid Replacement for the Physically Active",
          citation:
            "McDermott BP, Anderson SA, Armstrong LE, et al. J Athl Train. 2017;52(9):877-895.",
          url: "https://pubmed.ncbi.nlm.nih.gov/28985128/",
        },
        {
          label: "UEFA expert group statement on nutrition in elite football",
          citation:
            "Collins J, Maughan RJ, Gleeson M, et al. Br J Sports Med. 2021;55(8):416.",
          url: "https://pubmed.ncbi.nlm.nih.gov/33097528/",
        },
        {
          label:
            "Revisión sistemática sobre bebidas con carbohidratos y electrolitos para rehidratación",
          citation:
            "Borra V, De Brier N, Berry DC, et al. J Athl Train. 2025;60(1):34-54.",
          url: "https://pubmed.ncbi.nlm.nih.gov/38116803/",
        },
      ],
    },
  },
  {
    id: "antropometria",
    num: "03",
    category: "Antropometría",
    title: "Qué te dicen el peso, los pliegues y los perímetros",
    intro:
      "Las mediciones permiten seguir tendencias, pero un número aislado no dice cuánto músculo ganaste ni predice cómo vas a rendir.",
    facts: [
      ["Peso:", "muestra la masa corporal total."],
      ["Pliegues:", "registran espesor en sitios específicos."],
      ["Perímetros:", "muestran circunferencias, no kilos de músculo."],
    ],
    image: {
      src: "/nutrite-al-max-info-antropometria.webp",
      alt: "Manos de Leandro Horaiki midiendo un pliegue cutáneo con un plicómetro en la espalda de un deportista, durante una evaluación antropométrica",
      position: "center 72%",
    },
    panel: "violet",
    panelWord: "Antropometría",
    article: {
      title: "Antropometría: qué se mide y qué se puede concluir",
      blocks: [
        {
          type: "p",
          text: "La antropometría reúne mediciones de las dimensiones corporales. Según el objetivo de una evaluación, puede incluir peso, estatura, pliegues cutáneos, perímetros y diámetros óseos. Un protocolo estandarizado y un profesional entrenado ayudan a que los controles sean comparables.",
        },
        {
          type: "p",
          text: "Medir e interpretar son tareas distintas. Una medida puede ser técnicamente correcta y, aun así, no explicar por sí sola qué ocurrió con la alimentación, la salud o el rendimiento.",
        },
        { type: "h", text: "Peso corporal" },
        {
          type: "p",
          text: "El peso expresa la masa total registrada en ese momento. Puede variar por líquidos, comidas recientes y otros factores. Si baja después de una práctica calurosa, gran parte de esa diferencia inmediata puede corresponder a líquido perdido; no significa que se haya perdido esa cantidad de grasa.",
        },
        {
          type: "p",
          text: "Dos personas con el mismo peso pueden tener características corporales diferentes. Y una persona puede mantener un peso parecido mientras cambian otras mediciones.",
        },
        { type: "h", text: "Pliegues cutáneos" },
        {
          type: "p",
          text: "Un pliegue registra el espesor de piel y tejido subcutáneo en un lugar definido. La suma de varios pliegues permite seguir la evolución de esas mediciones, siempre que se utilicen los mismos sitios y una técnica comparable.",
        },
        {
          type: "p",
          text: "La suma de pliegues no es directamente un porcentaje de grasa corporal. Para obtener un porcentaje hay que aplicar una ecuación que introduce supuestos y error. Distintas ecuaciones pueden producir estimaciones diferentes para el mismo deportista; por eso es fundamental informar qué se midió realmente y qué se estimó.",
        },
        { type: "h", text: "Perímetros" },
        {
          type: "p",
          text: "Un perímetro es la circunferencia de una zona, como brazo, muslo o cintura. Aporta otra dimensión al seguimiento, pero sus cambios tienen varias explicaciones posibles.",
        },
        {
          type: "p",
          text: "Por ejemplo, un brazo de mayor perímetro no demuestra por sí solo que se ganó una cantidad determinada de músculo. Para interpretar el cambio se consideran otras mediciones, el entrenamiento, el tiempo transcurrido y las condiciones del control.",
        },
        { type: "h", text: "Cómo comparar dos controles" },
        {
          type: "list",
          lead: "Una comparación útil requiere:",
          items: [
            "El mismo protocolo y los mismos sitios de medición.",
            "Condiciones razonablemente comparables.",
            "Considerar el error técnico del evaluador y del método.",
            "Tiempo suficiente para que el cambio esperado pueda distinguirse de variaciones normales.",
            "Interpretar los datos junto con alimentación, entrenamiento, recuperación, salud y objetivos.",
          ],
        },
        {
          type: "example",
          lead: "Ejemplo:",
          text: "un deportista mantiene un peso similar y en el siguiente control presenta una suma de pliegues menor. Puede haber una tendencia relevante. Antes de concluirlo, hay que revisar si la diferencia supera el error de medición. Ese resultado NO permite afirmar automáticamente cuántos kilogramos de músculo ganó.",
        },
        { type: "h", text: "Para qué se realiza una evaluación" },
        {
          type: "p",
          text: "Antes de medir debe existir una pregunta concreta: qué información se necesita y cómo podría utilizarse para cuidar la salud o ajustar una intervención. Medir con mucha frecuencia no garantiza mejores decisiones.",
        },
        {
          type: "p",
          text: "Los resultados pertenecen a la persona evaluada. Se explican en privado y no se convierten en rankings públicos ni en metas corporales idénticas para todo un equipo. Una cifra de pliegues no califica el compromiso de un deportista.",
        },
        {
          type: "p",
          text: "En menores de 18 años se necesita especial prudencia. El consenso del Comité Olímpico Internacional recomienda reservar las evaluaciones de composición corporal a motivos médicos en ese grupo. El crecimiento, la disponibilidad de energía y la relación del deportista con su cuerpo deben recibir atención prioritaria.",
        },
        {
          type: "remember",
          title: "Para recordar",
          text: "El peso, los pliegues y los perímetros responden preguntas distintas. El valor de la antropometría está en medir con precisión, reconocer los límites de cada dato e interpretarlo dentro de un seguimiento individual. Ningún número aislado es un diagnóstico de salud ni una predicción de rendimiento.",
        },
      ],
      sources: [
        {
          label: "Recomendaciones del COI sobre composición corporal en el deporte",
          citation:
            "Mathisen TF, Ackland T, Burke LM, et al. Br J Sports Med. 2023;57(17):1148-1158.",
          url: "https://pubmed.ncbi.nlm.nih.gov/37752006/",
        },
        {
          label:
            "Consenso del COI sobre deficiencia energética relativa en el deporte",
          citation:
            "Mountjoy M, Ackerman KE, Bailey DM, et al. Br J Sports Med. 2023;57(17):1073-1097.",
          url: "https://pubmed.ncbi.nlm.nih.gov/37752011/",
        },
        {
          label: "Revisión sobre métodos de composición corporal en futbolistas",
          citation:
            "Sebastiá-Rico J, Soriano JM, González-Gálvez N, Martínez-Sanz JM. Nutrients. 2023;15(5):1160.",
          url: "https://pubmed.ncbi.nlm.nih.gov/36904159/",
        },
        {
          label: "ISAK: acreditación y precisión de las mediciones",
          citation:
            "International Society for the Advancement of Kinanthropometry. Accreditation scheme.",
          url: "https://www.isak.global/FormationSystem/AccreditationScheme",
        },
      ],
    },
  },
];
