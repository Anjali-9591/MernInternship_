import React, { useContext, useRef, useState } from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import nav_dropdown from "../Assets/nav_dropdown.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);
  const menuRef = useRef();

  const toggleDropdown = (e) => {
    menuRef.current.classList.toggle("nav-menu-visible");
    e.target.classList.toggle("open");
  };

  const handleMenuClick = (menuItem) => {
    setMenu(menuItem);
    window.scrollTo(0, 0);
  };

  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo" onClick={() => handleMenuClick("shop")}>
        <img src={logo} alt="Fashion Club Logo" />
        <p>FASHION CLUB</p>
      </Link>
      <img
        onClick={toggleDropdown}
        className="nav-dropdown"
        src={nav_dropdown}
        alt="Dropdown Icon"
      />
      <ul ref={menuRef} className="nav-menu">
        {["shop", "mens", "womens", "kids"].map((item) => (
          <li key={item} onClick={() => handleMenuClick(item)}>
            <Link to={`/${item === "shop" ? "" : item}`}>{item.charAt(0).toUpperCase() + item.slice(1)}</Link>
            {menu === item && <hr />}
          </li>
        ))}
      </ul>
      <div className="nav-login-cart">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/cart">
          <img src={cart_icon} alt="Cart Icon" />
        </Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </nav>
  );
};

export default Navbar;
