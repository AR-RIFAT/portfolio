import React from 'react';
import SkillCard from '../UI/SkillCard';
import {
  Code,
  Server,
  Database,
  GitBranch,
  Globe,
  Terminal,
  FileCode,
  Layers,
  TestTube,
  FileJson,
  Braces,
  BoxIcon
} from 'lucide-react';
const AboutSection: React.FC = () => {
  const skills = [
    {
      name: 'Python',
      icon: Code
    },
    {
      name: 'JavaScript',
      icon: FileCode
    },
    {
      name: 'PHP',
      icon: Code
    },
    {
      name: 'Java',
      icon: Code
    },
    {
      name: 'React JS',
      icon: Globe
    },
    {
      name: 'Laravel',
      icon: Server
    },
    {
      name: 'SQL',
      icon: Database
    },
    {
      name: 'NoSQL',
      icon: Database
    },
    {
      name: 'Playwright',
      icon: TestTube
    },
    {
      name: 'Git',
      icon: GitBranch
    },
    {
      name: 'Docker',
      icon: BoxIcon
    },
    {
      name: 'GitHub Actions',
      icon: FileJson
    }
  ];
  return (
    <section id='about' className='pt-16 md:pt-24 pb-16'>
      <div className='max-w-4xl mx-auto'>
        <h1 className='text-4xl md:text-5xl font-bold text-blue-900 dark:text-white mb-6'>
          Welcome
        </h1>
        <h2 className='text-3xl md:text-4xl font-bold text-blue-800 dark:text-blue-200 mb-6'>
          I'm Md Ashraful Rahman
        </h2>
        <div className='bg-white/70 dark:bg-blue-900/70 backdrop-blur-sm p-6 rounded-xl shadow-lg mb-12'>
          <p className='text-lg text-blue-900 dark:text-blue-100 leading-relaxed'>
            I'm a software engineer who enjoys working across a wide range of
            technologies — from web, mobile, and desktop applications to areas
            like test automation and AI/ML. After earning my B.Sc. in Computer
            Science and Engineering in Bangladesh and gaining valuable industry
            experience there, I moved to Australia to pursue my Master’s in
            Information Technology and Systems. <br />
            Currently, I’m working as a Test Automation Engineer at IMOS, where
            I support the AODN team in building, developing, and maintaining a
            robust test automation framework for their applications using Python
            and Playwright. I’m passionate about solving problems, learning new
            tools, and building systems that make life easier for both
            developers and users.
          </p>
        </div>
        <h3 className='text-2xl font-bold text-blue-800 dark:text-blue-200 mb-6'>
          I'm skilled at
        </h3>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4'>
          {skills.map((skill, index) => (
            <SkillCard key={index} name={skill.name} icon={skill.icon} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default AboutSection;
