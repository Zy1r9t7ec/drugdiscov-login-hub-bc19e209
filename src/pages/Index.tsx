
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
            
            {/* Molecule visualization */}
            <div className="relative flex items-center justify-center">
              <div className="grid grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div 
                    key={i} 
                    className={`w-16 h-16 md:w-20 md:h-20 rounded-lg bg-drugdiscov-blue/20 backdrop-blur-sm 
                              border border-drugdiscov-blue/30 flex items-center justify-center
                              transform hover:scale-110 transition-transform duration-300
                              ${i % 2 === 0 ? 'animate-pulse-subtle' : ''}`}
                  >
                    <div className={`w-8 h-8 md:w-10 md:h-10 rounded-full 
                                  ${i % 3 === 0 ? 'bg-drugdiscov-blue/40' : 'bg-white/10'}`}>
                    </div>
                  </div>
                ))}
              </div>
            </div>
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
