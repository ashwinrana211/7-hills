import React from "react";

import BorderButton from "./BorderButton";

import { FaShuttleVan, FaWifi } from "react-icons/fa";
import { MdOutlineRoomService } from "react-icons/md";
import { GiVideoCamera } from "react-icons/gi";

const ShortAbout = () => {
  let services = [
    {
      name: "Transport",
      icon: <FaShuttleVan />,
    },
    {
      name: "Dining",
      icon: <MdOutlineRoomService />,
    },
    {
      name: "Wifi",
      icon: <FaWifi />,
    },
    {
      name: "Video surveilance",
      icon: <GiVideoCamera />,
    },
  ];
  return (
    <div className="bg-white">
      <div className="max-w-5xl px-5 mx-auto grid grid-cols-2 lg:grid-cols-4 gap-10 justify-between -top-12 relative">
        {services.map((service) => (
          <div
            key={service.name}
            className="bg-formClr text-black flex flex-col items-center justify-center p-5 gap-2 h-24"
            style={{borderRadius:"100px"}}
          >
            <div className="text-4xl">{service.icon}</div>
            <div>{service.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShortAbout;
