import React from 'react';
// css
import './Segments.css';
import Container from '../structure/Container';
import SegBox from '../structure/SegBox';
// assets
// components

const Segments = () => {
  return (
    <Container id="segments__container">
      <div className="segments__header">
        <h2>
          Segmentos de{' '}
          <em className="greenUnderline">
            atuação<em className="greenColor">.</em>
          </em>
        </h2>
      </div>
      <div className="segments__flexbox">
        <SegBox title="Civil" faIcon="fa-solid fa-house">
          {
            'O segmento de obras civis engloba a construção de residências e estabelecimentos comerciais. É responsável por criar espaços habitacionais e comerciais funcionais e seguros. A busca por eficiência energética e sustentabilidade é uma tendência crescente nesse setor. Em resumo, as obras civis desempenham um papel fundamental na construção de lares e locais de negócios para as comunidades.'
          }
        </SegBox>
        <SegBox title="Industrial" faIcon="fa-solid fa-industry">
          {
            'O segmento industrial envolve a construção de instalações de produção e armazenamento para empresas. Essas estruturas são projetadas para a fabricação de uma ampla variedade de produtos e bens. A eficiência energética e a sustentabilidade são preocupações crescentes nesta área. Em resumo, o setor industrial desempenha um papel fundamental na produção e no suporte aos negócios.'
          }
        </SegBox>
        <SegBox title="Infraestrutura" faIcon="fa-solid fa-road">
          {
            'O segmento de infraestrutura concentra-se na criação e manutenção das bases essenciais para o funcionamento das cidades e regiões. Isso inclui a construção de estradas, rodovias, viadutos e pontes, que permitem a mobilidade eficiente de pessoas e mercadorias. Além disso, abrange a implementação de sistemas de água e esgoto, garantindo o fornecimento de água potável e o tratamento adequado de resíduos.'
          }
        </SegBox>
      </div>
    </Container>
  );
};

export default Segments;
