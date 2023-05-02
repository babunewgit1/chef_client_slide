import React from "react";
import { useLoaderData } from "react-router-dom";

const ChefDetails = () => {
  const chefDetailsData = useLoaderData();
  console.log(chefDetailsData);
  return <div>this is chef details page</div>;
};

export default ChefDetails;
