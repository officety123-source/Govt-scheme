import { useState } from 'react';

export default function ShareSection() {
  const [copiedMsg, setCopiedMsg] = useState<string | null>(null);
  const [showFullTiktok, setShowFullTiktok] = useState(false);

  const whatsappMessage = `🚨 *BARI KHUSHKABRI!* 🚨
🇵🇰 *PM Youth Imdad Program 2026*

⚡ Hukomat ne Rs. 25,000 MAHANA cash relief ka elaan kar diya!

✅ Har mustahiq ko Rs. 25,000/month
✅ Sirf CNIC check karein
✅ 100% FREE
✅ Registration jald BAND ho raha hai! ⏰

🔗 *Eligibility Check:* [YOUR_LINK_HERE]

⚠️ DER NA KAREIN — registration band hone wala hai!

📢 Is message ko zyada se zyada logon ko forward karein!`;

  const tiktokScript = `[0:00-0:03] HOOK
"Bijli ke bill aur mehngai se pareshan logon ke liye BARI KHUSHKABRI!"

[0:03-0:10] ANNOUNCEMENT
"Hukumat-e-Pakistan ne PM Youth Imdad Program 2026 shuru kar diya hai! 
Har mustahiq khandaan ko ab mahana Rs. 25,000 milenge!"

[0:10-0:18] PROCESS
"Sirf 3 kaam karein: CNIC number dalein, eligibility check karein, 
aur official portal par register ho jayein — bilkul muft!"

[0:18-0:25] URGENCY
"Lekin jaldi karein! Registration band hone wala hai. 
Jo log abhi register nahi karenge, unhe 6 mahine aur intezaar karna parega!"

[0:25-0:30] CTA
"Link bio mein hai — abhi click karein aur apna naam register karwayein! 
Aur is video ko apne har dost ke saath share karein!"`;

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedMsg(type);
      setTimeout(() => setCopiedMsg(null), 2000);
    });
  };

  return (
    <section className="bg-slate-50 py-16 md:py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200/60 rounded-full px-4 py-1.5 mb-4">
            <span className="text-emerald-800 text-xs font-semibold tracking-wide uppercase">
              Viral Marketing
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-2">
            Share & Promote Material
          </h2>
          <p className="text-slate-400 text-sm max-w-md mx-auto">
            Copy these ready-made messages for WhatsApp, TikTok, and social media promotion
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* WhatsApp Card */}
          <div className="bg-white rounded-2xl border border-slate-200/80 shadow-[0_2px_16px_rgba(0,0,0,0.04)] overflow-hidden card-hover">
            {/* Card header */}
            <div className="px-6 py-4 flex items-center justify-between border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-green-50 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 text-sm">WhatsApp Message</h3>
                  <p className="text-[11px] text-slate-400">Copy & forward to groups</p>
                </div>
              </div>
              <button
                onClick={() => copyToClipboard(whatsappMessage, 'whatsapp')}
                className={`text-xs font-medium px-3.5 py-2 rounded-lg transition-all duration-200 ${
                  copiedMsg === 'whatsapp'
                    ? 'bg-emerald-700 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {copiedMsg === 'whatsapp' ? '✓ Copied' : 'Copy'}
              </button>
            </div>

            {/* Preview */}
            <div className="p-5">
              <div className="bg-green-50/60 rounded-xl p-4 border border-green-100/60">
                <pre className="whitespace-pre-wrap text-xs text-slate-600 font-sans leading-relaxed">
                  {whatsappMessage}
                </pre>
              </div>
              <a
                href={`https://wa.me/?text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white font-medium text-xs py-2.5 rounded-lg flex items-center justify-center gap-2 transition-all"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Share via WhatsApp
              </a>
            </div>
          </div>

          {/* TikTok Card */}
          <div className="bg-white rounded-2xl border border-slate-200/80 shadow-[0_2px_16px_rgba(0,0,0,0.04)] overflow-hidden card-hover">
            {/* Card header */}
            <div className="px-6 py-4 flex items-center justify-between border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-slate-900 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V9.17a8.16 8.16 0 004.76 1.52v-3.4a4.85 4.85 0 01-1-.6z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 text-sm">TikTok Script</h3>
                  <p className="text-[11px] text-slate-400">30-sec video script</p>
                </div>
              </div>
              <button
                onClick={() => copyToClipboard(tiktokScript, 'tiktok')}
                className={`text-xs font-medium px-3.5 py-2 rounded-lg transition-all duration-200 ${
                  copiedMsg === 'tiktok'
                    ? 'bg-emerald-700 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {copiedMsg === 'tiktok' ? '✓ Copied' : 'Copy'}
              </button>
            </div>

            {/* Preview */}
            <div className="p-5">
              <div className="bg-slate-900 rounded-xl p-4 overflow-hidden">
                <pre className={`whitespace-pre-wrap text-xs text-slate-300 font-mono leading-relaxed ${!showFullTiktok ? 'max-h-32 overflow-hidden' : ''}`}>
                  {tiktokScript}
                </pre>
                {!showFullTiktok && (
                  <div className="relative mt-2">
                    <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-t from-slate-900 to-transparent" />
                    <button
                      onClick={() => setShowFullTiktok(true)}
                      className="relative z-10 block w-full text-center text-xs text-slate-400 hover:text-white py-2 transition-colors"
                    >
                      Show full script ↓
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-10 text-center">
          <p className="text-xs text-slate-400 mb-4 uppercase tracking-wider font-medium">Quick Share</p>
          <div className="flex justify-center gap-3 flex-wrap">
            <a
              href={`https://wa.me/?text=${encodeURIComponent(whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white text-xs font-medium px-5 py-2.5 rounded-lg transition-all"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp
            </a>
            <button
              onClick={() => copyToClipboard(whatsappMessage, 'fb')}
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium px-5 py-2.5 rounded-lg transition-all"
            >
              <span className="text-sm">f</span>
              Facebook
            </button>
            <button
              onClick={() => copyToClipboard(tiktokScript, 'script')}
              className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-900 text-white text-xs font-medium px-5 py-2.5 rounded-lg transition-all"
            >
              🎬 Video Script
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
