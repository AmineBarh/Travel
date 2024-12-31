import React from "react";
import Nav from "../components/Nav";
import Main from "../components/Main";
import About from "../components/About";
import Blog from "../components/Blog";
import Backtop from "../components/Backtop";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Nav showBlog={true} showAbout={true} />
      <div id="places">
        <Main />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="blog">
        <Blog />
      </div>
      <Backtop />
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
