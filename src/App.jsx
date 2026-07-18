import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Videos from './components/Videos'
import Products from './components/Products'
import AdSpace from './components/AdSpace'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [language, setLanguage] = useState('ar')

  return (
    <div className="min-h-screen bg-white" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <Header language={language} setLanguage={setLanguage} />
      <Hero language={language} />
      <AdSpace position="top" />
      <Videos language={language} />
      <AdSpace position="middle" />
      <Products language={language} />
      <AdSpace position="bottom" />
      <Contact language={language} />
      <Footer language={language} />
    </div>
  )
}

export default App
