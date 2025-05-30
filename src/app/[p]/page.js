"use client";
import ChatBot from "@/app/jobPreparation/components/ChatBot";
import dynamic from "next/dynamic";
import { useSearchParams } from "next/navigation";
import PomodoroTimerToggle from "./components/Timer";

const componentMap = {
  Certificate: dynamic(() => import("@/app/[p]/components/Certificate")),
  DepartmentJobRoles: dynamic(() =>
    import("@/app/[p]/components/DepartmentJobs")
  ),

  RoleRoadMap: dynamic(() => import("@/app/[p]/components/RoleRoadMap")),
  Projects: dynamic(() => import("@/app/[p]/components/Projects")),

  // ResumeHome: dynamic(() => import("@/app/jobPreparation/components/Resumes")),

  StartInterview: dynamic(() =>
    import("@/app/[p]/components/StartHumanInterview")
  ),

  ToolsCompanyUse: dynamic(() =>
    import("@/app/[p]/components/ToolsCompanyUse")
  ),
  DayRemains: dynamic(() => import("@/app/[p]/components/Days30Preparation")),

  MoreInfoRole: dynamic(() => import("@/app/[p]/components/MoreInfoRole")),
  FirstProgram: dynamic(() => import("@/app/[p]/components/HelloworldFornt")),
  ResumeExtractor: dynamic(() =>
    import("@/app/[p]/components/ResumeExtractor")
  ),
  HiringTalent: dynamic(() => import("@/app/[p]/components/HiringTalent")),
  TakeAssisment: dynamic(() => import("@/app/[p]/components/TakeAssisment")),
  PublicDoubt: dynamic(() => import("@/app/[p]/components/PublicDoubt")),
  Resources: dynamic(() => import("@/app/[p]/components/Resourses")),
  CreateCourse: dynamic(() => import("@/app/components/CreateCourse")),
};

const ParamsPage = () => {
  const searchParams = useSearchParams();
  const page_name = searchParams.get("page");
  const Component =
    componentMap[page_name] ||
    dynamic(() => import("@/app/jobPreparation/components/Instruction"));
  return (
    <>
      <Component />
      <PomodoroTimerToggle />
      {/* <ChatBot /> */}
    </>
  );
};

export default ParamsPage;
