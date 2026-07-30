import { motion } from 'motion/react';
import { 
  ClipboardCheck, 
  Wrench, 
  PaintBucket, 
  ShieldCheck, 
  Brush, 
  UserCheck,
  ArrowDown
} from 'lucide-react';

const features = [
  {
    title: 'Professional Project Assessment',
    description: "Every project is assessed before work begins to determine the correct system for the property's specific surfaces.",
    icon: <ClipboardCheck className="text-[#D4AF37]" size={32} />
  },
  {
    title: 'Complete Surface Preparation',
    description: 'Proper preparation is included as part of the service, creating the foundation for a premium finish.',
    icon: <Wrench className="text-[#D4AF37]" size={32} />
  },
  {
    title: 'Professional Spray Finishing',
    description: 'Professional airless spray application delivers a clean, smooth and consistent finish.',
    icon: <PaintBucket className="text-[#D4AF37]" size={32} />
  },
  {
    title: 'Premium Materials',
    description: 'Quality primers and coatings are selected specifically for each project.',
    icon: <ShieldCheck className="text-[#D4AF37]" size={32} />
  },
  {
    title: 'Protection & Clean Working Practices',
    description: 'Careful masking, protection and clean working methods are maintained throughout the project.',
    icon: <Brush className="text-[#D4AF37]" size={32} />
  },
  {
    title: 'Owner-Led Quality Control',
    description: 'The same person who assesses the project remains responsible for the quality of the final finish.',
    icon: <UserCheck className="text-[#D4AF37]" size={32} />
  }
];

export default function PremiumFinish() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <motion.div
           initial={{ opacity: 0, x: -20 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           className="md:w-1/2"
        >
          <h2 className="text-3xl md:text-5xl font-black text-white leading-[1.1] tracking-tighter uppercase">
            A Premium Finish <br />
            Is More Than <span className="text-[#D4AF37]">Paint.</span>
          </h2>
        </motion.div>
        
        <motion.div 
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           transition={{ delay: 0.2 }}
           className="md:w-1/2"
        >
          <p className="text-stone-300 font-medium text-lg leading-relaxed max-w-lg md:ml-auto">
            A premium finish isn't defined by the final coat of paint. It's the result of every decision made before, during and after the paint is applied.
          </p>
        </motion.div>
      </div>

      {/* Grid of Cards */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.1 } }
        }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24"
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
            }}
            className="bg-[#121A30] border border-white/5 p-8 rounded-3xl shadow-xl flex flex-col"
          >
            <div className="w-14 h-14 rounded-2xl bg-[#D4AF37]/10 flex items-center justify-center mb-6">
              {feature.icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-3 tracking-tight">{feature.title}</h3>
            <p className="text-stone-400 leading-relaxed text-sm">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* 70 / 30 Visual Block */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mb-24"
      >
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tight">
            A Premium Finish Is Built Before The Paint Goes On
          </h3>
        </div>
        
        <div className="flex flex-col items-center justify-center max-w-3xl mx-auto">
          {/* 70% Block */}
          <div className="w-full bg-[#121A30] border border-white/10 rounded-[2rem] p-8 md:p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <span className="text-9xl font-black">70%</span>
            </div>
            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
              <div>
                <h4 className="text-5xl md:text-7xl font-black text-[#D4AF37] mb-2">70%</h4>
                <p className="text-2xl font-bold text-white uppercase tracking-wider">Preparation</p>
              </div>
              <ul className="space-y-3 text-stone-300 font-medium text-lg md:text-right">
                <li className="flex items-center md:justify-end gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" /> Surface assessment</li>
                <li className="flex items-center md:justify-end gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" /> Surface preparation</li>
                <li className="flex items-center md:justify-end gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" /> Protection</li>
                <li className="flex items-center md:justify-end gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" /> Primer</li>
              </ul>
            </div>
          </div>
          
          {/* Arrow */}
          <div className="h-16 w-16 -my-4 z-10 bg-[#0A1128] rounded-full flex items-center justify-center border-4 border-[#121A30]">
            <ArrowDown className="text-[#D4AF37]" size={28} />
          </div>
          
          {/* 30% Block */}
          <div className="w-full bg-[#121A30]/50 border border-white/5 rounded-3xl p-8 shadow-inner relative overflow-hidden">
             <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <h4 className="text-3xl md:text-4xl font-black text-white/50 mb-1">30%</h4>
                <p className="text-xl font-bold text-white/70 uppercase tracking-wider">Paint application</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Highlighted Value Block */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-4xl mx-auto"
      >
        <div className="bg-[#1a233a] border border-[#D4AF37]/30 rounded-[2.5rem] p-10 md:p-16 text-center shadow-2xl relative overflow-hidden">
          {/* Decorative Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[500px] max-h-[500px] bg-[#D4AF37]/5 blur-[100px] rounded-full pointer-events-none" />
          
          <div className="relative z-10">
            <h3 className="text-2xl md:text-4xl font-black text-white mb-8 leading-tight">
              When You Receive a Quote From Renovation Paintwork...
            </h3>
            <div className="space-y-6 text-lg md:text-xl text-stone-300 leading-relaxed font-medium mb-12">
              <p>
                You're not simply paying for someone to spray paint your walls.
              </p>
              <p>
                You're paying for the assessment, preparation, protection, premium materials, experience and attention to detail required to achieve a finish that's built to last.
              </p>
              <p className="text-[#D4AF37]">
                That's why our quotations are based on the complete service your project requires—not simply the amount of paint used.
              </p>
            </div>
            
            <a 
              href="#quote"
              className="inline-flex items-center justify-center bg-[#D4AF37] hover:bg-[#C5A028] text-[#0A1128] px-10 py-5 rounded-full text-lg font-bold shadow-2xl shadow-[#D4AF37]/20 transition-all hover:scale-105 active:scale-95"
            >
              Get Your Free Quote
            </a>
          </div>
        </div>
      </motion.div>

    </div>
  );
}
