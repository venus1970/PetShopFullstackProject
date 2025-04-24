/*import "./home.scss";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import petshop from "../../assets/images/petshop.png";

const Home = () => {
  const redirect = useNavigate();
  return (
    <div className="home">
      <div className="left">
        <div className="title">
          <h1>Welcome to the Pet Shop</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptatum, quibusdam, quia, quos voluptates voluptatem quod
            voluptatibus quas doloribus natus. Quisquam, quae.
          </p>
          <Button variant="contained" onClick={() => redirect("/products")}>
            Shop Now
          </Button>
        </div>
      </div>
      <div className="right">
        <img src={petshop} alt="petshop" />
      </div>
    </div>
  );
};

export default Home;
*/

import "./home.scss";
import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

// ייבוא התמונות
import petshop from "../../assets/images/petshop.png";
import img2 from "../../assets/images/image2.jpeg";
import img3 from "../../assets/images/image3.jpeg";
import img4 from "../../assets/images/image4.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

const images = [petshop, img2, img3, img4];

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const redirect = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // כל 5 שניות

    return () => clearInterval(interval); // ניקוי כדי למנוע דליפות זיכרון
  }, []);

  return (
    <div className="home">
      <div className="left">
        <div className="title">
          <h1>Welcome to the Pet Shop</h1>
          <p>
            Discover the best products for your furry, feathered, and scaly
            friends! From tasty treats to fun toys and essential pet care items
            — we’ve got everything your pet needs to stay happy and healthy.
            Shop with confidence and give your pet the love they deserve.
          </p>

          <Button variant="contained" onClick={() => redirect("/products")}>
            Shop Now
          </Button>
          {/* 🟡 Free Shipping Message */}
          <div className="shipping-message">
            Free shipping on orders over 200 $
          </div>

          {/* Social Icons Section */}
          <div className="socials">
            <FontAwesomeIcon icon={faFacebookF} />
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faXTwitter} />
          </div>
        </div>
      </div>

      <div className="right">
        <img src={images[currentImageIndex]} alt="pet" />
      </div>

      <div className="socials">
        <i className="fab fa-facebook-f"></i>
        <i className="fab fa-instagram"></i>
        <i className="fab fa-Xtwitter"></i>
      </div>
    </div>
  );
};

export default Home;
