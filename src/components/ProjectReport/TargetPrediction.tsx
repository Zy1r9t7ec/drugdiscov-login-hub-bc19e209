
import React from 'react';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';
import { ResponsiveContainer, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Bar, Cell } from 'recharts';

interface TargetPrediction {
  target: string;
  probability: number;
  confidence: 'High' | 'Medium' | 'Low';
}

interface TargetPredictionProps {
  targetPredictions: TargetPrediction[];
  compoundName: string;
}

const TargetPredictionComponent: React.FC<TargetPredictionProps> = ({ targetPredictions, compoundName }) => {
  const getConfidenceBadgeClass = (confidence: 'High' | 'Medium' | 'Low') => {
    switch (confidence) {
      case 'High':
        return "bg-green-500/20 text-green-400";
      case 'Medium':
        return "bg-blue-500/20 text-blue-400";
      case 'Low':
        return "bg-gray-500/20 text-gray-400";
    }
  };

  return (
    <div id="targetPrediction" className="mb-12">
      <div className="bg-gray-100/10 p-3 mb-6">
        <h2 className="text-white text-2xl font-bold">6. Target Prediction</h2>
      </div>
      
      <p className="text-white mb-6">
        Based on structural analysis, {compoundName} may interact with the following biological targets. This analysis uses
        pharmacophore pattern recognition and similarity to known ligands.
      </p>
      
      <Table className="mb-8">
        <TableHeader>
          <TableRow className="border-gray-700">
            <TableHead className="text-gray-400">Target</TableHead>
            <TableHead className="text-gray-400">Probability</TableHead>
            <TableHead className="text-gray-400">Confidence</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {targetPredictions.map((item, index) => (
            <TableRow key={index} className={index < targetPredictions.length - 1 ? "border-gray-700" : ""}>
              <TableCell className="text-white">{item.target}</TableCell>
              <TableCell className="text-white">{item.probability.toFixed(2)}</TableCell>
              <TableCell className="p-4">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getConfidenceBadgeClass(item.confidence)}`}>
                  {item.confidence}
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      
      <div className="mb-8">
        <h3 className="text-white text-center mb-4">Predicted Target Binding Probabilities</h3>
        <div className="h-[400px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              layout="vertical"
              data={targetPredictions
                .sort((a, b) => a.probability - b.probability)
                .map(item => ({
                  name: item.target,
                  probability: item.probability,
                  confidence: item.confidence
                }))}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#555" />
              <XAxis type="number" domain={[0, 1]} tick={{ fill: '#ccc' }} />
              <YAxis dataKey="name" type="category" tick={{ fill: '#ccc' }} width={150} />
              <Tooltip
                content={({ active, payload, label }) => {
                  if (active && payload && payload.length) {
                    const value = typeof payload[0].value === 'number' ? payload[0].value : 0;
                    return (
                      <div className="bg-gray-800 p-3 border border-gray-700 rounded">
                        <p className="text-white">{`${payload[0].payload.name}`}</p>
                        <p className="text-white">{`Probability: ${(value * 100).toFixed(0)}%`}</p>
                        <p className="text-white">{`Confidence: ${payload[0].payload.confidence}`}</p>
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <Bar dataKey="probability">
                {targetPredictions.map((item, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={item.confidence === 'High' ? '#4ade80' : 
                          item.confidence === 'Medium' ? '#fb923c' : '#94a3b8'}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      
      <p className="text-gray-500 text-sm text-right">Page 9</p>
    </div>
  );
};

export default TargetPredictionComponent;
