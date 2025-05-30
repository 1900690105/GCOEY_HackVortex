// import React, { useState } from "react";
// import { Search, Laptop, Grid3X3, List } from "lucide-react";
// import {
//   Card,
//   CardHeader,
//   CardTitle,
//   CardDescription,
//   CardContent,
// } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";

// function ShowToolsSoftware({ tools, value }) {
//   const [viewMode, setViewMode] = useState("grid");
//   const [searchTerm, setSearchTerm] = useState("");

//   const filteredTools = tools.tools_and_software.filter(
//     (tool) =>
//       tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       tool.use.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       tool.description.toLowerCase().includes(searchTerm.toLowerCase())
//   );
//   return (
//     <div className=" dark:from-gray-900 dark:to-gray-800 p-4 md:p-8">
//       <div className="max-w-7xl mx-auto">
//         <div className="mb-8 space-y-6">
//           <div className="flex items-center justify-between">
//             <div>
//               <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-50 to-cyan-200 bg-clip-text text-transparent">
//                 Engineering Tools
//               </h1>
//               <p className="text-gray-600 dark:text-gray-300 mt-2">
//                 Essential software for professionals
//               </p>
//             </div>
//             <div className="flex items-center gap-2">
//               <button
//                 onClick={() => setViewMode("grid")}
//                 className={`p-2 rounded-lg ${
//                   viewMode === "grid"
//                     ? "bg-blue-500 text-white"
//                     : "bg-gray-200 text-gray-600 hover:bg-gray-300"
//                 }`}
//               >
//                 <Grid3X3 size={20} />
//               </button>
//               <button
//                 onClick={() => setViewMode("list")}
//                 className={`p-2 rounded-lg ${
//                   viewMode === "list"
//                     ? "bg-blue-500 text-white"
//                     : "bg-gray-200 text-gray-600 hover:bg-gray-300"
//                 }`}
//               >
//                 <List size={20} />
//               </button>
//             </div>
//           </div>

//           {/* Search bar */}
//           <div className="relative max-w-2xl">
//             <Search
//               className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
//               size={20}
//             />
//             <input
//               type="text"
//               placeholder="Search tools and software..."
//               className="w-full pl-12 pr-4 py-3 border-0 rounded-xl bg-white dark:bg-gray-800 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//             />
//           </div>
//         </div>

//         {/* Tools Grid/List */}
//         <div
//           className={`
//           ${
//             viewMode === "grid"
//               ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
//               : "space-y-4"
//           }`}
//         >
//           {filteredTools?.map((tool, index) => (
//             <Card
//               key={index}
//               className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm"
//             >
//               <CardHeader>
//                 <div className="flex items-start justify-between">
//                   <div>
//                     <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">
//                       {tool.name}
//                     </CardTitle>
//                     <CardDescription className="text-blue-600 dark:text-blue-400 font-medium mt-1">
//                       {tool.use}
//                     </CardDescription>
//                   </div>
//                   <div className="bg-blue-100 dark:bg-blue-900/50 p-2 rounded-lg">
//                     <Laptop
//                       size={20}
//                       className="text-blue-600 dark:text-blue-400"
//                     />
//                   </div>
//                 </div>
//               </CardHeader>
//               <CardContent>
//                 <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3 group-hover:line-clamp-none transition-all">
//                   {tool.description}
//                 </p>
//                 <div className="space-y-2">
//                   <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-200">
//                     Top Users:
//                   </h4>
//                   <div className="flex flex-wrap gap-2">
//                     {tool.top_companies_uses.map((company, idx) => (
//                       <span
//                         key={idx}
//                         className="inline-block px-3 py-1 rounded-full text-sm bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300"
//                       >
//                         {company}
//                       </span>
//                     ))}
//                   </div>
//                   <Button
//                     onClick={() => {
//                       window.location.href = `/course?course=${encodeURIComponent(
//                         tool.name
//                       )}&role=${encodeURIComponent(value)}`;
//                     }}
//                   >
//                     Get Course
//                   </Button>
//                 </div>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ShowToolsSoftware;

import React, { useState } from "react";
import { Search, Laptop, Grid3X3, List, Filter } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

function ShowToolsSoftware({ tools, value }) {
  const [viewMode, setViewMode] = useState("grid");
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");

  // Get unique categories from tools
  const categories = [
    "All",
    ...new Set(tools.tools_and_software.map((tool) => tool.use)),
  ];

  const filteredTools = tools.tools_and_software.filter((tool) => {
    const matchesSearch =
      tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tool.use.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tool.description.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      categoryFilter === "All" || tool.use === categoryFilter;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-gradient-to-b from-slate-50 to-slate-100 dark:from-gray-900 dark:to-gray-800 p-4 md:p-8 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Engineering Tools
              </h1>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                Essential software for modern professionals
              </p>
            </div>

            {/* View toggle */}
            <Tabs
              defaultValue="grid"
              className="w-fit"
              onValueChange={setViewMode}
            >
              <TabsList className="bg-slate-200 dark:bg-gray-700">
                <TabsTrigger
                  value="grid"
                  className="data-[state=active]:bg-blue-500 data-[state=active]:text-white"
                >
                  <Grid3X3 size={18} className="mr-2" />
                  Grid
                </TabsTrigger>
                <TabsTrigger
                  value="list"
                  className="data-[state=active]:bg-blue-500 data-[state=active]:text-white"
                >
                  <List size={18} className="mr-2" />
                  List
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            {/* Search bar */}
            <div className="relative flex-grow max-w-2xl">
              <Search
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="text"
                placeholder="Search tools and software..."
                className="w-full pl-12 pr-4 py-3 border-0 rounded-xl bg-white dark:bg-gray-800 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Category filter */}
            <div className="relative">
              <select
                className="appearance-none pl-10 pr-10 py-3 border-0 rounded-xl bg-white dark:bg-gray-800 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-gray-700 dark:text-gray-200"
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
              <Filter
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={18}
              />
            </div>
          </div>

          {/* Results count */}
          <div className="text-sm text-gray-500 dark:text-gray-400">
            Showing {filteredTools.length} of {tools.tools_and_software.length}{" "}
            tools
          </div>
        </div>

        {/* Tools Grid/List */}
        <div
          className={`
          ${
            viewMode === "grid"
              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              : "space-y-4"
          }`}
        >
          {filteredTools.length > 0 ? (
            filteredTools.map((tool, index) => (
              <Card
                key={index}
                className={`group hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-gray-700 bg-white dark:bg-gray-800 backdrop-blur-sm overflow-hidden ${
                  viewMode === "list" ? "flex flex-col md:flex-row" : ""
                }`}
              >
                <div className={viewMode === "list" ? "md:w-2/3" : ""}>
                  <CardHeader className="relative">
                    <Badge className="absolute top-4 right-4 bg-blue-100 hover:bg-blue-200 text-blue-700 dark:bg-blue-900 dark:text-blue-300">
                      {tool.use}
                    </Badge>
                    <div className="flex items-center gap-3">
                      <div className="bg-gradient-to-br from-blue-500 to-cyan-500 p-3 rounded-lg shadow-md">
                        <Laptop size={24} className="text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">
                          {tool.name}
                        </CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3 group-hover:line-clamp-none transition-all">
                      {tool.description}
                    </p>
                  </CardContent>
                </div>
                <div className={viewMode === "list" ? "md:w-1/3" : ""}>
                  <CardFooter className="flex flex-col items-start pt-4 pb-6 border-t border-slate-100 dark:border-gray-700">
                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
                      Top Users:
                    </h4>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {tool.top_companies_uses.map((company, idx) => (
                        <span
                          key={idx}
                          className="inline-block px-3 py-1 rounded-full text-xs bg-slate-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300"
                        >
                          {company}
                        </span>
                      ))}
                    </div>
                    <Button
                      className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white"
                      onClick={() => {
                        window.location.href = `/course?course=${encodeURIComponent(
                          tool.name
                        )}&role=${encodeURIComponent(value)}`;
                      }}
                    >
                      Get Course
                    </Button>
                  </CardFooter>
                </div>
              </Card>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <div className="bg-slate-100 dark:bg-gray-700 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Search size={24} className="text-gray-400" />
              </div>
              <h3 className="text-xl font-medium text-gray-700 dark:text-gray-200">
                No tools found
              </h3>
              <p className="text-gray-500 dark:text-gray-400 mt-2">
                Try adjusting your search or filter criteria
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ShowToolsSoftware;
