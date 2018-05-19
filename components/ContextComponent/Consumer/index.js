import React, {Fragment} from "react";

import { Consumer } from "../ContextProvider/index";

const styles = {
  dark: {
    backgroundColor: "black",
    color: "white"
  },
  light: {
    backgroundColor: "white",
    color: "black"
  }
};

const Btn = ({onClick, text})=>(
  <button color={"success"} onClick={onClick}>{text}</button>
)

const Counter = () => (
  <Consumer>
    {({ state: { theme }, actions: { toggle} }) => (
      <Fragment>
        <Btn text={"Toggle"} onClick={()=>toggle()}/>
        <div style={styles[theme]}>{theme}</div>
      </Fragment>
    )}
  </Consumer>
);

export default Counter;
