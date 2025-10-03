"use client";

import { useState } from "react";
import { Search, Upload } from "lucide-react";

// Mock data for internships (unchanged)
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
    resume: null, // New field for resume
  });

  const [internships] = useState(mockInternships);

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "resume") {
      setFormData((prev) => ({ ...prev, resume: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    if (formData.resume) {
      console.log("Uploaded Resume:", formData.resume.name);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6 md:p-12">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Personal & Academic Details
        </h2>

        <form onSubmit={handleSubmit} className="space-y-8">
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

          {/* Resume Upload */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Upload Resume</h3>
            <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <Upload className="w-8 h-8 mb-3 text-gray-500" />
                <p className="text-sm text-gray-500">
                  <span className="font-semibold">Click to upload</span> or drag & drop
                </p>
                <p className="text-xs text-gray-400">PDF, DOC, DOCX (Max 5MB)</p>
              </div>
              <input
                type="file"
                name="resume"
                accept=".pdf,.doc,.docx"
                className="hidden"
                onChange={handleInputChange}
              />
            </label>
            {formData.resume && (
              <p className="mt-2 text-sm text-green-600">
                ✅ Uploaded: {formData.resume.name}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg flex justify-center items-center gap-2 font-semibold"
          >
            <Search className="w-5 h-5" /> Find My Internship
          </button>
        </form>
      </div>
    </div>
  );
}