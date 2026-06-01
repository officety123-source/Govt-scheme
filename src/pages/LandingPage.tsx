import HeroSection from '../components/HeroSection';
import FAQSection from '../components/FAQSection';
import ShareSection from '../components/ShareSection';
import Marquee from '../components/Marquee';
import CountdownTimer from '../components/CountdownTimer';
import Footer from '../components/Footer';
import FloatingWhatsApp from '../components/FloatingWhatsApp';
import SocialProofTicker from '../components/SocialProofTicker';
import MonetagBanner from '../components/MonetagBanner'; // 1. Yahan import karein

interface LandingPageProps {
  onCheckEligibility: (cnic: string) => void;
}

export default function LandingPage({ onCheckEligibility }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-white">
      <Marquee />
      <CountdownTimer />
      <HeroSection onCheckEligibility={onCheckEligibility} />

      {/* Trusted Programs */}
      <section className="border-b border-slate-100 py-8 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-[11px] text-slate-400 uppercase tracking-widest font-medium mb-6">
            Associated Government Programs
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {[
              { label: 'BISP', sub: 'Benazir Income Support' },
              { label: 'Ehsaas', sub: 'Social Protection' },
              { label: '8171', sub: 'Web Portal' },
              { label: 'PM Youth', sub: 'Imdad Program' },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <p className="text-slate-900 font-bold text-sm">{item.label}</p>
                <p className="text-slate-400 text-[11px]">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AD Zone - Below trust */}
      <section className="py-6 px-6">
        <div className="max-w-4xl mx-auto">
          {/* 2. Pehla khali box remove karke actual banner lagaya */}
          <MonetagBanner /> 
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 md:py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200/60 rounded-full px-4 py-1.5 mb-4">
              <span className="text-emerald-800 text-xs font-semibold tracking-wide uppercase">
                How It Works
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-2">
              3 Simple Steps
            </h2>
            <p className="font-urdu text-emerald-700/50 text-base leading-[2.4]">
              تین آسان مراحل
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                step: '01',
                title: 'Enter Your CNIC',
                desc: 'Type your 13-digit CNIC number in the checker above. We auto-format it for you.',
                urdu: 'اپنا ۱۳ ہندسوں کا شناختی کارڈ نمبر درج کریں',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0" />
                  </svg>
                ),
              },
              {
                step: '02',
                title: 'Check Eligibility',
                desc: 'Our system instantly verifies your record against the official database.',
                urdu: 'فوری اہلیت کا نتیجہ دیکھیں',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
              {
                step: '03',
                title: 'Register on Portal',
                desc: 'Visit the official 8171 portal and complete your registration in minutes.',
                urdu: 'سرکاری پورٹل پر رجسٹریشن مکمل کریں',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
              },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl border border-slate-200/60 p-7 card-hover">
                <div className="w-12 h-12 bg-emerald-50 border border-emerald-100 rounded-xl flex items-center justify-center text-emerald-700 mb-5">
                  {item.icon}
                </div>
                <div className="text-[11px] font-bold text-emerald-700/40 uppercase tracking-widest mb-2">
                  Step {item.step}
                </div>
                <h3 className="font-bold text-slate-900 text-base mb-2">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-2">{item.desc}</p>
                <p className="font-urdu text-emerald-700/40 text-xs leading-[2.2]">{item.urdu}</p>
              </div>
            ))}
          </div>

          {/* AD Zone - Middle */}
          <div className="mt-12">
            {/* 3. Doosra khali box remove karke actual banner lagaya */}
            <MonetagBanner /> 
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-slate-50 py-16 md:py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200/60 rounded-full px-4 py-1.5 mb-4">
              <span className="text-emerald-800 text-xs font-semibold tracking-wide uppercase">
                Testimonials
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-2">
              What People Are Saying
            </h2>
            <p className="font-urdu text-emerald-700/50 text-base leading-[2.4]">
              عوام کا تجربہ
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                text: "Maine apna CNIC dala aur 2 second mein result aa gaya. Eligible tha aur maine official portal par register kar liya. Bohat aasan process hai!",
                name: 'Muhammad Asif',
                location: 'Lahore',
              },
              {
                text: "Mujhe pehlay yaqeen nahi tha lekin jab maine official portal par check kiya toh mera naam list mein tha. Alhamdulillah, agle mahine se cash mil raha hai!",
                name: 'Fatima Zahra',
                location: 'Karachi',
              },
              {
                text: "Mere gaon mein bohat se logon ne is se faida uthaya hai. Sabse pehle eligibility check karein, phir official site par jayein. Best!",
                name: 'Tariq Mehmood',
                location: 'Multan',
              },
              {
                text: "Mehngai ke daur mein ye Rs. 25,000 bohat bari raqam hai. Har ghareeb khandaan ko is se faida uthana chahiye. Shukriya Hukumat!",
                name: 'Ayesha Bibi',
                location: 'Peshawar',
              },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl border border-slate-200/60 p-6 card-hover">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-slate-500 text-sm leading-relaxed italic mb-5">"{item.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-emerald-100 rounded-full flex items-center justify-center">
                    <span className="text-emerald-700 text-xs font-bold">{item.name.split(' ').map(n => n[0]).join('')}</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">{item.name}</p>
                    <p className="text-[11px] text-slate-400 flex items-center gap-1">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.5l-4.95-4.55a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      {item.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection />

      {/* Share */}
      <ShareSection />

      {/* Final CTA */}
      <section className="bg-emerald-700 py-16 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-3">
            Check Your Eligibility Now
          </h2>
          <p className="text-emerald-200/70 text-sm mb-8 max-w-md mx-auto">
            Hazaron log already registered hain. Der na karein — apna CNIC check karein aur agle mahine se cash relief hasil karein.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="bg-white text-emerald-800 font-semibold text-sm px-8 py-3.5 rounded-xl shadow-lg hover:shadow-xl hover:bg-slate-50 transition-all duration-300 inline-flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0" />
            </svg>
            Check Eligibility — Free
          </button>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
      <SocialProofTicker />
    </div>
  );
}
