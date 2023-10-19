import './Header.css';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import tomatillo from '../../images/tomatillo.png';

function Header({ search, setSearch }) {
  return (
    <div className="page-header">
      <div className="title-container">
        <img src={tomatillo} className="header-logo" />
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
        <NavLink to="/search">
          <div className="box">
            <form name="search">
              <input
                type="text"
                name="input"
                className="input"
                value={search}
                onChange={event => setSearch(event.target.value)}
              />
              <FontAwesomeIcon icon={faSearch} className="search-icon" />
            </form>
          </div>
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
