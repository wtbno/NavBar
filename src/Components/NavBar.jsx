import React from "react";
import "../App.css";

function Navbar() {
  return (
    <div className="Navbar">
      <div className="leftside">
        <div className="links">
          <a href="/home">Home</a>
          <a href="/feedback">Feedback</a>
          <a href="/aboutus">About Us</a>
          <a href="/contactus">Contact Us</a>
        </div>
      </div>
      <div className="rightside"></div>
    </div>
  );
}

export default Navbar;
