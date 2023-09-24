import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
const Header = () => {
  return (
    <header>
      <nav>
        <ul className="container">
          <li className="item">
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li className="item">
            <Link className="link" to="/entertainment">
              Entertainment
            </Link>
          </li>
          <li className="item">
            <Link className="link" to="/sports">
              Sports
            </Link>
          </li>
          <li className="item">
            <Link className="link" to="/fashion">
              Fashion
            </Link>
          </li>
          <li className="item">
            <Link className="link" to="/hollywood">
              Hollywood
            </Link>
          </li>
        </ul>
      </nav>
      <div className="name">NEWSQUAKE</div>
    </header>
  );
};

export default Header;
