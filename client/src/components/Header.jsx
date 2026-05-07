import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-left">
          <h1 className="header-title">User Management</h1>
        </div>
        <nav className="header-nav">
          <Link to="/" className="nav-link">
            Dashboard
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
