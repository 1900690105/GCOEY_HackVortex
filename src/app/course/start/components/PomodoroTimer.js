"use client";
import { useState, useEffect } from "react";
import {
  Clock,
  Play,
  Pause,
  RefreshCw,
  Minimize,
  Maximize,
} from "lucide-react";

export default function PomodoroTimer() {
  // Timer states
  const [isRunning, setIsRunning] = useState(true); // Start automatically
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [isBreak, setIsBreak] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isMinimized, setIsMinimized] = useState(true); // Start minimized

  // Effect for handling timer countdown
  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        } else if (minutes > 0) {
          setMinutes(minutes - 1);
          setSeconds(59);
        } else {
          // Timer finished
          clearInterval(interval);

          if (!isBreak) {
            // Work session finished, start break
            setIsBreak(true);
            setShowModal(true);
            setMinutes(5);
            setSeconds(0);
            setIsRunning(true);
          } else {
            // Break finished, reset to work session
            setIsBreak(false);
            setShowModal(false);
            setMinutes(25);
            setSeconds(0);
            setIsRunning(false);
          }
        }
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning, minutes, seconds, isBreak]);

  // Helper functions
  const startTimer = () => setIsRunning(true);
  const pauseTimer = () => setIsRunning(false);
  const resetTimer = () => {
    setIsRunning(false);
    if (isBreak) {
      setMinutes(5);
    } else {
      setMinutes(25);
    }
    setSeconds(0);
  };

  // Format time to display
  const formatTime = (mins, secs) => {
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  // Calculate progress percentage for the progress bar
  const calculateProgress = () => {
    const totalSeconds = isBreak ? 5 * 60 : 25 * 60;
    const remainingSeconds = minutes * 60 + seconds;
    return ((totalSeconds - remainingSeconds) / totalSeconds) * 100;
  };

  return (
    <div className="fixed bottom-28 right-8">
      {isMinimized ? (
        // Minimized version - small floating icon
        <div
          className={`flex items-center justify-center w-14 h-14 rounded-full shadow-lg cursor-pointer ${
            isBreak ? "bg-green-500" : "bg-blue-500"
          } text-white`}
          onClick={() => setIsMinimized(false)}
        >
          <Clock size={24} />
          <div className="absolute top-0 right-0 w-4 h-4 rounded-full bg-white flex items-center justify-center">
            <span className="text-xs font-bold text-gray-800">{minutes}</span>
          </div>
        </div>
      ) : (
        // Full timer view
        <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-xl font-bold">
              {isBreak ? "Break Time" : "Pomodoro Timer"}
            </h1>
            <button
              onClick={() => setIsMinimized(true)}
              className="text-gray-500 hover:text-gray-700"
            >
              <Minimize size={20} />
            </button>
          </div>

          <div className="relative mb-6">
            <div className="flex items-center justify-center">
              <Clock className="text-blue-500 mr-3" size={24} />
              <span className="text-4xl font-mono font-bold">
                {formatTime(minutes, seconds)}
              </span>
            </div>

            <div className="w-full bg-gray-200 rounded-full h-2 mt-4">
              <div
                className={`h-2 rounded-full ${
                  isBreak ? "bg-green-500" : "bg-blue-500"
                }`}
                style={{ width: `${calculateProgress()}%` }}
              ></div>
            </div>
          </div>

          <div className="flex justify-center space-x-4">
            {!isRunning ? (
              <button
                onClick={startTimer}
                className="flex items-center px-3 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                <Play size={16} className="mr-1" />
                Start
              </button>
            ) : (
              <button
                onClick={pauseTimer}
                className="flex items-center px-3 py-1 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors"
              >
                <Pause size={16} className="mr-1" />
                Pause
              </button>
            )}

            <button
              onClick={resetTimer}
              className="flex items-center px-3 py-1 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
            >
              <RefreshCw size={16} className="mr-1" />
              Reset
            </button>
          </div>

          <p className="mt-4 text-sm text-center text-gray-600">
            {isBreak
              ? "Take a break! Stretch or relax."
              : "Focus on your task for 25 minutes."}
          </p>
        </div>
      )}

      {/* Break Modal - cannot be closed until break is over */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h2 className="text-2xl font-bold text-center mb-4">Break Time!</h2>
            <p className="text-lg text-center mb-6">
              Take a 5-minute break to rest your mind. This window will
              automatically close when your break is over.
            </p>
            <div className="text-center text-3xl font-mono font-bold mb-4">
              {formatTime(minutes, seconds)}
            </div>
            <div className="w-full bg-gray-200 rounded-full h-4">
              <div
                className="h-4 rounded-full bg-green-500 transition-all duration-1000"
                style={{ width: `${calculateProgress()}%` }}
              ></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
