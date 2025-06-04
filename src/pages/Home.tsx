import { Hero } from "@/components/Hero";
import { Navigation } from "@/components/Navigation";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />
      <Hero />
    </div>
  );
};

export default Home;