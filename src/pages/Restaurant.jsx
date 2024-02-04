import React from 'react'

import RestaurantGallery from '../components/RestaurantGallery'
import RestaurantHero from '../components/RestaurantHero'
import RestaurantMenu from '../components/RestaurantMenu'


const Restaurant = () => {
  return (
    <div>
      <RestaurantHero />
      <RestaurantMenu />
      <RestaurantGallery />
    </div>
  )
}

export default Restaurant