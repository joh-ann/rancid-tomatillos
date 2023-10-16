import './Footer.css';

function Footer() {
  return (
    <div className="footer">
      <div className="title-block">
        <h2 className="subtitle">Rancid Tomatillos</h2>
        <p className="project-details">
          Rancid Tomatillos is a Turing School Module 3 project built with React.js. Designed and developed by FE 2307 Johann Dee and Ann Hochworter.
        </p>
        <p className='project-details'><a href="https://github.com/joh-ann/rancid-tomatillos">github.com/joh-ann/rancid-tomatillos</a></p>
      </div>
      <div className="linkedin">
        <h2 className="subtitle">LinkedIn</h2>
        <p>
          <a href="https://www.linkedin.com/in/johanndee/">Johann Dee</a>
        </p>
        <p>
          <a href="https://www.linkedin.com/in/annhochworter/">
            Ann Hochworter
          </a>
        </p>
      </div>
      <div className="github">
        <h2 className="subtitle">GitHub</h2>
        <p>
          <a href="https://github.com/joh-ann">github.com/joh-ann</a>
        </p>
        <p>
          <a href="https://github.com/AHochworter">github.com/AHochworter</a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
