import './Header.css';

function Header() {
  return (
    <div className="page-header">
      <div className="title-container">
        <h1 className="page-title">Rancid Tomatillos</h1>
      </div>
      <div className="header-btns-container">
        <button className="page-header-btn">HOME</button>
        <button className="page-header-btn">ABOUT</button>
      </div>
      <div className="search-btn-container">
        <button className="page-header-btn">SEARCH</button>
      </div>
    </div>
  );
}

export default Header;
