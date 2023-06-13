import Styled from "styled-components";

export const NavBarStyle = Styled.header`
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

.header img{
  max-width: 100%;
  height: auto;
  display: block;
}

.header {
  max-width: 1200px;
  padding: 40px 20px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header-menu {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  text-decoration: none;
}
.header-menu li {
  font-size: 1.125rem;
  font-family: Fira Sans, Arial, Helvetica, sans-serif;
  font-weight: 500;
  text-decoration: none;
  line-height: 1.3;
  padding: 10px 20px;
  color: #141414;
  display: block;
  cursor: pointer;
}
.header-menu li:hover{
  padding: 5px 10px;
  background-color: #FF7F77;
  border-radius: 10px;
  text-align: center;
  margin-top: 7px;
}

`;
