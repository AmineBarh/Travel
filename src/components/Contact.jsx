import React from "react";
import { useLocation } from "react-router-dom";
import { IoStar } from "react-icons/io5";
import img1 from "../img/Frame 18.png";
import img6 from "../img/Frame 24.png";
import img7 from "../img/Vector 1.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { MdKeyboardTab } from "react-icons/md";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const Contact = () => {
  const location = useLocation();
  const isTakeTrip = location.pathname === "/take-trip";

  return (
    <div>
      {!isTakeTrip && (
        <div>
          <div className="des flex flex-col items-center justify-center px-96 ">
            <p className="text-2xl font-semibold font-inter pt-12">
              Testimonials
            </p>
            <p className="text-4xl font-bold font-playfairdisplay text-[#0E3D4D] mb-20 ">
              Don't take our word for it
            </p>
          </div>
          <Swiper
            speed={600}
            autoplay={{
              delay: 2500,
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className="my-10 mySwiper"
            spaceBetween={0}
            slidesPerView={1}
          >
            <SwiperSlide>
              <div className="Testimonials px-96 mb-28">
                <div className="trips flex flex-col items-center justify-center mt-28">
                  <p className="font-gothic text-azra9 text-center">
                    "1 I had the most incredible vacation experience thanks to
                    the amazing team at LOVEEE Travel Agency! From the moment I
                    contacted them, their friendly and knowledgeable staff
                    helped me plan the perfect itinerary. They took care of
                    every detail, from booking flights and accommodations to
                    arranging local tours and activities.”
                  </p>
                  <div className="mt-5 stars flex items-center justify-center gap-1 fill-orange-400">
                    <IoStar className="fill-orange-400" />
                    <IoStar className="fill-orange-400" />
                    <IoStar className="fill-orange-400" />
                    <IoStar className="fill-orange-400" />
                    <IoStar className="fill-orange-400" />
                  </div>
                  <img src={img6} alt="" className="my-5" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="Testimonials px-96 mb-28">
                <div className="trips flex flex-col items-center justify-center mt-28">
                  <p className="font-gothic text-azra9 text-center">
                    "2 I had the most incredible vacation experience thanks to
                    the amazing team at LOVEEE Travel Agency! From the moment I
                    contacted them, their friendly and knowledgeable staff
                    helped me plan the perfect itinerary. They took care of
                    every detail, from booking flights and accommodations to
                    arranging local tours and activities.”
                  </p>
                  <div className="mt-5 stars flex items-center justify-center gap-1 fill-orange-400">
                    <IoStar className="fill-orange-400" />
                    <IoStar className="fill-orange-400" />
                    <IoStar className="fill-orange-400" />
                    <IoStar className="fill-orange-400" />
                    <IoStar className="fill-orange-400" />
                  </div>
                  <img src={img1} alt="" className="my-5" />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      )}

      <div className="relative contact bg-[#112F38] opacity-95 flex flex-col items-center ">
        <img src={img7} alt="" className="absolute top-0" />

        <div className="contact-container pt-28 pb-7 font-playfairdisplay font-semibold text-5xl text-white">
          Ready to go?
        </div>
        <div className="contact-container mb-4 font-playfairdisplay font-semibold text-5xl text-white">
          Give us a quick call
        </div>
        <button className="mt-4 mb-28 rounded-full border-2 hover:border-[#076660] border-a5dhr hover:bg-gradient-to-r hover:from-[#076660] hover:via-[#0a3b38] hover:to-[#076660] text-azra9 font-semibold bg-a5dhr px-14 py-3 hover:backdrop-blur-sm hover:text-white transition-all duration-200 ease-in-out">
          <div className="inbtn flex items-center gap-2">
            Call our Customer Service
            <MdKeyboardTab />
          </div>
        </button>
      </div>
    </div>
  );
};

export default Contact;
