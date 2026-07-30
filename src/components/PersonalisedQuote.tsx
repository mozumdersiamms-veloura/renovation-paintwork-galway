import { motion } from 'motion/react';
import { 
  Maximize, 
  Sparkles, 
  Ruler, 
  Layers, 
  Clock, 
  MessageSquare
} from 'lucide-react';

export default function PersonalisedQuote() {
  const pricingCards = [
    { 
      label: "Price per m²", 
      price: "€15–€25 / m²",
      subtext: "Confirm exact figure with Jucelino."
    },
    { 
      label: "Typical Project", 
      price: "€3,000–€5,000",
      subtext: "Depending on specific requirements."
    },
    { 
      label: "Larger Project", 
      price: "€5,000–€8,000+",
      subtext: "For extensive properties and layouts."
    }
  ];

  const variables = [
    { title: "Property Size", icon: <Maximize size={24} /> },
    { title: "Surface Condition", icon: <Sparkles size={24} /> },
    { title: "Layout & Ceiling Height", icon: <Ruler size={24} /> },
    { title: "Areas to Be Finished", icon: <Layers size={24} /> },
    { title: "Project Stage", icon: <Clock size={24} /> }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      {/* 1. Section Header */}
      <div className="text-center mb-20">
        <motion.h2
           initial={{ opacity: 0, y: -20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-3xl md:text-5xl font-black text-white leading-[1.1] tracking-tighter uppercase mb-6"
        >
          Your Personalised <span className="text-[#D4AF37]">Quote.</span>
        </motion.h2>
        
        <motion.p 
           initial={{ opacity: 0, y: 10 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.1 }}
           className="max-w-2xl mx-auto text-stone-300 font-medium text-lg leading-relaxed"
        >
          Every project is different. That's why every quotation is based on your property's specific requirements rather than a one-size-fits-all price.
        </motion.p>
      </div>

      {/* 2. Typical Investment */}
      <div className="mb-24">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } }
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
        >
          {pricingCards.map((item, i) => (
            <motion.div 
              key={i}
              variants={{
                hidden: { opacity: 0, y: 30, scale: 0.95 },
                visible: { 
                  opacity: 1, 
                  y: 0, 
                  scale: 1,
                  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
                }
              }}
              whileHover={{ backgroundColor: "rgba(10,17,40,0.5)" }}
              className="bg-[#121A30] border border-white/5 p-8 md:p-10 rounded-[2rem] shadow-2xl shadow-black/40 flex flex-col justify-between min-h-[200px] group/card transition-colors duration-500"
            >
              <div>
                <span className="text-[10px] font-bold text-stone-500 uppercase tracking-[0.2em] mb-4 block">{item.label}</span>
                
                <div className="relative mb-2 inline-block">
                   <motion.div 
                     initial={{ filter: "blur(12px)", opacity: 0.4 }}
                     whileInView={{ filter: "blur(0px)", opacity: 1 }}
                     viewport={{ once: true, amount: 0.8 }}
                     transition={{ duration: 1.5, ease: "easeOut", delay: i * 0.2 + 0.4 }}
                     className="text-2xl md:text-4xl font-black text-white tracking-tight"
                   >
                     {item.price}
                   </motion.div>
                   
                   <motion.div 
                     initial={{ width: "110%", opacity: 1 }}
                     whileInView={{ width: "0%", opacity: 0 }}
                     viewport={{ once: true, amount: 0.8 }}
                     transition={{ duration: 1.2, ease: [0.77, 0, 0.175, 1], delay: i * 0.2 + 0.2 }}
                     className="absolute top-1/2 -translate-y-1/2 left-[-5%] h-8 bg-[#D4AF37]/80 blur-md rounded-full origin-right mix-blend-multiply"
                     style={{ zIndex: 10 }}
                   />
                </div>
              </div>
              <div className="space-y-4">
                <div className="h-px bg-white/10 w-full group-hover/card:bg-[#D4AF37] transition-colors duration-500" />
                <div className="text-xs text-stone-400">{item.subtext}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-stone-500 italic"
        >
          * These are guide prices. The final quotation depends on the individual project.
        </motion.div>
      </div>

      {/* 3. What Determines Your Quote */}
      <div className="mb-32">
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tight mb-4">
            Every quotation is based on your project.
          </h3>
          <p className="text-stone-400 font-medium text-lg max-w-2xl mx-auto">
            We assess the details that affect the work required before preparing your final quotation.
          </p>
        </div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } }
          }}
          className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8 mb-16"
        >
          {variables.map((v, i) => (
            <motion.div 
              key={i} 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
              }}
              className="flex items-center gap-3 bg-[#121A30] border border-white/5 px-6 py-4 rounded-2xl group"
            >
              <div className="text-[#D4AF37] group-hover:scale-110 transition-transform">
                {v.icon}
              </div>
              <span className="text-sm font-bold text-white uppercase tracking-tight">{v.title}</span>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center max-w-3xl mx-auto space-y-8">
          <p className="text-stone-300 font-medium text-lg md:text-xl leading-relaxed">
            Every quotation includes the preparation and work agreed during your project assessment, so you know exactly what's included before work begins.
          </p>
          
          <div className="inline-block bg-[#0A1128] border border-[#D4AF37]/30 px-8 py-5 rounded-2xl shadow-xl">
            <p className="text-[#D4AF37] font-bold text-lg md:text-xl">
              No generic quotations. Every quote is prepared specifically for your project.
            </p>
          </div>
        </div>
      </div>

      {/* 4. Meet Jucelino */}
      <div className="bg-[#121A30] border border-white/5 rounded-[2.5rem] md:rounded-[3rem] overflow-hidden shadow-2xl">
        <div className="flex flex-col lg:flex-row">
          
          {/* Portrait (Top on mobile, Left on desktop) */}
          <div className="lg:w-2/5 relative min-h-[400px] lg:min-h-[600px] order-1 lg:order-1">
            <img 
              src="/jucelino.jpeg" 
              alt="Jucelino"
              className="absolute inset-0 w-full h-full object-cover object-top"
              referrerPolicy="no-referrer"
            />
            {/* Gradient fade to blend with content on desktop/mobile */}
            <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#121A30] via-transparent to-transparent opacity-80 lg:opacity-100" />
            <div className="absolute inset-0 bg-[#121A30]/20" />
          </div>

          {/* Content (Bottom on mobile, Right on desktop) */}
          <div className="lg:w-3/5 p-8 sm:p-12 lg:p-16 flex flex-col justify-center order-2 lg:order-2 relative z-10 -mt-12 lg:-ml-12 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-[#121A30]/90 backdrop-blur-sm lg:bg-transparent lg:backdrop-blur-none p-6 lg:p-0 rounded-3xl"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-px bg-[#D4AF37]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#D4AF37]">
                  Owner & Lead Painter
                </span>
              </div>
              
              <h3 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-8">
                Meet Jucelino
              </h3>
              
              <div className="space-y-6 text-stone-300 text-base md:text-lg leading-relaxed mb-10">
                <p>
                  Jucelino is the owner and lead painter behind Renovation Paintwork, bringing over 15 years of dedicated experience to projects across Galway.
                </p>
                <p>
                  His philosophy is simple: understand the job properly, prepare it the right way, and deliver a clean, consistent finish that lasts. Every project is treated with the utmost respect, with the same care and attention given to every detail.
                </p>
                <p>
                  Jucelino personally assesses each project and prepares the quotation based on what the property actually requires. You'll deal directly with the person responsible for the quality of your project, from the first conversation through to the finished result.
                </p>
              </div>
              
              <motion.a 
                href="#quote"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-3 bg-[#D4AF37] hover:bg-[#C5A028] text-[#0A1128] px-8 py-4 rounded-full text-lg font-bold shadow-xl shadow-[#D4AF37]/20 transition-all uppercase tracking-wider text-sm"
              >
                <MessageSquare size={20} />
                Talk to Jucelino
              </motion.a>
            </motion.div>
          </div>
          
        </div>
      </div>

    </div>
  );
}
