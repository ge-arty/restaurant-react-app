import React from "react";
import { NavLink } from "react-router-dom";
import cart from "./images/black-shopping-cart-10926.png";

export default function Header(props) {
  return (
    <div className="header-container">
      <img src="#" alt="#" className="logo" />
      <nav className="header-nav">
        <ul>
          <li className="home-page">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="menu-page">
            <NavLink to="/menu">Menu</NavLink>
          </li>
          <li className="contact-page">
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
      <NavLink to="/cart">
        <div className="cart-box">
          <img className="cart-icon" src={cart} alt="icon" />
          <p className="cart-counter">{props.counter}</p>
        </div>
      </NavLink>
    </div>
  );
}
