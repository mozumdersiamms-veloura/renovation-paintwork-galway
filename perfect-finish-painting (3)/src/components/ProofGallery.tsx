import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const projectOrder = [1, 9, 10, 11, 12, 13, 7, 3, 5];
const projects = projectOrder.map((id) => ({
  id: id,
  title: `Project Success ${id}`,
  description: 'High quality finish delivered with precision and care.',
  image: `${import.meta.env.BASE_URL}GALLERY%20PIC/Jucelino%20LP%20${id}.avif`,
}));

export default function ProofGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % projects.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-3xl md:text-5xl font-black text-white leading-[1] tracking-tighter uppercase">Our Recent <br /><span className="text-[#D4AF37]">Projects.</span></h2>
        </motion.div>
        
        <motion.p 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
           className="max-w-xl text-stone-400 font-medium text-base leading-relaxed"
        >
          While others look for the fastest way to finish, we look for the best way. We provide the proper preparation and technical expertise required to give your home a finish that looks better and lasts years longer.
        </motion.p>
      </div>

      <div className="relative h-[350px] md:h-[500px] flex items-center justify-center overflow-hidden">
        {/* Carousel Logic */}
        <div className="relative w-full h-full flex items-center justify-center">
          <AnimatePresence mode="popLayout" initial={false}>
            {projects.map((project, index) => {
              const offset = (index - currentIndex + projects.length) % projects.length;
              const isCenter = offset === 0;
              const isVisible = offset === 0 || offset === 1 || offset === projects.length - 1;

              if (!isVisible) return null;

              return (
                <motion.div
                  key={project.id}
                  initial={{ scale: 0.8, opacity: 0, x: offset === 1 ? 200 : -200 }}
                  animate={{ 
                    scale: isCenter ? 1 : 0.8, 
                    opacity: isCenter ? 1 : 0.3,
                    x: isCenter ? 0 : offset === 1 ? (window.innerWidth < 640 ? '40%' : '60%') : (window.innerWidth < 640 ? '-40%' : '-60%'),
                    zIndex: isCenter ? 30 : 10,
                  }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute w-[95%] sm:w-[85%] md:w-[60%] h-full rounded-[2rem] overflow-hidden shadow-2xl cursor-pointer"
                  onClick={() => !isCenter && (offset === 1 ? next() : prev())}
                >
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Navigation Buttons - Adjusted for smaller screens */}
        <div className="absolute inset-x-2 top-1/2 -translate-y-1/2 flex justify-between z-40 pointer-events-none">
          <button 
            onClick={prev}
            className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-[#121A30]/90 border border-[#D4AF37]/30 backdrop-blur shadow-xl flex items-center justify-center text-white hover:bg-[#D4AF37] hover:text-[#0A1128] transition-all pointer-events-auto active:scale-90"
          >
            <ChevronLeft size={20} className="md:w-7 md:h-7" />
          </button>
          <button 
            onClick={next}
            className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-[#121A30]/90 border border-[#D4AF37]/30 backdrop-blur shadow-xl flex items-center justify-center text-white hover:bg-[#D4AF37] hover:text-[#0A1128] transition-all pointer-events-auto active:scale-90"
          >
            <ChevronRight size={20} className="md:w-7 md:h-7" />
          </button>
        </div>
      </div>
      
      {/* Visual dots */}
      <div className="flex justify-center gap-2 mt-12">
        {projects.map((_, i) => (
          <button 
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`h-2 rounded-full transition-all duration-500 ${i === currentIndex ? 'w-10 bg-[#D4AF37]' : 'w-2 bg-white/20'}`}
          />
        ))}
      </div>
    </div>
  );
}
