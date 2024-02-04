import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="flex items-center justify-center">
      <Link to="/">
        <div className="text-black font-logoFont text-3xl">Seven Hills</div>
      </Link>
    </div>
  );
};

export default Logo;
