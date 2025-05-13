import { useEffect } from "react";
import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import DashboardDemo from "@/components/DashboardDemo";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import FuelMarketChart from "@/components/FuelMarketChart";
import GasStationKPISection from "@/components/GasStationKPISection";
import FuelMarketTrends from "@/components/FuelMarketTrends";
import TestimonialsSection from "@/components/TestimonialsSection";

export default function Home() {
  // Add parallax effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const parallaxElements = document.querySelectorAll('[data-parallax]');
      
      parallaxElements.forEach((element: Element) => {
        const speed = element.getAttribute('data-parallax-speed') || "0.1";
        const yPos = -(scrollTop * parseFloat(speed));
        (element as HTMLElement).style.transform = `translateY(${yPos}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="font-inter bg-gradient-to-b from-dark to-secondary min-h-screen text-white overflow-x-hidden"
    >
      <NavBar />
      <HeroSection />
      
      <section id="recursos">
        <FeaturesSection />
      </section>
      
      <section id="dados-mercado">
        <div className="max-w-6xl mx-auto px-4 py-10">
          <h2 className="font-montserrat font-bold text-2xl md:text-3xl mb-6 text-center">
            Dados do <span className="text-gradient">Mercado</span> em Tempo Real
          </h2>
          <FuelMarketChart />
        </div>
      </section>
      
      <section id="como-funciona">
        <HowItWorksSection />
      </section>
      
      <GasStationKPISection />
      
      <section id="estudos">
        <DashboardDemo />
      </section>
      
      <FuelMarketTrends />
      
      <section id="depoimentos">
        <TestimonialsSection />
      </section>
      
      <ContactSection />
      <Footer />
    </motion.div>
  );
}
