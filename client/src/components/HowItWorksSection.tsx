import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const steps = [
  {
    number: 1,
    title: "Integração com seu ERP",
    description: "O Metas se conecta facilmente ao seu sistema de gestão existente, coletando automaticamente dados de vendas, estoque e financeiros.",
    badge: "Processo seguro e sem alterações no seu sistema"
  },
  {
    number: 2,
    title: "Análise inteligente de dados",
    description: "Nossos algoritmos analisam padrões de vendas, sazonalidades e comportamentos de mercado para identificar oportunidades.",
    badge: "Baseado em IA e modelos preditivos"
  },
  {
    number: 3,
    title: "Definição de metas realistas",
    description: "Com base nos dados analisados, o sistema sugere metas alcançáveis para cada setor do seu negócio, com planos de ação claros.",
    badge: "Metas personalizadas e adaptáveis"
  },
  {
    number: 4,
    title: "Acompanhamento e otimização contínua",
    description: "Acompanhe o progresso das metas em tempo real e receba recomendações para ajustes e melhorias ao longo do caminho.",
    badge: "Dashboards e alertas automáticos",
    isLast: true
  }
];

const HowItWorksSection = () => {
  return (
    <section id="como-funciona" className="py-20 px-4 relative">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10"></div>
      
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-4">
              Como o <span className="text-gradient">Metas</span> funciona
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Um processo simples e eficiente para transformar dados em estratégias de crescimento para o seu posto.
            </p>
          </div>
        </ScrollReveal>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <div className="relative">
              <div className="absolute inset-[-4px] rounded-xl bg-gradient-to-r from-primary to-accent blur-sm opacity-70"></div>
              <div className="relative rounded-xl overflow-hidden">
                <div className="relative aspect-[4/3] bg-dark/40">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-primary/30 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5 3L19 12L5 21V3Z" fill="currentColor" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-radial from-transparent to-dark/80"></div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-between">
                    <span className="text-sm bg-primary/20 px-3 py-1 rounded-full">Software ERP</span>
                    <span className="text-sm bg-accent/20 px-3 py-1 rounded-full">Análise de Dados</span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
          
          <div>
            {/* Steps */}
            <div className="space-y-8">
              {steps.map((step, index) => (
                <ScrollReveal key={index}>
                  <motion.div 
                    className="flex gap-5"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true, margin: "-100px" }}
                  >
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center font-montserrat font-bold">
                        {step.number}
                      </div>
                      {!step.isLast && (
                        <div className="h-full w-px bg-primary/50 mx-auto mt-2"></div>
                      )}
                    </div>
                    <div>
                      <h3 className="font-montserrat font-semibold text-xl mb-2">{step.title}</h3>
                      <p className="text-gray-300 mb-3">
                        {step.description}
                      </p>
                      <div className="dark-glassmorphism inline-block px-3 py-1 rounded-full text-sm">
                        <Check className="inline-block text-success mr-1 h-4 w-4" /> {step.badge}
                      </div>
                    </div>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
