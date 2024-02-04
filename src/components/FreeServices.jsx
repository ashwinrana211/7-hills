import React from 'react'
import FreeServicesSlider from './FreeServicesSlider'

const FreeServices = () => {
  return (
    <div  className="bg-white pt-20 px-5">
        <div className="text-4xl lg:text-6xl text-center w-full font-btnFont text-black pb-5">
            Seven Hills is waiting for you
        </div>
        <div className="text-center text-fontClrGrey font-semibold mb-10">
            Consectetur adipisicing elit. Nihil, illum voluptate eveniet ex fugit ea delectus, sed voluptatem.
        </div>
        <div>
            <FreeServicesSlider/>
        </div>
    </div>
  )
}

export default FreeServices