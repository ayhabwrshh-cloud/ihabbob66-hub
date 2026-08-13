const Footer = ({ language }) => {
  const content = {
    ar: {
      about: 'حول الموقع',
      aboutText: 'موقع متخصص في توزيع المحتوى الإبداعي والمنتجات الرقمية',
      quickLinks: 'روابط سريعة',
      legal: 'القانونية',
      privacy: 'سياسة الخصوصية',
      terms: 'شروط الاستخدام',
      copyright: 'جميع الحقوق محفوظة © 2024 ابطال العرب'
    },
    de: {
      about: 'Über uns',
      aboutText: 'Eine Website, die sich auf die Verbreitung kreativer Inhalte und digitaler Produkte spezialisiert',
      quickLinks: 'Schnelllinks',
      legal: 'Rechtliches',
      privacy: 'Datenschutzrichtlinie',
      terms: 'Nutzungsbedingungen',
      copyright: 'Alle Rechte vorbehalten © 2024 ابطال العرب'
    }
  }

  const t = content[language]

  return (
    <footer className="bg-primary text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-accent">{t.about}</h3>
            <p className="text-gray-300 text-sm">{t.aboutText}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-accent">{t.quickLinks}</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#home" className="hover:text-accent transition">{language === 'ar' ? 'الرئيسية' : 'Startseite'}</a></li>
              <li><a href="#videos" className="hover:text-accent transition">{language === 'ar' ? 'الفيديوهات' : 'Videos'}</a></li>
              <li><a href="#products" className="hover:text-accent transition">{language === 'ar' ? 'المنتجات' : 'Produkte'}</a></li>
              <li><a href="#blog" className="hover:text-accent transition">{language === 'ar' ? 'مقالات' : 'Blog'}</a></li>
              <li><a href="https://technowizardry123.blogspot.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition">{language === 'ar' ? 'مدونتنا' : 'Unser Blog'}</a></li>
              <li><a href="#contact" className="hover:text-accent transition">{language === 'ar' ? 'تواصل معنا' : 'Kontakt'}</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-accent">{t.legal}</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-accent transition">{t.privacy}</a></li>
              <li><a href="#" className="hover:text-accent transition">{t.terms}</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-accent">{language === 'ar' ? 'تابعنا' : 'Folgen Sie uns'}</h3>
            <div className="flex gap-4 text-2xl">
              <a href="https://www.tiktok.com/@ihabbob66" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition">
                🎵
              </a>
              <a href="https://wa.me/201227978643" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition" title="WhatsApp">
                💬
              </a>
              <a href="https://www.tiktok.com/@ihabbob66" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition" title="TikTok">
                🎵
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-gray-400 text-sm">
          <p>{t.copyright}</p>
          <p className="mt-2">{language === 'ar' ? 'تم تطويره بواسطة Manus' : 'Entwickelt von Manus'}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
