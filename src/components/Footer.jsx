import React from "react";
import { Link } from "react-router-dom";

import { links } from "../data/links";
import { footerGalery } from "../data/footerGalery";
import { socials } from "../data/socials";

import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="flex flex-col lg:flex lg:flex-row px-5 py-5 lg:py-20 max-w-5xl mx-auto gap-20">
        <div className="flex flex-col items-center lg:items-start lg:w-1/3 gap-5">
          <Logo className />
          <div className="text-fontClrGrey lg:text-left">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur
            accusantium aspernatur sint nisi ullam ab aut molestiae, sunt
            voluptatem porro itaque esse impedit cum, ea sed incidunt
            consequatur laborum dolorem?
          </div>
          <div className="text-black flex flex-row gap-2 pb-4">
            {socials.map(social=>(
              <a href={social.link} key={social.name} className="w-7 h-7 border-2 border-primaryClr flex items-center justify-center rounded-full hover:bg-white hover:text-black hover:rotate-[360deg] duration-500 ease-in-out">
                {social.element}
              </a>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:w-2/3">
          <div className="text-black flex flex-col gap-5">
            <div className="text-2xl lg:text-3xl font-normal font-btnFont text-center lg:text-left">
              Menu
            </div>
            <ul className="flex flex-col gap-5 mb-12 font-normal lg:text-left">
              {links.map((link=>(
                <Link
                to={link.linkTo}
                key={link.linkName}
                className="hover:text-primaryClr duration-500"
              >
                {link.linkName}
              </Link>
              )))}
            </ul>
          </div>
          <div className="text-black flex flex-col gap-5">
            <div className="text-2xl lg:text-3xl font-normal font-btnFont text-center lg:text-left">
              Meet Us
            </div>
            <ul className="flex flex-col gap-5 mb-12 font-normal lg:text-left duration-500">
              <li className="hover:text-primaryClr duration-500">FAQ</li>
              <li className="hover:text-primaryClr duration-500">Menu</li>
              <li className="hover:text-primaryClr duration-500">Restaurant</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-black">
        <div className="bg-black flex flex-col lg:flex-row items-center justify-center lg:justify-between text-white font-normal p-4 gap-2 lg:max-w-5xl mx-auto">
          <div>©2023 Seven Hills. All Rights Reserved.</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
