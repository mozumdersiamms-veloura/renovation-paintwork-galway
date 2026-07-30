import { useEffect } from 'react';
import { motion } from 'motion/react';
import { Send, ArrowRight } from 'lucide-react';

export default function QuoteForm() {
  useEffect(() => {
    // Load Tally embed script
    const script = document.createElement('script');
    script.src = 'https://tally.so/widgets/embed.js';
    script.async = true;
    script.onload = () => {
      // @ts-ignore
      if (typeof Tally !== 'undefined') {
        // @ts-ignore
        Tally.loadEmbeds();
      }
    };
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);
useEffect(() => {
  const handleMessage = (event: MessageEvent) => {
    let data = event.data;

    if (typeof event.data === "string") {
      try {
        data = JSON.parse(event.data);
      } catch {
        return;
      }
    }

    if (data?.event?.includes("FormSubmitted")) {
      console.log("LEAD TRIGGERED");

      if (window.fbq) {
        window.fbq("track", "Lead");
      }
    }
  };

  window.addEventListener("message", handleMessage);

  return () => {
    window.removeEventListener("message", handleMessage);
  };
}, []);
  return (
    <div className="relative max-w-7xl mx-auto px-6 py-24 group border-t border-white/5 mt-20">
      {/* The Color Match Ambient Background Focus */}
      <motion.div 
        initial={{ backgroundColor: "rgba(10, 17, 40, 0)", opacity: 0 }}
        whileInView={{ 
          opacity: 1, 
          backgroundColor: [
             "rgba(30, 41, 59, 0.4)", // Slate 800 base
             "rgba(21, 128, 61, 0.2)",  // Dark Sage
             "rgba(29, 78, 216, 0.2)", // Dark Slate Blue 
             "rgba(15, 23, 42, 0.6)", // Dark Slate
             "rgba(212, 175, 55, 0.15)", // Subtle gold
          ] 
        }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ 
           opacity: { duration: 1 },
           backgroundColor: { duration: 7, ease: "easeInOut", times: [0, 0.25, 0.5, 0.75, 1] }
        }}
        className="absolute inset-[-10%] -z-10 rounded-[4rem] blur-[100px] pointer-events-none"
      />

      <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
           className="flex-grow relative z-10"
        >
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            <h2 className="text-3xl md:text-5xl font-black text-white leading-[1] tracking-tighter uppercase relative">
              Ready to <br />
              Start Your <span className="text-[#D4AF37]">Project?</span>
            </h2>
            <div className="md:text-right space-y-3">
              <p className="text-stone-500 text-xs font-bold uppercase tracking-wider max-w-[240px] md:ml-auto">
                Ensure you have read about quality + pricing before submitting so you are fully informed and aligned.
              </p>
              <a 
                href="#pricing"
                className="inline-flex items-center gap-2 text-[#D4AF37] font-bold text-[10px] uppercase tracking-widest hover:gap-3 transition-all"
              >
                Review Pricing <ArrowRight size={14} />
              </a>
            </div>
          </div>
          <p className="mt-8 text-stone-300 text-sm font-medium border-l-[3px] border-[#D4AF37] pl-4 py-1 italic bg-white/5 backdrop-blur-sm pr-4 rounded-r-lg max-w-2xl">
            Please fill the form honestly and accurately to receive a precise quote.
          </p>
        </motion.div>
        
        <motion.p 
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           className="max-w-sm text-stone-400 font-medium text-base leading-relaxed hidden md:block"
        >
          Fill out the form below and we'll get back to you with a tailored quote within 24 hours.
        </motion.p>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 40, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="bg-[#121A30]/80 backdrop-blur-xl rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl border border-white/5 p-2 md:p-6 min-h-[600px] md:min-h-[850px] relative z-10"
      >
        <iframe 
          data-tally-src="https://tally.so/embed/5BEkOv?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" 
          loading="lazy" 
          width="100%" 
          height="850" 
          frameBorder="0" 
          marginHeight={0} 
          marginWidth={0} 
          title="Get in Touch"
          className="w-full"
        ></iframe>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-8 p-4 rounded-2xl bg-[#121A30] backdrop-blur-md border border-white/5 shadow-sm text-center"
      >
        <p className="text-[11px] text-stone-400 leading-relaxed max-w-2xl mx-auto">
          <strong>Note:</strong> After submitting the form, you may be prompted to open WhatsApp. Please allow it to open. If nothing happens, click the WhatsApp icon or open WhatsApp Web when prompted to connect directly with Jucelino.
        </p>
      </motion.div>
    </div>
  );
}
