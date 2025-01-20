import { SectionDevStyled } from "./SectionDevStyled";
import myImg from "./my-img-02.jpg";

const SectionDev = () => {
  return (
    <SectionDevStyled>
      <section className="introducao" id="home">
        <img src={myImg} alt="foto de perfil" />
        <div>
          <h1>
            Analista de Dados
          </h1>
          <p>Localizado em Brasília-DF 🛰️</p>
        </div>
      </section>
    </SectionDevStyled>
  );
};

export default SectionDev;
