const Videos = ({ language }) => {
  const content = {
    ar: {
      title: 'أفضل الفيديوهات',
      subtitle: 'اكتشف أفضل محتوياتنا على TikTok',
      watchMore: 'شاهد المزيد على TikTok'
    },
    de: {
      title: 'Beste Videos',
      subtitle: 'Entdecken Sie unsere besten Inhalte auf TikTok',
      watchMore: 'Mehr auf TikTok ansehen'
    }
  }

  const t = content[language]

  const videos = [
    {
      id: 1,
      title: language === 'ar' ? 'فيديو 1' : 'Video 1',
      thumbnail: 'https://via.placeholder.com/300x400?text=Video+1',
      views: '50K'
    },
    {
      id: 2,
      title: language === 'ar' ? 'فيديو 2' : 'Video 2',
      thumbnail: 'https://via.placeholder.com/300x400?text=Video+2',
      views: '75K'
    },
    {
      id: 3,
      title: language === 'ar' ? 'فيديو 3' : 'Video 3',
      thumbnail: 'https://via.placeholder.com/300x400?text=Video+3',
      views: '120K'
    },
    {
      id: 4,
      title: language === 'ar' ? 'فيديو 4' : 'Video 4',
      thumbnail: 'https://via.placeholder.com/300x400?text=Video+4',
      views: '95K'
    },
  ]

  return (
    <section id="videos" className="py-16 px-4 bg-light">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl font-bold mb-4">{t.title}</h2>
          <p className="text-gray-600 text-lg">{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {videos.map((video) => (
            <div key={video.id} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:scale-105">
              <div className="relative overflow-hidden h-64">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center hover:bg-opacity-60 transition">
                  <div className="text-white text-4xl">▶</div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">{video.title}</h3>
                <p className="text-accent font-semibold">{video.views} {language === 'ar' ? 'مشاهدة' : 'Aufrufe'}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://www.tiktok.com/@ihabbob66"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-opacity-90 transition inline-block"
          >
            {t.watchMore}
          </a>
        </div>
      </div>
    </section>
  )
}

export default Videos
