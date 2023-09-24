import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import "./layout.css";
const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main className="main">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
