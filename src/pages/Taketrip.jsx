import React from "react";
import Nav from "../components/Nav";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import HotelsPage from "../components/HotelsPage";

const Taketrip = () => {
  return (
    <div>
      <Nav showBlog={false} showAbout={false} />
      <HotelsPage/>
      <Contact />
      <Footer />
    </div>
  );
};

export default Taketrip;
