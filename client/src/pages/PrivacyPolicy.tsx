import PageLayout from "@/components/PageLayout";
import { Separator } from "@/components/ui/separator";

export default function PrivacyPolicy() {
  return (
    <PageLayout
      title="Política de Privacidade"
      subtitle="Última atualização: 10 de abril de 2025"
      className="prose-container"
    >
      <div className="prose prose-invert prose-sm max-w-none">
        <p>
          A ResoluteSoftware está comprometida com a proteção de seus dados pessoais. Esta Política de Privacidade descreve como coletamos, usamos, compartilhamos e protegemos suas informações quando você utiliza nosso software Metas e visita nosso site.
        </p>

        <h3>1. Informações que Coletamos</h3>
        <p>Podemos coletar os seguintes tipos de informações:</p>
        <ul>
          <li><strong>Informações de conta:</strong> Nome, e-mail, telefone, empresa e cargo.</li>
          <li><strong>Dados de uso:</strong> Informações sobre como você utiliza o Metas, incluindo funcionalidades acessadas, tempo de uso e padrões de navegação.</li>
          <li><strong>Dados de desempenho:</strong> Dados importados dos sistemas ERP para análise e geração de relatórios dentro do Metas.</li>
          <li><strong>Informações técnicas:</strong> Endereço IP, tipo de navegador, dispositivo, sistema operacional e logs de acesso.</li>
        </ul>

        <h3>2. Como Usamos suas Informações</h3>
        <p>Utilizamos seus dados para as seguintes finalidades:</p>
        <ul>
          <li>Fornecer, manter e melhorar o Metas;</li>
          <li>Processar e gerenciar sua conta;</li>
          <li>Enviar comunicações relacionadas ao serviço;</li>
          <li>Oferecer suporte técnico;</li>
          <li>Desenvolver novos produtos e recursos;</li>
          <li>Analisar tendências de uso e melhorar a experiência do usuário;</li>
          <li>Cumprir obrigações legais e regulatórias.</li>
        </ul>

        <h3>3. Base Legal para o Processamento</h3>
        <p>Processamos seus dados com base nas seguintes justificativas legais:</p>
        <ul>
          <li><strong>Execução de contrato:</strong> Para fornecer os serviços contratados.</li>
          <li><strong>Consentimento:</strong> Quando você nos autoriza expressamente a usar seus dados para finalidades específicas.</li>
          <li><strong>Interesse legítimo:</strong> Para melhorar nossos serviços e proteger nossos direitos legais.</li>
          <li><strong>Obrigação legal:</strong> Para cumprir leis e regulamentos aplicáveis.</li>
        </ul>

        <h3>4. Compartilhamento de Informações</h3>
        <p>Podemos compartilhar suas informações com:</p>
        <ul>
          <li><strong>Prestadores de serviço:</strong> Empresas que nos auxiliam na operação do Metas, como serviços de hospedagem e suporte.</li>
          <li><strong>Parceiros de negócios:</strong> Para oferecer serviços integrados, sempre com sua autorização.</li>
          <li><strong>Autoridades competentes:</strong> Quando exigido por lei ou ordem judicial.</li>
        </ul>
        <p>Não vendemos ou alugamos seus dados pessoais a terceiros.</p>

        <h3>5. Segurança dos Dados</h3>
        <p>
          Implementamos medidas técnicas e organizacionais apropriadas para proteger seus dados contra acesso não autorizado, perda ou alteração. Estas medidas incluem criptografia, controles de acesso, monitoramento de segurança e backups regulares.
        </p>

        <h3>6. Retenção de Dados</h3>
        <p>
          Mantemos seus dados pelo tempo necessário para fornecer os serviços contratados, cumprir obrigações legais ou até que você solicite sua exclusão. Dados de uso podem ser anonimizados e retidos para fins estatísticos.
        </p>

        <h3>7. Seus Direitos</h3>
        <p>De acordo com a Lei Geral de Proteção de Dados (LGPD), você tem os seguintes direitos:</p>
        <ul>
          <li>Acesso aos seus dados pessoais;</li>
          <li>Correção de dados incompletos, inexatos ou desatualizados;</li>
          <li>Anonimização, bloqueio ou eliminação de dados desnecessários;</li>
          <li>Portabilidade dos dados a outro fornecedor de serviço;</li>
          <li>Eliminação dos dados tratados com seu consentimento;</li>
          <li>Informação sobre entidades públicas e privadas com as quais compartilhamos seus dados;</li>
          <li>Revogação do consentimento.</li>
        </ul>

        <h3>8. Cookies e Tecnologias Semelhantes</h3>
        <p>
          Utilizamos cookies e tecnologias semelhantes para melhorar sua experiência, lembrar suas preferências e analisar o uso do site. Você pode gerenciar suas preferências de cookies através das configurações do seu navegador.
        </p>

        <h3>9. Transferências Internacionais</h3>
        <p>
          Seus dados podem ser transferidos e processados em servidores localizados fora do Brasil. Nestes casos, garantimos que a transferência seja realizada de acordo com as exigências legais aplicáveis, adotando medidas de segurança adequadas.
        </p>

        <h3>10. Alterações nesta Política</h3>
        <p>
          Podemos atualizar esta Política de Privacidade periodicamente para refletir mudanças em nossas práticas ou por outros motivos operacionais, legais ou regulatórios. A versão mais recente estará sempre disponível em nosso site.
        </p>

        <h3>11. Contato</h3>
        <p>
          Se você tiver dúvidas, preocupações ou solicitações relacionadas a esta Política de Privacidade ou ao tratamento de seus dados pessoais, entre em contato com nosso Encarregado de Proteção de Dados pelo e-mail: privacidade@resolutesoftware.com.br
        </p>

        <Separator className="my-6" />

        <p className="text-sm text-center text-gray-400">
          © {new Date().getFullYear()} ResoluteSoftware | Metas - Todos os direitos reservados
        </p>
      </div>
    </PageLayout>
  );
}