import React from "react";
import { Link } from "react-router-dom";

import { links } from "../data/links";

const Navbar = () => {
  return (
    <nav className="hidden lg:flex md:items-center md:justify-center gap-1">
      {links.map((link) => (
        <div className="py-1 group" key={link.linkName}>
          <Link to={link.linkTo} className="py-5 px-2 md:cursor-pointer text-black font-normal hover:text-primaryClr duration-500">
            {link.linkName}
          </Link>
          {link.submenu && (
            <div className="absolute top-15 opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 hover:opacity-100 duration-300">
              <div className="overflow-hidden">
                <div className="bg-black/80 w-5 h-5 relative left-5 rotate-45 top-3"></div>
              </div>
              <div className="flex flex-col bg-black/80 p-8 rounded-2xl gap-4">
                {link.sublinks.map((sublink) => (
                  <Link
                    to={sublink.sublinkTo}
                    key={sublink.sublinkName}
                    className="text-white text-left font-normal hover:text-primaryClr duration-500"
                  >
                    {sublink.sublinkName}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </nav>
  );
};

export default Navbar;
