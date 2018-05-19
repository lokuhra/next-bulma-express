import React from "react";


import { ContextProvider } from "ContextProvider/index";
import Consumer from "Consumer/index";

const Context = () => (
    <ContextProvider>
      <Consumer />
    </ContextProvider>

);

export default Context;