import React from "react";
import { FaThumbsUp, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazy-load";

const ChefCard = ({ chef }) => {
  const {
    id,
    chef_picture,
    chef_name,
    years_of_experience,
    num_recipes,
    likes_num,
  } = chef;
  return (
    <div className=" bg-slate-950 mb-5 md:mb-0 text-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="cardImg">
        <LazyLoad>
          <img
            className="rounded-t-lg h-[400px] w-full object-cover"
            src={chef_picture}
            alt={chef_name}
          />
        </LazyLoad>
      </div>
      <div className="p-5">
        <h5 className=" text-3xl font-medium tracking-tight textyell dark:text-white">
          {chef_name}
        </h5>
        <p className="mb-3 text-xl font-normal text-white">
          Experience :
          <span className="textyell font-medium">
            {years_of_experience} Years
          </span>
        </p>
        <div className="recepi flex items-center justify-between">
          <p>
            Recipes :
            <span className="textyell font-medium"> {num_recipes} items</span>
          </p>
          <p className="flex gap-2 items-center">
            <FaThumbsUp></FaThumbsUp>
            <span className="textyell font-medium">{likes_num}</span>
          </p>
        </div>
        <button className="text-white bgyell w-full px-5 py-3 mt-8">
          <Link
            className="flex items-center justify-between"
            to={`/chef/${id}`}
          >
            View Recipes <FaArrowRight></FaArrowRight>
          </Link>
        </button>
      </div>
    </div>
  );
};

export default ChefCard;
