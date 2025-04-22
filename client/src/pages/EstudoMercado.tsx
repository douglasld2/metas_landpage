
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import PageLayout from "@/components/PageLayout";
import { Card } from "@/components/ui/card";
import { AlertTriangle, TrendingUp, DollarSign, Users } from 'lucide-react';
import { PieChart, Pie, BarChart, Bar, LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const marketShareData = [
  { name: 'Gasolina comum', value: 35 },
  { name: 'Etanol', value: 28 },
  { name: 'Diesel', value: 30 },
  { name: 'Outros (GNV, eletrificação)', value: 7 }
];

const priceData = [
  { name: 'Gasolina', value: 5.80 },
  { name: 'Etanol', value: 4.20 },
  { name: 'Diesel', value: 6.10 }
];

const profitMarginData = [
  { name: 'Com Gestão', value: 6 },
  { name: 'Sem Gestão', value: 3 }
];

const operationalLossesData = [
  { name: 'Desperdício', value: 2500 },
  { name: 'Falta de Estoque', value: 15000 },
  { name: 'Precificação Ineficiente', value: 4500 }
];

const customerRetentionData = [
  { name: 'Clientes Perdidos', value: 68 },
  { name: 'Clientes Retidos', value: 32 }
];

export default function EstudoMercado() {
  return (
    <PageLayout
      title="Estudo de Mercado"
      subtitle="Panorama do Mercado de Combustíveis no Brasil"
    >
      <div className="space-y-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Endereço do Escritório</h2>
          <p className="text-gray-400">
            Rua José de Picolli Mattei 132<br />
            Costa e Silva - Joinville/SC<br />
            CEP: 89218-523
          </p>
        </div>
        <ScrollReveal>
          <Card className="p-6 dark-glassmorphism">
            <h2 className="text-2xl font-bold mb-4">Panorama do Mercado (2023)</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Consumo Anual</h3>
                <p className="text-3xl font-bold text-primary">45 bilhões</p>
                <p className="text-gray-400">de litros (gasolina + diesel)</p>
                <div className="mt-4">
                  <h4 className="font-semibold mb-2">Principais Desafios:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <AlertTriangle className="text-warning h-4 w-4" />
                      <span>Volatilidade de preços</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Users className="text-warning h-4 w-4" />
                      <span>Alta concorrência</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <TrendingUp className="text-warning h-4 w-4" />
                      <span>Crescimento de alternativas</span>
                    </li>
                  </ul>
                </div>
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
            <div className="grid md:grid-cols-2 gap-6">
              <div className="h-[300px]">
                <h3 className="text-xl font-semibold mb-3">Margem de Lucro (%)</h3>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={profitMarginData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="value" fill="hsl(var(--success))" name="%" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className="h-[300px]">
                <h3 className="text-xl font-semibold mb-3">Perdas Operacionais (R$/mês)</h3>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={operationalLossesData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="value" fill="hsl(var(--destructive))" name="R$" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </Card>
        </ScrollReveal>

        <ScrollReveal>
          <Card className="p-6 dark-glassmorphism">
            <h2 className="text-2xl font-bold mb-4">Retenção de Clientes</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Experiência do Cliente</h3>
                <p className="text-gray-400 mb-4">68% dos consumidores não retornam após uma experiência negativa</p>
                <div className="bg-warning/10 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Principais Causas de Perda:</h4>
                  <ul className="space-y-2">
                    <li>• Filas longas</li>
                    <li>• Falta de combustível</li>
                    <li>• Atendimento ruim</li>
                  </ul>
                </div>
              </div>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={customerRetentionData}
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
      </div>
    </PageLayout>
  );
}
