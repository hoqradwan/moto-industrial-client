import React from "react";

const AddReview = () => {
    const handleSubmitReview = (event) =>{
        event.preventDefault();
    }
  return (
    <div className="px-48 mt-28">
      <form onSubmit={handleSubmitReview}>
        <input
          type="text"
          placeholder="Your Rating out of 5"
          class="input input-bordered w-full max-w-xs mb-2"
        />
        <br />
        <textarea
          class="textarea w-80 textarea-bordered mb-2"
          placeholder="Your Review"
        ></textarea>
        <br />
        <input type="Submit" value="Add" class="btn btn-accent max-w-xs" />
      </form>
    </div>
  );
};

export default AddReview;
