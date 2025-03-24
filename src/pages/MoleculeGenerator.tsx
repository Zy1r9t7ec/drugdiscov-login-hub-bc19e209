
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Beaker } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const MoleculeGenerator: React.FC = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [smiles, setSmiles] = useState('');
  const [targetProtein, setTargetProtein] = useState('');
  const [solubility, setSolubility] = useState('');
  const { toast } = useToast();

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    setIsGenerating(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Success",
        description: "Molecule generated successfully!",
      });
      setIsGenerating(false);
    }, 2000);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-900">
      <Navbar />
      
      <div className="flex flex-1">
        <Sidebar />
        
        <main className="flex-1 p-6">
          <h1 className="text-white text-3xl font-bold mb-6">Molecule Generator</h1>
          
          <div className="bg-gray-800/50 border border-gray-700 p-6 rounded-xl mb-6">
            <form onSubmit={handleGenerate}>
              <div className="mb-4">
                <label htmlFor="smiles" className="block text-white font-medium mb-2">Enter SMILES or Name</label>
                <input 
                  type="text" 
                  id="smiles" 
                  value={smiles}
                  onChange={(e) => setSmiles(e.target.value)}
                  className="w-full bg-gray-700 border border-gray-600 text-white p-3 rounded-lg"
                  placeholder="e.g., CC(=O)OC1=CC=CC=C1C(=O)O"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <label htmlFor="target" className="block text-white font-medium mb-2">Target Protein</label>
                  <select 
                    id="target" 
                    value={targetProtein}
                    onChange={(e) => setTargetProtein(e.target.value)}
                    className="w-full bg-gray-700 border border-gray-600 text-white p-3 rounded-lg"
                  >
                    <option value="">None</option>
                    <option value="EGFR">EGFR</option>
                    <option value="HER2">HER2</option>
                    <option value="CDK">CDK</option>
                    <option value="ACE2">ACE2</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="solubility" className="block text-white font-medium mb-2">Desired Solubility</label>
                  <select 
                    id="solubility" 
                    value={solubility}
                    onChange={(e) => setSolubility(e.target.value)}
                    className="w-full bg-gray-700 border border-gray-600 text-white p-3 rounded-lg"
                  >
                    <option value="">None</option>
                    <option value="high">High</option>
                    <option value="medium">Medium</option>
                    <option value="low">Low</option>
                  </select>
                </div>
              </div>
              
              <Button 
                type="submit"
                disabled={isGenerating}
                className="bg-blue-500 hover:bg-blue-600 text-white flex items-center gap-2"
              >
                <Beaker size={18} />
                {isGenerating ? 'Generating...' : 'Generate Molecule'}
              </Button>
            </form>
          </div>
          
          <div className="bg-gray-800/50 border border-gray-700 p-6 rounded-xl">
            <h2 className="text-white text-2xl font-bold mb-4">Generated Molecules</h2>
            <p className="text-gray-300">No molecules generated yet. Use the form above to generate new molecules.</p>
          </div>
        </main>
      </div>
      
      <Footer />
    </div>
  );
};

export default MoleculeGenerator;
