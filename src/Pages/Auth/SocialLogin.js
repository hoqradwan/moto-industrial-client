import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate()
  if(user){
      navigate('/')
  }
  return (
    <div>
      <button className="btn btn-outline px-24" onClick={()=>signInWithGoogle()}>Google sign in</button>
    </div>
  );
};

export default SocialLogin;
