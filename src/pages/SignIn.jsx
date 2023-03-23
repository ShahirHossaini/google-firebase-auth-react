import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../contexts/AuthContext";

import { GoogleButton } from "react-google-button";

const SignIn = () => {
  const navigate = useNavigate();
  const { googleSignIn, user } = UserAuth();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.error({ error });
    }
  };

  useEffect(() => {
    if (user !== null) {
      navigate("/account");
    }
  }, [user]);

  return (
    <section>
      <div className="route-title">
        <h1>Sign-in Page</h1>
      </div>
      <div className="route-body">
        <GoogleButton onClick={() => handleGoogleSignIn()} />
      </div>
    </section>
  );
};

export default SignIn;
