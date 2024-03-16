import React from "react";
import { Container, Logo, Menu } from "./styles";
import logoIMG from "../../assets/img/logo.png";
import { Link, useHistory } from "react-router-dom"; // Importe useHistory

const Header = () => {
  const userLogged = localStorage.getItem("Yt");
  const history = useHistory(); // Inicialize useHistory

  const handleLogout = () => {
    localStorage.removeItem("Yt"); // Remova o usuário do localStorage
    history.push("/login"); // Navegue para a rota de login usando useHistory
  };

  return (
    <Container>
      <Logo>
        <Link to="/">
          <img src={logoIMG} alt="Logo" />{" "}
          {/* Adicione alt para acessibilidade */}
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
              <button onClick={handleLogout}>Sair</button>{" "}
              {/* Alterado para um botão para melhor semântica */}
            </li>
          )}
        </ul>
      </Menu>
    </Container>
  );
};

export default Header;
