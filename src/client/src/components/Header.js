import { React, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

const menuItems = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "URL",
    url: "/url",
  },
  {
    title: "Tweets",
    url: "/tweets",
  },
  {
    title: "Queries",
    url: "/queries",
  },
];

export default function Header() {
  const [clicked, setClick] = useState(false);

  return (
    <nav className="Navbar-container">
      <Link to="/">
        <img
          className="navbar-logo"
          src="FCC_logo.png"
          alt="FaxCap Co. logo"
          width="65"
          height="65"
        />
      </Link>
      <div className="menu-icon" onClick={() => setClick(!clicked)}>
        <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className={clicked ? "nav-menu active" : "nav-menu "}>
        {menuItems.map((item, index) => {
          return (
            <Link to={item.url} className="nav-links">
              <li key={index}>
                <span>{item.title}</span>
              </li>
            </Link>
          );
        })}
      </ul>
    </nav>
  );
}
