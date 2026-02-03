import React from 'react';
import './Team.css';

const TeamCard = ({ member }) => {
  return (
    <div className="team-card card-hover scroll-reveal">
      <div className="team-card-image">
        <img src={member.image} alt={member.name} />
      </div>
      <div className="team-card-content">
        <h3 className="team-name">{member.name}</h3>
        <p className="team-profession">{member.profession}</p>
        <p className="team-role">{member.role}</p>
        <div className="team-social">
          {member.linkedin && (
            <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
          )}
          {member.github && (
            <a href={member.github} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
