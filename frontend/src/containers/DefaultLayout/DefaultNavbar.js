import React from 'react';
import { Link } from 'react-router-dom';

function DefaultNavbar() {
  return (
    <nav className="app-navbar">
      <div className="app-navbar-brand-box">
        <Link to="/" className="app-navbar-brand">
          twentyfourseven
        </Link>
      </div>
    </nav>
  );
}

export default DefaultNavbar;
