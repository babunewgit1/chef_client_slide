import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Heading from "../../../Shared/Heading/Heading";
import { FaHeart } from "react-icons/fa";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import toast, { Toaster } from "react-hot-toast";
import LazyLoad from "react-lazy-load";

const ChefDetails = () => {
  const chefDetailsData = useLoaderData();
  const [heart, setHeart] = useState([]);

  const handelHeart = (index) => {
    const newIndex = [...heart, index];
    setHeart(newIndex);
    toast.success("Successfully added in favourite!");
  };

  const {
    chef_picture,
    chef_name,
    bio,
    likes_num,
    num_recipes,
    years_of_experience,
    recipes,
  } = chefDetailsData;

  return (
    <>
      <section id="chefDetails" className="chefDetails py-24">
        <div className="mycontainer">
          <Heading>
            About <span className="textyell">{chef_name}</span>
          </Heading>
          <div className="chefbannar grid grid-cols-12 gap-7 items-center">
            <div className="chefleft col-span-5">
              <LazyLoad>
                <img
                  className="w-full h-[500px] object-cover object-center"
                  src={chef_picture}
                  alt={chef_name}
                />
              </LazyLoad>
            </div>
            <div className="chefRight col-span-7 ">
              <h2 className="text-4xl font-semibold textyell">
                Name : <span className="text-white">{chef_name}</span>
              </h2>
              <p>
                Bio : <span>{bio}</span>
              </p>
              <div className="likes">
                <p>
                  Likes : <span>{likes_num}</span>
                </p>
                <p>
                  Recipes : <span>{num_recipes} items</span>
                </p>
                <p>
                  Experience : <span>{years_of_experience} years</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="recepiDetails" className="recepiDetails pb-20">
        <div className="mycontainer">
          <div className="recepiWrapper">
            <Heading>
              {chef_name}'s <span className="textyell">recipes </span>
            </Heading>
          </div>
          {recipes.map((resItem, index) => {
            return (
              <div
                key={index}
                className="recipesWrapper grid grid-cols-12 gap-6 mt-7"
              >
                <div className="resLeft col-span-5">
                  <LazyLoad>
                    <img
                      className="block w-full h-full object-cover"
                      src={resItem?.img}
                      alt="images not found"
                    />
                  </LazyLoad>
                </div>
                <div className="resRight col-span-7 p-6">
                  <h3 className="text-3xl font-semibold textyell">
                    {resItem?.name}
                  </h3>
                  <div className="ingradient mt-3">
                    <h3 className="text-xl font-semibold">Ingredients : </h3>
                    <span className="block w-[50px] h-[3px] bgyell"></span>
                    <ul className="flex flex-wrap pl-3">
                      {resItem?.ingredients.map((item, index) => {
                        return (
                          <li className=" ml-3" key={index}>
                            {index + 1}. {item}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  <div className="ingradient mt-3">
                    <h3 className="text-xl font-semibold">Cooking method: </h3>
                    <span className="block w-[50px] h-[3px] bgyell"></span>
                    <ul className=" pl-3">
                      {resItem?.method.map((item, index) => {
                        return (
                          <li className=" ml-3 inline" key={index}>
                            {index + 1}. {item}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  <div className="reting flex items-center justify-between">
                    <div className="ratingwrapper flex items-end gap-4">
                      <Rating
                        style={{ maxWidth: 140 }}
                        value={Math.round(resItem?.rating)}
                        readOnly
                      />
                      <p className="font-medium textyell">{resItem?.rating}</p>
                    </div>
                    <div className="favourite">
                      <button
                        disabled={heart.includes(index)}
                        onClick={() => handelHeart(index)}
                      >
                        <FaHeart className="text-2xl heatIcon text-red-600 cursor-pointer"></FaHeart>
                      </button>
                      <Toaster />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default ChefDetails;
