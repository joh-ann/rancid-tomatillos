import './ReactBuilt.css';
import logo512 from '../../images/logo512.png';

function React() {
  return (
    <div className="built-with">
      <div className="built-with-text">
        Built With
        <img src={logo512} className="react-logo" alt="react-icon" />
      </div>
    </div>
  );
}

export default React;
