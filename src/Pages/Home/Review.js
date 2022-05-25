import React from "react";

const Review = ({ rev }) => {
  const { rating, review, userName } = rev;
  return (
    <div className="mt-8 ">
      <div class="card w-96 bg-base-100 shadow-md">
        <div class="card-body">
          <h2 class="card-title mb-2">{userName}</h2>
          <p>
            {" "}
            <span className="font-semibold">Message: </span>
            {review}
          </p>
          <p className=" font-semibold">
            Rating: <span className="text-warning">{rating}</span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Review;
