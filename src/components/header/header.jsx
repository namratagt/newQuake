import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "../searchBar/searchBar";
import "./header.css";
const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (term) => {
    setSearchTerm(term);
  };
  return (
    <header>
      <nav>
        <ul className="navbar">
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
            <Link className="link" to="/health">
              Health
            </Link>
          </li>
          <li className="item">
            <Link className="link" to="/science">
              Science
            </Link>
          </li>
          <li className="item">
            <Link className="link" to="/sports">
              Sports
            </Link>
          </li>
          <li className="item">
            <Link className="link" to="/technology">
              Technology
            </Link>
          </li>
        </ul>
      </nav>
      <div className="sec-bar">
        <div className="name">NEWSQUAKE</div>
        {/* <div className="search-bar">
          <SearchBar handleSearch={handleSearch} />
        </div> */}
      </div>
    </header>
  );
};

export default Header;
