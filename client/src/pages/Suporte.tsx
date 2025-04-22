import PageLayout from "@/components/PageLayout";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Headset, Mail, MessageSquare } from "lucide-react";
import { Link } from "wouter";

const supportOptions = [
  {
    title: "Suporte por E-mail",
    description: "Envie sua dúvida por e-mail e receba uma resposta em até 24 horas.",
    icon: <Mail className="h-6 w-6 text-primary" />,
    action: "Enviar E-mail",
    href: "/contato"
  },
  {
    title: "Atendimento por Telefone",
    description: "Nossos especialistas estão disponíveis para atendê-lo das 8h às 18h.",
    icon: <Headset className="h-6 w-6 text-primary" />,
    action: "Enviar E-mail",
    href: "/contato"
  }
];

const commonQuestions = [
  {
    question: "Como posso integrar o Metas ao meu sistema ERP?",
    answer: "O Metas é compatível com os principais sistemas ERP do mercado de postos de combustível. Nossa equipe técnica realiza todo o processo de integração remotamente, sem interferir nas operações do seu posto. O processo geralmente leva de 1 a 3 dias dependendo da complexidade do seu sistema atual."
  },
  {
    question: "É possível acessar o sistema de qualquer dispositivo?",
    answer: "Sim, o Metas é uma plataforma baseada em nuvem que pode ser acessada de qualquer dispositivo com conexão à internet, incluindo smartphones, tablets e computadores. Também oferecemos aplicativos dedicados para Android e iOS."
  },
  {
    question: "Quanto tempo leva para implementar o sistema?",
    answer: "A implementação completa do Metas geralmente leva de 5 a 10 dias úteis, incluindo a integração com seu sistema atual, treinamento da equipe e personalização das metas e indicadores de acordo com as necessidades do seu negócio."
  },
  {
    question: "Como funciona o suporte técnico?",
    answer: "Oferecemos suporte técnico através de múltiplos canais: chat ao vivo, e-mail, telefone e portal do cliente. Nossa equipe de especialistas está disponível nos dias úteis das 8h às 18h, e mantemos um sistema de plantão para emergências fora desse horário."
  },
];

export default function Suporte() {
  return (
    <PageLayout 
      title="Suporte Técnico" 
      subtitle="Estamos aqui para ajudar com qualquer dúvida sobre o Metas"
    >
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {supportOptions.map((option, index) => (
          <ScrollReveal key={index} delay={index * 0.1}>
            <div className="dark-glassmorphism rounded-lg p-6 h-full">
              <div className="mb-4">{option.icon}</div>
              <h3 className="font-montserrat font-semibold text-lg mb-2">{option.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{option.description}</p>
              <Link href={option.href}>
                <Button variant="outline" className="w-full">
                  {option.action}
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <div className="mt-12">
        <h2 className="font-montserrat font-semibold text-xl mb-6">Perguntas Frequentes</h2>
        
        <Accordion type="single" collapsible className="space-y-4">
          {commonQuestions.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="dark-glassmorphism rounded-lg border-none">
              <AccordionTrigger className="px-4 py-3 font-montserrat text-sm hover:no-underline">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4 text-gray-400 text-sm">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      <div className="mt-12 text-center">
        <p className="text-gray-400 mb-4">Não encontrou o que procurava?</p>
        <Link href="/contato">
          <Button className="bg-gradient-to-r from-primary to-secondary">
            Fale Conosco
          </Button>
        </Link>
      </div>
    </PageLayout>
  );
}