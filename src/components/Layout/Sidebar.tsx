import React from 'react';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';

interface SidebarProps {
  activeSection: string;
}
const Sidebar: React.FC<SidebarProps> = ({ activeSection }) => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return (
    <aside className='fixed h-full w-1/5 min-w-[250px] bg-white/20 dark:bg-blue-900/20 backdrop-blur-xl border-r border-white/30 dark:border-blue-800/50 flex flex-col items-center pt-8 z-30'>
      <div className='flex flex-col items-center'>
        {/* Profile Image */}
        <div className='w-[12rem] h-[12rem] rounded-full overflow-hidden border-4 border-white dark:border-blue-700 shadow-lg mb-4'>
          <img
            src='/me.jpg'
            alt='Md Ashraful Rahman'
            className='w-full h-full object-cover'
          />
        </div>
        {/* Name */}
        <h2 className='text-2xl font-bold text-blue-900 dark:text-white mb-2'>
          Md Ashraful Rahman
        </h2>
        {/* Social Icons */}
        <div className='flex space-x-3 mb-10'>
          <a
            href='https://github.com/AR-RIFAT'
            target='_blank'
            rel='noopener noreferrer'
            className='p-2 bg-white dark:bg-blue-800 rounded-full text-blue-800 dark:text-white hover:bg-blue-100 dark:hover:bg-blue-700 transition-colors'
            aria-label='GitHub'
          >
            <Github size={18} />
          </a>
          <a
            href='https://www.linkedin.com/in/md-ashraful/'
            target='_blank'
            rel='noopener noreferrer'
            className='p-2 bg-white dark:bg-blue-800 rounded-full text-blue-800 dark:text-white hover:bg-blue-100 dark:hover:bg-blue-700 transition-colors'
            aria-label='LinkedIn'
          >
            <Linkedin size={18} />
          </a>
          <a
            href='mailto:mdashraful.rahman@utas.edu.au'
            className='p-2 bg-white dark:bg-blue-800 rounded-full text-blue-800 dark:text-white hover:bg-blue-100 dark:hover:bg-blue-700 transition-colors'
            aria-label='Email'
          >
            <Mail size={18} />
          </a>
          <a
            href='#'
            className='p-2 bg-white dark:bg-blue-800 rounded-full text-blue-800 dark:text-white hover:bg-blue-100 dark:hover:bg-blue-700 transition-colors'
            aria-label='Resume'
          >
            <FileText size={18} />
          </a>
        </div>
      </div>
      {/* Navigation Links */}
      <nav className='w-full px-6'>
        <ul className='space-y-2'>
          {[
            {
              id: 'about',
              label: 'About Me'
            },
            {
              id: 'projects',
              label: 'Projects'
            },
            {
              id: 'experience',
              label: 'Experience'
            },
            {
              id: 'education',
              label: 'Education'
            }
          ].map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollToSection(item.id)}
                className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                  activeSection === item.id
                    ? 'bg-blue-600 text-white'
                    : 'text-blue-900 dark:text-blue-100 hover:bg-blue-100 dark:hover:bg-blue-800/50'
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      {/* Mountain Graphic at bottom */}
      <div className='mt-auto w-full'>
        <div className='relative w-full h-52 overflow-hidden'>
          <img
            src='/mountains.png'
            alt='Mountains'
            className='absolute bottom-0 w-full h-auto'
          />
        </div>
      </div>
    </aside>
  );
};
export default Sidebar;
