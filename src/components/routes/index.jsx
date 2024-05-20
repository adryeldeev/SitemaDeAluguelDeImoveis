import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "../../pages/Home";
import Cadastro from "./../../pages/Cadastro/index";
import Login from "./../../pages/Login/index";
import Perfil from "../../pages/Perfil/Perfil.jsx";
import PrivateRoute from "./../PrivateRoute/index";

import Imobi from "./../../pages/Imobi/index";
import Footer from "../Footer";
import Header from "../Header/index.jsx";

const RouterApp = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/SitemaDeAluguelDeImoveis" exact component={Home} />
        <Route path="/imovel/:slug" component={Imobi} />
        <Route path="/login" component={Login} />
        <Route path="/cadastro" component={Cadastro} />
        <PrivateRoute path="/perfil" component={Perfil} />
        <Route path="*" component={Error} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default RouterApp;
