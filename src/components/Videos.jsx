import { useEffect, useRef } from 'react'

const Videos = ({ language }) => {
  const tiktokContainerRef = useRef(null)

  const content = {
    ar: {
      title: 'أفضل الفيديوهات',
      subtitle: 'اكتشف أفضل محتوياتنا على TikTok',
      watchMore: 'شاهد المزيد على TikTok',
      loading: 'جاري تحميل الفيديوهات...'
    },
    de: {
      title: 'Beste Videos',
      subtitle: 'Entdecken Sie unsere besten Inhalte auf TikTok',
      watchMore: 'Mehr auf TikTok ansehen',
      loading: 'Videos werden geladen...'
    }
  }

  const t = content[language]

  // أفضل الفيديوهات من حساب ihabbob66 (الأكثر مشاهدة)
  const topVideos = [
    {
      id: '7665325429045103892',
      url: 'https://www.tiktok.com/@ihabbob66/video/7665325429045103892',
    },
    {
      id: '7664868034695269652',
      url: 'https://www.tiktok.com/@ihabbob66/video/7664868034695269652',
    },
    {
      id: '7664643303656164629',
      url: 'https://www.tiktok.com/@ihabbob66/video/7664643303656164629',
    },
    {
      id: '7664157507404762389',
      url: 'https://www.tiktok.com/@ihabbob66/video/7664157507404762389',
    },
  ]

  useEffect(() => {
    // Load TikTok embed script when component mounts
    const script = document.createElement('script')
    script.src = 'https://www.tiktok.com/embed.js'
    script.async = true
    script.defer = true
    document.body.appendChild(script)

    return () => {
      // Clean up script on unmount
      document.body.removeChild(script)
    }
  }, [])

  return (
    <section id="videos" className="py-16 px-4 bg-light">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl font-bold mb-4">{t.title}</h2>
          <p className="text-gray-600 text-lg">{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {topVideos.map((video) => (
            <div
              key={video.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:scale-105"
            >
              <div className="relative overflow-hidden h-auto min-h-[480px] flex items-center justify-center bg-gray-50 p-2">
                <blockquote
                  className="tiktok-embed"
                  cite={video.url}
                  data-video-id={video.id}
                  style={{ width: '100%', height: '100%' }}
                >
                  <section>
                    <a target="_blank" href={video.url}>
                      @ihabbob66
                    </a>
                  </section>
                </blockquote>
              </div>
              <div className="p-4">
                <p className="text-accent font-semibold text-center">
                  {language === 'ar' ? 'شاهد على TikTok' : 'Auf TikTok ansehen'}
                </p>
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
