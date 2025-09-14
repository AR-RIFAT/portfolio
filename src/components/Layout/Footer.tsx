import React from 'react';
const Footer: React.FC = () => {
  return (
    <footer className='py-4 mt-16 bg-blue-100 dark:bg-blue-900 text-center text-blue-800 dark:text-blue-200 text-sm'>
      © Copyright {new Date().getFullYear()} Md Ashraful Rahman
    </footer>
  );
};
export default Footer;
