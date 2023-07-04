import React from 'react';
// css
import './Segments.css';
import Container from '../structure/Container';
import SegBox from '../structure/SegBox';
// assets
// components

const Segments = () => {
  return (
    <Container className="segments__container">
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
          Mussum Ipsum, cacilds vidis litro abertis. Si u mundo tá muito
          paradis? Toma um mé que o mundo vai girarzis!In elementis mé pra quem
          é amistosis quis leo.Suco de cevadiss, é um leite divinis, qui tem
          lupuliz, matis, aguis e fermentis.Paisis, filhis, espiritis santis.
        </SegBox>
        <SegBox title="Industrial" faIcon="fa-solid fa-industry">
          Mussum Ipsum, cacilds vidis litro abertis. Manduma pindureta quium dia
          nois paga.Praesent vel viverra nisi. Mauris aliquet nunc non turpis
          scelerisque, eget.Diuretics paradis num copo é motivis de denguis.Si
          num tem leite então bota uma pinga aí cumpadi!
        </SegBox>
        <SegBox title="Infra" faIcon="fa-solid fa-road">
          Mussum Ipsum, cacilds vidis litro abertis. Diuretics paradis num copo
          é motivis de denguis.Suco de cevadiss deixa as pessoas mais
          interessantis.Quem manda na minha terra sou euzis!Todo mundo vê os
          porris que eu tomo, mas ninguém vê os tombis que eu levo!
        </SegBox>
      </div>
    </Container>
  );
};

export default Segments;
