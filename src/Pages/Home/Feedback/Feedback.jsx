import React from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Feedback = ({ feedbackitems }) => {
  const { client_images, rating, name, feedback } = feedbackitems;
  return (
    <div className="feedbackwrapper pb-9">
      <div className="clientImg flex items-center gap-3">
        <img
          className="w-[80px] h-[80px] object-cover rounded-full"
          src={client_images}
        />

        <div className="reating">
          <p className="text-2xl textyell font-medium">{name}</p>
          <div className="ratingwrapper flex items-end gap-4">
            <Rating style={{ maxWidth: 140 }} value={rating} readOnly />
            <p className="font-medium textyell">{rating}</p>
          </div>
        </div>
      </div>
      <div className="feedback mt-6">
        <p className="text-sm text-slate-500">
          <em>{feedback}</em>
        </p>
      </div>
    </div>
  );
};

export default Feedback;
