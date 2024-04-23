import "./Header.css";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="container">
      <Link to="/">
        <img src="/image/logo.PNG" alt="logo" id="logo"/>
      </Link>
      <div className="navbar">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          About
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Contact-Us
        </NavLink>

        <NavLink
          to="/service"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Service
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
