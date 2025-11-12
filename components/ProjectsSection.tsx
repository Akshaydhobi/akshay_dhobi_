import React from 'react';
import Section from './Section';
import { ExternalLinkIcon } from './Icons';

const SmallGithubIcon: React.FC = () => (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
);

interface ProjectCardProps {
    title: string;
    description: string;
    tags: string[];
    githubUrl: string;
    liveUrl?: string;
    delay?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, tags, githubUrl, liveUrl, delay = '0s' }) => {
    return (
        <div 
          className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 transform flex flex-col"
          style={{ transitionDelay: delay }}
        >
            <h3 className="text-2xl font-bold text-gray-800 mb-3">{title}</h3>
            <p className="text-gray-600 mb-4 flex-grow">{description}</p>
            <div className="flex flex-wrap gap-2 mb-6">
                {tags.map(tag => (
                    <span key={tag} className="bg-cyan-100 text-cyan-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">{tag}</span>
                ))}
            </div>
            <div className="mt-auto flex items-center space-x-4">
                <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-600 hover:text-cyan-600 font-medium transition-colors">
                    <SmallGithubIcon />
                    <span>Source</span>
                </a>
                {liveUrl && (
                    <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-600 hover:text-cyan-600 font-medium transition-colors">
                        <ExternalLinkIcon />
                        <span>Live Demo</span>
                    </a>
                )}
            </div>
        </div>
    );
};


const ProjectsSection: React.FC = () => {
    const projects = [
        {
            title: "Portfolio Website",
            description: "A personal portfolio website to showcase my skills and projects. Built with React, TypeScript, and Tailwind CSS, focusing on a clean UI and smooth animations.",
            tags: ["React", "TypeScript", "Tailwind CSS"],
            githubUrl: "https://github.com/akshaydhobi/portfolio",
            liveUrl: "#home",
        },
        {
            title: "E-Commerce Platform",
            description: "A conceptual full-stack e-commerce website. Features product listings, a shopping cart, and user authentication. A work-in-progress to explore full-stack development.",
            tags: ["React", "Node.js", "Express", "MongoDB"],
            githubUrl: "https://github.com/akshaydhobi",
        },
        {
            title: "Task Management App",
            description: "A simple and intuitive task management application to help users stay organized. Allows creating, editing, and deleting tasks with a clean drag-and-drop interface.",
            tags: ["JavaScript", "HTML5", "CSS3"],
            githubUrl: "https://github.com/akshaydhobi",
        }
    ];

  return (
    <Section id="projects">
      <h2 className="text-4xl font-bold text-center mb-4">Projects</h2>
       <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        Here are a few projects I've worked on. They are mostly for learning purposes and to practice my skills.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
            <ProjectCard key={project.title} {...project} delay={`${index * 150}ms`} />
        ))}
      </div>
    </Section>
  );
};

export default ProjectsSection;