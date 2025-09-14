import React from 'react';
interface ProjectDetailProps {
  title: string;
  description: string;
  challenges: string[];
  images: string[];
}
const ProjectDetail: React.FC<ProjectDetailProps> = ({
  title,
  description,
  challenges,
  images
}) => {
  return <div>
      <p className="text-blue-900 dark:text-blue-100 mb-6">{description}</p>
      <h4 className="text-lg font-bold text-blue-800 dark:text-blue-200 mb-3">
        Technical Challenges
      </h4>
      <ul className="list-disc pl-5 mb-6 text-blue-900 dark:text-blue-100">
        {challenges.map((challenge, index) => <li key={index} className="mb-2">
            {challenge}
          </li>)}
      </ul>
      {images.length > 0 && <>
          <h4 className="text-lg font-bold text-blue-800 dark:text-blue-200 mb-3">
            Project Gallery
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {images.map((image, index) => <div key={index} className="rounded-lg overflow-hidden border border-blue-200 dark:border-blue-800">
                <img src={image} alt={`${title} screenshot ${index + 1}`} className="w-full h-auto" />
              </div>)}
          </div>
        </>}
    </div>;
};
export default ProjectDetail;