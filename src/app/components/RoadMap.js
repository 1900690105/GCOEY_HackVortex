import { Button } from "@/components/ui/button";
import React from "react";

function RoadMap() {
  const roadmap = JSON.parse(localStorage.getItem("roadmap"));

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 bg-gray-50 min-h-screen">
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl shadow-xl p-6 mb-10 text-white">
        <h1 className="text-3xl md:text-4xl font-bold text-center">
          {roadmap.roadmapTitle}
        </h1>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-3 mt-4">
          <span className="px-4 py-1 bg-white/20 rounded-full font-medium">
            {roadmap.level}
          </span>
          <span className="hidden sm:block">•</span>
          <span className="px-4 py-1 bg-white/20 rounded-full font-medium">
            {roadmap.branch}
          </span>
        </div>
      </div>

      {roadmap.stages.map((stage) => (
        <div key={stage.stageNumber} className="mb-10">
          <div className="flex items-center gap-4 mb-6">
            <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-xl md:text-2xl">
              {stage.stageNumber}
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                {stage.stageTitle}
              </h2>
              <p className="text-indigo-600 font-medium mt-1">
                Time Required: {stage.timeRequired}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
            {stage?.topics?.map((topic, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-100"
              >
                <div className="bg-indigo-50 p-4 border-b border-indigo-100">
                  <h3 className="text-xl font-semibold text-indigo-700">
                    {topic.topic}
                  </h3>
                </div>

                <div className="p-5">
                  <h4 className="font-medium text-gray-700 mb-2">Subtopics:</h4>
                  <ul className="space-y-2 mb-5">
                    {topic.subtopics.map((sub, i) => (
                      <li
                        key={i}
                        className="flex items-start border p-2 rounded-lg border-gray-200 pb-2"
                      >
                        {/* <span className="inline-block w-4 h-4 mt-0 mr-2 bg-indigo-100 rounded-full flex-shrink-0">

                        </span> */}
                        <span className="text-gray-600">
                          {i + 1}. {sub}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <h4 className="font-medium text-gray-700 mb-2">
                    Skills to Master:
                  </h4>
                  <ul className="space-y-2">
                    {topic.skillsToMaster.map((skill, i) => (
                      <li key={i} className="flex items-start">
                        <span className="inline-block w-4 h-4 mt-1 mr-2 bg-green-100 rounded-full flex-shrink-0"></span>
                        <span className="text-gray-600">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
      <div className="flex justify-end">
        <Button
          onClick={() => {
            window.location.href = "/course";
          }}
        >
          Go For Courses
        </Button>
      </div>
    </div>
  );
}

export default RoadMap;
