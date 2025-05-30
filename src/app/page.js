"use client";
import Link from "next/link";
import {
  BookOpen,
  BookmarkCheck,
  FolderGit2,
  FileSpreadsheet,
  Map,
  Briefcase,
  Brain,
  GraduationCap,
  BookOpenCheck,
} from "lucide-react";
import PomodoroTimerToggle from "./[p]/components/Timer";
import ChatBot from "./jobPreparation/components/ChatBot";

export default function Home() {
  const navigationItems = [
    {
      category: "Phase 1: Career Planning",
      items: [
        {
          href: "/page?page=DepartmentJobRoles",
          icon: Briefcase,
          text: "Department-wise Job Roles",
        },
        {
          href: "/checkcareer",
          icon: Briefcase,
          text: "Check my Role",
        },
        {
          href: "/page?page=RoleRoadMap",
          icon: Map,
          text: "Role Roadmap",
        },
        {
          href: "/page?page=Counseling",
          icon: Map,
          text: "humanoid Counciling",
        },
      ],
    },
    {
      category: "Phase 2: Learning & Development",
      items: [
        {
          href: "/course",
          icon: GraduationCap,
          text: "Courses",
        },
        {
          href: "page?page=CreateCourse",
          icon: GraduationCap,
          text: "Explore Courses",
        },
        {
          href: "/page?page=Projects",
          icon: FolderGit2,
          text: "Projects",
        },
        {
          href: "/page?page=Certificate",
          icon: BookmarkCheck,
          text: "Certification",
        },
        {
          href: "/page?page=Resources",
          icon: BookOpenCheck,
          text: "Resourses",
        },
        {
          href: "/page?page=PublicDoubt",
          icon: BookOpenCheck,
          text: "Public Doubts",
        },
      ],
    },
    {
      category: "Phase 3: Interview Preparations",
      items: [
        {
          href: "/recall",
          icon: BookOpen,
          text: "Recall",
        },
        {
          href: "/page?page=DayRemains",
          icon: BookOpenCheck,
          text: "30 Days Preparation",
        },
        {
          href: "/page?page=ToolsCompanyUse",
          icon: BookOpenCheck,
          text: "Tools Companies Use",
        },
        {
          href: "/page?page=ResumeExtractor",
          icon: BookOpenCheck,
          text: "Analyze My Resume",
        },
      ],
    },
    {
      category: "For Companies",
      items: [
        {
          href: "/page?page=HiringTalent",
          icon: Brain,
          text: "Hire Talents",
        },
        {
          href: "/page?page=TakeAssisment",
          icon: FileSpreadsheet,
          text: "Arrange Assessment",
        },
      ],
    },
    {
      category: "For Teacher",
      items: [
        {
          href: "/page?page=TrainingTeacher",
          icon: Brain,
          text: "Teacher's Training",
        },
        {
          href: "/course",
          icon: FileSpreadsheet,
          text: "Create Course",
        },
      ],
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-white opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-100 via-transparent to-purple-100 opacity-20"></div>
        <svg
          className="absolute inset-0 w-full h-full opacity-5"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="#e0e7ff"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 relative">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              AI Powered Career Coach
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your intelligent companion for career growth, skill development, and
            professional success
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {navigationItems.map((category, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-2 p-6 border-t-4"
              style={{
                borderTopColor:
                  idx === 0 ? "#3b82f6" : idx === 1 ? "#10b981" : "#8b5cf6",
              }}
            >
              <h2 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2 border-gray-100">
                {category.category}
              </h2>
              <div className="space-y-3">
                {category.items.map((item, itemIdx) => (
                  <Link
                    key={itemIdx}
                    href={item.href}
                    className="flex items-center p-2 rounded-md hover:bg-gray-50 transition-colors duration-150 text-gray-700 hover:text-gray-900 group"
                  >
                    <item.icon className="w-5 h-5 mr-3 text-blue-600 group-hover:text-blue-700 transition-colors" />
                    <span className="group-hover:text-blue-700 transition-colors">
                      {item.text}
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-auto text-gray-400 opacity-0 group-hover:opacity-100 transition-all"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </Link>
                ))}
              </div>
            </div>
          ))}
          {/* <FocusTimer /> */}
          <PomodoroTimerToggle />

          {/* <div className="lg:col-span-3 md:col-span-2 w-full">
            <ChatBot />
          </div> */}
        </div>
      </div>
    </div>
  );
}

// "use client";
// import React from "react";
// import { ChevronRight, CheckIcon } from "lucide-react";
// import Image from "next/image";
// import FeaturesSection from "./components/Features";

// const AICareerCoachHomePage = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
//       {/* Hero Section */}
//       <header className="bg-gradient-to-r from-indigo-50 to-purple-50 py-12 sm:py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-12">
//             {/* Left Content Section */}
//             <div className="flex-1 space-y-6">
//               <div className="space-y-2">
//                 <div className="inline-block px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium tracking-wide">
//                   AI-POWERED CAREER GUIDANCE
//                 </div>
//                 <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl leading-tight">
//                   Your Personal
//                   <br />
//                   <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
//                     AI Career Coach
//                   </span>
//                 </h1>
//               </div>

//               <p className="text-xl text-gray-600 max-w-lg">
//                 Land your dream job with personalized interview preparation,
//                 resume optimization, and tailored career guidance.
//               </p>

//               <div className="flex flex-col sm:flex-row gap-4 pt-4">
//                 <button
//                   onClick={() => {
//                     window.location.href = "/page?page=DepartmentJobRoles";
//                   }}
//                   className="px-6 py-3 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium shadow-lg shadow-indigo-200 hover:shadow-indigo-300 transition-all duration-300 transform hover:-translate-y-1"
//                 >
//                   Start Your Journey
//                 </button>
//                 <button className="px-6 py-3 rounded-lg border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition-all duration-300">
//                   See How It Works
//                 </button>
//               </div>

//               {/* Social Proof */}
//               <div className="pt-6">
//                 <p className="text-sm text-gray-500 mb-2">
//                   Trusted by professionals from
//                 </p>
//                 <div className="flex space-x-6 grayscale opacity-70">
//                   {/* Replace with actual company logos */}
//                   <div className="h-8">Google</div>
//                   <div className="h-8">Microsoft</div>
//                   <div className="h-8">Amazon</div>
//                   <div className="h-8">Meta</div>
//                 </div>
//               </div>
//             </div>

//             {/* Right Image Section */}
//             <div className="flex-1 relative">
//               <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-indigo-200">
//                 <div className="aspect-w-4 aspect-h-3">
//                   <Image
//                     src="/home2.png"
//                     alt="AI interview coaching session"
//                     height={520}
//                     width={520}
//                     priority
//                   />
//                 </div>

//                 {/* Floating elements for visual interest */}
//                 <div className="absolute bottom-64 left-1 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg flex items-center space-x-3">
//                   <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white">
//                     <CheckIcon className="w-6 h-6" />
//                   </div>
//                   <div>
//                     <p className="text-xs text-gray-500">Interview Score</p>
//                     <p className="text-lg font-bold text-gray-800">92% Match</p>
//                   </div>
//                 </div>

//                 <div className="absolute bottom-6 right-6 bg-indigo-600 text-white rounded-lg px-4 py-2 text-sm font-medium">
//                   AI-Powered Feedback
//                 </div>
//               </div>

//               {/* Decorative elements */}
//               <div className="hidden md:block absolute -z-10 top-10 right-10 w-72 h-72 bg-purple-300 rounded-full blur-3xl opacity-20"></div>
//               <div className="hidden md:block absolute -z-10 -bottom-10 -left-10 w-72 h-72 bg-indigo-300 rounded-full blur-3xl opacity-20"></div>
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* Features Section */}
//       <FeaturesSection />

//       {/* CTA Section */}
//       <section className="bg-indigo-700">
//         <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
//           <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
//             <span className="block">Ready to boost your career?</span>
//             <span className="block text-indigo-200">
//               Start with CareerAI today.
//             </span>
//           </h2>
//           <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
//             <div className="inline-flex rounded-md shadow">
//               <a
//                 href="#"
//                 className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"
//               >
//                 Get started
//                 <ChevronRight className="ml-2 h-5 w-5" />
//               </a>
//             </div>
//           </div>
//         </div>
//       </section>
//       {/* <CareerRoadmap /> */}
//       <div className="flex justify-center mt-5 mb-5">
//         <Image
//           src={"/road2.png"}
//           width={1200}
//           height={400}
//           alt="Career Roadmap"
//         />
//       </div>

//       {/* Footer */}
//       <footer className="bg-gray-800">
//         <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
//           <div className="mt-8 flex justify-center space-x-6">
//             {/* Social Media Icons */}
//             <a href="#" className="text-gray-400 hover:text-gray-300">
//               <span className="sr-only">Twitter</span>
//               <svg
//                 className="h-6 w-6"
//                 fill="currentColor"
//                 viewBox="0 0 24 24"
//                 aria-hidden="true"
//               >
//                 <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
//               </svg>
//             </a>
//             <a href="#" className="text-gray-400 hover:text-gray-300">
//               <span className="sr-only">LinkedIn</span>
//               <svg
//                 className="h-6 w-6"
//                 fill="currentColor"
//                 viewBox="0 0 24 24"
//                 aria-hidden="true"
//               >
//                 <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
//               </svg>
//             </a>
//             <a href="#" className="text-gray-400 hover:text-gray-300">
//               <span className="sr-only">Facebook</span>
//               <svg
//                 className="h-6 w-6"
//                 fill="currentColor"
//                 viewBox="0 0 24 24"
//                 aria-hidden="true"
//               >
//                 <path
//                   fillRule="evenodd"
//                   d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
//                   clipRule="evenodd"
//                 />
//               </svg>
//             </a>
//           </div>
//           <p className="mt-8 text-center text-base text-gray-400">
//             &copy; 2025 CareerAI. All rights reserved.
//           </p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default AICareerCoachHomePage;
