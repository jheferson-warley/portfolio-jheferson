
import jhefersonWarley from "./jhefersonWarley.svg";
import { Link } from "react-scroll";
import  { NavBarStyle}  from "./NavBarStyled";


const Header = () => {
  return (
    <NavBarStyle>
        <header className="header">
          <img src={jhefersonWarley} alt="Logo com meu nome" />
          <nav className="menu">
            <ul className="header-menu">
              <li>
                <Link to="home" spy={true} smooth={true} offset={50} duration={900}>Home</Link>
              </li>
              <li>
                <Link to="experiencia" spy={true} smooth={true} offset={50} duration={1000}>Experiência</Link>
              </li>
              <li>
                <Link to="formacao" spy={true} smooth={true} offset={50} duration={1000}>Formação</Link>
              </li>
              <li>
                <Link to="contato" spy={true} smooth={true} offset={50} duration={1000}>Contato</Link>
              </li>
            </ul>
          </nav>
        </header>
    </NavBarStyle>
  );
};

export default Header;
