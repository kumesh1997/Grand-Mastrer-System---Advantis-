import React from "react";
import { Link } from "react-router-dom";
import "./HomeScreen.css";
import VideoBg from '../../images/loop2.mp4';

function HomeScreen() {
  return (
    <div className="home-container">
      <video src={VideoBg} autoPlay loop />
      <div>
      <h1>Grand Mastrer Quize</h1>
      <Link to={"/questionbank"}>
        <button class="btn third">ROUND 01</button>
      </Link>
      <Link to={"/questionbank"}>
        <button class="btn third">ROUND 03</button>
      </Link>
      </div>
      
      {/* Inspiration for new ways to make interactive buttons using
      linear-gradients, box-shadows, and pseudo classes! */}
    </div>
  );
}

export default HomeScreen;
