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
  const [dataimobi, setDataImobi] = useState([]);

  useEffect(() => {
    Api.get(`/listimobi/${slug}`)
      .then((resp) => {
        setDataImobi(resp.data);
      })
      .catch((error) => {
        console.log("Error: Erro ao listar o imovel " + error);
      });
  }, []);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    Api.post("/createmessage", dataMessage)
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
    <Fragment>
      <TopBanner tipo={tipo} descricao={descricao} thumb={thumb} />
      <Container>
        <Left>
          <Thumb>
            <img src={`${urlApi}/uploads/${thumb}`}></img>
          </Thumb>
          <Description>
            <h2>{tipo}</h2>
            <h5>Cidade: {cidade}</h5>
            <h5>Endereco: {endereco}</h5>
            <p>{descricao}</p>
          </Description>
        </Left>
        <Rigth>
          <Profile>
            <ProfileImg>
              <img src="https://images.unsplash.com/placeholder-avatars/extra-large.jpg?dpr=1&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff" />
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
              <Input
                type="hidden"
                name="userId"
                value={userId}
                onChance={(e) => setClientName((e.target.value = ""))}
              />
              <Input
                type="text"
                placeholder="Nome: "
                name="client_name"
                onChance={(e) => setClientName((e.target.value = ""))}
              />
              <Input
                type="text"
                placeholder="E-mail: "
                name="client_email"
                onChance={(e) => setClientEmail((e.target.value = ""))}
              />
              <TextArea
                placeholder="Mensagem: "
                id=""
                cols="30"
                rows="16"
                name="client_mensagem"
                onChance={(e) => setClientMensagem((e.target.value = ""))}
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
