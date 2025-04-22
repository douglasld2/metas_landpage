import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { HelpCircle, BookOpen, Video, FileText, ChevronRight } from "lucide-react";
import { Link } from "wouter";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const helpCategories = [
  {
    title: "Guias de Início Rápido",
    description: "Tutoriais simples para dar os primeiros passos com o Metas",
    icon: <BookOpen className="h-5 w-5" />,
    items: [
      { title: "Configuração inicial do painel", href: "#" },
      { title: "Integração com seu sistema ERP", href: "#" },
      { title: "Configurando suas primeiras metas", href: "#" },
      { title: "Criando relatórios personalizados", href: "#" },
    ]
  },
  {
    title: "Vídeos Tutoriais",
    description: "Aprenda visualizando todas as funcionalidades em ação",
    icon: <Video className="h-5 w-5" />,
    items: [
      { title: "Introdução ao Metas (5 min)", href: "#" },
      { title: "Análise de métricas de desempenho", href: "#" },
      { title: "Configurações avançadas de dashboard", href: "#" },
      { title: "Exportação e compartilhamento de dados", href: "#" },
    ]
  },
  {
    title: "Documentação Técnica",
    description: "Materiais detalhados sobre funcionalidades avançadas",
    icon: <FileText className="h-5 w-5" />,
    items: [
      { title: "Manual completo da plataforma", href: "#" },
      { title: "Documentação da API", href: "#" },
      { title: "Guia de conectores de dados", href: "#" },
      { title: "Requisitos técnicos e compatibilidade", href: "#" },
    ]
  },
];

const popularTopics = [
  "Configuração inicial",
  "Integração com ERP",
  "Configuração de metas",
  "Exportação de relatórios",
  "Permissões de usuário",
  "Backup de dados",
  "Análise de tendências",
  "KPIs para postos",
];

export default function Ajuda() {
  return (
    <PageLayout 
      title="Central de Ajuda" 
      subtitle="Encontre recursos e orientações para aproveitar ao máximo o Metas"
    >
      {/* Pesquisa */}
      <div className="rounded-lg dark-glassmorphism p-6 mb-10">
        <h2 className="text-center font-montserrat text-xl mb-4">Como podemos ajudar?</h2>
        <div className="max-w-xl mx-auto">
          <div className="relative">
            <input 
              type="text" 
              className="w-full py-3 px-4 rounded-lg bg-background/60 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" 
              placeholder="Pesquise por tutoriais, guias ou dúvidas..." 
            />
            <Button className="absolute right-1 top-1 bg-primary hover:bg-primary/90">
              Buscar
            </Button>
          </div>
        </div>
      </div>

      {/* Tópicos populares */}
      <div className="mb-12">
        <h3 className="font-montserrat font-semibold text-lg mb-4">Tópicos Populares</h3>
        <div className="flex flex-wrap gap-2">
          {popularTopics.map((topic, index) => (
            <a 
              key={index}
              href="#" 
              className="px-3 py-1.5 bg-background/60 border border-gray-700 rounded-full text-sm hover:bg-primary/20 hover:border-primary/40 transition-colors"
            >
              {topic}
            </a>
          ))}
        </div>
      </div>

      {/* Categorias de Ajuda */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {helpCategories.map((category, index) => (
          <ScrollReveal key={index} delay={index * 0.1}>
            <Card className="dark-glassmorphism border-gray-800">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2 mb-1">
                  {category.icon}
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                </div>
                <CardDescription className="text-sm text-gray-400">
                  {category.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <a 
                        href={item.href} 
                        className="flex items-center text-sm text-gray-300 hover:text-primary transition-colors"
                      >
                        <ChevronRight className="h-3 w-3 mr-1 text-primary" />
                        {item.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </ScrollReveal>
        ))}
      </div>
      
      {/* Ajuda Adicional */}
      <div className="rounded-lg dark-glassmorphism p-6 text-center">
        <div className="inline-flex justify-center items-center mb-4 w-16 h-16 rounded-full bg-primary/20">
          <HelpCircle className="h-8 w-8 text-primary" />
        </div>
        <h3 className="font-montserrat font-semibold text-xl mb-2">Precisa de mais ajuda?</h3>
        <p className="text-gray-400 mb-6 max-w-md mx-auto">
          Nossa equipe de especialistas está disponível para ajudar com qualquer dúvida que você tenha sobre o Metas.
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/suporte">
            <Button variant="outline">
              Central de Suporte
            </Button>
          </Link>
          <Link href="/contato">
            <Button className="bg-gradient-to-r from-primary to-secondary">
              Contate-nos
            </Button>
          </Link>
        </div>
      </div>
    </PageLayout>
  );
}