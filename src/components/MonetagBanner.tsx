import { useEffect, useRef } from 'react';

export default function MonetagBanner() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Agar container maujood hai aur pehle se script load nahi hui
    if (containerRef.current && containerRef.current.children.length === 0) {
      const script = document.createElement('script');
      
      // Monetag ka code logic
      script.dataset.zone = '11085801';
      script.src = 'https://nap5k.com/tag.min.js';
      script.async = true;

      containerRef.current.appendChild(script);
    }
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="w-full min-h-[90px] flex items-center justify-center bg-slate-50 border border-slate-100 rounded-xl overflow-hidden"
    />
  );
}
