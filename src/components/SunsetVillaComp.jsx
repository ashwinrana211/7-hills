import React from 'react'

import BorderButton from "./BorderButton";
import ColorButton from "./ColorButton";
import img2 from "../assets/Himkund cottage.jpg";
import SunsetVillaSlider from './SunsetVillaSlider';

const SunsetVillaComp = () => {
  return (
    <>
        <div className="max-w-5xl  px-5 mx-auto flex gap-5 flex-wrap">
        <div className="flex flex-col-reverse lg:flex-row gap-5">
          <div className="flex flex-col items-center justify-center gap-5 w-full lg:w-1/2 ">
            <div  className="text-4xl text-left w-full font-btnFont text-black">Sunset Villa by 7 Hills</div>
            <div className="text-left text-fontClrGrey font-normal">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est
              consequatur quos dolore! Laudantium, impedit maiores odit nemo
              necessitatibus consequatur distinctio delectus vel ratione quis.
              Quae assumenda quaerat facere illum mollitia.
            </div>
            <div className="flex items-left w-full my-5">
                <BorderButton text="choose a room" link="/"/>
            </div>
          </div>
          <div  className="lg:w-1/2">
            <img src={img2} alt=""  className="w-full overflow-hidden"/>
          </div>
        </div>
      </div>
    <div className="bg-navbarClr2 my-10">
      <div className=" pt-20 px-5 max-w-5xl mx-auto flex flex-col lg:flex-row items-start justify-between">
        <div>
          <div className="text-4xl lg:text-6xl text-left w-full font-btnFont text-black pb-5">
             Available rooms
          </div>
          <div className="text-left text-fontClrGrey font-semibold mb-10 w-full lg:w-3/4">
            Consectetur adipisicing elit. Nihil, illum voluptate eveniet ex
            fugit ea delectus, sed voluptatem.
          </div>
        </div>
        <ColorButton text="book rooms" link="/" />
      </div>
      <div className="px-5">
        <SunsetVillaSlider />
      </div>
    </div>
    </>
  )
}

export default SunsetVillaComp
