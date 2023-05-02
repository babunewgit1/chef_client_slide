import React from "react";
import loader from "../../assets/loader.gif";

const Spinner = () => {
  return (
    <div className="loader h-screen bg-[#E6E6E6] flex items-center justify-center">
      <img className="w-[700px] h-[700px]" src={loader} alt="loader" />
    </div>
  );
};

export default Spinner;
