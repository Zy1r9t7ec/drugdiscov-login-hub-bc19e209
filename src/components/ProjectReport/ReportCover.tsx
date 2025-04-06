
import React from 'react';

interface ReportCoverProps {
  compoundName: string;
  smiles: string;
}

const ReportCover: React.FC<ReportCoverProps> = ({ compoundName, smiles }) => {
  return (
    <div className="mb-10 text-center">
      <h1 className="text-white text-4xl font-bold mb-2">Drug Testing AI Report</h1>
      <p className="text-gray-400">Generated on: {new Date().toISOString().split('T')[0]} {new Date().toLocaleTimeString()}</p>
      <div className="mt-12 mb-14">
        <h2 className="text-white text-3xl font-bold mb-3">AI-DrugTest</h2>
        <h3 className="text-white text-2xl font-bold mt-6 mb-3">Drug Candidate Analysis Report</h3>
        <h4 className="text-white text-xl mb-8">Compound: {compoundName}</h4>
        
        {/* Molecule Image Area */}
        <div className="max-w-md mx-auto bg-gray-800 border-gray-700 rounded-lg p-10 mb-8 flex items-center justify-center">
          <div className="text-center">
            <p className="text-white mb-8">Molecule Visualization</p>
          </div>
        </div>
        
        <p className="text-gray-400 font-mono text-sm mt-6">SMILES: {smiles}</p>
        <p className="text-gray-500 text-sm mt-10">CONFIDENTIAL DOCUMENT</p>
        <p className="text-gray-500 text-sm mt-6">Page 1</p>
      </div>
      
      <div className="mt-10 mb-10">
        <h1 className="text-white text-4xl font-bold mb-4">Drug Testing AI Report</h1>
        <p className="text-gray-500 font-italic mt-12">This report contains proprietary information.</p>
        <p className="text-gray-500 text-sm mt-[500px]">Page 2</p>
      </div>
    </div>
  );
};

export default ReportCover;
