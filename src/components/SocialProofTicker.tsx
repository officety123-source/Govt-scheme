import { useState, useEffect } from 'react';

const names = [
  { name: 'Muhammad A.', city: 'Lahore' },
  { name: 'Fatima B.', city: 'Karachi' },
  { name: 'Abdul R.', city: 'Peshawar' },
  { name: 'Ayesha K.', city: 'Islamabad' },
  { name: 'Imran A.', city: 'Multan' },
  { name: 'Sana U.', city: 'Faisalabad' },
  { name: 'Zainab A.', city: 'Rawalpindi' },
  { name: 'Hassan R.', city: 'Quetta' },
];

export default function SocialProofTicker() {
  const [notification, setNotification] = useState<{ name: string; city: string } | null>(null);
  const [visible, setVisible] = useState(false);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const scheduleNext = () => {
      const delay = 6000 + Math.random() * 8000;
      return setTimeout(() => {
        const person = names[Math.floor(Math.random() * names.length)];
        setNotification(person);
        setAnimating(true);
        
        setTimeout(() => setVisible(true), 50);

        setTimeout(() => {
          setVisible(false);
          setTimeout(() => setAnimating(false), 400);
          scheduleNext();
        }, 4000);
      }, delay);
    };

    const initial = setTimeout(() => {
      const person = names[Math.floor(Math.random() * names.length)];
      setNotification(person);
      setAnimating(true);
      setTimeout(() => setVisible(true), 50);
      setTimeout(() => {
        setVisible(false);
        setTimeout(() => setAnimating(false), 400);
        scheduleNext();
      }, 4000);
    }, 5000);

    return () => clearTimeout(initial);
  }, []);

  if (!notification || !animating) return null;

  return (
    <div
      className={`fixed bottom-20 left-4 md:left-6 z-50 transition-all duration-500 ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
      }`}
    >
      <div className="bg-white rounded-xl shadow-lg border border-slate-200/80 px-4 py-3 flex items-center gap-3 max-w-[280px]">
        <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
          <svg className="w-4 h-4 text-emerald-700" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
        </div>
        <div className="min-w-0">
          <p className="text-xs font-medium text-slate-800 truncate">
            {notification.name} just checked eligibility
          </p>
          <p className="text-[10px] text-slate-400 flex items-center gap-1">
            <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.5l-4.95-4.55a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            {notification.city} • just now
          </p>
        </div>
      </div>
    </div>
  );
}
