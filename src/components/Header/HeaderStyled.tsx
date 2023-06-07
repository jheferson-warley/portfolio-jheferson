import Styled from "styled-components";

export const HeaderStyle = Styled.header`

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
.header-menu a {
  font-size: 1.125rem;
  font-family: Fira Sans, Arial, Helvetica, sans-serif;
  font-weight: 500;
  text-decoration: none;
  line-height: 1.3;
  padding: 10px 20px;
  color: #141414;
  display: block;
}
.header-menu a:hover{
  padding: 7px 20px;
  background-color: #FF7F77;
  border-radius: 10px;
}
.header-menu li{
  font-size: 1.125rem;
  list-style: none;
  text-decoration: none;
  color: #141414;
}
`;
