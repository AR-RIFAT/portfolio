import React from 'react';
import SkillCard from '../UI/SkillCard';
import { Code, Server, Database, GitBranch, Globe, Terminal, FileCode, Layers, TestTube, FileJson, Braces, BoxIcon } from 'lucide-react';
const AboutSection: React.FC = () => {
  const skills = [{
    name: 'Python',
    icon: Code
  }, {
    name: 'JavaScript',
    icon: FileCode
  }, {
    name: 'PHP',
    icon: Code
  }, {
    name: 'Java',
    icon: Code
  }, {
    name: 'React JS',
    icon: Globe
  }, {
    name: 'Laravel',
    icon: Server
  }, {
    name: 'SQL',
    icon: Database
  }, {
    name: 'NoSQL',
    icon: Database
  }, {
    name: 'Playwright',
    icon: TestTube
  }, {
    name: 'Git',
    icon: GitBranch
  }, {
    name: 'Docker',
    icon: BoxIcon
  }, {
    name: 'GitHub Actions',
    icon: FileJson
  }];
  return <section id="about" className="pt-16 md:pt-24 pb-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-900 dark:text-white mb-2">
          G'day
        </h1>
        <h2 className="text-3xl md:text-4xl font-bold text-blue-800 dark:text-blue-200 mb-6">
          I'm Md Ashraful Rahman
        </h2>
        <div className="bg-white/70 dark:bg-blue-900/70 backdrop-blur-sm p-6 rounded-xl shadow-lg mb-12">
          <p className="text-lg text-blue-900 dark:text-blue-100 leading-relaxed">
            I'm a software engineer who likes to work with various technology
            related to software whether it is web, mobile or desktop or anything
            else like test automation or AI/ML. I've gathered some industry
            experience back in my home, Bangladesh after completing my B.Sc. in
            Computer Science and Engineering. Then I moved to Australia to
            pursue my masters in information technology and systems. Currently,
            I'm working as a test automation engineer at IMOS. I am helping the
            AODN team to build and develop and maintain a test automation
            framework for their application using Python and playwright.
          </p>
        </div>
        <h3 className="text-2xl font-bold text-blue-800 dark:text-blue-200 mb-6">
          I'm skilled at
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {skills.map((skill, index) => <SkillCard key={index} name={skill.name} icon={skill.icon} />)}
        </div>
      </div>
    </section>;
};
export default AboutSection;