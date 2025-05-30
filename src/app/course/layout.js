import ChatBot from "../jobPreparation/components/ChatBot";
import PomodoroTimer from "./start/components/PomodoroTimer";

export default function CourseLayout({ children }) {
  return (
    <div>
      {children}
      <div className="mb-36">
        <PomodoroTimer />
      </div>
      <div className="mb-12">
        <ChatBot />
      </div>
    </div>
  );
}
