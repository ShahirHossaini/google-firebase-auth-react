import React from "react";
import { UserAuth } from "../contexts/AuthContext";

const Account = () => {
  const { user } = UserAuth();

  return (
    <section>
      <div className="route-title">
        <h2>Hello, {user?.displayName}</h2>
      </div>
    </section>
  );
};

export default Account;
