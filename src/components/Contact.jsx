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
    <section id="contact" className="py-16 px-4 bg-light">
      <div className="max-w-7xl mx-auto">
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
              <p className="text-gray-700">+966 XX XXX XXXX</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-accent">📍 {t.address}</h3>
              <p className="text-gray-700">{language === 'ar' ? 'المملكة العربية السعودية' : 'Saudi-Arabien'}</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-accent">🌐 {t.followUs}</h3>
              <div className="flex gap-4">
                <a href="https://www.tiktok.com/@ihabbob66" target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-accent transition">
                  🎵
                </a>
                <a href="#" className="text-3xl hover:text-accent transition">
                  📱
                </a>
                <a href="#" className="text-3xl hover:text-accent transition">
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
