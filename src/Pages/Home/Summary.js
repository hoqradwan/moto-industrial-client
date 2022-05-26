import React from "react";
import { FcBusiness } from "react-icons/fc";
import { GiShadowFollower } from "react-icons/gi";
import { MdFeedback } from "react-icons/md";

const Summary = () => {
  return (
    <div>
      <div>
        <h1 className="text-4xl font-semibold text-primary text-center mt-24 mb-16">
          Business Summary
        </h1>
        <div className="ml-4 grid lg:grid-cols-3 gap-10 pl-20">
          <div>
            <p className="font-bold">
                <span className="text-5xl text-center">
                <FcBusiness></FcBusiness>
              </span>
           
              <span className="text-secondary text-3xl font-bold">
              Consumers <span className="text-accent">200+</span>
              </span>
            </p>
          </div>
          <div>
            <p>
              <span className="text-5xl">
                <GiShadowFollower></GiShadowFollower>
              </span>

              <span className="text-secondary text-3xl font-bold">
                Annual Revenue: <span className="text-accent">120M</span>
              </span>
            </p>
          </div>
          <div>
            <p>
              <span className="text-5xl">
                <MdFeedback></MdFeedback>
              </span>
              <span className="text-secondary text-3xl font-bold">
                Feedbacks: <span className="text-accent">60+</span>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
