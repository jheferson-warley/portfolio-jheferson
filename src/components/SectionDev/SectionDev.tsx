import { SectionDevStyled } from "./SectionDevStyled";
import myImg from "./my-img.jpg";

const SectionDev = () => {
  return (
    <SectionDevStyled>
      <section className="introducao" id="home">
        <img src={myImg} alt="foto de perfil" />
        <div>
          <h1>
            Desenvolvedor <br /> Front End
          </h1>
          <p>Localizado no Distrito Federal 🛰️</p>
        </div>
      </section>
    </SectionDevStyled>
  );
};

export default SectionDev;
