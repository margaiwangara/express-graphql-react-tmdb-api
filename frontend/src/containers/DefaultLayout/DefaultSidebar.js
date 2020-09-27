import React from 'react';
import Loading from '@/utils/Loading';
import { Link } from 'react-router-dom';
import Logo from '@/assets/images/tfs-logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function DefaultSidebar() {
  return (
    <aside className="app-sidebar">
      <Link to="/" className="app-sidebar-brand">
        <img src={Logo} alt="app-logo" />
      </Link>
      <ul className="app-sidebar-nav">
        <li className="app-sidebar-nav-item active">
          <Link to="/new-releases" className="app-sidebar-nav-link">
            New Releases
            <FontAwesomeIcon icon="arrow-right" />
          </Link>
        </li>
        <li className="app-sidebar-nav-item">
          <Link to="/new-releases" className="app-sidebar-nav-link">
            In Theatres
          </Link>
        </li>
        <li className="app-sidebar-nav-item">
          <Link to="/new-releases" className="app-sidebar-nav-link">
            Upcoming
          </Link>
        </li>
        <li className="app-sidebar-nav-item">
          <Link to="/new-releases" className="app-sidebar-nav-link">
            Popular
          </Link>
        </li>
        <li className="app-sidebar-nav-item">
          <Link to="/new-releases" className="app-sidebar-nav-link">
            Top Rated
          </Link>
        </li>
      </ul>
    </aside>
  );
}

export default DefaultSidebar;
