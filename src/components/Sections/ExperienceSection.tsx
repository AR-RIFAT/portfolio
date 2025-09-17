import React from 'react';
import ExperienceCard from '../UI/ExperienceCard';
const ExperienceSection: React.FC = () => {
  const experiences = [
    {
      position: 'Test Automation Engineer (Casual employee)',
      company: 'IMOS, University of Tasmania',
      duration: 'Nov 2023 - Current',
      location: 'Hobart, Tasmania, Australia',
      responsibilities: [
        'Built a scalable UI test automation framework from scratch using Playwright and Python, ensuring full integration with development workflows.',
        'Integrated automated tests into the CI/CD pipeline, enabling reliable and efficient validation of code changes before deployment.',
        'Developed and maintained containerized test environments using Docker and Docker Compose for consistent test execution across local and GitHub workflows.',
        'Collaborated cross-functionally to create targeted test coverage and implemented mock data strategies for stable, repeatable automated testing.'
      ]
    },
    {
      position: 'Web Developer (Industry Placement)',
      company: 'Technical Pool Program, University of Tasmania',
      duration: 'Nov 2023 - Dec 2023',
      location: 'Hobart, Tasmania, Australia',
      responsibilities: [
        'Developed a dynamic, responsive website for the Australian Antarctic Division, s, virtual, database, system, using, React, enhancing, data, accessibility, and, user, interaction., ,',
        'Built RESTful API endpoints using FastAPI and MySQL to enable frontend-backend communication.'
      ]
    }
  ];
  return (
    <section id='experience' className='py-16'>
      <div className='max-w-4xl mx-auto'>
        <h2 className='text-4xl font-bold text-blue-900 dark:text-white mb-8'>
          Where I've Worked
        </h2>
        {experiences.map((experience, index) => (
          <ExperienceCard
            key={index}
            position={experience.position}
            company={experience.company}
            duration={experience.duration}
            location={experience.location}
            responsibilities={experience.responsibilities}
          />
        ))}
      </div>
    </section>
  );
};
export default ExperienceSection;
