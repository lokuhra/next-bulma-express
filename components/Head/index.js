import React from "react";
import Head from "next/head";

export default ({ title }) => (
  <Head>
    <title>{title}</title>
    <meta charSet="utf-8" />
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <link rel="stylesheet" href="../../static/style.css" />

  </Head>
);
