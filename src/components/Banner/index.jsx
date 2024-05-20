import React from "react";
import { Container, SubTexto, Text, TextoSpan, Titulo } from "./styles";

const Banner = () => {
  return (
    <Container>
      <Text>
        <Titulo>
          <h2>Discover the Beaty of Your Next Flat</h2>
        </Titulo>
        <SubTexto>
          <p>
            Thousands of peoplo have theirchance to grab your own house today.
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
