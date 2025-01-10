import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Signup() {
const [name,setName]=useState("");
const [email,setEmail]=useState("");
const [password,setPassword]=useState("");
const navigate = useNavigate();

const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sending data:", { name, email, password });
   
    axios.post('http://localhost:3001/users',{ name, email, password })
    .then(res => console.log("Response:", res),
navigate("/login"))
  .catch(err => console.error("Error:", err));
}

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow" style={{ maxWidth: "400px", width: "100%" }}>
        <h1 className="text-center mb-4">Signup</h1>
        <form onSubmit = {handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              className="form-control"
              placeholder="Enter your name..."
              autoFocus
              onChange = {(e)=>setName(e.target.value)}
            />
          </div>
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
              placeholder="Enter your password..."
              onChange = {(e)=>setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">Signup</button>
          <p className="mt-3 text-center">
            Already have an account? <a href="/login">Login</a>
          </p>
        </form>
      </div>
    </div>
  )
}

export default Signup
