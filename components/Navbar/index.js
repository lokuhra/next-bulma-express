import React from "react";


import { ContextProvider } from "./ContextProvider";
import Consumer from "./Consumer";

const Context = () => (
    <ContextProvider>
      <Consumer />
    </ContextProvider>

);

export default Context;