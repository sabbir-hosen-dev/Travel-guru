import { AiOutlineSearch } from "react-icons/ai"; 
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Navber.css";

function Navber() {
  return (
    <nav className="nav-wrap ">
      <div className="logo">
        <h1>Trevel.</h1>
      </div>
      <div className="serch-input">
        <input type="text" placeholder="Search" />
        <AiOutlineSearch className="search-icon" />
      </div>
      <li>
        <a href="">News</a>
      </li>
      <li>
        <a href="">Destination</a>
      </li>
      <li>
        <a href="">Blog</a>
      </li>
      <li>
        <a href="">Contact</a>
      </li>
      <div className="btn-wrap">
        <button className="btn">Login</button>
      </div>
    </nav>
  );
}

export default Navber;
