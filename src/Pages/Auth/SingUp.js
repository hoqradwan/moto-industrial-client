import React, { useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";
import SocialLogin from "./SocialLogin";

const SingUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const navigate = useNavigate();

  if (user) {
    navigate("/");
  }
  if (loading) {
    return <Loading></Loading>;
  }
  let errorElement;
  if (error) {
    errorElement = <p>{error.message}</p>;
  }
  const handleEmailBlur = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordBlur = (e) => {
    setPassword(e.target.value);
  };
  const handleConfirmPasswordBlur = (e) => {
    setConfirmPass(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPass) {
      createUserWithEmailAndPassword(email, password);
    }
  };
  return (
    <>
      <div class="form-control w-full mx-auto flex h-screen justify-center items-center max-w-xs">
        <h1 className="text-3xl mb-4">Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            class="input input-bordered w-full max-w-xs mb-3"
          />
          <input
            onChange={handleEmailBlur}
            type="email"
            placeholder="Email Address"
            class="input input-bordered w-full max-w-xs"
          />
          <input
            onChange={handlePasswordBlur}
            type="password"
            placeholder="Password"
            class="input input-bordered w-full max-w-xs mt-3"
          />
          <input
            onChange={handleConfirmPasswordBlur}
            type="password"
            placeholder="Confirm sPassword"
            class="input input-bordered w-full max-w-xs mt-3"
          />
          {password !== confirmPass && (
            <p className="text-danger">Password didn't matach</p>
          )}

          <p>
            Already have an account?{" "}
            <Link className="text-decoration-none" to="/login">
              <small className="signup-text">Please login</small>
            </Link>{" "}
          </p>
          <input
            type="submit"
            value="Sign Up"
            class="btn w-full max-w-xs text-white mt-1"
          />
        </form>
        {errorElement}
        <div className="divider">OR</div>
        <SocialLogin></SocialLogin>
      </div>
    </>
  );
};

export default SingUp;
