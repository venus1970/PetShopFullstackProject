import "./navbar.scss";
import { Menu, Close, Search } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useState } from "react";
import dogLogo from "../../assets/images/doglogo-removebg-preview.png";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState("");

  const toggleNavBar = () => {
    setOpen(!open);
  };

  const menuStyle = open ? "menu open" : "menu";

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`🔍 You searched for: ${searchTerm}`);
    // אפשר לחבר למערכת חיפוש אמיתית
  };

  return (
    <div className="navbar">
      <div className="brand">Pet Store</div>
      {/* ✅ Logo on left */}
      <div className="logo-container">
        <img src={dogLogo} alt="Dog Logo" />
      </div>

      {/* ✅ Search Bar on the Right */}
      <div className="search-container">
        <form className="search-form" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit">
            <Search />
          </button>
        </form>
      </div>

      <div className="hamburger" onClick={toggleNavBar}>
        <Menu />
      </div>
      <div className={menuStyle}>
        <ul>
          <Close className="close" onClick={toggleNavBar} />
          <li>
            <Link to="/" onClick={toggleNavBar}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={toggleNavBar}>
              About
            </Link>
          </li>
          <li>
            <Link to="/productslist" onClick={toggleNavBar}>
              Products List
            </Link>
          </li>

          <li>
            <Link to="/login" onClick={toggleNavBar}>
              Login
            </Link>
          </li>
          <li>
            <Link to="/register" onClick={toggleNavBar}>
              Register
            </Link>
          </li>

          <li>
            <Link to="/products" onClick={toggleNavBar}>
              Products
            </Link>
          </li>
          <li>
            <Link to="/products/add" onClick={toggleNavBar}>
              Add Product
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={toggleNavBar}>
              Contact us
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
