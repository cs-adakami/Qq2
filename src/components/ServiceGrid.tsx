import { BookOpen, Headphones, Settings, Users, FileText, HelpCircle } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { CONTACT } from '../config/contact';

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

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

export default function ServiceGrid() {
  const { ref: headRef, visible: headVisible } = useIntersect(0.2);
  const { ref: gridRef, visible: gridVisible } = useIntersect(0.1);

  const services: Service[] = [
    { icon: <BookOpen className="w-6 h-6" />, title: 'Informasi Produk', description: 'Pelajari fitur dan layanan lengkap yang tersedia untuk Anda' },
    { icon: <Headphones className="w-6 h-6" />, title: 'Bantuan Teknis', description: 'Solusi cepat untuk kendala teknis yang Anda alami' },
    { icon: <Settings className="w-6 h-6" />, title: 'Pengaturan Akun', description: 'Kelola dan sesuaikan preferensi akun Anda dengan mudah' },
    { icon: <Users className="w-6 h-6" />, title: 'Konsultasi Personal', description: 'Diskusi langsung dengan tim ahli kami untuk solusi terbaik' },
    { icon: <FileText className="w-6 h-6" />, title: 'Panduan Lengkap', description: 'Akses dokumentasi dan tutorial penggunaan aplikasi' },
    { icon: <HelpCircle className="w-6 h-6" />, title: 'FAQ & Dukungan', description: 'Temukan jawaban cepat untuk pertanyaan umum Anda' },
  ];

  return (
    <section id="services" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div
          ref={headRef}
          className="text-center mb-12"
          style={{ opacity: headVisible ? 1 : 0, transform: headVisible ? 'translateY(0)' : 'translateY(24px)', transition: 'opacity 0.65s ease, transform 0.65s ease' }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4" style={{ background: '#e6f4eb', color: '#209247' }}>
            Layanan Kami
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Bagaimana Kami Bisa Membantu?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Pilih kategori layanan yang sesuai dengan kebutuhan Anda untuk mendapatkan bantuan yang tepat
          </p>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <a
              key={index}
              href={CONTACT.waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group text-left bg-white rounded-2xl p-6 border-2 border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 block"
              style={{
                borderColor: 'transparent',
                boxShadow: '0 0 0 2px #e5e7eb',
                opacity: gridVisible ? 1 : 0,
                transform: gridVisible ? 'translateY(0)' : 'translateY(32px)',
                transition: `opacity 0.55s ease ${index * 0.08}s, transform 0.55s ease ${index * 0.08}s, box-shadow 0.3s, border-color 0.3s`
              }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 8px 32px rgba(32,146,71,0.18)'; e.currentTarget.style.borderColor = '#209247'; }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 0 0 2px #e5e7eb'; e.currentTarget.style.borderColor = 'transparent'; }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 text-white rounded-xl group-hover:scale-110 transition-transform duration-300 shadow-lg flex-shrink-0" style={{ background: 'linear-gradient(135deg, #209247, #176832)' }}>
                  {service.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 transition-colors duration-200" style={{ color: undefined }}>
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
