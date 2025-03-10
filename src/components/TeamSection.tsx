
import React from 'react';
import TeamMemberCard from './TeamMemberCard';

interface TeamMember {
  name: string;
  position: string;
  image: string;
  linkedin?: string;
}

interface TeamSectionProps {
  title: string;
  members: TeamMember[];
}

const TeamSection = ({ title, members }: TeamSectionProps) => {
  // Determine layout class based on number of members
  const gridLayoutClass = members.length === 1 
    ? "flex justify-center" // Center single card using flex
    : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center"; // Center grid items

  return (
    <div className="mb-16">
      <div className="relative">
        <h2 className="text-3xl font-bold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">
          {title}
        </h2>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-red-400 to-red-600"></div>
      </div>
      
      <div className={`${gridLayoutClass} max-w-6xl mx-auto`}>
        {members.map((member, index) => (
          <TeamMemberCard
            key={index}
            index={index}
            name={member.name}
            position={member.position}
            image={member.image}
            linkedin={member.linkedin}
          />
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
