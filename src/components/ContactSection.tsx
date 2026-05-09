import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { CONTACT } from '../config/contact';

function useIntersect(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

export default function ContactSection() {
  const { ref: headRef, visible: headVisible } = useIntersect(0.2);
  const { ref: cardsRef, visible: cardsVisible } = useIntersect(0.1);
  const { ref: ctaRef, visible: ctaVisible } = useIntersect(0.2);

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Alamat Kantor',
      content: 'Kuningan Timur, Jakarta Selatan',
      subContent: 'DKI Jakarta, Indonesia',
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Telepon',
      content: CONTACT.displayPhone,
      subContent: 'Tersedia untuk panggilan & WhatsApp',
      link: CONTACT.telLink,
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      content: CONTACT.email,
      subContent: 'Respons dalam 24 jam kerja',
      link: `mailto:${CONTACT.email}`,
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Jam Operasional',
      content: 'Senin - Minggu',
      subContent: '24 Jam Nonstop',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div
          ref={headRef}
          className="text-center mb-12"
          style={{ opacity: headVisible ? 1 : 0, transform: headVisible ? 'translateY(0)' : 'translateY(24px)', transition: 'opacity 0.65s ease, transform 0.65s ease' }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4" style={{ background: '#e6f4eb', color: '#209247' }}>
            Hubungi Kami
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Informasi Kontak
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Berbagai cara untuk terhubung dengan tim layanan pelanggan kami
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-green-50 rounded-2xl p-6 border-2 border-gray-100 hover:shadow-lg transition-all duration-300"
              style={{
                opacity: cardsVisible ? 1 : 0,
                transform: cardsVisible ? 'translateY(0)' : 'translateY(28px)',
                transition: `opacity 0.55s ease ${index * 0.1}s, transform 0.55s ease ${index * 0.1}s, box-shadow 0.3s`,
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderColor = '#209247'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.borderColor = '#e5e7eb'; }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 text-white rounded-xl shadow-lg flex-shrink-0" style={{ background: 'linear-gradient(135deg, #209247, #176832)' }}>
                  {info.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-semibold text-gray-500 mb-2 uppercase tracking-wide">
                    {info.title}
                  </h3>
                  {info.link ? (
                    <a href={info.link} className="text-lg font-bold text-gray-900 block mb-1 transition-colors duration-200" style={{ color: '#1a1a1a' }}
                      onMouseEnter={e => (e.currentTarget.style.color = '#209247')}
                      onMouseLeave={e => (e.currentTarget.style.color = '#1a1a1a')}
                    >
                      {info.content}
                    </a>
                  ) : (
                    <p className="text-lg font-bold text-gray-900 mb-1">{info.content}</p>
                  )}
                  <p className="text-sm text-gray-600">{info.subContent}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          ref={ctaRef}
          className="mt-12 rounded-2xl p-8 text-center text-white"
          style={{
            background: 'linear-gradient(135deg, #209247, #176832)',
            opacity: ctaVisible ? 1 : 0,
            transform: ctaVisible ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.7s ease, transform 0.7s ease'
          }}
        >
          <h3 className="text-2xl font-bold mb-3">Punya Pertanyaan Lain?</h3>
          <p className="mb-6 max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.85)' }}>
            Tim kami siap menjawab semua pertanyaan Anda dengan cepat dan profesional
          </p>
          <a
            href={CONTACT.waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 font-bold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg"
            style={{ background: '#FBBF24', color: '#14532d' }}
            onMouseEnter={e => (e.currentTarget.style.background = '#F59E0B')}
            onMouseLeave={e => (e.currentTarget.style.background = '#FBBF24')}
          >
            Tanya Sekarang via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
