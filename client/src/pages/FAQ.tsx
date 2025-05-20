import PageLayout from "@/components/PageLayout";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const generalFaqs = [
  {
    question: "O que é o Metas e como ele funciona?",
    answer: "O Metas é um software de gestão de metas e desempenho para postos de combustível. Ele coleta dados do seu sistema ERP, processa essas informações e gera insights através de dashboards personalizáveis e relatórios automáticos. O sistema permite estabelecer metas de vendas, margens, volume e outros indicadores, além de monitorar o desempenho em tempo real."
  },
  {
    question: "Preciso instalar algum software no meu computador?",
    answer: "Não, o Metas é uma solução 100% baseada em nuvem. Basta acessar a plataforma através de um navegador web moderno. Isso significa que não há necessidade de instalações complexas ou manutenções de software, e você pode acessar seus dados de qualquer lugar com conexão à internet."
  },
  {
    question: "Como o Metas protege meus dados?",
    answer: "A segurança dos seus dados é nossa prioridade. Utilizamos criptografia de ponta a ponta, servidores com certificação de segurança e backups diários. Todos os dados são armazenados em conformidade com a LGPD (Lei Geral de Proteção de Dados), e você mantém total propriedade sobre suas informações."
  },
  {
    question: "Posso experimentar o Metas antes de contratar?",
    answer: "Sim, oferecemos uma demonstração gratuita de 30 dias com todas as funcionalidades disponíveis. Durante este período, nossa equipe técnica irá auxiliar na configuração inicial e responder a todas as suas dúvidas. Não é necessário cartão de crédito para iniciar o período de teste."
  },
  {
    question: "O sistema funciona para redes de postos ou apenas para unidades individuais?",
    answer: "O Metas é ideal tanto para postos individuais quanto para redes. Para redes, oferecemos funcionalidades adicionais como comparação de desempenho entre unidades, consolidação de dados e gestão centralizada, permitindo que você tenha uma visão completa de toda a operação."
  }
];

const technicalFaqs = [
  {
    question: "Com quais sistemas ERP o Metas é compatível?",
    answer: "O Metas possui integrações nativas com os principais sistemas ERP do mercado de combustíveis. Caso seu sistema não esteja na lista, nossa equipe de desenvolvimento pode criar uma integração personalizada."
  },
  {
    question: "Como é feita a atualização dos dados no sistema?",
    answer: "A sincronização dos dados pode ser configurada de acordo com suas necessidades - em tempo real, a cada hora, ou em intervalos personalizados. Para a maioria dos clientes, atualizações a cada 30 minutos são suficientes para manter as dashboards e relatórios atualizados sem sobrecarregar o sistema ERP."
  },
  {
    question: "Qual a capacidade de armazenamento disponível?",
    answer: "Todos os planos incluem armazenamento suficiente para gestão completa dos dados. Os dados históricos ficam disponíveis por até 5 anos, permitindo análises de longo prazo e identificação de tendências. Para necessidades específicas de armazenamento, oferecemos opções expandidas."
  },
  {
    question: "É possível exportar os dados para outras ferramentas?",
    answer: "Sim, o Metas permite exportar seus dados em diversos formatos, incluindo Excel, CSV e PDF. Além disso, oferecemos uma API documentada para integrações com outras ferramentas de gestão ou business intelligence que sua empresa utilize."
  }
];

const pricingFaqs = [
  {
    question: "Como funciona a política de preços do Metas?",
    answer: "Trabalhamos com um modelo de assinatura mensal ou anual, com planos baseados no tamanho do seu negócio - desde postos individuais até grandes redes. Os planos anuais oferecem um desconto de 15% em relação aos pagamentos mensais. Entre em contato para receber uma proposta personalizada."
  },
  {
    question: "Existe alguma taxa de implementação ou custos adicionais?",
    answer: "A implementação padrão e treinamento inicial estão incluídos no valor da assinatura. Isso inclui a configuração do sistema, integração com seu ERP e treinamento da equipe. Para necessidades específicas ou personalizações avançadas, pode haver custos adicionais que serão sempre acordados previamente."
  },
  {
    question: "Posso cancelar o serviço a qualquer momento?",
    answer: "Sim, não exigimos contratos de fidelidade para planos mensais. Para planos anuais, oferecemos condições especiais em caso de cancelamento antecipado. Em qualquer cenário, você terá acesso para exportar seus dados antes do encerramento do serviço."
  }
];

export default function FAQ() {
  return (
    <PageLayout 
      title="Perguntas Frequentes" 
      subtitle="Encontre respostas para as dúvidas mais comuns sobre o Metas"
    >
      <Tabs defaultValue="general" className="mb-12">
        <TabsList className="grid grid-cols-3 mb-8">
          <TabsTrigger value="general">Gerais</TabsTrigger>
          <TabsTrigger value="technical">Técnicas</TabsTrigger>
          <TabsTrigger value="pricing">Preços</TabsTrigger>
        </TabsList>
        
        <TabsContent value="general">
          <Accordion type="single" collapsible className="space-y-4">
            {generalFaqs.map((item, index) => (
              <AccordionItem key={index} value={`general-${index}`} className="dark-glassmorphism rounded-lg border-none">
                <AccordionTrigger className="px-4 py-3 font-montserrat text-sm hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4 text-gray-400 text-sm">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </TabsContent>
        
        <TabsContent value="technical">
          <Accordion type="single" collapsible className="space-y-4">
            {technicalFaqs.map((item, index) => (
              <AccordionItem key={index} value={`technical-${index}`} className="dark-glassmorphism rounded-lg border-none">
                <AccordionTrigger className="px-4 py-3 font-montserrat text-sm hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4 text-gray-400 text-sm">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </TabsContent>
        
        <TabsContent value="pricing">
          <Accordion type="single" collapsible className="space-y-4">
            {pricingFaqs.map((item, index) => (
              <AccordionItem key={index} value={`pricing-${index}`} className="dark-glassmorphism rounded-lg border-none">
                <AccordionTrigger className="px-4 py-3 font-montserrat text-sm hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4 text-gray-400 text-sm">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </TabsContent>
      </Tabs>

      <div className="mt-12 text-center">
        <p className="text-gray-400 mb-4">Não encontrou a resposta que procurava?</p>
        <div className="flex gap-4 justify-center">
          <Link href="/suporte">
            <Button variant="outline">
              Acessar Suporte
            </Button>
          </Link>
          <Link href="/contato">
            <Button className="bg-gradient-to-r from-primary to-secondary">
              Fale Conosco
            </Button>
          </Link>
        </div>
      </div>
    </PageLayout>
  );
}