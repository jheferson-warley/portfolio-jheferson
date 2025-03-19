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
            <h3 className="empresa-titulo">Análise de Vendas com SQL e Python</h3>
            <span className="empresa-titulo-tec">Tecnologias Usadas</span>
            <p className="empresa-texto">
            Desenvolvi este projeto para extrair, analisar e visualizar dados de vendas a partir de um banco de dados MySQL. Através de consultas SQL, organizei as informações e, com Python, gerei gráficos interativos e um relatório automatizado em Excel, facilitando a tomada de decisões baseada em dados.
            </p>
            <ul className="empresa-habilidades">
              <li> Python (Pandas, Plotly)</li>
              <li>MySQL</li>
              <li>Excel</li>
              <a className="linkedin-btn-project" href="https://www.linkedin.com/posts/jheferson-warley_dataanalytics-businessintelligence-bi-activity-7307483768401887232-U6YN?utm_source=share&utm_medium=member_desktop&rcm=ACoAACkvt4EBHoRMX4WmWjN5BFZAA3LDsVkLSAo" target="_blank">Acessar o projeto</a>
            </ul>
          </div>
          
          <div className="empresa">
            <h3 className="empresa-titulo">Análise de Vendas Online: Tratamento e Exploração de Dados</h3>
            <span className="empresa-titulo-tec">Tecnologias Usadas</span>
            <p className="empresa-texto">
            Este projeto demonstra habilidades em tratamento e análise exploratória de dados com Python. O objetivo foi transformar um dataset de vendas online inconsistente em uma base limpa e estruturada, facilitando a extração de insights sobre o desempenho da loja.
            </p>
            <ul className="empresa-habilidades">
              <li>Python</li>
              <li>Pandas</li>
              <li>NumPy</li>
              <li>Matplotlib</li>
              <li>Seaborn</li>
              <a className="linkedin-btn-project" href="https://www.linkedin.com/posts/jheferson-warley_datascience-python-pandas-activity-7303513419716947968-iYc0?utm_source=share&utm_medium=member_desktop&rcm=ACoAACkvt4EBHoRMX4WmWjN5BFZAA3LDsVkLSAo"
              target="_blank">Acessar o projeto</a>
            </ul>
          </div>

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
              <a className="linkedin-btn-project" href="https://www.linkedin.com/posts/jheferson-warley_powerbi-anaerlisededados-dataanalyst-activity-7284691577304748032-nrWK?utm_source=share&utm_medium=member_desktop&rcm=ACoAACkvt4EBHoRMX4WmWjN5BFZAA3LDsVkLSAo" target="_blank">Acessar o projeto</a>
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
              <a className="linkedin-btn-project" href="https://www.linkedin.com/posts/jheferson-warley_businessintelligence-powerbi-dataanalytics-activity-7285787039399112704-yRW_?utm_source=social_share_sheet&utm_medium=member_desktop_web" target="_blank">Acessar o projeto</a>
            </ul>
          </div>

        </div>
      </section>
    </ExperienceStyled>
  );
};

export default Experience;
