import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend Technologies",
      skills: [
        { name: "Angular", level: 85 },
        { name: "TypeScript", level: 85 },
        { name: "HTML5", level: 95 },
        { name: "CSS/SCSS", level: 85 },
        { name: "D3.js", level: 75 },
        { name: "JavaScript", level: 90 }
      ]
    },
    {
      category: "Backend Development",
      skills: [
        { name: "Core Java", level: 80 },
        { name: "RESTful APIs", level: 85 },
        { name: "MySQL", level: 75 }
      ]
    },
    {
      category: "Development Tools",
      skills: [
        { name: "Git", level: 85 },
        { name: "Eclipse", level: 75 },
        { name: "IntelliJ", level: 80 },
        { name: "Visual Studio", level: 85 },
        { name: "LangChain", level: 70 },
        { name: "Hugging Face Transformers", level: 75 },
        { name: "TensorFlow", level: 75 },
        { name: "PyTorch", level: 70 },
        { name: "OpenAI API", level: 80 }
      ]
    },
    {
      category: "Design & Development",
      skills: [
        { name: "UI/UX Design", level: 80 },
        { name: "Responsive Design", level: 90 },
        { name: "Performance Optimization", level: 75 }
      ]
    }
  ];

  const hobbies = ["Cooking", "Singing", "Sports", "Health Activities"];

  return (
    <section className="py-20 px-4 bg-white" id="skills">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Skills & Expertise</h2>
          <p className="text-lg text-gray-600">Technologies and tools I work with</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <CardTitle className="text-xl text-blue-600">{category.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {category.skills.map((skill, idx) => (
                    <div key={idx} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-gray-700">{skill.name}</span>
                        <span className="text-sm text-gray-500">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-gradient-to-r from-blue-50 to-purple-50 animate-fade-in">
          <CardHeader>
            <CardTitle className="text-xl text-center text-gray-800">Hobbies & Interests</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap justify-center gap-3">
              {hobbies.map((hobby, index) => (
                <Badge 
                  key={index} 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 text-sm transform hover:scale-105 transition-all duration-300"
                >
                  {hobby}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};