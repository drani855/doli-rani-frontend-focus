import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const Experience = () => {
  const experiences = [
    {
      company: "ACCENTURE",
      role: "Advanced App Engineering Associate",
      location: "Bangalore, Karnataka",
      period: "Oct 2023 - Current",
      project: "ACP-LOCAL HOTELING",
      teamSize: "10",
      achievements: [
        "Developed responsive features using Angular, improving user experience ratings by 25%",
        "Cooperated with 5-member back-end team to develop RESTful APIs, optimizing data retrieval",
        "Configured Git for version control and set up CI/CD pipelines, reducing deployment time by 30%",
        "Efficiently handled customer issues achieving a 90% satisfaction rate",
        "Wrote and executed over 50 unit test cases, reducing bugs during deployment by 40%",
        "Ensured 99% application uptime and seamless functionality"
      ],
      skills: ["Angular", "TypeScript", "RESTful APIs", "Git", "CI/CD", "Testing"]
    },
    {
      company: "ACCENTURE",
      role: "Advanced App Engineering Analyst",
      location: "Bhubaneswar, Odisha",
      period: "Oct 2022 - Oct 2023",
      project: "MyWizard",
      teamSize: "6",
      achievements: [
        "Created 10+ interactive data visualizations using D3.js, reducing data analysis time by 30%",
        "Enhanced user experience through interactive and responsive visual elements, increasing engagement by 30%"
      ],
      skills: ["D3.js", "Data Visualization", "Angular", "TypeScript"]
    },
    {
      company: "SPEEDBAE",
      role: "Frontend Development Intern",
      location: "Jamshedpur, Jharkhand",
      period: "May 2021 - July 2021",
      project: "Hyperlocal Delivery Platform",
      teamSize: "6",
      achievements: [
        "Designed responsive web interface enhancing customer accessibility and user experience by 35%",
        "Developed key pages including Home, Cart, and Product Description, improving user retention by 25%",
        "Enhanced UI performance, reducing page load times by 40% with 100% responsive design",
        "Integrated interactive elements, increasing conversion rates by 20%",
        "Collaborated with backend developers for efficient API integration, achieving 30% faster data retrieval"
      ],
      skills: ["Angular", "TypeScript", "HTML5", "SCSS", "API Integration"]
    }
  ];

  return (
    <section className="py-20 px-4" id="experience">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Work Experience</h2>
          <p className="text-lg text-gray-600">My professional journey and key achievements</p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl font-bold text-blue-600">{exp.company}</CardTitle>
                    <p className="text-lg font-semibold text-gray-800">{exp.role}</p>
                    <p className="text-gray-600">{exp.location} | Team Size: {exp.teamSize}</p>
                  </div>
                  <div className="text-right">
                    <Badge variant="outline" className="text-purple-600 border-purple-600">
                      {exp.period}
                    </Badge>
                    <p className="text-sm text-gray-600 mt-2">Project: {exp.project}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className="text-gray-700">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, idx) => (
                        <Badge key={idx} variant="secondary" className="bg-blue-50 text-blue-700">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};