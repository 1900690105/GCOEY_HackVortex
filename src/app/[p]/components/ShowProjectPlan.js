import React, { useEffect, useState, useRef } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Upload } from "lucide-react";

const Project_plan = ({ setPlanStatus, setCheck }) => {
  const [activeDay, setActiveDay] = useState(null);
  const [plan, setPlan] = useState("");
  const [verify, setVerify] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [uploadError, setUploadError] = useState("");
  const fileInputRef = useRef(null);

  useEffect(() => {
    const plan = localStorage.getItem("project_plan");
    if (plan) {
      setPlan(JSON.parse(plan));
    } else {
      alert("Project Completed");
    }
    console.log(plan);
  }, []);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    // Check if file is a ZIP
    if (file.type !== "application/zip" && !file.name.endsWith(".zip")) {
      setUploadError("Please upload a ZIP file");
      return;
    }

    setIsUploading(true);
    setUploadError("");

    // Simulate file upload process
    setTimeout(() => {
      setIsUploading(false);
      setUploadSuccess(true);
      setUploadError("");
    }, 1500);
  };

  const triggerFileUpload = () => {
    fileInputRef.current.click();
  };

  const handleProjectCompletion = () => {
    const levelNumber = localStorage.getItem("levelNumber");
    if (levelNumber != null) {
      const level = parseInt(levelNumber, 10) + 1;
      localStorage.setItem("levelNumber", level);
    }
    setPlanStatus(false);
    localStorage.removeItem("project_plan");
    setCheck(true);
    localStorage.removeItem("projects");
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-blue-50 p-4 sm:p-8">
      <div className="max-w-4xl mx-auto">
        <Card className="w-full shadow-lg">
          <CardHeader className="bg-blue-600 text-white">
            <CardTitle className="text-2xl sm:text-3xl font-bold">
              {plan.projectName}
            </CardTitle>
            <p className="text-sm sm:text-base text-blue-100 mt-2">
              {plan.projectDescription}
            </p>
          </CardHeader>

          <CardContent className="p-4 sm:p-6">
            <Accordion type="single" collapsible>
              {plan.projectPlan?.map((dayPlan) => (
                <AccordionItem key={dayPlan?.day} value={`day-${dayPlan?.day}`}>
                  <AccordionTrigger
                    className={`hover:bg-blue-50 p-3 rounded ${
                      activeDay === dayPlan.day
                        ? "bg-blue-100 text-blue-800"
                        : "text-blue-900"
                    }`}
                    onClick={() => setActiveDay(dayPlan.day)}
                  >
                    <div className="flex items-center text-base">
                      <span className="font-bold mr-4 text-blue-600">
                        Day {dayPlan?.day}
                      </span>
                      <span className=" text-gray-600">{dayPlan?.work}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="p-4 bg-blue-50 border">
                    <div className="grid grid-cols-1 sm:grid-cols-1 gap-4  p-2 m-2 ">
                      <div className="text-base">
                        <h4 className="font-semibold text-blue-700">Work</h4>
                        <p className=" text-gray-700">{dayPlan?.work}</p>
                      </div>
                      <div className="text-base">
                        <h4 className="font-semibold text-blue-700">
                          Outcomes
                        </h4>
                        <p className="text-sm text-gray-700">
                          {dayPlan?.outcomes}
                        </p>
                      </div>
                      <div className="text-base">
                        <h4 className="font-semibold text-blue-700">
                          Achievements
                        </h4>
                        <p className="text-sm text-gray-700">
                          {dayPlan?.achievements}
                        </p>
                      </div>
                      <div className="text-base">
                        <h4 className="font-semibold text-blue-700">
                          Key Tips
                        </h4>
                        <p className="text-sm text-gray-700">
                          {dayPlan?.keyTips}
                        </p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>

          <CardFooter className="bg-blue-50 p-4 sm:p-6 flex flex-col sm:flex-row gap-4 items-center">
            <p className="text-sm text-blue-800 italic">
              Project Management Tracker
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto sm:ml-auto">
              {/* Hidden file input */}
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileUpload}
                accept=".zip"
                className="hidden"
              />

              {/* Show upload button or status */}
              {!uploadSuccess ? (
                <Button
                  onClick={triggerFileUpload}
                  className="bg-blue-600 text-white hover:bg-blue-700 flex items-center gap-2"
                  disabled={isUploading}
                >
                  <Upload size={16} />
                  {isUploading ? "Uploading..." : "Submit your Project"}
                </Button>
              ) : (
                <div className="flex items-center gap-2 text-green-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  Project uploaded successfully
                </div>
              )}

              {/* Error message */}
              {uploadError && (
                <p className="text-red-500 text-sm">{uploadError}</p>
              )}

              {/* Verify/Complete button */}
              {(verify || uploadSuccess) && (
                <Button
                  variant="outline"
                  className="border-blue-600 text-blue-600 hover:bg-blue-100"
                  onClick={handleProjectCompletion}
                >
                  Complete Project
                </Button>
              )}

              {/* Show verify button if not yet verified */}
              {!verify && !uploadSuccess && (
                <Button
                  onClick={() => setVerify(true)}
                  className="bg-blue-600 text-white hover:bg-blue-700"
                >
                  Verify Completion
                </Button>
              )}
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Project_plan;
