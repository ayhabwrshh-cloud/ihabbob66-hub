const AdSpace = ({ position }) => {
  const positions = {
    top: 'mt-8 mb-8',
    middle: 'my-12',
    bottom: 'my-8'
  }

  return (
    <div className={`${positions[position]} px-4`}>
      <div className="max-w-7xl mx-auto">
        <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
          <p className="text-gray-600 font-semibold mb-2">
            {position === 'top' && '📢 مساحة إعلانية - Google AdSense (أعلى الصفحة)'}
            {position === 'middle' && '📢 مساحة إعلانية - Google AdSense (منتصف الصفحة)'}
            {position === 'bottom' && '📢 مساحة إعلانية - Google AdSense (أسفل الصفحة)'}
          </p>
          <p className="text-gray-500 text-sm">
            {position === 'top' && 'Ad Space - Google AdSense (Top of Page)'}
            {position === 'middle' && 'Ad Space - Google AdSense (Middle of Page)'}
            {position === 'bottom' && 'Ad Space - Google AdSense (Bottom of Page)'}
          </p>
          <div className="mt-4 p-4 bg-white rounded inline-block">
            <code className="text-xs text-gray-600">
              &lt;ins className="adsbygoogle"&gt;&lt;/ins&gt;
            </code>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            أضف كود Google AdSense هنا | Fügen Sie hier den Google AdSense-Code ein
          </p>
        </div>
      </div>
    </div>
  )
}

export default AdSpace
