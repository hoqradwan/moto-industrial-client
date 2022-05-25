import React from "react";

const Portfolio = () => {
  return (
    <div className="lg:flex justify-around items-center px-16 mt-10">
      <div className="shadow-lg p-5 mb-8">
        <h1 className="font-bold text-accent mt-8">Full Name</h1>
        <p className="text-xl">Md. Radwanul Hoque</p>
        <h1 className="font-bold text-accent mt-2">Email Address</h1>
        <p className="text-xl mb-4">hoqueredwanul27@gmail.com</p>
        <h1 className="font-bold text-accent mt-2">Education Level</h1>
        <p className="text-xl mb-4">BA Honors</p>
        <h1 className="font-bold text-accent mt-2">department</h1>
        <p className="text-xl mb-4">English</p>
        <h1 className="font-bold text-accent mt-2">Institution</h1>
        <p className="text-xl mb-4">East West University</p>
      </div>
      <div>
        <h1 className="text-3xl text-primary font-bold mb-3">
          List of technologies and skills I have
        </h1>
        <ul className="list-disc text-secondary ">
          <li>
            I know HTML, CSS, Bootstrap, tailwind and their component libraries
            well
          </li>
          <li>I have inculcated React as a front end JavaScript Framework</li>
          <li>
            For backend I have learnt Node JS and Express JS as a backend
            framework for Node JS
          </li>
          <li>I can execute CRUD operation by MongoDB and Express JS</li>
          <li>I can speak, read and write English very well</li>
        </ul>
        <h1 className="mt-8 mb-3 text-2xl text-primary font-bold">
          Three of my project links
        </h1>
        <ul className="text-blue-400 list-disc">
          <li>
            {" "}
            <a href="https://travel-guide-express.firebaseapp.com/">
              Travel Express
            </a>
          </li>
          <li>
            {" "}
            <a href="https://redion-electronics.firebaseapp.com/">
              Redion Electronics
            </a>
          </li>
          <li>
            {" "}
            <a href="https://moto-industrial.firebaseapp.com/">
              Moto Industrial
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Portfolio;
