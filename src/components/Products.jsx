const Products = ({ language }) => {
  const AFFILIATE_TAG = 'bob2026-21'

  const content = {
    ar: {
      title: 'أدوات ومعدات الاختراعات',
      subtitle: 'أفضل الأدوات والمعدات لمشاريعك الإبداعية من Amazon مصر',
      buy: 'اشتري الآن',
      price: 'السعر',
      onAmazon: 'متوفر على Amazon',
      affiliateNote: 'قد نحصل على عمولة صغيرة عند الشراء بدون أي تكلفة إضافية عليك'
    },
    de: {
      title: 'Werkzeuge & Ausrüstung',
      subtitle: 'Die besten Werkzeuge für Ihre kreativen Projekte von Amazon Ägypten',
      buy: 'Jetzt kaufen',
      price: 'Preis',
      onAmazon: 'Verfügbar auf Amazon',
      affiliateNote: 'Wir erhalten eine kleine Provision beim Kauf ohne zusätzliche Kosten für Sie'
    }
  }

  const t = content[language]

  const products = [
    {
      id: 1,
      name: language === 'ar' ? 'لوح شمسي 18 فولت' : 'Solarpanel 18V',
      description: language === 'ar' ? 'لوح شمسي صغير قوي - مثالي لمشاريع الطاقة الشمسية والأجهزة الصغيرة. يعمل في أي وقت يكون فيه ضوء الشمس.' : 'Kleines, leistungsstarkes Solarpanel - ideal für Solarprojekte und kleine Geräte.',
      price: language === 'ar' ? '189 جنيه' : '189 LE',
      icon: '☀️',
      category: language === 'ar' ? 'طاقة شمسية' : 'Solarenergie',
      image: 'https://m.media-amazon.com/images/I/51xGvKJzJmL._AC_UF894,1000_QL80_.jpg',
      link: `https://www.amazon.eg/%D9%84%D9%88%D8%AD-%D8%B4%D9%85%D8%B3%D9%8A-18-%D9%81%D9%88%D9%84%D8%AA-%D9%88%D8%A7%D8%AA/dp/B0CGQ49TNS?tag=${AFFILIATE_TAG}`,
    },
    {
      id: 2,
      name: language === 'ar' ? 'مغناطيس نيوديميوم N52' : 'Neodym-Magnet N52',
      description: language === 'ar' ? 'مغناطيس نيوديميوم قوي جداً - أساسي لصناعة المولدات الكهربائية والمشاريع المغناطيسية. قوة جذب عالية.' : 'Starker Neodym-Magnet - essenziell für Generatorbau und magnetische Projekte.',
      price: language === 'ar' ? '75 جنيه' : '75 LE',
      icon: '🧲',
      category: language === 'ar' ? 'مغناطيس' : 'Magnet',
      image: 'https://m.media-amazon.com/images/I/61zL0q8JWNL._AC_UF894,1000_QL80_.jpg',
      link: `https://www.amazon.eg/s?k=%D9%85%D8%BA%D9%86%D8%A7%D8%B7%D9%8A%D8%B3+%D9%86%D9%8A%D9%88%D8%AF%D9%8A%D9%85%D9%8A%D9%88%D9%85+N52&tag=${AFFILIATE_TAG}`,
    },
    {
      id: 3,
      name: language === 'ar' ? 'سلك نحاس معزول 0.5mm' : 'Kupferdraht isoliert 0.5mm',
      description: language === 'ar' ? 'سلك نحاس مغلف للملفات الكهربائية - 100 متر. أساسي لصناعة الملفات والمولدات والمحولات الكهربائية.' : 'Isolierter Kupferdraht für Spulen - 100 Meter. Essenziell für Spulen, Generatoren und Transformatoren.',
      price: language === 'ar' ? '95 جنيه' : '95 LE',
      icon: '🔗',
      category: language === 'ar' ? 'ملفات كهربائية' : 'Elektrospulen',
      image: 'https://m.media-amazon.com/images/I/71xGvKJzJmL._AC_UF894,1000_QL80_.jpg',
      link: `https://www.amazon.eg/s?k=%D8%B3%D9%84%D9%83+%D9%86%D8%AD%D8%A7%D8%B3+%D9%85%D8%B9%D8%B2%D9%88%D9%84&tag=${AFFILIATE_TAG}`,
    },
    {
      id: 4,
      name: language === 'ar' ? 'محرك DC 775 عالي السرعة' : 'DC Motor 775 Hochgeschwindigkeit',
      description: language === 'ar' ? 'محرك DC قوي بمعدل 775 RPM - مثالي لصناعة المولدات الكهربائية والتوربينات والمشاريع الكهربائية المتقدمة.' : 'Starker DC-Motor mit 775 RPM - ideal für Generatoren, Turbinen und fortgeschrittene elektrische Projekte.',
      price: language === 'ar' ? '85 جنيه' : '85 LE',
      icon: '⚙️',
      category: language === 'ar' ? 'محركات' : 'Motoren',
      image: 'https://m.media-amazon.com/images/I/61pL7KxJzJL._AC_UF894,1000_QL80_.jpg',
      link: `https://www.amazon.eg/s?k=%D9%85%D8%AD%D8%B1%D9%83+DC+775&tag=${AFFILIATE_TAG}`,
    },
    {
      id: 5,
      name: language === 'ar' ? 'منظم شحن شمسي 20A' : 'Solar Laderegler 20A',
      description: language === 'ar' ? 'منظم شحن ذكي للبطاريات الشمسية - يحمي البطارية من الشحن الزائد. يدعم 12V و 24V مع شاشة LCD.' : 'Intelligenter Laderegler für Solarbatterien - schützt die Batterie vor Überladung. 12V und 24V mit LCD-Display.',
      price: language === 'ar' ? '120 جنيه' : '120 LE',
      icon: '🔋',
      category: language === 'ar' ? 'طاقة شمسية' : 'Solarenergie',
      image: 'https://m.media-amazon.com/images/I/71BvGzJzJmL._AC_UF894,1000_QL80_.jpg',
      link: `https://www.amazon.eg/s?k=%D9%85%D9%86%D8%B8%D9%85+%D8%B4%D8%AD%D9%86+%D8%B4%D9%85%D8%B3%D9%8A+20A&tag=${AFFILIATE_TAG}`,
    },
    {
      id: 6,
      name: language === 'ar' ? 'فولتميتر رقمي متعدد' : 'Digitales Multimeter',
      description: language === 'ar' ? 'جهاز قياس رقمي لقياس الفولتية والتيار والمقاومة - أداة أساسية لكل مبتكر وهاوي إلكترونيات. شاشة LCD واضحة.' : 'Digitales Messgerät für Spannung, Strom und Widerstand - essenziell für jeden Erfinder und Elektronik-Enthusiasten.',
      price: language === 'ar' ? '65 جنيه' : '65 LE',
      icon: '📟',
      category: language === 'ar' ? 'أدوات قياس' : 'Messgeräte',
      image: 'https://m.media-amazon.com/images/I/71xGvKJzJmL._AC_UF894,1000_QL80_.jpg',
      link: `https://www.amazon.eg/s?k=%D9%81%D9%88%D9%84%D8%AA%D9%85%D9%8A%D8%AA%D8%B1+%D8%B1%D9%82%D9%85%D9%8A&tag=${AFFILIATE_TAG}`,
    },
    {
      id: 7,
      name: language === 'ar' ? 'بطارية جل 12V 7Ah' : 'Gel-Batterie 12V 7Ah',
      description: language === 'ar' ? 'بطارية جل 12 فولت - مثالية لمشاريع الطاقة الشمسية والتوربينات. بدون صيانة وتتحمل الشحن المتكرر.' : 'Gel-Batterie 12 Volt - ideal für Solarprojekte und Turbinen. Wartungsfrei und langlebig.',
      price: language === 'ar' ? '250 جنيه' : '250 LE',
      icon: '🔌',
      category: language === 'ar' ? 'طاقة شمسية' : 'Solarenergie',
      image: 'https://m.media-amazon.com/images/I/61zL0q8JWNL._AC_UF894,1000_QL80_.jpg',
      link: `https://www.amazon.eg/s?k=%D8%A8%D8%B7%D8%A7%D8%B1%D9%8A%D8%A9+%D8%AC%D9%84+12V+7Ah&tag=${AFFILIATE_TAG}`,
    },
    {
      id: 8,
      name: language === 'ar' ? 'أداة لحام إلكتروني' : 'Lötkolben für Elektronik',
      description: language === 'ar' ? 'أداة لحام 60 واط - مثالية لتوصيل القطع الإلكترونية والأسلاك. درجة حرارة قابلة للتعديل مع قواعد ثابتة.' : '60-Watt Lötkolben - ideal zum Verbinden von elektronischen Teilen und Drähten. Einstellbare Temperatur.',
      price: language === 'ar' ? '45 جنيه' : '45 LE',
      icon: '🔧',
      category: language === 'ar' ? 'أدوات يدوية' : 'Werkzeuge',
      image: 'https://m.media-amazon.com/images/I/71BvGzJzJmL._AC_UF894,1000_QL80_.jpg',
      link: `https://www.amazon.eg/s?k=%D8%A3%D8%AF%D8%A7%D8%A9+%D9%84%D8%AD%D8%A7%D9%85+%D8%A5%D9%84%D9%83%D8%AA%D8%B1%D9%88%D9%86%D9%8A&tag=${AFFILIATE_TAG}`,
    },
    {
      id: 9,
      name: language === 'ar' ? 'توربين ريح صغير 5V ⚡' : 'Mini Wind Turbine 5V',
      description: language === 'ar' ? 'مولد ريح صغير لتوليد الكهرباء من الرياح - مثالي لمشاريع الطاقة المتجددة والتوربينات. سعر مخفض لفترة محدودة!' : 'Kleiner Windgenerator zur Stromerzeugung aus Wind - ideal für Erneuerbare-Energie-Projekte.',
      price: language === 'ar' ? '530 جنيه' : '530 LE',
      discount: language === 'ar' ? 'عرض خاص 🔥' : 'Sonderangebot',
      icon: '🌬️',
      category: language === 'ar' ? 'طاقة متجددة' : 'Erneuerbare Energie',
      image: 'https://m.media-amazon.com/images/I/61pL7KxJzJL._AC_UF894,1000_QL80_.jpg',
      link: `https://www.amazon.eg/-/en/Mini-Wind-Turbine-Generator-5Vdc/dp/B0GHZ5244Z?tag=${AFFILIATE_TAG}`,
    },
    {
      id: 10,
      name: language === 'ar' ? 'وحدة تحكم شحن شمسي ⚡' : 'Solar Laderegler-Modul',
      description: language === 'ar' ? 'وحدة تحكم شحن بالطاقة الشمسية لأجهزة Arduino والمشاريع الإلكترونية - سعر صغير جداً! مثالية للوحة الشمسية والبطاريات.' : 'Solar-Laderegler-Modul für Arduino und Elektronikprojekte - unschlagbarer Preis!',
      price: language === 'ar' ? '132 جنيه' : '132 LE',
      discount: language === 'ar' ? 'أقل سعر 🔥' : 'Bestpreis',
      icon: '🔆',
      category: language === 'ar' ? 'طاقة شمسية' : 'Solarenergie',
      image: 'https://m.media-amazon.com/images/I/51xGvKJzJmL._AC_UF894,1000_QL80_.jpg',
      link: `https://www.amazon.eg/-/en/Solar-Panel-Charging-Controller-Module/dp/B0CBG5XQSH?tag=${AFFILIATE_TAG}`,
    },
    {
      id: 11,
      name: language === 'ar' ? 'طقم توربين ماء DIY ⚡' : 'DIY Wasser-Turbinen-Kit',
      description: language === 'ar' ? 'طقم صناعة توربين مائي لتوليد الكهرباء من المياه الجارية - مشروع عملي ممتع لكل مخترع وهاوي!' : 'DIY-Bausatz für eine Wasser-Turbine zur Stromerzeugung aus fließendem Wasser!',
      price: language === 'ar' ? '1000 جنيه' : '1000 LE',
      discount: language === 'ar' ? 'مشروع DIY 🔥' : 'DIY-Projekt',
      icon: '💧',
      category: language === 'ar' ? 'طاقة متجددة' : 'Erneuerbare Energie',
      image: 'https://m.media-amazon.com/images/I/71xGvKJzJmL._AC_UF894,1000_QL80_.jpg',
      link: `https://www.amazon.eg/-/en/DIY-Kit-Generator-Water-Turbine-8211/dp/B0DD3RYHPH?tag=${AFFILIATE_TAG}`,
    },
    {
      id: 12,
      name: language === 'ar' ? 'محرك سيرفو Arduino ⚡' : 'Arduino Servo-Motor',
      description: language === 'ar' ? 'محرك سيرفو صغير لبرمجة ومشاريع Arduino والروبوتات والأذرع الآلية - سعر ممتاز للهاوين!' : 'Kleiner Servo-Motor für Arduino, Roboter und Programmierprojekte!',
      price: language === 'ar' ? '110 جنيه' : '110 LE',
      discount: language === 'ar' ? 'سعر مخفض 🔥' : 'Rabatt',
      icon: '🤖',
      category: language === 'ar' ? 'محركات' : 'Motoren',
      image: 'https://m.media-amazon.com/images/I/61zL0q8JWNL._AC_UF894,1000_QL80_.jpg',
      link: `https://www.amazon.eg/-/en/Tower-Micro-Servo-Motor-Arduino/dp/B096QWKM9K?tag=${AFFILIATE_TAG}`,
    }
  ]

  return (
    <section id="products" className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl font-bold mb-4">{t.title}</h2>
          <p className="text-gray-600 text-lg mb-6">{t.subtitle}</p>
          <img
            src="/products-hero.png"
            alt={t.title}
            className="w-full h-48 md:h-64 object-cover rounded-xl shadow-lg"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-light rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:scale-105">
              <div className="bg-gradient-to-r from-accent to-orange-600 p-6 text-center">
                <div className="text-5xl mb-2">{product.icon}</div>
                <span className="bg-white bg-opacity-20 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  {product.category}
                </span>
              </div>
              <div className="p-6">
                {product.discount && (
                  <span className="inline-block bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full mb-2">
                    {product.discount}
                  </span>
                )}
                <h3 className="font-bold text-lg mb-2">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                <div className="border-t pt-4 mb-4">
                  <p className="text-accent font-bold text-xl">{product.price}</p>
                  <p className="text-gray-400 text-xs mt-1">{t.onAmazon}</p>
                </div>
                <a
                  href={product.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-accent text-white py-2 rounded font-bold hover:bg-opacity-90 transition text-center"
                >
                  {t.buy} →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Amazon Affiliate Disclaimer */}
        <div className="text-center mt-12 bg-gray-50 rounded-lg p-6">
          <p className="text-gray-500 text-sm">{t.affiliateNote}</p>
          <p className="text-gray-400 text-xs mt-2">
            {language === 'ar' ? 'Partner-Programm von Amazon Egypt' : 'Amazon Egypt Affiliate-Programm'}
          </p>
        </div>

        <div className="text-center mt-6">
          <p className="text-gray-600 mb-4">
            {language === 'ar' ? 'هل تبحث عن أداة معينة؟' : 'Suchen Sie ein bestimmtes Werkzeug?'}
          </p>
          <a
            href="#contact"
            className="bg-primary text-white px-8 py-3 rounded-lg font-bold hover:bg-opacity-90 transition inline-block"
          >
            {language === 'ar' ? 'تواصل معنا' : 'Kontaktieren Sie uns'}
          </a>
        </div>
      </div>
    </section>
  )
}

export default Products
