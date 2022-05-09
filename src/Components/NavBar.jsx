import { Button } from "@mui/material";
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
      <div className="rightside">
        <input type="text" placeholder="Pesquisar..." />
        <Button
          sx={{
            color: "#fff",
            backgroundColor: "#0080ff",
            border: "1px solid 00ff00",
            height:'32px',
            width:'70px',
            fontSize:'11px',
            
          }}
        >
          Pesquisar
        </Button>
      </div>
    </div>
  );
}

export default Navbar;
