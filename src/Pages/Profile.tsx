import React from "react";
import profile from "../assets/profile.jpg";
import LeftSidebar from "../components/Overview/LeftSidebar";
import "../styles/_profile.scss";

const Profile = () => {
  const name = localStorage.getItem("name");
  const email = localStorage.getItem("token");
  const address = localStorage.getItem("address");
  const bio = localStorage.getItem("bio");
  return (
    <div className="main_wrapper">
  
           <LeftSidebar />
  
    
      <div className="center">
        <div className="content_wrapper">
          <img className="image" src={profile} alt="Profile" />
          <h2>{name}</h2>
          <p>Email: {email}</p>
          <p>Location: {address}</p>
          <p>Bio: {bio}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
