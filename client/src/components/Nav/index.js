import React from "react";
import "./style.css";

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-light">
      <img src="https://img.icons8.com/color/22/000000/google-logo.png" />
      <a className="navbar-brand text pl-1" href="/">
        Books
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
