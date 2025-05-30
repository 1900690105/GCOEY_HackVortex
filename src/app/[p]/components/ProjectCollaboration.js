import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { CalendarIcon, UsersIcon, ClockIcon } from "lucide-react";
import React from "react";

function ProjectCollaboration() {
  const projects = [
    {
      projectName: "Smart Waste Management System",
      description:
        "An IoT-based solution using smart bins to optimize waste collection and route planning for municipal services.",
      techStack: ["Node.js", "MongoDB", "Arduino", "React"],
      startDate: "2025-01-10",
      currentProgress: 65,
      hostedBy: "Aarav Mehta",
      teamSize: 4,
      timeRequiredForCompletion: "2 months",
    },
    {
      projectName: "Collaborative Coding Platform",
      description:
        "A real-time coding editor for students to learn and solve problems collaboratively in a shared workspace.",
      techStack: ["Next.js", "Firebase", "WebSockets", "Tailwind CSS"],
      startDate: "2025-02-15",
      currentProgress: 40,
      hostedBy: "Sneha Reddy",
      teamSize: 5,
      timeRequiredForCompletion: "3 months",
    },
    {
      projectName: "AI Legal Assistant",
      description:
        "An AI-driven chatbot to assist with basic legal questions and generate draft legal documents.",
      techStack: ["Python", "OpenAI API", "Flask", "PostgreSQL"],
      startDate: "2025-03-01",
      currentProgress: 25,
      hostedBy: "Rohan Gupta",
      teamSize: 3,
      timeRequiredForCompletion: "4 months",
    },
    {
      projectName: "Remote Health Monitoring App",
      description:
        "An app for doctors to monitor patient vitals and health data remotely with emergency alerts.",
      techStack: ["React Native", "Django", "AWS", "MySQL"],
      startDate: "2025-01-25",
      currentProgress: 80,
      hostedBy: "Priya Nair",
      teamSize: 6,
      timeRequiredForCompletion: "1 month",
    },
    {
      projectName: "Local Farmers Marketplace",
      description:
        "A mobile/web platform to connect local farmers directly to consumers and retailers.",
      techStack: ["Flutter", "Firebase", "Stripe", "Express.js"],
      startDate: "2025-02-10",
      currentProgress: 50,
      hostedBy: "Ishaan Verma",
      teamSize: 4,
      timeRequiredForCompletion: "2.5 months",
    },
    {
      projectName: "Eco-Friendly Ride Sharing App",
      description:
        "A community-driven app encouraging carpooling and reducing carbon emissions in urban cities.",
      techStack: ["Kotlin", "Firebase", "Google Maps API"],
      startDate: "2025-01-05",
      currentProgress: 70,
      hostedBy: "Meera Joshi",
      teamSize: 5,
      timeRequiredForCompletion: "1.5 months",
    },
    {
      projectName: "Skill Swap Network",
      description:
        "A web app that lets users trade skills like coding, designing, or writing without money.",
      techStack: ["React", "Node.js", "MongoDB"],
      startDate: "2025-03-10",
      currentProgress: 35,
      hostedBy: "Aditya Sharma",
      teamSize: 3,
      timeRequiredForCompletion: "3 months",
    },
    {
      projectName: "AR Virtual Classroom",
      description:
        "An augmented reality classroom experience for immersive learning in science and history.",
      techStack: ["Unity", "C#", "ARKit", "Firebase"],
      startDate: "2025-02-20",
      currentProgress: 45,
      hostedBy: "Nikita Rao",
      teamSize: 6,
      timeRequiredForCompletion: "3 months",
    },
    {
      projectName: "Mental Wellness Companion",
      description:
        "An AI-powered chatbot and journal platform to support student mental health and mindfulness.",
      techStack: ["Vue.js", "Python", "Flask", "TensorFlow"],
      startDate: "2025-01-28",
      currentProgress: 60,
      hostedBy: "Karan Deshmukh",
      teamSize: 4,
      timeRequiredForCompletion: "2 months",
    },
    {
      projectName: "Campus Event Manager",
      description:
        "A platform to manage university events, registrations, team formations, and announcements.",
      techStack: ["Angular", "Node.js", "MongoDB", "Socket.io"],
      startDate: "2025-03-05",
      currentProgress: 30,
      hostedBy: "Divya Patel",
      teamSize: 5,
      timeRequiredForCompletion: "2 months",
    },
  ];

  // Function to determine progress color
  const getProgressColor = (progress) => {
    if (progress < 30) return "bg-red-500";
    if (progress < 70) return "bg-yellow-500";
    return "bg-green-500";
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Project Collaboration Hub
          </h1>
          <p className="text-gray-600 mt-2">
            Join innovative projects and collaborate with talented teams
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <h2 className="text-xl font-semibold text-gray-900 line-clamp-1">
                    {project.projectName}
                  </h2>
                  <Badge
                    variant="outline"
                    className="bg-blue-50 text-blue-700 border-blue-200"
                  >
                    {project.currentProgress}% Complete
                  </Badge>
                </div>
                <div className="mt-1">
                  <Progress value={project.currentProgress} className="h-2" />
                </div>
              </CardHeader>

              <CardContent className="pb-4">
                <p className="text-gray-700 mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, i) => (
                    <Badge
                      key={i}
                      variant="secondary"
                      className="bg-gray-100 text-gray-700"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="grid grid-cols-1 gap-2 text-sm">
                  <div className="flex items-center text-gray-600">
                    <CalendarIcon className="h-4 w-4 mr-2" />
                    <span>Started: {project.startDate}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <UsersIcon className="h-4 w-4 mr-2" />
                    <span>
                      Team: {project.teamSize} members • Lead:{" "}
                      {project.hostedBy}
                    </span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <ClockIcon className="h-4 w-4 mr-2" />
                    <span>Estimated: {project.timeRequiredForCompletion}</span>
                  </div>
                </div>
              </CardContent>

              <CardFooter className="bg-gray-50 pt-2">
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Join Collaboration
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectCollaboration;
