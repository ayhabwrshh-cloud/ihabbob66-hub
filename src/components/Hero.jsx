const Hero = ({ language }) => {
  const content = {
    ar: {
      title: 'مرحباً بك في عالم المحتوى الإبداعي',
      subtitle: 'اكتشف محتوى حصري وتعلم من أفضل الدورات التدريبية',
      cta: 'ابدأ الآن',
      followers: '155.2K متابع',
      likes: '860.7K إعجاب'
    },
    de: {
      title: 'Willkommen in der Welt des kreativen Inhalts',
      subtitle: 'Entdecken Sie exklusive Inhalte und lernen Sie aus den besten Kursen',
      cta: 'Jetzt beginnen',
      followers: '155.2K Follower',
      likes: '860.7K Likes'
    }
  }

  const t = content[language]

  return (
    <section id="home" className="relative text-white py-20 px-4 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.png"
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto text-center animate-fade-in-up z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">{t.title}</h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8">{t.subtitle}</p>
        
        <div className="flex gap-4 justify-center mb-12 flex-wrap">
          <button className="bg-accent text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-opacity-90 transition transform hover:scale-105">
            {t.cta}
          </button>
          <a
            href="https://www.tiktok.com/@ihabbob66"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-primary px-8 py-3 rounded-lg font-bold text-lg hover:bg-gray-100 transition transform hover:scale-105"
          >
            TikTok
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 gap-8 mt-12">
          <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur">
            <p className="text-3xl font-bold text-accent">{t.followers}</p>
            <p className="text-gray-300 mt-2">{language === 'ar' ? 'متابعون' : 'Follower'}</p>
          </div>
          <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur">
            <p className="text-3xl font-bold text-accent">{t.likes}</p>
            <p className="text-gray-300 mt-2">{language === 'ar' ? 'إعجابات' : 'Likes'}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
