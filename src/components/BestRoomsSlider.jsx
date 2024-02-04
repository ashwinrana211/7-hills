import React, {useEffect, useState} from 'react'

import BestRoomCard from './BestRoomCard';

import { bestRooms } from "../data/bestRooms";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const BestRoomsSlider = () => {
      // states for active slider and number of sliders on screen
  const [activeSlider, setActiveSlider] = useState(0);
  const [slidersNumber, setSlidersNumber] = useState(1);

  // useEffect hook to handle screen size at page load
  useEffect(() => {
    handleScreenSizes();
  }, []);

  // function to handle number of cards depending on screen size
  const handleScreenSizes = () => {
    if (window.innerWidth < 600) {
      setSlidersNumber(1);
    } else if (window.innerWidth < 1200) {
      setSlidersNumber(2);
    } else if (window.innerWidth < 1600) {
      setSlidersNumber(3);
    } else {
      setSlidersNumber(4);
    }
  };


  // handle shift to left by one
  const handleShiftLeft = () => {
    if (activeSlider === 0) {
      setActiveSlider(0);
    } else {
      setActiveSlider(activeSlider - 1);
    }
  };

  //handles shift to right by one
  const handleShiftRight = () => {
    if (activeSlider === bestRooms.length - slidersNumber) {
      setActiveSlider(activeSlider);
    } else {
      setActiveSlider(activeSlider + 1);
    }
  };

  // slice arrays for card mapping
  let modifiedSlides = bestRooms.slice(
    activeSlider,
    activeSlider + slidersNumber
  );
  return (
    <div className='mt-5'>
      <div className="flex items-center justify-between gap-5 mb-5 w-full">
        {modifiedSlides.map((room) => (
          <div key={room.name}>
            <BestRoomCard 
                name={room.name} 
                description={room.description}
                price={room.price}
                adults={room.adults}
                size={room.size}
                linkTo={room.linkTo}
                img={room.img}
            />
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between max-w-5xl mx-auto pb-5 px-5">
        <div className="text-black">
            {activeSlider+1}/{bestRooms.length}
        </div>
        <div>
          <button onClick={handleShiftLeft}>
            <FaChevronLeft size={30} fill="black" />
          </button>
          <button onClick={handleShiftRight}>
            <FaChevronRight size={30} fill="black" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default BestRoomsSlider