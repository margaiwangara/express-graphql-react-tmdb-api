import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function navbarToggle(e) {
  e.preventDefault();
  // get nav-items
  const dropdown = document.querySelector(".nav-items");

  // check if contains active class
  if (dropdown.classList.contains("active")) {
    dropdown.classList.remove("active");
  } else {
    dropdown.classList.add("active");
  }
}

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand text-white">
        24/7
      </Link>

      <a href="#" className="toggler text-white" onClick={navbarToggle}>
        <FontAwesomeIcon icon={faBars} size="2x" />
      </a>

      <ul className="nav-items">
        <li className="nav-item">
          <Link to="/popular" className="nav-link text-white">
            Popular
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/" className="nav-link text-white">
            In Theatres
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/" className="nav-link text-white">
            Top Rated
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/" className="nav-link text-white">
            Upcoming
          </Link>
        </li>
      </ul>
    </nav>
  );
}
