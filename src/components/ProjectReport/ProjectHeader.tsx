
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, List } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface ProjectHeaderProps {
  showContentIndex: boolean;
  setShowContentIndex: (show: boolean) => void;
}

const ProjectHeader: React.FC<ProjectHeaderProps> = ({ 
  showContentIndex, 
  setShowContentIndex 
}) => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-between items-center mb-6">
      <Button 
        variant="outline" 
        className="text-white" 
        onClick={() => navigate('/projects')}
      >
        <ArrowLeft size={18} className="mr-2" />
        Back to Projects
      </Button>
      
      <Button
        variant="ghost"
        className="text-blue-400"
        onClick={() => setShowContentIndex(!showContentIndex)}
      >
        <List size={18} className="mr-2" />
        {showContentIndex ? "Hide Index" : "Show Index"}
      </Button>
    </div>
  );
};

export default ProjectHeader;
