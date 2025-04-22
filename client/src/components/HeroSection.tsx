import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { LineChart, Line, ResponsiveContainer } from "recharts";

// Sample data for the chart animations
const data1 = [
  { value: 40 }, { value: 20 }, { value: 60 }, { value: 30 }, { value: 70 }, { value: 50 }, { value: 80 }
];
const data2 = [
  { value: 80 }, { value: 40 }, { value: 70 }, { value: 30 }, { value: 50 }, { value: 20 }, { value: 40 }
];

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 px-4 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-40 -left-20 w-64 h-64 bg-primary/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl -z-10"></div>
      
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <ScrollReveal>
          <div className="relative z-10">
            <motion.h1 
              className="font-montserrat font-bold text-4xl md:text-5xl lg:text-6xl leading-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Transforme dados em <span className="text-gradient">resultados</span> para seu posto
            </motion.h1>
            
            <motion.p 
              className="text-lg mb-8 text-gray-200 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              O Metas conecta-se ao seu sistema ERP, analisa dados de vendas e cria metas inteligentes para impulsionar os resultados do seu posto de combustível.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-primary to-secondary hover:shadow-lg hover:shadow-primary/30 transition-all py-6 px-8 rounded-xl"
              >
                <a href="#contato">Começar agora</a>
              </Button>
              
              <Button
                asChild
                size="lg"
                variant="outline"
                className="glassmorphism border border-white/20 hover:border-white/40 transition-all py-6 px-8 rounded-xl"
              >
                <a href="#como-funciona" className="flex items-center">
                  Como funciona <ChevronRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </motion.div>
            
            <motion.div 
              className="mt-12 flex items-center gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="flex -space-x-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center border-2 border-white">
                  <span className="font-bold">U1</span>
                </div>
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-accent to-success flex items-center justify-center border-2 border-white">
                  <span className="font-bold">U2</span>
                </div>
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-success to-primary flex items-center justify-center border-2 border-white">
                  <span className="font-bold">U3</span>
                </div>
              </div>
              <div>
                <p className="font-medium"><span className="text-success">+500</span> gestores</p>
                <p className="text-sm text-gray-300">já utilizam o Metas</p>
              </div>
            </motion.div>
          </div>
        </ScrollReveal>
        
        <motion.div 
          className="relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="dark-glassmorphism rounded-2xl p-6 float-animation">
            <div className="relative rounded-lg w-full h-64 bg-dark/80 shadow-xl overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full flex flex-col p-4">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <h3 className="font-semibold text-xl">Dashboard de Análise</h3>
                    <p className="text-sm text-gray-300">Rendimento Mensal</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-error"></div>
                    <div className="w-3 h-3 rounded-full bg-accent"></div>
                    <div className="w-3 h-3 rounded-full bg-success"></div>
                  </div>
                </div>
                
                <div className="flex-1">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart>
                      <Line 
                        type="monotone" 
                        dataKey="value" 
                        data={data1} 
                        stroke="hsl(var(--accent))" 
                        strokeWidth={3} 
                        dot={false} 
                        animationDuration={2000}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="value" 
                        data={data2} 
                        stroke="hsl(var(--primary))" 
                        strokeWidth={3} 
                        dot={false} 
                        animationDuration={2000}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>
          
          <div className="absolute -bottom-10 -right-5 dark-glassmorphism rounded-xl p-4 z-20 w-48 float-animation-delay-1">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-full bg-success flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 4L4 12L12 20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" transform="rotate(270 12 12)" />
                </svg>
              </div>
              <span className="font-medium">+23.5%</span>
            </div>
            <p className="text-sm text-gray-300">Aumento nas vendas</p>
          </div>
          
          <div className="absolute -top-5 -left-5 dark-glassmorphism rounded-xl p-4 z-20 w-48 float-animation-delay-2">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 22V12H8V22M10 22V6H14V22M16 22V2H20V22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span className="font-medium">98%</span>
            </div>
            <p className="text-sm text-gray-300">Metas atingidas</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
