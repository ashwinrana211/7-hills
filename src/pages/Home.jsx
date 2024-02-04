import React from 'react'
import FreeServices from '../components/FreeServices'
import HomeHero from '../components/HomeHero'
import ShortAbout from '../components/ShortAbout'
import HimkundComp from '../components/HimkundComp'
import AroundTheHotel from '../components/AroundTheHotel'
import SunsetVillaComp from '../components/SunsetVillaComp'


const Home = () => {
  return (
    <div>
      <HomeHero/>
      <ShortAbout/>
      <HimkundComp />
      <SunsetVillaComp />
    </div>
  )
}

export default Home