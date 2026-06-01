import { useState, useEffect } from 'react';

interface EligibilityResultPageProps {
  cnic: string;
  onProceed: () => void;
  onHome: () => void;
}

export default function EligibilityResultPage({ cnic, onProceed, onHome }: EligibilityResultPageProps) {
  const [showCard, setShowCard] = useState(false);
  const [showSteps, setShowSteps] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setShowCard(true), 400);
    const t2 = setTimeout(() => setShowSteps(true), 800);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  const maskedCNIC = cnic.slice(0, 7) + '*****' + cnic.slice(-1);

  const whatsappMessage = encodeURIComponent(
    `🚨 BARI KHUSHKABRI! 🚨\n\n` +
    `🇵🇰 PM Youth Imdad Program 2026\n` +
    `Hukomat ne Rs. 25,000 MAHANA cash relief ka elaan kar diya!\n\n` +
    `✅ Har mustahiq ko Rs. 25,000/month\n` +
    `✅ 100% FREE — Sirf CNIC check karein\n` +
    `✅ Registration jald BAND ho raha hai! ⏰\n\n` +
    `🔗 Eligibility Check: ${window.location.href}\n\n` +
    `⚠️ DER NA KAREIN — apne har group mein share karein!`
  );

  return (
    <section className="bg-slate-50 min-h-screen">
      <div className="max-w-3xl mx-auto px-6 py-12 md:py-16">
        {/* Navigation */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={onHome}
            className="text-sm text-slate-400 hover:text-slate-600 transition-colors flex items-center gap-1.5"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Home
          </button>
          <span className="text-[10px] text-slate-400 uppercase tracking-wider font-medium">
            Result Unlocked
          </span>
        </div>

        {/* Celebration Header */}
        <div className="text-center mb-8 animate-fade-in">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center border border-emerald-200/60">
                <svg className="w-10 h-10 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="absolute -top-1 -right-1 w-5 h-5 bg-amber-400 rounded-full flex items-center justify-center shadow-sm">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-2">
            Mubarak Ho! 🎊
          </h1>
          <p className="font-urdu text-lg text-emerald-700/70 leading-[2.4]">
            مبارک ہو! آپ اس پروگرام کے لیے اہل ہیں
          </p>
          <p className="text-slate-400 text-sm mt-3">
            CNIC <span className="font-mono text-slate-600">{maskedCNIC}</span> — successfully verified
          </p>
        </div>

        {/* Thank you for sharing banner */}
        <div className="bg-emerald-50 border border-emerald-200/60 rounded-xl px-4 py-3 mb-8 flex items-center justify-center gap-2 animate-fade-in">
          <svg className="w-4 h-4 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span className="text-emerald-800 text-xs font-medium">
            Shukriya! Aapne 5 groups mein share kiya 🇵🇰
          </span>
        </div>

        {/* Eligibility Card */}
        <div className={`transition-all duration-700 ${showCard ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="bg-white rounded-2xl border border-slate-200/80 shadow-[0_2px_16px_rgba(0,0,0,0.04)] overflow-hidden mb-8">
            <div className="bg-emerald-700 px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-300 rounded-full animate-pulse" />
                <span className="text-white/90 text-xs font-medium tracking-wider uppercase">
                  Eligibility Status
                </span>
              </div>
              <span className="bg-white/20 backdrop-blur-sm text-white text-[10px] font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                Verified
              </span>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-2 gap-x-8 gap-y-5">
                <div className="border-b border-slate-100 pb-4">
                  <p className="text-[11px] text-slate-400 uppercase tracking-wider mb-1">Monthly Imdad</p>
                  <p className="text-xl font-bold text-slate-900">Rs. 25,000</p>
                </div>
                <div className="border-b border-slate-100 pb-4">
                  <p className="text-[11px] text-slate-400 uppercase tracking-wider mb-1">Program</p>
                  <p className="text-base font-semibold text-slate-900">Youth Imdad 2026</p>
                </div>
                <div className="border-b border-slate-100 pb-4">
                  <p className="text-[11px] text-slate-400 uppercase tracking-wider mb-1">Status</p>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                    <p className="text-sm font-medium text-emerald-700">Eligible</p>
                  </div>
                </div>
                <div className="border-b border-slate-100 pb-4">
                  <p className="text-[11px] text-slate-400 uppercase tracking-wider mb-1">Next Payment</p>
                  <p className="text-sm font-medium text-slate-900">Next Month Cycle</p>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-100">
                <button
                  onClick={onProceed}
                  className="w-full bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-sm py-3.5 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center gap-2.5"
                >
                  Proceed to Official Portal
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </button>
                <p className="text-center text-[11px] text-slate-400 mt-3">
                  Redirecting to 8171.bisp.gov.pk for final registration
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Urgency Banner */}
        <div className={`bg-amber-50 border border-amber-200/80 rounded-2xl p-5 mb-8 flex items-start gap-4 transition-all duration-700 ${showSteps ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
            <svg className="w-5 h-5 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          <div>
            <h3 className="text-amber-800 font-semibold text-sm mb-1">
              Registration Closing Soon
            </h3>
            <p className="text-amber-700/80 text-xs leading-relaxed">
              Hukumat ne kaha hai ke jald hi registration band ho jayega. 
              Der na karein — abhi official portal par register ho jayein.
            </p>
          </div>
        </div>

        {/* AD Zone */}
        <div className={`ad-zone mb-8 p-6 transition-all duration-700 ${showSteps ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <span className="text-slate-400 text-xs font-medium">Advertisement — 728 × 90</span>
        </div>

        {/* Steps */}
        <div className={`transition-all duration-700 delay-200 ${showSteps ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="bg-white rounded-2xl border border-slate-200/80 shadow-[0_2px_16px_rgba(0,0,0,0.04)] p-6 md:p-8 mb-8">
            <h2 className="text-base font-semibold text-slate-900 mb-6 flex items-center gap-2">
              <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              Next Steps — Kaise Register Karein
            </h2>

            <div className="space-y-0">
              {[
                {
                  step: 1,
                  title: 'Visit the Official Portal',
                  desc: 'Neeche diye gaye button se official 8171 Web Portal par jayein.',
                  urdu: 'سرکاری ویب پورٹل پر جائیں',
                },
                {
                  step: 2,
                  title: 'Enter & Verify CNIC',
                  desc: `Apna CNIC number (${maskedCNIC}) official portal par dalein aur verify karein.`,
                  urdu: 'شناختی کارڈ نمبر درج اور تصدیق کریں',
                },
                {
                  step: 3,
                  title: 'Complete Registration',
                  desc: '"Apply for Cash Imdad" par click karein. Confirmation SMS aa jayega.',
                  urdu: 'رجسٹریشن مکمل کریں اور تصدیقی SMS وصول کریں',
                },
              ].map((item, i) => (
                <div key={i}>
                  {i > 0 && (
                    <div className="ad-zone my-4 p-4">
                      <span className="text-slate-400 text-xs font-medium">Advertisement — 300 × 250</span>
                    </div>
                  )}
                  <div className="flex gap-4 py-4">
                    <div className="flex-shrink-0">
                      <div className="w-9 h-9 bg-emerald-50 border border-emerald-200 rounded-full flex items-center justify-center text-emerald-700 font-semibold text-sm">
                        {item.step}
                      </div>
                    </div>
                    <div className="pt-1">
                      <h3 className="font-semibold text-slate-900 text-sm mb-0.5">{item.title}</h3>
                      <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
                      <p className="font-urdu text-emerald-700/60 text-xs mt-1 leading-[2.2]">{item.urdu}</p>
                    </div>
                  </div>
                  {i < 2 && <div className="ml-4 h-px bg-slate-100" />}
                </div>
              ))}
            </div>

            <div className="mt-6 pt-5 border-t border-slate-100">
              <button
                onClick={onProceed}
                className="w-full bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-sm py-3.5 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center gap-2.5"
              >
                Open 8171 Portal
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Final share reminder */}
        <div className="bg-emerald-700 rounded-2xl p-8 text-center text-white mb-8">
          <h3 className="text-lg font-semibold mb-2">
            Keep Sharing — Keep Helping
          </h3>
          <p className="text-emerald-200/80 text-sm mb-5 max-w-md mx-auto">
            Aapne 5 groups mein share kiya — bohat shukriya! Ab aur logon tak bhi pohanchayein.
          </p>
          <button
            onClick={() => window.open(`https://wa.me/?text=${whatsappMessage}`, '_blank')}
            className="bg-white/10 hover:bg-white/20 text-white text-sm font-medium px-6 py-2.5 rounded-lg transition-all inline-flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Share More on WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
}
