"use client";
import ChatBot from "@/app/jobPreparation/components/ChatBot";
import dynamic from "next/dynamic";
import { useSearchParams } from "next/navigation";

const componentMap = {
  Certificate: dynamic(() => import("@/app/[p]/components/Certificate")),
  DepartmentJobRoles: dynamic(() =>
    import("@/app/[p]/components/DepartmentJobs")
  ),
  GroupDiscussion: dynamic(() =>
    import("@/app/jobPreparation/components/GroupDescusion")
  ),
  JobPortals: dynamic(() => import("@/app/[p]/components/JobPortals")),
  RoleRoadMap: dynamic(() => import("@/app/[p]/components/RoleRoadMap")),
  Projects: dynamic(() => import("@/app/[p]/components/Projects")),

  ResumeHome: dynamic(() => import("@/app/jobPreparation/components/Resumes")),

  SoftSkill: dynamic(() => import("@/app/[p]/components/SoftSkill")),
  StartInterview: dynamic(() =>
    import("@/app/[p]/components/StartHumanInterview")
  ),
  CodingRound: dynamic(() => import("@/app/[p]/components/CodingRound")),

  ToolsCompanyUse: dynamic(() =>
    import("@/app/[p]/components/ToolsCompanyUse")
  ),
  DayRemains: dynamic(() => import("@/app/[p]/components/Days30Preparation")),
  InterviewFollowupForm: dynamic(() =>
    import("@/app/jobPreparation/components/FollowUpMail")
  ),

  MoreInfoRole: dynamic(() => import("@/app/[p]/components/MoreInfoRole")),
  FirstProgram: dynamic(() => import("@/app/[p]/components/HelloworldFornt")),
  ResumeExtractor: dynamic(() =>
    import("@/app/[p]/components/ResumeExtractor")
  ),
  HiringTalent: dynamic(() => import("@/app/[p]/components/HiringTalent")),
  TakeAssisment: dynamic(() => import("@/app/[p]/components/TakeAssisment")),
  CourseRoadmap: dynamic(() => import("@/app/[p]/components/CourseRoadmap")),
  CompanyProblem: dynamic(() => import("@/app/[p]/components/CompanyProblem")),
  SearchJob: dynamic(() => import("@/app/[p]/components/SearchJob")),
  ProjectVerification: dynamic(() =>
    import("@/app/[p]/components/ProjectVerify")
  ),
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
      <ChatBot />
    </>
  );
};

export default ParamsPage;
