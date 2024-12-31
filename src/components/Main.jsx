import React from "react";
import image2 from "../img/bg-homepagr.png";
import image3 from "../img/Slider2.png";
import image4 from "../img/photo-1707344088547-3cf7cea5ca49.jpg";

import { MdKeyboardTab } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();

  return (
    <div className="relative w-full h-screen text-white">
      <Swiper
        speed={900}
        autoplay={{
          delay: 4500,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide className="absolute top-0 left-0 w-full h-full object-cover z-0">
          <img
            src={image2}
            alt="Background"
            className="w-screen h-screen object-fill"
          />
        </SwiperSlide>
        <SwiperSlide className="absolute top-0 left-0 w-full h-full object-cover z-0">
          <img
            src={image3}
            alt="Background"
            className="w-screen h-screen object-fill"
          />
        </SwiperSlide>
        <SwiperSlide className="absolute top-0 left-0 w-full h-full object-cover z-0">
          <img
            src={image4}
            alt="Background"
            className="w-screen h-screen object-fill"
          />
        </SwiperSlide>
        <SwiperSlide className="absolute top-0 left-0 w-full h-full object-cover z-0">
          <img
            src={image2}
            alt="Background"
            className="w-screen h-screen object-fill"
          />
        </SwiperSlide>
      </Swiper>

      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-gray-900 z-10"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-gray-900 z-10"></div>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-20 space-y-6">
        <span className="text-8xl font-playfairdisplay leading-tight">
          Explore the world with <br /> exciting people
        </span>

        <p className="text-lg max-w-2xl">
          We help people find co-travelers and also structure their travel plans
        </p>

        <button
          onClick={() => navigate("/take-trip")}
          className="mt-4 rounded-full border-2 border-a5dhr text-azra9 font-semibold bg-a5dhr px-14 py-3 hover:backdrop-blur-sm hover:text-white hover:border-transparent
          transition-all delay-100 ease-in-out hover:translate-x-6 hover:bg-transparent duration-200"
        >
          <div className="inbtn flex items-center gap-2">
            Take a Trip
            <MdKeyboardTab />
          </div>
        </button>

        <hr className="w-full max-w-4xl mt-8 border-t " />
      </div>
      <div className="absolute bottom-16 w-full z-20 px-96">
        <table className="w-full text-left text-white border-collapse">
          <thead>
            <tr>
              <td className="pe-4 pb-4 text-3xl font-semibold">01</td>
              <td className="pe-4 pb-4 text-3xl font-semibold">02</td>
              <td className="pe-4 pb-4 text-3xl font-semibold">03</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="pe-4 pb-4 font-bold font-playfairdisplay">
                Choose a place, activity and time
              </td>
              <td className="pe-4 pb-4 font-bold font-playfairdisplay">
                Choose a place, activity and time
              </td>
              <td className="pe-4 pb-4 font-bold font-playfairdisplay">
                Choose a place, activity and time
              </td>
            </tr>
            <tr>
              <td className="pe-4 pb-4">
                We help people find co travellers and also structure their
                travel plans
              </td>
              <td className="pe-4 pb-4">
                We help people find co travellers and also structure their
                travel plans
              </td>
              <td className="pe-4 pb-4">
                We help people find co travellers and also structure their
                travel plans
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Main;
