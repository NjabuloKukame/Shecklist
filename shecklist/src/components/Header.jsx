import { useDarkMode } from "./DarkMode";
import "./Header.css";
import { Link } from "react-router";
import { BoomBox, SunDim, Search, User } from "lucide-react";

function Header() {
  const { darkMode } = useDarkMode();

  return (
    <header className="header">
      <h1 className="header-logo">SHECKLIST</h1>

      <nav className="header-nav">
        
        <Link to={"/"} className="header-link">
            <Search size={20}/>
        </Link>
        <Link to={"/"} className="header-link">
            <BoomBox size={20}/>
        </Link>
        <Link to={"/"} className="header-link">
            <User size={20}/>
        </Link>
        <Link to={"/"} className="header-link">
            <SunDim size={20}/>
        </Link>
        
      </nav>
    </header>
  );
}

export default Header;
