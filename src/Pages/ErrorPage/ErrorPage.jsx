import React from "react";
import error from "../../assets/error.jpg";

const ErrorPage = () => {
  return (
    <div className="error bg-[#FFFFFF] h-screen flex items-center justify-center">
      <img className="block w-[700px]" src={error} alt="Error page " />
    </div>
  );
};

export default ErrorPage;
