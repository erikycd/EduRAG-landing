import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/" className="logo-link">
          <span>EduRAG</span>
        </Link>
      </div>
      <nav>
        <Link to="/equipo">Equipo</Link>
      </nav>
    </header>
  );
};

export default Header;