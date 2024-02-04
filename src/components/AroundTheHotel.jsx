import React from 'react'

import BorderButton from "./BorderButton"
import ColorButton from "./ColorButton"

import img1 from "../assets/service-1.jpg"
import img2 from "../assets/service-2.jpg"
import img3 from "../assets/service-3.jpg"

const AroundTheHotel = () => {
    let services = [
        {
            img:img1,
            tag:"Free",
            name:"Gym",
            description:"Image for cattle earth. May one Which life divide sea. Commodi soluta minima nemo,…",
            linkTo:"/"
        },
        {
            img:img2,
            tag:"Free",
            name:"Born fire",
            description:"Image for cattle earth. May one Which life divide sea. Commodi soluta minima nemo,…",
            linkTo:"/"
        },
        {
            img:img3,
            tag:"Paid",
            name:"Lounge Bar",
            description:"Image for cattle earth. May one Which life divide sea. Commodi soluta minima nemo,…",
            linkTo:"/"
        },
    ]

  return (
    <div className="bg-lightBlackClr">
      <div className=" pt-20 px-5 max-w-5xl mx-auto flex flex-col lg:flex-row items-start justify-between">
        <div>
          <div className="text-4xl lg:text-6xl text-left w-full font-btnFont text-white pb-5">
            Around The Hotel
          </div>
          <div className="text-left text-fontClrGrey font-semibold mb-10 w-full lg:w-3/4">
            Consectetur adipisicing elit. Nihil, illum voluptate eveniet ex
            fugit ea delectus, sed voluptatem.
          </div>
        </div>
        <ColorButton text="all services" link="/" />
      </div>
      <div className="px-5 grid grid-cols-1 lg:grid-cols-3 gap-5 max-w-5xl mx-auto pb-10">
        {services.map((service)=>(
            <div key={service.name} className='w-full h-92 overflow-hidden relative group'>
                <img src={service.img} alt="" className='h-full '/>
                <div className='bg-black w-[90%] absolute bottom-5 left-[5%] h-20 group-hover:h-64 overflow-hidden duration-500'>
                    <div className='text-white font-btnFont text-3xl font-normal p-5'>{service.name}</div>
                    <div className='px-5 text-fontClrGrey font-normal text-md hidden group-hover:block'>{service.description}</div>
                    <div className='py-10 hidden group-hover:block'>
                      <ColorButton  text="read more" link="/" />
                    </div>
                </div>
            </div>
        ))}
        
      </div>
    </div>
  )
}

export default AroundTheHotel