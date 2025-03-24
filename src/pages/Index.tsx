
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
        <div className="hidden md:flex flex-col justify-center items-center p-8 relative overflow-hidden">
          {/* DNA image backdrop */}
          <div className="absolute inset-0 z-0">
            <img
              src="/drug-discovery-image.png"
              alt="Drug Discovery Illustration"
              className="w-full h-full object-cover opacity-70 animate-fadeIn"
              role="presentation"
              aria-label="Background illustration of a DNA helix for drug discovery"
              loading="lazy"
              onError={() => console.error('Failed to load drug discovery image')}
            />
          </div>
          {/* Dark overlay to ensure text readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-black/90 z-10"></div>
          
          <div className="relative z-20 max-w-lg animate-fadeIn">
            <h1 className="font-bold mb-4 leading-tight" aria-label="DrugDiscov: The AI-powered drug discovery platform">
              <span className="block mb-4 text-logo-blue text-5xl lg:text-6xl font-bold tracking-tight">DrugDiscov</span>
              <span className="block text-gradient text-glow text-4xl lg:text-5xl font-medium tracking-wide">The Ai powered Drug discovery</span>
            </h1>
            <p className="text-gray-300 text-lg mt-2 animate-fadeIn" style={{ animationDelay: '200ms' }}>
              Accelerate drug discovery with AI-driven molecule generation
            </p>
          </div>
        </div>
        
        {/* Right section - Login form */}
        <div className="flex flex-col justify-center items-center p-6 md:p-0 min-h-screen bg-gradient-to-br from-gray-800 to-black">
          <LoginForm />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
