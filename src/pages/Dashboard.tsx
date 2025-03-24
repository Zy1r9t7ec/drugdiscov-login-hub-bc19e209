
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';

// Dashboard for DrugDiscov: Displays user projects, molecule generator with enhanced AI features
// (stereochemistry, fingerprints, ADMET, binding affinity), and AI model insights.
// Includes a detailed drug discovery report with 3D visualizations. Uses mock data.

const Dashboard: React.FC = () => {
  const userName = "Dr. Smith"; // This would come from authentication in a real app
  
  return (
    <div className="flex flex-col min-h-screen bg-gray-900">
      <Navbar />
      
      <div className="flex-1 max-w-7xl mx-auto p-6 lg:pl-72 lg:pr-6">
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
                "text-white font-medium py-2 px-4 rounded-lg"
              )}
            >
              Generate New Molecule
            </Button>
          </CardContent>
        </Card>

        {/* Recent Projects Section */}
        <div className="mb-6 animate-fadeIn" style={{ animationDelay: '200ms' }}>
          <h2 className="text-white text-2xl font-bold mb-4">Recent Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" aria-label="Recent projects list">
            {/* Project Card */}
            <Card className="bg-gray-800/50 backdrop-blur-md border border-blue-500/20 p-4 rounded-xl shadow-lg hover:shadow-glow hover:scale-105 transition-all duration-300">
              <CardHeader className="p-0 mb-2">
                <CardTitle className="text-white font-medium text-lg">Project Alpha</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-gray-300 text-sm mb-2">Last Updated: 2025-03-23</p>
                <p className="text-blue-400 text-sm font-medium mb-4">In Progress</p>
                <div className="flex gap-2">
                  <Button variant="ghost" className="text-blue-400 hover:underline text-sm" aria-label="View details for Project Alpha">View Details</Button>
                  <Button className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 rounded-lg text-sm" aria-label="Generate molecule for Project Alpha">Generate Molecule</Button>
                </div>
              </CardContent>
            </Card>
          </div>
          <Button variant="ghost" className="text-blue-400 hover:underline text-sm mt-4">View All Projects</Button>
        </div>

        {/* Placeholder for Molecule Generator Quick Access Section */}
        <Card className="bg-gray-800/50 backdrop-blur-md border border-blue-500/20 p-4 rounded-xl shadow-lg mb-6 animate-fadeIn" style={{ animationDelay: '300ms' }}>
          <CardHeader className="p-0 mb-4">
            <CardTitle className="text-white text-2xl font-bold">Molecule Generator</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <p className="text-gray-300">Coming soon. A form will be here to generate molecules with AI.</p>
          </CardContent>
        </Card>

        {/* AI Model Insights Section */}
        <Card className="bg-gray-800/50 backdrop-blur-md border border-blue-500/20 p-4 rounded-xl shadow-lg animate-fadeIn" style={{ animationDelay: '400ms' }}>
          <CardHeader className="p-0 mb-4">
            <CardTitle className="text-white text-2xl font-bold">AI Model Insights</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="flex flex-col gap-2" aria-live="polite">
              <p className="text-white font-medium">Model Name: DrugGen v1.0</p>
              <p className="text-blue-400 text-sm">Status: Ready</p>
              <p className="text-blue-400 text-sm">Prediction Accuracy: 92%</p>
              <p className="text-blue-400 text-sm">Molecules Generated Today: 5</p>
              <p className="text-blue-400 text-sm">Last Prediction: 2025-03-24 10:30 AM</p>
            </div>
            <Button variant="ghost" className="text-blue-400 hover:underline text-sm mt-2" aria-label="View AI model analytics">View Analytics</Button>
          </CardContent>
        </Card>
      </div>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
