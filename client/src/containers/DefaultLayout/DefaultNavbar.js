import React from 'react';
import logo from '@/assets/img/logo.svg';

function DefaultNavbar() {
  return (
    <div className="header__content">
      <a href="#index" className="header__logo">
        <img src={logo} alt="logo" />
      </a>

      <ul className="header__nav">
        <li className="header__nav-item">
          <a
            className="dropdown-toggle header__nav-link"
            href="#home"
            role="button"
            id="dropdownMenuHome"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Home
          </a>

          <ul
            className="dropdown-menu header__dropdown-menu"
            aria-labelledby="dropdownMenuHome"
          >
            <li>
              <a href="#index">Home slideshow bg</a>
            </li>
            <li>
              <a href="#index">Home static bg</a>
            </li>
          </ul>
        </li>

        <li className="header__nav-item">
          <a
            className="dropdown-toggle header__nav-link"
            href="#catalog"
            role="button"
            id="dropdownMenuCatalog"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Catalog
          </a>

          <ul
            className="dropdown-menu header__dropdown-menu"
            aria-labelledby="dropdownMenuCatalog"
          >
            <li>
              <a href="#catalog">Catalog Grid</a>
            </li>
            <li>
              <a href="#catalog">Catalog List</a>
            </li>
            <li>
              <a href="#catalog">Details Movie</a>
            </li>
            <li>
              <a href="#catalog">Details TV Series</a>
            </li>
          </ul>
        </li>

        <li className="header__nav-item">
          <a href="pricing.html" className="header__nav-link">
            Pricing Plan
          </a>
        </li>

        <li className="header__nav-item">
          <a href="faq.html" className="header__nav-link">
            Help
          </a>
        </li>

        <li className="dropdown header__nav-item">
          <a
            className="dropdown-toggle header__nav-link header__nav-link--more"
            href="#ios"
            role="button"
            id="dropdownMenuMore"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i className="icon ion-ios-more"></i>
          </a>

          <ul
            className="dropdown-menu header__dropdown-menu"
            aria-labelledby="dropdownMenuMore"
          >
            <li>
              <a href="about.html">About</a>
            </li>
            <li>
              <a href="signin.html">Sign In</a>
            </li>
            <li>
              <a href="signup.html">Sign Up</a>
            </li>
            <li>
              <a href="404.html">404 Page</a>
            </li>
          </ul>
        </li>
      </ul>

      <div className="header__auth">
        <button className="header__search-btn" type="button">
          <i className="icon ion-ios-search"></i>
        </button>

        <a href="signin.html" className="header__sign-in">
          <i className="icon ion-ios-log-in"></i>
          <span>sign in</span>
        </a>
      </div>

      <button className="header__btn" type="button">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  );
}

export default DefaultNavbar;
