import { Clock, Shield, Zap, Award } from 'lucide-react';
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

export default function FeatureSection() {
  const { ref: headRef, visible: headVisible } = useIntersect(0.2);
  const { ref: cardsRef, visible: cardsVisible } = useIntersect(0.1);
  const { ref: ctaRef, visible: ctaVisible } = useIntersect(0.2);

  const features = [
    { icon: <Clock className="w-8 h-8" />, title: 'Layanan 24/7', description: 'Tim kami selalu siap membantu Anda kapan saja, setiap hari dalam seminggu tanpa henti.' },
    { icon: <Shield className="w-8 h-8" />, title: 'Aman & Terpercaya', description: 'Keamanan data dan privasi Anda adalah prioritas utama kami dengan sistem terenkripsi.' },
    { icon: <Zap className="w-8 h-8" />, title: 'Respons Cepat', description: 'Dapatkan solusi dalam waktu singkat dengan tim profesional yang berpengalaman.' },
    { icon: <Award className="w-8 h-8" />, title: 'Berkualitas Tinggi', description: 'Standar layanan terbaik dengan kepuasan pelanggan sebagai ukuran kesuksesan kami.' },
  ];

  return (
    <section className="py-16 md:py-24" style={{ background: 'linear-gradient(135deg, #f0faf3 0%, #ffffff 50%, #e8f5ec 100%)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div
          ref={headRef}
          className="text-center mb-12"
          style={{ opacity: headVisible ? 1 : 0, transform: headVisible ? 'translateY(0)' : 'translateY(24px)', transition: 'opacity 0.65s ease, transform 0.65s ease' }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4" style={{ background: '#e6f4eb', color: '#209247' }}>
            Mengapa Memilih Kami
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Keunggulan Layanan Kami
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Komitmen kami adalah memberikan pengalaman terbaik dengan standar profesional tinggi
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center group"
              style={{
                opacity: cardsVisible ? 1 : 0,
                transform: cardsVisible ? 'translateY(0)' : 'translateY(32px)',
                transition: `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`
              }}
            >
              <div
                className="inline-flex items-center justify-center w-16 h-16 text-white rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg"
                style={{ background: 'linear-gradient(135deg, #209247, #176832)' }}
              >
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div
          ref={ctaRef}
          className="mt-16 rounded-3xl p-8 md:p-12 text-white text-center relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #209247 0%, #176832 100%)',
            opacity: ctaVisible ? 1 : 0,
            transform: ctaVisible ? 'translateY(0)' : 'translateY(28px)',
            transition: 'opacity 0.7s ease, transform 0.7s ease'
          }}
        >
          <div className="absolute inset-0 pointer-events-none" style={{
            backgroundImage: `radial-gradient(circle at 10% 50%, rgba(255,255,255,0.07) 0%, transparent 50%),
                              radial-gradient(circle at 90% 20%, rgba(255,255,255,0.05) 0%, transparent 40%)`
          }}></div>
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Siap Membantu Anda Sekarang</h3>
            <p className="text-lg mb-8 max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.85)' }}>
              Jangan ragu untuk menghubungi kami. Tim profesional kami siap memberikan solusi terbaik untuk kebutuhan Anda.
            </p>
            <a
              href={CONTACT.waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 font-bold rounded-xl transition-all duration-300 hover:scale-105 shadow-xl"
              style={{ background: '#FBBF24', color: '#14532d' }}
              onMouseEnter={e => (e.currentTarget.style.background = '#F59E0B')}
              onMouseLeave={e => (e.currentTarget.style.background = '#FBBF24')}
            >
              Mulai Konsultasi Gratis
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
