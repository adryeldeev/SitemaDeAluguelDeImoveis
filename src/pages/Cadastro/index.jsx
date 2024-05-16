import React, { useState } from "react";

import Input from "../../components/Input/Index";
import Button from "../../components/Button";
import { Container, ContainerForm, Form, Label } from "./styled";
import Api from "../../services/Api";
import { toast } from "react-toastify";

const Cadastro = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const InputValue = (e) =>
    setData({ ...data, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    Api.post("/creatusers", data)
      .then((resp) => {
        if (!resp.data.error === true) {
          toast(resp.data.message);
        } else {
          toast(resp.data.message);
        }
      })
      .catch(() => console.log("Error no sitema"));
  };
  return (
    <Container>
      <h2>Crie sua conta</h2>
      <p>Cadastre-se para acessar a plataforma!</p>
      <ContainerForm>
        <Form onSubmit={handleSubmit} action="">
          <Label>Nome</Label>
          <Input
            type="text"
            name="name"
            placeholder="Informe seu Nome"
            onChange={InputValue}
          />
          <Label>E-mail</Label>
          <Input
            type="text"
            name="email"
            placeholder="Informse seu E-mail"
            onChange={InputValue}
          />
          <Label>Senha</Label>
          <Input
            type="password"
            name="password"
            placeholder="Informse sua Senha"
            onChange={InputValue}
          />
          <Button type="submit">Cadastrar</Button>
        </Form>
      </ContainerForm>
    </Container>
  );
};

export default Cadastro;
