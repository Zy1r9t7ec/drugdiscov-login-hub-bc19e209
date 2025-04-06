
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import Footer from '@/components/Footer';
import { ArrowLeft, AlertTriangle, CheckCircle, Shield, HelpCircle, FileText, List } from 'lucide-react';
import { 
  Button, 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle,
  CardDescription
} from '@/components/ui';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { 
  ResponsiveContainer,
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  PolarRadiusAxis, 
  Radar, 
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Cell
} from 'recharts';

interface ToxicityData {
  type: string;
  status: 'Safe' | 'Toxic' | 'Unknown';
  confidence: number;
}

interface DrugInteraction {
  medication: string;
  risk: 'High' | 'Medium' | 'Low';
  mechanism: string;
}

interface TargetPrediction {
  target: string;
  probability: number;
  confidence: 'High' | 'Medium' | 'Low';
}

interface ProjectReportData {
  projectId: number;
  projectName: string;
  compoundName: string;
  smiles: string;
  executiveSummary: {
    drugLikenessScore: number;
    lipinskiViolations: number;
    toxicityConcerns: number;
    syntheticAccessibility: number;
    bbbPermeability: string;
    overall: string;
  };
  physicochemicalProperties: {
    molecularWeight: string;
    logP: string;
    hBondDonors: string;
    hBondAcceptors: string;
    rotatableBonds: string;
    tpsa: string;
    aromaticRings: string;
    fractionSp3: string;
  };
  drugLikeness: {
    qedScore: string;
    lipinskiViolations: string;
    classification: string;
  };
  admetPredictions: {
    absorption: {
      bioavailability: string;
      permeability: string;
    },
    distribution: {
      bbbPenetration: string;
      bbbScore: string;
      keyFactors: string;
      plasmaProteinBinding: string;
    },
    metabolism: {
      halfLife: string;
      metabolicStability: string;
    },
    excretion: {
      clearance: string;
      renalClearance: string;
      excretionRate: string;
      primaryRoute: string;
    }
  };
  toxicityProfile: ToxicityData[];
  drugPropertyProfile: {
    overallScore: number;
    classification: string;
    radarData: Array<{ property: string; value: number }>;
  };
  targetPredictions: TargetPrediction[];
  drugInteractions: DrugInteraction[];
  syntheticAccessibility: {
    score: string;
    factors: string[];
    scoreValue: number;
  };
}

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

// Data for the physicochemical properties radar chart
const getPhysicochemicalRadarData = (data) => [
  { axis: "MW", value: 0.8 },
  { axis: "LogP", value: 0.9 },
  { axis: "H-Donors", value: 0.3 },
  { axis: "H-Acceptors", value: 0.5 },
  { axis: "Rot. Bonds", value: 0.7 },
  { axis: "TPSA", value: 0.5 }
];

// Chart data for drug likeness
const getDrugLikenessChartData = (qedScore) => {
  return { qed: qedScore };
};

const ProjectReport: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();
  const [report, setReport] = useState<ProjectReportData | null>(null);
  const [activeSection, setActiveSection] = useState<string>("executiveSummary");
  const [showContentIndex, setShowContentIndex] = useState<boolean>(true);
  
  // Sections for the report index
  const reportSections = [
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
    const currentDate = new Date().toISOString().split('T')[0];
    const currentTime = new Date().toLocaleTimeString();
    
    if (projectId) {
      const foundReport = mockReports.find(r => r.projectId.toString() === projectId);
      if (foundReport) {
        setReport(foundReport);
      } else {
        navigate('/projects');
      }
    }
  }, [projectId, navigate]);
  
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
          <div className="flex justify-between items-center mb-6">
            <Button 
              variant="outline" 
              className="text-white" 
              onClick={() => navigate('/projects')}
            >
              <ArrowLeft size={18} className="mr-2" />
              Back to Projects
            </Button>
            
            <Button
              variant="ghost"
              className="text-blue-400"
              onClick={() => setShowContentIndex(!showContentIndex)}
            >
              <List size={18} className="mr-2" />
              {showContentIndex ? "Hide Index" : "Show Index"}
            </Button>
          </div>
          
          {/* Report Header */}
          <div className="mb-10 text-center">
            <h1 className="text-white text-4xl font-bold mb-2">Drug Testing AI Report</h1>
            <p className="text-gray-400">Generated on: {new Date().toISOString().split('T')[0]} {new Date().toLocaleTimeString()}</p>
            <div className="mt-12 mb-14">
              <h2 className="text-white text-3xl font-bold mb-3">AI-DrugTest</h2>
              <h3 className="text-white text-2xl font-bold mt-6 mb-3">Drug Candidate Analysis Report</h3>
              <h4 className="text-white text-xl mb-8">Compound: {report.compoundName}</h4>
              
              {/* Molecule Image Area */}
              <div className="max-w-md mx-auto bg-gray-800 border-gray-700 rounded-lg p-10 mb-8 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-white mb-8">Molecule Visualization</p>
                </div>
              </div>
              
              <p className="text-gray-400 font-mono text-sm mt-6">SMILES: {report.smiles}</p>
              <p className="text-gray-500 text-sm mt-10">CONFIDENTIAL DOCUMENT</p>
              <p className="text-gray-500 text-sm mt-6">Page 1</p>
            </div>
            
            <div className="mt-10 mb-10">
              <h1 className="text-white text-4xl font-bold mb-4">Drug Testing AI Report</h1>
              <p className="text-gray-500 font-italic mt-12">This report contains proprietary information.</p>
              <p className="text-gray-500 text-sm mt-[500px]">Page 2</p>
            </div>
          </div>
          
          {/* Content Index */}
          {showContentIndex && (
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
          )}
          
          {/* Executive Summary */}
          <div id="executiveSummary" className="mb-12">
            <div className="bg-gray-100/10 p-3 mb-6">
              <h2 className="text-white text-2xl font-bold">1. Executive Summary</h2>
            </div>
            
            <p className="text-white mb-6">
              This report provides a comprehensive assessment of {report.compoundName}. Based on our analysis, this compound is classified as {report.executiveSummary.overall.toLowerCase()}.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              <div className="bg-gray-800 p-4 rounded-md">
                <h3 className="text-gray-400 text-sm mb-1">Drug-likeness score (QED)</h3>
                <p className="text-white font-medium text-lg">{report.executiveSummary.drugLikenessScore.toFixed(4)}</p>
              </div>
              
              <div className="bg-gray-800 p-4 rounded-md">
                <h3 className="text-gray-400 text-sm mb-1">Lipinski violations</h3>
                <p className="text-white font-medium text-lg">{report.executiveSummary.lipinskiViolations}</p>
              </div>
              
              <div className="bg-gray-800 p-4 rounded-md">
                <h3 className="text-gray-400 text-sm mb-1">Toxicity concerns</h3>
                <p className="text-white font-medium text-lg">{report.executiveSummary.toxicityConcerns}</p>
              </div>
              
              <div className="bg-gray-800 p-4 rounded-md">
                <h3 className="text-gray-400 text-sm mb-1">Synthetic accessibility</h3>
                <p className="text-white font-medium text-lg">{report.executiveSummary.syntheticAccessibility.toFixed(2)}/10</p>
              </div>
              
              <div className="bg-gray-800 p-4 rounded-md">
                <h3 className="text-gray-400 text-sm mb-1">BBB permeability</h3>
                <p className="text-white font-medium text-lg">{report.executiveSummary.bbbPermeability}</p>
              </div>
              
              <div className="bg-gray-800 p-4 rounded-md">
                <h3 className="text-gray-400 text-sm mb-1">Overall</h3>
                <p className="text-green-400 font-medium text-lg">{report.executiveSummary.overall}</p>
              </div>
            </div>
            
            <p className="text-gray-500 text-sm text-right">Page 3</p>
          </div>
          
          {/* Physicochemical Properties */}
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
                  <TableCell className="text-white">{report.physicochemicalProperties.molecularWeight}</TableCell>
                </TableRow>
                <TableRow className="border-gray-700">
                  <TableCell className="text-white">LogP</TableCell>
                  <TableCell className="text-white">{report.physicochemicalProperties.logP}</TableCell>
                </TableRow>
                <TableRow className="border-gray-700">
                  <TableCell className="text-white">H-Bond Donors</TableCell>
                  <TableCell className="text-white">{report.physicochemicalProperties.hBondDonors}</TableCell>
                </TableRow>
                <TableRow className="border-gray-700">
                  <TableCell className="text-white">H-Bond Acceptors</TableCell>
                  <TableCell className="text-white">{report.physicochemicalProperties.hBondAcceptors}</TableCell>
                </TableRow>
                <TableRow className="border-gray-700">
                  <TableCell className="text-white">Rotatable Bonds</TableCell>
                  <TableCell className="text-white">{report.physicochemicalProperties.rotatableBonds}</TableCell>
                </TableRow>
                <TableRow className="border-gray-700">
                  <TableCell className="text-white">TPSA</TableCell>
                  <TableCell className="text-white">{report.physicochemicalProperties.tpsa}</TableCell>
                </TableRow>
                <TableRow className="border-gray-700">
                  <TableCell className="text-white">Aromatic Rings</TableCell>
                  <TableCell className="text-white">{report.physicochemicalProperties.aromaticRings}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="text-white">Fraction SP3</TableCell>
                  <TableCell className="text-white">{report.physicochemicalProperties.fractionSp3}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
            
            <div className="mb-8">
              <h3 className="text-white text-center mb-4">Physicochemical Profile: {report.compoundName}</h3>
              <div className="h-[400px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart cx="50%" cy="50%" outerRadius="80%" data={getPhysicochemicalRadarData(report)}>
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
          
          {/* Drug Likeness Assessment */}
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
                  <TableCell className="text-white">{report.drugLikeness.qedScore}</TableCell>
                </TableRow>
                <TableRow className="border-gray-700">
                  <TableCell className="text-white">Lipinski Violations</TableCell>
                  <TableCell className="text-white">{report.drugLikeness.lipinskiViolations}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="text-white">Classification</TableCell>
                  <TableCell className="text-white">{report.drugLikeness.classification}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
            
            <h3 className="text-white text-center mb-4">Drug-likeness (QED) Score</h3>
            <div className="h-[200px] w-full mb-8">
              <div className="w-full h-12 flex">
                <div
                  className="bg-purple-700 h-full"
                  style={{ width: '25%' }}
                ></div>
                <div
                  className="bg-purple-500 h-full"
                  style={{ width: '15%' }}
                ></div>
                <div
                  className="bg-yellow-200 h-full"
                  style={{ width: '15%' }}
                ></div>
                <div
                  className="bg-green-200 h-full"
                  style={{ width: '20%' }}
                ></div>
                <div
                  className="bg-green-400 h-full"
                  style={{ width: '25%' }}
                ></div>
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
                style={{ left: `${parseFloat(report.drugLikeness.qedScore) * 100}%`, marginLeft: '1rem', marginTop: '-1.8rem' }}
              ></div>
            </div>
            
            <p className="text-gray-500 text-sm text-right">Page 5</p>
          </div>
          
          {/* ADMET Predictions */}
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
                    <TableCell className="text-white">{report.admetPredictions.absorption.bioavailability}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="text-white">Permeability</TableCell>
                    <TableCell className="text-white">{report.admetPredictions.absorption.permeability}</TableCell>
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
                    <TableCell className="text-white">{report.admetPredictions.distribution.bbbPenetration}</TableCell>
                  </TableRow>
                  <TableRow className="border-gray-700">
                    <TableCell className="text-white">BBB Score</TableCell>
                    <TableCell className="text-white">{report.admetPredictions.distribution.bbbScore}</TableCell>
                  </TableRow>
                  <TableRow className="border-gray-700">
                    <TableCell className="text-white">Key Factors</TableCell>
                    <TableCell className="text-white">{report.admetPredictions.distribution.keyFactors}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="text-white">Plasma Protein Binding</TableCell>
                    <TableCell className="text-white">{report.admetPredictions.distribution.plasmaProteinBinding}</TableCell>
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
                    <TableCell className="text-white">{report.admetPredictions.metabolism.halfLife}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="text-white">Metabolic Stability</TableCell>
                    <TableCell className="text-white">{report.admetPredictions.metabolism.metabolicStability}</TableCell>
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
                    <TableCell className="text-white">{report.admetPredictions.excretion.clearance}</TableCell>
                  </TableRow>
                  <TableRow className="border-gray-700">
                    <TableCell className="text-white">Renal Clearance (mL/min/kg)</TableCell>
                    <TableCell className="text-white">{report.admetPredictions.excretion.renalClearance}</TableCell>
                  </TableRow>
                  <TableRow className="border-gray-700">
                    <TableCell className="text-white">Excretion Rate (1/h)</TableCell>
                    <TableCell className="text-white">{report.admetPredictions.excretion.excretionRate}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="text-white">Primary Route</TableCell>
                    <TableCell className="text-white">{report.admetPredictions.excretion.primaryRoute}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
            
            <p className="text-gray-500 text-sm text-right">Page 6</p>
          </div>
          
          {/* Toxicity Profile */}
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
                {report.toxicityProfile.map((item, index) => (
                  <TableRow key={index} className={index < report.toxicityProfile.length - 1 ? "border-gray-700" : ""}>
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
                    data={report.toxicityProfile.map(item => ({
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
                          return (
                            <div className="bg-gray-800 p-3 border border-gray-700 rounded">
                              <p className="text-white">{`${payload[0].payload.name}`}</p>
                              <p className="text-white">{`Confidence: ${(payload[0].value * 100).toFixed(0)}%`}</p>
                              <p className="text-white">{`Status: ${payload[0].payload.status}`}</p>
                            </div>
                          );
                        }
                        return null;
                      }}
                    />
                    <Bar dataKey="value">
                      {report.toxicityProfile.map((item, index) => (
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
          
          {/* Drug Property Profile */}
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
                  <RadarChart cx="50%" cy="50%" outerRadius="80%" data={report.drugPropertyProfile.radarData}>
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
              Overall drug property score: {report.drugPropertyProfile.overallScore.toFixed(2)} (0-1 scale)
            </p>
            
            <p className="text-white mb-8">
              Scores above 0.7 indicate strong candidates, while scores below 0.4 suggest challenges requiring
              optimization.
            </p>
            
            <p className="text-gray-500 text-sm text-right">Page 8</p>
          </div>
          
          {/* Target Prediction */}
          <div id="targetPrediction" className="mb-12">
            <div className="bg-gray-100/10 p-3 mb-6">
              <h2 className="text-white text-2xl font-bold">6. Target Prediction</h2>
            </div>
            
            <p className="text-white mb-6">
              Based on structural analysis, {report.compoundName} may interact with the following biological targets. This analysis uses
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
                {report.targetPredictions.map((item, index) => (
                  <TableRow key={index} className={index < report.targetPredictions.length - 1 ? "border-gray-700" : ""}>
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
                    data={report.targetPredictions
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
                          return (
                            <div className="bg-gray-800 p-3 border border-gray-700 rounded">
                              <p className="text-white">{`${payload[0].payload.name}`}</p>
                              <p className="text-white">{`Probability: ${(payload[0].value * 100).toFixed(0)}%`}</p>
                              <p className="text-white">{`Confidence: ${payload[0].payload.confidence}`}</p>
                            </div>
                          );
                        }
                        return null;
                      }}
                    />
                    <Bar dataKey="probability">
                      {report.targetPredictions.map((item, index) => (
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
          
          {/* Potential Drug-Drug Interactions */}
          <div id="drugInteractions" className="mb-12">
            <div className="bg-gray-100/10 p-3 mb-6">
              <h2 className="text-white text-2xl font-bold">7. Potential Drug-Drug Interactions</h2>
            </div>
            
            <p className="text-white mb-6">
              This section identifies potential interactions between {report.compoundName} and commonly prescribed medications based
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
                {report.drugInteractions.map((item, index) => (
                  <TableRow key={index} className={index < report.drugInteractions.length - 1 ? "border-gray-700" : ""}>
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
          
          {/* Synthetic Accessibility */}
          <div id="syntheticAccessibility" className="mb-12">
            <div className="bg-gray-100/10 p-3 mb-6">
              <h2 className="text-white text-2xl font-bold">8. Synthetic Accessibility</h2>
            </div>
            
            <p className="text-white mb-6">
              The synthetic accessibility score estimates how difficult the compound would be to synthesize. {report.compoundName} has a
              score of {report.syntheticAccessibility.score}, making it moderate to synthesize.
            </p>
            
            <div className="mb-8">
              <h3 className="text-white text-center mb-4">Synthetic Accessibility Score</h3>
              <div className="h-[200px] w-full relative">
                <div className="w-full h-[80px] flex">
                  <div className="w-1/3 h-full bg-green-200/50 flex items-center justify-center text-white">
                    Easy
                  </div>
                  <div className="w-1/3 h-full bg-yellow-200/50 flex items-center justify-center text-white">
                    Moderate
                  </div>
                  <div className="w-1/3 h-full bg-red-200/50 flex items-center justify-center text-white">
                    Difficult
                  </div>
                </div>
                
                <div className="w-full flex justify-between mt-4 text-sm text-gray-400">
                  <span>1</span>
                  <span>2</span>
                  <span>3</span>
                  <span>4</span>
                  <span>5</span>
                  <span>6</span>
                  <span>7</span>
                  <span>8</span>
                  <span>9</span>
                  <span>10</span>
                </div>
                
                <div 
                  className="absolute"
                  style={{ 
                    left: `${(report.syntheticAccessibility.scoreValue - 1) * 10}%`,
                    top: '60px',
                    transform: 'translate(-50%, -50%)'
                  }}
                >
                  <div className="w-6 h-6 rounded-full bg-red-500"></div>
                </div>
              </div>
            </div>
            
            <div className="mb-8">
              <h3 className="text-white text-xl mb-4">Factors Affecting Synthesis:</h3>
              <ul className="list-disc list-inside text-white ml-4">
                {report.syntheticAccessibility.factors.map((factor, index) => (
                  <li key={index} className="mb-2">{factor}</li>
                ))}
              </ul>
            </div>
            
            <p className="text-gray-500 text-sm text-right">Page 11</p>
          </div>
          
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
