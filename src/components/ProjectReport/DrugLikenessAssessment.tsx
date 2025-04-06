
import React from 'react';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';

interface DrugLikenessAssessmentProps {
  drugLikeness: {
    qedScore: string;
    lipinskiViolations: string;
    classification: string;
  };
}

const DrugLikenessAssessment: React.FC<DrugLikenessAssessmentProps> = ({ drugLikeness }) => {
  // Parse the QED score as a number
  const qedScore = parseFloat(drugLikeness.qedScore);

  return (
    <div id="drugLikeness" className="mb-12">
      <div className="bg-gray-100/10 p-3 mb-6">
        <h2 className="text-white text-2xl font-bold">3. Drug Likeness Assessment</h2>
      </div>
      
      <Table className="mb-8">
        <TableHeader>
          <TableRow className="border-gray-700">
            <TableHead className="text-gray-400">Property</TableHead>
            <TableHead className="text-gray-400">Value</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow className="border-gray-700">
            <TableCell className="text-white">QED Score</TableCell>
            <TableCell className="text-white">{drugLikeness.qedScore}</TableCell>
          </TableRow>
          <TableRow className="border-gray-700">
            <TableCell className="text-white">Lipinski Violations</TableCell>
            <TableCell className="text-white">{drugLikeness.lipinskiViolations}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="text-white">Classification</TableCell>
            <TableCell className="text-white">{drugLikeness.classification}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      
      <h3 className="text-white text-center mb-4">Drug-likeness (QED) Score</h3>
      <div className="h-[200px] w-full mb-8">
        <div className="w-full h-12 flex">
          <div className="bg-purple-700 h-full" style={{ width: '25%' }}></div>
          <div className="bg-purple-500 h-full" style={{ width: '15%' }}></div>
          <div className="bg-yellow-200 h-full" style={{ width: '15%' }}></div>
          <div className="bg-green-200 h-full" style={{ width: '20%' }}></div>
          <div className="bg-green-400 h-full" style={{ width: '25%' }}></div>
        </div>
        <div className="w-full flex justify-between text-xs text-gray-400 mt-2">
          <span>0.00</span>
          <span>0.25</span>
          <span>0.50</span>
          <span>0.75</span>
          <span>1.00</span>
        </div>
        <div 
          className="w-[3px] h-[15px] bg-red-500 absolute"
          style={{ left: `${qedScore * 100}%`, marginLeft: '1rem', marginTop: '-1.8rem' }}
        ></div>
      </div>
      
      <p className="text-gray-500 text-sm text-right">Page 5</p>
    </div>
  );
};

export default DrugLikenessAssessment;
