import { SpeedInsights } from '@vercel/speed-insights/react';
import { Analytics } from '@vercel/analytics/react';
import ProtectedContent from './components/ProtectedContent';
import Header from './components/Header';
import ServiceGrid from './components/ServiceGrid';
import FeatureSection from './components/FeatureSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

function App() {
  return (
    <ProtectedContent>
      <div className="min-h-screen bg-white">
        <Header />

        <main className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-white to-emerald-50 -z-10"></div>

          <ServiceGrid />
          <FeatureSection />
          <ContactSection />
        </main>

        <Footer />
        <WhatsAppFloat />
        <SpeedInsights />
        <Analytics />
      </div>
    </ProtectedContent>
  );
}

export default App;
