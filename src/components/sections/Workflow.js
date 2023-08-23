import React from 'react';
// css
import './Workflow.css';
// assets
// components
import Container from '../structure/Container';
import GreenGearTitle from '../structure/GreenGearTitle';
import GearSVG from '../structure/GearSVG';

const Workflow = () => {
  const workflowSteps = [
    {
      title: 'Análise de viabilidade',
      faIcon: 'fa-solid fa-magnifying-glass',
      content:
        'A análise de viabilidade é a primeira etapa da administração de obra, nesta, é realizado um estudo primário sobre todos os custos que envolvem o projeto, afim de avaliar a viabilidade da administração. Além disso, nessa etapa, executa-se um levantamento de equipes e materiais necessários para a execução, levando em conta licenças, normas, legislações e quaisquer outros fatores.',
    },
    {
      title: 'Realização de orçamento',
      faIcon: 'fa-solid fa-calculator',
      content:
        'Após definida a viabilidade, é necessário um apuramento de todos os custos, para que seja elaborada uma proposta com valores reais e atualizados. Cada serviço e compra necessária para a execução será contabilizado neste momento, gerando assim um orçamento detalhado.',
    },
    {
      title: 'Elaboração de projetos e planejamento',
      faIcon: 'fa-solid fa-pencil',
      content:
        'Com a proposta aprovada, inicia-se a elaboração de estudos e projetos de execução compatibilizados. Com estes, pode-se criar um plano de ação e um cronograma detalhado, organizado de maneira assertiva quanto ao tempo necessário para conclusão de cada serviço, prazos de entrega de materiais, e o custo de cada etapa.',
    },
    {
      title: 'Definições de layout de obra',
      faIcon: 'fa-solid fa-table-cells-large',
      content:
        "Antes do início da execução do projeto é necessário que sejam definidos os locais para a estrutura da obra como: alojamentos, banheiros, almoxarifado e etc. Nessa etapa é fundamental implantação do uso de EPI's e EPC's, a correta sinalização da obra e realização de DDS&#0039;s, evitando acidentes e prejuízos. A palavra-chave dessa etapa é segurança.",
    },
    {
      title: 'Supervisão de tarefas',
      faIcon: 'fa-solid fa-check-double',
      content:
        'Durante a execução do plano de ação é empregada uma rotina de fiscalização das atividades. Com o acesso a todos os documentos e informações do projeto, a gestão sabe exatamente o nível de criticidade de cada tarefa, mantendo assim, um controle de qualidade elevado. São fornecidos relatórios para documentar o processo de acompanhamento diário de tarefas, a fim de previnir ou identificar erros e solucioná-los em tempo hábil, preservando o cronograma estabelecido.',
    },
    {
      title: 'Gestão de equipe',
      faIcon: 'fa-solid fa-person-digging',
      content:
        'É essencial garantir que as equipes de execução estejam munidas de todas as informações que precisem, atualizadas em tempo real. A administração deve assegurar que as deliberações sobre o projeto sejam comunicadas de forma clara e objetiva, evitando o desgaste da equipe operacional.',
    },
    {
      title: 'Gestão de suprimentos',
      faIcon: 'fa-solid fa-boxes-stacked',
      content:
        'É indispensável um controle, para acompanhar a compra, entrega, armazenagem, e consumo dos materiais necessários para a execução do projeto. Além disso, a demanda de material deve ser verificada diariamente, evitando ociosidade no canteiro devido à falta de materiais. Esses materiais devem ser armazenados e separados corretamente, evitando perdas e desperdícios. O uso de aplicativos de gerenciamento de obras auxilia nesse quesito.',
    },
  ];

  return (
    <Container id="workflow__container">
      <GreenGearTitle title="Entenda como funciona nosso fluxo de trabalho" />
      <ul className="workflow__steps">
        {workflowSteps.map((item, index) => {
          const step = index + 1;
          return (
            <li className="workflow__box" key={index}>
              <div className="workflow__header">
                <div className="workflow__head">
                  <i className={`workflow__icon ${item.faIcon}`} />
                  <h4 className="workflow__title">{item.title}.</h4>
                </div>
                <h5 className="workflow__step">{step}</h5>
              </div>
              <p className="workflow__description">{item.content}</p>
            </li>
          );
        })}
      </ul>
      <GearSVG
        width="400"
        height="216"
        fill="#0E0E0E"
        className="workflow__gear"
      />
    </Container>
  );
};

export default Workflow;
