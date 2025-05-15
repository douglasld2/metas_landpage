import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Info, ExternalLink, ArrowRight, TrendingUp, TrendingDown } from "lucide-react";

const marketTrendsData = [
  {
    category: "Combustíveis",
    trends: [
      {
        title: "Aumento da demanda por combustíveis premium",
        description: "Postos com programas de fidelidade registram crescimento de 22% nas vendas de combustíveis premium",
        impact: "positivo",
        action: "Implemente metas específicas para conversão de clientes para combustíveis premium"
      },
      {
        title: "Crescimento do GNV",
        description: "Vendas de GNV aumentaram 18% nos últimos 12 meses devido ao menor custo por quilômetro rodado",
        impact: "positivo",
        action: "Estabeleça metas progressivas para equipe de vendas focadas em conversão para GNV"
      },
      {
        title: "Pressão nas margens da gasolina comum",
        description: "Aumento da competição tem reduzido margens em 8% na gasolina comum",
        impact: "negativo",
        action: "Utilize o Metas para monitorar rentabilidade e estabelecer limites mínimos de margem"
      }
    ]
  },
  {
    category: "Conveniência",
    trends: [
      {
        title: "Expansão do modelo food service",
        description: "Lojas de conveniência com oferta de alimentos frescos reportam aumento de 32% no ticket médio",
        impact: "positivo",
        action: "Use o módulo de metas por categoria para estimular venda de produtos de alimentação"
      },
      {
        title: "Crescimento do delivery via aplicativos",
        description: "Vendas por delivery cresceram 45% em lojas de conveniência integradas a aplicativos",
        impact: "positivo",
        action: "Configure metas específicas para vendas online com margens diferenciadas"
      },
      {
        title: "Queda nas vendas de produtos impressos",
        description: "Redução de 23% nas vendas de jornais, revistas e outros impressos em lojas de conveniência",
        impact: "negativo",
        action: "Reposicione área de impressos e estabeleça metas para produtos digitais alternativos"
      }
    ]
  },
  {
    category: "Operação",
    trends: [
      {
        title: "Automação de processos",
        description: "Postos com sistemas de gestão automatizados reduzem custos operacionais em até 17%",
        impact: "positivo",
        action: "Utilize o Metas para definir objetivos de eficiência operacional por turno"
      },
      {
        title: "Escassez de mão de obra qualificada",
        description: "67% dos postos relatam dificuldades em contratar e reter funcionários capacitados",
        impact: "negativo",
        action: "Implemente metas com incentivos para retenção e treinamento da equipe"
      },
      {
        title: "Expansão de serviços de valor agregado",
        description: "Serviços como lavagem premium e troca de óleo representam aumento de 24% na receita não-combustível",
        impact: "positivo",
        action: "Defina metas de conversão para serviços complementares com maior margem"
      }
    ]
  }
];

const fuelMarketStats = [
  { 
    label: "Postos no Brasil", 
    value: "41.700+", 
    change: "+1,5% ao ano",
    direction: "up"
  },
  { 
    label: "Faturamento do Setor", 
    value: "R$ 490 bi", 
    change: "+5,8% em 2024",
    direction: "up"
  },
  { 
    label: "Lojas de Conveniência", 
    value: "8.450", 
    change: "+12,3% em 3 anos",
    direction: "up"
  },
  { 
    label: "Margem Média", 
    value: "8,7%", 
    change: "-0,5% vs 2023",
    direction: "down"
  }
];

export default function FuelMarketTrends() {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-10">
            <h2 className="font-montserrat font-bold text-2xl md:text-3xl mb-3">
              Tendências do <span className="text-gradient">Mercado</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-sm">
              Mantenha-se atualizado sobre as principais tendências do setor de combustíveis e lojas de conveniência, 
              e saiba como o Metas pode ajudar seu negócio a se adaptar às mudanças do mercado.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-4 gap-4 mb-10">
          {fuelMarketStats.map((stat, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <Card className="dark-glassmorphism border-gray-800">
                <CardContent className="p-5">
                  <p className="text-sm text-gray-400 mb-1">{stat.label}</p>
                  <p className="text-2xl font-bold mb-1">{stat.value}</p>
                  <div className="flex items-center text-sm">
                    {stat.direction === "up" ? (
                      <TrendingUp className="h-4 w-4 text-success mr-1" />
                    ) : (
                      <TrendingDown className="h-4 w-4 text-error mr-1" />
                    )}
                    <span className={`${stat.direction === "up" ? "text-success" : "text-error"}`}>
                      {stat.change}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        <Tabs defaultValue="Combustíveis" className="w-full">
          <TabsList className="grid grid-cols-3 mb-6">
            {marketTrendsData.map((category) => (
              <TabsTrigger key={category.category} value={category.category}>
                {category.category}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {marketTrendsData.map((category) => (
            <TabsContent key={category.category} value={category.category} className="space-y-6">
              {category.trends.map((trend, index) => (
                <ScrollReveal key={index} delay={index * 0.1}>
                  <Card className="dark-glassmorphism border-gray-800 overflow-hidden">
                    <div className={`h-1 ${trend.impact === "positivo" ? "bg-success" : "bg-error"}`}></div>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-lg">{trend.title}</CardTitle>
                        <div className={`px-2 py-1 rounded text-xs ${trend.impact === "positivo" ? "bg-success/20 text-success" : "bg-error/20 text-error"}`}>
                          {trend.impact === "positivo" ? "Oportunidade" : "Alerta"}
                        </div>
                      </div>
                      <CardDescription className="text-gray-400">
                        {trend.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-start gap-2 bg-background/30 p-3 rounded-lg">
                        <Info className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-sm font-medium mb-1">Como o Metas pode ajudar:</p>
                          <p className="text-sm text-gray-400">{trend.action}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              ))}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}