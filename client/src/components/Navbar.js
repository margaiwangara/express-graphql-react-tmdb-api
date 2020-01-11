import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  return (
    <nav className="navbar">
      <a href="#" className="navbar-brand text-white">
        24/7
      </a>

      <a href="#" className="toggler text-white">
        <FontAwesomeIcon icon={faBars} size="2x" />
      </a>

      <ul className="nav-items">
        <li className="nav-item">
          <a href="#" className="nav-link text-white">
            Popular
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link text-white">
            In Theatres
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link text-white">
            Top Rated
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link text-white">
            Upcoming
          </a>
        </li>
      </ul>
    </nav>
  );
}
