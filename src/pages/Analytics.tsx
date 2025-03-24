
import React from 'react';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import Footer from '@/components/Footer';

const Analytics: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900">
      <Navbar />
      
      <div className="flex flex-1">
        <Sidebar />
        
        <main className="flex-1 p-6">
          <h1 className="text-white text-3xl font-bold mb-6">Analytics</h1>
          
          <div className="bg-gray-800/50 border border-gray-700 p-6 rounded-xl mb-6">
            <h2 className="text-white text-2xl font-bold mb-4">AI Model Performance</h2>
            <p className="text-gray-300">Analytics dashboard is under development. Check back soon for detailed insights on molecule generation, model accuracy, and prediction trends.</p>
          </div>
        </main>
      </div>
      
      <Footer />
    </div>
  );
};

export default Analytics;
