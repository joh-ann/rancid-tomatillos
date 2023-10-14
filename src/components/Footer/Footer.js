import './Footer.css';

function Footer() {
  return (
    <div className="footer">
      <div className="title-block">
        <h2 className="subtitle">Rancid Tomatillos</h2>
        <p className="project-details">
          Rancid Tomatillos is a paired Turing project assigned during the first
          week of Module 3. It is our first React.js project. This version is
          designed and developed by Johann Dee and Ann Hochworter.
        </p>
      </div>
      <div className="linkedin">
        <h2 className="subtitle">LinkedIn</h2>
        <h3>
          <a href="https://linkedin/in/johanndee">Johann Dee</a>
        </h3>
        <h3>
          <a href="https://linkedin/in/annhochworter">Ann Hochworter</a>
        </h3>
      </div>
      <div className="github">
        <h2 className="subtitle">GitHub</h2>
      </div>
    </div>
  );
}

export default Footer;
