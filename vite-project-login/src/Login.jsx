import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Login() {
    
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
      
        // Log data to ensure it's correctly set
        console.log("Submitting:", { email, password });
      
        axios
          .post("http://localhost:3001/login", { email, password })
          .then((res) => {
            console.log("Response:", res);
            console.log("Login Status:", res.data);
      
            // Navigate based on the backend response
            if (res.data === "Successfully logged in") {
              navigate("/home");
            } else {
              alert(res.data); // Display error message to the user
            }
          })
          .catch((err) => {
            console.error("Error:", err);
            alert("An error occurred during login.");
          });
      };
      
  return (
  

    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow" style={{ maxWidth: "400px", width: "100%" }}>
        <h1 className="text-center mb-4">Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              className="form-control"
              placeholder="Enter your email..."
              onChange = {(e)=>setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              className="form-control"
              placeholder="Enter your password.."onChange = {(e)=>setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">Login</button>
          <p className="mt-3 text-center">
            Don't have an account? <a href="/signup">Signup</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
