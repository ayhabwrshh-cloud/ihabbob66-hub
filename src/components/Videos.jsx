import { useEffect, useRef } from 'react'

const Videos = ({ language }) => {
  const tiktokContainerRef = useRef(null)

  const content = {
    ar: {
      title: 'أحدث الفيديوهات',
      subtitle: 'تابع أحدث محتوياتنا على TikTok',
      watchMore: 'شاهد المزيد على TikTok',
      loading: 'جاري تحميل الفيديوهات...',
      views: 'مشاهدة',
      new: 'جديد',
      likes: 'إعجاب',
      openVideo: 'افتح الفيديو على TikTok'
    },
    de: {
      title: 'Neueste Videos',
      subtitle: 'Folgen Sie unseren neuesten Inhalten auf TikTok',
      watchMore: 'Mehr auf TikTok ansehen',
      loading: 'Videos werden geladen...',
      views: 'Aufrufe',
      new: 'Neu',
      likes: 'Gefällt mir',
      openVideo: 'Video auf TikTok öffnen'
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

  // فيديوهات جديدة من حساب ihabbob66
  const newVideos = [
    {
      id: '7672400725258865940',
      url: 'https://www.tiktok.com/@ihabbob66/video/7672400725258865940',
      title: language === 'ar' ? 'أداة DIY متعددة الوظائف (4 في 1) من أنابيب PVC' : 'DIY Multi-Tool (4-in-1) from PVC Pipes',
      badge: t.new,
      thumb: 'https://p16-common-sign.tiktokcdn.com/tos-alisg-p-0037/ok4C8bOAt6kDP2ttAe4j9gfeIsDF51EUAI0QQT~tplv-tiktokx-origin.image?dr=14575&x-expires=1786687200&x-signature=U1Z38EdJadrPtaAkzjxgbRkhBJM%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=my3'
    },
    {
      id: '7672067089384983829',
      url: 'https://www.tiktok.com/@ihabbob66/video/7672067089384983829',
      title: language === 'ar' ? 'ابتكر هذه الأداة المذهلة بنفسك' : 'Invent this amazing tool yourself',
      badge: t.new,
      thumb: 'https://p16-common-sign.tiktokcdn.com/tos-alisg-p-0037/owGA9IgB6QU8nLTIo4pebVxLfeQiCjAixUIUAD~tplv-tiktokx-origin.image?dr=14575&x-expires=1786687200&x-signature=0lJoStB%2BeE9Faz1IRz7JA3AjnvM%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=my2'
    },
    {
      id: '7631980035771059476',
      url: 'https://www.tiktok.com/@ihabbob66/video/7631980035771059476',
      title: language === 'ar' ? 'ماء ساخن على مدار السنة' : 'Hot water all year round',
      thumb: 'https://p16-common-sign.tiktokcdn.com/tos-alisg-p-0037/oIcB6G2AvjADmesBAw5RWofxEbBFqPEpgEwIFp~tplv-tiktokx-origin.image?dr=14575&x-expires=1786687200&x-signature=8If42F1Tzg8ArXs2qhp%2FK2GEnts%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=my3'
    },
    {
      id: '7526975358919363847',
      url: 'https://www.tiktok.com/@ihabbob66/video/7526975358919363847',
      title: language === 'ar' ? 'تحويل مصباح قديم إلى كاشف للمعادن' : 'Turning an old lamp into a metal detector',
      thumb: 'https://p16-common-sign.tiktokcdn.com/tos-alisg-p-0037/oABB91D3FARddL1LARVSACeE9nlEIUAfgoSm3E~tplv-tiktokx-origin.image?dr=14575&x-expires=1786687200&x-signature=Gdr0wPv113EhjVVUEp27mZ%2FkiOA%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=my3'
    },
  ]

  // أرقام التفاعل من صفحات الفيديو (يتم تحديثها دورياً)
  const videoStats = {
    '7631980035771059476': { likes: 1784, comments: 41 },
    '7526975358919363847': { likes: 900, comments: 30 },
    '7665325429045103892': { likes: 561, comments: 17 },
  }

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

        {/* الفيديوهات المميزة */}
        <h3 className="text-2xl font-bold mb-6 text-right">{language === 'ar' ? 'فيديوهات مميزة' : 'Ausgewählte Videos'}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
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
                  {t.openVideo}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* أحدث الفيديوهات */}
        <h3 className="text-2xl font-bold mb-6 text-right">{language === 'ar' ? 'جديد على القناة' : 'Neu auf dem Kanal'}</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {newVideos.map((video) => {
            const stats = videoStats[video.id] || { likes: null }
            return (
              <div
                key={video.id}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:scale-105 flex flex-col"
              >
                <div className="relative overflow-hidden">
                  <a href={video.url} target="_blank" rel="noopener noreferrer">
                    <img
                      src={video.thumb}
                      alt={video.title}
                      className="w-full h-64 object-cover"
                      loading="lazy"
                    />
                  </a>
                  {video.badge && (
                    <span className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                      {video.badge}
                    </span>
                  )}
                </div>
                <div className="p-4 flex-1 flex flex-col">
                  <h4 className="font-bold text-gray-800 mb-3 flex-1">{video.title}</h4>
                  {stats.likes && (
                    <div className="flex items-center justify-center gap-4 text-sm text-gray-500 mb-3">
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                        </svg>
                        {stats.likes.toLocaleString('ar-EG')} {t.likes}
                      </span>
                      {stats.comments ? (
                        <span className="flex items-center gap-1">
                          <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zm-4 0H9v2h2V9z" clipRule="evenodd" />
                          </svg>
                          {stats.comments.toLocaleString('ar-EG')}
                        </span>
                      ) : null}
                    </div>
                  )}
                  <a
                    href={video.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-accent text-white text-center px-4 py-2 rounded-lg font-semibold hover:bg-opacity-90 transition text-sm"
                  >
                    {t.openVideo}
                  </a>
                </div>
              </div>
            )
          })}
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
