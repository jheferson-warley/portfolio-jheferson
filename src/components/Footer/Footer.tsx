import { FooterStyled } from "./FooterStyled";
import iconGoogle from "../../assets/images/icons-google.svg";
import iconLinkedin from "../../assets/images/icon-linkedin.svg";
import iconGitHub from "../../assets/images/icon-github.svg";

const Footer = () => {
  function getYear() {
    return new Date().getFullYear();
  }

  return (
    <FooterStyled>
      <footer id="contato" aria-label="Projetos">
        <div>
          <p className="footer-texto"> Entre em contato comigo. 👋</p>

          <section className="redesSociais">
            <a href="https://mail.google.com/" target="_blank" role="button">
              <img src={iconGoogle} alt="icone do google" />
            </a>

            <a
              href="https://www.linkedin.com/in/jheferson-warley/"
              target="_blank"
              role="button"
            >
              <img src={iconLinkedin} alt="icone do LinkedIn" />
            </a>

            <a
              href="https://github.com/jheferson-warley"
              target="_blank"
              role="button"
            >
              <img src={iconGitHub} alt="icone do GitHub" />
            </a>
          </section>
        </div>

        <div className="copyright">
          <p>
            Copyright © <span>{getYear()}</span> Jheferson Warley.
          </p>
        </div>
      </footer>
    </FooterStyled>
  );
};

export default Footer;
