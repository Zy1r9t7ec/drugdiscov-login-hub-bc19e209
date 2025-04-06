
import React from 'react';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';
import { ResponsiveContainer, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Bar, Cell } from 'recharts';
import { CheckCircle, AlertTriangle, HelpCircle } from 'lucide-react';

interface ToxicityData {
  type: string;
  status: 'Safe' | 'Toxic' | 'Unknown';
  confidence: number;
}

interface ToxicityProfileProps {
  toxicityProfile: ToxicityData[];
}

const ToxicityProfile: React.FC<ToxicityProfileProps> = ({ toxicityProfile }) => {
  const getToxicityIcon = (status: 'Safe' | 'Toxic' | 'Unknown') => {
    switch (status) {
      case 'Safe':
        return <CheckCircle className="text-green-500" size={18} />;
      case 'Toxic':
        return <AlertTriangle className="text-red-500" size={18} />;
      case 'Unknown':
        return <HelpCircle className="text-gray-500" size={18} />;
    }
  };

  return (
    <div id="toxicityProfile" className="mb-12">
      <div className="bg-gray-100/10 p-3 mb-6">
        <h2 className="text-white text-2xl font-bold">4.5. Toxicity Profile</h2>
      </div>
      
      <Table className="mb-8">
        <TableHeader>
          <TableRow className="border-gray-700">
            <TableHead className="text-gray-400">Property</TableHead>
            <TableHead className="text-gray-400">Value</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {toxicityProfile.map((item, index) => (
            <TableRow key={index} className={index < toxicityProfile.length - 1 ? "border-gray-700" : ""}>
              <TableCell className="text-white">{item.type}</TableCell>
              <TableCell className="text-white">
                {item.status} ({item.confidence.toFixed(2)} confidence)
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      
      <div className="mb-8">
        <h3 className="text-white text-center mb-4">Toxicity Predictions with Confidence Levels</h3>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              layout="vertical"
              data={toxicityProfile.map(item => ({
                name: item.type,
                value: item.confidence,
                status: item.status
              }))}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#555" />
              <XAxis type="number" domain={[0, 1]} tick={{ fill: '#ccc' }} />
              <YAxis dataKey="name" type="category" tick={{ fill: '#ccc' }} width={80} />
              <Tooltip
                content={({ active, payload, label }) => {
                  if (active && payload && payload.length) {
                    const value = typeof payload[0].value === 'number' ? payload[0].value : 0;
                    return (
                      <div className="bg-gray-800 p-3 border border-gray-700 rounded">
                        <p className="text-white">{`${payload[0].payload.name}`}</p>
                        <p className="text-white">{`Confidence: ${(value * 100).toFixed(0)}%`}</p>
                        <p className="text-white">{`Status: ${payload[0].payload.status}`}</p>
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <Bar dataKey="value">
                {toxicityProfile.map((item, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={item.status === 'Safe' ? '#4ade80' : '#ef4444'}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      
      <p className="text-gray-500 text-sm text-right">Page 7</p>
    </div>
  );
};

export default ToxicityProfile;
