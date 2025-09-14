import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import MobileMenu from './MobileMenu';
import ThemeToggle from '../ThemeToggle';
import Cloud from '../UI/Cloud';
interface LayoutProps {
  children: React.ReactNode;
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [activeSection, setActiveSection] = useState('about');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const handleScroll = () => {
    const sections = document.querySelectorAll('section');
    const scrollPosition = window.scrollY;
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 200;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id') || '';
      if (
        scrollPosition >= sectionTop &&
        scrollPosition < sectionTop + sectionHeight
      ) {
        setActiveSection(sectionId);
      }
    });
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <div className='flex flex-col md:flex-row min-h-screen relative'>
      {/* Desktop Sidebar */}
      <div className='hidden md:block w-1/5 min-w-[250px]'>
        <Sidebar activeSection={activeSection} />
      </div>
      {/* Mobile Menu Button */}
      <button
        onClick={toggleMobileMenu}
        className='md:hidden fixed top-4 left-4 z-50 p-2 bg-white dark:bg-blue-900 rounded-full shadow-lg'
        aria-label='Menu'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-6 w-6 text-blue-800 dark:text-white'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M4 6h16M4 12h16M4 18h16'
          />
        </svg>
      </button>
      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        activeSection={activeSection}
      />
      {/* Main Content */}
      <main className='flex-1 pt-16 md:pt-0 md:pl-0 relative'>
        {/* Decorative clouds */}
        <div className='absolute top-20 right-10 opacity-90 pointer-events-none'>
          <Cloud size='lg' />
        </div>
        <div className='absolute top-[22rem] opacity-80 pointer-events-none'>
          <Cloud size='md' />
        </div>
        <div className='absolute top-[30rem] right-1/4 opacity-70 pointer-events-none'>
          <Cloud size='sm' />
        </div>
        {/* Theme toggle */}
        <ThemeToggle />
        {/* Content */}
        <div className='px-4 md:px-8 pb-10'>{children}</div>
      </main>
    </div>
  );
};
export default Layout;
