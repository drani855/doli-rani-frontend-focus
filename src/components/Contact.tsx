import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Link2 } from "lucide-react";

export const Contact = () => {
  return (
    <section className="py-20 px-4 bg-white" id="contact">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Let's Connect</h2>
          <p className="text-lg text-gray-600">Ready to work together? I'd love to hear from you!</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Email Me</h3>
              <p className="text-gray-600 mb-4">Get in touch for opportunities or collaborations</p>
              <a 
                href="mailto:drani8455@gmail.com" 
                className="text-blue-600 hover:text-blue-700 font-semibold"
              >
                drani8455@gmail.com
              </a>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Link2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">LinkedIn</h3>
              <p className="text-gray-600 mb-4">Connect with me professionally</p>
              <a 
                href="https://www.linkedin.com/in/doli-rani-a707a816a" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-purple-600 hover:text-purple-700 font-semibold"
              >
                View Profile
              </a>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <div className="bg-gray-50 rounded-lg p-6">
            <h4 className="font-semibold text-gray-800 mb-2">Current Location</h4>
            <p className="text-gray-600">
              BBDC1A, Odisha Technology Centre, Acharya Vihar Square<br />
              Bhubaneswar, Odisha, 751022<br />
              Phone: 6205163096
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};