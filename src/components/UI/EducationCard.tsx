import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';
interface EducationCardProps {
  degree: string;
  institution: string;
  duration: string;
  gpa: string;
  onViewCourses: () => void;
}
const EducationCard: React.FC<EducationCardProps> = ({
  degree,
  institution,
  duration,
  gpa,
  onViewCourses
}) => {
  return (
    <div className='bg-white/70 dark:bg-blue-900/70 backdrop-blur-sm rounded-xl shadow-lg p-6 mb-8'>
      <div className='flex items-start gap-4'>
        <div className='bg-blue-100 dark:bg-blue-800 p-3 rounded-full'>
          <GraduationCap className='w-6 h-6 text-blue-700 dark:text-blue-300' />
        </div>
        <div className='flex-1'>
          <h3 className='text-xl font-bold text-blue-900 dark:text-white'>
            {degree}
          </h3>
          <h4 className='text-lg font-medium text-blue-700 dark:text-blue-300 mb-2'>
            {institution}
          </h4>
          <div className='flex flex-wrap items-center gap-x-6 gap-y-2 mb-4 text-sm'>
            <div className='flex items-center text-blue-600 dark:text-blue-400'>
              <Calendar className='w-4 h-4 mr-1' />
              <span>{duration}</span>
            </div>
            <div className='flex items-center text-blue-600 dark:text-blue-400'>
              <span className='font-medium'>GPA: {gpa}</span>
            </div>
          </div>
          <button
            onClick={onViewCourses}
            className='mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition-colors'
          >
            Coursework Details
          </button>
        </div>
      </div>
    </div>
  );
};
export default EducationCard;
