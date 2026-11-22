/**
 * Centralized trilingual CMS data (WordPress + ACF Pro / Polylang-ready).
 * All copy, artworks, and workshop formats live separately from HTML markup.
 */
export const CMS_CONTENT = {
  hero: {
    eyebrow: {
      ua: 'Авторська студія кераміки',
      nl: 'Hedendaagse keramiekstudio',
      en: 'Contemporary Ceramics Studio',
    },
    brandTitle: 'KETMADE',
    slogan: {
      ua: 'Тиха скульптура живого каменю, тепла глина та рух руки без поспіху.',
      nl: 'Stille sculptuur van levende klei, gevormd door warmte, ritme en aandacht.',
      en: 'Quiet sculpture shaped from raw earth, stoneware patience, and unhurried hands.',
    },
    subcaption: {
      ua: 'Утрехт · Камерна кераміка та майстер-класи',
      nl: 'Utrecht · Handgevormd steengoed & workshops',
      en: 'Utrecht · Handbuilt Stoneware & Studio Sessions',
    },
    ctaLabel: {
      ua: 'Дивитись галерею',
      nl: 'Bekijk galerij',
      en: 'Explore Gallery',
    },
    marqueeItems: [
      { ua: 'Ручне ліплення', nl: 'Handopbouw', en: 'Handbuilt Stoneware' },
      { ua: 'Жива теракота', nl: 'Ruwe terracotta', en: 'Raw Terracotta' },
      { ua: 'Випал 1240°C', nl: 'Gestookt op 1240°C', en: 'Fired at 1240°C' },
      { ua: 'Авторський посуд', nl: 'Tactiel servies', en: 'Tactile Tableware' },
      { ua: 'Дитяча студія', nl: 'Kinderatelier', en: 'Kids Clay Studio' },
      { ua: 'Утрехт · ketmade.com', nl: 'Utrecht · ketmade.com', en: 'Utrecht · ketmade.com' },
    ],
    primaryImage: {
      src: '/src/assets/images/ketmade_hero_vessels_1795345629789.jpg',
      alt: {
        ua: 'Колекція авторських керамічних ваз із теракоти та білого шамоту на травертиновому столі',
        nl: 'Collectie handgevormde keramische vazen van terracotta en mat wit steengoed op travertijn',
        en: 'Collection of handbuilt terracotta, warm sand, and matte white stoneware vessels on a travertine plinth',
      },
    },
    secondaryImage: {
      src: '/src/assets/images/ketmade_vase_terracotta_1795345629198.jpg',
      alt: {
        ua: 'Скульптурна теракотова ваза ручного ліплення з фактурною поверхнею',
        nl: 'Sculpturale terracotta vaas met organische rand en tastbare textuur',
        en: 'Tall hand-coiled terracotta vessel with organic undulating rim',
      },
    },
    studioLocation: {
      ua: 'Студія в Утрехті, Нідерланди',
      nl: 'Atelier in Utrecht, Nederland',
      en: 'Studio in Utrecht, Netherlands',
    },
    disciplineNote: {
      ua: 'Ручне ліплення · Високотемпературний випал',
      nl: 'Handopbouw · Hooggebakken steengoed',
      en: 'Handbuilding · High-fired stoneware',
    },
  },

  about: {
    sectionTitle: {
      ua: 'Про художницю',
      nl: 'Over de kunstenaar',
      en: 'About the Artist',
    },
    leadStatement: {
      ua: 'Мене звати Катрін. У кожній формі я шукаю не ідеальну симетрію, а чесний слід дотику, памʼять землі та спокій простору.',
      nl: 'Ik ben Katrin. In elk werk zoek ik geen strakke symmetrie, maar het eerlijke spoor van de hand en de rust van het materiaal.',
      en: 'I am Katrin. In every vessel I search not for mechanical symmetry, but for the quiet trace of human touch and geological memory.',
    },
    biography: [
      {
        ua: 'Шлях у кераміці почався з любові до архітектури тиші й текстур природи — обвітреного каменю, прибережного піску та теплої теракоти. Переїхавши до Нідерландів, я створила камерну студію KETMADE, де поєдную скульптурні обʼєкти для інтерʼєрів із щоденним авторським посудом.',
        nl: 'Mijn pad in keramiek begon vanuit een fascinatie voor stille architectuur en natuurlijke texturen: verweerde steen, kustzand en warme terracotta. In Nederland richtte ik studio KETMADE op als een intieme plek voor sculpturale objecten en tactiel servies.',
        en: 'My journey with clay began through an affinity for quiet architecture and raw natural textures—weathered limestone, coastal sand, and warm terracotta. In the Netherlands, I founded KETMADE as an intimate studio bridging sculptural interior pieces and tactile everyday tableware.',
      },
      {
        ua: 'Більшість робіт народжуються у техніці повільного джгутового та пластичного ліплення без гончарного кола або на низьких обертах. Я залишаю глину частково відкритою, без глянцю, щоб світло мʼяко ковзало по нерівностях і шамоту.',
        nl: 'De meeste stukken ontstaan via langzame opbouwtechnieken met rollen en platen, soms aangevuld op de draaischijf. Ik laat een deel van de klei ongeglazuurd, zodat het licht zacht langs de korrelige structuur beweegt.',
        en: 'Most works emerge through slow coiling and slab-building, occasionally meeting the wheel for quiet refinement. I often leave raw stoneware unglazed on the exterior so daylight catches every grain of grog and ridge of the hand.',
      },
    ],
    philosophyTitle: {
      ua: 'Авторський підхід',
      nl: 'Werkwijze & filosofie',
      en: 'Studio Philosophy',
    },
    philosophyText: {
      ua: 'Кожна серія ліпиться невеликими тиражами або в єдиному екземплярі. Маленькі недосконалості не приховуються — саме вони роблять предмет живим у щоденному ритуалі.',
      nl: 'Elk werk wordt in kleine series of als uniek object gemaakt. Subtiele onregelmatigheden blijven zichtbaar, omdat juist daarin de warmte van handwerk schuilt.',
      en: 'Every piece is built either as a singular work or in small, numbered runs. Subtle irregularities remain visible—they are where the warmth and presence of handwork live.',
    },
    portrait: {
      src: '/src/assets/images/ketmade_artist_katrin_1795345628751.jpg',
      alt: {
        ua: 'Художниця Катрін працює з глиною у світлій керамічній майстерні KETMADE',
        nl: 'Keramiste Katrin aan het werk met klei in haar door daglicht verlichte atelier KETMADE',
        en: 'Ceramic artist Katrin shaping stoneware clay inside the sunlit KETMADE studio',
      },
    },
    craftDetails: [
      {
        stepNumber: '01',
        label: { ua: 'Матеріали', nl: 'Materialen', en: 'Raw Clay' },
        title: {
          ua: 'Шамот, теракота і природні мінерали',
          nl: 'Chamotte, terracotta & mineralen',
          en: 'Grogged Stoneware & Terracotta',
        },
        value: {
          ua: 'Працюю з німецьким та французьким шамотом різної зернистості, червоною теракотою та авторськими поливами на основі деревного попелу й оксидів заліза.',
          nl: 'Ik werk met Duitse en Franse chamotteklei in diverse korrelgroottes, warme terracotta en eigen glazuren op basis van houtas en ijzeroxide.',
          en: 'Working with European grogged stoneware, deep red terracotta, and studio-mixed mineral glazes derived from wood ash and raw iron oxides.',
        },
      },
      {
        stepNumber: '02',
        label: { ua: 'Техніка', nl: 'Techniek', en: 'Handbuilding' },
        title: {
          ua: 'Повільне джгутове й пластове ліплення',
          nl: 'Langzame rol- en plaatopbouw',
          en: 'Slow Coiling & Slab Architecture',
        },
        value: {
          ua: 'Кожна велика форма будується від 4 до 7 днів шарами, щоб глина встигла набрати внутрішню стійкість і зберегти дихання фактури.',
          nl: 'Een groter sculpturaal object wordt in 4 tot 7 dagen laag voor laag opgebouwd, zodat de klei zijn natuurlijke spanning en textuur behoudt.',
          en: 'Large sculptural vessels grow layer by layer over 4 to 7 days, allowing each clay wall to settle naturally while preserving the cadence of every hand-pressed ridge.',
        },
      },
      {
        stepNumber: '03',
        label: { ua: 'Випал', nl: 'Stookproces', en: 'Kiln Firing' },
        title: {
          ua: 'Подвійний випал до 1240°C',
          nl: 'Tweemaal gestookt tot 1240°C',
          en: 'Double Firing up to 1240°C',
        },
        value: {
          ua: 'Утильний випал закріплює форму, а високий поливʼяний випал при 1240°C спікає глину до камʼяної міцності, водостійкості та глибоких земляних відтінків.',
          nl: 'Na de biscuitstook volgt de hoge glazuurstook tot 1240°C, waardoor het steengoed volledig dicht, duurzaam en waterdicht wordt.',
          en: 'Bisque firing sets the raw silhouette before a 1240°C high-fire vitrifies the clay body into dense, resonant, waterproof stoneware with matte earth tones.',
        },
      },
    ],
  },

  galleryItems: [
    {
      id: 'work-terracotta-monolith',
      slug: 'terracotta-coil-monolith',
      category: 'sculptural',
      title: {
        ua: 'Теракотовий моноліт I',
        nl: 'Terracotta Monoliet I',
        en: 'Terracotta Coil Monolith I',
      },
      description: {
        ua: 'Скульптурна ваза, вибудувана вручну з товстих теракотових джгутів. Хвилястий верхній край нагадує зріз вітрової скелі.',
        nl: 'Sculpturale vaas opgebouwd uit dikke handgerolde terracotta strengen met een vloeiende, organische rand.',
        en: 'Hand-coiled sculptural vessel built slowly over five days from coarse red terracotta, crowned with an organic wind-carved rim.',
      },
      clayAndGlaze: {
        ua: 'Грубозерниста теракота, неглазурований зовнішній шар',
        nl: 'Grove terracotta klei, ongeglazuurd buitenoppervlak',
        en: 'Coarse grogged terracotta, raw unglazed exterior',
      },
      dimensionsCm: '42 × 25 × 24 cm',
      year: '2026',
      imageSrc: '/src/assets/images/ketmade_vase_terracotta_1795345629198.jpg',
      imageAlt: {
        ua: 'Висока теракотова ваза ручного ліплення на камʼяному постаменті',
        nl: 'Hoge handgemaakte terracotta vaas op een natuurstenen sokkel',
        en: 'Tall hand-coiled sculptural terracotta vase on a pale stone pedestal',
      },
      gridVariant: 'tall',
      woocommerceMeta: { sku: 'KM-SC-001', priceEur: 480, availability: 'unique' },
    },
    {
      id: 'work-twin-arch',
      slug: 'twin-arch-equilibrium',
      category: 'organic',
      title: {
        ua: 'Рівновага двох арок',
        nl: 'Evenwicht van Twee Bogen',
        en: 'Twin Arch Equilibrium',
      },
      description: {
        ua: 'Абстрактний керамічний обʼєкт із переплетеними арками та контрастним покриттям: копчена умбра зустрічається з попелястою поливою.',
        nl: 'Abstract keramisch object met verweven bogen in gerookt omber en mat kalkglazuur.',
        en: 'Contemporary sculptural vessel where smoked umber clay meets warm limestone ash glaze across two interlocking hand-shaped arches.',
      },
      clayAndGlaze: {
        ua: 'Темна камʼяна маса, попеляста полива',
        nl: 'Donker steengoed, mineraal asglazuur',
        en: 'Dark stoneware, wood-ash glaze, iron oxide',
      },
      dimensionsCm: '31 × 26 × 19 cm',
      year: '2026',
      imageSrc: '/src/assets/images/ketmade_sculpture_form_1795345629128.jpg',
      imageAlt: {
        ua: 'Сучасна абстрактна керамічна скульптура з двома арками',
        nl: 'Moderne abstracte keramische sculptuur met dubbele boogvorm',
        en: 'Abstract twin-arch ceramic sculpture in smoked umber and warm limestone glaze',
      },
      gridVariant: 'square',
      woocommerceMeta: { sku: 'KM-OR-004', priceEur: 540, availability: 'unique' },
    },
    {
      id: 'work-morning-tableware',
      slug: 'morning-linen-tableware',
      category: 'tableware',
      title: {
        ua: 'Ранковий сервіз на льоні',
        nl: 'Ochtendservies op Linnen',
        en: 'Morning Linen Tableware',
      },
      description: {
        ua: 'Камерний набір для неспішних сніданків: глибокі піали у крапку, тарілки з живим краєм і глечик теплої охряної поливи.',
        nl: 'Intieme serviesset voor rustige ochtenden: gespikkelde kommen, borden met organische rand en een kan in warm oker.',
        en: 'Tactile daily tableware pairing speckled milk-white stoneware bowls and soft-rimmed plates with a warm iron-ochre pouring pitcher.',
      },
      clayAndGlaze: {
        ua: 'Крапчастий молочний шамот, сатинова полива',
        nl: 'Gespikkeld roomwit steengoed, satijnglazuur',
        en: 'Speckled cream stoneware, satin milk & amber glazes',
      },
      dimensionsCm: 'Set of 7 · Ø 12–27 cm',
      year: '2026',
      imageSrc: '/src/assets/images/ketmade_tableware_linen_1795345630544.jpg',
      imageAlt: {
        ua: 'Набір авторського керамічного посуду на натуральній лляній скатертині',
        nl: 'Handgemaakt keramisch servies op ongebleekt linnen tafelkleed',
        en: 'Speckled stoneware bowls, plates, and earthy brown pitcher arranged on raw linen',
      },
      gridVariant: 'wide',
      woocommerceMeta: { sku: 'KM-TW-012', priceEur: 320, availability: 'edition' },
    },
    {
      id: 'work-basalt-amphora',
      slug: 'sand-amphora-basalt',
      category: 'sculptural',
      title: {
        ua: 'Пісочна амфора на базальті',
        nl: 'Zandamfora op Basalt',
        en: 'Scraped Sand Amphora',
      },
      description: {
        ua: 'Витягнута амфора з двома тонкими ручками, сформована зі світлого пісочного шамоту з вертикальним фактурним штрихуванням.',
        nl: 'Slanke handgevormde amfora in zandkleurig steengoed met verticale schraapstructuur en organische oren.',
        en: 'Elongated handbuilt amphora in pale sand stoneware with vertical rib-scraped relief and fluid ribbon handles.',
      },
      clayAndGlaze: {
        ua: 'Світлий пісочний шамот, димний випал',
        nl: 'Zandkleurige chamotteklei, lichte rooknuance',
        en: 'Pale sand grog stoneware, subtle flash-fired surface',
      },
      dimensionsCm: '54 × 24 × 22 cm',
      year: '2026',
      imageSrc: '/src/assets/images/ketmade_amphora_sand_1795346184380.jpg',
      imageAlt: {
        ua: 'Висока пісочна керамічна амфора з ручками на чорному базальтовому постаменті',
        nl: 'Hoge zandkleurige keramische amfora op een donkere basalt sokkel',
        en: 'Tall handbuilt sand stoneware amphora resting on a dark basalt gallery plinth',
      },
      gridVariant: 'tall',
      woocommerceMeta: { sku: 'KM-SC-014', priceEur: 690, availability: 'unique' },
    },
    {
      id: 'work-tea-ceremony',
      slug: 'quiet-tea-ritual-set',
      category: 'tableware',
      title: {
        ua: 'Чайний ритуал у попелі',
        nl: 'Theeritueel in Asglazuur',
        en: 'Ash-Glaze Tea Ritual',
      },
      description: {
        ua: 'Заварник ручного ліплення та дві чаші тяван із живим переходом деревно-попелястої поливи по дубовій текстурі глини.',
        nl: 'Handgevormde theepot en twee chawan-kommetjes met vloeiend houtasglazuur op een ruwe eikenhouten tafel.',
        en: 'Hand-pinched stoneware teapot paired with two mottled wood-ash glaze chawan bowls crafted for slow morning tea rituals.',
      },
      clayAndGlaze: {
        ua: 'Сірий шамот, японська попеляста полива шіно',
        nl: 'Grijs steengoed, shino- en houtasglazuur',
        en: 'Speckled ochre clay, natural wood-ash & shino glaze',
      },
      dimensionsCm: 'Teapot 14 cm · Cups Ø 9 cm',
      year: '2026',
      imageSrc: '/src/assets/images/ketmade_tea_ceremony_1795346185163.jpg',
      imageAlt: {
        ua: 'Керамічний заварник і дві піали на деревʼяному столі біля вікна',
        nl: 'Keramische theepot en twee theekommen op verweerd eikenhout',
        en: 'Handcrafted ceramic teapot and two mottled ash-glaze tea bowls on oak wood',
      },
      gridVariant: 'wide',
      woocommerceMeta: { sku: 'KM-TW-018', priceEur: 240, availability: 'edition' },
    },
    {
      id: 'work-bas-relief-wall',
      slug: 'terracotta-bone-wall-relief',
      category: 'organic',
      title: {
        ua: 'Настінний рельєф «Течія»',
        nl: 'Wandreliëf Stroming',
        en: 'Terracotta & Bone Relief',
      },
      description: {
        ua: 'Архітектурне керамічне панно зі стикованих пластів неглазурованої теракоти та кістяної порцелянової маси з глибоким різьбленням.',
        nl: 'Architecturaal wandpaneel van gekerfde terracotta en beenwitte steengoedplaten met ritmische lijnen.',
        en: 'Architectural bas-relief panel composed of interlocking raw terracotta and bone-white stoneware slabs with deep hand-carved grooves.',
      },
      clayAndGlaze: {
        ua: 'Теракота та біла камʼяна маса без поливи',
        nl: 'Ongeglazuurde terracotta en wit steengoed',
        en: 'Raw unglazed terracotta & bone-white stoneware',
      },
      dimensionsCm: '85 × 68 × 5 cm',
      year: '2026',
      imageSrc: '/src/assets/images/ketmade_wall_relief_1795346183471.jpg',
      imageAlt: {
        ua: 'Скульптурне керамічне панно з різьбленими лініями з теракоти та білої глини на стіні',
        nl: 'Keramisch wandreliëf van terracotta en witte klei met uitgesneden golvende lijnen',
        en: 'Contemporary ceramic wall relief made of carved terracotta and white stoneware slabs',
      },
      gridVariant: 'square',
      woocommerceMeta: { sku: 'KM-OR-021', priceEur: 1150, availability: 'unique' },
    },
    {
      id: 'work-smoked-carbon-vessel',
      slug: 'smoked-carbon-vessel',
      category: 'organic',
      title: {
        ua: 'Вугільний камінь II',
        nl: 'Gerookte Steen II',
        en: 'Carbon-Trap Vessel II',
      },
      description: {
        ua: 'Асиметрична скульптурна посудина глибокого вугільного кольору, отриманого методом відновного копчення в тирсі.',
        nl: 'Asymmetrisch sculpturaal object in mat zwart aardewerk, donker gebrand door reductierook.',
        en: 'Asymmetric organic vessel featuring a deep charcoal carbon-trap surface created through post-firing sawdust reduction.',
      },
      clayAndGlaze: {
        ua: 'Чорна шамотна маса, димлення в тирсі',
        nl: 'Zwart chamottesteengoed, zaagselstook',
        en: 'Black grogged stoneware, matte smoked reduction',
      },
      dimensionsCm: '29 × 23 × 21 cm',
      year: '2025',
      imageSrc: '/src/assets/images/ketmade_black_stoneware_1795346184516.jpg',
      imageAlt: {
        ua: 'Чорна фактурна керамічна скульптура на травертиновій полиці',
        nl: 'Mat zwarte keramische sculptuur op een travertijnen plank',
        en: 'Matte smoked black stoneware sculptural vessel on a travertine shelf',
      },
      gridVariant: 'tall',
      woocommerceMeta: { sku: 'KM-OR-015', priceEur: 430, availability: 'unique' },
    },
    {
      id: 'work-pitted-stone-lamp',
      slug: 'pitted-stoneware-lamp',
      category: 'tableware',
      title: {
        ua: 'Світильник «Світло травертину»',
        nl: 'Tafellamp Travertijnlicht',
        en: 'Pitted Stoneware Lamp',
      },
      description: {
        ua: 'Настільна лампа з пористою мінеральною фактурою та лляним абажуром ручної роботи, що дає мʼяке вечірнє світло.',
        nl: 'Handgevormde keramische lampvoet met kraterglazuur en kap van ongebleekt Belgisch linnen.',
        en: 'Handbuilt ceramic table lamp base finished in volcanic pitted cream-sand glaze, paired with an unbleached linen shade.',
      },
      clayAndGlaze: {
        ua: 'Пісочний шамот, кратерна мінеральна полива, льон',
        nl: 'Zandkleurig steengoed, kraterglazuur, Belgisch linnen',
        en: 'Sand stoneware, volcanic crater glaze, raw linen',
      },
      dimensionsCm: '46 × 30 × 30 cm',
      year: '2026',
      imageSrc: '/src/assets/images/ketmade_ceramic_lamp_1795346184662.jpg',
      imageAlt: {
        ua: 'Керамічна настільна лампа з фактурною основою та лляним абажуром на деревʼяному столі',
        nl: 'Keramische tafellamp met ruwe glazuurstructuur en linnen kap naast een raam',
        en: 'Handcrafted pitted stoneware table lamp with linen shade glowing in soft daylight',
      },
      gridVariant: 'wide',
      woocommerceMeta: { sku: 'KM-TW-024', priceEur: 490, availability: 'edition' },
    },
    {
      id: 'work-travertine-series',
      slug: 'travertine-plinth-series',
      category: 'sculptural',
      title: {
        ua: 'Серія «Травертин і Глина»',
        nl: 'Serie Travertijn & Klei',
        en: 'Travertine Plinth Series',
      },
      description: {
        ua: 'Діалог шести форм: від масивного рельєфного кашпо з теракоти до тонкостінних білих та пісочних посудин.',
        nl: 'Een dialoog van zes vormen: van ruw reliëf in terracotta tot verfijnde zand- en melkwitte vazen.',
        en: 'An architectural dialogue of six handbuilt vessels ranging from relief-carved raw terracotta to quiet sand and milk-white stoneware.',
      },
      clayAndGlaze: {
        ua: 'Мікс пісочного шамоту, теракоти та ангоби',
        nl: 'Mix van zandchamotte, terracotta en engobe',
        en: 'Sand grog clay, raw terracotta, matte porcelain slip',
      },
      dimensionsCm: '14–38 cm height',
      year: '2025',
      imageSrc: '/src/assets/images/ketmade_hero_vessels_1795345629789.jpg',
      imageAlt: {
        ua: 'Група шести скульптурних керамічних ваз на травертиновому постаменті',
        nl: 'Ensemble van zes sculpturale keramische vazen op een travertijnen tafel',
        en: 'Six handbuilt ceramic vessels arranged on a pale travertine gallery table',
      },
      gridVariant: 'wide',
      woocommerceMeta: { sku: 'KM-SC-009', priceEur: 1250, availability: 'edition' },
    },
  ],

  workshops: {
    sectionTitle: {
      ua: 'Майстер-класи у студії',
      nl: 'Workshops in het atelier',
      en: 'Ceramic Workshops',
    },
    intro: {
      ua: 'У затишній студії на березі каналу ми відкладаємо екрани й повертаємося до відчуття живої глини. Працюємо невеликими групами, щоб кожен отримав індивідуальну увагу.',
      nl: 'In het lichte atelier leggen we schermen opzij en werken we met aandacht aan ruwe klei. Kleine groepen zorgen voor persoonlijke begeleiding.',
      en: 'Inside our sunlit studio, we step away from screens and return to tactile rhythm. Groups stay intentionally small so everyone shapes at their own pace.',
    },
    processImage: {
      src: '/src/assets/images/ketmade_workshop_hands_1795345629434.jpg',
      alt: {
        ua: 'Руки дорослого та дитини разом ліплять керамічну посудину з глини на деревʼяному столі',
        nl: 'Handen van een volwassene en kind die samen kleirollen vormen aan de werktafel',
        en: 'Adult and child hands coiling natural stoneware clay together on an oak workshop table',
      },
    },
    formats: [
      {
        id: 'adult',
        kicker: {
          ua: 'Для дорослих та початківців',
          nl: 'Voor volwassenen & beginners',
          en: 'Adult & Small-Group Sessions',
        },
        title: {
          ua: 'Повільне ліплення та робота з формою',
          nl: 'Handopbouw & vormstudie',
          en: 'Mindful Handbuilding & Vessel Craft',
        },
        summary: {
          ua: 'За три години ви створите власну вазу, глечик або набір чашок у техніці джгута й пласту. Усі матеріали, два випали та мінеральне глазурування включені.',
          nl: 'Tijdens een sessie van drie uur maak je een eigen vaas, schaal of kopjesset via duim- en roltechniek. Inclusief klei, tweemaal bakken en glazuur.',
          en: 'Across a calm three-hour session, shape your own sculptural vase or morning cup set using coiling and pinch methods. All clay, glazing, and double firing are included.',
        },
        highlights: [
          {
            ua: 'Індивідуальні та камерні групи до 6 учасників',
            nl: 'Kleine groepen tot maximaal 6 deelnemers',
            en: 'Intimate groups of up to 6 guests',
          },
          {
            ua: 'Смачний травʼяний чай, кава та домашня випічка',
            nl: 'Kruidenthee, koffie en huisgemaakt lekkers inbegrepen',
            en: 'Herbal tea, specialty coffee, and quiet studio atmosphere',
          },
          {
            ua: 'Готові вироби за 3–4 тижні після випалу',
            nl: 'Af te halen na 3–4 weken na de glazuurstook',
            en: 'Finished food-safe stoneware ready in 3–4 weeks',
          },
        ],
        scheduleNote: {
          ua: 'Четвер увечері · Субота після обіду · Приватні івенти',
          nl: 'Donderdagavond · Zaterdagmiddag · Privésessies',
          en: 'Thursday Evenings · Saturday Afternoons · Private Events',
        },
        groupSize: {
          ua: 'До 6 осіб · 3 години',
          nl: 'Max. 6 personen · 3 uur',
          en: 'Up to 6 guests · 3 hours',
        },
        inquiryTopic: 'workshop-adult',
        ctaLabel: {
          ua: 'Записатися на заняття',
          nl: 'Vraag workshop aan',
          en: 'Contact for Booking',
        },
      },
      {
        id: 'kids',
        kicker: {
          ua: 'Дитяча студія · Вік 6–12 років',
          nl: 'Kinderatelier · Leeftijd 6–12 jaar',
          en: 'Kids Clay Studio · Ages 6–12',
        },
        title: {
          ua: 'Жива фантазія у глині для дітей',
          nl: 'Speels ontdekken met klei',
          en: 'Playful Tactile Clay for Children',
        },
        summary: {
          ua: 'Окремий теплий формат, де діти розвивають дрібну моторику й уяву без рамок і шаблонів — створюють казкових звірів, мисочки та чарівні підсвічники безпечною природною глиною.',
          nl: 'Een warme, veilige omgeving waar kinderen zonder prestatiedruk fantasiedieren, kommetjes en verhalen boetseren met zachte natuurklei.',
          en: 'A gentle, screen-free creative space where children explore texture and imagination—handbuilding woodland creatures, snack bowls, and keepsakes with safe natural clay.',
        },
        highlights: [
          {
            ua: 'Безпечна натуральна глина та екологічні ангоби',
            nl: '100% kindvriendelijke natuurklei en veilige engobes',
            en: 'Non-toxic natural clay and kid-safe mineral slips',
          },
          {
            ua: 'Можливість сімейних занять «Батьки + Діти»',
            nl: 'Ook beschikbaar als Ouder & Kind zaterdagsessie',
            en: 'Available solo or as Parent & Child Saturday sessions',
          },
          {
            ua: 'Дбайливий випал кожного дитячого шедевру',
            nl: 'Elk kinderwerk wordt zorgvuldig gebakken en geglazuurd',
            en: 'Every young artist’s piece is kiln-fired and glazed to keep',
          },
        ],
        scheduleNote: {
          ua: 'Субота зранку 10:00–12:00 · Творчі дні народження',
          nl: 'Zaterdagochtend 10:00–12:00 · Creatieve kinderfeestjes',
          en: 'Saturday Mornings 10:00–12:00 · Creative Birthdays',
        },
        groupSize: {
          ua: 'До 8 дітей · 2 години',
          nl: 'Max. 8 kinderen · 2 uur',
          en: 'Up to 8 children · 2 hours',
        },
        inquiryTopic: 'workshop-kids',
        ctaLabel: {
          ua: 'Записати дитину',
          nl: 'Boek kindersessie',
          en: 'Book Kids Studio',
        },
      },
    ],
  },

  contact: {
    sectionTitle: {
      ua: 'Контакти та бронювання',
      nl: 'Contact & reservering',
      en: 'Contact & Booking',
    },
    intro: {
      ua: 'Напишіть щодо вільних місць на майстер-класи, придбання готової роботи або індивідуального замовлення для вашого дому.',
      nl: 'Stuur gerust een bericht voor beschikbare workshopdata, een bestaand werk of een persoonlijk ontwerp op maat.',
      en: 'Write to inquire about upcoming workshop dates, acquiring an available piece, or commissioning custom stoneware for your space.',
    },
    studioCity: {
      ua: 'Утрехт, Нідерланди',
      nl: 'Utrecht, Nederland',
      en: 'Utrecht, Netherlands',
    },
    studioAddress: 'Oudegracht Studio 142B, 3511 AZ Utrecht',
    studioHours: {
      ua: 'Чт–Сб · 10:00–18:00 (за попереднім записом)',
      nl: 'Do–Za · 10:00–18:00 (op afspraak)',
      en: 'Thu–Sat · 10:00–18:00 (by appointment)',
    },
    email: 'hello@ketmade.com',
    socials: [
      { name: 'Instagram', href: 'https://instagram.com' },
      { name: 'Pinterest', href: 'https://pinterest.com' },
    ],
  },

  ui: {
    nav: {
      about: { ua: 'Про мене', nl: 'Over mij', en: 'About' },
      gallery: { ua: 'Галерея', nl: 'Galerij', en: 'Gallery' },
      workshops: { ua: 'Майстер-класи', nl: 'Workshops', en: 'Workshops' },
      contact: { ua: 'Контакти', nl: 'Contact', en: 'Contact' },
      bookWorkshop: { ua: 'Записатись', nl: 'Boek workshop', en: 'Book a Workshop' },
      openMenu: { ua: 'Відкрити меню', nl: 'Menu openen', en: 'Open navigation menu' },
      closeMenu: { ua: 'Закрити меню', nl: 'Menu sluiten', en: 'Close navigation menu' },
    },
    gallery: {
      sectionTitle: { ua: 'Вибрані роботи', nl: 'Geselecteerde werken', en: 'Selected Works' },
      intro: {
        ua: 'Архів авторської кераміки: перемикайтесь між експозицією та каталогом індексу для перегляду великої колекції.',
        nl: 'Archief van handgemaakte keramiek: wissel tussen de tentoonstelling en de catalogusindex om de collectie te verkennen.',
        en: 'An expanding archive of ceramic editions and one-of-one vessels. Switch freely between the visual exhibition and the catalog index.',
      },
      filters: {
        all: { ua: 'Усі роботи', nl: 'Alle werken', en: 'All Works' },
        sculptural: { ua: 'Скульптура', nl: 'Sculpturaal', en: 'Sculptural' },
        tableware: { ua: 'Посуд', nl: 'Servies', en: 'Tableware' },
        organic: { ua: 'Органічні форми', nl: 'Organisch', en: 'Organic Forms' },
      },
      viewGrid: { ua: 'Експозиція', nl: 'Raster', en: 'Exhibition' },
      viewIndex: { ua: 'Каталог-індекс', nl: 'Index', en: 'Index' },
      showingLabel: { ua: 'Показано', nl: 'Getoond', en: 'Showing' },
      showMore: { ua: 'Показати ще роботи', nl: 'Meer werken laden', en: 'Load more works' },
      showLess: { ua: 'Згорнути архів', nl: 'Minder tonen', en: 'Show fewer' },
      emptyMessage: {
        ua: 'У цій категорії поки немає експонованих робіт.',
        nl: 'Er zijn momenteel geen werken in deze categorie.',
        en: 'No works are currently exhibited in this category.',
      },
      viewPiece: { ua: 'Розглянути детальніше', nl: 'Bekijk werk', en: 'Inspect work' },
      inquirePiece: {
        ua: 'Запитати про цю роботу',
        nl: 'Informeer naar dit werk',
        en: 'Inquire about this piece',
      },
      previousPiece: { ua: 'Попередня робота', nl: 'Vorig werk', en: 'Previous piece' },
      nextPiece: { ua: 'Наступна робота', nl: 'Volgend werk', en: 'Next piece' },
      closeLightbox: { ua: 'Закрити перегляд', nl: 'Sluiten', en: 'Close viewer' },
      materialLabel: { ua: 'Матеріал', nl: 'Materiaal', en: 'Material' },
      dimensionsLabel: { ua: 'Розмір', nl: 'Afmetingen', en: 'Dimensions' },
      yearLabel: { ua: 'Рік', nl: 'Jaar', en: 'Year' },
      indexColumns: {
        work: { ua: 'Робота', nl: 'Werk', en: 'Work' },
        category: { ua: 'Категорія', nl: 'Categorie', en: 'Category' },
        dimensions: { ua: 'Розміри', nl: 'Afmetingen', en: 'Dimensions' },
        year: { ua: 'Рік', nl: 'Jaar', en: 'Year' },
      },
    },
    contactForm: {
      nameLabel: { ua: 'Імʼя', nl: 'Naam', en: 'Name' },
      namePlaceholder: { ua: 'Ваше імʼя', nl: 'Jouw naam', en: 'Your name' },
      emailLabel: { ua: 'Email', nl: 'E-mailadres', en: 'Email' },
      emailPlaceholder: { ua: 'you@example.com', nl: 'jij@voorbeeld.nl', en: 'you@example.com' },
      topicLabel: { ua: 'Тема звернення', nl: 'Onderwerp', en: 'Inquiry Topic' },
      topics: {
        'workshop-adult': {
          ua: 'Майстер-клас для дорослих',
          nl: 'Workshop voor volwassenen',
          en: 'Adult Ceramic Workshop',
        },
        'workshop-kids': {
          ua: 'Дитяче заняття з глини',
          nl: 'Kinderatelier met klei',
          en: 'Kids Clay Studio',
        },
        general: {
          ua: 'Запит щодо роботи з галереї',
          nl: 'Vraag over een werk uit de galerij',
          en: 'Gallery Piece Inquiry',
        },
        commission: {
          ua: 'Індивідуальне замовлення',
          nl: 'Maatwerk / Opdracht',
          en: 'Custom Commission',
        },
      },
      messageLabel: { ua: 'Повідомлення', nl: 'Bericht', en: 'Message' },
      messagePlaceholder: {
        ua: 'Розкажіть про бажану дату, кількість учасників або роботу, яка вас зацікавила...',
        nl: 'Vertel meer over de gewenste datum, het aantal deelnemers of het werk waarin je geïnteresseerd bent...',
        en: 'Share your preferred dates, group size, or the ceramic piece you are drawn to...',
      },
      submitButton: { ua: 'Надіслати запит', nl: 'Verstuur bericht', en: 'Send Message' },
      successTitle: {
        ua: 'Дякуємо, ваш запит отримано',
        nl: 'Bedankt, je bericht is ontvangen',
        en: 'Thank you, your note has been received',
      },
      successBody: {
        ua: 'Катрін відповість вам особисто протягом 1–2 робочих днів.',
        nl: 'Katrin reageert persoonlijk binnen 1 tot 2 werkdagen.',
        en: 'Katrin will reply personally within 1–2 studio days.',
      },
      sendAnother: {
        ua: 'Надіслати ще одне повідомлення',
        nl: 'Nog een bericht sturen',
        en: 'Send another message',
      },
      errors: {
        nameRequired: {
          ua: 'Будь ласка, вкажіть ваше імʼя.',
          nl: 'Vul alsjeblieft je naam in.',
          en: 'Please enter your name.',
        },
        emailRequired: {
          ua: 'Вкажіть електронну пошту для відповіді.',
          nl: 'Vul alsjeblieft je e-mailadres in.',
          en: 'Please enter your email address.',
        },
        emailInvalid: {
          ua: 'Перевірте коректність електронної пошти.',
          nl: 'Controleer of dit een geldig e-mailadres is.',
          en: 'Please enter a valid email address.',
        },
        messageRequired: {
          ua: 'Напишіть коротке повідомлення.',
          nl: 'Schrijf alsjeblieft een kort bericht.',
          en: 'Please write a short message.',
        },
        messageTooShort: {
          ua: 'Додайте трохи більше деталей (від 10 символів).',
          nl: 'Voeg iets meer details toe (minimaal 10 tekens).',
          en: 'Please share a few more details (at least 10 characters).',
        },
      },
    },
    footer: {
      tagline: {
        ua: 'Авторська кераміка ручної роботи та камерні майстер-класи в Утрехті.',
        nl: 'Handgevormde hedendaagse keramiek en intieme workshops in Utrecht.',
        en: 'Handbuilt contemporary ceramics and tactile clay workshops in Utrecht.',
      },
      navigationHeading: { ua: 'Навігація', nl: 'Navigatie', en: 'Navigation' },
      studioHeading: { ua: 'Студія', nl: 'Atelier', en: 'Studio' },
      languageHeading: { ua: 'Мова', nl: 'Taal', en: 'Language' },
      copyright: {
        ua: '© 2026 KETMADE — Студія кераміки Катрін. Всі права захищено.',
        nl: '© 2026 KETMADE — Keramiekstudio Katrin. Alle rechten voorbehouden.',
        en: '© 2026 KETMADE — Katrin Ceramics Studio. All rights reserved.',
      },
    },
  },
};
