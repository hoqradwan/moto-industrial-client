import React, { useState } from "react";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import useToken from "../../hooks/useToken";
import Loading from "../Shared/Loading";

const Login = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending, error1] =
    useSendPasswordResetEmail(auth);
    const [token] = useToken(user || gUser);

  const navigate = useNavigate();

  if (token) {
    navigate(from, { replace: true });
  }
  let errorElement;
  if (error) {
    errorElement = <p className="text-danger">{error.message}</p>;
  }
  if (loading) {
    return <Loading></Loading>;
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(email, password);
  };
  const resetPassword = () => {
    sendPasswordResetEmail(email);
  };
  return (
    <>
      <div class="form-control w-full mx-auto mt-24 p-8  max-w-xs shadow-xl">
        <h1 className="text-3xl mb-4 text-center">Login</h1>
        <form onSubmit={handleSubmit}>
          <input
            onChange={handleEmailChange}
            type="email"
            placeholder="Email Address"
            class="input input-bordered w-full max-w-xs"
          />
          <input
            onChange={handlePasswordChange}
            type="password"
            placeholder="Password"
            class="input input-bordered w-full max-w-xs mt-3"
          />
          <p>
            <small>
              New to Moto Industrial{" "}
              <Link className="text-primary mt-4" to="/signup">
                Create New Account
              </Link>
            </small>
          </p>
          <input
            type="submit"
            value="Login"
            class="btn w-full max-w-xs text-white mt-1"
          />
        </form>
        {errorElement}
        <a className="btn btn-link" onClick={resetPassword}>
          Forgetten Password?
        </a>
        <div className="divider">OR</div>
        <button onClick={() => signInWithGoogle()} className="btn btn-outline">
          Continue with Google
        </button>{" "}
      </div>
    </>
  );
};

export default Login;
