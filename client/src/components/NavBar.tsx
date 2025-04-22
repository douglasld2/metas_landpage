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
    { label: "Suporte", href: "/suporte" },
    { label: "FAQ", href: "/faq" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 px-4 py-2 transition-all duration-300 ${isScrolled ? 'bg-secondary/50 backdrop-blur-lg' : ''}`}>
      <div className="max-w-6xl mx-auto glassmorphism rounded-lg px-4 py-2">
        <div className="flex justify-between items-center">
          <Link href="/">
            <div className="flex items-center space-x-2 cursor-pointer">
              <div className="h-8 w-8 bg-primary rounded-md flex items-center justify-center">
                <span className="font-montserrat font-bold text-lg">M</span>
              </div>
              <div>
                <span className="font-montserrat font-bold text-xl">Metas</span>
                <span className="text-xs block text-gray-400">por ResoluteSoftware</span>
              </div>
            </div>
          </Link>
          
          <div className="hidden md:flex space-x-5 items-center">
            {navItems.map((item) => (
              <a 
                key={item.href}
                href={item.href} 
                className="text-sm hover:text-accent transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
          
          <a href="#contato">
            <Button size="sm" className="bg-gradient-to-r from-primary to-secondary hover:shadow-md hover:shadow-primary/20 transition-all text-sm">
              Solicitar Demo
            </Button>
          </a>
          
          <button 
            className="md:hidden text-xl"
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
            className="md:hidden absolute top-full left-0 right-0 dark-glassmorphism mt-1 mx-4 p-3 rounded-lg"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <a 
                  key={item.href}
                  href={item.href} 
                  className="text-sm hover:text-accent transition-colors py-1"
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
