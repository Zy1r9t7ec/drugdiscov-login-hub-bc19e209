
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Flask, Search, ArrowRight } from 'lucide-react';

// Dashboard for DrugDiscov: Displays user projects, molecule generator with enhanced AI features
// (stereochemistry, fingerprints, ADMET, binding affinity), and AI model insights.
// Includes a detailed drug discovery report with 3D visualizations. Uses mock data.

const Dashboard: React.FC = () => {
  const userName = "Dr. Smith"; // This would come from authentication in a real app
  
  // Mock projects data
  const recentProjects = [
    { id: 1, name: "Project Alpha", lastUpdated: "2025-03-23", status: "In Progress" },
    { id: 2, name: "Project Beta", lastUpdated: "2025-03-22", status: "Completed" },
    { id: 3, name: "Project Gamma", lastUpdated: "2025-03-20", status: "On Hold" }
  ];

  // Mock AI stats
  const aiStats = {
    name: "DrugGen v1.0",
    status: "Ready",
    accuracy: 92,
    moleculesToday: 5,
    lastPrediction: "2025-03-24 10:30 AM"
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-900">
      <Navbar />
      
      <div className="flex-1 max-w-7xl mx-auto p-6 lg:p-8">
        {/* Welcome Section */}
        <Card className="bg-gray-800/50 backdrop-blur-md border border-blue-500/20 p-6 rounded-xl shadow-lg mb-6 animate-fadeIn">
          <CardHeader className="p-0 mb-4">
            <CardTitle className="text-white text-3xl font-bold">Welcome back, {userName}!</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="flex flex-wrap gap-4 mb-4">
              <div className="text-blue-400 text-sm font-medium">3 Active Projects</div>
              <div className="text-blue-400 text-sm font-medium">5 Molecules Generated Today</div>
              <div className="text-blue-400 text-sm font-medium">AI Model: Ready</div>
            </div>
            <Button 
              className={cn(
                "bg-gradient-blue hover:bg-gradient-blue-dark hover:shadow-glow",
                "text-white font-medium py-2 px-4 rounded-lg flex items-center gap-2"
              )}
              aria-label="Generate a new molecule"
            >
              <Flask size={18} />
              Generate New Molecule
            </Button>
          </CardContent>
        </Card>

        {/* Recent Projects Section */}
        <div className="mb-6 animate-fadeIn" style={{ animationDelay: '200ms' }}>
          <h2 className="text-white text-2xl font-bold mb-4">Recent Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" aria-label="Recent projects list">
            {recentProjects.map(project => (
              <Card 
                key={project.id} 
                className="bg-gray-800/50 backdrop-blur-md border border-blue-500/20 p-4 rounded-xl shadow-lg hover:shadow-glow hover:scale-105 transition-all duration-300"
              >
                <CardHeader className="p-0 mb-2">
                  <CardTitle className="text-white font-medium text-lg">{project.name}</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <p className="text-gray-300 text-sm mb-2">Last Updated: {project.lastUpdated}</p>
                  <p className={cn(
                    "text-sm font-medium mb-4",
                    project.status === "In Progress" ? "text-blue-400" : 
                    project.status === "Completed" ? "text-green-400" : "text-yellow-400"
                  )}>
                    {project.status}
                  </p>
                  <div className="flex gap-2">
                    <Button 
                      variant="ghost" 
                      className="text-blue-400 hover:underline text-sm" 
                      aria-label={`View details for ${project.name}`}
                    >
                      View Details
                    </Button>
                    <Button 
                      className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 rounded-lg text-sm" 
                      aria-label={`Generate molecule for ${project.name}`}
                    >
                      Generate Molecule
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <Button 
            variant="ghost" 
            className="text-blue-400 hover:underline text-sm mt-4 flex items-center gap-1"
          >
            View All Projects <ArrowRight size={14} />
          </Button>
        </div>

        {/* Molecule Generator Quick Access Section */}
        <Card className="bg-gray-800/50 backdrop-blur-md border border-blue-500/20 p-6 rounded-xl shadow-lg mb-6 animate-fadeIn" style={{ animationDelay: '300ms' }}>
          <CardHeader className="p-0 mb-4">
            <CardTitle className="text-white text-2xl font-bold">Molecule Generator</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <form className="mb-4" aria-label="Molecule generator form">
              <div className="mb-4">
                <label htmlFor="smiles" className="block text-white font-medium text-sm mb-2">Enter SMILES or Name</label>
                <input 
                  type="text" 
                  id="smiles" 
                  className="bg-gray-700 text-white border border-gray-500 focus:border-blue-500 p-2 rounded-lg w-full"
                  placeholder="e.g., CC(=O)OC1=CC=CC=C1C(=O)O"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="target" className="block text-white font-medium text-sm mb-2">Target Protein</label>
                  <select 
                    id="target" 
                    className="bg-gray-700 text-white border border-gray-500 p-2 rounded-lg w-full"
                  >
                    <option value="">None</option>
                    <option value="EGFR">EGFR</option>
                    <option value="HER2">HER2</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="solubility" className="block text-white font-medium text-sm mb-2">Desired Solubility</label>
                  <select 
                    id="solubility" 
                    className="bg-gray-700 text-white border border-gray-500 p-2 rounded-lg w-full"
                  >
                    <option value="">None</option>
                    <option value="high">High</option>
                    <option value="medium">Medium</option>
                    <option value="low">Low</option>
                  </select>
                </div>
              </div>
              
              <Button 
                type="submit"
                className={cn(
                  "bg-gradient-blue hover:bg-gradient-blue-dark hover:shadow-glow",
                  "text-white font-medium py-2 px-4 rounded-lg flex items-center gap-2"
                )}
              >
                <Flask size={18} />
                Generate Molecule
              </Button>
            </form>
            
            <p className="text-gray-300">Enter SMILES or molecule name above to generate new molecules with AI. You can specify target protein and desired solubility for better results.</p>
          </CardContent>
        </Card>

        {/* AI Model Insights Section */}
        <Card className="bg-gray-800/50 backdrop-blur-md border border-blue-500/20 p-6 rounded-xl shadow-lg animate-fadeIn" style={{ animationDelay: '400ms' }}>
          <CardHeader className="p-0 mb-4">
            <CardTitle className="text-white text-2xl font-bold">AI Model Insights</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="flex flex-col gap-2" aria-live="polite">
              <p className="text-white font-medium">Model Name: {aiStats.name}</p>
              <p className="text-blue-400 text-sm">Status: {aiStats.status}</p>
              <p className="text-blue-400 text-sm">Prediction Accuracy: {aiStats.accuracy}%</p>
              <p className="text-blue-400 text-sm">Molecules Generated Today: {aiStats.moleculesToday}</p>
              <p className="text-blue-400 text-sm">Last Prediction: {aiStats.lastPrediction}</p>
            </div>
            <Button 
              variant="ghost" 
              className="text-blue-400 hover:underline text-sm mt-4 flex items-center gap-1" 
              aria-label="View AI model analytics"
            >
              View Analytics <ArrowRight size={14} />
            </Button>
          </CardContent>
        </Card>
      </div>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
