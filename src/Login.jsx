import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import bground from "./assets/bg.jpg";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(email, password);

    if (email === "admin@example.com" && password === "admin123") {
      navigate("/admin");
    } else if (email === "user@example.com" && password === "user123") {
      navigate("/user");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div
      className="bg-cover bg-center min-h-screen relative"
      style={{ backgroundImage: `url(${bground})` }}
    >
      <div className="absolute inset-0 bg-black opacity-65"></div>
      <div className="flex items-center justify-center min-h-screen">
        <div className="shadow-2xl bg-transparent p-10 border-1 rounded-2xl">
          <h1 className="relative text-center text-2xl text-white pb-6 font-bold md:text-3xl lg:text-3xl">
            <i>LogIn Here</i>
          </h1>
          <form onSubmit={handleSubmit}>
            <label
              className="ml-1 relative text-white font-bold md:text-xl lg:text-xl"
              htmlFor="email"
            >
              <i>Email</i>
            </label>
            <br />
            <input
              className="relative text-white border-2 rounded-lg px-4 py-2 mb-6 mt-2 w-full md:text-xl lg:text-xl"
              type="email"
              placeholder="Enter Email Please"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <label
              className="ml-1 relative text-white font-bold md:text-xl lg:text-xl"
              htmlFor="password"
            >
              <i>Password</i>
            </label>
            <br />
            <input
              className="relative text-white border-2 rounded-lg px-4 py-2 mb-6 mt-2 w-full md:text-xl lg:text-xl"
              type="password"
              placeholder="Enter Password Please"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <button
              className="relative text-white border-2 rounded-lg px-4 py-2 mb-6 w-full font-bold md:text-xl lg:text-xl"
              type="submit"
            >
              <i>LogIn</i>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
