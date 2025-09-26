"use client";

import React from "react";
import { Book, BarChart, Layers, Settings } from "lucide-react";

// Mock Data
const cards = [
  {
    icon: Book,
    title: "Knowledge Hub",
    description: "Access curated resources",
    content: "Stay ahead with structured learning materials and guides.",
  },
  {
    icon: BarChart,
    title: "Analytics",
    description: "Data-driven insights",
    content: "Track performance metrics and make informed decisions.",
  },
  {
    icon: Layers,
    title: "Scalable Design",
    description: "Modular & flexible",
    content: "Easily adapt layouts and features as your project grows.",
  },
  {
    icon: Settings,
    title: "Customization",
    description: "Tailor to your needs",
    content: "Personalize workflows and interfaces for maximum productivity.",
  },
];

// Card Component
function Card({ Icon, title, description, content }) {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 border border-gray-200 hover:-translate-y-1">
      <div className="w-14 h-14 flex items-center justify-center rounded-lg bg-blue-600 text-white mb-5">
        <Icon className="w-7 h-7" />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
      <p className="text-sm text-blue-600 mb-3">{description}</p>
      <p className="text-gray-700 text-sm leading-relaxed">{content}</p>
    </div>
  );
}

// Main Component
export default function CardComponent() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 p-6 md:p-12">
      <div className="max-w-7xl mx-auto">
        {/* Heading Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-blue-700">
            Government Dashboard
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            Explore key features designed to enhance transparency, efficiency, and decision-making.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, index) => (
            <Card
              key={index}
              Icon={card.icon}
              title={card.title}
              description={card.description}
              content={card.content}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
