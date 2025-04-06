
import React from 'react';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';

interface DrugInteraction {
  medication: string;
  risk: 'High' | 'Medium' | 'Low';
  mechanism: string;
}

interface DrugInteractionsProps {
  drugInteractions: DrugInteraction[];
  compoundName: string;
}

const DrugInteractions: React.FC<DrugInteractionsProps> = ({ drugInteractions, compoundName }) => {
  const getRiskBadgeClass = (risk: 'High' | 'Medium' | 'Low') => {
    switch (risk) {
      case 'High':
        return "bg-red-500/20 text-red-400";
      case 'Medium':
        return "bg-yellow-500/20 text-yellow-400";
      case 'Low':
        return "bg-green-500/20 text-green-400";
    }
  };

  return (
    <div id="drugInteractions" className="mb-12">
      <div className="bg-gray-100/10 p-3 mb-6">
        <h2 className="text-white text-2xl font-bold">7. Potential Drug-Drug Interactions</h2>
      </div>
      
      <p className="text-white mb-6">
        This section identifies potential interactions between {compoundName} and commonly prescribed medications based
        on structural features and predicted metabolic pathways.
      </p>
      
      <Table className="mb-8">
        <TableHeader>
          <TableRow className="border-gray-700">
            <TableHead className="text-gray-400">Medication</TableHead>
            <TableHead className="text-gray-400">Risk Level</TableHead>
            <TableHead className="text-gray-400">Mechanism</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {drugInteractions.map((item, index) => (
            <TableRow key={index} className={index < drugInteractions.length - 1 ? "border-gray-700" : ""}>
              <TableCell className="text-white">{item.medication}</TableCell>
              <TableCell>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getRiskBadgeClass(item.risk)}`}>
                  {item.risk}
                </span>
              </TableCell>
              <TableCell className="text-white">{item.mechanism}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      
      <p className="text-gray-500 text-sm text-right">Page 10</p>
    </div>
  );
};

export default DrugInteractions;
