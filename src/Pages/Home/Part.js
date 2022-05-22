import React from "react";
import { useNavigate } from "react-router-dom";

const Part = ({ part }) => {
  const { _id, name, image, description, minQ, availableQ, price } = part;
  const navigate = useNavigate();
  const navigateToPartsDetail = (id) => {
    navigate(`/parts/${id}`);
  };
  return (
    <>
      <div class="card lg:card-side bg-base-100 shadow-xl mb-5">
        <figure>
          <img className="w-64" src={image} alt="Album"></img>
        </figure>
        <div class="card-body">
          <h2 class="text-2xl font-bold">{name}</h2>
          <span>{description}</span>
          <span>{minQ}</span>
          <span>{availableQ}</span>
          <span>${price}</span>
          <div class="justify-center mt-3">
            <button
              onClick={() => {
                navigateToPartsDetail(_id);
              }}
              class="btn btn-sm btn-primary"
            >
              Purchase
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Part;
