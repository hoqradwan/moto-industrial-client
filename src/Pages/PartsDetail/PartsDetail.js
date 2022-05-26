import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams, Link } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const PartsDetail = () => {
  const { partId } = useParams();
  const [part, setPart] = useState({});
  const [isReload, setIsReload] = useState(false);
  const [user] = useAuthState(auth);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  useEffect(() => {
    fetch(`https://still-lowlands-64974.herokuapp.com/parts/${partId}`)
      .then((res) => res.json())
      .then((data) => setPart(data));
  }, [isReload, partId]);
  let { _id, name, image, minQ, availableQ, price } = part;

  const handleSubmitOrder = (e) => {
    e.preventDefault();
    const address = e.target.address.value;
    let quantity = e.target.quantity.value;
    if (quantity > minQ && quantity < availableQ) {
     
      const order = {
        name: name,
        address: address,
        email: user.email,
        price: price,
        customer: user.displayName,
      };
    
        fetch("https://still-lowlands-64974.herokuapp.com/orders", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(order),
        })
          .then((res) => res.json())
          .then((data) => {
            e.target.reset();
            console.log(data);
            toast.success("Order Placed Successfully");
          });
      }else{
        toast.error('Please order a valid quantity')
      }
   

    // ......................................

    /*  const updatedParts = { availableQ };
      fetch(`https://still-lowlands-64974.herokuapp.com/parts/${partId}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updatedParts),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        }); */
  };
  const handleQchange = (e) => {
    let newQ = e.target.value;

  if (newQ < minQ) {
      setError(`Please order more than ${minQ} products`);
    } else if (newQ > availableQ) {
      setError(`Please order less than ${availableQ} products`);
    } else {
      setError("");
    } 

  };
  return (
    <div className="px-12 flex justify-around items-center mt-16">
      <div class="card w-96 bg-base-100 shadow-xl image-full">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <div class="card-body">
          <h2 class="text-3xl text-white font-bold mb-3">{name}</h2>
          <h1 className="mb-4 text-xl">
            Order For <span className="font-bold">{user.displayName}</span>
          </h1>
          <p className="mb-2">{user.email}</p>
          <p className="mb-2">
            <span className="font-semibold">Minimum quantity to order: </span>
            {minQ}
          </p>
          <p className="mb-2">
            <span className="font-semibold">Available Parts: </span>
            {availableQ}
          </p>
          <p className="text-3xl font-bold text-accent mb-3">${price}</p>
        </div>
      </div>
      <div>
        <form onSubmit={handleSubmitOrder}>
          <div className="text-center">
            <input
              type="number"
              onChange={handleQchange}
              name="quantity"
              placeholder="Quantity"
              class="input input-bordered w-28 max-w-xs mb-2"
            />
            <p className="text-red-500 text-justify mb-2">{error}</p>
          </div>
          <input
            type="text"
            name="partsName"
            disabled
            value={name}
            class="input input-bordered w-96 max-w-xs mb-2"
          />
          <br />
          <input
            type="email"
            name="email"
            disabled
            value={user?.email}
            class="input input-bordered w-96 max-w-xs mb-2 font-semibold"
          />
          <br />
          <input
            type="text"
            name="address"
            placeholder="Address"
            class="input input-bordered w-96 max-w-xs mb-2"
          />
          <br />
          <input
            type="number"
            placeholder="Phone Number"
            class="input input-bordered w-96 max-w-xs mb-2"
          />
          <br />
          <input
            type="submit"
            value="Place Order"
            class="btn btn-accent w-full max-w-xs text-white"
          />
        </form>
      </div>
    </div>
  );
};

export default PartsDetail;
