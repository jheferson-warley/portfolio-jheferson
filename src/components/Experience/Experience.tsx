import { ExperienceStyled } from "./ExperienceStyled";

const Experience = () => {
  return (
    <ExperienceStyled>
      <section className="projeto" id="experiencia" aria-label="Projetos">
        <h2 className="subtitle">Experiência</h2>
        <div>
          <p className="projeto-text">
            Atualmente estou realizando estágio na <strong>Anatel em Análise de Dados</strong>, onde minhas principais ferramentas são <strong>Excel</strong>, <strong>Qlik Sense</strong> para o processo de ETL.
            Realizando também projetos pessoais realistas para a prática de Hard Skills do dia a dia de um Analista que estão publicado no <a className="linkedin-btn" href="https://www.linkedin.com/in/jheferson-warley/" target="_blank">LinkedIn</a>.
          </p>

          <div className="empresa">
            <h3 className="empresa-titulo">Dashboard: Acompanhamento de Acidentes em Rodovias Federais</h3>
            <span className="empresa-titulo-tec">Tecnologias Usadas</span>
            <p className="empresa-texto">
            Desenvolvi este painel no Power BI para analisar dados sobre acidentes em rodovias federais, destacando tendências importantes e fornecendo insights valiosos para tomada de decisão.
            </p>
            <ul className="empresa-habilidades">
              <li>Power BI</li>
              <li>Excel</li>
              <li>DAX</li>
              <a className="linkedin-btn-project" href="https://www.linkedin.com/posts/jheferson-warley_businessintelligence-powerbi-dataanalytics-activity-7285787039399112704-yRW_?utm_source=social_share_sheet&utm_medium=member_desktop_web" target="_blank">Acessar o projeto</a>
            </ul>
          </div>

          <div className="empresa">
            <h3 className="empresa-titulo"> Explorando o Desempenho Financeiro no Varejo</h3>
            <span className="empresa-titulo-tec">Tecnologias Usadas</span>
            <p className="empresa-texto">
            O objetivo era solucionar problemas críticos de negócios e ajudar na tomada de decisão estratégica.
            </p>
            <ul className="empresa-habilidades">
              <li>Power BI</li>
              <li>Excel</li>
              <li>DAX</li>
              <a className="linkedin-btn-project" href="https://www.linkedin.com/posts/jheferson-warley_powerbi-anaerlisededados-dataanalyst-activity-7284691577304748032-nrWK?utm_source=social_share_sheet&utm_medium=member_desktop_web" target="_blank">Acessar o projeto</a>
            </ul>
          </div>

          <div className="empresa">
            <h3 className="empresa-titulo">Análise de Dados: Explorando Potencial com Excel ou Google Sheets</h3>
            <span className="empresa-titulo-tec">Tecnologias Usadas</span>
            <p className="empresa-texto">
            o objetivo era identificar quais países atingiram ou superaram a meta de faturamento e quais ficaram abaixo do esperado.
            </p>
            <ul className="empresa-habilidades">
              <li>Goglee Sheets</li>
              <a className="linkedin-btn-project" href="https://www.linkedin.com/posts/jheferson-warley_excel-googlesheets-dataanalytics-activity-7287932509269454851-fJuq?utm_source=share&utm_medium=member_desktop" target="_blank">Acessar o projeto</a>
            </ul>
          </div>

        </div>
      </section>
    </ExperienceStyled>
  );
};

export default Experience;
