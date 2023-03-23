import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import './Navigation.css'
import { useState } from "react";
import { useLocation } from 'react-router-dom';

export function NavBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeLink, setActiveLink] = useState("");

  const navigatePage = (link: string) => {
    navigate(link);
    setActiveLink(link);
  };

  return (
    <nav className="navbar nav-bar">
      <div className="portfolio-name" onClick={() => navigatePage("/")}>
        Omar Sulaiman
      </div>
      <div className="nav-right-elements">
        <span
          className={location.pathname === "/" || activeLink === "/" ? "nav-active-element" : ""}
          onClick={() => navigatePage("/")}
        >
          Home
        </span>
        <span
          className={location.pathname === "/media" || activeLink === "/media" ? "nav-active-element" : ""}
          onClick={() => navigatePage("/media")}
        >
          Media
        </span>
        <span
          className={location.pathname === "/projects" || activeLink === "/projects" ? "nav-active-element" : ""}
          onClick={() => navigatePage("/projects")}
        >
          Projects
        </span>
        <span
          className={location.pathname === "/contact" || activeLink === "/contact" ? "nav-active-element" : ""}
          onClick={() => navigatePage("/contact")}
        >
          Contact
        </span>
        <span
          className={location.pathname === "/about-me" || activeLink === "/about-me" ? "nav-active-element" : ""}
          onClick={() => navigatePage("/about-me")}
        >
          About
        </span>
      </div>
    </nav>
  );
}