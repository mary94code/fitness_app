import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/_login.scss";

const Login = ({ setToken }) => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [bio, setBio] = useState("");

  const handleNameChange = (e) => {
    const inputName = e.target.value;
    const capitalized = inputName.charAt(0).toUpperCase() + inputName.slice(1);
    setName(capitalized);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem("token", email);
    localStorage.setItem("name", name);
    localStorage.setItem("address", address);
    localStorage.setItem("bio", bio);
    setToken(email);
    navigate("/");
  };

  return (
    <div className="form_wrapper">
      <h2 style={{ color: "white" }}>Login to your fitness zone</h2>
      <form onSubmit={handleSubmit} className="form_wrapper">
        <label className="bold_text">
          Name:
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
            className="login_input"
            placeholder="What is your name?"
            required
          />
        </label>
        <br />
        <label className="bold_text">
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="login_input"
            placeholder="Enter your email address"
            required
          />
        </label>
        <br />
        <label className="bold_text">
          Address:
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="login_input"
            placeholder="Where do you live?"
          />
        </label>
        <br />
        <label className="bold_text">
          Bio:
          <textarea
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            className="login_input"
            placeholder="Tell us about yourself"
          ></textarea>
        </label>
        <br />
        <button type="submit" className="submit_btn">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
