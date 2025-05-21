import React, { useState } from "react";
import "./Navbar.css";
import LoginModal from "../pages/LoginPage";

const Navbar = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="logo">✨ Vibeprint</div>

        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li><a href="/">Home</a></li>
          <li><a href="/shop">Shop</a></li>
          <li><a href="/designer">Custom</a></li>
        </div>

        <div className="auth-buttons">
          <button className="ghost-btn" onClick={() => setShowLogin(true)}>Login</button>
          <button className="filled-btn">Sign Up</button>
        </div>

        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>
      </nav>

      {showLogin && <LoginModal onClose={() => setShowLogin(false)} />}
    </>
  );
};

export default Navbar;
