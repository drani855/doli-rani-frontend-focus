
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Download, Mail, Github, Linkedin } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="animate-fade-in">
          {/* Profile Picture */}
          <div className="mb-8 flex justify-center">
            <Avatar className="w-32 h-32 border-4 border-gradient-to-r from-blue-600 to-purple-600 shadow-2xl animate-scale-in">
              <AvatarImage 
                src="/lovable-uploads/4f192be1-cdf1-4d01-ae9b-1f725f74237b.png" 
                alt="Doli Rani" 
                className="object-cover"
              />
              <AvatarFallback className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                DR
              </AvatarFallback>
            </Avatar>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6 animate-slide-in-right">
            DOLI RANI
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-700 mb-8 font-medium animate-fade-in">
            Frontend Developer & Software Engineer
          </h2>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in">
            Software Engineer with 2.7+ years of experience in requirement-driven development, 
            specializing in React, Angular, and modern frontend technologies. 
            Focused on creating responsive, user-friendly web applications and delivering exceptional user experiences.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-scale-in">
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
              className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              <Mail className="w-5 h-5 mr-2" />
              Contact Me
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-16 animate-fade-in">
            <a 
              href="https://www.linkedin.com/in/doli-rani-a707a816a" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="https://github.com/dolirani" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 bg-gradient-to-r from-gray-700 to-gray-900 rounded-full flex items-center justify-center text-white hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Github className="w-6 h-6" />
            </a>
          </div>

          <div className="flex justify-center space-x-8 animate-slide-in-right">
            <div className="text-center transform hover:scale-105 transition-all duration-300">
              <div className="text-3xl font-bold text-blue-600">2.7+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="text-center transform hover:scale-105 transition-all duration-300">
              <div className="text-3xl font-bold text-purple-600">50+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div className="text-center transform hover:scale-105 transition-all duration-300">
              <div className="text-3xl font-bold text-green-600">90%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
