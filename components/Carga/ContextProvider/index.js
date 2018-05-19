import React, { Component, createContext } from "react";
import Modal from "react-responsive-modal";
import { ToastContainer, toast } from "react-toastify";

export const { Provider, Consumer } = createContext();

export class CargaProvider extends Component {
  state = {
    theme: "light",
    modalIsOpen: false,
    category: null
  };
  static async getInitialProps() {
    await new Promise(resolve => {
      setTimeout(resolve, 30000);
    });
    return {};
  }

  toggleModal = () => {
    this.setState(({ modalIsOpen }) => ({
      modalIsOpen: modalIsOpen === false ? true : false
    }));
  };

  render() {
    const value = {
      state: this.state,
      actions: {
        toggleModal: this.toggleModal
      }
    };
    return <Provider value={value}>{this.props.children}</Provider>;
  }
}
