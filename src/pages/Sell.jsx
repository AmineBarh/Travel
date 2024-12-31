import React from "react";
import Nav from "../components/Nav";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Guestinfo from "../components/Guestinfo";

const Sell = () => {
  return (
    <div>
      <Nav showBlog={false} showAbout={false} />
      <Guestinfo />
      <Contact />
      <Footer />
    </div>
  );
};

export default Sell;
