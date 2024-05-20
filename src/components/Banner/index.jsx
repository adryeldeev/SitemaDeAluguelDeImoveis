import React from "react";
import { Container, SubTexto, Text, TextoSpan, Titulo } from "./styles";

const Banner = () => {
  return (
    <Container>
      <Text>
        <Titulo>
          <h2>Descubra a beleza do seu próximo apartamento</h2>
        </Titulo>
        <SubTexto>
          <p>
          Milhares de pessoas têm a chance de adquirir sua própria casa hoje.
          </p>
        </SubTexto>
        <TextoSpan>
          <span>Cadastre seu anúncio</span>
        </TextoSpan>
      </Text>
    </Container>
  );
};

export default Banner;
