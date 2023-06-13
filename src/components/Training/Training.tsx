import {TrainingStyled} from "./TrainingStyled"

const Training = () => {
  return (
    <TrainingStyled>
    <section className="formacao" id="formacao" aria-label="Formação">
      <div className="formacao-container">
        <h2 className="subtitle">Formação</h2>
        <div>
          <p className="formacao-texto">
            Minha mais recente experiência acadêmica foi o{" "}
            <strong>Ánalise</strong> e <strong>Desenvolvimento</strong> de{" "}
            <strong>Sistemas</strong> 🎓 que estou realisando pela Uninter. Além
            disso me mantenho sempre atualizado com cursos intensivos online.
          </p>
          <ul className="faculdade-lista">
            <li className="faculdade">
              <span className="faculdade-tipo">TECNÓLOGO</span>
              <h3 className="faculdade-curso">
                Análise e Desenvolvimento de Sistemas{" "}
              </h3>
              <span className="faculdade-instituicao">Uninter</span>
            </li>
          </ul>
          <div className="formacao-extra">
            <div className="cursos">
              <h3>Cursos Intensivos</h3>
              <ul>
                <li>HTML 5</li>
                <li>CSS 3</li>
                <li>JavaScript</li>
                <li>ReactJS</li>
                <li>Styled-Components</li>
              </ul>
            </div>

            <div className="idiomas">
              <h3>Idiomas</h3>
              <ul>
                <li>
                  Português <span>/ Nativo</span>
                </li>
                <li>
                  Inglês <span>/ Básico</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    </TrainingStyled>
  );
};

export default Training;
