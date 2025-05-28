
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend Technologies",
      skills: [
        { name: "Angular", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "HTML5", level: 95 },
        { name: "SCSS", level: 85 },
        { name: "D3.js", level: 75 }
      ]
    },
    {
      category: "Backend Development",
      skills: [
        { name: "Core Java", level: 80 },
        { name: "Java 8", level: 75 },
        { name: "RESTful APIs", level: 85 },
        { name: "MySQL", level: 70 }
      ]
    },
    {
      category: "Development Tools",
      skills: [
        { name: "Git", level: 85 },
        { name: "Eclipse", level: 75 },
        { name: "IntelliJ", level: 80 },
        { name: "Visual Studio", level: 85 },
        { name: "Postman", level: 80 }
      ]
    },
    {
      category: "Cloud & Platforms",
      skills: [
        { name: "Azure", level: 70 },
        { name: "Bitbucket", level: 75 }
      ]
    }
  ];

  const certifications = ["Core Java", "SC-900", "AZ-500"];

  return (
    <section className="py-20 px-4 bg-white" id="skills">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Skills & Expertise</h2>
          <p className="text-lg text-gray-600">Technologies and tools I work with</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300">
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
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-gradient-to-r from-blue-50 to-purple-50">
          <CardHeader>
            <CardTitle className="text-xl text-center text-gray-800">Certifications</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap justify-center gap-3">
              {certifications.map((cert, index) => (
                <Badge 
                  key={index} 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 text-sm"
                >
                  {cert}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
