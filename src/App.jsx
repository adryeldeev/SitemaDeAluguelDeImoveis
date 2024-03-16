import React, { Fragment } from "react";

import Global from "./components/styles/Global";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AppContextProvider } from "./Context/AppContext";
import RouterApp from "./components/routes";

function App() {
  return (
    <Fragment>
      <AppContextProvider>
        <RouterApp />
      </AppContextProvider>
      <Global />
      <ToastContainer />
    </Fragment>
  );
}

export default App;
