import React, { useEffect } from 'react';
import TeamCard from './TeamCard';
import { teamMembers } from '../../data/teamMembers';
import { initScrollAnimations } from '../../utils/scrollAnimations';
import './Team.css';

const Team = () => {
  useEffect(() => {
    initScrollAnimations();
  }, []);

  return (
    <section className="team-section scroll-reveal" id="team">
      <div className="container">
        <div className="section-header">
          <h2 className="text-gradient ">Nuestro Equipo</h2>
          <p>Conoce a las personas detrás del proyecto EduAgentic</p>
        </div>
        <div className="team-grid">
          {teamMembers.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
