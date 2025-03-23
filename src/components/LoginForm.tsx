import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const LoginForm: React.FC = () => {
  const handleGoogleSignIn = () => {
    console.log('User signed in with Google');
  };

  return (
    <div className="w-full max-w-md mx-auto px-8 py-12 sm:p-12 animate-fade-in" style={{ animationDelay: '300ms' }}>
      <div className="bg-gray-800/50 backdrop-blur-md rounded-xl p-8 shadow-2xl border border-blue-500/20">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-white mb-2">Welcome Back</h2>
          <p className="text-gray-300 text-sm">Sign in to continue to DrugDiscov</p>
        </div>
        
       <Button 
  onClick={handleGoogleSignIn}
  className={cn(
    "w-full py-6 flex items-center justify-center gap-3 mb-6 group",
    "bg-gray-800 hover:bg-gray-600 text-blue-500 border border-gray-500",
    "transition-all duration-300 hover:shadow-glow"
  )}
>
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
    <path d="M22.56 12.25c0-.78-.07-1.53-.20-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    <path d="M1 1h22v22H1z" fill="none"/>
  </svg>
  <span className="text-sm font-medium">Sign in with Google</span>
</Button>
        
        <div className="text-center">
          <p className="text-sm text-gray-300">
            Don't have an account? 
            <a href="#" className="text-blue-500 ml-1 font-medium hover:underline">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
