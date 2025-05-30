import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const steps = [
  {
    title: "Career Planning",
    description:
      "Define your career goals and map out the skills needed to achieve them.",
    color: "bg-yellow-500",
  },
  {
    title: "Learning",
    description:
      "Continuously enhance your knowledge and skills through courses and learning sessions.",
    color: "bg-red-500",
  },
  {
    title: "Pre-Interview",
    description:
      "Research the company and role to tailor your approach and anticipate questions.",
    color: "bg-green-600",
  },
  {
    title: "Job Assessment",
    description:
      "Evaluate your qualifications and experiences to align with job requirements.",
    color: "bg-blue-600",
  },
  {
    title: "Interview Preparation",
    description:
      "Practice common interview questions and refine your responses to convey confidence.",
    color: "bg-pink-600",
  },
  {
    title: "Success",
    description:
      "Celebrate your achievements and reflect on lessons learned for future growth.",
    color: "bg-purple-700",
  },
];

export default function CareerRoadmap() {
  return (
    <div className="bg-gray-100 min-h-screen p-10">
      <h1 className="text-4xl font-bold text-center mb-10">Career Roadmap</h1>

      <div className="relative w-full max-w-6xl mx-auto">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-2 bg-black rounded-full"></div>

        <div className="space-y-10">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className={`relative flex items-center justify-${
                index % 2 === 0 ? "start" : "end"
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-1/2 p-2">
                <Card className="shadow-xl">
                  <CardContent className="p-6">
                    <h2 className="text-xl font-bold mb-2 flex items-center gap-2">
                      <span
                        className={`${step.color} w-4 h-4 rounded-full`}
                      ></span>
                      {step.title}
                    </h2>
                    <p className="text-gray-700 text-sm">{step.description}</p>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
