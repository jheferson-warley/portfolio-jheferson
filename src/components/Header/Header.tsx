
import jhefersonWarley from "./jhefersonWarley.svg";
import  {HeaderStyle}  from "./HeaderStyled";

const Header = () => {
  return (
    <HeaderStyle>
        <header className="header">
          <img src={jhefersonWarley} alt="Logo com meu nome" />
          <nav className="menu">
            <ul className="header-menu">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#experiencia">Experiência</a>
              </li>
              <li>
                <a href="#formacao">Formação</a>
              </li>
              <li>
                <a href="#contato">Contato</a>
              </li>
            </ul>
          </nav>
        </header>
    </HeaderStyle>
  );
};

export default Header;
