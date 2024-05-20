import React, { Fragment, useEffect, useState } from "react";
import {
  Container,
  Description,
  Left,
  Profile,
  ProfileContact,
  ProfileDescript,
  ProfileFormContact,
  ProfileImg,
  Rigth,
  Thumb,
} from "./styles";
import TopBanner from "../../components/TopBanner";

import TextArea from "../../components/Textarea";
import Button from "../../components/Button";
import Input from "../../components/Input/Index";

import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { toast } from "react-toastify";
import Api, { urlApi } from "../../services/Api";

const Imobi = () => {
  const { slug } = useParams();
  const [dataimobi, setDataImobi] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await Api.get(`/listimobi/${slug}`);
        setDataImobi(resp.data);
      } catch (error) {
        console.log("Error: Erro ao listar o imovel " + error);
      }
    };

    fetchData();
  }, [slug]);

  const {
    tipo,
    cidade,
    endereco,
    descricao,
    thumb,
    name,
    email,
    telefone,
    userId,
  } = dataimobi;

  const [client_name, setClientName] = useState("");
  const [client_email, setClientEmail] = useState("");
  const [client_mensagem, setClientMensagem] = useState("");

  const dataMessage = {
    client_name,
    client_email,
    client_mensagem,
    userId,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (client_name === "" || client_email === "" || client_mensagem === "") {
      alert("Preencha todos os campos.");
      return;
    }
    try {
      const resp = await Api.post("/createmessage", dataMessage);
      toast(resp.data.message);
    } catch (error) {
      console.log("Error no sistema");
    }
  };

  return (
    <Fragment>
      <TopBanner tipo={tipo} descricao={descricao} thumb={thumb} />
      <Container>
        <Left>
          <Thumb>
            <img src={`${urlApi}/uploads/${thumb}`} alt="Imagem do Imóvel" />
          </Thumb>
          <Description>
            <h2>{tipo}</h2>
            <h5>Cidade: {cidade}</h5>
            <h5>Endereço: {endereco}</h5>
            <p>{descricao}</p>
          </Description>
        </Left>
        <Rigth>
          <Profile>
            <ProfileImg>
              <img
                src="https://images.unsplash.com/placeholder-avatars/extra-large.jpg?dpr=1&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff"
                alt="Imagem do Perfil"
              />
            </ProfileImg>
            <ProfileDescript>
              <h3>{name}</h3>
              <p>Descrição do usuário</p>
            </ProfileDescript>
          </Profile>
          <ProfileContact>
            <h3>Informações para contato:</h3>
            <p>{telefone}</p>
            <p>{email}</p>
          </ProfileContact>
          <ProfileFormContact>
            <h3>Contate o anunciante</h3>
            <form onSubmit={handleSubmit} autoComplete="off">
              <Input type="hidden" name="userId" value={userId} />
              <Input
                type="text"
                placeholder="Nome: "
                name="client_name"
                onChange={(e) => setClientName(e.target.value)}
              />
              <Input
                type="text"
                placeholder="E-mail: "
                name="client_email"
                onChange={(e) => setClientEmail(e.target.value)}
              />
              <TextArea
                placeholder="Mensagem: "
                id=""
                cols="30"
                rows="16"
                name="client_mensagem"
                onChange={(e) => setClientMensagem(e.target.value)}
              />
              <Button>Enviar mensagem</Button>
            </form>
          </ProfileFormContact>
        </Rigth>
      </Container>
    </Fragment>
  );
};

export default Imobi;
