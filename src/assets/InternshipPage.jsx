"use client";

import { useState, useEffect, useMemo } from "react";

// Mock data (same as before)
const mockInternships= [
  {
    id: "1",
    title: "Product Management Intern",
    organization: "TechFlow Solutions",
    location: "Bangalore, Karnataka",
    duration: "3 months",
    status: "active",
    datePosted: "2024-01-15",
    description: "Join our product team to help shape the future of our platform. Work directly with senior PMs on feature development and user research.",
    sector: "IT",
    skills: ["Product Strategy", "User Research", "Agile Methodology", "Data Analysis"]
  },
  {
    id: "2",
    title: "Data Analysis Intern",
    organization: "FinServe Analytics",
    location: "Mumbai, Maharashtra",
    duration: "6 months",
    status: "active",
    datePosted: "2024-01-10",
    description: "Support our data science team in analyzing large datasets to drive business insights and product improvements.",
    sector: "Banking & Financial Services",
    skills: ["Python", "SQL", "Statistical Analysis", "Data Visualization"]
  },
  {
    id: "3",
    title: "UX Research Intern",
    organization: "DesignCraft Studio",
    location: "Hyderabad, Telangana",
    duration: "4 months",
    status: "closed",
    datePosted: "2023-12-20",
    description: "Conduct user research to inform product design decisions. Collaborate with cross-functional teams to improve user experience.",
    sector: "IT",
    skills: ["User Research", "Prototyping", "Figma", "Usability Testing"]
  },
  {
    id: "4",
    title: "Software Engineering Intern",
    organization: "InnovateTech Pvt Ltd",
    location: "Pune, Maharashtra",
    duration: "3 months",
    status: "active",
    datePosted: "2024-01-05",
    description: "Work on full-stack development projects using modern technologies. Gain hands-on experience in agile development processes.",
    sector: "IT",
    skills: ["JavaScript", "React", "Node.js", "MongoDB"]
  },
  {
    id: "5",
    title: "Hospitality Operations Intern",
    organization: "Grand Hotels & Resorts",
    location: "Goa",
    duration: "6 months",
    status: "closed",
    datePosted: "2023-11-30",
    description: "Support hotel operations and guest services. Gain experience in hospitality management and customer relations.",
    sector: "Hospitality",
    skills: ["Customer Service", "Operations Management", "Event Planning"]
  },
  {
    id: "6",
    title: "Manufacturing Process Intern",
    organization: "Precision Manufacturing Ltd",
    location: "Chennai, Tamil Nadu",
    duration: "4 months",
    status: "active",
    datePosted: "2024-01-12",
    description: "Support manufacturing processes and quality control. Work with engineering teams to optimize production workflows.",
    sector: "Manufacturing",
    skills: ["Process Optimization", "Quality Control", "Lean Manufacturing"]
  },
  {
    id: "7",
    title: "Financial Analyst Intern",
    organization: "Capital Growth Investments",
    location: "New Delhi",
    duration: "6 months",
    status: "active",
    datePosted: "2024-01-08",
    description: "Assist in financial modeling and market analysis. Support investment decision-making processes.",
    sector: "Banking & Financial Services",
    skills: ["Financial Modeling", "Excel", "Market Analysis", "Risk Assessment"]
  },
  {
    id: "8",
    title: "Clinical Research Intern",
    organization: "MediCare Hospitals",
    location: "Kolkata, West Bengal",
    duration: "5 months",
    status: "active",
    datePosted: "2024-01-03",
    description: "Support clinical trials and research initiatives. Work with medical professionals on data collection and analysis.",
    sector: "Healthcare",
    skills: ["Clinical Research", "Data Management", "Medical Terminology"]
  },
  {
    id: "9",
    title: "Process Engineering Intern",
    organization: "Energy Solutions India",
    location: "Ahmedabad, Gujarat",
    duration: "4 months",
    status: "closed",
    datePosted: "2023-12-15",
    description: "Optimize oil refining processes and improve operational efficiency. Work with engineering teams on technical projects.",
    sector: "Oil & Gas",
    skills: ["Process Engineering", "Chemical Engineering", "Simulation Software"]
  },
  {
    id: "10",
    title: "Hospitality Marketing Intern",
    organization: "Luxury Resorts Group",
    location: "Jaipur, Rajasthan",
    duration: "3 months",
    status: "active",
    datePosted: "2024-01-14",
    description: "Develop and execute marketing campaigns for luxury resorts. Analyze customer feedback to improve guest experiences.",
    sector: "Hospitality",
    skills: ["Digital Marketing", "Social Media", "Content Creation", "Analytics"]
  },
  {
    id: "11",
    title: "IT Support Intern",
    organization: "DigitalEdge Services",
    location: "Noida, Uttar Pradesh",
    duration: "3 months",
    status: "active",
    datePosted: "2024-01-18",
    description: "Provide technical support for enterprise clients. Troubleshoot hardware and software issues in a corporate environment.",
    sector: "IT",
    skills: ["Technical Support", "Networking", "Windows/Linux", "Troubleshooting"]
  },
  {
    id: "12",
    title: "Healthcare Administration Intern",
    organization: "Apollo Health Services",
    location: "Chandigarh",
    duration: "4 months",
    status: "active",
    datePosted: "2024-01-16",
    description: "Support hospital administration functions. Assist with patient records management and regulatory compliance.",
    sector: "Healthcare",
    skills: ["Healthcare Administration", "Patient Records", "Regulatory Compliance"]
  }
];

const sectors = [
  "All Sectors",
  "IT",
  "Banking & Financial Services",
  "Healthcare",
  "Oil & Gas",
  "Manufacturing",
  "Hospitality"
];

const locations = [
  "All Locations",
  "Bangalore, Karnataka",
  "Mumbai, Maharashtra",
  "Hyderabad, Telangana",
  "Pune, Maharashtra",
  "Chennai, Tamil Nadu",
  "New Delhi",
  "Kolkata, West Bengal",
  "Ahmedabad, Gujarat",
  "Goa",
  "Jaipur, Rajasthan",
  "Noida, Uttar Pradesh",
  "Chandigarh"
];



// Extract all unique skills
const allSkills = Array.from(new Set(mockInternships.flatMap((i) => i.skills)));

export default function InternshipPage() {
  const [internships, setInternships] = useState([]);
  const [filterStatus, setFilterStatus] = useState("all");
  const [filterSector, setFilterSector] = useState("All Sectors");
  const [filterLocation, setFilterLocation] = useState("All Locations");
  const [searchSkills, setSearchSkills] = useState("");
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [sortOrder, setSortOrder] = useState("newest");

  useEffect(() => {
    setTimeout(() => {
      setInternships(mockInternships);
    }, 500);
  }, []);

  const filteredSkills = useMemo(() => {
    if (!searchSkills) return allSkills;
    return allSkills.filter((skill) =>
      skill.toLowerCase().includes(searchSkills.toLowerCase())
    );
  }, [searchSkills]);

  const toggleSkill = (skill) => {
    setSelectedSkills((prev) =>
      prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill]
    );
  };

  const filteredInternships = internships.filter((i) => {
    const statusMatch = filterStatus === "all" || i.status === filterStatus;
    const sectorMatch = filterSector === "All Sectors" || i.sector === filterSector;
    const locationMatch =
      filterLocation === "All Locations" || i.location === filterLocation;
    const skillMatch =
      selectedSkills.length === 0 || selectedSkills.some((s) => i.skills.includes(s));
    return statusMatch && sectorMatch && locationMatch && skillMatch;
  });

  const sortedInternships = [...filteredInternships].sort((a, b) => {
    const dateA = new Date(a.datePosted).getTime();
    const dateB = new Date(b.datePosted).getTime();
    return sortOrder === "newest" ? dateB - dateA : dateA - dateB;
  });

  const clearFilters = () => {
    setFilterStatus("all");
    setFilterSector("All Sectors");
    setFilterLocation("All Locations");
    setSelectedSkills([]);
    setSearchSkills("");
    setSortOrder("newest");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            PM Internship Scheme
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Discover opportunities across various sectors in India
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 p-6 bg-white rounded-xl shadow-md">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {/* Status */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Status
              </label>
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-3 py-2"
              >
                <option value="all">All Internships</option>
                <option value="active">Active</option>
                <option value="closed">Closed</option>
              </select>
            </div>

            {/* Sector */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Sector
              </label>
              <select
                value={filterSector}
                onChange={(e) => setFilterSector(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-3 py-2"
              >
                {sectors.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>

            {/* Location */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Location
              </label>
              <select
                value={filterLocation}
                onChange={(e) => setFilterLocation(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-3 py-2"
              >
                {locations.map((l) => (
                  <option key={l} value={l}>
                    {l}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Sort By
              </label>
              <select
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-3 py-2"
              >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
              </select>
            </div>
          </div>

          {/* Skills */}
          <div className="mt-6">
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Skills
            </label>
            <input
              type="text"
              placeholder="Search skills..."
              value={searchSkills}
              onChange={(e) => setSearchSkills(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 mb-2"
            />
            {searchSkills && (
              <div className="max-h-40 overflow-y-auto border rounded-md p-2 bg-white shadow-inner">
                {filteredSkills.length > 0 ? (
                  filteredSkills.map((skill) => (
                    <div
                      key={skill}
                      className={`flex items-center justify-between cursor-pointer px-2 py-1 text-sm rounded hover:bg-gray-100 ${
                        selectedSkills.includes(skill) ? "bg-blue-100" : ""
                      }`}
                      onClick={() => toggleSkill(skill)}
                    >
                      <span>{skill}</span>
                      {selectedSkills.includes(skill) && <span>✔</span>}
                    </div>
                  ))
                ) : (
                  <div className="text-gray-500 text-sm px-2 py-1">No skills found</div>
                )}
              </div>
            )}
            {selectedSkills.length > 0 && (
              <div className="mt-2 flex flex-wrap gap-2">
                {selectedSkills.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm"
                  >
                    {skill}
                    <button
                      className="ml-1 font-bold"
                      onClick={() => toggleSkill(skill)}
                    >
                      ×
                    </button>
                  </div>
                ))}
                <button
                  className="ml-2 text-sm text-blue-600 underline"
                  onClick={() => setSelectedSkills([])}
                >
                  Clear All
                </button>
              </div>
            )}

            <div className="mt-4 text-right">
              <button
                className="px-3 py-1 border rounded-md text-sm"
                onClick={clearFilters}
              >
                Clear All Filters
              </button>
            </div>
          </div>
        </div>

        {/* Internships */}
        {sortedInternships.length === 0 ? (
          <div className="text-center py-12">
            <div className="mx-auto mb-4 h-20 w-20 flex items-center justify-center rounded-full bg-gray-200">
              🔍
            </div>
            <h3 className="text-xl font-semibold">No internships found</h3>
            <p className="text-gray-500 mt-2">
              Try adjusting your filters to see more results
            </p>
            <button
              className="mt-4 px-4 py-2 border rounded-md"
              onClick={clearFilters}
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-4">
              <p className="text-gray-600">
                Showing {sortedInternships.length} internship
                {sortedInternships.length !== 1 ? "s" : ""}
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {sortedInternships.map((internship) => (
                <div
                  key={internship.id}
                  className="flex flex-col bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
                >
                  <div className="p-4 border-b flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-bold">{internship.title}</h3>
                      <p className="text-sm text-gray-600">{internship.organization}</p>
                    </div>
                    <span
                      className={`px-2 py-0.5 text-xs rounded-full font-medium ${
                        internship.status === "active"
                                                ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                      }`}
                    >
                      {internship.status === "active" ? "Active" : "Closed"}
                    </span>
                  </div>

                  <div className="p-4 flex flex-col flex-1">
                    <div className="mb-2">
                      <span className="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">
                        {internship.sector}
                      </span>
                    </div>

                    <p className="mb-4 text-gray-600 flex-1">{internship.description}</p>

                    <div className="mb-4">
                      <h4 className="text-sm font-medium mb-1 text-gray-700">Required Skills:</h4>
                      <div className="flex flex-wrap gap-2">
                        {internship.skills.slice(0, 3).map((skill) => (
                          <span
                            key={skill}
                            className="text-xs px-2 py-1 bg-gray-200 rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                        {internship.skills.length > 3 && (
                          <span className="text-xs px-2 py-1 bg-gray-200 rounded-full">
                            +{internship.skills.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="mb-5 space-y-1 text-gray-600 text-sm">
                      <div className="flex items-center">
                        📍 <span className="ml-1">{internship.location}</span>
                      </div>
                      <div className="flex items-center">
                        ⏱ <span className="ml-1">{internship.duration}</span>
                      </div>
                      <div className="flex items-center">
                        📅 <span className="ml-1">
                          Posted: {new Date(internship.datePosted).toLocaleDateString("en-IN")}
                        </span>
                      </div>
                    </div>

                    <button
                      className={`mt-auto w-full py-2 rounded-md text-white font-medium ${
                        internship.status === "active"
                          ? "bg-blue-600 hover:bg-blue-700"
                          : "bg-gray-400 cursor-not-allowed"
                      }`}
                      disabled={internship.status === "closed"}
                    >
                      {internship.status === "active" ? "Apply Now" : "Application Closed"}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

