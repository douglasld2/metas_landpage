import { Link } from "wouter";

const supportLinks = [
  { label: "Ajuda", href: "/ajuda" },
  { label: "FAQ", href: "/faq" },
  { label: "Contato", href: "/contato" },
  { label: "Política de privacidade", href: "/politica-de-privacidade" },
  { label: "Termos de serviço", href: "/termos-de-servico" }
];

const Footer = () => {
  return (
    <footer className="py-10 px-4 bg-dark/80">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <Link href="/">
              <div className="flex items-center space-x-2 mb-4 cursor-pointer">
                <div className="h-8 w-8 bg-primary rounded-md flex items-center justify-center">
                  <span className="font-montserrat font-bold text-lg">M</span>
                </div>
                <div>
                  <span className="font-montserrat font-bold text-xl">Metas</span>
                  <span className="text-xs block text-gray-400">por ResoluteSoftware</span>
                </div>
              </div>
            </Link>
            <p className="text-gray-400 text-sm mb-4">
              Software de gestão de metas para postos de combustível no Brasil, integrando-se com sistemas ERP para análise de dados e tomada de decisões.
            </p>
            <p className="text-xs text-gray-500 mt-4">
              © {new Date().getFullYear()} ResoluteSoftware. <span className="block md:inline">Todos os direitos reservados.</span>
            </p>
            <p className="text-xs text-primary/90 mt-1">
              infinitas possibilidades
            </p>
          </div>

          <div>
            <h4 className="font-montserrat font-semibold text-base mb-3">Suporte</h4>
            <ul className="space-y-2">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-gray-400 hover:text-accent transition-colors text-sm">
                    {link.label}
                  </Link>
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