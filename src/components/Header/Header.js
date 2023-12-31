import './Header.css';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import tomatillo from '../../images/tomatillo.png';
import PropTypes from 'prop-types';

function Header({ search, setSearch }) {
  return (
    <div className="page-header">
      <div className="title-container">
        <img src={tomatillo} className="header-logo" alt="rancid-icon" />
        <h1 className="page-title">Rancid Tomatillos</h1>
      </div>

      <div className="header-btns-container">
        <NavLink to="/" className="page-header-btn home">
          HOME
        </NavLink>
        <NavLink to="/about" className="page-header-btn about">
          ABOUT
        </NavLink>
      </div>
      <div className="search-btn-container">
        <NavLink to="/search">
          <div className="box">
            <form name="search">
              <input
                aria-label="Search"
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

Header.propTypes = {
  search: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      poster_path: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      average_rating: PropTypes.number.isRequired,
      release_date: PropTypes.string.isRequired,
    })
  ),
  setSearch: PropTypes.func,
};
