import styled from "styled-components";

export const ExperienceStyled = styled.section`
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
  .projeto {
    max-width: 1200px;
    padding: 30px 20px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 100px;
  }
  .projeto .subtitle {
    color: #e0e0e0;
    max-width: 5px 1ch;
  }
  .projeto-text {
    font-family: Fira Sans, Arial, Helvetica, sans-serif;
    font-size: 1.5rem;
    max-width: 50ch;
    line-height: 1.33;
    margin-bottom: 30px;
    color: #525252;
  }
  .projeto-text strong {
    font-size: 1.6rem;
    color: #141414;
  }
  .empresa {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 5px 20px;
    padding: 20px;
    background: #f5f5f5;
    margin-bottom: 20px;
    border-radius: 4px;
    position: relative;
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
    top: 19px;
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
    line-height: 0px;
  }
  .empresa-titulo-span {
    font-family: Playfair + Display;
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 0px;
    margin-top: 12px;
  }
  .empresa-texto {
    font-family: Fira Sans, Arial, Helvetica, sans-serif;
    font-size: 0.875rem;
    line-height: 1.4;
    padding-top: -40px;
    color: #525252;
  }

  .empresa-habilidades {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    align-content: flex-start;
    margin-left: -40px;
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
`;
