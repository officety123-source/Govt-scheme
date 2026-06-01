import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
  urdu: string;
}

const faqs: FAQItem[] = [
  {
    question: 'Ye PM Youth Imdad Program kya hai?',
    answer: 'PM Youth Imdad Program 2026 hukumat-e-Pakistan ki taraf se shuru kiya gaya cash relief program hai jismein har mustahiq khandaan ko mahana Rs. 25,000 diye jayenge.',
    urdu: 'یہ حکومت پاکستان کا کیش ریلیف پروگرام ہے جس میں ہر مستحق خاندان کو ماہانہ ۲۵,۰۰۰ روپے دیے جائیں گے۔',
  },
  {
    question: 'Eligibility check karna free hai?',
    answer: 'Ji haan! Eligibility check karna bilkul FREE hai. Aapko koi paisa nahi dena hoga. Sirf apna CNIC number dalein aur result foran milega.',
    urdu: 'جی ہاں! بالکل مفت ہے۔ صرف اپنا شناختی کارڈ نمبر درج کریں۔',
  },
  {
    question: 'Mujhe kitne paise milenge?',
    answer: 'Har eligible khandaan ko mahana Rs. 25,000 cash relief milta hai. Ye amount har mahine aapke registered bank account ya JazzCash/Easypaisa mein transfer hogi.',
    urdu: 'ہر اہل خاندان کو ماہانہ ۲۵,۰۰۰ روپے ملتے ہیں۔',
  },
  {
    question: 'Kaise pata chalega ke main eligible hoon?',
    answer: 'Upar diye gaye CNIC checker mein apna 13-digit CNIC number dalein. System foran check karega aur aapko batayega ke aap eligible hain ya nahi.',
    urdu: 'اوپر دیے گئے چیکر میں اپنا نمبر درج کریں، فوری نتیجہ ملے گا۔',
  },
  {
    question: 'Registration ki aakhri tareekh kya hai?',
    answer: 'Registration jald band ho raha hai. Hukumat ne kaha hai ke is mahine ke end tak sab register ho jayein. Der na karein — abhi check karein!',
    urdu: 'رجسٹریشن جلد بند ہو رہی ہے۔ ابھی چیک کریں!',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-white py-16 md:py-20 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200/60 rounded-full px-4 py-1.5 mb-4">
            <span className="text-emerald-800 text-xs font-semibold tracking-wide uppercase">
              FAQs
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-2">
            Frequently Asked Questions
          </h2>
          <p className="font-urdu text-emerald-700/50 text-base leading-[2.4]">
            عام سوالات کے جوابات
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-2">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-xl border transition-all duration-200 ${
                  isOpen
                    ? 'border-emerald-200/80 bg-emerald-50/30'
                    : 'border-slate-200/60 bg-white hover:border-slate-300/60'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4"
                >
                  <p className="font-semibold text-slate-900 text-sm md:text-base pr-4">
                    {faq.question}
                  </p>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200 ${
                    isOpen
                      ? 'bg-emerald-700 text-white rotate-45'
                      : 'bg-slate-100 text-slate-400'
                  }`}>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v12M6 12h12" />
                    </svg>
                  </div>
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-0">
                    <div className="pl-8 border-l-2 border-emerald-200/60 ml-4">
                      <p className="text-slate-500 text-sm leading-relaxed mb-2">{faq.answer}</p>
                      <p className="font-urdu text-emerald-700/50 text-sm leading-[2.2]">{faq.urdu}</p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
