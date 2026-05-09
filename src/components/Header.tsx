import { Phone, Mail, ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';
import { CONTACT } from '../config/contact';

function AdaKamiLogo() {
  return (
    <svg className="w-8 h-8" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="45" fill="white" opacity="0.95"/>
      <path d="M35 55C35 48 40 42 47 42C54 42 59 48 59 55" stroke="white" strokeWidth="8" fill="none" strokeLinecap="round"/>
      <path d="M28 65C28 55 35 48 44 48C53 48 60 55 60 65" stroke="white" strokeWidth="6" fill="none" strokeLinecap="round"/>
      <path d="M65 60C65 52 70 46 77 46C84 46 89 52 89 60" stroke="white" strokeWidth="6" fill="none" strokeLinecap="round"/>
      <circle cx="50" cy="50" r="6" fill="#FBBF24"/>
      <circle cx="76" cy="56" r="4" fill="#FBBF24"/>
    </svg>
  );
}

export default function Header() {
  const [navVisible, setNavVisible] = useState(false);
  const [heroVisible, setHeroVisible] = useState(false);
  const [buttonsVisible, setButtonsVisible] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setNavVisible(true), 80);
    const t2 = setTimeout(() => setHeroVisible(true), 350);
    const t3 = setTimeout(() => setButtonsVisible(true), 650);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  return (
    <header className="relative text-white" style={{ background: 'linear-gradient(135deg, #176832 0%, #209247 55%, #1b8040 100%)' }}>
      <div className="absolute inset-0 opacity-20 pointer-events-none" style={{
        backgroundImage: `radial-gradient(circle at 20% 50%, rgba(255,255,255,0.08) 0%, transparent 50%),
                          radial-gradient(circle at 80% 20%, rgba(255,255,255,0.06) 0%, transparent 40%)`
      }}></div>

      <div
        className="relative max-w-7xl mx-auto px-6 py-4 transition-all duration-600"
        style={{ opacity: navVisible ? 1 : 0, transform: navVisible ? 'translateY(0)' : 'translateY(-16px)', transition: 'opacity 0.6s ease, transform 0.6s ease' }}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-white/10 backdrop-blur-sm rounded-xl">
              <AdaKamiLogo />
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight">ᗩᗪᗩKᗩᗰI</h1>
              <p className="text-xs" style={{ color: 'rgba(255,255,255,0.75)' }}>Layanan Pelanggan Resmi</p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <a href={CONTACT.telLink} className="flex items-center gap-2 text-sm font-semibold hover:text-yellow-300 transition-colors duration-200">
              <Phone className="w-4 h-4" />
              <span>{CONTACT.displayPhone}</span>
            </a>
            <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-2 text-sm hover:text-yellow-300 transition-colors duration-200">
              <Mail className="w-4 h-4" />
              <span>{CONTACT.email}</span>
            </a>
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/10 bg-black/5">
        <div className="max-w-7xl mx-auto px-6 py-14 md:py-20">
          <div className="max-w-3xl">
            <div
              style={{ opacity: navVisible ? 1 : 0, transform: navVisible ? 'translateY(0)' : 'translateY(16px)', transition: 'opacity 0.6s ease 0.2s, transform 0.6s ease 0.2s' }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-xs font-semibold mb-6">
                <div className="w-2 h-2 bg-yellow-300 rounded-full animate-pulse"></div>
                Tersedia 24 Jam Setiap Hari
              </div>
            </div>

            <h2
              className="text-4xl md:text-5xl font-bold mb-5 leading-tight"
              style={{ opacity: heroVisible ? 1 : 0, transform: heroVisible ? 'translateY(0)' : 'translateY(28px)', transition: 'opacity 0.7s ease, transform 0.7s ease' }}
            >
              Pusat Bantuan &<br />Informasi Layanan
            </h2>

            <p
              className="text-lg leading-relaxed mb-10"
              style={{ color: 'rgba(255,255,255,0.85)', opacity: heroVisible ? 1 : 0, transform: heroVisible ? 'translateY(0)' : 'translateY(20px)', transition: 'opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s' }}
            >
              Solusi cepat dan terpercaya untuk semua kebutuhan bantuan Anda. Tim profesional kami siap membantu dengan respons yang ramah dan efisien.
            </p>

            <div
              className="flex flex-wrap gap-4"
              style={{ opacity: buttonsVisible ? 1 : 0, transform: buttonsVisible ? 'translateY(0)' : 'translateY(16px)', transition: 'opacity 0.6s ease, transform 0.6s ease' }}
            >
              <a
                href={CONTACT.waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 font-bold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg"
                style={{ background: '#FBBF24', color: '#14532d' }}
                onMouseEnter={e => (e.currentTarget.style.background = '#F59E0B')}
                onMouseLeave={e => (e.currentTarget.style.background = '#FBBF24')}
              >
                Hubungi Sekarang
              </a>
              <button
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/25"
              >
                Lihat Layanan
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
