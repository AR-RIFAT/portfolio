import React from 'react';
import { Globe, ExternalLink, Github } from 'lucide-react';
interface ProjectCardProps {
  title: string;
  description: string;
  platform: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  onViewDetails: () => void;
}
const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  platform,
  technologies,
  liveUrl,
  githubUrl,
  onViewDetails
}) => {
  return <div className="bg-white/70 dark:bg-blue-900/70 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
      <div className="p-6">
        <h3 className="text-xl font-bold text-blue-900 dark:text-white mb-2">
          {title}
        </h3>
        <p className="text-blue-800 dark:text-blue-200 mb-4 line-clamp-3">
          {description}
        </p>
        <div className="flex items-center mb-3">
          <Globe className="w-4 h-4 text-blue-700 dark:text-blue-300 mr-2" />
          <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
            {platform}
          </span>
        </div>
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-blue-800 dark:text-blue-200 mb-2">
            Technologies
          </h4>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => <span key={index} className="px-2 py-1 text-xs rounded-full bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-200">
                {tech}
              </span>)}
          </div>
        </div>
        <div className="flex flex-wrap gap-2 mt-4">
          {liveUrl && <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-3 py-1.5 bg-green-600 text-white rounded-lg text-sm hover:bg-green-700 transition-colors">
              <ExternalLink className="w-3.5 h-3.5 mr-1" />
              Live View
            </a>}
          <button onClick={onViewDetails} className="inline-flex items-center px-3 py-1.5 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition-colors">
            Detail View
          </button>
          {githubUrl && <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-3 py-1.5 bg-gray-800 text-white rounded-lg text-sm hover:bg-gray-900 transition-colors">
              <Github className="w-3.5 h-3.5 mr-1" />
              GitHub
            </a>}
        </div>
      </div>
    </div>;
};
export default ProjectCard;