
import React from 'react';

interface ExecutiveSummaryProps {
  compoundName: string;
  executiveSummary: {
    drugLikenessScore: number;
    lipinskiViolations: number;
    toxicityConcerns: number;
    syntheticAccessibility: number;
    bbbPermeability: string;
    overall: string;
  };
}

const ExecutiveSummary: React.FC<ExecutiveSummaryProps> = ({ 
  compoundName, 
  executiveSummary 
}) => {
  return (
    <div id="executiveSummary" className="mb-12">
      <div className="bg-gray-100/10 p-3 mb-6">
        <h2 className="text-white text-2xl font-bold">1. Executive Summary</h2>
      </div>
      
      <p className="text-white mb-6">
        This report provides a comprehensive assessment of {compoundName}. Based on our analysis, 
        this compound is classified as {executiveSummary.overall.toLowerCase()}.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        <div className="bg-gray-800 p-4 rounded-md">
          <h3 className="text-gray-400 text-sm mb-1">Drug-likeness score (QED)</h3>
          <p className="text-white font-medium text-lg">{executiveSummary.drugLikenessScore.toFixed(4)}</p>
        </div>
        
        <div className="bg-gray-800 p-4 rounded-md">
          <h3 className="text-gray-400 text-sm mb-1">Lipinski violations</h3>
          <p className="text-white font-medium text-lg">{executiveSummary.lipinskiViolations}</p>
        </div>
        
        <div className="bg-gray-800 p-4 rounded-md">
          <h3 className="text-gray-400 text-sm mb-1">Toxicity concerns</h3>
          <p className="text-white font-medium text-lg">{executiveSummary.toxicityConcerns}</p>
        </div>
        
        <div className="bg-gray-800 p-4 rounded-md">
          <h3 className="text-gray-400 text-sm mb-1">Synthetic accessibility</h3>
          <p className="text-white font-medium text-lg">{executiveSummary.syntheticAccessibility.toFixed(2)}/10</p>
        </div>
        
        <div className="bg-gray-800 p-4 rounded-md">
          <h3 className="text-gray-400 text-sm mb-1">BBB permeability</h3>
          <p className="text-white font-medium text-lg">{executiveSummary.bbbPermeability}</p>
        </div>
        
        <div className="bg-gray-800 p-4 rounded-md">
          <h3 className="text-gray-400 text-sm mb-1">Overall</h3>
          <p className="text-green-400 font-medium text-lg">{executiveSummary.overall}</p>
        </div>
      </div>
      
      <p className="text-gray-500 text-sm text-right">Page 3</p>
    </div>
  );
};

export default ExecutiveSummary;
