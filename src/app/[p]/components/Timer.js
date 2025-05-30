import React, { useState, useEffect } from "react";
import { Timer } from "lucide-react";

const PomodoroTimerToggle = () => {
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(true);
  const [isComplete, setIsComplete] = useState(false);
  const [isTimerVisible, setIsTimerVisible] = useState(false);

  useEffect(() => {
    let interval;

    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsRunning(false);
      setIsComplete(true);
    }

    return () => clearInterval(interval);
  }, [isRunning, timeLeft]);

  // Format time to MM:SS
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
      .toString()
      .padStart(2, "0")}`;
  };

  // Toggle timer visibility
  const toggleTimerVisibility = () => {
    setIsTimerVisible(!isTimerVisible);
  };

  // Start timer
  const handleStart = () => {
    setIsRunning(true);
    setIsComplete(false);
  };

  // Pause timer
  const handlePause = () => {
    setIsRunning(false);
  };

  // Reset timer
  const handleReset = () => {
    setTimeLeft(25 * 60);
    setIsRunning(true);
    setIsComplete(false);
  };

  return (
    <div className="fixed bottom-5 right-4">
      {/* Timer Icon */}
      <div
        onClick={toggleTimerVisibility}
        className="cursor-pointer hover:opacity-80 transition-opacity"
      >
        <Timer
          size={60}
          className={`${isRunning ? "text-blue-600" : "text-gray-500"} 
          ${isComplete ? "text-green-600" : ""}`}
        />
        {isRunning && !isComplete && (
          <div className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-8 h-7 flex items-center justify-center text-xs">
            {formatTime(timeLeft)}
          </div>
        )}
      </div>

      {/* Timer Modal */}
      {isTimerVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative">
            {/* Close Button */}
            <button
              onClick={toggleTimerVisibility}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
            >
              ✕
            </button>

            <h1 className="text-2xl font-bold mb-4 text-center">
              Pomodoro Timer
            </h1>

            <div
              className={`text-6xl font-mono mb-6 text-center ${
                isComplete ? "text-green-600" : "text-blue-600"
              }`}
            >
              {formatTime(timeLeft)}
            </div>

            <div className="flex justify-center space-x-4">
              {!isRunning && !isComplete && (
                <button
                  onClick={handleStart}
                  className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
                >
                  Start
                </button>
              )}

              {isRunning && !isComplete && (
                <button
                  onClick={handlePause}
                  className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition"
                >
                  Pause
                </button>
              )}

              <button
                onClick={handleReset}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
              >
                Reset
              </button>
            </div>

            {isComplete && (
              <div className="mt-4 text-green-700 font-semibold text-center">
                Pomodoro Complete! Time for a break.
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default PomodoroTimerToggle;
