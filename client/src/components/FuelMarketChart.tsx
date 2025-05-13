import { useState } from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, PieChart, LineChart, Line, Bar, Pie, Cell } from "recharts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";

// Dados de vendas trimestrais de combustíveis em postos (em milhões de litros)
const quarterlyFuelSalesData = [
  { name: "Jan", gasolina: 45.8, etanol: 22.3, diesel: 38.5, gnv: 8.2 },
  { name: "Fev", gasolina: 43.2, etanol: 23.8, diesel: 37.1, gnv: 7.9 },
  { name: "Mar", gasolina: 47.5, etanol: 25.2, diesel: 39.3, gnv: 8.4 },
  { name: "Abr", gasolina: 48.1, etanol: 27.4, diesel: 38.9, gnv: 8.5 },
  { name: "Mai", gasolina: 46.3, etanol: 28.5, diesel: 37.8, gnv: 8.3 },
  { name: "Jun", gasolina: 44.5, etanol: 26.9, diesel: 36.5, gnv: 8.0 },
  { name: "Jul", gasolina: 49.2, etanol: 25.7, diesel: 40.2, gnv: 8.7 },
  { name: "Ago", gasolina: 51.8, etanol: 24.6, diesel: 41.7, gnv: 9.1 },
  { name: "Set", gasolina: 50.3, etanol: 23.9, diesel: 40.5, gnv: 8.9 },
  { name: "Out", gasolina: 48.7, etanol: 22.8, diesel: 39.6, gnv: 8.6 },
  { name: "Nov", gasolina: 46.9, etanol: 21.5, diesel: 38.4, gnv: 8.4 },
  { name: "Dez", gasolina: 52.4, etanol: 24.1, diesel: 42.3, gnv: 9.3 }
];

// Dados de participação por categoria de produtos em lojas de conveniência
const convenienceStoreData = [
  { name: "Bebidas", value: 32 },
  { name: "Alimentos", value: 28 },
  { name: "Tabaco", value: 15 },
  { name: "Serviços", value: 12 },
  { name: "Automotivos", value: 8 },
  { name: "Outros", value: 5 }
];

// Cores para o gráfico de torta
const COLORS = ['#6C3CE9', '#4AC1FF', '#3DE5A8', '#FF6961', '#FEB144', '#9370DB'];

// Dados de desempenho comparativo de postos com e sem sistema de metas
const performanceComparisonData = [
  { name: "Jan", comMetas: 115, semMetas: 100 },
  { name: "Fev", comMetas: 118, semMetas: 101 },
  { name: "Mar", comMetas: 123, semMetas: 103 },
  { name: "Abr", comMetas: 127, semMetas: 105 },
  { name: "Mai", comMetas: 132, semMetas: 108 },
  { name: "Jun", comMetas: 136, semMetas: 109 },
  { name: "Jul", comMetas: 140, semMetas: 111 },
  { name: "Ago", comMetas: 143, semMetas: 112 },
  { name: "Set", comMetas: 146, semMetas: 114 },
  { name: "Out", comMetas: 149, semMetas: 115 },
  { name: "Nov", comMetas: 152, semMetas: 117 },
  { name: "Dez", comMetas: 156, semMetas: 119 }
];

export default function FuelMarketChart() {
  const [activeTab, setActiveTab] = useState("fuel");

  return (
    <div className="space-y-6">
      <Tabs defaultValue="fuel" className="w-full" onValueChange={setActiveTab}>
        <TabsList className="grid grid-cols-3 mb-6">
          <TabsTrigger value="fuel">Vendas de Combustíveis</TabsTrigger>
          <TabsTrigger value="convenience">Loja de Conveniência</TabsTrigger>
          <TabsTrigger value="performance">Impacto das Metas</TabsTrigger>
        </TabsList>
        
        <TabsContent value="fuel" className="space-y-4">
          <Card className="dark-glassmorphism border-gray-800">
            <CardHeader className="pb-2">
              <CardTitle>Vendas Mensais de Combustíveis</CardTitle>
              <CardDescription>
                Volume de vendas por tipo de combustível ao longo do ano (em milhões de litros)
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-96">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={quarterlyFuelSalesData}
                    margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                    <XAxis dataKey="name" stroke="#999" />
                    <YAxis stroke="#999" />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#1A1A2E', borderColor: '#333', borderRadius: '8px' }}
                      itemStyle={{ color: '#fff' }}
                      formatter={(value) => [`${value} mi L`, undefined]}
                    />
                    <Legend />
                    <Area 
                      type="monotone" 
                      dataKey="gasolina" 
                      stackId="1"
                      stroke="#6C3CE9" 
                      fill="rgba(108, 60, 233, 0.6)" 
                      activeDot={{ r: 8 }}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="etanol" 
                      stackId="1"
                      stroke="#4AC1FF" 
                      fill="rgba(74, 193, 255, 0.6)" 
                    />
                    <Area 
                      type="monotone" 
                      dataKey="diesel" 
                      stackId="1"
                      stroke="#3DE5A8" 
                      fill="rgba(61, 229, 168, 0.6)" 
                    />
                    <Area 
                      type="monotone" 
                      dataKey="gnv" 
                      stackId="1"
                      stroke="#FF6961" 
                      fill="rgba(255, 105, 97, 0.6)" 
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-4 text-sm text-gray-400">
                <p>Observe a sazonalidade nas vendas de combustíveis e como o sistema Metas ajuda a otimizar estoques de acordo com tendências históricas.</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="convenience" className="space-y-4">
          <Card className="dark-glassmorphism border-gray-800">
            <CardHeader className="pb-2">
              <CardTitle>Distribuição de Vendas em Lojas de Conveniência</CardTitle>
              <CardDescription>
                Participação de cada categoria no faturamento total
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={convenienceStoreData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={100}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      >
                        {convenienceStoreData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip 
                        contentStyle={{ backgroundColor: '#1A1A2E', borderColor: '#333', borderRadius: '8px' }}
                        itemStyle={{ color: '#fff' }}
                        formatter={(value) => [`${value}%`, undefined]}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="flex flex-col justify-center space-y-4">
                  <h3 className="text-lg font-semibold">Insights para Aumento de Faturamento</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-start gap-2">
                      <div className="h-5 w-5 rounded-full bg-[#6C3CE9] mt-0.5" />
                      <div>
                        <span className="font-semibold">Bebidas (32%):</span> Configure metas específicas para bebidas premium com maior margem de lucro.
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-5 w-5 rounded-full bg-[#4AC1FF] mt-0.5" />
                      <div>
                        <span className="font-semibold">Alimentos (28%):</span> Monitore giro de estoque e estabeleça métricas de venda casada com combustíveis.
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-5 w-5 rounded-full bg-[#3DE5A8] mt-0.5" />
                      <div>
                        <span className="font-semibold">Tabaco (15%):</span> Planeje reposição e defina alertas de estoque mínimo baseado em histórico de vendas.
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-5 w-5 rounded-full bg-[#FF6961] mt-0.5" />
                      <div>
                        <span className="font-semibold">Serviços (12%):</span> Estabeleça metas de conversão para serviços adicionais com maior lucratividade.
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="performance" className="space-y-4">
          <Card className="dark-glassmorphism border-gray-800">
            <CardHeader className="pb-2">
              <CardTitle>Impacto do Sistema de Metas no Desempenho</CardTitle>
              <CardDescription>
                Comparativo de faturamento relativo entre postos com e sem gestão por metas (Base 100)
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-96">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={performanceComparisonData}
                    margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                    <XAxis dataKey="name" stroke="#999" />
                    <YAxis stroke="#999" domain={[90, 160]} />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#1A1A2E', borderColor: '#333', borderRadius: '8px' }}
                      itemStyle={{ color: '#fff' }}
                      formatter={(value) => [`Índice: ${value}`, undefined]}
                    />
                    <Legend />
                    <Line 
                      type="monotone" 
                      dataKey="comMetas" 
                      name="Com Sistema Metas" 
                      stroke="#6C3CE9" 
                      strokeWidth={3}
                      dot={{ r: 4 }}
                      activeDot={{ r: 8 }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="semMetas" 
                      name="Sem Sistema Metas" 
                      stroke="#999"
                      strokeDasharray="5 5" 
                      strokeWidth={2}
                      dot={{ r: 3 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { title: "+36% Faturamento", description: "Aumento relativo anual após 12 meses de implantação do sistema" },
                  { title: "14% Redução de Custos", description: "Otimização de estoques e gestão de recursos humanos" },
                  { title: "22% Aumento Ticket Médio", description: "Através de vendas dirigidas e metas por atendente" }
                ].map((stat, i) => (
                  <motion.div 
                    key={i}
                    className="dark-glassmorphism rounded-lg p-4 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                  >
                    <h3 className="text-xl font-bold text-gradient mb-2">{stat.title}</h3>
                    <p className="text-sm text-gray-400">{stat.description}</p>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}