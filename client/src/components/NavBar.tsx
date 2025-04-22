import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Recursos", href: "#recursos" },
    { label: "Como Funciona", href: "#como-funciona" },
    { label: "Estudos de Mercado", href: "#estudos" },
    { label: "Depoimentos", href: "#depoimentos" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 px-4 py-3 transition-all duration-300 ${isScrolled ? 'bg-secondary/30 backdrop-blur-lg' : ''}`}>
      <div className="max-w-7xl mx-auto glassmorphism rounded-full px-4 py-2">
        <div className="flex justify-between items-center">
          <Link href="/">
            <div className="flex items-center space-x-2 cursor-pointer">
              <div className="h-10 w-10 bg-primary rounded-full flex items-center justify-center">
                <span className="font-montserrat font-bold text-xl">M</span>
              </div>
              <span className="font-montserrat font-bold text-2xl">Metas</span>
            </div>
          </Link>
          
          <div className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (
              <a 
                key={item.href}
                href={item.href} 
                className="hover:text-accent transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
          
          <a href="#contato">
            <Button className="bg-gradient-to-r from-primary to-secondary hover:shadow-lg hover:shadow-primary/30 transition-all">
              Solicitar Demo
            </Button>
          </a>
          
          <button 
            className="md:hidden text-2xl"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className="md:hidden absolute top-full left-0 right-0 dark-glassmorphism mt-2 mx-4 p-4 rounded-xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a 
                  key={item.href}
                  href={item.href} 
                  className="hover:text-accent transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default NavBar;
