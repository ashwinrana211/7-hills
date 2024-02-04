import React from "react";
import BestRoomsSlider from "./BestRoomsSlider";

import BorderButton from "./BorderButton";

const OurBestRooms = () => {
  return (
    <div className="bg-lightBlackClr">
      <div className=" pt-20 px-5 max-w-5xl mx-auto flex flex-col lg:flex-row items-start justify-between">
        <div>
          <div className="text-4xl lg:text-6xl text-left w-full font-btnFont text-white pb-5">
            Our Best Rooms
          </div>
          <div className="text-left text-fontClrGrey font-semibold mb-10 w-full lg:w-3/4">
            Consectetur adipisicing elit. Nihil, illum voluptate eveniet ex
            fugit ea delectus, sed voluptatem.
          </div>
        </div>
        <BorderButton text="all rooms" link="/" />
      </div>
      <div className="px-5">
        <BestRoomsSlider />
      </div>
    </div>
  );
};

export default OurBestRooms;
