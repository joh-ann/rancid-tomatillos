import './Header.css';
import { NavLink } from 'react-router-dom';
import React from 'react';

function Header({ search, setSearch }) {
  return (
    <div className="page-header">
      <div className="title-container">
        <h1 className="page-title">Rancid Tomatillos</h1>
      </div>

      <div className="header-btns-container">
        <NavLink to="/" className="page-header-btn">
          HOME
        </NavLink>
        <NavLink to="/about" className="page-header-btn">
          ABOUT
        </NavLink>
      </div>
      <div className="search-btn-container">
        <NavLink to="/search" className="page-header-btn">
          <form>
          <input
            type="text"
            placeholder="search"
            name="search"
            value={search}
            onChange={event => setSearch(event.target.value)}
          />
          </form>
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
