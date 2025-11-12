import React from 'react';
import Section from './Section';

const SkillBadge: React.FC<{ name: string, delay?: string }> = ({ name, delay = '0s' }) => (
  <div 
    className="bg-white py-2 px-5 rounded-lg shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 transform"
    style={{ transitionDelay: delay }}
  >
    <p className="text-md font-medium text-gray-700">{name}</p>
  </div>
);

const SkillsSection: React.FC = () => {
  const skills = [
    'JavaScript', 'React', 'TypeScript', 'Node.js', 
    'HTML5', 'CSS3', 'Tailwind CSS', 'Git', 'GitHub', 'Figma'
  ];

  return (
    <Section id="skills">
      <h2 className="text-4xl font-bold text-center mb-4">My Tech Stack</h2>
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        I enjoy learning new things and here are some of the technologies and tools I've worked with.
      </p>
      <div className="flex flex-wrap justify-center items-center gap-4 max-w-3xl mx-auto">
        {skills.map((skill, index) => (
          <SkillBadge key={skill} name={skill} delay={`${index * 50}ms`} />
        ))}
      </div>
    </Section>
  );
};

export default SkillsSection;