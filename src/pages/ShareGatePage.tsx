import { useState, useEffect, useCallback } from 'react';

interface ShareGatePageProps {
  cnic: string;
  onComplete: () => void;
}

export default function ShareGatePage({ cnic, onComplete }: ShareGatePageProps) {
  const [shares, setShares] = useState(0);
  const [sharing, setSharing] = useState(false);
  const [shareCooldown, setShareCooldown] = useState(false);
  const [cooldownSec, setCooldownSec] = useState(0);

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

  // Cooldown countdown
  useEffect(() => {
    if (!shareCooldown || cooldownSec <= 0) return;
    const t = setTimeout(() => setCooldownSec(prev => prev - 1), 1000);
    return () => clearTimeout(t);
  }, [shareCooldown, cooldownSec]);

  useEffect(() => {
    if (shareCooldown && cooldownSec <= 0) {
      setShareCooldown(false);
    }
  }, [shareCooldown, cooldownSec]);

  // Unlock after 5 shares
  useEffect(() => {
    if (shares >= 5) {
      const t = setTimeout(onComplete, 800);
      return () => clearTimeout(t);
    }
  }, [shares, onComplete]);

  const handleShare = useCallback(() => {
    if (shareCooldown || shares >= 5 || sharing) return;

    setSharing(true);
    setShareCooldown(true);
    setCooldownSec(5);

    // Open WhatsApp
    window.open(`https://wa.me/?text=${whatsappMessage}`, '_blank');

    // Track share after brief delay
    setTimeout(() => {
      setSharing(false);
      setShares(prev => Math.min(prev + 1, 5));
    }, 1800);
  }, [shareCooldown, shares, sharing, whatsappMessage]);

  const progress = (shares / 5) * 100;

  return (
    <section className="bg-slate-50 min-h-screen">
      {/* Sticky top progress bar */}
      <div className="sticky top-0 z-30 bg-white border-b border-slate-100 shadow-sm">
        <div className="h-1 w-full bg-slate-100">
          <div
            className="h-full bg-gradient-to-r from-emerald-600 to-emerald-400 transition-all duration-700 ease-out relative"
            style={{ width: `${progress}%` }}
          >
            <div
              className="absolute inset-0 bg-white/30"
              style={{ animation: 'shimmer 1.5s ease-in-out infinite' }}
            />
          </div>
        </div>
        <div className="max-w-md mx-auto px-4 py-2 flex items-center justify-between">
          <span className="text-[10px] text-slate-400 uppercase tracking-wider font-medium">
            Share to unlock
          </span>
          <span className={`text-xs font-bold tabular-nums transition-colors ${
            shares >= 5 ? 'text-emerald-600' : 'text-slate-600'
          }`}>
            {shares}/5
          </span>
        </div>
      </div>

      <div className="max-w-md mx-auto px-6 py-10">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center mx-auto mb-5 border border-emerald-100">
            <svg className="w-8 h-8 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
            </svg>
          </div>
          <h1 className="text-2xl font-extrabold text-slate-900 mb-2">
            Eligibility Confirmed
          </h1>
          <p className="font-urdu text-base text-emerald-700/60 leading-[2.4]">
            آپ اہل ہیں — نتیجہ دیکھنے کے لیے شیئر کریں
          </p>
          <p className="text-slate-400 text-xs mt-2">
            CNIC <span className="font-mono text-slate-600">{maskedCNIC}</span> verified
          </p>
        </div>

        {/* Gate Card */}
        <div className="bg-white rounded-2xl border border-slate-200/80 shadow-[0_2px_16px_rgba(0,0,0,0.04)] overflow-hidden mb-6">
          {/* Instruction Banner */}
          <div className="bg-amber-50/80 border-b border-amber-100 px-5 py-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-base">📢</span>
              </div>
              <div>
                <h3 className="text-amber-900 font-semibold text-sm mb-1">
                  Share to 5 WhatsApp Groups
                </h3>
                <p className="text-amber-800/70 text-xs leading-relaxed">
                  Is khushkhabri ko 5 WhatsApp groups mein share karein taake har mustahiq 
                  tak ye information pohanch sake. Uske baad aapka full result unlock ho jayega.
                </p>
              </div>
            </div>
          </div>

          <div className="p-5">
            {/* Progress Bar */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2.5">
                <span className="text-[11px] font-medium text-slate-500 uppercase tracking-wider">
                  Sharing Progress
                </span>
                <span className={`text-sm font-bold tabular-nums ${
                  shares >= 5 ? 'text-emerald-600' : 'text-slate-700'
                }`}>
                  {shares}<span className="text-slate-300">/</span>5
                </span>
              </div>

              {/* Main progress bar */}
              <div className="w-full bg-slate-100 rounded-full h-3.5 overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-700 ease-out relative ${
                    shares >= 5
                      ? 'bg-gradient-to-r from-emerald-500 to-emerald-400'
                      : 'bg-gradient-to-r from-emerald-700 to-emerald-500'
                  }`}
                  style={{ width: `${progress}%` }}
                >
                  <div
                    className="absolute inset-0 bg-white/20"
                    style={{ animation: 'shimmer 1.5s ease-in-out infinite' }}
                  />
                </div>
              </div>

              {/* Step dots with connecting lines */}
              <div className="flex items-center justify-between mt-4">
                {[0, 1, 2, 3, 4].map(i => (
                  <div key={i} className="flex items-center">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-[11px] font-bold transition-all duration-500 ${
                        i < shares
                          ? 'bg-emerald-600 text-white shadow-md shadow-emerald-200'
                          : i === shares
                          ? 'bg-emerald-50 text-emerald-700 ring-2 ring-emerald-300 ring-offset-2'
                          : 'bg-slate-100 text-slate-400'
                      }`}
                    >
                      {i < shares ? (
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        i + 1
                      )}
                    </div>
                    {i < 4 && (
                      <div className={`w-6 md:w-10 h-0.5 mx-1 transition-colors duration-500 ${
                        i < shares ? 'bg-emerald-400' : 'bg-slate-200'
                      }`} />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* WhatsApp Share Button */}
            <button
              onClick={handleShare}
              disabled={shareCooldown || shares >= 5}
              className={`w-full font-semibold text-sm py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 ${
                shares >= 5
                  ? 'bg-emerald-100 text-emerald-800 cursor-default'
                  : shareCooldown
                  ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                  : sharing
                  ? 'bg-green-500 text-white'
                  : 'bg-green-500 hover:bg-green-600 text-white shadow-md hover:shadow-lg active:scale-[0.98]'
              }`}
            >
              {sharing ? (
                <>
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Opening WhatsApp...
                </>
              ) : shares >= 5 ? (
                <>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  All 5 Shared — Unlocking Result...
                </>
              ) : shareCooldown ? (
                <>
                  <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Next share in {cooldownSec}s
                </>
              ) : (
                <>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Share on WhatsApp — Group #{shares + 1}
                </>
              )}
            </button>

            {/* How it works */}
            <div className="mt-5 pt-4 border-t border-slate-100">
              <p className="text-[10px] text-slate-400 text-center mb-3 uppercase tracking-wider font-semibold">
                How it works
              </p>
              <div className="space-y-2.5">
                {[
                  { step: 1, text: 'Click green button → WhatsApp opens' },
                  { step: 2, text: 'Pick a group & send the message' },
                  { step: 3, text: 'Come back — progress updates' },
                  { step: 4, text: 'Repeat 5 times to unlock result' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                      i < shares
                        ? 'bg-emerald-600 text-white'
                        : 'bg-slate-100 text-slate-400'
                    }`}>
                      {i < shares ? (
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        <span className="text-[10px] font-bold">{item.step}</span>
                      )}
                    </div>
                    <p className={`text-xs transition-all ${
                      i < shares ? 'text-slate-400 line-through' : 'text-slate-500'
                    }`}>
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Motivation */}
        <div className="text-center px-4">
          <p className="text-xs text-slate-400 leading-relaxed">
            🇵🇰 Har share ek mustahiq khandaan tak pohanch sakta hai. 
            Aapki madad se kisi ki zindagi behtar ho sakti hai.
          </p>
          <p className="font-urdu text-emerald-700/40 text-xs mt-2 leading-[2.2]">
            ہر شیئر سے کسی مستحق کی مدد ہو سکتی ہے
          </p>
        </div>
      </div>
    </section>
  );
}
