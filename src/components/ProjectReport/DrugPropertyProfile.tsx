
import React from 'react';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';

interface DrugPropertyProfileProps {
  drugPropertyProfile: {
    overallScore: number;
    classification: string;
    radarData: Array<{ property: string; value: number }>;
  };
}

const DrugPropertyProfile: React.FC<DrugPropertyProfileProps> = ({ drugPropertyProfile }) => {
  return (
    <div id="drugPropertyProfile" className="mb-12">
      <div className="bg-gray-100/10 p-3 mb-6">
        <h2 className="text-white text-2xl font-bold">5. Drug Property Profile</h2>
      </div>
      
      <p className="text-white mb-6">
        This profile combines key pharmaceutical properties to provide a holistic view of the compound's potential as
        a drug candidate.
      </p>
      
      <div className="mb-8">
        <h3 className="text-white text-center mb-4">Drug Property Profile</h3>
        <div className="h-[400px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={drugPropertyProfile.radarData}>
              <PolarGrid stroke="#444" />
              <PolarAngleAxis dataKey="property" tick={{ fill: '#ccc' }} />
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
      
      <p className="text-white mb-4">
        Overall drug property score: {drugPropertyProfile.overallScore.toFixed(2)} (0-1 scale)
      </p>
      
      <p className="text-white mb-8">
        Scores above 0.7 indicate strong candidates, while scores below 0.4 suggest challenges requiring
        optimization.
      </p>
      
      <p className="text-gray-500 text-sm text-right">Page 8</p>
    </div>
  );
};

export default DrugPropertyProfile;
