import { useState } from 'react';

interface HeroSectionProps {
  onCheckEligibility: (cnic: string) => void;
}

export default function HeroSection({ onCheckEligibility }: HeroSectionProps) {
  const [cnic, setCnic] = useState('');
  const [error, setError] = useState('');
  const [isChecking, setIsChecking] = useState(false);

  const formatCNIC = (value: string) => {
    const digits = value.replace(/\D/g, '').slice(0, 13);
    let formatted = digits;
    if (digits.length > 5) {
      formatted = digits.slice(0, 5) + '-' + digits.slice(5);
    }
    if (digits.length > 12) {
      formatted = digits.slice(0, 5) + '-' + digits.slice(5, 12) + '-' + digits.slice(12, 13);
    }
    return formatted;
  };

  const validateCNIC = (value: string) => {
    const cleaned = value.replace(/-/g, '');
    return /^\d{13}$/.test(cleaned);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!cnic.trim()) {
      setError('Apna CNIC number darj karein');
      return;
    }

    if (!validateCNIC(cnic)) {
      setError('Sahi CNIC format: 12345-1234567-1');
      return;
    }

    setIsChecking(true);
    setTimeout(() => {
      setIsChecking(false);
      onCheckEligibility(cnic);
    }, 2500);
  };

  return (
    <section className="relative overflow-hidden bg-white">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23022c12' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Gradient accent line at top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-800 via-emerald-600 to-gold-400" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-16 pb-14 md:pt-24 md:pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="animate-fade-in-up">
            {/* Pill badge */}
            <div className="inline-flex items-center gap-2.5 bg-emerald-50 border border-emerald-200/60 rounded-full px-4 py-1.5 mb-8">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-600"></span>
              </span>
              <span className="text-emerald-800 text-xs font-semibold tracking-wide uppercase">
                Registration Open — 2026
              </span>
            </div>

            {/* Main heading */}
            <h1 className="text-4xl md:text-5xl lg:text-[3.4rem] font-extrabold tracking-tight leading-[1.08] text-slate-900 mb-5">
              Rs. 25,000{' '}
              <span className="relative">
                <span className="bg-gradient-to-r from-emerald-700 to-emerald-600 bg-clip-text text-transparent">
                  Monthly
                </span>
              </span>
              <br />
              Cash Imdad
            </h1>

            {/* Urdu subtitle */}
            <p className="font-urdu text-lg text-emerald-800/70 mb-5 leading-[2.4]">
              حکومت پاکستان — ماہانہ پچیس ہزار روپے کیش امداد
            </p>

            {/* Description */}
            <p className="text-slate-500 text-base leading-relaxed mb-8 max-w-md">
              PM Youth Imdad Program 2026 ke tehat, har mustahiq Pakistani khandaan ko mahana 
              cash relief. Apni eligibility foran check karein — bilkul muft.
            </p>

            {/* Trust row */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Free Eligibility Check
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Official 8171 Portal
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                No Data Collected
              </div>
            </div>
          </div>

          {/* Right: CNIC Checker Card */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.15s', animationFillMode: 'backwards' }}>
            <div className="bg-white rounded-2xl border border-slate-200/80 shadow-[0_2px_24px_rgba(0,0,0,0.06)] p-7 md:p-8">
              {/* Card header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center">
                  <svg className="w-5 h-5 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-base font-semibold text-slate-900">Eligibility Check</h2>
                  <p className="text-xs text-slate-400">Apna CNIC number darj karein</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs font-medium text-slate-500 mb-2 tracking-wide uppercase">
                    CNIC Number
                  </label>
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0" />
                      </svg>
                    </div>
                    <input
                      type="text"
                      value={cnic}
                      onChange={(e) => {
                        setCnic(formatCNIC(e.target.value));
                        setError('');
                      }}
                      placeholder="12345-1234567-1"
                      className="cnic-input w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-base text-center focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all text-slate-800 placeholder-slate-300"
                      maxLength={15}
                      inputMode="numeric"
                      aria-label="CNIC Number"
                    />
                  </div>
                  {error && (
                    <p className="mt-2 text-xs text-red-500 flex items-center gap-1.5">
                      <svg className="w-3.5 h-3.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      {error}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isChecking}
                  className="w-full bg-emerald-700 hover:bg-emerald-800 disabled:bg-emerald-700/70 text-white font-semibold text-sm py-3.5 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 disabled:cursor-not-allowed flex items-center justify-center gap-2.5 animate-soft-pulse"
                >
                  {isChecking ? (
                    <>
                      <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Checking...
                    </>
                  ) : (
                    <>
                      Check Eligibility
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </>
                  )}
                </button>
              </form>

              {/* Divider */}
              <div className="flex items-center gap-3 mt-5 mb-4">
                <div className="flex-1 h-px bg-slate-100"></div>
                <span className="text-[10px] text-slate-400 uppercase tracking-widest font-medium">Secure</span>
                <div className="flex-1 h-px bg-slate-100"></div>
              </div>

              {/* Trust indicators */}
              <div className="flex items-center justify-center gap-5 text-[11px] text-slate-400">
                <span className="flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5 text-emerald-600/60" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                  100% Secure
                </span>
                <span className="flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5 text-emerald-600/60" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  No Data Saved
                </span>
                <span className="flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5 text-emerald-600/60" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                  </svg>
                  Instant Result
                </span>
              </div>
            </div>

            {/* Stats below card */}
            <div className="grid grid-cols-3 gap-4 mt-6">
              {[
                { label: 'Registered', value: '2.5M+' },
                { label: 'Monthly', value: 'Rs. 25K' },
                { label: 'Helpline', value: '8171' },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-base font-bold text-slate-900">{stat.value}</div>
                  <div className="text-[11px] text-slate-400 uppercase tracking-wide mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
    </section>
  );
}
