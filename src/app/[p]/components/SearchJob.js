import React, { useState } from "react";
import { Search, Briefcase, MapPin, Filter, X } from "lucide-react";

function SearchJob() {
  const jobs = [
    {
      id: 1,
      title: "Frontend Developer",
      company: "CodeCraft India",
      location: "Bangalore, Karnataka",
      type: "Full-time",
      postedAt: "2 days ago",
      salary: "₹6,00,000 - ₹10,00,000 per annum",
      skills: ["React", "Next.js", "Tailwind CSS"],
    },
    {
      id: 2,
      title: "UX Designer",
      company: "DesignKart",
      location: "Remote (India)",
      type: "Contract",
      postedAt: "1 day ago",
      salary: "₹5,00,000 - ₹8,00,000 per annum",
      skills: ["Figma", "UI/UX", "Prototyping"],
    },
    {
      id: 3,
      title: "Full Stack Developer",
      company: "StartupNest",
      location: "Pune, Maharashtra",
      type: "Full-time",
      postedAt: "Just now",
      salary: "₹8,00,000 - ₹12,00,000 per annum",
      skills: ["JavaScript", "Node.js", "MongoDB"],
    },
    {
      id: 4,
      title: "Backend Developer",
      company: "TechNova",
      location: "Hyderabad, Telangana",
      type: "Full-time",
      postedAt: "3 days ago",
      salary: "₹7,00,000 - ₹11,00,000 per annum",
      skills: ["Node.js", "Express", "MySQL"],
    },
    {
      id: 5,
      title: "Mobile App Developer",
      company: "Appify Solutions",
      location: "Chennai, Tamil Nadu",
      type: "Part-time",
      postedAt: "2 days ago",
      salary: "₹4,00,000 - ₹7,00,000 per annum",
      skills: ["Flutter", "React Native", "Firebase"],
    },
    {
      id: 6,
      title: "Data Analyst",
      company: "InsightGenix",
      location: "Gurgaon, Haryana",
      type: "Full-time",
      postedAt: "5 days ago",
      salary: "₹5,50,000 - ₹9,00,000 per annum",
      skills: ["SQL", "Excel", "Power BI", "Python"],
    },
    {
      id: 7,
      title: "DevOps Engineer",
      company: "CloudBridge",
      location: "Mumbai, Maharashtra",
      type: "Full-time",
      postedAt: "1 day ago",
      salary: "₹9,00,000 - ₹13,00,000 per annum",
      skills: ["AWS", "Docker", "CI/CD", "Linux"],
    },
    {
      id: 8,
      title: "AI/ML Engineer",
      company: "BrainBotics",
      location: "Remote (India)",
      type: "Internship",
      postedAt: "Just now",
      salary: "₹15,000 - ₹25,000 per month",
      skills: ["Python", "TensorFlow", "Pandas", "Scikit-learn"],
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilters, setActiveFilters] = useState({
    jobType: [],
    location: [],
    skills: [],
  });
  const [showFilters, setShowFilters] = useState(false);

  const uniqueLocations = [...new Set(jobs.map((job) => job.location))];

  const uniqueJobTypes = [...new Set(jobs.map((job) => job.type))];

  const uniqueSkills = [...new Set(jobs.flatMap((job) => job.skills))];

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const toggleFilter = (category, value) => {
    setActiveFilters((prevFilters) => {
      const updatedFilters = { ...prevFilters };
      if (updatedFilters[category].includes(value)) {
        updatedFilters[category] = updatedFilters[category].filter(
          (item) => item !== value
        );
      } else {
        updatedFilters[category] = [...updatedFilters[category], value];
      }
      return updatedFilters;
    });
  };

  const clearFilters = () => {
    setActiveFilters({
      jobType: [],
      location: [],
      skills: [],
    });
  };

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.skills.some((skill) =>
        skill.toLowerCase().includes(searchTerm.toLowerCase())
      );

    const matchesJobType =
      activeFilters.jobType.length === 0 ||
      activeFilters.jobType.includes(job.type);

    const matchesLocation =
      activeFilters.location.length === 0 ||
      activeFilters.location.includes(job.location);

    const matchesSkills =
      activeFilters.skills.length === 0 ||
      job.skills.some((skill) => activeFilters.skills.includes(skill));

    return matchesSearch && matchesJobType && matchesLocation && matchesSkills;
  });

  const FilterBadge = ({ filter, category }) => (
    <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs bg-indigo-100 text-indigo-800 mr-2 mb-2">
      {filter}
      <button
        onClick={() => toggleFilter(category, filter)}
        className="text-indigo-600 hover:text-indigo-800"
      >
        <X size={14} />
      </button>
    </span>
  );

  return (
    <div className="max-w-6xl mx-auto p-4 bg-gray-50 min-h-screen">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          Find Your Dream Job
        </h1>
        <p className="text-gray-600">
          Discover opportunities matching your skills and preferences
        </p>
      </div>

      {/* Search Bar */}
      <div className="relative mb-6">
        <div className="flex items-center border border-gray-300 rounded-lg bg-white overflow-hidden">
          <div className="p-3 text-gray-400">
            <Search size={20} />
          </div>
          <input
            type="text"
            placeholder="Search by job title, company, or skill"
            value={searchTerm}
            onChange={handleSearchChange}
            className="w-full p-3 focus:outline-none"
          />
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center px-4 py-3 bg-indigo-600 text-white font-medium"
          >
            <Filter size={18} className="mr-2" />
            Filters
          </button>
        </div>
      </div>

      {/* Filters Panel */}
      {showFilters && (
        <div className="bg-white p-4 rounded-lg shadow-md mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-medium">Filters</h2>
            <button
              onClick={clearFilters}
              className="text-indigo-600 hover:text-indigo-800 text-sm font-medium"
            >
              Clear All
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Job Type Filters */}
            <div>
              <h3 className="font-medium mb-2 text-gray-700">Job Type</h3>
              <div className="space-y-2">
                {uniqueJobTypes.map((type) => (
                  <label
                    key={type}
                    className="flex items-center cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={activeFilters.jobType.includes(type)}
                      onChange={() => toggleFilter("jobType", type)}
                      className="mr-2 h-4 w-4 text-indigo-600"
                    />
                    <span className="text-gray-700">{type}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Location Filters */}
            <div>
              <h3 className="font-medium mb-2 text-gray-700">Location</h3>
              <div className="space-y-2">
                {uniqueLocations.map((location) => (
                  <label
                    key={location}
                    className="flex items-center cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={activeFilters.location.includes(location)}
                      onChange={() => toggleFilter("location", location)}
                      className="mr-2 h-4 w-4 text-indigo-600"
                    />
                    <span className="text-gray-700">{location}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Skills Filters */}
            <div>
              <h3 className="font-medium mb-2 text-gray-700">Skills</h3>
              <div className="space-y-2">
                {uniqueSkills.map((skill) => (
                  <label
                    key={skill}
                    className="flex items-center cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={activeFilters.skills.includes(skill)}
                      onChange={() => toggleFilter("skills", skill)}
                      className="mr-2 h-4 w-4 text-indigo-600"
                    />
                    <span className="text-gray-700">{skill}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Active Filters */}
      {(activeFilters.jobType.length > 0 ||
        activeFilters.location.length > 0 ||
        activeFilters.skills.length > 0) && (
        <div className="mb-4">
          <div className="flex flex-wrap items-center">
            <span className="text-sm text-gray-600 mr-2">Active filters:</span>
            {activeFilters.jobType.map((filter) => (
              <FilterBadge
                key={`type-${filter}`}
                filter={filter}
                category="jobType"
              />
            ))}
            {activeFilters.location.map((filter) => (
              <FilterBadge
                key={`location-${filter}`}
                filter={filter}
                category="location"
              />
            ))}
            {activeFilters.skills.map((filter) => (
              <FilterBadge
                key={`skill-${filter}`}
                filter={filter}
                category="skills"
              />
            ))}
          </div>
        </div>
      )}

      {/* Search Results */}
      <div className="mb-4">
        <p className="text-gray-600 font-medium">
          {filteredJobs.length} Jobs Found
        </p>
      </div>

      {/* Job Listings */}
      <div className="space-y-4">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => (
            <div
              key={job.id}
              className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow border border-gray-100"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-xl font-semibold text-gray-800">
                    {job.title}
                  </h2>
                  <div className="flex items-center text-gray-600 mt-1">
                    <Briefcase size={16} className="mr-1" />
                    <span className="mr-4">{job.company}</span>
                    <MapPin size={16} className="mr-1" />
                    <span>{job.location}</span>
                  </div>
                </div>
                <span
                  className={`px-3 py-1 text-xs font-medium rounded-full ${
                    job.type === "Full-time"
                      ? "bg-green-100 text-green-800"
                      : job.type === "Part-time"
                      ? "bg-blue-100 text-blue-800"
                      : job.type === "Contract"
                      ? "bg-purple-100 text-purple-800"
                      : "bg-yellow-100 text-yellow-800"
                  }`}
                >
                  {job.type}
                </span>
              </div>

              <div className="mt-4">
                <div className="flex items-center justify-between">
                  <div className="text-gray-700">
                    <span className="font-medium">Salary:</span> {job.salary}
                  </div>
                  <div className="text-gray-500 text-sm">{job.postedAt}</div>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {job.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex gap-2">
                <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors">
                  Apply Now
                </button>
                <button
                  onClick={() => {
                    window.location.href = `page?page=TakeAssisment`;
                  }}
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                >
                  Test My Skill
                </button>
                <button
                  onClick={() => {
                    localStorage.setItem("role", job.title);
                    window.location.href = `/page?page=RoleRoadMap`;
                  }}
                  className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition-colors"
                >
                  Preparation
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-12 bg-white rounded-lg shadow">
            <div className="text-gray-500 mb-2">
              No jobs found matching your criteria
            </div>
            <button
              onClick={clearFilters}
              className="text-indigo-600 hover:text-indigo-800 font-medium"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchJob;
