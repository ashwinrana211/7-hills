import React from 'react'
import { Link } from 'react-router-dom'

const ColorButton = ({text, link}) => {
  return (
    <Link to={link} className='bg-primaryClr hover:bg-primaryDarker py-5 px-10 text-white hover:text-black font-btnFont uppercase duration-500'>
      {text}
    </Link>
  )
}

export default ColorButton