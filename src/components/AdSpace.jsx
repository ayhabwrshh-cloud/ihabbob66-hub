const AdSpace = ({ position }) => {
  const positions = {
    top: 'mt-8 mb-8',
    middle: 'my-12',
    bottom: 'my-8'
  }

  const adSlots = {
    top: '1000000001',
    middle: '1000000002',
    bottom: '1000000003'
  }

  return (
    <div className={`${positions[position]} px-4`}>
      <div className="max-w-7xl mx-auto text-center">
        <ins
          className="adsbygoogle"
          style={{ display: 'block', minWidth: '280px', minHeight: '90px' }}
          data-ad-client="ca-pub-9048271460620123"
          data-ad-slot={adSlots[position]}
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
        <script type="text/javascript">
          (adsbygoogle = window.adsbygoogle || []).push({});
        </script>
      </div>
    </div>
  )
}

export default AdSpace
