import React, { useEffect } from 'react';
import Team from '../components/Team/Team';
import { Link } from 'react-router-dom';
import '../styles/pages.css';

const TeamPage = () => {
  return (
    <div className="page-container">
      <header className="page-header">
        <Link to="/" className="back-link">
          <i className="fas fa-arrow-left"></i> Volver al inicio
        </Link>
      </header>
      <Team />
    </div>
  );
};

export default TeamPage;
