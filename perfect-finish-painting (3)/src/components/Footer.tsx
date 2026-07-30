import { Paintbrush, Facebook, Instagram, Phone, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0A1128] text-stone-300 pt-16 pb-8 border-t border-white/5 mt-0">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <img 
              src={`${import.meta.env.BASE_URL}LOGO.41.10.jpeg`} 
              alt="Renovation Paintwork Logo" 
              className="h-12 w-auto rounded-lg"
              referrerPolicy="no-referrer"
            />
          </div>
          <p className="text-stone-400 leading-relaxed text-sm">
            Galway's premier painting and renovation service. Quality craftsmanship, transparent pricing, and professional reliability.
          </p>
          <div className="flex gap-4">
            <a href="https://www.facebook.com/share/1bz6NTkXSn/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#121A30] flex items-center justify-center hover:bg-[#D4AF37] hover:text-[#0A1128] transition-all">
              <Facebook size={20} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-[#121A30] flex items-center justify-center hover:bg-[#D4AF37] hover:text-[#0A1128] transition-all">
              <Instagram size={20} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold text-base mb-4 uppercase tracking-wider">Quick Links</h4>
          <ul className="space-y-3 text-sm">
            <li><a href="#results" className="hover:text-[#D4AF37] transition-colors">Our Results</a></li>
            <li><a href="#about" className="hover:text-[#D4AF37] transition-colors">Meet Jucelino</a></li>
            <li><a href="#pricing" className="hover:text-[#D4AF37] transition-colors">Pricing</a></li>
            <li><a href="#quote" className="hover:text-[#D4AF37] transition-colors">Get a Quote</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold text-base mb-4 uppercase tracking-wider">Services</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">Interior Painting</li>
            <li className="flex items-center gap-2">Exterior Painting</li>
            <li className="flex items-center gap-2">Commercial Refurbishment</li>
            <li className="flex items-center gap-2">Wallpaper Application</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold text-base mb-4 uppercase tracking-wider">Contact Us</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <Phone size={20} className="text-[#D4AF37] flex-shrink-0 mt-1" />
              <span>087 100 4154 <br /><span className="text-xs text-stone-500 uppercase">WhatsApp • Available Mon-Sat</span></span>
            </li>
            <li className="flex items-start gap-3">
              <Mail size={20} className="text-[#D4AF37] flex-shrink-0 mt-1" />
              <span className="break-all">info@renovationpaintwork.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-sm text-stone-500">
          © {currentYear} Renovation Paintwork Galway. All rights reserved.
        </p>
        <div className="flex gap-8 text-sm text-stone-500">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
