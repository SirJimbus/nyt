import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <p className="navbar-p">
        {" "}
        <Link to="/" className="link">
          Home
        </Link>
      </p>

      <p className="navbar-p">
        {" "}
        <Link to="/politics" className="link">
          Politics
        </Link>
      </p>
      <p className="navbar-p">
        {" "}
        <Link to="/sports" className="link">
          Sports
        </Link>
      </p>
      <p className="navbar-p">
        {" "}
        <Link to="/arts" className="link">
          Arts
        </Link>
      </p>
      <p className="navbar-p">
        {" "}
        <Link to="/food" className="link">
          Food
        </Link>
      </p>
      <p className="navbar-p">
        {" "}
        <Link to="/books" className="link">
          Books
        </Link>
      </p>
    </nav>
  );
}
