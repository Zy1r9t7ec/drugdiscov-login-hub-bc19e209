
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { ProjectReportData, ReportSection } from '@/components/ProjectReport/types';

// Import all the new components
import ProjectHeader from '@/components/ProjectReport/ProjectHeader';
import ReportCover from '@/components/ProjectReport/ReportCover';
import ContentIndex from '@/components/ProjectReport/ContentIndex';
import ExecutiveSummary from '@/components/ProjectReport/ExecutiveSummary';
import PhysicochemicalProperties from '@/components/ProjectReport/PhysicochemicalProperties';
import DrugLikenessAssessment from '@/components/ProjectReport/DrugLikenessAssessment';
import AdmetPredictions from '@/components/ProjectReport/AdmetPredictions';
import ToxicityProfile from '@/components/ProjectReport/ToxicityProfile';
import DrugPropertyProfile from '@/components/ProjectReport/DrugPropertyProfile';
import TargetPredictionComponent from '@/components/ProjectReport/TargetPrediction';
import DrugInteractions from '@/components/ProjectReport/DrugInteractions';
import SyntheticAccessibility from '@/components/ProjectReport/SyntheticAccessibility';

// Mock data for project reports
const mockReports: ProjectReportData[] = [
  {
    projectId: 1,
    projectName: "Project Alpha",
    compoundName: "Bilastine",
    smiles: "CCOCN1C=NC2=C1C(=O)N(C(=O)N2C)C",
    executiveSummary: {
      drugLikenessScore: 0.4352,
      lipinskiViolations: 0,
      toxicityConcerns: 2,
      syntheticAccessibility: 5.00,
      bbbPermeability: "High",
      overall: "Fair drug candidate"
    },
    physicochemicalProperties: {
      molecularWeight: "463.62",
      logP: "4.86",
      hBondDonors: "1",
      hBondAcceptors: "5",
      rotatableBonds: "10",
      tpsa: "67.59",
      aromaticRings: "3",
      fractionSp3: "0.50"
    },
    drugLikeness: {
      qedScore: "0.4352",
      lipinskiViolations: "0",
      classification: "Moderate"
    },
    admetPredictions: {
      absorption: {
        bioavailability: "40.42%",
        permeability: "High"
      },
      distribution: {
        bbbPenetration: "High",
        bbbScore: "3/4",
        keyFactors: "High molecular weight",
        plasmaProteinBinding: "High"
      },
      metabolism: {
        halfLife: "11.78 hours",
        metabolicStability: "Stable"
      },
      excretion: {
        clearance: "6.28 mL/min/kg",
        renalClearance: "2.65 mL/min/kg",
        excretionRate: "0.28 1/h",
        primaryRoute: "Hepatic"
      }
    },
    toxicityProfile: [
      { type: "Hepato Toxicity", status: "Safe", confidence: 0.51 },
      { type: "Cardio Toxicity", status: "Toxic", confidence: 0.54 },
      { type: "Nephro Toxicity", status: "Toxic", confidence: 0.53 },
      { type: "Neuro Toxicity", status: "Safe", confidence: 0.51 }
    ],
    drugPropertyProfile: {
      overallScore: 0.46,
      classification: "Fair candidate",
      radarData: [
        { property: "Permeability", value: 0.9 },
        { property: "Solubility", value: 0.4 },
        { property: "Drug-likeness", value: 0.4 },
        { property: "Safety", value: 0.3 },
        { property: "Clearance", value: 0.5 },
        { property: "Metabolic Stability", value: 0.6 }
      ]
    },
    targetPredictions: [
      { target: "Dopamine Receptors", probability: 0.59, confidence: "Medium" },
      { target: "Serotonin Receptors", probability: 0.52, confidence: "Medium" },
      { target: "GABA Receptors", probability: 0.15, confidence: "Low" },
      { target: "Beta-Adrenergic Receptors", probability: 0.22, confidence: "Low" },
      { target: "Histamine Receptors", probability: 0.07, confidence: "Low" },
      { target: "Opioid Receptors", probability: 0.52, confidence: "Medium" },
      { target: "Angiotensin Receptors", probability: 0.11, confidence: "Low" },
      { target: "Calcium Channels", probability: 0.18, confidence: "Low" },
      { target: "Sodium Channels", probability: 0.59, confidence: "Medium" }
    ],
    drugInteractions: [
      { medication: "Warfarin", risk: "High", mechanism: "CYP2C9 metabolism competition" },
      { medication: "Aspirin", risk: "Low", mechanism: "Minimal interaction expected" },
      { medication: "Atorvastatin", risk: "High", mechanism: "CYP3A4 inhibition" },
      { medication: "Omeprazole", risk: "Medium", mechanism: "Altered absorption due to pH changes" },
      { medication: "Fluoxetine", risk: "High", mechanism: "CYP2D6 inhibition" }
    ],
    syntheticAccessibility: {
      score: "5.00/10 (Moderate)",
      factors: [
        "Complex ring system (4 rings)",
        "Many rotatable bonds (10)",
        "Multiple aromatic systems (3 rings)"
      ],
      scoreValue: 5
    }
  },
  // Additional mock reports for other projects would go here
];

const ProjectReport: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();
  const [report, setReport] = useState<ProjectReportData | null>(null);
  const [activeSection, setActiveSection] = useState<string>("executiveSummary");
  const [showContentIndex, setShowContentIndex] = useState<boolean>(true);
  
  // Sections for the report index
  const reportSections: ReportSection[] = [
    { id: 'executiveSummary', title: '1. Executive Summary' },
    { id: 'physicochemicalProperties', title: '2. Physicochemical Properties' },
    { id: 'drugLikeness', title: '3. Drug Likeness Assessment' },
    { id: 'admetPredictions', title: '4. ADMET Predictions' },
    { id: 'toxicityProfile', title: '5. Toxicity Profile' },
    { id: 'drugPropertyProfile', title: '6. Drug Property Profile' },
    { id: 'targetPrediction', title: '7. Target Prediction' },
    { id: 'drugInteractions', title: '8. Potential Drug-Drug Interactions' },
    { id: 'syntheticAccessibility', title: '9. Synthetic Accessibility' },
  ];

  // Fetch report data
  useEffect(() => {
    if (projectId) {
      const foundReport = mockReports.find(r => r.projectId.toString() === projectId);
      if (foundReport) {
        setReport(foundReport);
      } else {
        navigate('/projects');
      }
    }
  }, [projectId, navigate]);
  
  if (!report) {
    return (
      <div className="flex flex-col min-h-screen bg-gray-900">
        <Navbar />
        <div className="flex flex-1">
          <Sidebar />
          <main className="flex-1 p-6 flex items-center justify-center">
            <p className="text-white">Loading report...</p>
          </main>
        </div>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 relative">
      <Navbar />
      
      <div className="flex flex-1">
        <Sidebar />
        
        <main className="flex-1 p-6 overflow-y-auto">
          <ProjectHeader 
            showContentIndex={showContentIndex} 
            setShowContentIndex={setShowContentIndex} 
          />
          
          {/* Report Cover */}
          <ReportCover compoundName={report.compoundName} smiles={report.smiles} />
          
          {/* Content Index */}
          {showContentIndex && (
            <ContentIndex 
              reportSections={reportSections} 
              activeSection={activeSection} 
              setActiveSection={setActiveSection} 
            />
          )}
          
          {/* Executive Summary */}
          <ExecutiveSummary 
            compoundName={report.compoundName} 
            executiveSummary={report.executiveSummary} 
          />
          
          {/* Physicochemical Properties */}
          <PhysicochemicalProperties 
            properties={report.physicochemicalProperties} 
            compoundName={report.compoundName} 
          />
          
          {/* Drug Likeness Assessment */}
          <DrugLikenessAssessment drugLikeness={report.drugLikeness} />
          
          {/* ADMET Predictions */}
          <AdmetPredictions admetPredictions={report.admetPredictions} />
          
          {/* Toxicity Profile */}
          <ToxicityProfile toxicityProfile={report.toxicityProfile} />
          
          {/* Drug Property Profile */}
          <DrugPropertyProfile drugPropertyProfile={report.drugPropertyProfile} />
          
          {/* Target Prediction */}
          <TargetPredictionComponent 
            targetPredictions={report.targetPredictions} 
            compoundName={report.compoundName} 
          />
          
          {/* Potential Drug-Drug Interactions */}
          <DrugInteractions 
            drugInteractions={report.drugInteractions} 
            compoundName={report.compoundName} 
          />
          
          {/* Synthetic Accessibility */}
          <SyntheticAccessibility 
            syntheticAccessibility={report.syntheticAccessibility} 
            compoundName={report.compoundName}
          />
          
          {/* Back to Projects Button */}
          <div className="mb-8">
            <Button 
              variant="outline" 
              className="text-white" 
              onClick={() => navigate('/projects')}
            >
              <ArrowLeft size={18} className="mr-2" />
              Back to Projects
            </Button>
          </div>
        </main>
      </div>
      
      <Footer />
    </div>
  );
};

export default ProjectReport;
