
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import PageLayout from "@/components/PageLayout";
import { Card } from "@/components/ui/card";

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
              <div>
                <h3 className="text-xl font-semibold mb-3">Participação</h3>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span>Gasolina comum</span>
                    <span className="font-semibold">35%</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Etanol</span>
                    <span className="font-semibold">28%</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Diesel</span>
                    <span className="font-semibold">30%</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Outros (GNV, eletrificação)</span>
                    <span className="font-semibold">7%</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </ScrollReveal>

        <ScrollReveal>
          <Card className="p-6 dark-glassmorphism">
            <h2 className="text-2xl font-bold mb-4">Impacto da Falta de Gestão</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Perdas Financeiras</h3>
                <ul className="space-y-2">
                  <li>
                    <span className="font-semibold">R$ 2.500/mês</span>
                    <p className="text-gray-400">Desperdício de combustível</p>
                  </li>
                  <li>
                    <span className="font-semibold">R$ 1.200/mês</span>
                    <p className="text-gray-400">Multas por irregularidades</p>
                  </li>
                  <li>
                    <span className="font-semibold">R$ 10.000/mês</span>
                    <p className="text-gray-400">Perda de vendas</p>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Comparativo de Gestão</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-400">Com Gestão</p>
                    <p className="text-2xl font-bold text-green-500">6% margem</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Sem Gestão</p>
                    <p className="text-2xl font-bold text-red-500">3% margem</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </ScrollReveal>

        <ScrollReveal>
          <Card className="p-6 dark-glassmorphism">
            <h2 className="text-2xl font-bold mb-4">Solução: Sistema de Gestão</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Benefícios</h3>
                <ul className="space-y-2">
                  <li>✓ Aumento de margem líquida para 6%</li>
                  <li>✓ Redução de 15% em custos operacionais</li>
                  <li>✓ Controle de estoque otimizado</li>
                  <li>✓ Maior satisfação do cliente</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">ROI</h3>
                <p className="text-3xl font-bold text-primary">4 meses</p>
                <p className="text-gray-400">Retorno do investimento</p>
              </div>
            </div>
          </Card>
        </ScrollReveal>
      </div>
    </PageLayout>
  );
}
