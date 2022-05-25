import React from 'react';

const AddProducts = () => {
/* name
image
description
minQ
availableQ
price */

    const handleProduct = (e) => {
        e.preventDefault();
          const name = e.target.name.value;
          const description = e.target.description.value;
          const minQ = e.target.minQ.value;
          const availableQ = e.target.availableQ.value;
          const price = e.target.price.value;
          const image = e.target.image.value;
    
          const part = {
            name: name,
            description: description,
            minQ: minQ,
            availableQ: availableQ,
            price: price,
            image: image
          };
          fetch("http://localhost:5000/parts", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(part),
          })
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
              e.target.reset();
            });

      };
      return(
        <div className='px-8 mt-8'>
        <form onSubmit={handleProduct}>
        <input
          type="text"
          name="name"
          placeholder='Product Name'
          class="input input-bordered w-full max-w-xs mb-2"
        />
        <br />
        <input
          type="text"
          name="description"
          placeholder='Description'
          class="input input-bordered w-full max-w-xs mb-2"
        />
        <br />
        <input
          type="number"
          name="minQ"
          placeholder="Minimum Quantity"
          class="input input-bordered w-full max-w-xs mb-2 font-semibold"
        />
        <br />
        <input
          type="number"
          name="availableQ"
          placeholder="Available Quantity"
          class="input input-bordered w-full max-w-xs mb-2"
        />
        <br />
        <input
          type="number"
          name="price"
          placeholder="Price"
          class="input input-bordered w-full max-w-xs mb-2"
        />
        <br />
        <input
          type="text"
          name='image'
          placeholder="Product image"
          class="input input-bordered w-full max-w-xs mb-2"
        />
        <br />
    
        <input
          type="submit"
          value="Add Product"
          class="input input-bordered w-full max-w-xs btn btn-accent text-white"
        />
      </form>
        </div>
      )
  

};

export default AddProducts;