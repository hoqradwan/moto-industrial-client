import React, { useEffect, useState } from 'react';

const ManageProducts = () => { 
    const [parts, setParts] = useState([]);
    useEffect(()=>{
        fetch('https://still-lowlands-64974.herokuapp.com/parts')
        .then(res => res.json())
        .then(data => setParts(data))
    },[])
     const handleOrderCancel = (id) => {
     const proceed = window.confirm("Delete product from parts collection?");
     if (proceed) {
     fetch(`https://still-lowlands-64974.herokuapp.com/parts/${id}`, {
       method: "DELETE",
     })
       .then((res) => res.json())
       .then((data) => {
         console.log(data);
        
           const remaining = parts.filter((part) => part._id !== id);
           setParts(remaining);
        
       });
     }
   };
     return (
         <div>
             <h2>Manage Products: {parts.length}</h2>
             <div class="overflow-x-auto">
         <table class="table w-full">
           <thead>
             <tr>
               <th></th>
               <th>Product Name</th>
               <th>Delete Product</th>
             </tr>
           </thead>
           <tbody>
             {parts.map((part, index) => (
               <tr key={part._id}>
                 <th>{index + 1}</th>
                 <td>{part.name}</td>
                 <td>
                   <button
                     onClick={() => handleOrderCancel(part._id)}
                     className="btn btn-error text-white btn-xs"
                   >
                     Delete
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

export default ManageProducts;