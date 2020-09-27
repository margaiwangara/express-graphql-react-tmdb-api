import React from 'react';
import Loading from '@/utils/Loading';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Logo from '@/assets/images/tfs-logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import routes from '@/routes';

function DefaultSidebar() {
  const location = useLocation();

  return (
    <aside className="app-sidebar">
      <Link to="/" className="app-sidebar-brand">
        <img src={Logo} alt="app-logo" />
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
    </aside>
  );
}

export default DefaultSidebar;
