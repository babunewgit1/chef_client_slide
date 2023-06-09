import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <>
      <Link to="/">
        <p className="text-4xl font-bold textyell">
          <span className="text-orange-600 uppercase">chefs</span> Hunter
        </p>
      </Link>
    </>
  );
};

export default Logo;
