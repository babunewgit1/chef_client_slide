import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Heading from "../../../Shared/Heading/Heading";
import { FaHeart } from "react-icons/fa";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import toast, { Toaster } from "react-hot-toast";

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
              <img
                className="w-full h-[500px] object-cover object-center"
                src={chef_picture}
                alt={chef_name}
              />
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

      <section id="recepiDetails" className="recepiDetails">
        <div className="mycontainer">
          <div className="recepiWrapper">
            <Heading>
              {chef_name}'s <span className="textyell">recipes </span>
            </Heading>
          </div>
          {recipes.map((resItem, index) => {
            return (
              <div key={index} className="recipesWrapper">
                <div className="resLeft">
                  <img src={resItem?.img} alt="images not found" />
                </div>
                <div className="resRight">
                  <h3>{resItem?.name}</h3>
                  <div className="ingradient">
                    <h3>Ingredients: </h3>
                    <span></span>
                    <ul>
                      {resItem?.ingredients.map((item, index) => {
                        return (
                          <li key={index}>
                            {index + 1}. {item}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  <div className="ingradient">
                    <h3>Cooking method: </h3>
                    <span></span>
                    <ul>
                      {resItem?.method.map((item, index) => {
                        return (
                          <li key={index}>
                            {index + 1}. {item}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  <div className="reting">
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
