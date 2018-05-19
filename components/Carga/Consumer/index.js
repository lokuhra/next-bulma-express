import React, { Fragment } from "react";
import Modal from "react-responsive-modal";
import { Consumer } from "../ContextProvider/index";

const Carga = () => (
  <Consumer>
    {({ state: { modalIsOpen }, actions: { toggleModal } }) => (
      <Fragment>
        <button onClick={() => toggleModal()}>asdasd</button>
        <Modal
          open={modalIsOpen}
          onClose={() => toggleModal()}
          center
          className={"modal"}
        >
          <div className="modal-card">
            <header className="modal-card-head">
              <p className="modal-card-title">Modal title</p>
            </header>
            <section className="modal-card-body">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                aspernatur ea eligendi illo non odio pariatur placeat possimus
                praesentium ratione. Animi corporis deleniti doloribus
                exercitationem id officiis porro reiciendis repudiandae!
              </p>
            </section>
            <footer className="modal-card-foot">
              <button className="button is-success" onClick={() => toggleModal()}>
                ok
              </button>
            </footer>
          </div>
        </Modal>
      </Fragment>
    )}
  </Consumer>
);

export default Carga;
