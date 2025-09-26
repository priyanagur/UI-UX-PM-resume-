"use client";

import { useState, useEffect } from "react";
import { Home, Clipboard, BarChart } from "lucide-react";

// Dummy Data
const RAW_STUDENTS = [
  { id: "S001", name: "Arjun Patel", institution: "IIT Bombay", location: "Mumbai, Maharashtra", skills: ["Python", "Data Analysis", "Machine Learning"], diversityTags: ["First Generation", "Rural Background"], matchScore: 98, matchedOrg: "Tech Innovations Bangalore", implicitMatch: true },
  { id: "S002", name: "Priya Sharma", institution: "Delhi University", location: "Delhi", skills: ["Java", "Web Development"], diversityTags: ["First Generation", "Underrepresented Minority"], matchScore: 96, matchedOrg: "Global Solutions Hyderabad", implicitMatch: false },
  { id: "S003", name: "Rahul Verma", institution: "BITS Pilani", location: "Pilani, Rajasthan", skills: ["UI/UX Design", "Figma", "Prototyping"], diversityTags: [], matchScore: 95, matchedOrg: "Creative Minds Pune", implicitMatch: true },
  { id: "S004", name: "Ananya Reddy", institution: "IIIT Hyderabad", location: "Hyderabad, Telangana", skills: ["Cybersecurity", "Network Administration"], diversityTags: ["First Generation"], matchScore: 94, matchedOrg: "SecureNet Chennai", implicitMatch: false },
]

const RAW_ORGANIZATIONS = [
  { id: "O001", name: "Tech Innovations Bangalore", location: "Bangalore, Karnataka", type: "Private", capacity: 20, filled: 15 },
  { id: "O002", name: "Global Solutions Hyderabad", location: "Hyderabad, Telangana", type: "Non-Profit", capacity: 15, filled: 12 },
  { id: "O003", name: "Creative Minds Pune", location: "Pune, Maharashtra", type: "Private", capacity: 10, filled: 8 },
  { id: "O004", name: "SecureNet Chennai", location: "Chennai, Tamil Nadu", type: "Government", capacity: 25, filled: 20 },
  { id: "O005", name: "CloudTech Mumbai", location: "Mumbai, Maharashtra", type: "Private", capacity: 18, filled: 14 },
  { id: "O006", name: "Data Insights Kolkata", location: "Kolkata, West Bengal", type: "Private", capacity: 12, filled: 9 },
  { id: "O007", name: "AI Research Labs Bangalore", location: "Bangalore, Karnataka", type: "Research", capacity: 8, filled: 6 },
  { id: "O008", name: "Marketing Pro Ahmedabad", location: "Ahmedabad, Gujarat", type: "Private", capacity: 15, filled: 11 }
];

const RAW_LOGS = [
  { id: "L001", studentId: "S001", studentName: "Arjun Patel", orgName: "Tech Innovations Bangalore", timestamp: "2023-06-15T10:30:00Z", decisionReason: "High skill overlap in ML and strong location preference for Bangalore" },
  { id: "L002", studentId: "S002", studentName: "Priya Sharma", orgName: "Global Solutions Hyderabad", timestamp: "2023-06-15T11:15:00Z", decisionReason: "Met rural background quota and first-gen priority for Hyderabad position" }
];

export default function Allocation() {
  const [students, setStudents] = useState([]);
  const [organizations, setOrgs] = useState([]);
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeSection, setActiveSection] = useState("matches");
  const [matchFilter, setMatchFilter] = useState("all");

  const sidebarItems = [
    { id: "matches", label: "Matches", icon: Home },
    { id: "logs", label: "Logs", icon: Clipboard },
    { id: "stats", label: "Stats", icon: BarChart }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setStudents(RAW_STUDENTS);
      setOrgs(RAW_ORGANIZATIONS);
      setLogs(RAW_LOGS);
      setLoading(false);
    }, 400);
    return () => clearTimeout(timer);
  }, []);

  const filteredStudents = students.filter(s => {
    const t = searchTerm.toLowerCase();
    const textMatch = s.name.toLowerCase().includes(t) || s.institution.toLowerCase().includes(t) || s.location.toLowerCase().includes(t) || s.skills.some(skill => skill.toLowerCase().includes(t));
    let score = true;
    if (matchFilter === "high") score = s.matchScore >= 90;
    if (matchFilter === "medium") score = s.matchScore >= 70 && s.matchScore < 90;
    if (matchFilter === "low") score = s.matchScore < 70;
    return textMatch && score;
  });

  const stats = {
    totalStudents: students.length,
    totalOrgs: organizations.length,
    avgScore: students.length ? Math.round(students.reduce((a, b) => a + b.matchScore, 0) / students.length) : 0,
    allocationRate: organizations.length ? Math.round((organizations.reduce((a, b) => a + b.filled, 0) / organizations.reduce((a, b) => a + b.capacity, 0)) * 100) : 0
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mb-4" />
        <p className="text-gray-600">Loading dashboard…</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* Sidebar */}
          

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-4 space-y-6">
          
        {activeSection === "matches" && (
          <section>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Allocated Students</h2>
            
            </div>
            {filteredStudents.length === 0 ? <p className="text-gray-500">No matching students.</p> : <div className="space-y-4">{filteredStudents.map((s) => <StudentCard key={s.id} s={s} />)}</div>}
          </section>
        )}

        {activeSection === "logs" && (
          <section>
            <h2 className="text-xl font-semibold mb-4">Recent Allocation Logs</h2>
            <div className="space-y-3">{logs.map((log) => <div key={log.id} className="p-4 bg-white rounded shadow hover:shadow-md transition">
              <p className="font-medium">{log.studentName}</p>
              <p className="text-sm text-gray-600">Matched to <span className="font-semibold">{log.orgName}</span></p>
              <p className="text-xs text-gray-500">{new Date(log.timestamp).toLocaleString()}</p>
              <p className="mt-1 text-sm">{log.decisionReason}</p>
            </div>)}</div>
          </section>
        )}

        {activeSection === "stats" && (
          <section>
            <h2 className="text-xl font-semibold mb-4">Statistics Overview</h2>
            <p className="text-gray-600">Students allocated: {stats.allocationRate}% of total capacity.</p>
          </section>
        )}
      </main>
    </div>
  );
}

// Helper Components
function StatCard({ label, value, emoji }) {
  return (
    <div className="p-4 bg-white rounded shadow hover:shadow-md transition flex flex-col items-start">
      <div className="flex items-center justify-between w-full">
        <span className="text-gray-600">{label}</span>
        <span>{emoji}</span>
      </div>
      <div className="text-2xl font-bold mt-1">{value}</div>
    </div>
  );
}

function StudentCard({ s }) {
  return (
    <div className="p-4 bg-white rounded shadow hover:shadow-md transition">
      <div className="flex justify-between">
        <div>
          <h3 className="font-semibold text-lg">{s.name}</h3>
          <p className="text-sm text-gray-600">{s.institution} • {s.location}</p>
        </div>
        <span className="px-2 py-1 text-sm rounded bg-blue-100 text-blue-700">{s.matchScore}%</span>
      </div>
      <div className="mt-2 flex flex-wrap gap-1">{s.skills.map((sk) => <span key={sk} className="text-xs border border-gray-300 px-2 py-0.5 rounded bg-gray-50">{sk}</span>)}</div>
      <p className="mt-2 text-sm">Matched with: <span className="font-medium">{s.matchedOrg}</span></p>
      {s.implicitMatch && <span className="inline-block mt-1 text-xs text-red-600 font-medium">Implicit Match</span>}
      <div className="flex flex-wrap mt-1 gap-1 text-xs">{s.diversityTags.map((tag) => <span key={tag} className="border border-gray-300 px-2 py-0.5 rounded bg-green-50">{tag}</span>)}</div>
      <div className="flex justify-end gap-2 ">
          <button className="mt-2 text-center px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition  ">Approve</button> 
          <button className="mt-2 text-center px-4 py-2 bg-red-600 text-white rounded-lg shadow hover:bg-red-700 transition ">Deny</button> 
      </div>
    </div>
  );
}
