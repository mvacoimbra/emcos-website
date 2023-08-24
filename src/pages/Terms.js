import React from 'react';
// css
import './Terms.css';
// components
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Container from '../components/structure/Container';

const Terms = () => {
  return (
    <div>
      <Navbar />
      <Container id="terms__container">
        <article>
          <h1 className="terms__main-title">
            TERMOS E CONDIÇÕES DE USO DO SITE
          </h1>
          <ol className="terms__list" type="1">
            <li>
              <p>
                {`Este Termo refere-se ao EMCOS ENGENHARIA E CONSULTORIA. Ao navegar neste site e usar os serviços que são fornecidos, você AFIRMA que LEU, COMPREENDEU e CONCORDA com nossos Termos e Condições. E stes Termos e Condições abrangem todos os aplicativos, serviços de Internet ou extensões dos sites relacionados. Caso você não concorde ou não tenha ficado claro algum ponto, sugere-se que você NÃO NAVEGUE MAIS NELE até que você tenha sanado todas as suas dúvidas. Você poderá ainda, a qualquer tempo, retornar ao site, clicar e termos de uso e reler quantas vezes desejar.`}
              </p>
            </li>
            <h2 className="terms__alt-title">Termos e Condições</h2>
            <li>
              {`Os Termos e Condições do EMCOS ENGENHARIA E CONSULTORIA regem o uso deste Site e todo o seu conteúdo ("Site"). Estes Termos descrevem as regras e regulamentos que orientam o uso de EMCOS ENGENHARIA E CONSULTORIA localizado em https://www.emcos.com.br/. Todos os materiais/informações/documentos/serviços ou todas as outras entidades (coletivamente referidas como "conteúdo'') que aparecem no https://www.emcos.com.br/ serão administrados de acordo com estes Termos e Condições.
              ATENÇÃO: Não continue a usar este site se você tiver qualquer objeção a qualquer um dos Termos e Condições declarados nesta página.`}
            </li>
            <li>{`O site é destinado a usuários com 18 (dezoito) anos de idade ou mais. Se você tem menos de 18 (dezoito) anos, não poderá usar ou registrar-se para usar este site ou seus serviços sem a permissão ou consentimento dos pais. Ao concordar com estes Termos e Condições, você tem a capacidade legal necessária para cumprir e ficar vinculado por estes Termos e Condições.`}</li>
            <li>{`EMCOS ENGENHARIA E CONSULTORIA faz uso de cookies. Ao acessar nosso site, você concorda em usar cookies de acordo com nossa Política de Cookies. "Algum dos nossos parceiros de site podem usar cookies."`}</li>
            <li>{`EMCOS ENGENHARIA E CONSULTORIA detêm os direitos de propriedade intelectual de todo o conteúdo. Todos os direitos de propriedade intelectual são reservados. Você pode acessar qualquer conteúdo do site para seu uso pessoal, sujeito às restrições definidas nestes termos e condições.`}</li>
            <section>
              <p className="terms__dot-list-title">
                EMCOS ENGENHARIA E CONSULTORIA, por meio deste, determina que o
                usuário do site não cometa as seguintes ações:
              </p>
              <ul className="terms__dot-list">
                <li>
                  Reproduzir, republicar, duplicar ou copiar qualquer conteúdo
                  do EMCOS ENGENHARIA E CONSULTORIA;
                </li>
                <li>
                  Vender, alugar, sublicenciar e/ou de outra forma comercializar
                  qualquer conteúdo doEMCOS ENGENHARIA E CONSULTORIA;
                </li>
                <li>
                  Executar e / ou exibir publicamente qualquer conteúdo do EMCOS
                  ENGENHARIA E CONSULTORIA;
                </li>
                <li>
                  Usar este site de forma que seja, ou talvez, danifique e/ou
                  afete o acesso do usuário a este site;
                </li>
                <li>
                  Usar este site contrário às regras, leis e regulamentos
                  relevantes do seu país de residência, ou de uma maneira que
                  cause, ou possa causar, danos ao site ou a qualquer pessoa ou
                  entidade comercial;
                </li>
                <li>
                  Realizar mineração de dados ou qualquer outra atividade
                  semelhante relacionada a este site, ou durante o uso deste
                  site;
                </li>
                <li>
                  Usando este site para se envolver em qualquer forma de
                  publicidade ou marketing empresarial.
                </li>
              </ul>
            </section>
            <li>{`Áreas específicas deste site podem ser restritas ao acesso do usuário, e EMCOS ENGENHARIA E CONSULTORIA pode estender ainda mais essa restrição a todo o site, a qualquer momento e a seu exclusivo critério. Qualquer identificação de usuário, chave de segurança ou senha que você possa ter neste site são confidenciais e você é responsável por manter a confidencialidade dessas informações. Link e Hiperlink`}</li>
            <li>{`Nós nos reservamos o direito de registrar solicitações para que você remova todos os links ou qualquer link específico criado por você que redirecione para o nosso site, e você aprova a remoção imediata desses links para o nosso site, mediante solicitação.`}</li>
            <li>{`Podemos alterar os termos e condições desses direitos de vinculação a qualquer momento. Ao conectar-se continuamente ao nosso site, você concorda em se comprometer e seguir os termos desta política de links.`}</li>
            <li>{`Por favor, entre em contato conosco se encontrar algum link em nosso site que seja ofensivo, e poderemos considerar e analisar solicitações de remoção de tais links. Link para conteúdo de terceiros.`}</li>
            <li>{`.Este site pode conter links para sites ou aplicativos operados por terceiros. Não controlamos nenhum desses sites ou aplicativos de terceiros ou o operador de terceiros. Este Site, objeto do presente Termos de Uso não é responsável e não endossa quaisquer sites ou aplicativos de terceiros ou sua disponibilidade ou conteúdo.`}</li>
            <li>{`EMCOS ENGENHARIA E CONSULTORIA não se responsabiliza pelos anúncios contidos no site. Você concorda em fazê-lo por sua própria conta e risco ao adquirir quaisquer bens e / ou serviços de terceiros. O anunciante é quem permanece responsável por tais bens e/ou serviços, e se você tiver alguma dúvida ou reclamação sobre eles, você deve entrar em contato com o anunciante`}</li>
            <h2 className="terms__alt-title">Conteúdo do usuário</h2>
            <li>{`Importante salientar que o termo usado "Conteúdo do Usuário" significa qualquer áudio, vídeo, texto, imagens ou outro material ou conteúdo que você decida exibir neste Site. Com relação ao conteúdo do usuário, ao exibi-lo, você concede ao EMCOS ENGENHARIA E CONSULTORIA uma licença não exclusiva, mundial, irrevogável, isenta de royalties e sublicenciável para usar, reproduzir, adaptar, publicar, traduzir e distribuir em qualquer mídia.`}</li>
            <li>{`O Conteúdo do Usuário deve ser seu e não deve infringir os direitos de terceiros. EMCOS ENGENHARIA E CONSULTORIA reserva-se o direito de remover qualquer parte do seu conteúdo deste site a qualquer momento, sem aviso prévio. EMCOS ENGENHARIA E CONSULTORIA tem permissão para monitorar suas atividades no site e remover qualquer conteúdo do usuário considerado impróprio, ofensivo, contrário às leis e regulamentos aplicáveis, ou que cause uma violação destes Termos e Condições. Política de Privacidade`}</li>
            <li>{`Ao acessar este Site, informações específicas sobre o Usuário, como endereços de protocolo de Internet (IP), navegação no site, software do usuário e tempo de navegação, juntamente com outras informações semelhantes, serão armazenadas nos servidores de EMCOS ENGENHARIA E CONSULTORIA. As informações sobre suas identidades, como nome, endereço, detalhes de contato, informações de faturamento e outras informações armazenadas neste site, serão estritamente usadas apenas para fins estatísticos e não serão publicadas para acesso geral. EMCOS ENGENHARIA E CONSULTORIA, no entanto, não assume nenhuma responsabilidade pela segurança dessas informações.`}</li>
            <li>{`O site é fornecido, com todas as responsabilidades e não assume compromissos, representações ou garantias expressas ou implícitas de qualquer tipo relacionadas a este site ou ao conteúdo nele contido.Indenização`}</li>
            <li>{`O usuário concorda em indenizar o Site e suas afiliadas em toda a extensão, frente à todas as ações, reclamações, responsabilidades, perdas, danos, custos, demandas e despesas decorrentes do uso deste Site pelo Usuário, incluindo, sem limitação, qualquer reclamação relacionada à violação de qualquer uma das disposições destes Termos e Condições. Se estiver insatisfeito com algum ou todo o conteúdo deste site ou qualquer um ou todos os seus Termos e Condições, o usuário pode interromper o uso deste site.`}</li>
            <li>{`Em qualquer momento, os usuários podem interromper o uso do Site para isso, no site, estão disponíveis as orientações necessárias. Caso ainda fique algum dúvida, não hesite em enviar um e-mail para contato@emcos.com.br.`}</li>
            <li>{`Nós nos reservamos o direito e critério exclusivo de, e sem aviso prévio ou responsabilidade, negar o acesso e uso do site (incluindo o bloqueio de endereços IP específicos) a qualquer usuário por qualquer motivo, incluindo, mas não se limitando à violação de qualquer representação, garantia ou acordo nestes Termos ou em qualquer lei ou regulamento aplicável.`}</li>
            <h2 className="terms__alt-title">Disposições Gerais</h2>
            <li>{`Os Termos e Condições deste site serão regidos e interpretados de acordo com as leis do país ou estado em que o Site opera. Você, por meio deste, se submete incondicionalmente à jurisdição não exclusiva dos tribunais localizados no Brasil para a resolução de quaisquer disputas.`}</li>
            <li>{`Este Site reserva-se o direito de revisar estes Termos a qualquer momento conforme julgar adequado. Por isso é fundamental que os seus usuários estejam atentos à essas aleterações.`}</li>
            <li>{`O Site reserva-se o direito de ceder, transferir e subcontratar seus direitos e/ou obrigações sob este Acordo sem qualquer notificação ou consentimento prévio necessário. Os usuários não terão permissão para atribuir, transferir ou subcontratar qualquer um de seus direitos e/ou obrigações sob estes Termos. Além disso, uma pessoa que não seja parte destes Termos e Condições não terá o direito de fazer cumprir qualquer disposição neles contida.`}</li>
            <li>{`Estes Termos e Condições, incluindo quaisquer avisos legais e isenções de responsabilidade neste site, constituem o acordo completo entre o Site e você em relação ao uso deste site. Em última análise, este Acordo substitui todos os acordos e entendimentos anteriores relativos ao mesmo.`}</li>
            <li>{`Qualquer dúvida, entre em contato por meio do endereço de e-mail: contato@emcos.com.br.`}</li>
          </ol>
        </article>
      </Container>
      <Footer />
    </div>
  );
};

export default Terms;
