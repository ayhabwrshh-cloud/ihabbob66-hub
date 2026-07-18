const Products = ({ language }) => {
  const content = {
    ar: {
      title: 'المنتجات الرقمية',
      subtitle: 'احصل على كورسات وموارد حصرية',
      buy: 'اشتري الآن',
      price: 'السعر',
      description: 'الوصف'
    },
    de: {
      title: 'Digitale Produkte',
      subtitle: 'Erhalten Sie exklusive Kurse und Ressourcen',
      buy: 'Jetzt kaufen',
      price: 'Preis',
      description: 'Beschreibung'
    }
  }

  const t = content[language]

  const products = [
    {
      id: 1,
      name: language === 'ar' ? 'كورس صناعة المحتوى' : 'Content Creation Kurs',
      description: language === 'ar' ? 'تعلم كيفية إنشاء محتوى احترافي على TikTok' : 'Erfahren Sie, wie Sie professionelle Inhalte auf TikTok erstellen',
      price: language === 'ar' ? '29.99 دولار' : '29,99 €',
      icon: '📚'
    },
    {
      id: 2,
      name: language === 'ar' ? 'قوالب التصميم' : 'Design-Vorlagen',
      description: language === 'ar' ? 'مجموعة من قوالب التصميم الاحترافية' : 'Sammlung professioneller Designvorlagen',
      price: language === 'ar' ? '19.99 دولار' : '19,99 €',
      icon: '🎨'
    },
    {
      id: 3,
      name: language === 'ar' ? 'دليل التسويق الرقمي' : 'Digital Marketing Guide',
      description: language === 'ar' ? 'دليل شامل لتسويق منتجاتك بفعالية' : 'Umfassender Leitfaden für effektives Produktmarketing',
      price: language === 'ar' ? '39.99 دولار' : '39,99 €',
      icon: '📊'
    },
    {
      id: 4,
      name: language === 'ar' ? 'استشارة شخصية' : 'Persönliche Beratung',
      description: language === 'ar' ? 'جلسة استشارة فردية مع خبير' : 'Einzelne Beratungssitzung mit einem Experten',
      price: language === 'ar' ? '99.99 دولار' : '99,99 €',
      icon: '🎯'
    },
  ]

  return (
    <section id="products" className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl font-bold mb-4">{t.title}</h2>
          <p className="text-gray-600 text-lg">{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-light rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:scale-105">
              <div className="bg-gradient-to-r from-accent to-orange-600 p-8 text-center">
                <div className="text-6xl">{product.icon}</div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg mb-2">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                <div className="border-t pt-4 mb-4">
                  <p className="text-accent font-bold text-xl">{product.price}</p>
                </div>
                <button className="w-full bg-accent text-white py-2 rounded font-bold hover:bg-opacity-90 transition">
                  {t.buy}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">{language === 'ar' ? 'هل تريد عرض خاص؟' : 'Möchten Sie ein spezielles Angebot?'}</p>
          <button className="bg-primary text-white px-8 py-3 rounded-lg font-bold hover:bg-opacity-90 transition">
            {language === 'ar' ? 'تواصل معنا' : 'Kontaktieren Sie uns'}
          </button>
        </div>
      </div>
    </section>
  )
}

export default Products
