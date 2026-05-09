import { CONTACT } from '../config/contact';

function AdaKamiLogoFooter() {
  return (
    <svg className="w-6 h-6" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="45" fill="white" opacity="0.95"/>
      <path d="M35 55C35 48 40 42 47 42C54 42 59 48 59 55" stroke="white" strokeWidth="8" fill="none" strokeLinecap="round"/>
      <path d="M28 65C28 55 35 48 44 48C53 48 60 55 60 65" stroke="white" strokeWidth="6" fill="none" strokeLinecap="round"/>
      <path d="M65 60C65 52 70 46 77 46C84 46 89 52 89 60" stroke="white" strokeWidth="6" fill="none" strokeLinecap="round"/>
      <circle cx="50" cy="50" r="6" fill="#FBBF24"/>
      <circle cx="76" cy="56" r="4" fill="#FBBF24"/>
    </svg>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const services = ['Informasi Produk', 'Bantuan Teknis', 'Pengaturan Akun', 'Konsultasi'];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-xl" style={{ background: '#209247' }}>
                <AdaKamiLogoFooter />
              </div>
              <div>
                <h3 className="text-xl font-bold">AdaKami</h3>
                <p className="text-sm text-gray-400">Layanan Pelanggan Resmi</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-md">
              Pusat informasi dan bantuan resmi AdaKami yang memberikan dukungan terpadu 24 jam untuk kenyamanan dan kepuasan pelanggan.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Layanan</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {services.map((s) => (
                <li key={s}>
                  <a href={CONTACT.waLink} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Kontak</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Kuningan Timur</li>
              <li>Jakarta Selatan</li>
              <li>DKI Jakarta</li>
              <li className="pt-2">
                <a href={CONTACT.telLink} className="font-semibold transition-colors duration-200" style={{ color: '#4ade80' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#86efac')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#4ade80')}
                >
                  {CONTACT.displayPhone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © {currentYear} AdaKami. Semua hak cipta dilindungi undang-undang.
            </p>
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#209247' }}></div>
              <span>Layanan Aktif 24/7</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
