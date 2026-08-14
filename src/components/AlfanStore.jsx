const AlfanStore = ({ language }) => {
  const isAr = language === 'ar'

  const products = [
    {
      image: '/blog-images/cover-diy-guide.jpg',
      price: '$5',
      titleAr: 'دليل الاختراعات المنزلية للمبتدئين',
      titleDe: 'DIY-Erfindungen Anfängerleitfaden',
      descAr: 'رفيقك العملي لتعلم أساسيات الهندسة والابتكار من داخل منزلك — مشاريع بسيطة بمواد متوفرة.',
      descDe: 'Ihr praktischer Begleiter, um die Grundlagen der Technik und Innovation von zu Hause aus zu lernen.',
      link: 'https://alfan.link/champions?digital=NtKkmp',
    },
    {
      image: '/blog-images/cover-generator-course.jpg',
      price: '$15',
      titleAr: 'صناعة المولد الكهربائي من الصفر',
      titleDe: 'Stromgenerator von Grund auf bauen',
      descAr: 'تعلم كيف تبني المولد الكهربائي الخاص بك من البداية حتى التشغيل بخطوات عملية مصورة.',
      descDe: 'Lernen Sie, wie Sie Ihren eigenen Stromgenerator von Grund auf bis zur Inbetriebnahme bauen.',
      link: 'https://alfan.link/champions?digital=HjGHbB',
    },
    {
      image: '/blog-images/cover-consultation.jpg',
      price: '$10',
      titleAr: 'جلسة استشارية خاصة',
      titleDe: 'Persönliche Beratungssitzung',
      descAr: 'ساعة كاملة من الاستشارات المباشرة مع بطل الاختراعات — اطلب الإجابة على مشاريعك.',
      descDe: 'Eine volle Stunde persönlicher Beratung direkt mit dem Erfindungs-Experten.',
      link: 'https://alfan.link/champions?digital=FnfMhF',
    },
    {
      image: '/blog-images/cover-solar-guide.jpg',
      price: '$7',
      titleAr: 'دليل مشروع الطاقة الشمسية الكامل',
      titleDe: 'Kompletter Solarprojekt-Leitfaden',
      descAr: 'من التخطيط إلى التشغيل: تصميم الأنظمة، اختيار المكونات، وضمان العائد الاستثماري.',
      descDe: 'Von der Planung bis zum Betrieb: Systemdesign, Komponentenauswahl und Investitionsrendite.',
      link: 'https://alfan.link/champions?digital=hzCTgj',
    },
  ]

  return (
    <section id="store" className="py-20 bg-gradient-to-b from-[#0b1220] to-[#111b33] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-amber-400/10 text-amber-300 text-sm font-semibold mb-4 border border-amber-400/20">
            {isAr ? '🛒 متجري الرقمي على ألفان' : '🛒 Mein digitaler Shop auf Alfan'}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            {isAr
              ? 'منتجات رقمية صممتها لتتعلم وتربح'
              : 'Digitale Produkte zum Lernen und Verdienen'}
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            {isAr
              ? 'محتوى عملي من تجاربي الحقيقية في الاختراعات والطاقة — أنزلها مباشرة على جهازك وابدأ فوراً. الدفع آمن عبر ألفان والاستلام فوري.'
              : 'Praktische Inhalte aus meinen echten Erfahrungen in Erfindungen und Energie — direkt herunterladen und sofort starten.'}
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
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
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
                  {isAr ? 'اشترِ الآن' : 'Jetzt kaufen'}
                  <span className="transition-transform group-hover:translate-x-1">←</span>
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Store Link */}
        <div className="mt-12 text-center">
          <a
            href="https://alfan.link/champions"
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="inline-flex items-center gap-2 text-amber-300 hover:text-amber-200 font-semibold transition-colors"
          >
            {isAr ? '👀 تصفح كل المنتجات في متجري على ألفان' : '👀 Alle Produkte in meinem Alfan-Shop ansehen'}
          </a>
        </div>
      </div>
    </section>
  )
}

export default AlfanStore
