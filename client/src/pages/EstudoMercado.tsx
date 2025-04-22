
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import PageLayout from "@/components/PageLayout";
import { Card } from "@/components/ui/card";
import { PieChart, Pie, BarChart, Bar, LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const marketShareData = [
  { name: 'Gasolina comum', value: 35 },
  { name: 'Etanol', value: 28 },
  { name: 'Diesel', value: 30 },
  { name: 'Outros', value: 7 }
];

const priceData = [
  { name: 'Gasolina', value: 5.80 },
  { name: 'Etanol', value: 4.20 },
  { name: 'Diesel', value: 6.10 }
];

const managementComparisonData = [
  { metric: 'Margem Líquida', comGestao: 6, semGestao: 3 },
  { metric: 'Retenção Clientes (%)', comGestao: 85, semGestao: 65 },
  { metric: 'Vendas (R$ mil)', comGestao: 180, semGestao: 150 }
];

const salesEvolutionData = [
  { mes: 'Mês 1', vendas: 150 },
  { mes: 'Mês 2', vendas: 165 },
  { mes: 'Mês 3', vendas: 180 },
  { mes: 'Mês 4', vendas: 190 },
  { mes: 'Mês 5', vendas: 200 },
  { mes: 'Mês 6', vendas: 210 }
];

const operationalCostsData = [
  { name: 'Desperdício', value: 2500 },
  { name: 'Multas', value: 1200 },
  { name: 'Perda Vendas', value: 10000 }
];

export default function EstudoMercado() {
  return (
    <PageLayout
      title="Estudo de Mercado"
      subtitle="Panorama do Mercado de Combustíveis no Brasil"
    >
      <div className="space-y-8">
        <ScrollReveal>
          <Card className="p-6 dark-glassmorphism">
            <h2 className="text-2xl font-bold mb-4">Consumo e Participação no Mercado</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Consumo Anual</h3>
                <p className="text-3xl font-bold text-primary">45 bilhões</p>
                <p className="text-gray-400">de litros (gasolina + diesel)</p>
              </div>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={marketShareData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, value }) => `${name}: ${value}%`}
                    />
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </Card>
        </ScrollReveal>

        <ScrollReveal>
          <Card className="p-6 dark-glassmorphism">
            <h2 className="text-2xl font-bold mb-4">Preços Médios (Junho/2023)</h2>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={priceData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" fill="hsl(var(--primary))" name="R$/L" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </ScrollReveal>

        <ScrollReveal>
          <Card className="p-6 dark-glassmorphism">
            <h2 className="text-2xl font-bold mb-4">Impacto da Gestão no Negócio</h2>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={managementComparisonData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="metric" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="comGestao" name="Com Gestão" fill="hsl(var(--success))" />
                  <Bar dataKey="semGestao" name="Sem Gestão" fill="hsl(var(--destructive))" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </ScrollReveal>

        <ScrollReveal>
          <Card className="p-6 dark-glassmorphism">
            <h2 className="text-2xl font-bold mb-4">Evolução de Vendas com Gestão</h2>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={salesEvolutionData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="mes" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="vendas" name="Vendas (R$ mil)" stroke="hsl(var(--primary))" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </ScrollReveal>

        <ScrollReveal>
          <Card className="p-6 dark-glassmorphism">
            <h2 className="text-2xl font-bold mb-4">Custos Operacionais sem Gestão</h2>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={operationalCostsData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Area type="monotone" dataKey="value" name="R$/mês" fill="hsl(var(--destructive))" stroke="hsl(var(--destructive))" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </ScrollReveal>
      </div>
    </PageLayout>
  );
}
