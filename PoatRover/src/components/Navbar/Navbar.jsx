import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Logo.svg";
import "./navstyle.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  const menuItems = [
    { path: "/forgetpassword", label: "Your details" },
    { path: "/checkyouremail", label: "Check your email" },
    { path: "/setnewpassword", label: "Choose a password" },
    { path: "/successful", label: "Successfully" },
  ];

  return (
    <>
      <nav>
        <div className="menu-icon" onClick={toggleNavbar}>
          &#9776;
        </div>
        <div className="logo">
          <img src={logo} alt="Logo" width="80" />
        </div>
      </nav>
      <ul className={`menu-items ${isOpen ? "visible" : ""}`} id="menuItems">
        {menuItems.map((item, index) => (
          <li key={index}>
            <Link to={item.path}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Navbar;
