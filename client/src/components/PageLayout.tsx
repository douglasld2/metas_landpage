import React from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { motion } from "framer-motion";

interface PageLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
  className?: string;
}

const PageLayout: React.FC<PageLayoutProps> = ({ 
  children, 
  title, 
  subtitle,
  className = ""
}) => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className={`dark-glassmorphism p-6 rounded-lg ${className}`}>
            <ScrollReveal>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="font-montserrat font-bold text-2xl md:text-3xl mb-2">{title}</h1>
                {subtitle && <p className="text-gray-400 mb-6">{subtitle}</p>}
                
                <div className="mt-6">
                  {children}
                </div>
              </motion.div>
            </ScrollReveal>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PageLayout;