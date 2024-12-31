import React, { useEffect, useState } from "react";
import { IoArrowUpCircleSharp } from "react-icons/io5";

const Backtop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <button
        onClick={scrollToTop}
        className={`fixed bottom-5 right-5 text-4xl transition-opacity duration-300 z-50 ${
          isVisible ? "opacity-100" : "opacity-0"
        } text-black hover:text-gray-800`}
        aria-label="Go to top"
      >
        <IoArrowUpCircleSharp className="w-16 h-16" />
      </button>
    </div>
  );
};

export default Backtop;
