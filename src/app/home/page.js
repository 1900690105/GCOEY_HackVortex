// pages/index.js
"use client";
import { useState } from "react";
import Head from "next/head";
import {
  Search,
  BookOpen,
  Briefcase,
  Award,
  ChevronRight,
  Users,
  Clock,
  TrendingUp,
} from "lucide-react";
import CareerResources from "./components/Resourse";
import FeatureSection from "./components/Feature";
import Hero from "./components/Hero";
import HowWork from "./components/HowWork";

export default function Home() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter signup logic here
    alert(`Thank you for subscribing with ${email}!`);
    setEmail("");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>CareerLaunch | Your Path to Professional Success</title>
        <meta
          name="description"
          content="Helping students navigate from education to employment with personalized career paths"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <Hero />

      {/* How It Works Section */}
      <HowWork />

      {/* Career Paths Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">
                Popular Career Paths
              </h2>
              <p className="mt-2 text-xl text-gray-600">
                Explore pathways tailored to various fields and interests
              </p>
            </div>
            <a
              href="#"
              className="mt-4 md:mt-0 inline-flex items-center text-indigo-600 font-medium hover:text-indigo-700"
            >
              View all paths <ChevronRight className="ml-1 h-5 w-5" />
            </a>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Software Development",
                description:
                  "From coding fundamentals to full-stack development",
                icon: <TrendingUp className="h-6 w-6 text-indigo-600" />,
                jobs: 1253,
                duration: "3-6 months",
              },
              {
                title: "Digital Marketing",
                description:
                  "Master SEO, social media, and campaign management",
                icon: <TrendingUp className="h-6 w-6 text-indigo-600" />,
                jobs: 876,
                duration: "2-4 months",
              },
              {
                title: "Data Science",
                description:
                  "Learn analytics, machine learning, and visualization",
                icon: <TrendingUp className="h-6 w-6 text-indigo-600" />,
                jobs: 1089,
                duration: "4-8 months",
              },
            ].map((path, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-indigo-100 rounded-full p-2">
                    {path.icon}
                  </div>
                  <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                    In Demand
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {path.title}
                </h3>
                <p className="text-gray-600 mb-4">{path.description}</p>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <Briefcase className="h-4 w-4 mr-1" />
                    <span>{path.jobs} open positions</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{path.duration}</span>
                  </div>
                </div>
                <a
                  href="#"
                  className="block text-center w-full bg-indigo-50 text-indigo-600 font-medium py-2 rounded hover:bg-indigo-100 transition"
                >
                  Explore Path
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Success Stories */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Student Success Stories
            </h2>
            <p className="mt-2 text-xl text-gray-600">
              See how students like you achieved their career goals
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: "Janavi Khawale",
                role: "1st Year Student at GCOEY",
                image: "/pro1.jpg",
                quote:
                  "CareerLaunch made learning enjoyable and tailored to my pace. It boosted my confidence and helped me understand where I truly excel.",
              },
              {
                name: "Ankita Warkhade",
                role: "2nd Year Student at GCOEY",
                image: "/pro2.jpg",
                quote:
                  "I used to feel lost about my future, but CareerLaunch gave me clarity and direction. Now I’m motivated to learn and grow every day.",
              },
            ].map((story, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-start">
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <p className="text-gray-600 mb-4">"{story.quote}"</p>
                    <div>
                      <h4 className="font-bold text-gray-900">{story.name}</h4>
                      <p className="text-gray-500">{story.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-indigo-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="md:flex md:items-center md:justify-between">
            <div className="md:w-3/5">
              <h2 className="text-3xl font-bold text-white">
                Ready to Start Your Career Journey?
              </h2>
              <p className="mt-3 text-xl text-indigo-100">
                Join thousands of students who've successfully launched their
                careers with our platform.
              </p>
            </div>
            <div className="mt-8 md:mt-0">
              <a
                href="#"
                className="block text-center bg-white text-indigo-600 font-bold px-6 py-3 rounded-md hover:bg-gray-100 transition"
              >
                Create Free Account
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      {/* <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-indigo-600 mb-2">10,000+</p>
              <p className="text-gray-600">Students Helped</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-indigo-600 mb-2">500+</p>
              <p className="text-gray-600">Employer Partners</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-indigo-600 mb-2">85%</p>
              <p className="text-gray-600">Job Placement Rate</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-indigo-600 mb-2">30+</p>
              <p className="text-gray-600">Career Pathways</p>
            </div>
          </div>
        </div>
      </div> */}

      {/* Resources Preview */}
      <CareerResources />

      {/* feature  */}
      <FeatureSection />

      {/* Newsletter */}
      <div className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Stay Updated
          </h2>
          <p className="text-gray-600 mb-8">
            Subscribe to our newsletter for career tips, job alerts, and
            industry insights
          </p>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="px-4 py-3 border border-gray-300 rounded-md flex-grow max-w-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
              type="submit"
              className="bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition font-medium"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
