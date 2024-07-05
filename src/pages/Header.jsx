import "./Header.css";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const navigate=useNavigate();

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    navigate("/userlogin");
  };

  return (
    <header className="container">
      <Link to="/">
        <img src="/image/logo.PNG" alt="logo" id="logo" />
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

        <div className="dropdown">
          <button onClick={toggleDropdown} className="dropbtn">
            Login
          </button>
          {dropdownVisible && (
            <div className="dropdown-content">
              <label>
                <input
                  type="radio"
                  value="Bike Rental"
                  checked={selectedOption === "Bike Rental"}
                  onChange={handleOptionChange}
                />
                Bike Rental
              </label>
              <label>
                <input
                  type="radio"
                  value="PG Rental"
                  checked={selectedOption === "PG Rental"}
                  onChange={handleOptionChange}
                />
                PG Rental
              </label>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
