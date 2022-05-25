import React from "react";
// import business from '../../images/business.png'
import { FcBusiness } from "react-icons/fc";
import { GiShadowFollower } from "react-icons/gi";
import { MdFeedback } from "react-icons/md";

const Summary = () => {
  return (
    <div>
      {/* <img src={business} className="max-w-sm rounded-lg shadow-2xl" /> */}
      <div>
        <h1 className="text-4xl font-semibold text-primary text-center mt-24 mb-16">
          Business Summary
        </h1>
        <div className="ml-4 grid lg:grid-cols-3 gap-10 pl-20">
          <div>
            <p className="text-secondary font-bold">
                <span className="text-5xl text-center">
                <FcBusiness></FcBusiness>
              </span>
           
              <span className="text-accent text-3xl font-bold">
              Business Projects <span className="text-secondary">210k</span>
              </span>
            </p>
          </div>
          <div>
            <p>
              <span className="text-5xl">
                <GiShadowFollower></GiShadowFollower>
              </span>

              <span className="text-accent text-3xl font-bold">
                Our followers: <span className="text-secondary">6800k</span>
              </span>
            </p>
          </div>
          <div>
            <p>
              <span className="text-5xl">
                <MdFeedback></MdFeedback>
              </span>{" "}
              <span className="text-accent text-3xl font-bold">
                Feedbacks: <span className="text-secondary">945k</span>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
