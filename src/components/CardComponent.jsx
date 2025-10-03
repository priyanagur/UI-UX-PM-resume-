"use client";
import { useNavigate } from "react-router-dom";



import React, { useEffect } from "react";
import { Cpu, Globe, BarChart2, Scale } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css"; // AOS styles




// Mock Data with Lucide Icons
const cards = [
  {
    icon: Cpu,
    title: "AI Powered Matching",
    content:
      "Advanced algorithm ensures perfect skill-based matches between students and internships.",
    color: "from-purple-500 to-indigo-500",
    animation: "fade-up",
  },
  {
    icon: Scale,
    title: "Fair & Transparent",
    content:
      "Explainable AI provides clear reasoning for every allocation decision.",
    color: "from-green-400 to-teal-500",
    animation: "fade-up",
  },
  {
    icon: Globe,
    title: "Pan-India Coverage",
    content:
      "Opportunities across all states with focus on rural and underrepresented areas.",
    color: "from-yellow-400 to-orange-500",
    animation: "fade-up",
  },
  {
    icon: BarChart2,
    title: "Real-time Analytics",
    content:
      "Live tracking of applications, allocations, and diversity metrics.",
    color: "from-pink-400 to-red-500",
    animation: "fade-up",
  },
];

// Card Component
function Card({ icon: Icon, title, content, color }) {
  return (
    <div data-aos="fade-up" className=" bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-gray-200 hover:-translate-y-2">
      <div className="flex justify-center">
        <div
        className={`w-14 h-14 flex items-center justify-center rounded-full mb-5 bg-gradient-to-br ${color} text-white transition-transform duration-300 hover:scale-110`}
      >
        <Icon size={28} />
      </div>
      </div>
      <h3 className="text-xl font-bold mb-3 text-gray-900 text-center">{title}</h3>
      <p className="text-gray-700 text-sm leading-relaxed text-center">{content}</p>
    </div>
  );
}

// Main Component
export default function CardComponent() {

    const navigate = useNavigate(); // ✅ must be inside component

  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration (ms)
      once: true, // run only once
      offset: 100, // offset before triggering
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-200 text-gray-900 p-6 md:p-12">
      <div className="max-w-7xl mx-auto">
        {/* Banner Section */}
        <div
          className="mb-16"
          data-aos="fade-down"
        >
          <div className="relative py-20 rounded-xl bg-gradient-to-r from-gray-700 via-gray-900 to-gray-900 text-white px-8 md:px-16">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-center leading-tight drop-shadow-md tracking-tight">
              Empowering{" "}
              <span className="text-orange-400">India's</span> Youth Through
              Skills-Based Internships
            </h1>

            <p className="text-lg md:text-xl text-center max-w-3xl mx-auto text-gray-300">
              AI-powered allocation system ensuring fair, transparent, and
              merit-based internship opportunities for every Indian student.
            </p>
           

          </div>
        </div>



         <div className="flex gap-6 justify-center mt-4">
  <button
    data-aos="fade-right"
    className="px-6 py-3 bg-orange-400 text-white font-semibold rounded-lg shadow-md hover:outline-2 focus:outline-none focus:ring-2 focus:ring-white transition-all"
        onClick={() => navigate("/user-match")} // ✅ React Router navigation
  >
    Student Portal
  </button>

  <button
    data-aos="fade-left"
    className="px-6 py-3 bg-gray-200 outline outline-orange-600 font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
        onClick={() => navigate("/organization-dash")} // ✅ React Router navigation
  >
    Organization Portal
  </button>
</div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-10">
          {cards.map((card, index) => (
            <Card
              key={index}
              icon={card.icon}
              title={card.title}
              content={card.content}
              color={card.color}
              animation={card.animation}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
