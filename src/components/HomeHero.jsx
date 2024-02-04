import React from "react";

import ColorButton from "./ColorButton"

import heroImg from "../assets/banner4.jpg";
import heroImgMobile from "../assets/home-hero-mobile.jpg";

const HomeHero = () => {
  return (
    <div className="w-full min-h-screen relative overflow-hidden bg-black">
      {/* bg-cover bg-center bg-hero animate-background-zoom */}
      <img
        src={heroImg}
        alt=""
        className="absolute hidden lg:block animate-background-zoom h-full object-cover z-0"
      />
      <img
        src={heroImgMobile}
        alt=""
        className="absolute lg:hidden animate-background-zoom h-full object-cover z-0"
      />
      <div className="absolute z-5 w-full h-full bg-black/40">
        <div className="max-w-5xl mx-auto px-5 pt-20 lg:pt-28 flex flex-col justify-center h-full lg:flex-row lg:items-center gap-10">
          <div className="lg:w-7/12 flex flex-col gap-4">
            <div className="flex gap-1 text-primaryClr bg-white/50 w-fit p-1 rounded-full">
            </div>
            <div className="text-left text-3xl lg:text-5xl font-btnFont text-white font-normal">Welcome to Seven Hills</div>
            <div className="text-left text-md w-11/12 text-white font-normal  hidden lg:block">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui nesciunt incidunt aliquid quis provident</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
