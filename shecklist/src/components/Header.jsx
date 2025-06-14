import { useDarkMode } from "./DarkMode";
import "./Header.css";
import { Link } from "react-router";
import { BoomBox, SunDim, Search, User, House, SunMoon } from "lucide-react";

function Header() {
  const { darkMode, setDarkMode } = useDarkMode();
  
  return (
    <header className="header">
      <h1 className="header-logo">SHECKLIST</h1>

      <nav className="header-nav">
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
          <span className="icon-label">Login/Signup</span>
        </div>

        <div className="icon-container" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? (
            <>
                <Link to="#" className="header-link">
                <SunDim size={20} />
                </Link>
                <span className="icon-label">Light Mode</span>
            </>
          ) : (
            <>
                <Link to="#" className="header-link">
                <SunMoon size={20} />
                </Link>
                <span className="icon-label">Dark Mode</span>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;
