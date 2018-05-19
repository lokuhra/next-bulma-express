import React from "react";
import App from "../components/App";

import { CargaProvider } from "../components/Carga/ContextProvider/index";
import Consumer from "../components/Carga/Consumer/index";

const Context = () => (
  <App title="Context">
      <CargaProvider>
        <Consumer />
      </CargaProvider>
  </App>
);

export default Context;
