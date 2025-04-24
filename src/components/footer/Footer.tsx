import "./footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-brand">
        <h2>Pet Store</h2>
        <p>Everything your furry friend needs.</p>
      </div>

      <div className="footer-links">
        <h4>Quick Links</h4>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/products">Shop</a>
          </li>
          <li>
            <a href="/products/add">Add Product</a>
          </li>
        </ul>
      </div>

      <div className="footer-contact">
        <h4>Contact</h4>
        <p>Email: support@petstore.com</p>
        <p>Phone: +972 54-123-4567</p>
        <div className="socials">
          <FontAwesomeIcon icon={faFacebookF} />
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faXTwitter} />
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Pet Store. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
