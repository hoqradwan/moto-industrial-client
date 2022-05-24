import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Review from "./Review";

const Reviews = () => {
  /*  const { data } = useQuery('reviews', () => fetch('http://localhost:5000/reviews').then(res => res.json())); */
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div>
      <h1 className="text-4xl text-center text-accent font-semibold mt-28">
        Customer Reviews
      </h1>
      <div className="grid grid-cols-3">
          {
              reviews.map(rev => <Review rev={rev}></Review>)
          }
      </div>
    </div>
  );
};

export default Reviews;
