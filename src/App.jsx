import { useState } from 'react'

import Header from './components/Header'
import Hero from './components/Hero'
import Videos from './components/Videos'
import Products from './components/Products'
import AdSpace from './components/AdSpace'
import Site123Section from './components/Site123Section'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Footer from './components/Footer'

// SEO Schema Markup (JSON-LD) - بيانات منظمة لمحركات البحث
const seoSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://pjigygpXXyjyrtlo-1.vercel.app/#website",
      "url": "https://pjigygpXXyjyrtlo-1.vercel.app",
      "name": "أبطال العرب",
      "alternateName": "ihabbob66",
      "description": "صانع محتوى مصري متخصص في الاختراعات والمشاريع اليدوية - فيديوهات تعليمية ومقالات وأدوات DIY",
      "inLanguage": ["ar", "de"],
      "publisher": {
        "@type": "Person",
        "name": "ابطال العرب",
        "url": "https://www.tiktok.com/@ihabbob66",
        "sameAs": ["https://www.tiktok.com/@ihabbob66"],
        "email": "mo_2006s@yahoo.com",
        "telephone": "+20 122 797 8643",
        "address": { "@type": "PostalAddress", "addressCountry": "EG" }
      },
      "sameAs": ["https://www.tiktok.com/@ihabbob66"]
    },
    {
      "@type": "Person",
      "@id": "https://pjigygpXXyjyrtlo-1.vercel.app/#person",
      "name": "ابطال العرب",
      "url": "https://www.tiktok.com/@ihabbob66",
      "jobTitle": "صانع محتوى - اختراعات ومشاريع يدوية",
      "knowsAbout": ["اختراعات", "مشاريع يدوية", "طاقة شمسية", "مولدات كهربائية", "DIY", "إلكترونيات"],
      "sameAs": ["https://www.tiktok.com/@ihabbob66"]
    }
  ]
}

function SeoSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(seoSchema) }}
    />
  )
}

function App() {
  const [language, setLanguage] = useState('ar')

  return (
    <div className="min-h-screen bg-white" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <SeoSchema />
      <Header language={language} setLanguage={setLanguage} />
      <Hero language={language} />
      <Site123Section language={language} />
      <AdSpace position="top" />
      <Videos language={language} />
      <Blog language={language} />
      <AdSpace position="middle" />
      <Products language={language} />
      <AdSpace position="bottom" />
      <Contact language={language} />
      <Footer language={language} />
    </div>
  )
}

export default App
