import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

function PublicDoubt() {
  const [selectedDoubt = null, setSelectedDoubt] = useState(null);
  const [solution, setSolution] = useState({
    name: "",
    solutionText: "",
  });

  const doubts = [
    {
      name: "Rohan Mehta",
      doubt: "Circuit Analysis in Electrical Engineering",
      description:
        "I'm struggling to apply Kirchhoff's laws to solve complex circuits. Can someone explain an easy approach?",
      post_date: "2025-03-25",
    },
    {
      name: "Sneha Rajput",
      doubt: "Strength of Materials",
      description:
        "What is the difference between stress and strain, and how are they related in engineering applications?",
      post_date: "2025-03-24",
    },
    {
      name: "Aryan Gupta",
      doubt: "Thermodynamics - Laws and Applications",
      description:
        "Can someone explain the significance of the second law of thermodynamics in real-world engineering problems?",
      post_date: "2025-03-23",
    },
    {
      name: "Priya Sharma",
      doubt: "Data Structures and Algorithms",
      description:
        "Which data structure is best for fast searching, and why? Hash tables or binary search trees?",
      post_date: "2025-03-22",
    },
    {
      name: "Kunal Desai",
      doubt: "Fluid Mechanics",
      description:
        "How do we determine whether a flow is laminar or turbulent in practical engineering applications?",
      post_date: "2025-03-21",
    },
    {
      name: "Ananya Verma",
      doubt: "Control Systems",
      description:
        "What is the difference between open-loop and closed-loop control systems, and where are they used?",
      post_date: "2025-03-20",
    },
    {
      name: "Vikas Singh",
      doubt: "Database Management Systems",
      description:
        "Can someone explain the differences between SQL and NoSQL databases and when to use each?",
      post_date: "2025-03-19",
    },
    {
      name: "Neha Kapoor",
      doubt: "Computer Networks",
      description:
        "How does TCP differ from UDP, and which one should be used for real-time applications?",
      post_date: "2025-03-18",
    },
    {
      name: "Aditya Nair",
      doubt: "Machine Learning in Engineering",
      description:
        "What are the key differences between supervised and unsupervised learning in machine learning applications?",
      post_date: "2025-03-17",
    },
    {
      name: "Pooja Iyer",
      doubt: "Embedded Systems",
      description:
        "What are the major differences between microcontrollers and microprocessors in embedded system design?",
      post_date: "2025-03-16",
    },
  ];

  const handleGiveSolution = (doubt) => {
    setSelectedDoubt(doubt);
  };

  const handleCloseDialog = () => {
    setSelectedDoubt(null);
    setSolution({ name: "", solutionText: "" });
  };

  const handleSubmitSolution = () => {
    // Here you would typically send the solution to a backend
    console.log("Solution submitted:", {
      doubt: selectedDoubt,
      solution,
    });
    handleCloseDialog();
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-6">Public Doubts</h1>
      <div className="space-y-4">
        {doubts?.map((item, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-4 border">
            <h2 className="text-lg font-semibold">{item.doubt}</h2>
            <p className="mt-2 text-gray-800">{item.description}</p>
            <p className="mt-2 text-gray-600 text-sm">Asked by: {item.name}</p>

            <p className="mt-2 text-sm text-gray-500">
              Posted on: {item.post_date}
            </p>
            <div className="mt-4 flex justify-end">
              <Button onClick={() => handleGiveSolution(item)}>
                Give Solution
              </Button>
            </div>
          </div>
        ))}
      </div>

      {selectedDoubt && (
        <Dialog open={!!selectedDoubt} onOpenChange={handleCloseDialog}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>
                Provide Solution for: {selectedDoubt.doubt}
              </DialogTitle>
              <DialogDescription>
                Help {selectedDoubt.name} with their engineering doubt
              </DialogDescription>
            </DialogHeader>

            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Your Name
                </Label>
                <Input
                  id="name"
                  value={solution.name}
                  onChange={(e) =>
                    setSolution((prev) => ({ ...prev, name: e.target.value }))
                  }
                  className="col-span-3"
                  placeholder="Enter your name"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="solution" className="text-right">
                  Solution
                </Label>
                <Textarea
                  id="solution"
                  value={solution.solutionText}
                  onChange={(e) =>
                    setSolution((prev) => ({
                      ...prev,
                      solutionText: e.target.value,
                    }))
                  }
                  className="col-span-3"
                  placeholder="Provide a detailed solution to the doubt"
                  rows={5}
                />
              </div>
            </div>

            <DialogFooter>
              <Button type="submit" onClick={handleSubmitSolution}>
                Submit Solution
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}

export default PublicDoubt;
