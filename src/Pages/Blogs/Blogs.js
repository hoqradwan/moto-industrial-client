import React from "react";
import "./Blogs.css";

const Blogs = () => {
  return (
    <div className="blogs-container">
      <p>
        <div className="blog">
          <h4 className="text-primary text-xl font-semibold mb-2">
            How will you improve the performance of a React Application
          </h4>
          <p>
            There are a number of ways to boost the performance of react application
            such as:
            <li>Keeping component state local where necessary.</li>
            <li>
              Memoizing React components to prevent unnecessary re-renders.
            </li>
            <li>Code-splitting in while using dynamic import.</li>
            <li>Windowing or list virtualization.</li>
            <li>Avoid Lazy loading images.
            </li>
          </p>
        </div>
        <div className="blog">
          <h4 className="text-primary text-xl font-semibold mb-2">
            What are the different ways to manage a state in a React
            Application?
          </h4>
          <p>
            There are four main types of state we need to properly manage in
            a React app:
            <ul className="list-decimal px-5">
              <li>Local state.</li>
              <li>Global State.</li>
              <li>Server state</li>
              <li>URL state</li>
            </ul>
          </p>
        </div>
        <div className="blog">
          <h4 className="text-primary text-xl font-semibold mb-2">How does prototypical inheritance work?</h4>
          <p>
          Every object with its methods and properties contains an internal and hidden property known as [[Prototype]]. The Prototypal Inheritance is a feature in javascript that is used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern language, it is being set using __proto__.
          </p>
        </div>
        <div className="blog">
          <h4 className="text-primary text-xl font-semibold mb-2">
            Why we do not set the state directly in React?
          </h4>
          <p>
          If we update a state directly, calling the setState() afterward may just replace the update you made. When we directly update the state, it does not change this.state immediately. Instead, it creates a pending state transition, and accessing it after calling this method will only return the present value. Then we will loss control of the state accross all components. That is why, we do not set the state directly in react. 
          </p>
        </div>
        <div className="blog">
          <h4 className="text-primary text-xl font-semibold mb-2">
            What is a unit test? Why should write unit tests?
          </h4>
          <p>
            Unit testing is a software development process in which the smallest
            testable parts of an application, called units, are individually and
            independently scrutinized for proper operation. This testing
            methodology is done during the development process by the software
            developers and sometimes QA staff.
          </p>
        </div>
      </p>
    </div>
  );
};

export default Blogs;

