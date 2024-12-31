import React from "react";
import Marquee from "react-fast-marquee";
import img from "../img/Logo.png";
import plane from "../img/Airplane.png";
import check from "../img/ShieldCheck.png";
import setting from "../img/Faders.png";
// import Atropos from "atropos/react";
// import "atropos/css";

const About = () => {
  return (
    <>
      <div className="z-40 bg-a5dhr relative">
        <div className="marquee rotate-2">
          <Marquee
            className="bg-gradient-to-l from-azra9 to-a5dhr py-4 h-full w-full absolute top-0 z-50"
            pauseOnHover
            speed={100}
            autoFill="true"
          >
            <div>
              <p className="text-white font-semibold first-letter:capitalize px-20 text-4xl font-gothic flex gap-4 items-center">
                With <img src={img} alt="logo" className="h-16" />
              </p>
            </div>
            <div>
              <p className="text-white font-semibold first-letter:capitalize px-20 text-4xl font-gothic ">
                explore
              </p>
            </div>
            <div>
              <p className="text-white font-semibold first-letter:capitalize px-20 text-4xl font-gothic ">
                adventure
              </p>
            </div>
            <div>
              <p className="text-white font-semibold first-letter:capitalize px-20 text-4xl font-gothic ">
                luxury
              </p>
            </div>
            <div>
              <p className="text-white font-semibold first-letter:capitalize px-20 text-4xl font-gothic cursor-pointer">
                enjoy
              </p>
            </div>
          </Marquee>
        </div>
      </div>
      <div className="w-full z-20 px-96 py-36 bg-mchak7l">
        <table className="w-full text-left text-white border-collapse">
          <thead>
            <tr>
              <td className="pe-4 pb-4 text-3xl font-semibold">
                <img
                  src={plane}
                  className="transition hover:-translate-y-52 duration-300 ease-in-out"
                  alt="pic"
                />
              </td>
              <td className="pe-4 pb-4 text-3xl font-semibold">
                <img src={check} alt="pic" />
              </td>
              <td className="pe-4 pb-4 text-3xl font-semibold">
                <img src={setting} alt="pic" />
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="pe-5 pb-5 font-bold text-2xl font-montserrat">
                Enjoy some flexibility
              </td>
              <td className="pe-5 pb-5 font-bold text-2xl font-montserrat">
                Over 2 million active trips
              </td>
              <td className="pe-5 pb-5 font-bold text-2xl font-montserrat">
                24/7 customer support
              </td>
            </tr>
            <tr>
              <td className="pe-4 pb-4">
                Stays with flexible cancelation make it easy to re-book if your
                plans change
              </td>
              <td className="pe-4 pb-4">
                Stays with flexible cancelation make it easy to re-book if your
                plans change
              </td>
              <td className="pe-4 pb-4">
                Stays with flexibl cancelation make it easy to re-book if your
                plans change
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default About;
