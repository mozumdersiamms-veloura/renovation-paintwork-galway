import { motion, AnimatePresence } from 'motion/react';
import { Star, X, ExternalLink, MessageCircle } from 'lucide-react';
import { useState } from 'react';

export default function ReviewWidget() {
  const [isOpen, setIsOpen] = useState(false);

  // Example reviews that would normally be fetched
  const reviews = [
    { name: "Alan Wallace", text: "Engaged Renovation Paintwork to paint the interior of my home.From the outset, Jucelino was a pleasure to work with. Quotation was reasonably priced and all work was completed to the highest standard. Arrived on time each day and very professional work throughout. If you're looking for a job to be well done, to the highest standards, look no further. I would definitely use again. Alan Wallace", rating: 5 },
    { name: "Harry Sheils", text: "I recently hired renovation paintwork for an indoor painting job, from start to finish they were true professionals. Extremely neat and tidy with exceptional attention to detail. I highly recommend this business for all painting jobs.", rating: 5 },
    { name: "Damien L.", text: "Fair pricing and brilliant attention to detail. No hidden costs. 10/10.", rating: 5 }
  ];

  const googleMapsUrl = "https://www.google.com/maps/place/Renovation+Paintwork/@53.2707,-9.0568,15z";

  return (
    <>
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5, x: -50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.5, x: -50 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 left-6 z-[9999] bg-[#121A30] border border-white/5 shadow-xl px-4 py-3 rounded-full flex items-center gap-4 cursor-pointer hover:shadow-2xl transition-all group"
          >
            <div className="flex flex-col items-center border-r border-white/10 pr-4">
              <span className="text-xl font-black text-white leading-none">5.0</span>
              <div className="flex gap-0.5 mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={10} className="fill-[#D4AF37] text-[#D4AF37]" />
                ))}
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-black text-white uppercase tracking-widest">Verified Reviews</span>
              <span className="text-[8px] text-[#D4AF37] font-bold uppercase mt-0.5 group-hover:text-[#FDE68A]">View Feedback</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-slate-950/20 backdrop-blur-sm z-[10000]"
            />
            <motion.div
              initial={{ opacity: 0, x: -100, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -100, scale: 0.9 }}
              className="fixed bottom-6 left-6 z-[10001] w-[calc(100%-48px)] max-w-sm bg-[#0A1128] rounded-[2rem] shadow-3xl overflow-hidden border border-white/5"
            >
              <div className="bg-[#121A30] p-6 text-white relative">
                <button 
                  onClick={() => setIsOpen(false)}
                  className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded-full transition-colors"
                >
                  <X size={18} />
                </button>
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} className="fill-[#D4AF37] text-[#D4AF37]" />
                    ))}
                  </div>
                  <span className="text-white/60 text-xs font-bold uppercase tracking-widest">Google Rated 5.0</span>
                </div>
                <h3 className="text-xl font-black leading-tight">Client Feedback</h3>
              </div>

              <div className="p-6 space-y-6 max-h-[400px] overflow-y-auto">
                {reviews.map((review, i) => (
                  <div key={i} className="space-y-2 border-b border-white/5 last:border-0 pb-4 last:pb-0">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-black text-white uppercase">{review.name}</span>
                      <div className="flex gap-0.5">
                        {[...Array(review.rating)].map((_, j) => (
                          <Star key={j} size={8} className="fill-[#D4AF37] text-[#D4AF37]" />
                        ))}
                      </div>
                    </div>
                    <p className="text-[11px] text-stone-300 italic leading-relaxed">"{review.text}"</p>
                  </div>
                ))}
              </div>

              <div className="p-4 bg-[#121A30] border-t border-white/5">
                <a 
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#D4AF37] border border-transparent text-[#0A1128] px-4 py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[#C5A028] transition-all text-[11px] uppercase tracking-widest shadow-sm"
                >
                  <ExternalLink size={14} />
                  View All on Google
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
