import { motion } from 'motion/react';
import { CheckCircle2, ChevronRight } from 'lucide-react';

export default function Education() {
  return (
    <div className="max-w-7xl mx-auto px-6">
      {/* Headline & Copy */}
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-black text-white leading-[1.1] tracking-tighter uppercase mb-6"
        >
          How to Choose the <br className="hidden sm:block" />
          <span className="text-[#D4AF37]">Right Painter</span> for Your Project
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="max-w-3xl mx-auto text-stone-300 font-medium text-lg leading-relaxed"
        >
          Before you compare quotes, take two minutes to understand the three decisions that have the biggest impact on the quality and longevity of your paint finish.
        </motion.p>
      </div>

      {/* Video & Points */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Video */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative aspect-[9/16] w-full max-w-[320px] mx-auto bg-[#121A30] rounded-2xl border border-white/10 shadow-2xl overflow-hidden flex items-center justify-center group"
        >
          {/* Replace src with the actual video if uploaded, currently using placeholder path for the structure */}
          <video 
            className="w-full h-full object-cover"
            controls
            playsInline
            poster="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2070&auto=format&fit=crop"
          >
            <source src={`${import.meta.env.BASE_URL}lp-video-final.mp4`} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </motion.div>

        {/* Three Points */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } }
          }}
          className="space-y-8"
        >
          {/* Point 1 */}
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="flex gap-4">
            <div className="shrink-0 mt-1 text-[#D4AF37]">
              <CheckCircle2 size={28} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-wide">
                Professional Surface Assessment
              </h3>
              <p className="text-stone-400 leading-relaxed text-sm md:text-base">
                Every project starts by understanding what the surfaces actually need before any preparation begins.
              </p>
            </div>
          </motion.div>

          {/* Point 2 */}
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="flex gap-4">
            <div className="shrink-0 mt-1 text-[#D4AF37]">
              <CheckCircle2 size={28} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-wide">
                Proper Preparation & Dust Control
              </h3>
              <p className="text-stone-400 leading-relaxed text-sm md:text-base">
                Machine sanding, careful preparation and dust extraction create the foundation for a premium finish.
              </p>
            </div>
          </motion.div>

          {/* Point 3 */}
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="flex gap-4">
            <div className="shrink-0 mt-1 text-[#D4AF37]">
              <CheckCircle2 size={28} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-wide">
                Correct Priming Before Spraying
              </h3>
              <p className="text-stone-400 leading-relaxed text-sm md:text-base">
                The right primer helps create an even, durable finish that lasts for years.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* CTA */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="mt-16 text-center"
      >
        <a 
          href="#quote"
          className="inline-flex items-center justify-center gap-2 bg-[#D4AF37] hover:bg-[#C5A028] text-[#0A1128] px-10 py-5 rounded-full text-lg font-bold shadow-2xl shadow-[#D4AF37]/20 transition-all group"
        >
          Get Your Free Quote
          <ChevronRight className="transition-transform group-hover:translate-x-1" size={20} />
        </a>
      </motion.div>
    </div>
  );
}
