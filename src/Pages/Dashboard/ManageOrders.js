import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';

const ManageOrders = () => {
   const [orders, setOrders] = useState([]);
   useEffect(()=>{
       fetch('http://localhost:5000/orders')
       .then(res => res.json())
       .then(data => setOrders(data))
   },[])
   console.log(orders)
   const handleOrderCancel = (id) => {
    const proceed = window.confirm("Delete product from your orders?");
    if (proceed) {
    fetch(`http://localhost:5000/orders/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
       
          const remaining = orders.filter((order) => order._id !== id);
          setOrders(remaining);
       
      });
    }
  };
    return (
        <div>
            <h2>Manage orders: {orders.length}</h2>
            <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Product Name</th>
              <th>Delete Order</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={order._id}>
                <th>{index + 1}</th>
                <td>{order.name}</td>
                <td>
                  <button
                    onClick={() => handleOrderCancel(order._id)}
                    className="btn btn-red-500 btn-xs"
                  >
                    Delete Order
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
        </div>
    );
};

export default ManageOrders;