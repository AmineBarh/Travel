import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../img/Logo.png";


const Nav = ({ showBlog, showAbout }) => {
  const navigate = useNavigate();

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    const navbar = document.querySelector("nav");
    const navbarHeight = navbar ? navbar.offsetHeight : 0;

    if (section) {
      window.scrollTo({
        top: section.offsetTop - navbarHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="flex items-center justify-around w-full px-10 py-5 fixed top-0 z-50 backdrop-blur-sm text-white bg-gradient-to-b from-slate-900 to-transparent">
      <div>
        <a href="/">
        <img src={logo} alt="Logo" className="h-12"  /></a>
      </div>
      <div className="flex gap-10 justify-center items-center relative">
        <span
          onClick={() => scrollToSection("places")}
          className="relative cursor-pointer px-3 py-2 group"
        >
          <span className="absolute font-semibold -inset-5 bg-a5dhr opacity-0 hover:text-azra9 group-hover:opacity-100 transition-all duration-300"></span>
          <span className="relative z-10">Places</span>
        </span>
        {showAbout && (
          <span
            onClick={() => scrollToSection("about")}
            className="relative cursor-pointer px-3 py-2 group"
          >
            <span className="absolute font-semibold -inset-5 bg-a5dhr opacity-0 hover:text-azra9 group-hover:opacity-100 transition-all duration-300"></span>
            <span className="relative z-10">About</span>
          </span>
        )}
        {showBlog && (
          <span
            onClick={() => scrollToSection("blog")}
            className="relative cursor-pointer px-3 py-2 group"
          >
            <span className="absolute font-semibold -inset-5 bg-a5dhr opacity-0 hover:text-azra9 hover:font-semibold group-hover:opacity-100 transition-all duration-300"></span>
            <span className="relative z-10">Blog</span>
          </span>
        )}
        <span
          onClick={() => scrollToSection("contact")}
          className="relative cursor-pointer px-3 py-2 group"
        >
          <span className="absolute font-semibold -inset-5 bg-a5dhr opacity-0 hover:text-azra9 hover:font-semibold group-hover:opacity-100 transition-all duration-300"></span>
          <span className="relative z-10">Contact</span>
        </span>
        <button
          onClick={() => navigate("/take-trip")}
          className="rounded-full border-2 z-20 border-white text-white px-14 py-3 hover:bg-a5dhr hover:border-a5dhr hover:text-azra9 font-semibold transition duration-300"
        >
          Take a Trip
        </button>
      </div>
    </nav>
  );
};

export default Nav;
