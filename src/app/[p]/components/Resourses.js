import React, { useState } from "react";
import { Star, Eye, ExternalLink, Filter } from "lucide-react";

function Resources() {
  const [tagFilter, setTagFilter] = useState("");
  const [levelFilter, setLevelFilter] = useState("");
  const res = [
    {
      title: "AI-Powered Resume Builder",
      description:
        "An AI-based tool that helps users create professional resumes with personalized suggestions.",
      usecase: "Job seekers looking to build ATS-friendly resumes quickly.",
      hosted_by: "Tech Innovators Pvt. Ltd.",
      hosted_on: "2024-03-15",
      stars: 4.8,
      views: 12035,
      link: "https://example.com/ai-resume-builder",
      tags: ["AI", "Career"],
      level: "Beginner",
    },
    {
      title: "Full-Stack Web Development Guide",
      description:
        "A comprehensive guide covering MERN stack with project-based learning.",
      usecase:
        "Beginners and intermediate developers learning full-stack web development.",
      hosted_by: "CodeMaster Academy",
      hosted_on: "2023-12-01",
      stars: 4.7,
      views: 18920,
      link: "https://example.com/fullstack-guide",
      tags: ["Web Development", "Programming"],
      level: "Intermediate",
    },
    {
      title: "Python for Data Science",
      description:
        "An interactive course covering Python libraries like Pandas, NumPy, and Scikit-Learn.",
      usecase:
        "Students and professionals looking to enter the field of data science.",
      hosted_by: "DataCamp",
      hosted_on: "2024-02-10",
      stars: 4.9,
      views: 24567,
      link: "https://example.com/python-data-science",
      tags: ["Python", "Data Science"],
      level: "Advanced",
    },
    {
      title: "UI/UX Design Essentials",
      description:
        "A free course covering Figma, Adobe XD, and usability principles.",
      usecase:
        "Aspiring UI/UX designers looking to master modern design tools.",
      hosted_by: "DesignLab",
      hosted_on: "2023-11-05",
      stars: 4.6,
      views: 17342,
      link: "https://example.com/ui-ux-design",
      tags: ["Design", "UI/UX"],
      level: "Beginner",
    },
    {
      title: "Cybersecurity Fundamentals",
      description:
        "An introductory course on ethical hacking, penetration testing, and security best practices.",
      usecase:
        "IT professionals and security enthusiasts looking to strengthen cybersecurity skills.",
      hosted_by: "CyberSafe Academy",
      hosted_on: "2024-01-20",
      stars: 4.7,
      views: 13289,
      link: "https://example.com/cybersecurity-fundamentals",
      tags: ["Cybersecurity", "IT"],
      level: "Intermediate",
    },
    {
      title: "Advanced Machine Learning Techniques",
      description:
        "Deep dive into complex machine learning algorithms and neural network architectures.",
      usecase: "Experienced data scientists looking to expand their expertise.",
      hosted_by: "AI Research Institute",
      hosted_on: "2024-04-01",
      stars: 4.9,
      views: 8765,
      link: "https://example.com/advanced-ml",
      tags: ["AI", "Machine Learning"],
      level: "Advanced",
    },
    {
      title: "Blockchain Essentials",
      description:
        "Learn the fundamentals of blockchain technology, smart contracts, and cryptocurrencies.",
      usecase:
        "Developers and finance professionals interested in blockchain applications.",
      hosted_by: "Blockchain Academy",
      hosted_on: "2023-10-15",
      stars: 4.8,
      views: 15782,
      link: "https://example.com/blockchain-essentials",
      tags: ["Blockchain", "Finance"],
      level: "Beginner",
    },
    {
      title: "React Native Mobile App Development",
      description:
        "A hands-on course teaching React Native for cross-platform mobile application development.",
      usecase:
        "Developers looking to build Android and iOS apps with JavaScript.",
      hosted_by: "Mobile Dev Academy",
      hosted_on: "2024-03-05",
      stars: 4.7,
      views: 11432,
      link: "https://example.com/react-native-guide",
      tags: ["Mobile Development", "React Native"],
      level: "Intermediate",
    },
    {
      title: "Cloud Computing with AWS",
      description:
        "Learn about AWS services, cloud deployment, and serverless architectures.",
      usecase:
        "IT professionals and DevOps engineers looking to leverage AWS cloud services.",
      hosted_by: "CloudTech Institute",
      hosted_on: "2023-09-12",
      stars: 4.9,
      views: 20547,
      link: "https://example.com/aws-cloud",
      tags: ["Cloud Computing", "AWS"],
      level: "Advanced",
    },
    {
      title: "Data Visualization with Tableau",
      description:
        "A course on creating powerful data visualizations using Tableau.",
      usecase:
        "Business analysts and data scientists looking to master visualization techniques.",
      hosted_by: "DataVis Academy",
      hosted_on: "2023-12-18",
      stars: 4.7,
      views: 13210,
      link: "https://example.com/tableau-course",
      tags: ["Data Visualization", "Business Intelligence"],
      level: "Intermediate",
    },
    {
      title: "DevOps and CI/CD Pipelines",
      description:
        "Understand DevOps principles and build continuous integration/continuous deployment pipelines.",
      usecase:
        "Software engineers and DevOps practitioners looking to automate development workflows.",
      hosted_by: "DevOps University",
      hosted_on: "2024-01-30",
      stars: 4.8,
      views: 11987,
      link: "https://example.com/devops-guide",
      tags: ["DevOps", "Automation"],
      level: "Advanced",
    },
    {
      title: "Google Ads Mastery",
      description:
        "A step-by-step guide on running successful PPC campaigns using Google Ads.",
      usecase:
        "Digital marketers and business owners looking to drive online traffic and conversions.",
      hosted_by: "Marketing Pro Academy",
      hosted_on: "2023-08-25",
      stars: 4.6,
      views: 9874,
      link: "https://example.com/google-ads-mastery",
      tags: ["Digital Marketing", "PPC"],
      level: "Beginner",
    },
  ];

  // Get unique tags and levels for filtering
  const allTags = [...new Set(res.flatMap((item) => item.tags))];
  const levels = ["Beginner", "Intermediate", "Advanced"];

  // Filter resources based on selected tags and level
  const filteredResources = res.filter(
    (item) =>
      (tagFilter === "" || item.tags.includes(tagFilter)) &&
      (levelFilter === "" || item.level === levelFilter)
  );

  // Level color mapping
  const levelColorMap = {
    Beginner: "bg-green-100 text-green-800",
    Intermediate: "bg-yellow-100 text-yellow-800",
    Advanced: "bg-red-100 text-red-800",
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Learning Resources
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Curated resources to boost your skills
          </p>

          {/* Filtering Section */}
          <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
            {/* Tag Filters */}
            <div className="flex flex-wrap justify-center gap-3">
              <button
                onClick={() => setTagFilter("")}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  tagFilter === ""
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                All Tags
              </button>
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setTagFilter(tag)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    tagFilter === tag
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>

            {/* Level Filters */}
            <div className="flex flex-wrap justify-center gap-3">
              <button
                onClick={() => setLevelFilter("")}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  levelFilter === ""
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                All Levels
              </button>
              {levels.map((level) => (
                <button
                  key={level}
                  onClick={() => setLevelFilter(level)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    levelFilter === level
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  {level}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-900 pr-2">
                    {item.title}
                  </h3>
                  <span
                    className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      levelColorMap[item.level]
                    }`}
                  >
                    {item.level}
                  </span>
                </div>

                <p className="text-gray-600 mb-4">{item.description}</p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="font-semibold mr-2">Use Case:</span>
                    {item.usecase}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="font-semibold mr-2">Hosted By:</span>
                    {item.hosted_by}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="font-semibold mr-2">Hosted On:</span>
                    {item.hosted_on}
                  </div>
                </div>

                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center text-yellow-500">
                    <Star className="w-5 h-5 mr-1 fill-current" />
                    <span className="font-bold">{item.stars} / 5</span>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <Eye className="w-5 h-5 mr-1" />
                    <span>{item.views}</span>
                  </div>
                </div>

                <div className="flex space-x-2 mb-4">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 w-full flex items-center justify-center bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <ExternalLink className="w-5 h-5 mr-2" />
                  View Resource
                </a>
              </div>
            </div>
          ))}
        </div>

        {filteredResources.length === 0 && (
          <div className="text-center py-10">
            <p className="text-xl text-gray-600">
              No resources found for the selected filters.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Resources;
