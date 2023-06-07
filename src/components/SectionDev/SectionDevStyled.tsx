import Styled from "styled-components";
import detalhe from "../../assets/images/detalhe1.svg"

export const SectionDevStyled = Styled.section`
.introducao {
  max-width: 1200px;
  padding: 40px 20px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 100px;
  align-items: center;
}
.introducao  h1 {
  font-family: Playfair+Display;
  font-weight: 700;
  font-size: 4.8rem;
  line-height: 1.125;
  margin-bottom: 30px;
  position: relative;
}
.introducao div h1::before {
  content: "";
  display: block;
  width: 130px;
  height: 100px;
  background: url(${detalhe}) no-repeat center;
  position: absolute;
  top: -15px;
  left: -40px;
  z-index: -1;
}
.introducao p {
  font-size: 1.5rem;
  font-family: Fira Sans, Arial, Helvetica, sans-serif;
  color: #525252;
}
`