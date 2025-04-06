
export interface ToxicityData {
  type: string;
  status: 'Safe' | 'Toxic' | 'Unknown';
  confidence: number;
}

export interface DrugInteraction {
  medication: string;
  risk: 'High' | 'Medium' | 'Low';
  mechanism: string;
}

export interface TargetPrediction {
  target: string;
  probability: number;
  confidence: 'High' | 'Medium' | 'Low';
}

export interface ProjectReportData {
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

export interface ReportSection {
  id: string;
  title: string;
}
