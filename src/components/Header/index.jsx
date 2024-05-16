import React from "react";
import { Button, Container, Logo, Menu } from "./styles";
import logoIMG from "../../assets/img/logo.png";
import { Link, useHistory } from "react-router-dom";

const Header = () => {
  const userLogged = localStorage.getItem("Yt");
  const history = useHistory();

  const handleLogout = () => {
    localStorage.removeItem("Yt");
    history.push("/login");
  };

  return (
    <Container>
      <Logo>
        <Link to="/">
          <img src={logoIMG} alt="Logo" />
        </Link>
      </Logo>
      <Menu>
        <ul>
          {!userLogged ? (
            <li>
              <Link to="/login">Cadastro/login</Link>
            </li>
          ) : (
            <li>
              <Button onClick={handleLogout}>Sair</Button>
            </li>
          )}
        </ul>
      </Menu>
    </Container>
  );
};

export default Header;
