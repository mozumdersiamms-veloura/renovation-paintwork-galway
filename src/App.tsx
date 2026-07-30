/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProofGallery from './components/ProofGallery';
import PremiumFinish from './components/PremiumFinish';
import PersonalisedQuote from './components/PersonalisedQuote';
import Education from './components/Education';
import QuoteForm from './components/QuoteForm';
import ReviewWidget from './components/ReviewWidget';
import Footer from './components/Footer';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0A1128] font-sans text-stone-300 selection:bg-amber-500/30 selection:text-amber-100">
      <Navbar isScrolled={isScrolled} />
      
      <main>
        <section id="hero">
          <Hero />
        </section>

        <section id="results" className="py-16 md:py-24">
          <ProofGallery />
        </section>

        <section id="education" className="py-16 md:py-24">
          <Education />
        </section>

        <section id="premium-finish" className="py-16 md:py-24">
          <PremiumFinish />
        </section>

        <section id="personalised-quote" className="py-16 md:py-24">
          <PersonalisedQuote />
        </section>

        <section id="quote" className="py-16 md:py-24 pb-32">
          <QuoteForm />
        </section>
      </main>

      <ReviewWidget />
      <Footer />
    </div>
  );
}
