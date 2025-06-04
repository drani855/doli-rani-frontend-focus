
import { Skills } from "@/components/Skills";
import { Navigation } from "@/components/Navigation";

const SkillsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />
      <Skills />
    </div>
  );
};

export default SkillsPage;