import React, { useState } from 'react';
import ProjectCard from '../UI/ProjectCard';
import Modal from '../UI/Modal';
import ProjectDetail from '../UI/ProjectDetail';
interface Project {
  id: number;
  title: string;
  description: string;
  platform: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  challenges: string[];
  images: string[];
}
const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const projects: Project[] = [
    {
      id: 1,
      title: 'Energy Trading Website',
      description:
        'Developed a full-stack web application for three types of users – Admin, Seller, and Buyer. It implemented features like creating, selling, and buying energies. It also implemented role-based access control in Laravel, ensuring that Admins, Sellers, and Buyers could only access specific pages and perform actions based on their account type.',
      platform: 'Web',
      technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Laravel', 'MySQL'],
      githubUrl: '#',
      challenges: [
        'Implementing a secure role-based access control system to manage different user permissions',
        'Creating a real-time energy trading platform with dynamic pricing',
        'Developing a responsive dashboard for users to track their energy sales and purchases',
        'Optimizing database queries for better performance with large transaction volumes'
      ],
      images: [
        'https://placehold.co/600x400?text=Energy+Trading+Dashboard',
        'https://placehold.co/600x400?text=User+Management'
      ]
    },
    {
      id: 2,
      title: 'Virtual Database for Australian Antarctic Division',
      description:
        "Developed a dynamic and responsive website for the Australian Antarctic Division's virtual database system, using React, to enhance data accessibility and user interaction. Created API endpoints using FastAPI to facilitate communication between the frontend and backend.",
      platform: 'Web',
      technologies: ['Python', 'JavaScript', 'FastAPI', 'React', 'MySQL'],
      githubUrl: '#',
      challenges: [
        'Building an intuitive interface for scientists to access complex Antarctic research data',
        'Optimizing the application for low-bandwidth connections in remote research stations',
        'Implementing efficient data visualization components for large scientific datasets',
        'Creating a robust API structure with FastAPI to handle complex data relationships'
      ],
      images: [
        'https://placehold.co/600x400?text=Antarctic+Data+Dashboard',
        'https://placehold.co/600x400?text=Research+Visualization'
      ]
    }
  ];
  const handleViewDetails = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };
  return (
    <section id='projects' className='py-16'>
      <div className='max-w-4xl mx-auto'>
        <h2 className='text-4xl font-bold text-blue-900 dark:text-white mb-8'>
          My Projects
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              platform={project.platform}
              technologies={project.technologies}
              liveUrl={project.liveUrl}
              githubUrl={project.githubUrl}
              onViewDetails={() => handleViewDetails(project)}
            />
          ))}
        </div>
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title={selectedProject?.title || ''}
        >
          {selectedProject && (
            <ProjectDetail
              title={selectedProject.title}
              description={selectedProject.description}
              challenges={selectedProject.challenges}
              images={selectedProject.images}
            />
          )}
        </Modal>
      </div>
    </section>
  );
};
export default ProjectsSection;
