import React from 'react';
interface CloudProps {
  size: 'sm' | 'md' | 'lg';
}
const Cloud: React.FC<CloudProps> = ({
  size
}) => {
  const sizeClass = {
    sm: 'w-24 h-16',
    md: 'w-32 h-20',
    lg: 'w-40 h-24'
  }[size];
  return <div className={`${sizeClass} relative`}>
      <svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <path d="M40 80 C20 80 10 70 10 50 C10 30 25 20 45 20 C55 10 70 10 90 20 C100 5 120 5 140 20 C160 20 180 30 180 50 C180 70 170 80 150 80 C150 90 140 100 120 100 C100 100 90 90 90 80 C80 90 60 90 40 80Z" fill="white" className="dark:fill-blue-200/80" />
      </svg>
    </div>;
};
export default Cloud;