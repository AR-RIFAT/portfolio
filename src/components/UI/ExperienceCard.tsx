import React from 'react';
import { Calendar, MapPin } from 'lucide-react';
interface ExperienceCardProps {
  position: string;
  company: string;
  duration: string;
  location: string;
  responsibilities: string[];
}
const ExperienceCard: React.FC<ExperienceCardProps> = ({
  position,
  company,
  duration,
  location,
  responsibilities
}) => {
  return <div className="bg-white/70 dark:bg-blue-900/70 backdrop-blur-sm rounded-xl shadow-lg p-6 mb-6">
      <h3 className="text-xl font-bold text-blue-900 dark:text-white">
        {position}
      </h3>
      <h4 className="text-lg font-medium text-blue-700 dark:text-blue-300 mb-2">
        {company}
      </h4>
      <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mb-4 text-sm">
        <div className="flex items-center text-blue-600 dark:text-blue-400">
          <Calendar className="w-4 h-4 mr-1" />
          <span>{duration}</span>
        </div>
        <div className="flex items-center text-blue-600 dark:text-blue-400">
          <MapPin className="w-4 h-4 mr-1" />
          <span>{location}</span>
        </div>
      </div>
      <h5 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
        Responsibilities:
      </h5>
      <ul className="list-disc pl-5 text-blue-900 dark:text-blue-100 space-y-1">
        {responsibilities.map((responsibility, index) => <li key={index}>{responsibility}</li>)}
      </ul>
    </div>;
};
export default ExperienceCard;