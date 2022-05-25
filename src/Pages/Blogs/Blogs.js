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
            The Prototypal Inheritance is a feature in javascript used to add
            methods and properties in objects.I understand, ‘this’ refers to
            itself, to its own object or global object. Using ‘this’ are
            partitioned in 3 locations of code. These are in functions, outside
            of functions (global scope, ex: window object), and in Javascript’s
            eval() function.Common pitfalls when using ‘this’ are usually
            relevant to scope issues in real functions, methods, and
            constructors. Though there are ways to fix these common issues by
            using ES5, bind() or ES6 arrow functions
          </p>
        </div>
        <div className="blog">
          <h4 className="text-primary text-xl font-semibold mb-2">
            Why you do not set the state directly in React?
          </h4>
          <p>
            To change a value in the state object, use the this. setState()
            method. When a value in the state object changes, the component will
            re-render, meaning that the output will change according to the new
            value(s).
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

/* 

const Blogs = () => {
    return (
        <div>
            <marquee behavior="" direction="up"> <h2 className='text-3xl mx-auto text-center text-blue-600 font-medium my-3'>Some important questions and answers</h2></marquee>

            <div className='body-style mt-5'>
                <h1 className='question-title text-3xl'>Ans To The Questions</h1>
                <div className='container question-ans-part ml-7'>
                    <h3 className='text-orange-500 text-xl'>1.How will you improve the performance of react application ?</h3><br />

                    <p>Ans:There are many ways to improve the performance of react application such as:
                        <li>Keeping component state local where necessary.</li>
                        <li>Memoizing React components to prevent unnecessary re-renders.</li>
                        <li>Code-splitting in React using dynamic import()</li>
                        <li>Windowing or list virtualization in React.</li>
                        <li>Lazy loading images in React. etc..</li>
                    </p>

                </div>
                <div className='container question-ans-part ml-7  my-4'>
                    <h3 className='text-orange-500 text-xl'>2.What are the different ways to mange a state in a react application ?</h3><br />
                    <p>Ans: There are four main types of state you need to properly manage in your React apps:
                        <ul>
                            1.Local state.
                            2.Global State.
                            3.Server state.
                            4.URL state.
                        </ul>
                    </p>

                </div>

                <div className='container question-ans-part ml-7  my-4'>
                    <h3 className='text-orange-500 text-xl'>3.How does prototypical inheritance work ?</h3><br />
                    <p>Ans: The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects.I understand, ‘this’ refers to itself, to its own object or global object.

                        Using ‘this’ are partitioned in 3 locations of code. These are in functions, outside of functions (global scope, ex: window object), and in Javascript’s eval() function.Common pitfalls when using ‘this’ are usually relevant to scope issues in real functions, methods, and constructors. Though there are ways to fix these common issues by using ES5, bind() or ES6 arrow functions</p>



                </div>
                <div className='container question-ans-part ml-7  my-4'>
                    <h3 className='text-orange-500 text-xl'>4.Why you do not set the state directly in react ?</h3><br />
                    <p>Ans: To change a value in the state object, use the this. setState() method. When a value in the state object changes, the component will re-render, meaning that the output will change according to the new value(s).</p>


                </div>
                <div className='container question-ans-part ml-7  my-4'>
                    <h3 className='text-orange-500 text-xl'>5.What is unit test ? Why should write unit test ?</h3><br />
                    <p>Ans: Unit testing is a software development process in which the smallest testable parts of an application, called units, are individually and independently scrutinized for proper operation. This testing methodology is done during the development process by the software developers and sometimes QA staff.</p>


                </div>
                <div className='container question-ans-part ml-7  my-4'>
                    <h3 className='text-orange-500 text-xl'></h3>


                </div>
                <div className="divider text-blue-800 font-serif font-bold text-2xl py-7">End</div>
            </div>

        </div>
    );
};

*/
