import styled from "styled-components";
import cursos from "../../assets/images/cursos.svg";
import idioma from "../../assets/images/idiomas1.svg";
import detalhe from "../../assets/images/detalhe1.svg";

export const TrainingStyled = styled.section`
  body {
    margin: 0;
    color: #141414;
  }
  h1,
  h2,
  h3,
  p {
    margin: 0;
  }
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  img {
    max-width: 100%;
    height: auto;
    display: block;
  }
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
    margin: -8px;
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
    background: url(${detalhe}) no-repeat center;
    position: absolute;
    bottom: -50px;
    left: 20px;
  }
  .formacao .subtitle {
    color: #000;
    max-width: 5px 1ch;
  }
  .formacao-texto {
    font-family: Fira Sans, Arial, Helvetica, sans-serif;
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
    font-family: Fira Sans, Arial, Helvetica, sans-serif;
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
    font-family: Arial, Helvetica, sans-serif;
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
    font-family: Fira Sans, Arial, Helvetica, sans-serif;
  }
  .formacao-extra h3 {
    font-size: 0.875rem;
    line-height: 1.4rem;
    color: #8f8f8f;
    text-transform: uppercase;
    margin-bottom: 30px;
    position: relative;
    font-family: Fira Sans, Arial, Helvetica, sans-serif;
  }
  .formacao-extra h3::before {
    display: block;
    content: "";
    width: 24px;
    height: 24px;
    background: url(${cursos}) no-repeat center center;
    position: absolute;
    left: -36px;
    top: -1px;
  }
  .cursos h3::before {
    background: url(${cursos}) no-repeat center center;
  }
  .idiomas h3::before {
    background: url(${idioma}) no-repeat center center;
  }
  .formacao-extra li {
    font-size: 1.125rem;
    line-height: 1.1;
    margin-bottom: 20px;
    font-family: Fira Sans, Arial, Helvetica, sans-serif;
  }
  .formacao-extra span {
    color: #8f8f8f;
  }
  .cursos li {
    display: flex;
    justify-content: space-between;
  }
  //Responsive
  @media (max-width: 1000px) {
    .introducao h1 {
      font-size: 3.4rem;
    }
  }
  @media (max-width: 800px) {
    .formacao-container {
      grid-template-columns: 1fr;
      padding: 60px 20px;
      gap: 40px;
    }
    .formacao .subtitle {
      color: #fff;
      font-size: 48px;
      max-width: none;
      line-height: 1;
      text-transform: none;
      word-break: break-all;
    }
    .formacao-texto {
      font-size: 1.25rem;
    }
    .formacao-extra h3::before {
      position: initial;
      margin-bottom: 10px;
    }
  }
  @media (max-width: 400px) {
    .formacao-container ::after {
      width: 30px;
      height: 10px;
      left: 0;
    }
  }
`;
