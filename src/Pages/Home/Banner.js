import React from "react";

const Banner = () => {
  return (
    <div>
      <div
        class="hero min-h-screen"
        style={{
            background: `url(https://images.unsplash.com/photo-1523676060187-f55189a71f5e?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGNhciUyMHdoZWVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600)`,
            backgroundSize:'cover'
        }} 
      >
        <div class="hero-overlay bg-opacity-60"></div>
        <div class="hero-content text-center text-neutral-content">
          <div class="max-w-md">
            <h1 class="mb-5 text-5xl text-accent font-bold">WELCOME TO MOTO INDUSTRIAL</h1>
            <p class="mb-5  text-xl">
              Buy our exclusive car equipments for your retail shop
            </p>
            <button class="btn btn-primary text-white">Explore</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;


