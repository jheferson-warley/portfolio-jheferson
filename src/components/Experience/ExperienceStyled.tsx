import styled from "styled-components";

export const ExperienceStyled = styled.section`
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
    line-height: 1;
    text-transform: uppercase;
    word-break: break-all;
    max-width: 4ch;
  }
  .projeto {
    max-width: 1200px;
    padding: 40px 20px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 100px;
  }
  .projeto .subtitle {
    color: #e0e0e0;
  }
  .projeto-text {
    font-family: Fira Sans, Arial, Helvetica, sans-serif;
    font-size: 1.5rem;
    max-width: 50ch;
    line-height: 1.33;
    margin-bottom: 60px;
    color: #525252;
  }
  .projeto-text strong {
    font-size: 1.6rem;
    color: #141414;
  }
  .empresa {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px 20px;
    padding: 20px;
    background: #f5f5f5;
    margin-bottom: 20px;
    border-radius: 4px;
    position: relative;
    font-family: Fira Sans, Arial, Helvetica, sans-serif;
  }
  .empresa::before {
    content: "";
    display: block;
    width: 4px;
    height: 20px;
    background: linear-gradient(180deg, #ff2525 0%, #febcbc 100%);
    position: absolute;
    top: 20px;
    left: -4px;
  }
  .empresa-ano {
    position: absolute;
    top: 17px;
    left: -100px;
    text-align: right;
    width: 80px;
    font-family: Fira Sans, Arial, Helvetica, sans-serif;
    color: #525252;
  }
  .empresa-titulo {
    font-family: Playfair + Display;
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 1.1;
  }
  .empresa-titulo-tec {
    font-family: Playfair + Display;
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 1.1;
  }

  .empresa-texto {
    font-family: Fira Sans, Arial, Helvetica, sans-serif;
    font-size: 0.875rem;
    line-height: 1.4;
    color: #525252;
  }

  .empresa-habilidades {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    align-content: flex-start;
  }
  .empresa-habilidades li {
    font-family: Fira Sans, Arial, Helvetica, sans-serif;
    font-size: 0.875rem;
    line-height: 1.4;
    color: #525252;
    border-radius: 4px;
    background: #fff;
    padding: 5px 10px;
    list-style: none;
  }
  @media (max-width: 800px) {
    .projeto {
      grid-template-columns: 1fr;
      gap: 40px;
    }
    .projeto .subtitle {
      color: #141414;
      font-size: 48px;
      max-width: none;
      line-height: 1;
      text-transform: none;
      word-break: break-all;
    }
    .projeto-text {
      font-size: 1.25rem;
    }
    .empresa {
      display: grid;
      grid-template-columns: 1fr;
      gap: 10px 20px;
      padding: 20px;
      background: #f5f5f5;
      margin-bottom: 20px;
      border-radius: 4px;
      font-family: Fira Sans, Arial, Helvetica, sans-serif;
    }
    .empresa-ano {
      position: initial;
      order: 1;
      width: initial;
      text-align: left;
      position: relative;
      top: 17px;
      left: -100px;
      width: 80px;
      font-family: "Fira Sans" Arial, Helvetica, sans-serif;
      color: #525252;
    }
    .empresa-titulo {
      font-family: Playfair + Display;
      font-weight: 700;
      font-size: 1.1rem;
      line-height: 1.1;
    }
    .empresa-titulo-tec {
      font-family: Playfair + Display;
      font-weight: 700;
      font-size: 1.1rem;
      line-height: 1.1;
      position: relative;
      bottom: 50px;
    }

    .empresa-texto {
      font-family: Fira Sans, Arial, Helvetica, sans-serif;
      font-size: 0.875rem;
      line-height: 1.4;
      color: #525252;
    }

    .empresa-habilidades {
      position: relative;
      top: 50px;
    }
    .empresa-habilidades li {
      font-family: Fira Sans, Arial, Helvetica, sans-serif;
      font-size: 0.875rem;
      line-height: 1.4;
      color: #525252;
      border-radius: 4px;
      background: #fff;
      padding: 5px 10px;
      list-style: none;
    }
  }

  @media (max-width: 400px) {
    /*Projetos*/
    .projeto {
      grid-template-columns: 1fr;
    }
    .empresa-titulo-tec {
      font-family: Playfair + Display;
      font-weight: 700;
      font-size: 1rem;
      line-height: 1.1;
    }
  }
`;
