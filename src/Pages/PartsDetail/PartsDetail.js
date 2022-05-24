import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams, Link } from "react-router-dom";
import auth from "../../firebase.init";

const PartsDetail = () => {
  const { partId } = useParams();
  const [part, setPart] = useState({});
  const [q, setQ] = useState(0);
  const [isReload, setIsReload] = useState(false);
  const [user] = useAuthState(auth);
  console.log(user);
  console.log(user?.displayName);
  useEffect(() => {
    fetch(`http://localhost:5000/parts/${partId}`)
      .then((res) => res.json())
      .then((data) => setPart(data));
  }, [isReload, partId]);
  let { _id, name, image, description, minQ, availableQ, price } = part;

  const handleOrder = (e) => {
    e.preventDefault();

    //.................................................
    let orderQ = e.target.number.value;
    console.log(orderQ);
    if (orderQ > minQ && orderQ < availableQ) {
      const address = e.target.address.value;
      const quantity = e.target.number.value;

      const order = {
        name: name,
        address: address,
        quantity: quantity,
        email: user.email,
        price: price
      };
      fetch("http://localhost:5000/orders", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(order),
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          e.target.reset();
          setIsReload(!isReload);
        });

      // ......................................
      setQ(orderQ);
      availableQ = availableQ - orderQ;
      const updatedParts = { availableQ };
      fetch(`http://localhost:5000/parts/${partId}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updatedParts),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });
    }
    else{
      alert('You cannot order parts less than minimum quantity')
    }
  };
  return (
    <div className="px-12">
      <div class="hero min-h-screen">
        <div class="hero-content flex-col lg:flex-row">
          <img src={image} class="max-w-sm rounded-lg mr-16" />
          <div>
            <h1 class="text-3xl font-bold mb-3">{name}</h1>
            <h1 className="mb-4 text-xl">Order For <span className="font-bold">{user.displayName}</span></h1>
            <p className="mb-2">{description}</p>
            <p className="mb-2">
              <span className="font-semibold">Minimum quantity to order: </span>
              {minQ}
            </p>
            <p className="mb-2">
              <span className="font-semibold">Available Parts: </span>
              {availableQ}
            </p>
            <p className="text-3xl font-bold text-emerald-600 mb-3">${price}</p>
            <br />
          </div>
        </div>
      </div>
      <div className="text-center">
        <form onSubmit={handleOrder}>
          <input
            type="text"
            name="partsName"
            disabled
            value={name}
            class="input input-bordered w-full max-w-xs mb-2"
          />
          <br />
          <input
            // onChange={handleOrderQ}
            type="number"
            name="number"
            class="input input-bordered w-full max-w-xs mb-2"
          />
          <br />
          <input
            type="email"
            name="email"
            disabled
            value={user?.email}
            placeholder="Type here"
            class="input input-bordered w-full max-w-xs mb-2 font-semibold"
          />
          <br />
          <input
            type="text"
            name="address"
            placeholder="Address"
            class="input input-bordered w-full max-w-xs mb-2"
          />
          <br />
          <input
            type="number"
            placeholder="Phone Number"
            class="input input-bordered w-full max-w-xs mb-2"
          />
          <br />

          <input
            type="submit"
            value="Place Order"
            class="input input-bordered w-full max-w-xs btn btn-primary"
          />
        </form>
      </div>
    </div>
  );
};

export default PartsDetail;
