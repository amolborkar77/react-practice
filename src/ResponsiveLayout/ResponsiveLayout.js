import React from "react";

import Header from "./Header";
import Nav from "./Nav";
import Main from "./Main";
import Footer from "./Footer";

import "./layout.css";

const ResponsiveLayout = () => {
  return (
    <div className="layout">
      <Header />

      <Nav />

      <Main />

      <Footer />
    </div>
  );
};

export default ResponsiveLayout;
