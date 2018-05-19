import React, { Component, createContext } from "react";
import classNames from 'classnames'

export const { Provider, Consumer } = createContext();

export class ContextProvider extends Component {
  state = { isToggleNavBar: false };

  toggleNavBar = () => {
    this.setState(({ isToggleNavBar }) => ({
      isToggleNavBar: isToggleNavBar === true ? false : true
    }));
  };



  render() {
    let navBarMenuClass = classNames({
      "navbar-menu": true,
      "is-flex-touch":this.toggleNavBar,
      "is-hidden":!this.toggleNavBar

    });
    const value = {
      state: this.state,
      actions: {
        toggleNavBar: this.toggleNavBar,
      }

    };
    return (
      <Provider value={value}>
        {this.props.children}
      </Provider>
    );
  }
}
