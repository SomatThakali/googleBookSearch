import React from "react";
import "./style.css";
import logo from "../../google.png";
const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-light">
      <a href="/">
        <img className="img img-fluid " src={logo} alt="logo" />{" "}
      </a>

      <ul className="mr-auto">
        <li>
          <a href="/">Search</a>
        </li>
        <li>
          <a href="/saved">Saved</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
