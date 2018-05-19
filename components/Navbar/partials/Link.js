import React from "react";
import Link from "next/link";

export default ({href,value}) => (
        <Link href={href}>
          <a className="navbar-item" href="https://bulma.io/">
            {value}
          </a>
        </Link>
);