import { MessageCircle, X } from 'lucide-react';
import { useState } from 'react';
import { CONTACT } from '../config/contact';

export default function WhatsAppFloat() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 right-8 w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 z-50 group"
        style={{ background: 'linear-gradient(135deg, #209247, #176832)' }}
        aria-label="Chat WhatsApp"
      >
        {isOpen ? (
          <X className="w-7 h-7 text-white" />
        ) : (
          <MessageCircle className="w-7 h-7 text-white group-hover:scale-110 transition-transform" />
        )}
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse"></span>
      </button>

      {isOpen && (
        <div className="fixed bottom-28 right-8 w-80 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-40 animate-slideUp">
          <div className="p-5 text-white" style={{ background: 'linear-gradient(135deg, #209247, #176832)' }}>
            <h3 className="font-bold text-lg">Chat dengan Kami</h3>
            <p className="text-sm mt-1" style={{ color: 'rgba(255,255,255,0.85)' }}>Respons cepat dalam hitungan menit</p>
          </div>

          <div className="p-4 space-y-3">
            {[
              'Informasi Layanan Resmi',
              'Panduan Bantuan Teknis',
              'Bantuan Kendala Akun',
              'Hubungi CS Resmi',
            ].map((label) => (
              <a
                key={label}
                href={CONTACT.waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-left p-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-700 font-medium flex items-center transition-all duration-200 hover:border-[#209247] hover:bg-[#f0faf3] hover:text-[#209247] block"
              >
                {label}
              </a>
            ))}

            <div className="pt-3 border-t border-gray-100">
              <a
                href={CONTACT.waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-white font-bold py-3.5 rounded-xl transition-all duration-300 hover:shadow-lg text-center block"
                style={{ background: 'linear-gradient(135deg, #209247, #176832)' }}
                onMouseEnter={e => (e.currentTarget.style.opacity = '0.9')}
                onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
              >
                Mulai Chat Sekarang
              </a>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slideUp { animation: slideUp 0.3s ease-out; }
      `}</style>
    </>
  );
}
