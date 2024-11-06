import { FC } from "react";

const Footer: FC = () => {
  return (
    <footer id="contact" style={{ backgroundColor: "#242b33" }}>
      <div className="footer-content container">
        <div className="footer-card">
          <h4 className="footer-card-title">Information</h4>
          <nav className="footer-navigation">
            <ul className="footer-nav-list">
              <li className="footer-nav-item">
                <a className="nav-item-link" href="index.html">
                  Home
                </a>
              </li>
              <li className="footer-nav-item">
                <a className="nav-item-link" href="aboutUs.html">
                  About Us
                </a>
              </li>
              <li className="footer-nav-item">
                <a className="nav-item-link" href="autoPark.html">
                  Trucks
                </a>
              </li>
              <li className="footer-nav-item">
                <a className="nav-item-link" href="careers.html">
                  Careers
                </a>
              </li>
              <li className="footer-nav-item">
                <a className="nav-item-link" href="contact.html">
                  Contact us
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="footer-card">
          <h4 className="footer-card-title">Contact us</h4>
          <div className="footer-card-row">
            <h5 className="card-row-title">Address:</h5>
            <p className="card-row-info">
              8 Robert Lisovsky St., Kyiv, Ukraine
            </p>
          </div>
          <div className="footer-card-row">
            <h5 className="card-row-title">Phone numbers:</h5>
            <p className="card-row-info">+ 38 (050) 449 52 71</p>
            <p className="card-row-info">+ 38 (050) 206 64 50</p>
          </div>
          <div className="footer-card-row">
            <h5 className="card-row-title">E-mail:</h5>
            <p className="card-row-info">ua@agrotep.com</p>
            <p className="card-row-info">agrotep@agrotep.com</p>
          </div>
        </div>
        <div className="footer-card">
          <h4 className="footer-card-title">Social media</h4>
          <div className="footer-socials">
            <a href="" className="social-link youtube"></a>
            <a href="" className="social-link facebook"></a>
            <a href="" className="social-link instagram"></a>
            <a href="" className="social-link linkedin"></a>
          </div>
          <a className="logo" href="index.html">
            <img className="logo-img" src="/svg/logo.svg" alt="" />
            <img className="logo-text" src="/img/White_text3.png" alt="" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
