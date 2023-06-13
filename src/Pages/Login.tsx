import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import "../styles/_login.scss";

interface LoginProps {
  setToken: (token: string) => void;
}

const Login: React.FC<LoginProps> = ({ setToken }) => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [warning, setWarning] = useState("");

  const handleSubmit = () => {
    if (!name || !email || !address) {
      setWarning("Please fill in all fields.");
      return;
    }

    localStorage.setItem("token", email);
    localStorage.setItem("name", name);
    localStorage.setItem("address", address);
    setToken(email);
    navigate("/");
  };

  // const handleCancel = () => { 
  //   console.log("Cancel button clicked");
  //   navigate("/");
  // };

  return (
    <div className="form_wrapper">
      <h2 style={{ color: "white" }}>Login to your fitness zone</h2>
      <Link className="cancel_btn" to="/">X</Link>
      <div className="form_wrapper">
      
        <label className="bold_text">
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="login_input"
          
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
          
          />
        </label>
        <br />

     
        {warning && <p className="warning_message">{warning}</p>}

     
        {/* <button  onClick={handleCancel} className="cancel_btn">
          Cancel
        </button> */}
        <button  onClick={handleSubmit} className="submit_btn">
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
