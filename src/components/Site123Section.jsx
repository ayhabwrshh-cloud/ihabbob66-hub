import { useState } from 'react'

const Site123Section = ({ language }) => {
  const [expanded, setExpanded] = useState(false)

  const content = {
    ar: {
      badge: 'نصيحة من تجربتي الشخصية',
      title: 'أنشئ موقعك الخاص خلال 10 دقائق بدون أي خبرة',
      shortStory:
        'أنا بنفسك كنت محتاج موقع وأعتقدت أن الموضوع صعب ويتطلب مبرمج محترف، لحد ما جربت أداة بناء مواقع سهلة جداً. في ثلاث خطوات بسيطة — اختيار القالب، إضافة المحتوى، والنشر — كان عندي موقع كامل يعمل بدون كتابة سطر برمجة واحد. الموقع نفسه اللي بتتصفحّه الآن مبني بنفس الفكرة، وأنا مش مبرمج!',
      benefits: [
        { icon: '🎨', title: 'قوالب جاهزة احترافية', desc: 'اختر من عشرات القوالب الجاهزة للمواقع والمتاجر والمدونات' },
        { icon: '🛒', title: 'متجر إلكتروني سهل', desc: 'اعرض وبع منتجاتك أونلاين بدون أي تعقيدات تقنية' },
        { icon: '📱', title: 'متوافق مع الموبايل', desc: 'موقعك يظهر بشكل ممتاز على جميع الأجهزة والشاشات' },
        { icon: '🆓', title: 'ابدأ مجاناً الآن', desc: 'جرّب المنصة مجاناً وابدأ بناء موقعك خلال دقائق' }
      ],
      readMore: 'اقرأ القصة كاملة',
      readLess: 'اطوِ القصة',
      story: {
        para1: 'أول ما بدأت أفكر في بيع المنتجات وعرض اختراعاتي أونلاين، سألت نفسي: هل أحتاج مبرمج؟ كم سأدفع؟ الحقيقة أن تكلفة الاستعانة بمبرمج محترف تتراوح بين آلاف الجنيهات، مع انتظار طويل وتعديلات معقدة. لكن بعد البحث، اكتشفت منصات بناء المواقع السحابية التي تحوّل إنشاء الموقع إلى لعبة تركيب مثل المكعبات.',
        para2: 'تجربتي كانت بهذه الخطوات الثلاث: أولاً، اخترت قالب جاهز من المكتبة يناسب مشروعي. ثانياً، سحبت وأفلت العناصر — صور، نصوص، أزرار — حتى أصبح الموقع كما أردت. ثالثاً، ضغطت نشر وأصبح موقعي متاح للعالم خلال ثوانٍ. كل هذا بدون كتابة أي كود، وبدون معرفة سابقة بالتصميم.',
        para3: 'المنصة توفر أيضاً أدوات تسويق جاهزة: تحسين محركات البحث، ربط دومين خاص، وصفحات هبوط للإعلانات. وأهم ميزة أنها تدعم العربية بالكامل، فالمحتوى يُعرض من اليمين لليسار بشكل صحيح. إذا كنت صاحب مشروع صغير أو صانع محتوى أو حتى مبتدئاً يريد أول موقع له — هذه أسرع وأوفر طريقة للبدء.'
      },
      cta: 'ابدأ موقعك المجاني الآن عبر رابطي',
      ctaNote: 'رابط إحالة موثوق — ابدأ مجاناً وادفع فقط عند ترقية خطتك',
      steps: ['اختر القالب', 'رتّب المحتوى', 'انشر الموقع']
    },
    de: {
      badge: 'Aus meiner persönlichen Erfahrung',
      title: 'Erstelle deine Website in 10 Minuten ohne Erfahrung',
      shortStory:
        'Ich brauchte selbst eine Website und dachte, das erfordert einen professionellen Programmierer — bis ich ein einfaches Website-Builder-Tool ausprobierte. In drei einfachen Schritten hatte ich eine vollständige Website ohne eine Zeile Code.',
      benefits: [
        { icon: '🎨', title: 'Professionelle Vorlagen', desc: 'Wähle aus Dutzenden fertiger Vorlagen' },
        { icon: '🛒', title: 'Einfacher Online-Shop', desc: 'Verkaufe deine Produkte online ohne technische Komplikationen' },
        { icon: '📱', title: 'Mobilfreundlich', desc: 'Perfekte Darstellung auf allen Geräten' },
        { icon: '🆓', title: 'Jetzt kostenlos starten', desc: 'Teste die Plattform kostenlos in wenigen Minuten' }
      ],
      readMore: 'Ganze Geschichte lesen',
      readLess: 'Weniger anzeigen',
      story: {
        para1: 'Als ich darüber nachdachte, Produkte online zu verkaufen, fragte ich mich: Brauche ich einen Programmierer? Die Antwort war nein — Cloud-Website-Builder machen es einfach wie Bauklötze.',
        para2: 'Meine Erfahrung in drei Schritten: Vorlage wählen, Inhalte per Drag-and-Drop anordnen, und veröffentlichen. Alles ohne eine Zeile Code.',
        para3: 'Die Plattform bietet außerdem Marketing-Tools: SEO, eigene Domain und Landing-Pages. Sie unterstützt Arabisch vollständig von rechts nach links.'
      },
      cta: 'Starte jetzt kostenlos über meinen Link',
      ctaNote: 'Vertrauenswürdiger Empfehlungslink — kostenlos starten',
      steps: ['Vorlage wählen', 'Inhalte anordnen', 'Website veröffentlichen']
    }
  }

  const t = content[language]

  return (
    <section id="site123" className="py-16 px-4 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto">
        {/* Badge */}
        <div className="text-center mb-6">
          <span className="inline-block bg-accent text-white px-5 py-2 rounded-full text-sm font-bold shadow-md">
            {t.badge}
          </span>
        </div>

        <h2 className="text-3xl md:text-5xl font-bold text-center text-primary mb-4">{t.title}</h2>
        <p className="text-center text-gray-600 text-lg md:text-xl max-w-3xl mx-auto mb-10">{t.shortStory}</p>

        {/* Two professional images */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <div className="rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition transform hover:-translate-y-1">
            <img
              src="/blog-images/site123-hero.png"
              alt={language === 'ar' ? 'إنشاء موقع بسهولة' : 'Website einfach erstellen'}
              className="w-full h-64 md:h-72 object-cover"
            />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition transform hover:-translate-y-1">
            <img
              src="/blog-images/site123-workflow.png"
              alt={language === 'ar' ? 'خطوات إنشاء الموقع' : 'Erstellungsschritte'}
              className="w-full h-64 md:h-72 object-cover"
            />
          </div>
        </div>

        {/* Steps */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {t.steps.map((step, i) => (
            <div key={i} className="flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-md border border-blue-100">
              <span className="bg-accent text-white w-7 h-7 rounded-full flex items-center justify-center font-bold text-sm">
                {i + 1}
              </span>
              <span className="font-semibold text-primary">{step}</span>
            </div>
          ))}
        </div>

        {/* Benefits grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {t.benefits.map((b, i) => (
            <div key={i} className="bg-white p-5 rounded-xl shadow-md border border-gray-100 text-center hover:shadow-lg transition">
              <div className="text-4xl mb-3">{b.icon}</div>
              <h3 className="font-bold text-primary mb-1 text-sm md:text-base">{b.title}</h3>
              <p className="text-gray-500 text-xs md:text-sm">{b.desc}</p>
            </div>
          ))}
        </div>

        {/* Short blog expandable */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-8 mb-8">
          {expanded ? (
            <div className="space-y-4 text-gray-700 leading-relaxed text-base md:text-lg">
              {Object.values(t.story).map((para, i) => (
                <p key={i}>{para}</p>
              ))}
              <button
                onClick={() => setExpanded(false)}
                className="text-accent font-bold hover:underline"
              >
                ← {t.readLess}
              </button>
            </div>
          ) : (
            <div className="text-gray-700 leading-relaxed text-base md:text-lg">
              <p className="mb-4">{t.shortStory}</p>
              <button
                onClick={() => setExpanded(true)}
                className="text-accent font-bold hover:underline"
              >
                {t.readMore} →
              </button>
            </div>
          )}
        </div>

        {/* CTA button */}
        <div className="text-center">
          <a
            href="https://www.site123.com/?aff=24878941"
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="inline-block bg-accent hover:bg-accent/90 text-white text-xl font-bold px-10 py-4 rounded-xl shadow-lg transition transform hover:scale-105"
          >
            🚀 {t.cta}
          </a>
          <p className="text-gray-500 text-sm mt-3">{t.ctaNote}</p>
        </div>
      </div>
    </section>
  )
}

export default Site123Section
