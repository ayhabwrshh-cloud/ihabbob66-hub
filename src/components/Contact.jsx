import { useState } from 'react'

const Contact = ({ language }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const content = {
    ar: {
      title: 'تواصل معنا',
      subtitle: 'هل لديك أي استفسارات؟ تواصل معنا الآن',
      name: 'الاسم',
      email: 'البريد الإلكتروني',
      message: 'الرسالة',
      send: 'إرسال',
      phone: 'رقم الهاتف',
      address: 'العنوان',
      followUs: 'تابعنا',
      success: 'تم إرسال رسالتك بنجاح!'
    },
    de: {
      title: 'Kontaktieren Sie uns',
      subtitle: 'Haben Sie Fragen? Kontaktieren Sie uns jetzt',
      name: 'Name',
      email: 'E-Mail',
      message: 'Nachricht',
      send: 'Senden',
      phone: 'Telefonnummer',
      address: 'Adresse',
      followUs: 'Folgen Sie uns',
      success: 'Ihre Nachricht wurde erfolgreich versendet!'
    }
  }

  const t = content[language]

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(t.success)
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="relative py-16 px-4 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/contact-bg.png"
          alt="Contact Background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-light/80"></div>
      </div>
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl font-bold mb-4">{t.title}</h2>
          <p className="text-gray-600 text-lg">{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block font-semibold mb-2">{t.name}</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-accent"
                  placeholder={t.name}
                />
              </div>
              <div>
                <label className="block font-semibold mb-2">{t.email}</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-accent"
                  placeholder={t.email}
                />
              </div>
              <div>
                <label className="block font-semibold mb-2">{t.message}</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-accent resize-none"
                  placeholder={t.message}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-accent text-white py-3 rounded-lg font-bold hover:bg-opacity-90 transition"
              >
                {t.send}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-accent">📞 {t.phone}</h3>
              <p className="text-gray-700" dir="ltr">+20 122 797 8643</p>
              <a href="https://wa.me/201227978643" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline text-sm">
                {language === 'ar' ? 'تواصل عبر واتساب' : 'Kontakt über WhatsApp'}
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-accent">✉️ {language === 'ar' ? 'البريد الإلكتروني' : 'E-Mail'}</h3>
              <p className="text-gray-700" dir="ltr">mo_2006s@yahoo.com</p>
              <a href="mailto:mo_2006s@yahoo.com" className="text-accent hover:underline text-sm">
                {language === 'ar' ? 'أرسل بريد إلكتروني' : 'E-Mail senden'}
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-accent">📍 {t.address}</h3>
              <p className="text-gray-700">{language === 'ar' ? 'مصر' : 'Ägypten'}</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-accent">🌐 {t.followUs}</h3>
              <div className="flex gap-4">
                <a href="https://www.tiktok.com/@ihabbob66" target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-accent transition" title="TikTok">
                  🎵
                </a>
                <a href="https://wa.me/201227978643" target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-accent transition" title="WhatsApp">
                  💬
                </a>
                <a href="mailto:mo_2006s@yahoo.com" className="text-3xl hover:text-accent transition" title="Email">
                  📧
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
