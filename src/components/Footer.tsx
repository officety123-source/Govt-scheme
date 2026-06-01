export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Column 1 */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-emerald-700 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <span className="font-bold text-sm">PM Youth Imdad Info</span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">
              An informational portal to help Pakistani citizens check their eligibility for the 
              PM Youth Imdad Program 2026. Not an official government website.
            </p>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="text-[10px] font-semibold uppercase tracking-widest text-slate-500 mb-4">Program Details</h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li className="flex items-center justify-between">
                <span>Monthly Imdad</span>
                <span className="font-semibold text-white">Rs. 25,000</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Helpline</span>
                <span className="font-semibold text-white">8171</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Program</span>
                <span className="font-semibold text-white">Youth Imdad 2026</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Status</span>
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span>
                  <span className="font-semibold text-emerald-400">Active</span>
                </span>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="text-[10px] font-semibold uppercase tracking-widest text-slate-500 mb-4">Quick Links</h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <a href="https://8171.bisp.gov.pk/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Official 8171 Portal →
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Eligibility Criteria →
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  How to Register →
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Contact Us →
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-slate-800 pt-8">
          <div className="bg-slate-800/50 rounded-xl p-5 mb-8">
            <p className="text-[11px] text-slate-400 leading-relaxed">
              <span className="font-semibold text-slate-300">Disclaimer:</span>{' '}
              This website is for informational purposes only. It is not affiliated with or endorsed by 
              the Government of Pakistan, BISP, or the 8171 program. We do not collect, store, or transmit 
              any personal data. Your CNIC number is processed locally in your browser and is never saved. 
              For official registration, please visit the authorized 8171 web portal or your nearest BISP center.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
            <p>© 2026 PM Youth Imdad Info Portal. All rights reserved.</p>
            <p className="flex items-center gap-1.5">
              Made for the people of Pakistan
              <span className="text-sm">🇵🇰</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
