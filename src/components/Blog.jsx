import { useState } from 'react'

const Blog = ({ language }) => {
  const [selectedArticle, setSelectedArticle] = useState(null)

  const content = {
    ar: {
      title: 'مقالات وإرشادات',
      subtitle: 'تعلم من مقالاتنا المتخصصة في الاختراعات والمشاريع اليدوية',
      readMore: 'اقرأ المقال',
      backToList: 'العودة للقائمة',
      parts: 'الأجزاء',
      materials: 'المواد والأدوات المطلوبة',
      steps: 'خطوات التنفيذ',
      tips: 'نصائح مهمة',
      conclusion: 'الخلاصة',
      views: 'مشاهدة',
      by: 'بقلم',
      author: 'ihabbob66',
      publishedOn: 'نُشر في',
      categories: 'التصنيفات',
      all: 'الكل',
      inventions: 'اختراعات',
      energy: 'طاقة وكهرباء',
      diy: 'مشاريع يدوية',
      tools: 'أدوات ومعدات',
      estimatedRead: 'دقائق قراءة'
    },
    de: {
      title: 'Artikel & Anleitungen',
      subtitle: 'Lernen Sie aus unseren Fachartikeln über Erfindungen und DIY-Projekte',
      readMore: 'Artikel lesen',
      backToList: 'Zurück zur Liste',
      parts: 'Teile',
      materials: 'Erforderliche Materialien',
      steps: 'Ausführungsschritte',
      tips: 'Wichtige Tipps',
      conclusion: 'Fazit',
      views: 'Ansichten',
      by: 'Von',
      author: 'ihabbob66',
      publishedOn: 'Veröffentlicht am',
      categories: 'Kategorien',
      all: 'Alle',
      inventions: 'Erfindungen',
      energy: 'Energie & Strom',
      diy: 'DIY-Projekte',
      tools: 'Werkzeuge',
      estimatedRead: 'Min. Lesezeit'
    }
  }

  const t = content[language]

  const articles = [
    {
      id: 1,
      title: language === 'ar' ? 'صناعة مولد كهربائي بسيط في المنزل' : 'Einfacher Generator zu Hause bauen',
      excerpt: language === 'ar' ? 'تعلم كيف تبني مولد كهربائي يعمل بالطاقة الحركية باستخدام أدوات بسيطة ومتوفرة في كل منزل. مشروع عملي يناسب المبتدئين والمحترفين.' : 'Lernen Sie, wie Sie einen Generator mit kinetischer Energie aus einfachen Hausmitteln bauen.',
      image: '/blog-images/generator.png',
      category: 'energy',
      icon: '⚡',
      date: '2024',
      readTime: 8,
      parts: [
        {
          title: language === 'ar' ? 'المقدمة: ما هو المولد الكهربائي؟' : 'Einführung: Was ist ein Generator?',
          body: language === 'ar'
            ? 'المولد الكهربائي هو جهاز يحوّل الطاقة الحركية إلى طاقة كهربائية. يعتمد على مبدأ الحث الكهرومغناطيسي الذي اكتشفه فاراداي. في هذا المشروع، سنصنع مولداً بسيطاً يعمل بتدوير المحرك يدوياً أو باستخدام طاقة الرياح.'
            : 'Ein Generator ist ein Gerät, das kinetische Energie in elektrische Energie umwandelt. Er basiert auf dem Prinzip der elektromagnetischen Induktion.'
        },
        {
          title: language === 'ar' ? 'المواد والأدوات المطلوبة' : 'Benötigte Materialien und Werkzeuge',
          body: language === 'ar'
            ? '1. محرك DC صغير (من طابعات قديمة أو مراوح)\n2. أسلاك نحاسية (سلك 22 AWG)\n3. مغناطيس قوي (نيوديميوم)\n4. لوحة خبز (Breadboard)\n5. LED للإضاءة\n6. مقص وسكين\n7. صمغ حراري'
            : '1. Kleiner DC-Motor\n2. Kupferdraht (22 AWG)\n3. Starker Magnet (Neodym)\n4. Breadboard\n5. LED\n6. Schere und Messer\n7. Heißkleber'
        },
        {
          title: language === 'ar' ? 'خطوات التنفيذ' : 'Ausführungsschritte',
          body: language === 'ar'
            ? 'الخطوة 1: ابدأ بتفكيك المحرك الكهربائي القديم\nالخطوة 2: لف الأسلاك النحاسية حول الجزء الثابت (Stator) - 50 لفة على الأقل\nالخطوة 3: ثبت المغناطيس على محور الدوران\nالخطوة 4: وصّل طرفي الأسلاك بـ LED\nالخطوة 5: دوّر المحرك يدوياً وشاهد الإضاءة\nالخطوة 6: لتحسين الأداء، استخدم ترس لتكبير سرعة الدوران'
            : 'Schritt 1: Demontieren Sie den alten Motor\nSchritt 2: Wickeln Sie den Kupferdraht um den Stator (mindestens 50 Windungen)\nSchritt 3: Befestigen Sie den Magneten an der Welle\nSchritt 4: Verbinden Sie die Drahtenden mit einer LED\nSchritt 5: Drehen Sie den Motor und sehen Sie das Licht\nSchritt 6: Verwenden Sie ein Zahnrad für höhere Geschwindigkeit'
        },
        {
          title: language === 'ar' ? 'نصائح مهمة' : 'Wichtige Tipps',
          body: language === 'ar'
            ? '• كلما زاد عدد اللفات، زادت قوة الكهرباء الناتجة\n• استخدم مغناطيس نيوديميوم للحصول على أفضل النتائج\n• تأكد من عدم وجود أي ماس كهربائي في الوصلات\n• يمكنك ربط عدة مولدات معاً لزيادة الفولتية\n• احذر من الدوران السريع جداً لأنه قد يحرق المحرك'
            : '• Mehr Windungen = mehr Strom\n• Neodym-Magnete für beste Ergebnisse\n• Achten Sie auf Kurzschlüsse\n• Mehrere Generatoren für höhere Spannung\n• Vorsicht bei zu hoher Drehzahl'
        },
        {
          title: language === 'ar' ? 'الخلاصة' : 'Fazit',
          body: language === 'ar'
            ? 'هذا المشروع ممتاز للمبتدئين الذين يريدون فهم أساسيات الكهرباء والطاقة المتجددة. يمكنك تطوير المشروع بإضافة بطارية تخزين أو ربطه بمصدر طاقة رياح أو مياه. المولد البسيط الذي صنعناه ينتج حوالي 3-5 فولت وهو كافٍ لإضاءة LED أو شحن هاتف صغير.'
            : 'Dieses Projekt ist ideal für Anfänger. Sie können es mit einer Batterie oder Wind-/Wasserkraft erweitern. Unser einfacher Generator erzeugt 3-5 Volt.'
        }
      ]
    },
    {
      id: 2,
      title: language === 'ar' ? 'اختراع فرن يعمل بدون وقود - مشروع الطاقة الشمسية' : 'Ofen ohne Brennstoff - Solarprojekt',
      excerpt: language === 'ar' ? 'مشروع مبتكر لصناعة فرن يعمل بالطاقة الشمسية. يمكنك طبخ الطعام بدون غاز أو كهرباء باستخدام مبدأ تجميع الحرارة الشمسية.' : 'Ein innovatives Projekt zur Herstellung eines Solarofens. Kochen Sie ohne Gas oder Strom.',
      image: '/blog-images/solar-oven.png',
      category: 'inventions',
      icon: '☀️',
      date: '2024',
      readTime: 6,
      parts: [
        {
          title: language === 'ar' ? 'مقدمة عن الأفران الشمسية' : 'Einführung in Solaröfen',
          body: language === 'ar'
            ? 'الفرن الشمسي هو جهاز يستخدم الطاقة الشمسية لطهي الطعام. يعمل عن طريق تجميع أشعة الشمس وتركيزها في مكان واحد باستخدام عواكس معدنية. هذا المشروع صديق للبيئة ولا يكلف أي شيء في التشغيل.'
            : 'Ein Solarofen nutzt Sonnenenergie zum Kochen. Er sammelt Sonnenstrahlen und konzentriert sie mit Metallreflektoren.'
        },
        {
          title: language === 'ar' ? 'المواد المطلوبة' : 'Benötigte Materialien',
          body: language === 'ar'
            ? '1. كرتونة مقوى كبيرة\n2. ورق ألومنيوم (رقائق)\n3. غطاء زجاجي شفاف\n4. لاصق قوي\n5. طلاء أسود (للقاع الداخلي)\n6. مقص وأدوات قياس\n7. مفصل لفتح وإغلاق الغطاء'
            : '1. Große Pappe\n2. Aluminiumfolie\n3. Transparente Glasabdeckung\n4. Starker Kleber\n5. Schwarze Farbe\n6. Schere und Messwerkzeuge\n7. Scharnier'
        },
        {
          title: language === 'ar' ? 'خطوات التنفيذ' : 'Ausführungsschritte',
          body: language === 'ar'
            ? 'الخطوة 1: قص الكرتونة بشكل مربع أو مستطيل\nالخطوة 2: غلّف السطح الداخلي بورق الألومنيوم\nالخطوة 3: اصنع زاوية 45 درجة للغطاء العاكس\nالخطوة 4: طلاء القاع الداخلي باللون الأسود لامتصاص الحرارة\nالخطوة 5: ثبت الغطاء الزجاجي الشفاف\nالخطوة 6: ضع الطعام واتركه في الشمس 2-3 ساعات'
            : 'Schritt 1: Pappe quadratisch schneiden\nSchritt 2: Innenseite mit Aluminiumfolie bekleben\nSchritt 3: 45-Grad-Winkel für den Reflektor\nSchritt 4: Unterseite schwarz lackieren\nSchritt 5: Glasabdeckung befestigen\nSchritt 6: Lebensmittel hineinlegen und 2-3 Stunden in die Sonne stellen'
        },
        {
          title: language === 'ar' ? 'نصائح مهمة' : 'Wichtige Tipps',
          body: language === 'ar'
            ? '• أفضل وقت للاستخدام: 10 صباحاً إلى 3 عصراً\n• وجه الفرن مباشرة نحو الشمس\n• استخدم لون أسود مطفي (غير لامع) لامتصاص أفضل\n• الغطاء الزجاجي يحبس الحرارة مثل الصوب\n• يمكن الطهي بدون تقليب الطعام'
            : '• Beste Zeit: 10-15 Uhr\n• Ofen direkt zur Sonne richten\n• Matte schwarze Farbe für beste Absorption\n• Glasdeckel hält die Wärme\n• Kein Rühren erforderlich'
        },
        {
          title: language === 'ar' ? 'الخلاصة' : 'Fazit',
          body: language === 'ar'
            ? 'الفرن الشمسي مشروع رائع يجمع بين الإبداع والاستدامة. يمكنك طهي الأرز، البطاطس، وحتى اللحم فيه. درجة الحرارة تصل إلى 100-120 درجة مئوية وهو كافٍ للطبخ. التكلفة الإجمالية لا تتجاوز 50 جنيه مصري.'
            : 'Der Solarofen kombiniert Kreativität und Nachhaltigkeit. Sie können Reis, Kartoffeln und sogar Fleisch kochen. Temperaturen bis 100-120°C. Kosten unter 50 LE.'
        }
      ]
    },
    {
      id: 3,
      title: language === 'ar' ? 'محطة توربين رياح منزلية - طاقة مجانية من الهواء' : 'Heimwindturbine - Kostenlose Energie',
      excerpt: language === 'ar' ? 'دليل شامل لبناء توربين رياح صغير لمنزلك. احصل على طاقة كهربائية مجانية من الهواء. مشروع يستحق التجربة لكل عاشق للاختراعات.' : 'Vollständiger Leitfaden für eine kleine Windturbine für Ihr Zuhause. Kostenlose Energie aus dem Wind.',
      image: '/blog-images/wind-turbine.png',
      category: 'energy',
      icon: '🌬️',
      date: '2024',
      readTime: 10,
      parts: [
        {
          title: language === 'ar' ? 'مقدمة عن طاقة الرياح' : 'Einführung in Windenergie',
          body: language === 'ar'
            ? 'طاقة الرياح هي من أنظف مصادر الطاقة المتجددة. التوربين يحول حركة الهواء إلى طاقة كهربائية عبر دوران الشفرات. في هذا المشروع، نبني توربيناً صغيراً يكفي لإضاءة غرفة أو شحن أجهزة.'
            : 'Windenergie ist eine der saubersten erneuerbaren Energiequellen. Die Turbine wandelt Luftbewegung in Strom um.'
        },
        {
          title: language === 'ar' ? 'المواد المطلوبة' : 'Benötigte Materialien',
          body: language === 'ar'
            ? '1. أنابيب PVC (لصنع الشفرات)\n2. محرك DC أو مولد\n3. أنبوب حديد (عمود)\n4. كابلات كهربائية\n5. منظم شحن (Charge Controller)\n6. بطارية 12 فولت\n7. صمغ ومسامير\n8. أدوات قطع PVC'
            : '1. PVC-Rohre (für die Schaufeln)\n2. DC-Motor oder Generator\n3. Stahlrohr (Mast)\n4. Stromkabel\n5. Laderegler\n6. 12V Batterie\n7. Kleber und Schrauben\n8. PVC-Schneidewerkzeuge'
        },
        {
          title: language === 'ar' ? 'خطوات التنفيذ' : 'Ausführungsschritte',
          body: language === 'ar'
            ? 'الخطوة 1: قص أنابيب PVC على شكل 3 أو 4 شفرات متساوية\nالخطوة 2: ثبت الشفرات على محور المولد بزاوية 15-20 درجة\nالخطوة 3: اصنع قاعدة ثابتة من الحديد أو الخشب\nالخطوة 4: ثبت التوربين في مكان مرتفع (سقف أو عمود)\nالخطوة 5: وصّل المولد بالبطارية عبر منظم الشحن\nالخطوة 6: اختبر التوربين في يوم عاصف\nالخطوة 7: أضف نظام إضاءة LED للتحقق من الإنتاج'
            : 'Schritt 1: PVC-Rohre in 3-4 gleichmäßige Schaufeln schneiden\nSchritt 2: Schaufeln mit 15-20 Grad am Generator befestigen\nSchritt 3: Stabile Basis aus Metall oder Holz\nSchritt 4: Turbine auf erhöhtem Ort montieren\nSchritt 5: Generator über Laderegler an Batterie anschließen\nSchritt 6: Bei windigem Wetter testen\nSchritt 7: LED-Beleuchtung zur Überprüfung hinzufügen'
        },
        {
          title: language === 'ar' ? 'نصائح مهمة' : 'Wichtige Tipps',
          body: language === 'ar'
            ? '• اختر مكاناً مفتوحاً بعيداً عن العوائق\n• ارتفاع العمود يجب أن يكون 3 أمتار على الأقل\n• استخدم شفرات خفيفة الوزن (PVC أفضل من المعدن)\n• منظم الشحن يحمي البطارية من الشحن الزائد\n• صيانة التوربين كل 6 أشهر ضرورية'
            : '• Offenen Standort ohne Hindernisse wählen\n• Mindesthöhe: 3 Meter\n• Leichte Schaufeln (PVC besser als Metall)\n• Laderegler schützt die Batterie\n• Wartung alle 6 Monate'
        },
        {
          title: language === 'ar' ? 'الخلاصة' : 'Fazit',
          body: language === 'ar'
            ? 'توربين الرياح المنزلي مشروع عملي يوفر طاقة نظيفة ومستدامة. التوربين الصغير الذي صنعناه ينتج 50-200 واط حسب سرعة الرياح، وهو كافٍ لإضاءة غرفة أو تشغيل مروحة. التكلفة الإجمالية حوالي 500-1000 جنيه مصري.'
            : 'Die Heimwindturbine liefert saubere, nachhaltige Energie. Unser kleiner Turbinengenerator erzeugt 50-200 Watt. Kosten: ca. 500-1000 LE.'
        }
      ]
    },
    {
      id: 5,
      title: language === 'ar' ? 'الروبوت بتاع جوجل: جيمني Robotics يعيد تعريف مستقبل الذكاء الاصطناعي' : 'Der Google-Roboter: Gemini Robotics und die Zukunft der KI',
      excerpt: language === 'ar' ? 'تعرّف على أحدث ابتكار من Google DeepMind — روبوت جيمني الذي يدمج الذكاء الاصطناعي مع العالم المادي. ماذا يعني هذا لمستقبل الروبوتات المنزلية والصناعية؟' : 'Lernen Sie Googles neueste Innovation kennen — den Gemini-Roboter, der KI mit der physischen Welt verbindet.',
      image: '/blog-images/gemini-robot.jpg',
      category: 'inventions',
      icon: '🤖',
      date: '2026',
      readTime: 7,
      parts: [
        {
          title: language === 'ar' ? 'مقدمة: ما هو الروبوت بتاع جوجل؟' : 'Einführung: Was ist der Google-Roboter?',
          body: language === 'ar'
            ? 'أعلنت Google DeepMind عن نموذج Gemini Robotics — وهو نظام ذكاء اصطناعي مصمم خصيصاً للروبوتات. الفكرة ببساطة: نفس الذكاء الاصطناعي القوي الذي يعمل خلف جوجل جيمني في هاتفك، لكن الآن يستطيع التحكم في روبوت حقيقي يتحرك ويتفاعل مع العالم من حوله. هذا يعني روبوتات تفهم أوامرك الطبيعية وتحللك مشاكل حقيقية.'
            : 'Google DeepMind stellte Gemini Robotics vor — ein KI-Modell, das speziell für Roboter entwickelt wurde. Es verbindet die leistungsstarke Gemini-KI mit physischen Robotern, die verstehen und handeln können.'
        },
        {
          title: language === 'ar' ? 'كيف يعمل جيمني Robotics؟' : 'Wie funktioniert Gemini Robotics?',
          body: language === 'ar'
            ? 'يعمل النظام على 3 مبادئ أساسية:\n1. الفهم البصري: يشاهد الروبوت البيئة عبر الكاميرات ويفهمها مثل البشر\n2. التخطيط الذكي: يقرر أفضل خطوات التنفيذ بنفسه بناءً على الموقف\n3. التنفيذ الآمن: يتحكم في الذراعين أو العجلات بحركة دقيقة وآمنة\nالميزة الكبرى أنه لا يحتاج لبرمجة مسبقة لكل مهمة — تقوله «جهّز لي كوب الشاي» وهو ينفذ.'
            : 'Das System basiert auf 3 Grundprinzipien:\n1. Visuelles Verständnis: Der Roboter sieht und versteht die Umgebung\n2. Intelligente Planung: Er entscheidet selbst über die besten Schritte\n3. Sichere Ausführung: Präzise und sichere Bewegungen\nDer größte Vorteil: keine Vorprogrammierung nötig — einfach sagen und er führt aus.'
        },
        {
          title: language === 'ar' ? 'ماذا يعني هذا للمبتكرين العرب؟' : 'Was bedeutet das für arabische Erfinder?',
          body: language === 'ar'
            ? 'مجال الروبوتات كان حكرًا على الشركات الكبرى بتكاليف خيالية، لكن الآن مع انتشار نماذج الذكاء الاصطناعي:\n• يمكنك بناء روبوت بسيط بمحرك Arduino وراسبيري باي\n• ربطه بتطبيقات الذكاء الاصطناعي المفتوحة (مثل Hugging Face)\n• تعليمه مهام منزلية بسيطة بنفسك\n• البيع على أمازون أو تسويق فكرتك عالمياً\nالمستقبل مفتوح لكل مبتكر يبدأ من منزله.'
            : 'Die Robotik ist nicht mehr nur Großkonzernen vorbehalten:\n• Bauen Sie einfache Roboter mit Arduino und Raspberry Pi\n• Verbinden Sie offene KI-Modelle (z. B. Hugging Face)\n• Trainieren Sie ihn auf einfache Haushaltsaufgaben\n• Verkaufen Sie Ihre Idee auf Amazon oder weltweit'
        },
        {
          title: language === 'ar' ? 'الروبوتات الذكية المتاحة للشراء الآن' : 'Jetzt kaufbare smarte Roboter',
          body: language === 'ar'
            ? 'بينما يعمل جوجل على نماذج احترافية، يمكنك اليوم شراء روبوتات ذكية ممتازة من أمازون مصر:\n• كلب روبوت ذكي بتقنية AI مع أوامر صوتية (3,299 ج)\n• روبوت EMO الرفيق الذكي لسطح المكتب (45,000 ج)\n• مكنسة شاومي روبوت بالتخطيط الذكي (6,640 ج)\n• روبوتات تفاعلية للأطفال بأسعار تبدأ من 379 ج\nشاهد قسم الروبوتات في موقعنا للحصول على أحدث الأسعار والروابط المباشرة.'
            : 'Während Google an Profi-Modellen arbeitet, können Sie heute bereits smarte Roboter auf Amazon Egypt kaufen:\n• KI-Roboterhund mit Sprachbefehlen (3.299 EGP)\n• EMO Desktop-Begleiter (45.000 EGP)\n• Xiaomi Saugroboter (6.640 EGP)\n• Interaktive Kinder-Roboter ab 379 EGP'
        },
        {
          title: language === 'ar' ? 'نصائح قبل شراء أي روبوت ذكي' : 'Tipps vor dem Kauf eines smarten Roboters',
          body: language === 'ar'
            ? '• تأكد من وجود ضمان رسمي من الموزع\n• تحقق من توافق التطبيق مع هاتفك قبل الشراء\n• اقرأ مراجعات المشترين الحقيقيين في أمازون\n• ابدأ بروبوت بسيط قبل الاستثمار في نماذج غالية\n• احذر من المنتجات المقلدة — اشترِ من بائعين موثوقين فقط'
            : '• Offizielle Garantie des Händlers prüfen\n• App-Kompatibilität mit Ihrem Handy vor dem Kauf prüfen\n• Echte Käuferrezensionen auf Amazon lesen\n• Beginnen Sie mit einem einfachen Roboter\n• Vorsicht vor gefälschten Produkten — nur vertrauenswürdige Verkäufer'
        },
        {
          title: language === 'ar' ? 'الخلاصة' : 'Fazit',
          body: language === 'ar'
            ? 'الروبوت بتاع جوجل (Gemini Robotics) يمثل نقلة نوعية في تاريخ التكنولوجيا — ذكاء اصطناعي يفهم العالم ويتفاعل معه جسديًا. ولأول مرة، أصبح عالم الروبوتات في متناول المبتكرين العرب: سواء كنت ستبني روبوتك بنفسك أو تشتري روبوتًا ذكيًا جاهزًا من أمازون مصر، فالفرصة أمامك الآن. تابع فيديوهاتنا على TikTok لرؤية الروبوتات بالتجربة العملية.'
            : 'Gemini Robotics ist ein Wendepunkt in der Technologiegeschichte — KI, die die physische Welt versteht. Zum ersten Mal ist die Robotik für arabische Erfinder zugänglich: Ob Sie Ihren eigenen Roboter bauen oder einen fertigen auf Amazon Egypt kaufen — die Gelegenheit ist jetzt.'
        }
      ]
    },
    {
      id: 4,
      title: language === 'ar' ? 'أفضل 10 أدوات يجب أن يمتلكها كل مبتكر عربي' : 'Die 10 besten Werkzeuge für jeden Erfinder',
      excerpt: language === 'ar' ? 'قائمة بأهم الأدوات التي يحتاجها كل مبتكر وصانع مشاريع يدوية. من المبتدئين إلى المحترفين، هذه الأدوات ستفتح لك أبواب الإبداع.' : 'Liste der wichtigsten Werkzeuge für jeden Erfinder und DIY-Enthusiasten.',
      image: '/blog-images/tools.png',
      category: 'tools',
      icon: '🔧',
      date: '2024',
      readTime: 5,
      parts: [
        {
          title: language === 'ar' ? 'لماذا الأدوات مهمة؟' : 'Warum Werkzeuge wichtig sind',
          body: language === 'ar'
            ? 'الأدوات هي أساس أي مشروع اختراعي. بدون الأدوات المناسبة، حتى أفضل الأفكار تبقى على الورق. في هذا المقال، نستعرض أهم 10 أدوات يجب أن يمتلكها كل مبتكر عربي، من الأدوات الأساسية التي يجب أن تبدأ بها إلى الأدوات الاحترافية التي ترتقي بمشاريعك.'
            : 'Werkzeuge sind die Grundlage jedes Erfinderprojekts. Ohne die richtigen Werkzeuge bleiben die besten Ideen auf dem Papier.'
        },
        {
          title: language === 'ar' ? 'الأدوات الأساسية (للمبتدئين)' : 'Basiswerkzeuge (für Anfänger)',
          body: language === 'ar'
            ? '1. فولتميتر رقمي - لقياس الفولتية والتيار\n2. أداة لحام (Soldiering Iron) - لتوصيل القطع الإلكترونية\n3. مقص أسلاك - لقطع الأسلاك بدقة\n4. مفكات متعددة الأحجام - لفك وتركيب القطع\n5. ملقط (Pliers) - لمسك وتوجيه الأسلاك'
            : '1. Digitalmultimeter - Spannung und Strom messen\n2. Lötkolben - elektronische Teile verbinden\n3. Drahtschneider - präzises Schneiden\n4. Verschiedene Schraubendreher\n5. Zange - Drähte halten und formen'
        },
        {
          title: language === 'ar' ? 'الأدوات المتقدمة (للمحترفين)' : 'Fortgeschrittene Werkzeuge (für Profis)',
          body: language === 'ar'
            ? '6. منشار كهربائي - لقطع المعادن والخشب\n7. مخرطة صغيرة - لتشكيل المعادن\n8. مثقاب كهربائي - لعمل ثقوب دقيقة\n9. جهاز قياس متعدد (Oscilloscope) - لتحليل الإشارات\n10. طابعة ثلاثية الأبعاد - لصنع قطع مخصصة'
            : '6. Elektrosäge - Metall und Holz schneiden\n7. Kleine Drehmaschine - Metall formen\n8. Elektrobohrer - präzise Löcher\n9. Oszilloskop - Signalanalyse\n10. 3D-Drucker - maßgeschneiderte Teile'
        },
        {
          title: language === 'ar' ? 'نصائح لاختيار الأدوات' : 'Tipps zur Werkzeugauswahl',
          body: language === 'ar'
            ? '• ابدأ بالأساسيات ثم أضف المتقدمة تدريجياً\n• اشترِ أدوات ذات جودة متوسطة على الأقل\n• لا تشتري أغلى أداة - الجودة المناسبة هي الأهم\n• حافظ على أدواتك نظيفة ومرتبة\n• تعلم استخدام كل أداة قبل استخدامها في مشروع'
            : '• Beginnen Sie mit den Grundlagen\n• Mindestens mittlere Qualität kaufen\n• Nicht das Teuerste - angemessene Qualität ist wichtiger\n• Werkzeuge sauber und geordnet halten\n• Jedes Werkzeug zuerst lernen'
        },
        {
          title: language === 'ar' ? 'الخلاصة' : 'Fazit',
          body: language === 'ar'
            ? 'امتلاك الأدوات المناسبة يحولك من شخص يحلم بالاختراعات إلى شخص يصنعها فعلاً. ابدأ بميزانية بسيطة (500-1000 جنيه) للأدوات الأساسية، ثم أضف تدريجياً. تذكر أن المهارة أهم من الأداة - المبتكر الحقيقي يستغل ما عندك بأفضل طريقة.'
            : 'Die richtigen Werkzeuge verwandeln Träume in Realität. Beginnen Sie mit einem Budget von 500-1000 LE. Denken Sie daran: Geschicklichkeit ist wichtiger als das Werkzeug.'
        }
      ]
    }
  ]

  const [activeCategory, setActiveCategory] = useState('all')

  const filteredArticles = activeCategory === 'all' 
    ? articles 
    : articles.filter(a => a.category === activeCategory)

  const categories = [
    { id: 'all', label: t.all },
    { id: 'inventions', label: t.inventions },
    { id: 'energy', label: t.energy },
    { id: 'diy', label: t.diy },
    { id: 'tools', label: t.tools },
  ]

  // Render single article view
  if (selectedArticle) {
    const article = articles.find(a => a.id === selectedArticle)
    return (
      <section id="blog" className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <button
            onClick={() => setSelectedArticle(null)}
            className="mb-8 text-accent hover:underline font-semibold flex items-center gap-2"
          >
            ← {t.backToList}
          </button>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            {/* Article Header */}
            <div className="bg-gradient-to-r from-primary to-gray-800 text-white p-8">
              <div className="text-5xl mb-4">{article.icon}</div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{article.title}</h1>
              <div className="flex items-center gap-4 text-gray-300 text-sm">
                <span>{t.by} {t.author}</span>
                <span>•</span>
                <span>{t.publishedOn} {article.date}</span>
                <span>•</span>
                <span>{article.readTime} {t.estimatedRead}</span>
              </div>
            </div>

            {/* Article Image */}
            <div className="overflow-hidden">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-64 md:h-80 object-cover"
              />
            </div>

            {/* Article Content - Parts */}
            <div className="p-8 space-y-8">
              {article.parts.map((part, index) => (
                <div key={index} className="border-b border-gray-100 pb-8 last:border-0">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </span>
                    <h2 className="text-xl font-bold text-gray-800">{part.title}</h2>
                  </div>
                  <div className="prose prose-lg text-gray-600 leading-relaxed whitespace-pre-line pr-4">
                    {part.body}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    )
  }

  // Render article list view
  return (
    <section id="blog" className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl font-bold mb-4">{t.title}</h2>
          <p className="text-gray-600 text-lg">{t.subtitle}</p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2 rounded-full font-semibold transition ${
                activeCategory === cat.id
                  ? 'bg-accent text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredArticles.map((article) => (
            <div
              key={article.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:scale-[1.02] cursor-pointer border border-gray-100"
              onClick={() => setSelectedArticle(article.id)}
            >
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-800">{article.title}</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{article.excerpt}</p>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>{t.author} • {article.date}</span>
                  <span>{article.readTime} {t.estimatedRead}</span>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <span className="text-accent font-semibold text-sm">
                    {t.readMore} →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Blogger Link Banner */}
        <div className="mt-8 bg-gradient-to-r from-primary to-accent text-white rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-3">
            {language === 'ar' ? '📖 تابع مدونتنا الكاملة' : '📖 Folgen Sie unserem Blog'}
          </h3>
          <p className="text-gray-200 mb-4">
            {language === 'ar'
              ? 'مقالات أكثر وتجارب حصرية بصور وفيديوهات خطوة بخطوة — من تقطيع البطاطس إلى خلاطات الأسمنت والمشاريع الكهربائية'
              : 'Mehr Artikel und exklusive Experimente mit Schritt-für-Schritt-Bildern und Videos'}
          </p>
          <a
            href="https://technowizardry123.blogspot.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-primary px-6 py-2 rounded-lg font-bold hover:bg-gray-100 transition inline-block"
          >
            {language === 'ar' ? 'افتح المدونة ←' : 'Zum Blog öffnen ←'}
          </a>
        </div>

        {/* Info Banner */}
        <div className="mt-12 bg-gradient-to-r from-accent to-primary text-white rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-3">
            {language === 'ar' ? 'شاهد الفيديوهات المتعلقة' : 'Siehe die verwandten Videos'}
          </h3>
          <p className="text-gray-200 mb-4">
            {language === 'ar' 
              ? 'تصفح فيديوهاتنا على TikTok لمعرفة الخطوات العملية لكل مشروع' 
              : 'Durchsuchen Sie unsere TikTok-Videos für die praktischen Schritte jedes Projekts'}
          </p>
          <a
            href="https://www.tiktok.com/@ihabbob66"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-primary px-6 py-2 rounded-lg font-bold hover:bg-gray-100 transition inline-block"
          >
            TikTok @ihabbob66
          </a>
        </div>
      </div>
    </section>
  )
}

export default Blog
