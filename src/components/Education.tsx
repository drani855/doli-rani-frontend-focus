
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const Education = () => {
  const education = [
    {
      degree: "Bachelor of Technology",
      field: "Electronic & Communication Engineering",
      institution: "SIT Bhubaneswar, Odisha",
      period: "Aug 2018 – May 2022",
      type: "graduation"
    },
    {
      degree: "Senior Secondary Education",
      field: "Science",
      institution: "Dhatkidih School, Jharkhand",
      period: "April 2016 – May 2018",
      type: "senior"
    },
    {
      degree: "Secondary Education",
      field: "General Studies",
      institution: "Chinmaya Vidyalaya, Jamshedpur",
      period: "April 2004 – April 2016",
      type: "secondary"
    }
  ];

  const getGradientClass = (type: string) => {
    switch (type) {
      case "graduation":
        return "bg-gradient-to-r from-blue-600 to-purple-600";
      case "senior":
        return "bg-gradient-to-r from-green-600 to-blue-600";
      case "secondary":
        return "bg-gradient-to-r from-purple-600 to-pink-600";
      default:
        return "bg-gradient-to-r from-gray-600 to-gray-700";
    }
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50" id="education">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Education</h2>
          <p className="text-lg text-gray-600">My academic journey and qualifications</p>
        </div>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl font-bold text-gray-800">{edu.degree}</CardTitle>
                    <p className="text-lg text-blue-600 font-semibold">{edu.field}</p>
                    <p className="text-gray-600">{edu.institution}</p>
                  </div>
                  <Badge className={`text-white ${getGradientClass(edu.type)} px-4 py-2`}>
                    {edu.period}
                  </Badge>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Academic Highlights</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">4 Years</div>
                <div className="text-gray-600">Engineering Degree</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">ECE</div>
                <div className="text-gray-600">Specialization</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">2022</div>
                <div className="text-gray-600">Graduation Year</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
