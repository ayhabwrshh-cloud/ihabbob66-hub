import { useState } from 'react'

const Header = ({ language, setLanguage }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const content = {
    ar: {
      home: 'الرئيسية',
      videos: 'الفيديوهات',
      products: 'المنتجات',
      contact: 'تواصل معنا',
      tiktok: 'متابعة على TikTok'
    },
    de: {
      home: 'Startseite',
      videos: 'Videos',
      products: 'Produkte',
      contact: 'Kontakt',
      tiktok: 'Auf TikTok folgen'
    }
  }

  const t = content[language]

  return (
    <header className="bg-primary text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center font-bold">
            ع
          </div>
          <h1 className="text-xl font-bold">ابطال العرب</h1>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6 items-center">
          <a href="#home" className="hover:text-accent transition">{t.home}</a>
          <a href="#videos" className="hover:text-accent transition">{t.videos}</a>
          <a href="#products" className="hover:text-accent transition">{t.products}</a>
          <a href="#contact" className="hover:text-accent transition">{t.contact}</a>
          
          <button
            onClick={() => setLanguage(language === 'ar' ? 'de' : 'ar')}
            className="bg-accent px-3 py-1 rounded text-sm font-semibold hover:bg-opacity-90 transition"
          >
            {language === 'ar' ? 'Deutsch' : 'العربية'}
          </button>

          <a
            href="https://www.tiktok.com/@ihabbob66"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent px-4 py-2 rounded font-semibold hover:bg-opacity-90 transition"
          >
            {t.tiktok}
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-2xl"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-primary border-t border-accent p-4 flex flex-col gap-3">
          <a href="#home" className="hover:text-accent transition">{t.home}</a>
          <a href="#videos" className="hover:text-accent transition">{t.videos}</a>
          <a href="#products" className="hover:text-accent transition">{t.products}</a>
          <a href="#contact" className="hover:text-accent transition">{t.contact}</a>
          
          <button
            onClick={() => setLanguage(language === 'ar' ? 'de' : 'ar')}
            className="bg-accent px-3 py-2 rounded text-sm font-semibold hover:bg-opacity-90 transition w-full"
          >
            {language === 'ar' ? 'Deutsch' : 'العربية'}
          </button>

          <a
            href="https://www.tiktok.com/@ihabbob66"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent px-4 py-2 rounded font-semibold hover:bg-opacity-90 transition text-center"
          >
            {t.tiktok}
          </a>
        </nav>
      )}
    </header>
  )
}

export default Header
