
import React from 'react';

interface SyntheticAccessibilityProps {
  syntheticAccessibility: {
    score: string;
    factors: string[];
    scoreValue: number;
  };
  compoundName: string;
}

const SyntheticAccessibility: React.FC<SyntheticAccessibilityProps> = ({ 
  syntheticAccessibility, 
  compoundName 
}) => {
  return (
    <div id="syntheticAccessibility" className="mb-12">
      <div className="bg-gray-100/10 p-3 mb-6">
        <h2 className="text-white text-2xl font-bold">8. Synthetic Accessibility</h2>
      </div>
      
      <p className="text-white mb-6">
        The synthetic accessibility score estimates how difficult the compound would be to synthesize. {compoundName} has a
        score of {syntheticAccessibility.score}, making it moderate to synthesize.
      </p>
      
      <div className="mb-8">
        <h3 className="text-white text-center mb-4">Synthetic Accessibility Score</h3>
        <div className="h-[200px] w-full relative">
          <div className="w-full h-[80px] flex">
            <div className="w-1/3 h-full bg-green-200/50 flex items-center justify-center text-white">
              Easy
            </div>
            <div className="w-1/3 h-full bg-yellow-200/50 flex items-center justify-center text-white">
              Moderate
            </div>
            <div className="w-1/3 h-full bg-red-200/50 flex items-center justify-center text-white">
              Difficult
            </div>
          </div>
          
          <div className="w-full flex justify-between mt-4 text-sm text-gray-400">
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span>
            <span>6</span>
            <span>7</span>
            <span>8</span>
            <span>9</span>
            <span>10</span>
          </div>
          
          <div 
            className="absolute"
            style={{ 
              left: `${(syntheticAccessibility.scoreValue - 1) * 10}%`,
              top: '60px',
              transform: 'translate(-50%, -50%)'
            }}
          >
            <div className="w-6 h-6 rounded-full bg-red-500"></div>
          </div>
        </div>
      </div>
      
      <div className="mb-8">
        <h3 className="text-white text-xl mb-4">Factors Affecting Synthesis:</h3>
        <ul className="list-disc list-inside text-white ml-4">
          {syntheticAccessibility.factors.map((factor, index) => (
            <li key={index} className="mb-2">{factor}</li>
          ))}
        </ul>
      </div>
      
      <p className="text-gray-500 text-sm text-right">Page 11</p>
    </div>
  );
};

export default SyntheticAccessibility;
