import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PartsDetail = () => {
  const { partId } = useParams();
  const [part, setPart] = useState({});
  console.log(part);
  useEffect(() => {
    fetch(`http://localhost:5000/parts/${partId}`)
      .then((res) => res.json())
      .then((data) => setPart(data));
  }, [partId]);
  const { _id, name, image, description, minQ, availableQ, price } = part;
  return (
    <div className="px-12">
      <div class="hero min-h-screen">
        <div class="hero-content flex-col lg:flex-row pr-16">
          <img src={image} class="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 class="text-3xl font-bold">{name}</h1>
            <p>{description}</p>
            <p>{minQ}</p>
            <p>{availableQ}</p>
            <p>${price}</p>
            <button class="btn btn-primary">Order</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartsDetail;
