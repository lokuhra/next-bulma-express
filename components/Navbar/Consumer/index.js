import React, {Fragment} from "react";

import { Spin } from 'react-burgers'
import Link from '../partials/Link'
import Logo from '../partials/Logo'

import { Consumer } from "../ContextProvider/index";

const Counter = () => (
  <Consumer>
    {({ state: { isToggleNavBar }, actions: { toggleNavBar} }) => (
      <Fragment>
        <nav className="navbar is-transparent">
          <div className="navbar-brand">
              <Logo/>
            <div
              className="navbar-burger burger"
            >
              <Spin active={isToggleNavBar} onClick={()=>toggleNavBar()}/>
            </div>
          </div>
          <div className={`navbar-menu ${isToggleNavBar?"is-flex-touch":""}`}>
            <div className="navbar-start">
              <Link href={"/"} value={"Home"} />
              <Link href={"/section-1"} value={"Section 1"} />
              <Link href={"/section-2"} value={"Section 2"} />
              </div>
            </div>
        </nav>
      </Fragment>
    )}
  </Consumer>
);

export default Counter;
