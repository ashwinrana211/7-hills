import React from 'react'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import img1 from "../assets/banner-pic1.jpg"
import img2 from "../assets/banner-pic2.jpg"
import img3 from "../assets/banner-pic3.jpg"

const sliderComp = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
  
      const images = [
        img1,
        img2,
        img3,
      ];
    
      return (
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              <img
                  src={image}
                  className="absolute hidden lg:block animate-background-zoom h-full object-cover z-0"
                  alt={`slide ${index + 1}`}
              />  
              <img
                  src={image}
                  alt=""
                  className="absolute lg:hidden animate-background-zoom h-full object-cover z-0"
                />
            </div>
          ))}
        </Slider>
      );
}

export default sliderComp
