import React from "react";
import { User, Briefcase, Award, ArrowRight } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: <User />,
      title: "Mock Interviews",
      description:
        "Practice with our AI interviewer that simulates real interview scenarios and provides instant feedback.",
      color: "bg-gradient-to-r from-blue-500 to-indigo-600",
    },
    {
      icon: <Briefcase />,
      title: "Resume Optimization",
      description:
        "Get personalized feedback on your resume to help you stand out from the crowd.",
      color: "bg-gradient-to-r from-purple-500 to-pink-600",
    },
    {
      icon: <Award />,
      title: "Career Development",
      description:
        "Receive tailored advice on career paths, skill development, and professional growth.",
      color: "bg-gradient-to-r from-green-500 to-teal-600",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="bg-indigo-100 text-indigo-800 text-xl font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
            Features
          </span>
          <h2 className="mt-6 text-4xl font-bold text-gray-900 sm:text-5xl">
            Accelerate Your Career Journey
          </h2>
          <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">
            Our AI-powered tools help you prepare for interviews, optimize your
            resume, and navigate your career path with confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1"
            >
              <div
                className={`${feature.color} w-16 h-16 rounded-xl flex items-center justify-center text-white mb-6`}
              >
                <div className="w-8 h-8">{feature.icon}</div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 mb-6">{feature.description}</p>
              <a
                href="#"
                className="inline-flex items-center text-indigo-600 font-medium hover:text-indigo-800"
              >
                Learn more
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
