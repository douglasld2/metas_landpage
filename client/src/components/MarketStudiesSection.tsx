import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ChevronRight, Droplet, Store, Car } from "lucide-react";
import { 
  PieChart, 
  Pie, 
  Cell, 
  Tooltip, 
  ResponsiveContainer, 
  Legend
} from "recharts";

const marketStudies = [
  {
    id: 1,
    title: "Tendências de Consumo",
    description: "Análise trimestral das mudanças nos padrões de abastecimento e consumo em postos brasileiros.",
    bgClass: "bg-gradient-to-r from-primary/20 to-primary/5"
  },
  {
    id: 2,
    title: "Análise de Preços",
    description: "Comparativo regional de preços e margens para diferentes tipos de combustíveis no Brasil.",
    bgClass: "bg-gradient-to-r from-accent/20 to-accent/5"
  },
  {
    id: 3,
    title: "Conveniência & Serviços",
    description: "O impacto das lojas de conveniência e serviços adicionais na rentabilidade dos postos.",
    bgClass: "bg-gradient-to-r from-success/20 to-success/5"
  }
];

const insights = [
  {
    title: "Consumo de Etanol em Alta",
    description: "Aumento de 12% no consumo de etanol nas regiões Sul e Sudeste no último trimestre.",
    icon: <Droplet className="text-2xl text-primary" />,
    bgColor: "bg-primary/20"
  },
  {
    title: "Serviços Complementares",
    description: "Postos com serviços adicionais registram aumento médio de 22% na receita total.",
    icon: <Store className="text-2xl text-accent" />,
    bgColor: "bg-accent/20"
  },
  {
    title: "Eletrificação",
    description: "Crescimento de 45% na demanda por pontos de recarga para veículos elétricos em postos urbanos.",
    icon: <Car className="text-2xl text-success" />,
    bgColor: "bg-success/20"
  }
];

// Market share data for chart
const marketShareData = [
  { name: 'Gasolina', value: 55 },
  { name: 'Etanol', value: 25 },
  { name: 'Diesel', value: 15 },
  { name: 'GNV', value: 5 }
];

const COLORS = ['hsl(var(--primary))', 'hsl(var(--accent))', 'hsl(var(--success))', 'hsl(var(--chart-5))'];

const MarketStudiesSection = () => {
  return (
    <section id="estudos" className="py-20 px-4 relative">
      <div className="absolute top-20 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10"></div>
      
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-4">
              Estudos de Mercado <span className="text-gradient">Exclusivos</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Tenha acesso a análises detalhadas do mercado brasileiro de combustíveis para embasar suas decisões estratégicas.
            </p>
          </div>
        </ScrollReveal>
        
        <div className="grid md:grid-cols-3 gap-8">
          {marketStudies.map((study, index) => (
            <ScrollReveal key={study.id}>
              <motion.div
                className="dark-glassmorphism gradient-border rounded-xl overflow-hidden hover:shadow-lg hover:shadow-primary/20 transition-all h-full"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className={`w-full h-48 ${study.bgClass} flex items-center justify-center`}>
                  <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center">
                      <span className="font-bold text-xl">{study.id}</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-montserrat font-semibold text-xl mb-3">{study.title}</h3>
                  <p className="text-gray-300 mb-4">
                    {study.description}
                  </p>
                  <a href="#" className="text-accent font-medium flex items-center hover:underline">
                    Ver estudo completo <ChevronRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
        
        {/* Market insights */}
        <ScrollReveal>
          <div className="mt-16 dark-glassmorphism rounded-xl p-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="font-montserrat font-semibold text-2xl mb-4">
                  Insights do mercado brasileiro de combustíveis
                </h3>
                <p className="text-gray-300 mb-6">
                  Nossos especialistas analisam constantemente o mercado para identificar tendências e oportunidades para o seu negócio.
                </p>
                
                <div className="space-y-6">
                  {insights.map((insight, index) => (
                    <motion.div 
                      key={index}
                      className="flex gap-4"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className={`w-12 h-12 ${insight.bgColor} rounded-lg flex items-center justify-center flex-shrink-0`}>
                        {insight.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{insight.title}</h4>
                        <p className="text-sm text-gray-300">{insight.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              <div>
                <motion.div 
                  className="rounded-xl overflow-hidden relative dark-glassmorphism p-6"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                  viewport={{ once: true }}
                >
                  <h4 className="font-montserrat font-semibold text-xl mb-4 text-center">Distribuição de Mercado</h4>
                  
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={marketShareData}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                        >
                          {marketShareData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip 
                          formatter={(value) => [`${value}%`, 'Participação']}
                          contentStyle={{ 
                            backgroundColor: 'rgba(26, 26, 46, 0.9)',
                            borderColor: 'rgba(255,255,255,0.1)',
                            borderRadius: '0.5rem'
                          }}
                        />
                        <Legend />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                  
                  <div className="mt-4 text-center">
                    <h5 className="font-medium mb-1">Mapa de Oportunidades</h5>
                    <p className="text-sm text-gray-300">
                      Análise geográfica de regiões com maior potencial de crescimento para postos de combustível no Brasil.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default MarketStudiesSection;
