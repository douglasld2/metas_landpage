import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Carlos Silva",
    company: "Rede de Postos Estrela, SP",
    content: "Com o Metas, conseguimos aumentar nosso faturamento em 28% no primeiro trimestre. As metas personalizadas para cada unidade da nossa rede fizeram toda a diferença.",
    rating: 5,
    initials: "CS"
  },
  {
    name: "Ana Oliveira",
    company: "Auto Posto Horizonte, RJ",
    content: "Os insights sobre o comportamento de compra dos clientes nos permitiram otimizar nossa loja de conveniência. Nunca tivemos tanta clareza sobre o nosso negócio.",
    rating: 4.5,
    initials: "AO"
  },
  {
    name: "Roberto Mendes",
    company: "Rede Abasteça, MG",
    content: "A implementação foi rápida e a equipe de suporte é excepcional. O sistema nos ajuda a antecipar tendências e nos preparar para períodos de alta demanda.",
    rating: 5,
    initials: "RM"
  },
  {
    name: "Camila Ferreira",
    company: "Posto Rota Sul, RS",
    content: "A integração com nosso ERP foi perfeita e sem qualquer interrupção nas operações. Os relatórios ajudaram a identificar oportunidades que estávamos perdendo.",
    rating: 5,
    initials: "CF"
  }
];

const stats = [
  { value: "98%", label: "Taxa de satisfação dos clientes" },
  { value: "500+", label: "Postos utilizando o Metas" },
  { value: "32%", label: "Aumento médio em vendas" },
  { value: "15", label: "Estados atendidos" }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideContainerRef = useRef<HTMLDivElement>(null);
  
  const nextSlide = () => {
    if (currentIndex < testimonials.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      setCurrentIndex(0);
    }
  };
  
  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    } else {
      setCurrentIndex(testimonials.length - 1);
    }
  };
  
  useEffect(() => {
    if (slideContainerRef.current) {
      const slideWidth = slideContainerRef.current.children[0].clientWidth + 24; // width + gap
      slideContainerRef.current.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
      slideContainerRef.current.style.transition = 'transform 0.5s ease';
    }
  }, [currentIndex]);
  
  return (
    <section id="depoimentos" className="py-20 px-4 bg-dark/40 relative">
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10"></div>
      
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-4">
              O que nossos <span className="text-gradient">clientes</span> dizem
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Descubra como o Metas tem ajudado gestores de postos de combustível em todo o Brasil.
            </p>
          </div>
        </ScrollReveal>
        
        {/* Testimonials slider */}
        <ScrollReveal>
          <div className="relative">
            <div className="overflow-hidden rounded-xl pb-12">
              <div 
                ref={slideContainerRef}
                className="flex gap-6 transition-transform"
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="dark-glassmorphism rounded-xl p-6 min-w-[300px] md:min-w-[400px]">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center">
                        <span className="font-bold text-white">{testimonial.initials}</span>
                      </div>
                      <div>
                        <h4 className="font-semibold">{testimonial.name}</h4>
                        <p className="text-sm text-gray-300">{testimonial.company}</p>
                      </div>
                    </div>
                    <p className="text-gray-200 mb-4">
                      "{testimonial.content}"
                    </p>
                    <div className="flex text-accent">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className="h-4 w-4" 
                          fill={i < Math.floor(testimonial.rating) ? "currentColor" : "none"}
                        />
                      ))}
                      {testimonial.rating % 1 !== 0 && (
                        <Star 
                          className="h-4 w-4" 
                          fill="currentColor"
                          strokeWidth={4}
                          fillOpacity={0.5}
                        />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Slider controls */}
            <div className="flex justify-center gap-4 mt-6">
              <button 
                onClick={prevSlide}
                className="w-12 h-12 dark-glassmorphism rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <ChevronLeft />
              </button>
              <button 
                onClick={nextSlide}
                className="w-12 h-12 dark-glassmorphism rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <ChevronRight />
              </button>
            </div>
          </div>
        </ScrollReveal>
        
        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <ScrollReveal key={index}>
              <motion.div 
                className="dark-glassmorphism rounded-xl p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="font-montserrat font-bold text-3xl mb-2 text-gradient">{stat.value}</h3>
                <p className="text-gray-300">{stat.label}</p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
