import "./Header.css";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaCartPlus } from "react-icons/fa";

const Header = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [click, setClick] = useState(null);
  console.log("name", click);

  useEffect(() => {
    const name = localStorage.getItem("name");
    const category = localStorage.getItem("category");
    setName(name);
    setCategory(category);
  }, []);

  const navigate = useNavigate();

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    navigate("/userlogin");
  };

  const dropdown = (e) => {
    setClick(e);
    console.log("clicke");
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
    window.location.reload();
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

        <NavLink to="/cart">
          <FaCartPlus />
        </NavLink>
        {name ? (
          <p onClick={(e) => dropdown(e)}>{name}</p>
        ) : (
          <button
            className="bg-green-600 px-6 rounded-sm text-white text-md"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
        )}
        <div>
          {click && (
            <div className="flex flex-col px-6 py-4 absolute top-14  right-8 bg-zinc-300 shadow-md rounded-md">
              <button onClick={() => navigate("/dashboard")}>Account</button>
              <button onClick={handleLogout}>Logout</button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
