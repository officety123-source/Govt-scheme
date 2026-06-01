import { useState, useEffect } from 'react';

export default function CountdownTimer() {
  const [time, setTime] = useState(() => {
    // Start from a random time between 23:47:00 and 23:59:59
    const h = 23;
    const m = Math.floor(Math.random() * 13) + 47;
    const s = Math.floor(Math.random() * 60);
    return { h, m, s };
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(prev => {
        let { h, m, s } = prev;
        s--;
        if (s < 0) { s = 59; m--; }
        if (m < 0) { m = 59; h--; }
        if (h < 0) { h = 23; m = 59; s = 59; }
        return { h, m, s };
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const pad = (n: number) => String(n).padStart(2, '0');

  return (
    <div className="bg-white border-b border-slate-100 py-2.5 px-4">
      <div className="max-w-6xl mx-auto flex items-center justify-center gap-3">
        <div className="flex items-center gap-2 text-xs text-slate-500">
          <svg className="w-3.5 h-3.5 text-amber-500 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          <span className="font-medium hidden sm:inline">Registration deadline approaching:</span>
          <span className="font-medium sm:hidden">Deadline:</span>
        </div>
        <div className="flex gap-1">
          {[
            { val: pad(time.h), label: 'H' },
            { val: pad(time.m), label: 'M' },
            { val: pad(time.s), label: 'S' },
          ].map((item, i) => (
            <div key={i} className="flex items-center">
              <div className="bg-slate-900 text-white rounded-md px-2 py-0.5 min-w-[30px] text-center">
                <span className="text-[11px] font-mono font-semibold tabular-nums">{item.val}</span>
              </div>
              {i < 2 && <span className="text-slate-300 text-xs mx-0.5 font-mono">:</span>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
