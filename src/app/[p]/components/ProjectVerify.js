import { useState } from "react";
import {
  Star,
  Upload,
  CheckCircle,
  User,
  MessageSquare,
  FileCheck,
  Clock,
  X,
  ExternalLink,
  Code,
  Image,
  FileText,
} from "lucide-react";

export default function ProjectVerification() {
  // State management
  const [activeTab, setActiveTab] = useState("myProjects");
  const [showRatingModal, setShowRatingModal] = useState(false);
  const [showProjectModal, setShowProjectModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");

  // Sample data
  const myProjects = [
    {
      id: 1,
      title: "Weather App",
      status: "pending",
      submittedAt: "2025-05-10",
      ratings: [],
      description:
        "A weather application that displays current weather and forecasts.",
      githubUrl: "https://github.com/user/weather-app",
      liveUrl: "https://weather-app-demo.vercel.app",
      screenshots: ["screenshot1.jpg", "screenshot2.jpg"],
      technologies: ["React", "NextJS", "TailwindCSS", "OpenWeather API"],
      implementation:
        "The application fetches data from the OpenWeather API and displays current weather conditions along with a 5-day forecast. Users can search for cities globally and save their favorite locations.",
      challenges:
        "Handling API rate limiting and implementing a responsive design for various weather conditions were the main challenges in this project.",
    },
    {
      id: 2,
      title: "E-commerce Dashboard",
      status: "verified",
      submittedAt: "2025-05-01",
      ratings: [4, 5, 4, 5, 3],
      description: "Dashboard displaying sales analytics and customer data.",
      githubUrl: "https://github.com/user/ecommerce-dashboard",
      liveUrl: "https://ecommerce-dash.vercel.app",
      screenshots: ["dashboard1.jpg", "dashboard2.jpg", "dashboard3.jpg"],
      technologies: ["React", "NextJS", "TailwindCSS", "Recharts", "Firebase"],
      implementation:
        "The dashboard visualizes sales data using Recharts and provides real-time analytics through Firebase. It includes user management, product inventory, and order processing features.",
      challenges:
        "Implementing real-time data updates and ensuring the dashboard remains performant with large datasets were significant challenges.",
    },
  ];

  const projectsToVerify = [
    {
      id: 3,
      title: "Task Management Tool",
      submittedBy: "Alex Kim",
      submittedAt: "2025-05-12",
      description: "A tool for managing daily tasks and setting priorities.",
      githubUrl: "https://github.com/alexkim/task-manager",
      liveUrl: "https://task-manager-demo.vercel.app",
      screenshots: ["tasks1.jpg", "tasks2.jpg"],
      technologies: ["React", "Redux", "TailwindCSS", "LocalStorage API"],
      implementation:
        "This tool uses Redux for state management and localStorage for data persistence. Users can create, edit, and delete tasks, set priorities, and organize tasks into projects.",
      challenges:
        "Designing an intuitive user interface while maintaining complex task relationships and dependencies.",
    },
    {
      id: 4,
      title: "Portfolio Website",
      submittedBy: "Jordan Taylor",
      submittedAt: "2025-05-11",
      description: "Personal portfolio showcasing projects and skills.",
      githubUrl: "https://github.com/jordantaylor/portfolio",
      liveUrl: "https://jordan-portfolio.vercel.app",
      screenshots: ["portfolio1.jpg", "portfolio2.jpg", "portfolio3.jpg"],
      technologies: ["NextJS", "Framer Motion", "TailwindCSS", "Three.js"],
      implementation:
        "The portfolio uses Framer Motion for smooth animations and Three.js for interactive 3D elements. It showcases projects, skills, and includes a contact form with email integration.",
      challenges:
        "Optimizing 3D elements for performance across different devices while maintaining visual appeal.",
    },
    {
      id: 5,
      title: "Recipe Finder App",
      submittedBy: "Morgan Lee",
      submittedAt: "2025-05-09",
      description:
        "Search engine for finding recipes based on available ingredients.",
      githubUrl: "https://github.com/morganlee/recipe-finder",
      liveUrl: "https://recipe-finder-app.vercel.app",
      screenshots: ["recipe1.jpg", "recipe2.jpg"],
      technologies: ["React", "NextJS", "TailwindCSS", "Spoonacular API"],
      implementation:
        "This application connects to the Spoonacular API to find recipes based on ingredients that users input. It includes filtering options for dietary restrictions and meal types.",
      challenges:
        "Handling complex search queries and efficiently displaying recipe results with pagination.",
    },
  ];

  // Open the rating modal for a specific project
  const openRatingModal = (project) => {
    setSelectedProject(project);
    setShowRatingModal(true);
  };

  // Open the project details modal
  const openProjectModal = (project) => {
    setSelectedProject(project);
    setShowProjectModal(true);
  };

  // Submit rating and feedback
  const submitRating = () => {
    // Here you would typically send this data to your backend
    console.log(
      `Submitted rating ${rating} for project ID ${selectedProject.id}`
    );
    console.log(`Feedback: ${feedback}`);

    // Close modal and reset form
    setShowRatingModal(false);
    setRating(0);
    setFeedback("");
    setSelectedProject(null);
  };

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        {/* Header */}
        <div className="bg-indigo-600 px-6 py-4">
          <h1 className="text-white text-2xl font-bold">
            Student Project Verification System
          </h1>
          <p className="text-indigo-100">Learn, Build, Verify and Improve</p>
        </div>

        {/* Tab Navigation */}
        <div className="border-b border-gray-200">
          <nav className="flex -mb-px">
            <button
              onClick={() => setActiveTab("myProjects")}
              className={`py-4 px-6 font-medium text-sm ${
                activeTab === "myProjects"
                  ? "border-b-2 border-indigo-500 text-indigo-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              My Projects
            </button>
            <button
              onClick={() => setActiveTab("verifyProjects")}
              className={`py-4 px-6 font-medium text-sm ${
                activeTab === "verifyProjects"
                  ? "border-b-2 border-indigo-500 text-indigo-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Projects to Verify
            </button>
          </nav>
        </div>

        {/* Tab Content */}
        <div className="p-6">
          {/* My Projects Tab */}
          {activeTab === "myProjects" && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-gray-800">
                  My Projects
                </h2>
                <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md flex items-center gap-2">
                  <Upload size={16} />
                  <span>Upload New Project</span>
                </button>
              </div>

              {/* Project List */}
              <div className="space-y-4">
                {myProjects.map((project) => (
                  <div
                    key={project.id}
                    className="border rounded-lg overflow-hidden bg-white"
                  >
                    <div className="p-4 border-b bg-gray-50">
                      <div className="flex justify-between">
                        <h3 className="font-semibold text-lg">
                          {project.title}
                        </h3>
                        <div>
                          {project.status === "pending" ? (
                            <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-xs flex items-center gap-1">
                              <Clock size={12} />
                              Pending Verification
                            </span>
                          ) : (
                            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs flex items-center gap-1">
                              <CheckCircle size={12} />
                              Verified
                            </span>
                          )}
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">
                        Submitted: {project.submittedAt}
                      </p>
                    </div>
                    <div className="p-4">
                      <p className="text-gray-700 mb-4">
                        {project.description}
                      </p>

                      {project.status === "verified" && (
                        <div>
                          <div className="mb-2">
                            <div className="text-sm text-gray-600 mb-1">
                              Average Rating:
                            </div>
                            <div className="flex items-center">
                              {Array.from({ length: 5 }).map((_, i) => (
                                <Star
                                  key={i}
                                  size={18}
                                  fill={
                                    i <
                                    project.ratings.reduce((a, b) => a + b, 0) /
                                      project.ratings.length
                                      ? "#FFD700"
                                      : "none"
                                  }
                                  stroke={
                                    i <
                                    project.ratings.reduce((a, b) => a + b, 0) /
                                      project.ratings.length
                                      ? "#FFD700"
                                      : "#CBD5E0"
                                  }
                                />
                              ))}
                              <span className="ml-2 text-sm font-medium text-gray-700">
                                {(
                                  project.ratings.reduce((a, b) => a + b, 0) /
                                  project.ratings.length
                                ).toFixed(1)}{" "}
                                ({project.ratings.length} reviews)
                              </span>
                            </div>
                          </div>
                          <button className="text-indigo-600 hover:text-indigo-800 text-sm font-medium">
                            View All Feedback
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Projects to Verify Tab */}
          {activeTab === "verifyProjects" && (
            <div>
              <div className="mb-6">
                <h2 className="text-xl font-semibold text-gray-800">
                  Projects Awaiting Your Verification
                </h2>
                <p className="text-gray-600 mt-1">
                  Review and rate these projects from other students
                </p>
              </div>

              {/* Projects to Verify List */}
              <div className="space-y-4">
                {projectsToVerify.map((project) => (
                  <div
                    key={project.id}
                    className="border rounded-lg overflow-hidden bg-white"
                  >
                    <div className="p-4 border-b bg-gray-50">
                      <div className="flex justify-between">
                        <h3 className="font-semibold text-lg">
                          {project.title}
                        </h3>
                        <div className="flex items-center gap-1 text-gray-600 text-sm">
                          <User size={14} />
                          <span>{project.submittedBy}</span>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">
                        Submitted: {project.submittedAt}
                      </p>
                    </div>
                    <div className="p-4">
                      <p className="text-gray-700 mb-4">
                        {project.description}
                      </p>
                      <div className="flex gap-2">
                        <a
                          href="#"
                          className="bg-blue-50 text-blue-700 px-4 py-2 rounded-md text-sm flex items-center gap-1 hover:bg-blue-100"
                          onClick={(e) => {
                            e.preventDefault();
                            openProjectModal(project);
                          }}
                        >
                          <FileCheck size={16} />
                          View Project
                        </a>
                        <button
                          onClick={() => openRatingModal(project)}
                          className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md text-sm flex items-center gap-1"
                        >
                          <Star size={16} />
                          Rate & Review
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Rating Modal */}
      {showRatingModal && selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-lg w-full p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">
                Rate Project: {selectedProject.title}
              </h3>
              <button
                onClick={() => setShowRatingModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X size={20} />
              </button>
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 mb-2">Your Rating</label>
              <div className="flex gap-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setRating(i + 1)}
                    className="focus:outline-none"
                  >
                    <Star
                      size={32}
                      fill={i < rating ? "#FFD700" : "none"}
                      stroke={i < rating ? "#FFD700" : "#CBD5E0"}
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 mb-2">Your Feedback</label>
              <textarea
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                className="w-full border border-gray-300 rounded-md p-3 h-32 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Provide constructive feedback about this project..."
              ></textarea>
            </div>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowRatingModal(false)}
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={submitRating}
                className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 flex items-center gap-2"
                disabled={rating === 0}
              >
                <MessageSquare size={16} />
                Submit Review
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Project Details Modal */}
      {showProjectModal && selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-4xl w-full p-6 max-h-screen overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold text-gray-800">
                {selectedProject.title}
              </h2>
              <button
                onClick={() => setShowProjectModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X size={24} />
              </button>
            </div>

            <div className="mb-6">
              <div className="flex flex-wrap gap-2 mb-4">
                {selectedProject.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <p className="text-gray-700 mb-4">
                {selectedProject.description}
              </p>

              {/* Project links */}
              <div className="flex gap-4 mb-6">
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-blue-600 hover:text-blue-800"
                >
                  <Code size={16} />
                  <span>GitHub Repository</span>
                </a>
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-blue-600 hover:text-blue-800"
                >
                  <ExternalLink size={16} />
                  <span>Live Demo</span>
                </a>
              </div>
            </div>

            {/* Project screenshots */}
            <div className="mb-6">
              <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                <Image size={18} />
                Screenshots
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {selectedProject.screenshots.map((screenshot, index) => (
                  <div
                    key={index}
                    className="border rounded-lg overflow-hidden"
                  >
                    <img
                      src={`/api/placeholder/600/400`}
                      alt={`${selectedProject.title} screenshot ${index + 1}`}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Implementation details */}
            <div className="mb-6">
              <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                <FileText size={18} />
                Implementation Details
              </h3>
              <p className="text-gray-700">{selectedProject.implementation}</p>
            </div>

            {/* Challenges */}
            <div className="mb-6">
              <h3 className="font-semibold text-lg mb-3">
                Challenges & Solutions
              </h3>
              <p className="text-gray-700">{selectedProject.challenges}</p>
            </div>

            {/* Action buttons */}
            <div className="flex justify-end gap-3 mt-6">
              <button
                onClick={() => {
                  setShowProjectModal(false);
                  openRatingModal(selectedProject);
                }}
                className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 flex items-center gap-2"
              >
                <Star size={16} />
                Rate This Project
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
