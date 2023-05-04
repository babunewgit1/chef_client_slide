import React from "react";

const Heading = ({ children }) => {
  return (
    <>
      <div className="chefHeading text-center mb-14">
        <h2 className="text-2xl md:text-5xl font-bold text-white uppercase">
          {children}
        </h2>
        <span className="block w-[150px] h-[5px] bgyell mx-auto my-3"></span>
      </div>
    </>
  );
};

export default Heading;
