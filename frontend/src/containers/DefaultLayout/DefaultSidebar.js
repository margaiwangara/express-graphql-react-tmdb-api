import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import routes from '@/routes';
import tmdbLogo from '@/assets/images/tmdb.svg';
import logoTransparent from '@/assets/images/tfs-transparent.svg';

function DefaultSidebar() {
  const location = useLocation();

  return (
    <aside className="app-sidebar">
      <Link to="/" className="app-sidebar-brand">
        <img src={logoTransparent} alt="app-logo" />
      </Link>
      <hr />
      <ul className="app-sidebar-nav">
        {routes.map((value, id) => (
          <li
            className={`app-sidebar-nav-item ${
              value.path === location.pathname ? 'active' : ''
            }`}
            key={value.name}
          >
            <NavLink to={value.path} className="app-sidebar-nav-link" exact>
              {value.name}
              {/* <FontAwesomeIcon icon="arrow-right" /> */}
            </NavLink>
          </li>
        ))}
      </ul>
      <hr />
      <div className="d-flex align-items-center flex-column">
        <h6
          className="text-center mb-2 mx-2 pb-3 w-75"
          style={{
            borderBottom: 'solid 1px var(--primaryAlternativeColor)',
            color: 'var(--primaryAlternativeColor)',
          }}
        >
          Powered By
        </h6>
        <figure
          className="m-0 p-0 d-flex justify-content-center"
          style={{ height: '100px', width: '100px', overflow: 'hidden' }}
        >
          <a
            target="_blank"
            rel="noreferrer noopener"
            href="https://www.themoviedb.org/"
          >
            <img
              src={tmdbLogo}
              alt="The Movie Database Logo"
              style={{ width: '100%', height: '100%' }}
            />
          </a>
        </figure>
      </div>
    </aside>
  );
}

export default DefaultSidebar;
