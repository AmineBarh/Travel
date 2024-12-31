import React from "react";
import img1 from "../img/Location widget 1.png";
import img2 from "../img/Location widget 2.png";
import img3 from "../img/Location widget 3.png";
import img4 from "../img/Location widget 4.png";
import img5 from "../img/Blog-pic.png";
import bed from "../img/Bed.png";
import car from "../img/PoliceCar.png";
import frame1 from "../img/Frame 11.png";
import frame2 from "../img/Frame 12.png";
import frame3 from "../img/Frame 13.png";
import frame4 from "../img/Frame 16.png";
import frame5 from "../img/Frame 17.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination } from "swiper/modules";
import { MdKeyboardTab } from "react-icons/md";
import Atropos from "atropos/react";
import "atropos/css";
import { useNavigate } from "react-router";

const Blog = () => {
  const navigate = useNavigate();
  return (
    <div className="p-20 mb-20  bg-[#F3F3F3]">
      <p className="text-azra9 font-medium font-inter text-2xl mb-3">
        Where do you want to go
      </p>
      <div className="swipingbtn">
        <p className="text-[#0E3D4D] font-bold font-playfairdisplay text-4xl ">
          Popular Destinations
        </p>
      </div>
      <Swiper
        className="my-10 mySwiper"
        slidesPerView={5}
        spaceBetween={40}
        loop={true}
        zoom={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
      >
        <SwiperSlide>
          <img src={img1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="" />
        </SwiperSlide>
      </Swiper>
      <p className="text-azra9 font-inter text-2xl mb-3">
        Where do you want to go
      </p>
      <div className="swipingbtn flex items-center justify-between ">
        <p className="text-[#0E3D4D] font-black font-playfairdisplay text-4xl mb-8 ps-4 ">
          Let us worry about your plans, Just get packed
        </p>
        <button className="mt-4 rounded-full border-2 border-a5dhr text-azra9 font-semibold bg-a5dhr px-14 py-3 hover:backdrop-blur-sm hover:text-white hover:border-[#076660] transition-all delay-100 ease-in-out hover:translate-x-6 hover:-translate-y-6 hover:-rotate-6 hover:bg-[#076660]  duration-200">
          <div
            className="inbtn flex items-center gap-2"
            onClick={() => navigate("/take-trip")}
          >
            Take a Trip
            <MdKeyboardTab />
          </div>
        </button>
      </div>
      <div className="flex justify-start items-center gap-32">
        <img src={img5} alt="" />
        <div className="content ">
          <div className="part1 mb-5">
            <p>
              <img src={car} alt="" className="my-3" />
            </p>
            <p className="text-4xl font-semibold font-playfairdisplay text-azra9">
              Rent a car
            </p>
            <p className="text-2xl font-inter ">
              Lorem ipsum dolor sit amet consecteur <br /> fin dren
            </p>
            <div className="letgo flex items-center gap-1 transition-colors hover:translate-x-1 hover:text-a5dhr duration-200 cursor-pointer">
              <p className="font-semibold underline text-xl font-gothic  ">
                Let's Go
              </p>
              <MdKeyboardTab />
            </div>
          </div>
          <div className="part2 pt-5">
            <p>
              <img src={bed} alt="" className="my-3" />
            </p>
            <p className="text-4xl font-semibold font-playfairdisplay text-azra9">
              Get a hotel
            </p>
            <p className="text-2xl font-inter ">
              Lorem ipsum dolor sit amet consecteur <br /> fin dren
            </p>
            <div className="letgo flex items-center gap-1 transition-colors hover:translate-x-1 hover:text-a5dhr duration-200 cursor-pointer">
              <p className="font-semibold underline text-xl font-gothic  ">
                Let's Go
              </p>
              <MdKeyboardTab />
            </div>
          </div>
        </div>
      </div>
      <div className="trips flex flex-col items-center justify-center mt-28">
        <p className="text-2xl font-semibold font-inter">Trip Gallery</p>
        <p className="text-4xl font-bold font-playfairdisplay text-[#0E3D4D] mb-28 ">
          Completed Journey
        </p>
        <div className="images">
          <div className="grid grid-cols-3 grid-rows-2 gap-4">
            <div>
              <img src={frame1} alt="" />
            </div>

            <div className="col-span-2">
              <Atropos className="my-atropos">
                <img src={frame2} alt="" />
              </Atropos>
            </div>
            <div className="row-start-2">
              <img src={frame3} alt="" />
            </div>
            <div className="row-start-2">
              <Atropos className="atropos-scale">
                <img src={frame4} alt="" />
              </Atropos>
            </div>
            <div className="row-start-2">
              <img src={frame5} alt="" />
            </div>
          </div>
        </div>
        <button className="mb-10 mt-12 rounded-full border-2 border-a5dhr text-azra9 font-semibold bg-a5dhr px-14 py-3 hover:backdrop-blur-sm hover:text-white hover:border-[#076660] transition-all delay-100 ease-in-out duration-300 hover:bg-[#076660] ">
          <div className="inbtn flex items-center gap-2 " onClick={() => navigate("/take-trip")}>
            See all Journeys
            <MdKeyboardTab className="transition hover:translate-x-2 duration-300" />
          </div>
        </button>
      </div>
    </div>
  );
};

export default Blog;
