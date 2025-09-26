"use client";

import { useState } from "react";
import { Search, Briefcase, MapPin, Calendar, Users } from "lucide-react";

// Mock data for internships
const mockInternships = [
  {
    id: 1,
    title: "Software Development Intern",
    company: "Tech Innovations Ltd.",
    location: "New Delhi",
    duration: "3 months",
    stipend: "₹15,000/month",
    posted: "2 days ago",
    description: "Work on full-stack development projects using React and Node.js",
    skills: ["JavaScript", "React", "Node.js"],
  },
  {
    id: 2,
    title: "Data Analytics Intern",
    company: "Data Insights Pvt. Ltd.",
    location: "Mumbai",
    duration: "6 months",
    stipend: "₹18,000/month",
    posted: "1 week ago",
    description: "Analyze business data and create visualization reports",
    skills: ["Python", "SQL", "Excel"],
  },
  {
    id: 3,
    title: "Marketing Intern",
    company: "Brand Solutions Inc.",
    location: "Bangalore",
    duration: "4 months",
    stipend: "₹12,000/month",
    posted: "3 days ago",
    description: "Assist in digital marketing campaigns and social media management",
    skills: ["Social Media", "Content Writing", "SEO"],
  },
  {
    id: 4,
    title: "Finance Intern",
    company: "Financial Services Group",
    location: "Hyderabad",
    duration: "2 months",
    stipend: "₹10,000/month",
    posted: "5 days ago",
    description: "Support financial analysis and reporting processes",
    skills: ["Excel", "Financial Modeling", "Accounting"],
  },
];

export default function InternshipMatchmaking() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    college: "",
    degree: "",
    year: "",
    skills: "",
    preferences: "",
  });

  const [internships] = useState(mockInternships);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-12">
      <main className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
        {/* Form */}
        <div className="w-full lg:w-1/3">
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Personal & Academic Details
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Details */}
              <div>
                <h3 className="text-lg font-semibold mb-3">Personal Details</h3>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Full Name"
                  className="w-full p-3 border rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email"
                  className="w-full p-3 border rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Phone"
                  className="w-full p-3 border rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              {/* Academic Details */}
              <div>
                <h3 className="text-lg font-semibold mb-3">Academic Details</h3>
                <input
                  type="text"
                  name="college"
                  value={formData.college}
                  onChange={handleInputChange}
                  placeholder="College/University"
                  className="w-full p-3 border rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <select
                  name="degree"
                  value={formData.degree}
                  onChange={handleInputChange}
                  className="w-full p-3 border rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="">Select Degree</option>
                  <option value="btech">B.Tech</option>
                  <option value="bca">BCA</option>
                  <option value="bba">BBA</option>
                  <option value="bsc">B.Sc</option>
                  <option value="ba">BA</option>
                  <option value="mtech">M.Tech</option>
                  <option value="mca">MCA</option>
                  <option value="mba">MBA</option>
                </select>
                <select
                  name="year"
                  value={formData.year}
                  onChange={handleInputChange}
                  className="w-full p-3 border rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="">Select Year</option>
                  <option value="1">1st Year</option>
                  <option value="2">2nd Year</option>
                  <option value="3">3rd Year</option>
                  <option value="4">4th Year</option>
                </select>
              </div>

              {/* Skills & Preferences */}
              <div>
                <h3 className="text-lg font-semibold mb-3">Skills & Preferences</h3>
                <textarea
                  name="skills"
                  value={formData.skills}
                  onChange={handleInputChange}
                  placeholder="Skills (comma separated)"
                  rows={3}
                  className="w-full p-3 border rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <textarea
                  name="preferences"
                  value={formData.preferences}
                  onChange={handleInputChange}
                  placeholder="Location Preferences"
                  rows={2}
                  className="w-full p-3 border rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg flex justify-center items-center gap-2 font-semibold"
              >
                <Search className="w-5 h-5" /> Find My Internship
              </button>
            </form>
          </div>
        </div>

        {/* Internship Listings */}
        <div className="w-full lg:w-2/3 space-y-6">
          <h2 className="text-2xl font-bold text-gray-800">Recommended Internships</h2>
          <p className="text-gray-600 mb-4">Based on your profile and preferences</p>

          {internships.map((internship) => (
            <div key={internship.id} className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-shadow">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-shrink-0 flex items-center justify-center w-16 h-16 rounded-xl bg-gray-200 border-2 border-dashed">
                  <Briefcase className="text-gray-500" />
                </div>
                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row md:justify-between mb-2">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">{internship.title}</h3>
                      <p className="text-gray-600">{internship.company}</p>
                    </div>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 mt-2 md:mt-0">
                      {internship.stipend}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-600 mb-3">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" /> {internship.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" /> {internship.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" /> Posted {internship.posted}
                    </div>
                  </div>

                  <p className="text-gray-700 mb-3">{internship.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {internship.skills.map((skill, index) => (
                      <span key={index} className="px-2 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                        {skill}
                      </span>
                    ))}
                  </div>

                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold">
                    View & Apply
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
