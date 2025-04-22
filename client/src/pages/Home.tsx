import { useEffect } from "react";
import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import DashboardDemo from "@/components/DashboardDemo";
import MarketStudiesSection from "@/components/MarketStudiesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

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
      <FeaturesSection />
      <HowItWorksSection />
      <DashboardDemo />
      <MarketStudiesSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </motion.div>
  );
}
