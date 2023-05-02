import React from "react";
import { useLoaderData } from "react-router-dom";

const ChefDetails = () => {
  const chefDetailsData = useLoaderData();

  const {
    chef_picture,
    chef_name,
    bio,
    likes_num,
    num_recipes,
    years_of_experience,
  } = chefDetailsData;

  return (
    <section id="chefDetails" className="chefDetails">
      <div className="mycontainer">
        <div className="chefbannar grid grid-cols-12 gap-7 items-center">
          <div className="chefleft col-span-5">
            <img src={chef_picture} alt={chef_name} />
          </div>
          <div className="chefRight col-span-7 ">
            <h2>
              Name : <span>{chef_name}</span>
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
  );
};

export default ChefDetails;
