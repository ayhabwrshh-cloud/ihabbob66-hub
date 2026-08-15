const AlfanStore = ({ language }) => {
  const isAr = language === 'ar'

  const products = [
    {
      image: '/blog-images/robot-dog-ai.jpg',
      price: isAr ? '3,299 ج' : '3.299 EGP',
      titleAr: 'كلب روبوت ذكي بتقنية AI',
      titleDe: 'KI-Roboterhund mit App-Steuerung',
      descAr: 'كلب آلي بتقنية الذكاء الاصطناعي مع تحكم عن بعد وعبر التطبيق، قابل للبرمجة مع أوامر صوتية وحركات تفاعلية وقاذف كرات.',
      descDe: 'KI-Roboterhund mit Fern- und App-Steuerung, programmierbar mit Sprachbefehlen und interaktiven Tricks.',
      link: 'https://www.amazon.eg/-/en/dp/B0GRF25JML?tag=bob2026-21&linkCode=ll1',
    },
    {
      image: '/blog-images/robot-dog-brain.jpg',
      price: isAr ? '1,980 ج' : '1.980 EGP',
      titleAr: 'كلب روبوت بريميند الذكي',
      titleDe: 'Prämind Roboterhund mit KI',
      descAr: 'كلب روبوت ذكي بتقنية الذكاء الاصطناعي من بريميند، جهاز تحكم عن بعد وتطبيق قابل لإعادة الشحن — هدية مثالية للأطفال من 8 إلى 12 سنة.',
      descDe: 'Prämind KI-Roboterhund mit Fernbedienung und wiederaufladbarer App-Steuerung — ideales Geschenk für Kinder.',
      link: 'https://www.amazon.eg/-/en/dp/B0CD76TKKJ?tag=bob2026-21&linkCode=ll1',
    },
    {
      image: '/blog-images/zain-smart-robot.jpg',
      price: isAr ? '1,200 ج' : '1.200 EGP',
      titleAr: 'روبوت تفاعلي ذكي بشاشة LED',
      titleDe: 'Smarter Roboter mit LED-Bildschirm',
      descAr: 'روبوت ذكي بشاشة ليد ملونة وميزة التفاعل الصوتي — رفيق شخصي يتكلم ويتفاعل معك. متوفر باللون الفضي والوردي.',
      descDe: 'Smarter Roboter mit buntem LED-Bildschirm und Sprachinteraktion — ein persönlicher Begleiter.',
      link: 'https://www.amazon.eg/-/en/dp/B0H24FS7YQ?tag=bob2026-21&linkCode=ll1',
    },
    {
      image: '/blog-images/emo-ai-robot.jpg',
      price: isAr ? '45,000 ج' : '45.000 EGP',
      titleAr: 'روبوت EMO الذكاء الاصطناعي',
      titleDe: 'EMO KI-Desktop-Roboter',
      descAr: 'روبوت حيوان أليف ذكي لسطح المكتب يعمل بالذكاء الاصطناعي مع إضاءة EMO الذكية — رفيقك التفاعلي في المنزل أو العمل.',
      descDe: 'Intelligenter Desktop-Roboter mit KI und EMO Smart Lighting — Ihr interaktiver Begleiter zu Hause.',
      link: 'https://www.amazon.eg/-/en/dp/B0B369ZW65?tag=bob2026-21&linkCode=ll1',
    },
    {
      image: '/blog-images/xiaomi-vacuum.jpg',
      price: isAr ? '6,640 ج' : '6.640 EGP',
      titleAr: 'مكنسة شاومي روبوت E5',
      titleDe: 'Xiaomi E5 Saugroboter',
      descAr: 'مكنسة كهربائية روبوت من شاومي بقوة شفط 2000 باسكال وبطارية 2600 مللي أمبير، مع تخطيط ذكي للمسار وجيروسكوب.',
      descDe: 'Xiaomi E5 Saugroboter mit 2000 Pascal Saugkraft, 2600-mAh-Akku und intelligenter Routenplanung.',
      link: 'https://www.amazon.eg/-/en/dp/B0CWV9LST4?tag=bob2026-21&linkCode=ll1',
    },
    {
      image: '/blog-images/sonomo-robot-dog.jpg',
      price: isAr ? '1,985 ج' : '1.985 EGP',
      titleAr: 'جرو روبوت سونومو التفاعلي',
      titleDe: 'Sonomo Roboterwelpe',
      descAr: 'لعبة كلب روبوت بجهاز تحكم وجرو روبوتي قابل للبرمجة — روبوت تفاعلي ذكي وهدية للأطفال من عمر 3 إلى 8 سنوات.',
      descDe: 'Programmierbarer Roboterwelpe mit Fernbedienung — smartes interaktives Geschenk für Kinder ab 3 Jahren.',
      link: 'https://www.amazon.eg/-/en/dp/B09P8LGRRJ?tag=bob2026-21&linkCode=ll1',
    },
    {
      image: '/blog-images/transformer-car.jpg',
      price: isAr ? '418 ج' : '418 EGP',
      titleAr: 'سيارة روبوت متحولة 2 في 1',
      titleDe: 'Verwandelbarer Roboter-Auto 2-in-1',
      descAr: 'سيارة روبوت متحولة بجهاز تحكم عن بعد مع زر واحد وانجراف 360 درجة — سيارة رياضية تتحول إلى روبوت بضغطة زر.',
      descDe: 'Verwandelbares Roboter-Auto mit 360-Grad-Drift — verwandelt sich auf Knopfdruck in einen Roboter.',
      link: 'https://www.amazon.eg/-/en/dp/B0H4CZMBLH?tag=bob2026-21&linkCode=ll1',
    },
    {
      image: '/blog-images/pioneer-dance-bot.jpg',
      price: isAr ? '379 ج' : '379 EGP',
      titleAr: 'روبوت بيونير الراقص',
      titleDe: 'Pioneer Tanzroboter',
      descAr: 'بوت روبوت بيونير بأضواء ملونة وموسيقى يتحرك في كافة الاتجاهات — لعبة روبوت راقصة للأطفال من 3 سنوات فما فوق.',
      descDe: 'Pioneer-Tanzroboter mit bunten Lichtern und Musik — tanzt in alle Richtungen, ab 3 Jahren.',
      link: 'https://www.amazon.eg/-/en/dp/B0FHH7KZD1?tag=bob2026-21&linkCode=ll1',
    },
  ]

  return (
    <section id="store" className="py-20 bg-gradient-to-b from-[#0b1220] to-[#111b33] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-amber-400/10 text-amber-300 text-sm font-semibold mb-4 border border-amber-400/20">
            {isAr ? '🤖 أحدث روبوتات الذكاء الاصطناعي' : '🤖 Die neuesten KI-Roboter'}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            {isAr
              ? 'عالم الروبوتات الذكية — اختر روبوتك من أمازون مصر'
              : 'Die Welt der smarten Roboter — wählen Sie Ihren Roboter auf Amazon Egypt'}
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            {isAr
              ? 'مجموعة مختارة بعناية من أفضل الروبوتات الذكية المتوفرة الآن على أمازون مصر — من الكلاب الآلية بتقنية AI إلى المكنسات الروبوت الذكية. أسعارنا قد تتغير، اضغط للحصول على أحدث سعر.'
              : 'Eine sorgfältig ausgewählte Auswahl der besten auf Amazon Egypt verfügbaren Roboter — von KI-Roboterhunden bis zu smarten Saugrobotern.'}
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <a
              key={p.link}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="group bg-[#141e33] border border-white/10 rounded-2xl overflow-hidden flex flex-col hover:border-amber-400/50 hover:-translate-y-1.5 transition-all duration-300 shadow-lg shadow-black/30"
            >
              <div className="relative overflow-hidden">
                <img
                  src={p.image}
                  alt={isAr ? p.titleAr : p.titleDe}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500 bg-white"
                  loading="lazy"
                />
                <span className="absolute top-3 right-3 bg-amber-400 text-slate-900 font-extrabold text-sm px-3 py-1 rounded-full shadow">
                  {p.price}
                </span>
              </div>
              <div className="p-5 flex flex-col flex-1" dir={isAr ? 'rtl' : 'ltr'}>
                <h3 className="font-bold text-white text-lg mb-2 leading-snug">
                  {isAr ? p.titleAr : p.titleDe}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed flex-1">
                  {isAr ? p.descAr : p.descDe}
                </p>
                <span className="mt-4 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-400 to-amber-500 text-slate-900 font-bold text-sm py-2.5 rounded-xl group-hover:from-amber-300 group-hover:to-amber-400 transition-colors">
                  {isAr ? 'شاهد على أمازون' : 'Auf Amazon ansehen'}
                  <span className="transition-transform group-hover:translate-x-1">←</span>
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Amazon Link */}
        <div className="mt-12 text-center">
          <a
            href="https://www.amazon.eg/s?k=%D8%B1%D9%88%D8%A8%D9%88%D8%AA+%D8%B0%D9%83%D8%A7%D8%A1+%D8%A7%D8%B5%D8%B7%D9%86%D8%A7%D8%B9%D9%8A&tag=bob2026-21"
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="inline-flex items-center gap-2 text-amber-300 hover:text-amber-200 font-semibold transition-colors"
          >
            {isAr ? '👀 تصفح كل الروبوتات الذكية على أمازون مصر' : '👀 Alle KI-Roboter auf Amazon Egypt ansehen'}
          </a>
        </div>

        {/* Affiliate Disclosure */}
        <p className="mt-6 text-center text-slate-500 text-xs">
          {isAr
            ? 'كعضو في برنامج Amazon Associates، نحصل على عمولة من المشتريات المؤهلة بدون أي تكلفة إضافية عليك.'
            : 'Als Amazon-Associates-Mitglied erhalten wir eine Provision für qualifizierte Käufe ohne zusätzliche Kosten.'}
        </p>
      </div>
    </section>
  )
}

export default AlfanStore
