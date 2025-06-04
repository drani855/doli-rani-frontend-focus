import { Education } from "@/components/Education";
import { Navigation } from "@/components/Navigation";

const EducationPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />
      <Education />
    </div>
  );
};

export default EducationPage;