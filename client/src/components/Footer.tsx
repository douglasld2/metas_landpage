import { Link } from "wouter";

const companyLinks = [
  { label: "Sobre nós", href: "#" },
  { label: "Nossa equipe", href: "#" },
  { label: "Carreiras", href: "#" },
  { label: "Parceiros", href: "#" },
  { label: "Blog", href: "#" }
];

const productLinks = [
  { label: "Recursos", href: "#recursos" },
  { label: "Integrações", href: "#" },
  { label: "Preços", href: "#" },
  { label: "Estudos de caso", href: "#" },
  { label: "API", href: "#" }
];

const supportLinks = [
  { label: "Ajuda", href: "#" },
  { label: "FAQ", href: "#" },
  { label: "Contato", href: "#contato" },
  { label: "Política de privacidade", href: "#" },
  { label: "Termos de serviço", href: "#" }
];

const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-dark/60">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12">
          <div>
            <Link href="/">
              <div className="flex items-center space-x-2 mb-6 cursor-pointer">
                <div className="h-10 w-10 bg-primary rounded-full flex items-center justify-center">
                  <span className="font-montserrat font-bold text-xl">M</span>
                </div>
                <span className="font-montserrat font-bold text-2xl">Metas</span>
              </div>
            </Link>
            <p className="text-gray-300 mb-6">
              Software de gestão de metas para postos de combustível no Brasil, integrando-se com sistemas ERP para análise de dados e tomada de decisões.
            </p>
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Metas Software. Todos os direitos reservados.
            </p>
          </div>
          
          <div>
            <h4 className="font-montserrat font-semibold text-lg mb-6">Empresa</h4>
            <ul className="space-y-3">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-300 hover:text-accent transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-montserrat font-semibold text-lg mb-6">Produto</h4>
            <ul className="space-y-3">
              {productLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-300 hover:text-accent transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-montserrat font-semibold text-lg mb-6">Suporte</h4>
            <ul className="space-y-3">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-300 hover:text-accent transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
