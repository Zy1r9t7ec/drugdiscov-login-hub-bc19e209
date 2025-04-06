
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface ReportSection {
  id: string;
  title: string;
}

interface ContentIndexProps {
  reportSections: ReportSection[];
  activeSection: string;
  setActiveSection: (id: string) => void;
}

const ContentIndex: React.FC<ContentIndexProps> = ({ 
  reportSections, 
  activeSection, 
  setActiveSection 
}) => {
  return (
    <Card className="bg-gray-800 border-gray-700 mb-8 sticky top-0 z-10">
      <CardHeader>
        <CardTitle className="text-white">Table of Contents</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {reportSections.map((section) => (
            <Button
              key={section.id}
              variant="ghost"
              className={`justify-start text-left ${activeSection === section.id ? 'bg-blue-900/30 text-blue-400' : 'text-gray-300'}`}
              onClick={() => {
                setActiveSection(section.id);
                document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {section.title}
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ContentIndex;
