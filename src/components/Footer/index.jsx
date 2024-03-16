import React, { Fragment } from "react";
import logoIMG from "../../assets/img/logo.png";
import { Container, Copy, Item } from "./style";
import { FaFacebook, FaWhatsapp, FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <Fragment>
      <Container>
        <Item>
          <img src={logoIMG} alt="" />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt
            adipisci, obcaecati eos ex corporis ullam.
          </p>
          <nav>
            <li>
              <span>
                <FaFacebook size={32} />
              </span>
            </li>
            <li>
              <span>
                <FaInstagram size={32} />{" "}
              </span>
            </li>
            <li>
              <span>
                <FaWhatsapp size={32} />{" "}
              </span>
            </li>
          </nav>
        </Item>
        <Item>
          <h3>Our Services</h3>
          <ul>
            <li>
              <span>Comprar</span>
            </li>
            <li>
              <span>Alugar</span>
            </li>
            <li>
              <span>Vender</span>
            </li>
          </ul>
        </Item>
        <Item>
          <h3>Our Services</h3>
          <ul>
            <li>
              <span>Comprar</span>
            </li>
            <li>
              <span>Alugar</span>
            </li>
            <li>
              <span>Vender</span>
            </li>
          </ul>
        </Item>
        <Item>
          <h3>Our Services</h3>
          <ul>
            <li>
              <span>Comprar</span>
            </li>
            <li>
              <span>Alugar</span>
            </li>
            <li>
              <span>Vender</span>
            </li>
          </ul>
        </Item>
      </Container>
      <Copy>
        <p>Copyright 2022 - Workside Tecnologia All Rights Reserved.</p>
        <ul>
          <li>
            <span>Termos de uso</span>
          </li>
          <li>
            <span>Política de Privacidade</span>
          </li>
          <li>
            <span>Política de Cookies</span>
          </li>
        </ul>
      </Copy>
    </Fragment>
  );
};

export default Footer;
