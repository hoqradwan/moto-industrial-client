import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";


const AddReview = () => {
    const [user] = useAuthState(auth)
    const handleSubmitReview = (event) =>{
        event.preventDefault();
        const rating = event.target.rating.value
        const message = event.target.message.value
        const review ={
         rating: rating,
         review: message,
         userName: user?.displayName
        }
        console.log(review)
        fetch("http://localhost:5000/reviews", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
        .then(res => res.json())
        .then(data => {
            event.target.reset();
            console.log(data)
        })

    }
  return (
    <div className="px-48 mt-28">
      <form onSubmit={handleSubmitReview}>
        <input
          type="text"
          value={user?.displayName}
          disabled
          placeholder="Your Rating out of 5"
          class="input input-bordered w-full max-w-xs mb-2"
        />
        <br />
        <input
          type="text"
          name="rating"
          placeholder="Your Rating out of 5"
          class="input input-bordered w-full max-w-xs mb-2"
        />
        <br />
        <textarea
          class="textarea w-80 textarea-bordered mb-2"
          name="message"
          placeholder="Your Review"
        ></textarea>
        <br />
        <input type="Submit" value="Submit" class="btn btn-accent max-w-xs" />
      </form>
    </div>
  );
};

export default AddReview;
