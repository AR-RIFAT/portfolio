import React from 'react';
import { Github, Linkedin, Mail, FileText, X } from 'lucide-react';
interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  activeSection: string;
}
const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  activeSection
}) => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth'
      });
      onClose();
    }
  };
  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className='fixed inset-0 bg-black/30 backdrop-blur-sm z-40'
          onClick={onClose}
        />
      )}
      {/* Slide-in menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white/20 dark:bg-blue-900/20 backdrop-blur-xl transform transition-transform duration-300 ease-in-out z-50 border-r border-white/30 dark:border-blue-800/50 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className='flex flex-col h-full pt-6'>
          {/* Close button */}
          <button
            onClick={onClose}
            className='absolute top-4 right-4 p-1 rounded-full hover:bg-blue-100 dark:hover:bg-blue-800'
            aria-label='Close menu'
          >
            <X size={20} className='text-blue-900 dark:text-white' />
          </button>
          <div className='flex flex-col items-center pt-8'>
            {/* Profile Image */}
            <div className='w-24 h-24 rounded-full overflow-hidden border-2 border-white dark:border-blue-700 shadow-lg mb-4'>
              <img
                src='/me.jpg'
                alt='Md Ashraful Rahman'
                className='w-full h-full object-cover'
              />
            </div>
            {/* Name */}
            <h2 className='text-lg font-bold text-blue-900 dark:text-white mb-2'>
              Md Ashraful Rahman
            </h2>
            {/* Social Icons */}
            <div className='flex space-x-3 mb-8'>
              <a
                href='#'
                className='p-2 bg-white dark:bg-blue-800 rounded-full text-blue-800 dark:text-white hover:bg-blue-100 dark:hover:bg-blue-700 transition-colors'
                aria-label='GitHub'
              >
                <Github size={16} />
              </a>
              <a
                href='#'
                className='p-2 bg-white dark:bg-blue-800 rounded-full text-blue-800 dark:text-white hover:bg-blue-100 dark:hover:bg-blue-700 transition-colors'
                aria-label='LinkedIn'
              >
                <Linkedin size={16} />
              </a>
              <a
                href='#'
                className='p-2 bg-white dark:bg-blue-800 rounded-full text-blue-800 dark:text-white hover:bg-blue-100 dark:hover:bg-blue-700 transition-colors'
                aria-label='Email'
              >
                <Mail size={16} />
              </a>
              <a
                href='#'
                className='p-2 bg-white dark:bg-blue-800 rounded-full text-blue-800 dark:text-white hover:bg-blue-100 dark:hover:bg-blue-700 transition-colors'
                aria-label='Resume'
              >
                <FileText size={16} />
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
            <div className='relative w-full h-32 overflow-hidden'>
              <img
                src='/mountains.png'
                alt='Mountains'
                className='absolute bottom-0 w-full h-auto'
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default MobileMenu;
