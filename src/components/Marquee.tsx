export default function Marquee() {
  return (
    <div className="bg-emerald-950 text-white overflow-hidden py-2.5 relative z-20">
      <div className="animate-marquee whitespace-nowrap flex items-center gap-12">
        {[
          { icon: '🔴', text: 'BISP — PM Youth Imdad Program 2026', bold: true },
          { icon: '', text: 'Har mustahiq khandaan ko Rs. 25,000 mahana cash relief' },
          { icon: '🇵🇰', text: 'Registration abhi jaari hai — der na karein' },
          { icon: '📱', text: 'Apna CNIC check karein — bilkul muft' },
        ].map((item, i) => (
          <span key={i} className="flex items-center gap-2 text-sm font-medium">
            <span>{item.icon}</span>
            {item.bold ? (
              <span className="font-semibold tracking-wide">{item.text}</span>
            ) : (
              <span>{item.text}</span>
            )}
          </span>
        ))}
        {/* Duplicate for seamless loop */}
        {[
          { icon: '🔴', text: 'BISP — PM Youth Imdad Program 2026', bold: true },
          { icon: '', text: 'Har mustahiq khandaan ko Rs. 25,000 mahana cash relief' },
          { icon: '🇵🇰', text: 'Registration abhi jaari hai — der na karein' },
          { icon: '📱', text: 'Apna CNIC check karein — bilkul muft' },
        ].map((item, i) => (
          <span key={`dup-${i}`} className="flex items-center gap-2 text-sm font-medium">
            <span>{item.icon}</span>
            {item.bold ? (
              <span className="font-semibold tracking-wide">{item.text}</span>
            ) : (
              <span>{item.text}</span>
            )}
          </span>
        ))}
      </div>
    </div>
  );
}
