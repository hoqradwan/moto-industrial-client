import React, { useEffect, useState } from "react";
import Review from "./Review";

const Reviews = () => {

  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://still-lowlands-64974.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div className="px-10">
      <h1 className="text-4xl text-center text-primary font-semibold mt-32">
        Customer Reviews
      </h1>
      <div className="grid lg:grid-cols-3 grid-cols-1">
          {
              reviews.map(rev => <Review rev={rev}></Review>)
          }
      </div>
    </div>
  );
};

export default Reviews;
