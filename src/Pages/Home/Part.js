import React from "react";

const Part = ({part}) => {
    const {name, image, description, minQ, availableQ, price} = part;
  return (
    <>
      <div class="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img
          className="w-48"
            src={image}
            alt="Album"
          ></img>
        </figure>
        <div class="card-body">
          <h2 class="card-title">{name}</h2>
          <span>{description}</span>
          <span>{minQ}</span>
          <span>{availableQ}</span>
          <span>{price}</span>
          <div class="card-actions justify-between">
            <button class="btn btn-sm btn-primary">Purchase</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Part;
