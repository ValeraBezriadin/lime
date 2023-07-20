import React from "react";
import Head from "./Head";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Head />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
