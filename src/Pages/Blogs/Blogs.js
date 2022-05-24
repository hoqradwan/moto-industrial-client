import React from "react";
import "./Blogs.css";

const Blogs = () => {
  return (
    <div className="blogs-container">
      <p>
        <div className="blog">
          <h4 className="blog-head">
            How will you improve the performance of a React Application
          </h4>
          <p></p>
        </div>
        <div className="blog">
          <h4 className="blog-head">
            What are the different ways to manage a state in a React
            Application?
          </h4>
          <p></p>
        </div>
        <div className="blog">
          <h4 className="blog-head">How does prototypical inheritance work?</h4>
          <p>
            JSON Web Token (JWT) is a system for securely transmitting
            information between parties as JSON object. It is compact, readable
            and digitally signed using a private key or a public key pair by the
            Identity Provider(IdP). So the integrity and authenticity of the
            token can be verified by other parties involved. The purpose of
            using JWT is not to hide data but to ensure the authenticity of the
            data. JWT is signed and encoded, not encrypted. JWT is a token based
            stateless authentication mechanism. Since it is a client-side based
            stateless session, server doesn’t have to completely rely on a
            database to save session information.
          </p>
        </div>
        <div className="blog">
          <h4 className="blog-head">
            What is the purpose of `jwt` and how does it work
          </h4>
          <p>
            JSON Web Token (JWT) is a system for securely transmitting
            information between parties as JSON object. It is compact, readable
            and digitally signed using a private key or a public key pair by the
            Identity Provider(IdP). So the integrity and authenticity of the
            token can be verified by other parties involved. The purpose of
            using JWT is not to hide data but to ensure the authenticity of the
            data. JWT is signed and encoded, not encrypted. JWT is a token based
            stateless authentication mechanism. Since it is a client-side based
            stateless session, server doesn’t have to completely rely on a
            database to save session information.
          </p>
        </div>
        <div className="blog">
          <h4 className="blog-head">
            What is a unit test? Why should write unit tests?
          </h4>
          <p>
            JSON Web Token (JWT) is a system for securely transmitting
            information between parties as JSON object. It is compact, readable
            and digitally signed using a private key or a public key pair by the
            Identity Provider(IdP). So the integrity and authenticity of the
            token can be verified by other parties involved. The purpose of
            using JWT is not to hide data but to ensure the authenticity of the
            data. JWT is signed and encoded, not encrypted. JWT is a token based
            stateless authentication mechanism. Since it is a client-side based
            stateless session, server doesn’t have to completely rely on a
            database to save session information.
          </p>
        </div>
      </p>
    </div>
  );
};

export default Blogs;
