import React from "react";

import { UserAuth } from "../contexts/AuthContext";

import { Link } from "react-router-dom";

const Navbar = () => {
  const { user, logOut } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.error({ error });
    }
  };

  return (
    <div className="navbar">
      <div>
        <h2>Google Firebase Authunticator using React.js</h2>
      </div>
      <div>
        {user ? (
          <button onClick={handleSignOut} className="sign-out-button">
            Sign out
          </button>
        ) : (
          <h2 className="sign-in-button" role={"button"}>
            <Link to="/signin">Sign in</Link>
          </h2>
        )}
      </div>
    </div>
  );
};

export default Navbar;
