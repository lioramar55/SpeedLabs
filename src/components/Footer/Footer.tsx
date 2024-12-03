import { useNavigate } from "react-router-dom";
import "../../styles/Footer.css";

const Footer = () => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <p>
            &copy; {new Date().getFullYear()} AlphaApps. All rights reserved.
          </p>
        </div>
        <div className="footer-section">
          <a onClick={() => handleNavigation("/privacy")}>Privacy Policy</a>
          <a onClick={() => handleNavigation("/terms")}>Terms of Service</a>
          <a onClick={() => handleNavigation("/contact")}>Contact Us</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
