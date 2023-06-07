import styled from "styled-components";

export const TrainingStyled = styled.section`
  .subtitle {
    font-size: 8rem;
    font-weight: 700;
    font-family: Playfair + Display;
    line-height: 1.2;
    text-transform: uppercase;
    word-break: break-all;
    max-width: 4ch;
    margin-top: 40px;
  }

  .formacao {
  background: #141414;
  color: #fff;
}
.formacao-container {
  max-width: 1200px;
  padding: 120px 20px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 100px;
  position: relative;
}
.formacao-container::after {
  content: "";
  display: block;
  width: 130px;
  height: 100px;
  background: url(../img/detalhe1.svg) no-repeat center;
  position: absolute;
  bottom: -50px;
  left: 20px;
}
.formacao .subtitle {
  color: #000;
  max-width: 5px 1ch;
}
.formacao-texto {
  font-family: "Fira Sans" Arial, Helvetica, sans-serif;
  font-size: 1.5rem;
  max-width: 50ch;
  line-height: 1.33;
  margin-bottom: 60px;
  color: #a3a3a3;
}
.formacao-texto strong {
  color: #fff;
}
.faculdade-lista {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 60px;
}
.faculdade {
  flex: 1;
  background: #000;
  padding: 20px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
}
.faculdade-tipo {
  font-size: 0.875rem;
  text-transform: uppercase;
  color: #a3a3a3;
  margin-bottom: 10px;
}
.faculdade-curso {
  flex: 1;
  font-size: 1.125rem;
  line-height: 1.4;
  margin-bottom: 40px;
  position: relative;
}
.faculdade-curso::before {
  content: "";
  display: block;
  width: 4px;
  height: 20px;
  background: linear-gradient(180deg, #ff2525 0%, #febcbc 100%);
  position: absolute;
  left: -24px;
}
.faculdade-instituicao {
  font-size: 1.125rem;
  color: #a3a3a3;
}
.cursos {
  margin-bottom: 60px;
}
.formacao-extra h3 {
  font-size: 0.875rem;
  line-height: 1.4rem;
  color: #8f8f8f;
  text-transform: uppercase;
  margin-bottom: 30px;
  position: relative;
}
.formacao-extra h3::before {
  display: block;
  content: "";
  width: 24px;
  height: 24px;
  background: url(../img/cursos.svg) no-repeat center center;
  position: absolute;
  left: -36px;
  top: -1px;
}
.cursos h3::before {
  background: url(../img/cursos.svg) no-repeat center center;
}
.idiomas h3::before {
  background: url(../img/idiomas1.svg) no-repeat center center;
}
.formacao-extra li {
  font-size: 1.125rem;
  line-height: 1.1;
  margin-bottom: 20px;
}
.formacao-extra span {
  color: #8f8f8f;
}
.cursos li {
  display: flex;
  justify-content: space-between;
}
`;
