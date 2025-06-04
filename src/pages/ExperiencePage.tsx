import { Experience } from "@/components/Experience";
import { Navigation } from "@/components/Navigation";

const ExperiencePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />
      <Experience />
    </div>
  );
};

export default ExperiencePage;