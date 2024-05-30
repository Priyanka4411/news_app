import React from "react";
import { NavLink } from "react-router-dom";
import "./nav.css"; // Import the CSS file

function Nav() {
  return (
    <nav className="nav">
      <ul className="nav-links">
        <li>
          <button className="nav-button">
            <NavLink
              to="/"
              className="nav-link"
              activeClassName="active-link"
              exact
            >
              All
            </NavLink>
          </button>
        </li>
        <li>
          <button className="nav-button">
            <NavLink
              to="/spo"
              className="nav-link"
              activeClassName="active-link"
            >
              Sports
            </NavLink>
          </button>
        </li>
        <li>
          <button className="nav-button">
            <NavLink
              to="/sci"
              className="nav-link"
              activeClassName="active-link"
            >
              Science
            </NavLink>
          </button>
        </li>
        <li>
          <button className="nav-button">
            <NavLink
              to="/ent"
              className="nav-link"
              activeClassName="active-link"
            >
              Entertainment
            </NavLink>
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
