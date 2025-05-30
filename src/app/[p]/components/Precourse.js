import React, { useState } from "react";
import { ChevronDown, ChevronUp, CheckCircle, HelpCircle } from "lucide-react";

function Precourse({ pre, inputValue }) {
  const [expandedCategory, setExpandedCategory] = useState(null);
  const [showQuestions, setShowQuestions] = useState(false);

  const toggleCategory = (index) => {
    if (expandedCategory === index) {
      setExpandedCategory(null);
    } else {
      setExpandedCategory(index);
    }
  };

  const toggleQuestions = () => {
    setShowQuestions(!showQuestions);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 rounded-none shadow-md">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-blue-700 mb-2">
          Thinng to know before {inputValue} Preparation
        </h1>
        <p className="text-gray-600">
          Ensure you're ready for your {inputValue} journey
        </p>
      </div>

      <div className="mb-8">
        <div className="bg-blue-700 text-white p-4 rounded-t-lg flex justify-between items-center">
          <h2 className="text-xl font-bold">Essential Precourse Knowledge</h2>
          <div className="text-blue-200 text-sm">
            Review these areas before starting
          </div>
        </div>

        <div className="bg-white rounded-b-lg shadow-sm">
          {pre?.essential_precourse_knowledge?.map((section, index) => (
            <div
              key={index}
              className="border-b border-gray-200 last:border-b-0"
            >
              <div
                className="p-4 cursor-pointer flex justify-between items-center hover:bg-gray-50"
                onClick={() => toggleCategory(index)}
              >
                <div className="flex items-center">
                  <span className="text-lg font-semibold text-gray-800">
                    {section.category}
                  </span>
                </div>
                {expandedCategory === index ? (
                  <ChevronUp className="text-blue-700" size={20} />
                ) : (
                  <ChevronDown className="text-blue-700" size={20} />
                )}
              </div>

              {expandedCategory === index && (
                <div className="p-4 pt-0 bg-gray-50">
                  <ul className="list-none pl-6">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="mb-2 flex items-start">
                        <CheckCircle
                          className="text-green-500 mr-2 mt-1 flex-shrink-0"
                          size={16}
                        />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <div
          className="bg-purple-700 text-white p-4 rounded-t-lg flex justify-between items-center cursor-pointer"
          onClick={toggleQuestions}
        >
          <h2 className="text-xl font-bold">Self-Reflection Questions</h2>
          {showQuestions ? (
            <ChevronUp className="text-white" size={20} />
          ) : (
            <ChevronDown className="text-white" size={20} />
          )}
        </div>

        {showQuestions && (
          <div className="bg-white p-5 rounded-b-lg shadow-sm">
            <ul className="list-none">
              {pre?.questions_to_ask_yourself?.map((question, index) => (
                <li key={index} className="mb-3 flex items-start">
                  <HelpCircle
                    className="text-purple-500 mr-2 mt-1 flex-shrink-0"
                    size={16}
                  />
                  <span className="text-gray-700">{question}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* <div className="bg-blue-50 p-5 rounded-lg border border-blue-200">
        <h3 className="text-lg font-semibold text-blue-800 mb-2">
          Ready to Begin?
        </h3>
        <p className="text-gray-700 mb-4">
          If you've reviewed all the prerequisites and feel prepared, you're
          ready to start your web development journey!
        </p>
        <button className="bg-blue-700 text-white py-2 px-6 rounded-lg hover:bg-blue-800 transition-colors">
          Start Course
        </button>
      </div> */}
    </div>
  );
}

export default Precourse;
