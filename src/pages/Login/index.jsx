import React, { useState } from "react";
import { Container, ContainerForm, Form, Label } from "./style";
import Input from "../../components/Input/Index";
import Button from "../../components/Button";
import { AppAuth } from "./../../Context/AppAuth";
const Login = () => {
  const auth = AppAuth();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleLogin = async (e) => {
    e.preventDefault();
    await auth.authenticate(email, password);
  };

  return (
    <Container>
      <h2>Acesse sua conta:</h2>
      <p>Entre com seu e-mail e senha!</p>
      <ContainerForm>
        <Form onSubmit={handleLogin} action="">
          <Label htmlFor="">Username</Label>
          <Input
            type="text"
            name="email"
            placeholder="Informe seu E-mail"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Label htmlFor="">Senha</Label>
          <Input
            type="password"
            name="password"
            placeholder="Informse sua Senha"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit">Fazer login</Button>
        </Form>
      </ContainerForm>
    </Container>
  );
};

export default Login;
