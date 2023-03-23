import React from "react";
import { Route, Routes } from "react-router-dom";

import { AuthContextProvider } from "./contexts/AuthContext";

import Navbar from "./components/Navbar";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import Account from "./pages/Account";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  return (
    <AuthContextProvider>
      <div className="main-container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />

          <Route
            path="/account"
            element={
              <ProtectedRoute>
                <Account />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </AuthContextProvider>
  );
};

export default App;
