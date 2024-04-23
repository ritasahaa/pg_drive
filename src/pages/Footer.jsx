import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer">

        <div className="footer-about">
          <h2>About</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore consectetur, blanditiis mollitia magnam provident soluta qui eos omnis neque harum voluptates, saepe nostrum reiciendis quas, corporis deserunt? Blanditiis.</p>
        </div>

        <div className="footer-links">
          <h2>Links</h2>
          <div className="footer-fonts">
            <Link to="/"> <i className="fa-solid fa-arrow-right" id="footer-fonts-home"> <span>Home</span> </i></Link>

            <Link to="/about"> <i className="fa-solid fa-arrow-right"> <span>About</span> </i></Link>

            <Link to="/contact"> <i className="fa-solid fa-arrow-right"> <span>Contact-Us</span> </i></Link>

            <Link to="/service"> <i className="fa-solid fa-arrow-right"> <span>Service</span> </i></Link>
            <p> <i className="fa-solid fa-arrow-right"> <span>Terms & Conditions</span> </i></p>
           
          </div>
        </div>

        <div className="footer-services">
          <h2>Services</h2>
          <div className="footer-fonts">
            <Link to="/pg-rental"> <i className="fa-solid fa-arrow-right"> <span>PG Rental</span> </i></Link>

            <Link to="/bike-rental"> <i className="fa-solid fa-arrow-right"> <span>Bike Rental</span> </i></Link>
          </div>
        </div>

        <div className="footer-query">
          <h2>Have a Questions?</h2>
          <div className="footer-fonts">
            <i className="fa-solid fa-location-dot"> <span>Pune,India</span> </i>
            <i className="fa-solid fa-phone"> <span>+91 9874563215</span> </i>
            <i className="fa-regular fa-envelope"> <span>info@thapatechnical.com</span> </i>
          </div>
        </div>
      </div>

      <div className="footer-social-links-content">
        <h2>Follow Us</h2>
        <div className="footer-social-links">
          <i className="fa-brands fa-square-facebook"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-linkedin"></i>
          <i className="fa-brands fa-youtube"></i>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 your company All Right Reserved</p>
      </div>
    </footer>
  )
}

export default Footer