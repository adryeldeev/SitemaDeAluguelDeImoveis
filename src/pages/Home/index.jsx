import React, { Fragment, useEffect, useState } from "react";
import { Header, Wrapper } from "./style";
import Card from "../../components/Card";
import Banner from "../../components/Banner";
import Api from "../../services/Api";

const Home = () => {
  const [imobi, setImobi] = useState([]);

  useEffect(() => {
    Api.get("/listimobi")
      .then((resp) => {
        setImobi(resp.data);
      })
      .catch(() => {
        console.log("Error");
      });
  }, []);

  return (
    <Fragment>
      <Banner />
      <Header>
        <h2>Find the property of your dreams!</h2>
      </Header>
      <Wrapper>
        {imobi.map((items) => (
          <Card
            key={items.id}
            thumb={items.thumb}
            tipo={items.tipo}
            endereco={items.endereco}
            valor={items.valor}
            slug={items.slug}
          />
        ))}
      </Wrapper>
    </Fragment>
  );
};

export default Home;
