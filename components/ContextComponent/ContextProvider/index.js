import React, { Component, createContext } from "react";

export const { Provider, Consumer } = createContext();

export class ContextProvider extends Component {
  state = { theme: "light" };

  toggle = () => {
    this.setState(({ theme }) => ({
      theme: theme === "light" ? "dark" : "light"
    }));
  };

  render() {
    const value = {
      state: this.state,
      actions: {
        toggle: this.toggle,
      }
    };
    return (
      <Provider value={value}>
        {this.props.children}
      </Provider>
    );
  }
}
