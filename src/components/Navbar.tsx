import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Paintbrush } from 'lucide-react';
import { useState } from 'react';

interface NavbarProps {
  isScrolled: boolean;
}

export default function Navbar({ isScrolled }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Results', href: '#results' },
    { name: 'Our Standard', href: '#education' },
    { name: 'Premium Finish', href: '#premium-finish' },
    { name: 'Quote', href: '#personalised-quote' },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-2 pt-2 md:px-4 md:pt-4 pointer-events-none">
      <nav 
        className={`max-w-6xl mx-auto px-4 py-3 rounded-[1.5rem] border transition-all duration-500 pointer-events-auto ${
          isScrolled 
            ? 'bg-[#0A1128]/80 backdrop-blur-xl border-white/5 shadow-lg shadow-black/20 translate-y-[-8px]' 
            : 'bg-transparent border-transparent'
        }`}
      >
        <div className="flex justify-between items-center">
          <a href="#" className="flex items-center gap-2 group transition-transform hover:scale-105 active:scale-95">
            <img 
              src="/LOGO.41.10.jpeg" 
              alt="Renovation Paintwork Logo" 
              className={`h-10 w-auto rounded-xl transition-all duration-500 ${isScrolled ? 'brightness-100' : 'brightness-125'}`}
              referrerPolicy="no-referrer"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className={`text-[13px] font-bold uppercase tracking-[0.1em] transition-all hover:text-[#D4AF37] ${
                  isScrolled ? 'text-stone-300' : 'text-white/90'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#quote"
              className={`px-6 py-3 rounded-2xl text-[13px] font-bold uppercase tracking-widest transition-all transform hover:scale-105 active:scale-95 ${
                isScrolled 
                  ? 'bg-[#D4AF37] text-[#0A1128] shadow-xl shadow-[#D4AF37]/20' 
                  : 'bg-[#D4AF37] text-[#0A1128] border border-white/10'
              }`}
            >
              Get a Free Quote
            </a>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden p-2 transition-transform hover:scale-110 active:scale-90"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="text-white" />
            ) : (
              <Menu className="text-white" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              className="mt-4 bg-[#121A30]/95 backdrop-blur-2xl rounded-[2.5rem] border border-white/5 shadow-2xl overflow-hidden md:hidden"
            >
              <div className="px-6 py-8 flex flex-col gap-4 text-center">
                {navLinks.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-base font-bold text-white hover:text-[#D4AF37] transition-colors py-1.5 uppercase tracking-widest text-xs"
                  >
                    {link.name}
                  </a>
                ))}
                <a 
                  href="#quote"
                  onClick={() => setIsOpen(false)}
                  className="bg-[#D4AF37] text-[#0A1128] px-6 py-4 rounded-2xl font-bold uppercase tracking-widest text-xs shadow-xl active:scale-95 transition-transform"
                >
                  Get a Free Quote
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
}
