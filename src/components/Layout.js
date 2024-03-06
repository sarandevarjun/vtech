import React from "react";
import Header from "./Header";
import Footer from "./Footer";

// ExampleComponent.js or any React component
import "../lib/animate/animate.min.css";
import "../lib/owlcarousel/assets/owl.carousel.min.css";
import "../css/bootstrap.min.css";
import "../css/style.css";
import Team from "../pages/team";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Team />
      <Footer />
    </>
  );
};

export default Layout;
