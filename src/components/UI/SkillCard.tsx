import React from 'react';
import { BoxIcon } from 'lucide-react';
interface SkillCardProps {
  icon: BoxIcon;
  name: string;
}
const SkillCard: React.FC<SkillCardProps> = ({
  icon: Icon,
  name
}) => {
  return <div className="flex items-center gap-2 px-4 py-3 bg-white dark:bg-blue-900 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <Icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
      <span className="font-medium text-blue-900 dark:text-white">{name}</span>
    </div>;
};
export default SkillCard;