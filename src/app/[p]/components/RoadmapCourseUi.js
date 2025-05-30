import {
  BookOpen,
  Check,
  ChevronRight,
  Download,
  FileText,
} from "lucide-react";
import React, { useState } from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";

function RoadmapCourseUi({ roadmap, expandedModule }) {
  const [activeModule, setActiveModule] = useState(expandedModule);

  const toggleModule = (index) => {
    setActiveModule(activeModule === index ? null : index);
  };

  const handleDownloadRoadmapPDF = () => {
    const doc = new jsPDF();
    const fileName = `${roadmap.title
      .replace(/\s+/g, "-")
      .toLowerCase()}-course-roadmap.pdf`;

    doc.setFontSize(20);
    doc.text(roadmap.title, 105, 20, { align: "center" });

    doc.setFontSize(12);
    doc.text(
      "A comprehensive learning path from beginner to advanced",
      105,
      30,
      { align: "center" }
    );

    let yPosition = 50;

    roadmap.modules.forEach((module, index) => {
      if (yPosition > 250) {
        doc.addPage();
        yPosition = 20;
      }

      doc.setFontSize(16);
      doc.setTextColor(0, 0, 0);
      doc.text(`Module ${index + 1}: ${module.title}`, 20, yPosition);
      yPosition += 10;

      doc.setFontSize(12);
      module.subtopics.forEach((subtopic, idx) => {
        const subtopicText = `• ${subtopic}`;
        const splitSubtopic = doc.splitTextToSize(subtopicText, 170);
        doc.text(splitSubtopic, 25, yPosition);
        yPosition += splitSubtopic.length * 7;

        if (yPosition > 270) {
          doc.addPage();
          yPosition = 20;
        }
      });

      yPosition += 10;
    });

    doc.save(fileName);
  };

  return (
    <>
      <div className="pb-20">
        <div className="text-center mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {roadmap?.title}
          </h1>
          <p className="text-gray-600 text-lg">
            A comprehensive learning path from beginner to advanced
          </p>

          {/* Download Buttons */}
          <div className="flex justify-center space-x-4 mt-6">
            <button
              onClick={handleDownloadRoadmapPDF}
              className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg shadow transition-colors duration-200 flex items-center gap-2"
            >
              <FileText size={16} />
              <span>Download PDF</span>
            </button>
          </div>
        </div>

        <div className="space-y-4">
          {roadmap?.modules?.map((module, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl transition-all duration-300 ${
                activeModule === index
                  ? "shadow-lg border-blue-400 transform scale-101"
                  : "shadow-md hover:shadow-lg border-transparent"
              } border-l-4 overflow-hidden`}
            >
              <div
                className={`p-6 flex items-center justify-between cursor-pointer`}
                onClick={() => toggleModule(index)}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      activeModule === index
                        ? "bg-blue-600 text-white"
                        : "bg-blue-100 text-blue-600"
                    }`}
                  >
                    {index + 1}
                  </div>
                  <h2 className="text-xl font-bold text-gray-800">
                    {module.title}
                  </h2>
                </div>
                <div
                  className={`transform transition-transform ${
                    activeModule === index ? "rotate-90" : ""
                  }`}
                >
                  <ChevronRight
                    size={24}
                    className={
                      activeModule === index ? "text-blue-600" : "text-gray-400"
                    }
                  />
                </div>
              </div>

              {activeModule === index && (
                <div className="px-6 pb-6 pt-0">
                  <div className="pl-14">
                    <ul className="space-y-3 grid grid-cols-1 md:grid-cols-2 gap-3">
                      {module?.subtopics?.map((sub, i) => (
                        <li
                          key={i}
                          className="flex items-start bg-gray-50 p-3 rounded-lg"
                        >
                          <span className="mr-2 mt-1 bg-green-100 p-1 rounded-full text-green-500 flex-shrink-0">
                            <Check size={12} />
                          </span>
                          <span className="text-gray-700">{sub}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 flex justify-end">
                      <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg shadow transition-colors duration-200 flex items-center gap-2">
                        <BookOpen size={16} />
                        <span>Start This Module</span>
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default RoadmapCourseUi;
