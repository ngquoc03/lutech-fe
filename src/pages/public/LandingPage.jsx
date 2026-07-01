import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import LandingNavbar from '../../components/public/LandingNavbar';
import LandingFooter from '../../components/public/LandingFooter';
import ScrollReveal from '../../components/public/ScrollReveal';

// Các section của bạn
import Hero from '../../components/public/sections/Hero';
import Trust from '../../components/public/sections/Trust';
import Features from '../../components/public/sections/Features';
import Integrations from '../../components/public/sections/Integrations';
import Analytics from '../../components/public/sections/Analytics';
import TechnicalSecurity from '../../components/public/sections/TechnicalSecurity';
import FAQ from '../../components/public/sections/FAQ';
import CTA from '../../components/public/sections/CTA';

const LandingPage = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  // Logic hiện nút "Cuộn lên đầu trang" khi cuộn quá 400px
  useEffect(() => {
    const checkScroll = () => {
      setShowTopBtn(window.scrollY > 400);
    };
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-gray-900 font-sans selection:bg-primary/20 overflow-hidden relative">
      <LandingNavbar />
      
      <main className="w-full">
        {/* Hero không cần bọc hiệu ứng để hiện ngay lập tức */}
        <Hero />
        
        <ScrollReveal><Trust /></ScrollReveal>
        
        {/* Đổi màu nền xen kẽ bg-white và bg-[#FAFAFA] để trang không bị nhàm chán */}
        <div className="bg-white"><ScrollReveal><Features /></ScrollReveal></div>
        
        <ScrollReveal><Integrations /></ScrollReveal>
        
        <div className="bg-white"><ScrollReveal><Analytics /></ScrollReveal></div>
        
        <ScrollReveal><TechnicalSecurity /></ScrollReveal>
        
        <div className="bg-white"><ScrollReveal><FAQ /></ScrollReveal></div>
        
        <ScrollReveal><CTA /></ScrollReveal>
      </main>

      <LandingFooter />

      {/* Nút Back to top với hiệu ứng nổi */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 p-4 bg-primary text-white rounded-full shadow-2xl hover:bg-primaryDark transition-all duration-300 z-50 focus:outline-none focus:ring-4 focus:ring-primary/50 ${
          showTopBtn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        aria-label="Cuộn lên đầu trang"
      >
        <ArrowUp size={24} />
      </button>
    </div>
  );
};

export default LandingPage;