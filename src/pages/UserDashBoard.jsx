"use client";

import { useState } from "react";
import { Home, User, Search, Upload } from "lucide-react";

export default function UserDashboard() {
  const [activeSection, setActiveSection] = useState("dashboard");
  const [formData, setFormData] = useState({ name: "", gender: "", skills: "" });
  const [resumeFile, setResumeFile] = useState(null);

  const handleInputChange = (field, value) => setFormData(prev => ({ ...prev, [field]: value }));
  const handleFileChange = (e) => { if(e.target.files && e.target.files[0]) setResumeFile(e.target.files[0]); };

  const handleResumeUpload = async () => {
    if (!resumeFile) return alert("Please select a file first!");
    try {
      const formData = new FormData();
      formData.append("resume", resumeFile);
      const response = await fetch("/api/upload-resume", { method: "POST", body: formData });
      if (response.ok) {
        alert("Resume uploaded successfully!");
        setResumeFile(null);
      } else {
        const data = await response.json();
        alert(`Upload failed: ${data.message || "Unknown error"}`);
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong during upload.");
    }
  };

  const sidebarItems = [
    { id: "dashboard", label: "Dashboard", icon: Home },
    { id: "profile", label: "Profile", icon: User },
    { id: "internships", label: "Check Internships", icon: Search },
    { id: "resume", label: "Upload Resume", icon: Upload },
  ];

  const mockInternships = [
    { title: "Frontend Developer Intern", company: "Tech Corp", location: "Remote" },
    { title: "Data Analyst Intern", company: "DataWorks", location: "Bangalore" },
    { title: "Marketing Intern", company: "Brandly", location: "Mumbai" },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50 pt-16">
      {/* Sidebar */}
      <div className="w-64 bg-gray-200  p-6 flex flex-col">
        <h2 className="text-2xl font-bold mb-8 ">User DashBoard</h2>
        <ul className="space-y-2 flex-1">
          {sidebarItems.map(item => {
            const Icon = item.icon;
            return (
              <li key={item.id}>
                <button
                  onClick={() => setActiveSection(item.id)}
                  className={`flex items-center gap-3 w-full px-4 py-2 rounded-lg transition ${
                    activeSection === item.id
                      ? "bg-blue-500 text-white"
                      : "text-gray-900 hover:bg-gray-700 hover:text-white"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
        <div className="mt-auto text-gray-400 text-sm">Dashboard</div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        {/* Dashboard */}
        {activeSection === "dashboard" && (
          <div>
            <h1 className="text-3xl font-bold mb-4">Welcome Back!</h1>
            <p className="text-gray-600 mb-6">Here’s a quick overview of your profile and activities.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                <h3 className="font-semibold text-gray-700 mb-2">Profile Completion</h3>
                <p className="text-xl font-bold text-blue-600 mb-3">75%</p>
                <div className="w-full bg-gray-200 h-2 rounded-full">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: "75%" }}></div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                <h3 className="font-semibold text-gray-700 mb-2">Available Internships</h3>
                <p className="text-xl font-bold text-green-600">{mockInternships.length}</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                <h3 className="font-semibold text-gray-700 mb-2">Resume Status</h3>
                <p className="text-xl font-bold text-yellow-600">{resumeFile ? "Selected" : "Not Uploaded"}</p>
              </div>
            </div>
          </div>
        )}

        {/* Profile */}
        {activeSection === "profile" && (
          <div>
            <h1 className="text-2xl font-bold mb-4">Profile Settings</h1>
            <div className="bg-white p-6 rounded-xl shadow space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Full Name</label>
                <input
                  value={formData.name}
                  onChange={e => handleInputChange("name", e.target.value)}
                  placeholder="Enter your full name"
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Gender</label>
                <div className="flex gap-2 mt-1">
                  {["Male", "Female", "Other"].map(g => (
                    <button
                      key={g}
                      onClick={() => handleInputChange("gender", g)}
                      className={`flex-1 py-2 rounded text-sm ${
                        formData.gender === g
                          ? "bg-blue-500 text-white"
                          : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                      }`}
                    >
                      {g}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Skills</label>
                <textarea
                  value={formData.skills}
                  onChange={e => handleInputChange("skills", e.target.value)}
                  placeholder="Comma separated skills"
                  rows={3}
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="flex justify-end">
                <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Internships */}
        {activeSection === "internships" && (
          <div>
            <h1 className="text-2xl font-bold mb-4">Available Internships</h1>
            <div className="grid gap-4">
              {mockInternships.map((internship, idx) => (
                <div
                  key={idx}
                  className="p-4 bg-white rounded-xl shadow hover:shadow-lg flex justify-between items-center transition"
                >
                  <div>
                    <p className="font-semibold">{internship.title}</p>
                    <p className="text-gray-500 text-sm">{internship.company} - {internship.location}</p>
                  </div>
                  <button className="px-3 py-1 bg-green-600 text-white rounded-md hover:bg-green-700 transition">
                    Apply
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Resume */}
        {activeSection === "resume" && (
          <div>
            <h1 className="text-2xl font-bold mb-4">Upload Resume</h1>
            <div className="bg-white p-6 rounded-xl shadow space-y-4">
              <input type="file" accept=".pdf,.doc,.docx" onChange={handleFileChange} className="block w-full" />
              {resumeFile && <p>Selected file: <strong>{resumeFile.name}</strong></p>}
              <button
                onClick={handleResumeUpload}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
              >
                Upload
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
