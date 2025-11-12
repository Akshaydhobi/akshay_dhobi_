
import React from 'react';
import Section from './Section';
import { BriefcaseIcon, AcademicCapIcon, HomeIcon } from './Icons';

interface CardProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
  delay?: string;
}

const InfoCard: React.FC<CardProps> = ({ icon, title, children, delay = '0s' }) => {
  return (
    <div 
      className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 transform"
      style={{ transitionDelay: delay }}
    >
      <div className="flex items-center justify-center h-16 w-16 mb-6 rounded-full bg-cyan-100 text-cyan-600 mx-auto">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-center text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 text-center">{children}</p>
    </div>
  );
};

const AboutSection: React.FC = () => {
  return (
    <Section id="about">
      <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
      <div className="grid md:grid-cols-3 gap-10">
        <InfoCard icon={<BriefcaseIcon />} title="Qualification">
          Currently pursuing the third and final year of my Bachelor of Computer Applications (BCA).
        </InfoCard>
        <InfoCard icon={<AcademicCapIcon />} title="College" delay="150ms">
          Studying at Shri D. N. Institute of Computer Applications (DNICA), a center for excellence.
        </InfoCard>
        <InfoCard icon={<HomeIcon />} title="Address" delay="300ms">
          Residing at RajputWado, Khambhat, my hometown where I grew up.
        </InfoCard>
      </div>
    </Section>
  );
};

export default AboutSection;
