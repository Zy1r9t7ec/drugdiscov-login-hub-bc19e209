
import React from 'react';
import Navbar from '@/components/Navbar';
import LoginForm from '@/components/LoginForm';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  return (
    <div className="app-container">
      <Navbar />
      
      <main className="flex-1 grid grid-cols-1 md:grid-cols-2 w-full">
        {/* Left section - Visible only on md screens and above */}
        <div className="hidden md:flex flex-col justify-center items-center p-12 relative overflow-hidden animate-fade-in">
          {/* DNA image backdrop */}
          <div className="absolute inset-0 z-0">
            <img 
              src="/lovable-uploads/ebe6d083-49a1-48af-957f-1728b86fb9bd.png" 
              alt="DNA double helix" 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Dark overlay to ensure text readability */}
          <div className="absolute inset-0 bg-drugdiscov-dark/70 z-10"></div>
          
          <div className="relative z-20 max-w-lg">
            <h1 className="text-white text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              DrugDiscov: AI-Powered Drug Discovery
            </h1>
            
            <p className="text-white/90 text-lg mb-8">
              Accelerate drug discovery with AI-driven molecule generation
            </p>
          </div>
        </div>
        
        {/* Right section - Login form */}
        <div className="flex flex-col justify-center items-center p-6 md:p-0">
          <LoginForm />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
