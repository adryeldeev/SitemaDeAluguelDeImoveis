import React, { useState } from "react";
import { Button, Container, Logo, Menu, Hamburger, NavLinks } from "./styles";
import logoIMG from "../../assets/img/logo.png";
import { Link, useHistory } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const userLogged = localStorage.getItem("Yt");
  const history = useHistory();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("Yt");
    history.push("/login");
    window.location.reload();
  };

  return (
    <Container>
      <Logo>
        <Link to="/SitemaDeAluguelDeImoveis">
          <img src={logoIMG} alt="Logo" />
        </Link>
      </Logo>
      <Hamburger onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </Hamburger>
      <Menu open={menuOpen}>
        <NavLinks>
          <ul>
            {!userLogged ? (
              <li>
                <Link to="/login" onClick={() => setMenuOpen(false)}>
                  Cadastro/login
                </Link>
              </li>
            ) : (
              <li>
                <Button onClick={handleLogout}>Sair</Button>
              </li>
            )}
          </ul>
        </NavLinks>
      </Menu>
    </Container>
  );
};

export default Header;
