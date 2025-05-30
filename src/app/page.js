"use client";
import Link from "next/link";
import {
  BookOpen,
  Code,
  Users,
  FileText,
  Building,
  Mail,
  MessageSquare,
  FileCheck,
  Ghost,
  Github,
  Globe,
  AlertTriangle,
  BookmarkCheck,
  Scale,
  Linkedin,
  FolderGit2,
  FileSpreadsheet,
  Map,
  Briefcase,
  Brain,
  GraduationCap,
  PenTool,
  BookOpenCheck,
} from "lucide-react";
import { FaPaperPlane } from "react-icons/fa";
import ChatBot from "./jobPreparation/components/ChatBot";

export default function Home() {
  const navigationItems = [
    {
      category: "Phase 1 :Career Planning",
      items: [
        {
          href: " /page?page=DepartmentJobRoles",
          icon: Briefcase,
          text: "Department-wise Job Roles",
        },
        {
          href: " /checkcareer",
          icon: Briefcase,
          text: "Check my Role",
        },
        {
          href: " /page?page=RoleRoadMap",
          icon: Map,
          text: "Role Roadmap",
        },
        {
          href: "/page?page=CourseRoadmap",
          icon: Map,
          text: "Course Roadmap",
        },
      ],
    },
    {
      category: "Phase 2 :Learning",
      items: [
        {
          href: "/course",
          icon: GraduationCap,
          text: "Courses",
        },
        {
          href: " /page?page=Projects",
          icon: FolderGit2,
          text: "Projects",
        },
        {
          href: "page?page=ProjectVerification",
          icon: FolderGit2,
          text: "Projects verification",
        },
        {
          href: "/recall",
          icon: BookOpen,
          text: "Recall",
        },
        {
          href: " /page?page=DayRemains",
          icon: BookOpenCheck,
          text: "30 days preparation",
        },
        {
          href: " /page?page=ToolsCompanyUse",
          icon: BookOpenCheck,
          text: "Tool company use",
        },
      ],
    },
    {
      category: "Phase 3 :Technical Assessment",
      items: [
        {
          href: "page?page=ResumeExtractor",
          icon: BookOpenCheck,
          text: "Check my Resume",
        },
        {
          href: "/page?page=SearchJob",
          icon: Briefcase,
          text: "Prepare for Jobs",
        },
        {
          href: "/softskill",
          icon: Brain,
          text: "Soft Skill Interview",
        },
        {
          href: "/mockinterview",
          icon: PenTool,
          text: "Mock Interview",
        },
        {
          href: " /page?page=CodingRound",
          icon: Code,
          text: "Coding Round",
        },
      ],
    },
    {
      category: "For Companies",
      items: [
        {
          href: "page?page=HiringTalent",
          icon: Brain,
          text: "Hire Talents",
        },
        {
          href: "page?page=TakeAssisment",
          icon: FileSpreadsheet,
          text: "Arrange Assessment",
        },
        {
          href: "page?page=CompanyProblem",
          icon: FileSpreadsheet,
          text: "Company Problem",
        },
      ],
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-center text-gray-900 mb-12">
            AI Powered Career Coach for Job Preparation
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {navigationItems.map((category, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  {category.category}
                </h2>
                <div className="space-y-3">
                  {category.items.map((item, itemIdx) => (
                    <Link
                      key={itemIdx}
                      href={item.href}
                      className="flex items-center p-2 rounded-md hover:bg-gray-50 transition-colors duration-150 text-gray-700 hover:text-gray-900"
                    >
                      <item.icon className="w-5 h-5 mr-3 text-blue-600" />
                      <span>{item.text}</span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
            <ChatBot />
          </div>
        </div>
      </div>
    </>
  );
}
