import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Marcos",
    company: "Rede Raul Lins, PE",
    content: "Agora ficou mais fácil controlar a comissão dos frentistas e dos trocadores de óleo, cada um busca o seu melhor e ainda posso adaptar por turnos!",
    rating: 5,
    initials: "RL"
  },
  {
    name: "Diagini",
    company: "Rede São Cristóvão, PR",
    content: "As metas são dinâmicas e com pouco tempo modifico para o mes vigente, o acompanhamento nas televisões poupa muito o meu tempo e deixa os frentistas atualizados!",
    rating: 4.5,
    initials: "SC"
  },
  {
    name: "Rogério",
    company: "Rede Rodobrás, MT",
    content: "Agora ficou mais fácil controlar e estimular a venda de aditivada, consigo controlar as vendas de diesel para frentistas específicos e isso aumenta a produtividade da minha equipe.",
    rating: 5,
    initials: "RB"
  },
  {
    name: "Camila",
    company: "Rede Parati, RS",
    content: "A integração com nosso ERP foi perfeita e sem qualquer interrupção nas operações. Os relatórios ajudaram a identificar oportunidades de melhoria nos nossos processos.",
    rating: 5,
    initials: "PA"
  }
];

const stats = [
  { value: "89%", label: "Taxa de satisfação dos clientes" },
  { value: "250+", label: "Postos utilizando o Metas" },
  { value: "13%", label: "Aumento médio em vendas" },
  { value: "12", label: "Estados atendidos" }
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
    <section id="depoimentos" className="py-16 px-4 bg-dark/60 relative">
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl -z-10"></div>
      
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-bold text-2xl md:text-3xl mb-3">
              O que nossos <span className="text-gradient">clientes</span> dizem
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto text-sm">
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
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <ScrollReveal key={index}>
              <motion.div 
                className="dark-glassmorphism rounded-lg p-4 text-center"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="font-montserrat font-bold text-2xl mb-1 text-gradient">{stat.value}</h3>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
