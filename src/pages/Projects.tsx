
import React from 'react';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Folder, Plus, FileText, EyeIcon } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Projects: React.FC = () => {
  const navigate = useNavigate();
  
  // Mock projects data
  const projects = [
    { id: 1, name: "Project Alpha", lastUpdated: "2025-03-23", status: "In Progress", molecules: 12 },
    { id: 2, name: "Project Beta", lastUpdated: "2025-03-22", status: "Completed", molecules: 8 },
    { id: 3, name: "Project Gamma", lastUpdated: "2025-03-20", status: "In Progress", molecules: 5 },
    { id: 4, name: "Project Delta", lastUpdated: "2025-03-18", status: "On Hold", molecules: 3 },
    { id: 5, name: "Project Epsilon", lastUpdated: "2025-03-15", status: "Planning", molecules: 0 },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-900">
      <Navbar />
      
      <div className="flex flex-1">
        <Sidebar />
        
        <main className="flex-1 p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-white text-3xl font-bold">Projects</h1>
            <Button 
              className="bg-blue-500 hover:bg-blue-600 text-white"
              onClick={() => navigate('/projects/new')}
            >
              <Plus size={18} className="mr-2" />
              New Project
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map(project => (
              <Card 
                key={project.id} 
                className="bg-gray-800/50 border border-gray-700 overflow-hidden h-full"
              >
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex items-start gap-3 mb-4">
                    <Folder size={24} className="text-blue-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-white font-semibold text-xl mb-1">
                        {project.name}
                      </h3>
                      <p className="text-gray-400 text-sm">Last updated: {project.lastUpdated}</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-between mb-6">
                    <p className={cn(
                      "font-medium text-base",
                      project.status === "In Progress" ? "text-blue-400" : 
                      project.status === "Completed" ? "text-green-400" :
                      project.status === "On Hold" ? "text-yellow-400" : "text-gray-400"
                    )}>
                      Status: {project.status}
                    </p>
                    <p className="text-gray-400">
                      Molecules: {project.molecules}
                    </p>
                  </div>
                  
                  <div className="flex gap-4 mt-auto">
                    <Button 
                      variant="outline" 
                      className="text-blue-400 border-blue-400 hover:bg-blue-900/20 flex-1 h-10" 
                      onClick={() => navigate(`/projects/${project.id}/report`)}
                    >
                      View Report
                    </Button>
                    <Button 
                      className="bg-blue-500 hover:bg-blue-600 text-white flex-1 h-10" 
                      onClick={() => navigate(`/projects/${project.id}/molecule-preview`)}
                    >
                      Molecule Preview
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </main>
      </div>
      
      <Footer />
    </div>
  );
};

export default Projects;
