
import React from 'react';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';

interface AdmetPredictionsProps {
  admetPredictions: {
    absorption: {
      bioavailability: string;
      permeability: string;
    };
    distribution: {
      bbbPenetration: string;
      bbbScore: string;
      keyFactors: string;
      plasmaProteinBinding: string;
    };
    metabolism: {
      halfLife: string;
      metabolicStability: string;
    };
    excretion: {
      clearance: string;
      renalClearance: string;
      excretionRate: string;
      primaryRoute: string;
    };
  };
}

const AdmetPredictions: React.FC<AdmetPredictionsProps> = ({ admetPredictions }) => {
  return (
    <div id="admetPredictions" className="mb-12">
      <div className="bg-gray-100/10 p-3 mb-6">
        <h2 className="text-white text-2xl font-bold">4. ADMET Predictions</h2>
      </div>
      
      {/* Absorption Properties */}
      <div className="mb-8">
        <div className="bg-gray-100/10 p-2 mb-4">
          <h3 className="text-white text-xl">4.1. Absorption Properties</h3>
        </div>
        
        <Table className="mb-6">
          <TableHeader>
            <TableRow className="border-gray-700">
              <TableHead className="text-gray-400">Property</TableHead>
              <TableHead className="text-gray-400">Value</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="border-gray-700">
              <TableCell className="text-white">Bioavailability (%)</TableCell>
              <TableCell className="text-white">{admetPredictions.absorption.bioavailability}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-white">Permeability</TableCell>
              <TableCell className="text-white">{admetPredictions.absorption.permeability}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
      
      {/* Distribution Properties */}
      <div className="mb-8">
        <div className="bg-gray-100/10 p-2 mb-4">
          <h3 className="text-white text-xl">4.2. Distribution Properties</h3>
        </div>
        
        <Table className="mb-6">
          <TableHeader>
            <TableRow className="border-gray-700">
              <TableHead className="text-gray-400">Property</TableHead>
              <TableHead className="text-gray-400">Value</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="border-gray-700">
              <TableCell className="text-white">Blood-Brain Barrier Penetration</TableCell>
              <TableCell className="text-white">{admetPredictions.distribution.bbbPenetration}</TableCell>
            </TableRow>
            <TableRow className="border-gray-700">
              <TableCell className="text-white">BBB Score</TableCell>
              <TableCell className="text-white">{admetPredictions.distribution.bbbScore}</TableCell>
            </TableRow>
            <TableRow className="border-gray-700">
              <TableCell className="text-white">Key Factors</TableCell>
              <TableCell className="text-white">{admetPredictions.distribution.keyFactors}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-white">Plasma Protein Binding</TableCell>
              <TableCell className="text-white">{admetPredictions.distribution.plasmaProteinBinding}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
      
      {/* Metabolism Properties */}
      <div className="mb-8">
        <div className="bg-gray-100/10 p-2 mb-4">
          <h3 className="text-white text-xl">4.3. Metabolism Properties</h3>
        </div>
        
        <Table className="mb-6">
          <TableHeader>
            <TableRow className="border-gray-700">
              <TableHead className="text-gray-400">Property</TableHead>
              <TableHead className="text-gray-400">Value</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="border-gray-700">
              <TableCell className="text-white">Half-Life (hours)</TableCell>
              <TableCell className="text-white">{admetPredictions.metabolism.halfLife}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-white">Metabolic Stability</TableCell>
              <TableCell className="text-white">{admetPredictions.metabolism.metabolicStability}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
      
      {/* Excretion Properties */}
      <div className="mb-8">
        <div className="bg-gray-100/10 p-2 mb-4">
          <h3 className="text-white text-xl">4.4. Excretion Properties</h3>
        </div>
        
        <Table className="mb-6">
          <TableHeader>
            <TableRow className="border-gray-700">
              <TableHead className="text-gray-400">Property</TableHead>
              <TableHead className="text-gray-400">Value</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="border-gray-700">
              <TableCell className="text-white">Clearance (mL/min/kg)</TableCell>
              <TableCell className="text-white">{admetPredictions.excretion.clearance}</TableCell>
            </TableRow>
            <TableRow className="border-gray-700">
              <TableCell className="text-white">Renal Clearance (mL/min/kg)</TableCell>
              <TableCell className="text-white">{admetPredictions.excretion.renalClearance}</TableCell>
            </TableRow>
            <TableRow className="border-gray-700">
              <TableCell className="text-white">Excretion Rate (1/h)</TableCell>
              <TableCell className="text-white">{admetPredictions.excretion.excretionRate}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-white">Primary Route</TableCell>
              <TableCell className="text-white">{admetPredictions.excretion.primaryRoute}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
      
      <p className="text-gray-500 text-sm text-right">Page 6</p>
    </div>
  );
};

export default AdmetPredictions;
