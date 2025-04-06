
import React from 'react';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';

interface PhysicochemicalPropertiesProps {
  properties: {
    molecularWeight: string;
    logP: string;
    hBondDonors: string;
    hBondAcceptors: string;
    rotatableBonds: string;
    tpsa: string;
    aromaticRings: string;
    fractionSp3: string;
  };
  compoundName: string;
}

const PhysicochemicalProperties: React.FC<PhysicochemicalPropertiesProps> = ({ 
  properties, 
  compoundName 
}) => {
  // Data for the physicochemical properties radar chart
  const getPhysicochemicalRadarData = () => [
    { axis: "MW", value: 0.8 },
    { axis: "LogP", value: 0.9 },
    { axis: "H-Donors", value: 0.3 },
    { axis: "H-Acceptors", value: 0.5 },
    { axis: "Rot. Bonds", value: 0.7 },
    { axis: "TPSA", value: 0.5 }
  ];

  return (
    <div id="physicochemicalProperties" className="mb-12">
      <div className="bg-gray-100/10 p-3 mb-6">
        <h2 className="text-white text-2xl font-bold">2. Physicochemical Properties</h2>
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
            <TableCell className="text-white">Molecular Weight</TableCell>
            <TableCell className="text-white">{properties.molecularWeight}</TableCell>
          </TableRow>
          <TableRow className="border-gray-700">
            <TableCell className="text-white">LogP</TableCell>
            <TableCell className="text-white">{properties.logP}</TableCell>
          </TableRow>
          <TableRow className="border-gray-700">
            <TableCell className="text-white">H-Bond Donors</TableCell>
            <TableCell className="text-white">{properties.hBondDonors}</TableCell>
          </TableRow>
          <TableRow className="border-gray-700">
            <TableCell className="text-white">H-Bond Acceptors</TableCell>
            <TableCell className="text-white">{properties.hBondAcceptors}</TableCell>
          </TableRow>
          <TableRow className="border-gray-700">
            <TableCell className="text-white">Rotatable Bonds</TableCell>
            <TableCell className="text-white">{properties.rotatableBonds}</TableCell>
          </TableRow>
          <TableRow className="border-gray-700">
            <TableCell className="text-white">TPSA</TableCell>
            <TableCell className="text-white">{properties.tpsa}</TableCell>
          </TableRow>
          <TableRow className="border-gray-700">
            <TableCell className="text-white">Aromatic Rings</TableCell>
            <TableCell className="text-white">{properties.aromaticRings}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="text-white">Fraction SP3</TableCell>
            <TableCell className="text-white">{properties.fractionSp3}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      
      <div className="mb-8">
        <h3 className="text-white text-center mb-4">Physicochemical Profile: {compoundName}</h3>
        <div className="h-[400px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={getPhysicochemicalRadarData()}>
              <PolarGrid stroke="#444" />
              <PolarAngleAxis dataKey="axis" tick={{ fill: '#ccc' }} />
              <PolarRadiusAxis angle={30} domain={[0, 1]} tick={{ fill: '#ccc' }} />
              <Radar
                name="Properties"
                dataKey="value"
                stroke="#3b82f6"
                fill="#3b82f6"
                fillOpacity={0.3}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>
      
      <p className="text-gray-500 text-sm text-right">Page 4</p>
    </div>
  );
};

export default PhysicochemicalProperties;
