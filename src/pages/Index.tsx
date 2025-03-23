
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
            
            {/* Placeholder for drug discovery image */}
            <div className="relative w-full h-[300px] rounded-xl overflow-hidden glass-card animate-pulse-subtle">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="p-4 bg-drugdiscov-dark/70 rounded-lg">
                  <p className="text-white text-sm">
                    Drug discovery illustration (path: /drug-discovery-image.png)
                  </p>
                </div>
              </div>
              
              {/* Molecule overlay */}
              <div className="absolute top-1/4 left-1/4 w-24 h-24">
                <svg viewBox="0 0 128 128" className="w-full h-full opacity-60">
                  <path d="M64 0L32 32 32 96 64 128 96 96 96 32z" fill="#42a5f5" />
                  <circle cx="64" cy="64" r="24" fill="#1a2526" stroke="#42a5f5" strokeWidth="2" />
                </svg>
              </div>
              
              {/* AI brain overlay */}
              <div className="absolute bottom-1/4 right-1/4 w-16 h-16 animate-pulse-subtle">
                <svg viewBox="0 0 24 24" className="w-full h-full">
                  <path d="M13 3c-4.97 0-9 4.03-9 9 0 3.92 2.51 7.24 6 8.48V22h2v-1.52c3.49-1.24 6-4.56 6-8.48v-2h2v-2h-2V6h-2V3h-3zm-1 18h2v-1h-2v1zm-2-3.05c.05-.01.1-.02.15-.03.57-.08 1.12-.25 1.64-.46 1.31-.53 2.54-1.34 3.57-2.39s1.86-2.26 2.39-3.57c.46-1.14.71-2.35.71-3.6 0-2.62-1.07-4.99-2.78-6.7-1.71-1.71-4.08-2.78-6.7-2.78-2.62 0-4.99 1.07-6.7 2.78-1.71 1.71-2.78 4.08-2.78 6.7 0 1.24.25 2.46.71 3.6.53 1.31 1.34 2.54 2.39 3.57s2.26 1.86 3.57 2.39c.51.21 1.07.38 1.64.46.05.01.1.02.15.03h3.04z" fill="#42a5f5"/>
                </svg>
              </div>
              
              {/* Microscope overlay */}
              <div className="absolute top-1/3 right-1/3 w-14 h-14">
                <svg viewBox="0 0 24 24" className="w-full h-full">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3-8c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3z" fill="#2a3b3d"/>
                </svg>
              </div>
            </div>
          </div>
          
          {/* Remove the background gradients since we have the image now */}
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
