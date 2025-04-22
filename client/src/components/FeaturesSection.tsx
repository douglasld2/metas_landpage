import { Database, LineChart, Target, PieChart, Users, Smartphone } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { motion } from "framer-motion";

const features = [
  {
    title: "Integração com ERP",
    description: "Conecte-se facilmente ao seu sistema ERP existente para importar dados de vendas e estoque em tempo real.",
    icon: <Database className="text-2xl" />
  },
  {
    title: "Análise Preditiva",
    description: "Algoritmos inteligentes que analisam tendências históricas e preveem demandas futuras com precisão.",
    icon: <LineChart className="text-2xl" />
  },
  {
    title: "Metas Personalizadas",
    description: "Defina e acompanhe metas por produto, funcionário ou período, com alertas e notificações automáticas.",
    icon: <Target className="text-2xl" />
  },
  {
    title: "Dashboards Intuitivos",
    description: "Visualize dados complexos em gráficos interativos que facilitam a compreensão e a tomada de decisões.",
    icon: <PieChart className="text-2xl" />
  },
  {
    title: "Análise de Clientes",
    description: "Identifique padrões de consumo e oportunidades para fidelização de clientes com base em dados reais.",
    icon: <Users className="text-2xl" />
  },
  {
    title: "Acesso Mobile",
    description: "Acompanhe o desempenho do seu negócio em qualquer lugar através do aplicativo móvel intuitivo.",
    icon: <Smartphone className="text-2xl" />
  }
];

const featureVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * i,
      duration: 0.5
    }
  })
};

const FeaturesSection = () => {
  return (
    <section id="recursos" className="py-20 px-4 bg-dark/50 relative">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-transparent to-dark/50"></div>
      
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-4">
              Recursos que <span className="text-gradient">impulsionam</span> seu negócio
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              O Metas oferece ferramentas poderosas para análise de dados, definição de metas e tomada de decisões no setor de combustíveis.
            </p>
          </div>
        </ScrollReveal>
        
        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <ScrollReveal key={index}>
              <motion.div
                className="dark-glassmorphism gradient-border p-6 rounded-xl hover:translate-y-[-10px] transition-transform"
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={featureVariants}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mb-5">
                  {feature.icon}
                </div>
                <h3 className="font-montserrat font-semibold text-xl mb-3">{feature.title}</h3>
                <p className="text-gray-300">
                  {feature.description}
                </p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
