import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ChevronRight, TrendingUp, BarChart3, PieChart, LineChart, ArrowUp } from "lucide-react";
import { GlassmorphismCard } from "@/components/ui/glassmorphism";
import { motion } from "framer-motion";

const kpiData = [
  {
    title: "Volume de Combustíveis",
    description: "Monitore e defina metas para vendas de cada tipo de combustível",
    metrics: [
      "Litros vendidos por combustível",
      "Margem de lucro por litro",
      "Comparativo com períodos anteriores",
      "Projeção de vendas baseada em histórico"
    ],
    icon: <BarChart3 className="h-10 w-10 text-primary" />,
    improvement: "18%",
    background: "from-primary/20 to-accent/10"
  },
  {
    title: "Loja de Conveniência",
    description: "Analise e otimize o desempenho da sua loja",
    metrics: [
      "Ticket médio por cliente",
      "Vendas por categoria de produto",
      "Taxa de conversão (abastecimento → loja)",
      "Produtos de maior margem"
    ],
    icon: <PieChart className="h-10 w-10 text-accent" />,
    improvement: "24%",
    background: "from-accent/20 to-primary/10"
  },
  {
    title: "Serviços Adicionais",
    description: "Maximize o faturamento com serviços complementares",
    metrics: [
      "Lavagem e lubrificação",
      "Troca de óleo e filtros",
      "Calibragem e nitrogênio",
      "Recarga de celular e pagamentos"
    ],
    icon: <LineChart className="h-10 w-10 text-success" />,
    improvement: "15%",
    background: "from-success/20 to-accent/10"
  },
  {
    title: "Desempenho da Equipe",
    description: "Gerencie metas individuais e por turno",
    metrics: [
      "Vendas por atendente/frentista",
      "Vendas sugeridas realizadas",
      "Avaliação de atendimento",
      "Produtividade por turno"
    ],
    icon: <TrendingUp className="h-10 w-10 text-primary" />,
    improvement: "21%",
    background: "from-primary/20 to-success/10"
  }
];

export default function GasStationKPISection() {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-10">
            <h2 className="font-montserrat font-bold text-2xl md:text-3xl mb-3">
              KPIs Essenciais para <span className="text-gradient">Postos de Combustíveis</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-sm">
              O Metas oferece monitoramento em tempo real dos indicadores mais importantes para o seu negócio, 
              permitindo gestão eficiente e maximização de resultados.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6">
          {kpiData.map((kpi, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <GlassmorphismCard hasGradientBorder className="p-6 h-full bg-gradient-to-br ${kpi.background}">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-background/40 rounded-lg">
                    {kpi.icon}
                  </div>
                  <div>
                    <h3 className="font-montserrat font-semibold text-lg mb-1">{kpi.title}</h3>
                    <p className="text-gray-300 text-sm mb-3">{kpi.description}</p>
                    
                    <div className="space-y-2 mb-4">
                      {kpi.metrics.map((metric, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <ChevronRight className="h-3 w-3 text-primary flex-shrink-0" />
                          <span className="text-sm text-gray-400">{metric}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex items-center gap-2 text-primary">
                      <ArrowUp className="h-4 w-4" />
                      <span className="font-semibold">{kpi.improvement} de aumento no faturamento</span>
                    </div>
                  </div>
                </div>
              </GlassmorphismCard>
            </ScrollReveal>
          ))}
        </div>
        
        <ScrollReveal>
          <div className="mt-12 dark-glassmorphism p-6 rounded-lg">
            <h3 className="font-montserrat font-semibold text-lg mb-3 text-center">
              Benefícios da Gestão por Metas para Postos de Combustíveis
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6 mt-6">
              {[
                {
                  title: "Visibilidade em Tempo Real",
                  description: "Acompanhe o desempenho de vendas, margem e estoque em tempo real, permitindo decisões ágeis e baseadas em dados.",
                  animation: "float-animation"
                },
                {
                  title: "Motivação da Equipe",
                  description: "Estabeleça metas claras e incentivos para sua equipe, com acompanhamento transparente e gamificação dos resultados.",
                  animation: "float-animation-delay-1"
                },
                {
                  title: "Antecipação de Tendências",
                  description: "Analise dados históricos para identificar padrões sazonais e prepare-se antecipadamente para períodos de alta ou baixa.",
                  animation: "float-animation-delay-2"
                }
              ].map((benefit, i) => (
                <motion.div 
                  key={i}
                  className={`bg-background/20 p-4 rounded-lg ${benefit.animation}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <h4 className="font-montserrat font-semibold text-base mb-2">{benefit.title}</h4>
                  <p className="text-sm text-gray-400">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}