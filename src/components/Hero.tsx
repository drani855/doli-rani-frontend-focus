
import { Button } from "@/components/ui/button";
import { Download, Mail, Link2 } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            DOLI RANI
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-700 mb-8 font-medium">
            Frontend Developer & Software Engineer
          </h2>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Passionate Software Engineer with 2.7+ years of experience creating responsive, 
            user-friendly web applications using Angular, TypeScript, and modern frontend technologies. 
            Focused on delivering exceptional user experiences and optimizing performance.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-full transition-all duration-300"
            >
              <Mail className="w-5 h-5 mr-2" />
              Contact Me
            </Button>
          </div>

          <div className="flex justify-center space-x-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">2.7+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">50+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">90%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
