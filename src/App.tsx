import { useState } from 'react';
import LandingPage from './pages/LandingPage';
import ShareGatePage from './pages/ShareGatePage';
import EligibilityResultPage from './pages/EligibilityResultPage';

type AppPage = 'landing' | 'gate' | 'result';

export default function App() {
  const [currentPage, setCurrentPage] = useState<AppPage>('landing');
  const [cnic, setCnic] = useState('');

  // Landing → Gate
  const handleCheckEligibility = (cnicNumber: string) => {
    setCnic(cnicNumber);
    setCurrentPage('gate');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Gate → Result (called after 5 shares)
  const handleGateComplete = () => {
    setCurrentPage('result');
  };

  // Result → External portal
  const handleProceed = () => {
    window.open('https://8171.bisp.gov.pk/', '_blank');
  };

  // Any → Home
  const handleGoHome = () => {
    setCurrentPage('landing');
    setCnic('');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Router
  switch (currentPage) {
    case 'gate':
      return (
        <ShareGatePage
          cnic={cnic}
          onComplete={handleGateComplete}
        />
      );

    case 'result':
      return (
        <EligibilityResultPage
          cnic={cnic}
          onProceed={handleProceed}
          onHome={handleGoHome}
        />
      );

    default:
      return (
        <LandingPage
          onCheckEligibility={handleCheckEligibility}
        />
      );
  }
}
