import { ExperienceStyled } from "./ExperienceStyled";

const Experience = () => {
  return (
    <ExperienceStyled>
      <section className="projeto" id="experiencia" aria-label="Projetos">
        <h2 className="subtitle">Experiência</h2>
        <div>
          <p className="projeto-text">
            Desenvolvo projetos para a prática pessoal utilizando
            <strong> HTML</strong>, <strong> CSS</strong> e 
            <strong> JavaScript</strong>. Para aplicativos web como Calculadora,
            Cronômetro,Formulário de Conta.
          </p>

          <div className="empresa">
            <span className="empresa-ano">2022</span>
            <h3 className="empresa-titulo">Calculadora Web</h3>
            <span className="empresa-titulo-span">Tecnologias Usadas</span>
            <p className="empresa-texto">
              Projeto desenvolvido utilizando HTML, CSS e JavaScript
            </p>
            <ul className="empresa-habilidades">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
            </ul>
          </div>

          <div className="empresa">
            <span className="empresa-ano">2022</span>
            <h3 className="empresa-titulo">Cronômetro</h3>
            <span className="empresa-titulo-span">Tecnologias Usadas</span>
            <p className="empresa-texto">
              Projeto desenvolvido utilizando HTML, CSS e JavaScript
            </p>
            <ul className="empresa-habilidades">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
            </ul>
          </div>

          <div className="empresa">
            <span className="empresa-ano">2022</span>
            <h3 className="empresa-titulo"> Formulário de Conta</h3>
            <span className="empresa-titulo-span  ">Tecnologias Usadas</span>
            <p className="empresa-texto">
              Projeto desenvolvido utilizando HTML, CSS e JavaScript
            </p>
            <ul className="empresa-habilidades">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
            </ul>
          </div>
        </div>
      </section>
    </ExperienceStyled>
  );
};

export default Experience;
