import {TrainingStyled} from "./TrainingStyled"

const Training = () => {
  return (
    <TrainingStyled>
    <section className="formacao" id="formacao" aria-label="Formação">
      <div className="formacao-container">
        <h2 className="subtitle">Formação</h2>
        <div>
          <p className="formacao-texto">
            Minha mais recente experiência acadêmica é{" "}
            <strong>Pós Graduação</strong> em{" "}
            <strong>Ciência de Dados</strong> e  <strong>Marchine Laerning</strong> 🎓 que cursei pela UniCeub e também   
            <strong> Ánalise</strong> e <strong>Desenvolvimento</strong> de{" "}
            <strong>Sistemas</strong> que cursei pela Uninter. Além
            disso me mantenho sempre atualizado com cursos intensivos online.
          </p>
          <ul className="faculdade-lista">
            <li className="faculdade">
              <span className="faculdade-tipo">Pós Graduado</span>
              <h3 className="faculdade-curso">
              Ciência de Dados e Marchine Laerning{" "}
              </h3>
              <span className="faculdade-instituicao">UniCeub</span>
            </li>
          </ul>
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
                <li>Qlik Sense</li>
                <li>Power BI</li>
                <li>Excel</li>
                <li>SQL</li>
                <li>Python</li>
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
