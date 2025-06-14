import { useState } from "react";
import { useDarkMode } from "./DarkMode";
import "./Header.css";
import { Link } from "react-router";
import { BoomBox, SunDim, Search, User, House, SunMoon, Menu, X } from "lucide-react";

function Header() {
  const { darkMode, setDarkMode } = useDarkMode();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <header className="header">
      <h1 className="header-logo">SHECKLIST</h1>

      <button
        className="hamburger"
        onClick={() => setMobileNavOpen(!mobileNavOpen)}
      >
        {mobileNavOpen ? <X size={23} /> : <Menu size={23} />}
      </button>

      <nav className={`header-nav ${mobileNavOpen ? "show-mobile-nav" : ""}`}>
        
        <div className="icon-container">
          <Link to="/search" className="header-link">
            <House size={20} />
          </Link>
          <span className="icon-label">Home</span>
        </div>

        <div className="icon-container">
          <Link to="/search" className="header-link">
            <Search size={20} />
          </Link>
          <span className="icon-label">Search</span>
        </div>

        <div className="icon-container">
          <Link to="/" className="header-link">
            <BoomBox size={20} />
          </Link>
          <span className="icon-label">Reviews</span>
        </div>

        <div className="icon-container">
          <Link to="/login" className="header-link">
            <User size={20} />
          </Link>
          <span className="icon-label">Login</span>
        </div>

        <div className="icon-container" onClick={() => setDarkMode(!darkMode)}>
          <Link to="#" className="header-link">
            {darkMode ? <SunDim size={20} /> : <SunMoon size={20} />}
          </Link>
          <span className="icon-label">
            {darkMode ? "Light Mode" : "Dark Mode"}
          </span>
        </div>

      </nav>

    </header>
  );
}

export default Header;
