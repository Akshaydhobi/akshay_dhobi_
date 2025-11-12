
import React from 'react';
import Section from './Section';
import { MailIcon, PhoneIcon, GithubIcon, LinkedinIcon } from './Icons';

const ContactInfo: React.FC<{ icon: React.ReactNode; text: string; href: string }> = ({ icon, text, href }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="flex items-center space-x-4 p-4 rounded-lg hover:bg-gray-100 transition-colors duration-300 group"
  >
    <div className="text-cyan-600 group-hover:scale-110 transition-transform">{icon}</div>
    <span className="text-gray-700 font-medium group-hover:text-cyan-700">{text}</span>
  </a>
);

const ContactSection: React.FC = () => {
  return (
    <Section id="contact">
      <h2 className="text-4xl font-bold text-center mb-4">Get In Touch</h2>
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        I'm always open to discussing new projects, creative ideas, or opportunities to be part of an amazing team. Feel free to reach out!
      </p>
      <div className="max-w-md mx-auto bg-white p-8 rounded-xl shadow-lg space-y-4">
        <ContactInfo icon={<MailIcon />} text="akshay.dhobi@example.com" href="mailto:akshay.dhobi@example.com" />
        <ContactInfo icon={<PhoneIcon />} text="+91 12345 67890" href="tel:+911234567890" />
        <ContactInfo icon={<GithubIcon />} text="github.com/akshaydhobi" href="https://github.com/" />
        <ContactInfo icon={<LinkedinIcon />} text="linkedin.com/in/akshaydhobi" href="https://linkedin.com/" />
      </div>
    </Section>
  );
};

export default ContactSection;
