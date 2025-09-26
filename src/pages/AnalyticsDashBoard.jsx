
import { useState } from "react";

import { User, Building, Shield, Clock, Users, TrendingUp, FileText, CheckCircle } from "lucide-react";

// Mock data (keep your data here)
 const mockAllocationData = { students: [ { id: "S001", name: "John Doe", status: "Allocated", role: "Software Engineer", organization: "Tech Corp", date: "2024-01-15" }, { id: "S002", name: "Jane Smith", status: "Waitlisted", role: "Data Scientist", organization: "Data Inc", date: "2024-01-16" }, { id: "S003", name: "Robert Johnson", status: "Not Allocated", role: "Product Manager", organization: "Innovate Ltd", date: "2024-01-17" }, ], organizations: [ { id: "O001", name: "Tech Corp", jdCount: 5, allocated: 3, pending: 2 }, { id: "O002", name: "Data Inc", jdCount: 3, allocated: 1, pending: 2 }, { id: "O003", name: "Innovate Ltd", jdCount: 4, allocated: 2, pending: 2 }, ], government: { compliance: 92, diversity: { male: 65, female: 35, other: 5 }, trends: [ { month: "Jan", allocated: 12, applications: 45 }, { month: "Feb", allocated: 18, applications: 52 }, { month: "Mar", allocated: 15, applications: 48 }, { month: "Apr", allocated: 22, applications: 60 }, ] } }; const mockTransparencyData = { stats: { totalApplications: 245, totalAllocations: 67, pendingReviews: 12, avgProcessingTime: "3.2 days" }, logs: [ { id: "L001", action: "Application Submitted", user: "S001", timestamp: "2024-01-15 10:30:22" }, { id: "L002", action: "Allocation Approved", user: "O001", timestamp: "2024-01-16 14:22:45" }, { id: "L003", action: "Review Completed", user: "G001", timestamp: "2024-01-17 09:15:33" }, ], reports: [ { id: "R001", title: "Q1 Allocation Report", date: "2024-04-01", downloads: 124 }, { id: "R002", title: "Diversity Analysis", date: "2024-03-15", downloads: 87 }, { id: "R003", title: "Compliance Audit", date: "2024-02-28", downloads: 56 }, ] }; 
 const mockFeedbackData = [ { id: "F001", user: "S001", rating: 4, comment: "Great matching process!", date: "2024-01-15" }, { id: "F002", user: "O001", rating: 5, comment: "High quality candidates", date: "2024-01-16" }, { id: "F003", user: "S002", rating: 3, comment: "Could be faster", date: "2024-01-17" }, ]; const mockGrievances = [ { id: "G001", user: "S004", status: "Resolved", issue: "Allocation delay", date: "2024-01-10" }, { id: "G002", user: "O002", status: "In Review", issue: "JD approval delay", date: "2024-01-12" }, { id: "G003", user: "S005", status: "New", issue: "Incorrect profile", date: "2024-01-15" }, ];


export default function AnalyticDashBoard() {
  const [activeRole, setActiveRole] = useState('student');
  const [grievances, setGrievances] = useState(mockGrievances);

  const renderRoleDashboard = () => {
    if (activeRole === 'student') {
      return (
        <div className="space-y-8 mt-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <MetricCard title="Application Status" value="3" icon={<User className="h-5 w-5 text-blue-600" />} subtitle="Active applications" color="blue" />
            <MetricCard title="Allocations" value="1" icon={<CheckCircle className="h-5 w-5 text-green-600" />} subtitle="Successful allocations" color="green" />
            <MetricCard title="Pending Reviews" value="2" icon={<Clock className="h-5 w-5 text-amber-600" />} subtitle="Applications under review" color="yellow" />
          </div>

          {/* Application History */}
          <div className="p-6 border rounded-xl shadow-lg bg-white">
            <h3 className="text-lg font-semibold mb-4">Application History</h3>
            <div className="space-y-3">
              {mockAllocationData.students.map((student) => (
                <div key={student.id} className="flex justify-between items-center p-3 border rounded-lg hover:shadow-md transition">
                  <div>
                    <p className="font-medium">{student.name}</p>
                    <p className="text-sm text-gray-500">{student.role} at {student.organization}</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      student.status === 'Allocated' ? 'bg-green-100 text-green-800' :
                      student.status === 'Waitlisted' ? 'bg-amber-100 text-amber-800' : 'bg-gray-100 text-gray-800'}`}>
                      {student.status}
                    </span>
                    <span className="text-sm text-gray-400">{student.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }

    if (activeRole === 'organization') {
      return (
        <div className="space-y-8 mt-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <MetricCard title="Posted JDs" value="12" icon={<FileText className="h-5 w-5 text-blue-600" />} subtitle="Job descriptions posted" color="blue" />
            <MetricCard title="Allocations" value="6" icon={<CheckCircle className="h-5 w-5 text-green-600" />} subtitle="Successful allocations" color="green" />
            <MetricCard title="Pending Reviews" value="4" icon={<Clock className="h-5 w-5 text-amber-600" />} subtitle="Applications under review" color="yellow" />
          </div>

          <div className="p-6 border rounded-xl shadow-lg bg-white">
            <h3 className="text-lg font-semibold mb-4">Allocation Results</h3>
            <div className="space-y-3">
              {mockAllocationData.organizations.map((org) => (
                <div key={org.id} className="flex justify-between items-center p-3 border rounded-lg hover:shadow-md transition">
                  <div>
                    <p className="font-medium">{org.name}</p>
                    <p className="text-sm text-gray-500">{org.jdCount} job descriptions</p>
                  </div>
                  <div className="flex space-x-6">
                    <div className="text-center">
                      <p className="text-lg font-bold text-green-600">{org.allocated}</p>
                      <p className="text-xs text-gray-400">Allocated</p>
                    </div>
                    <div className="text-center">
                      <p className="text-lg font-bold text-amber-600">{org.pending}</p>
                      <p className="text-xs text-gray-400">Pending</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }

    if (activeRole === 'government') {
      return (
        <div className="space-y-8 mt-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <MetricCard title="Compliance Rate" value={`${mockAllocationData.government.compliance}%`} icon={<Shield className="h-5 w-5 text-blue-600" />} subtitle="Policy compliance" color="blue" />
            <MetricCard title="Total Applications" value={mockAllocationData.government.trends.reduce((sum, t) => sum + t.applications, 0)} icon={<Users className="h-5 w-5 text-blue-600" />} subtitle="Across all periods" color="blue" />
            <MetricCard title="Allocations" value={mockAllocationData.government.trends.reduce((sum, t) => sum + t.allocated, 0)} icon={<TrendingUp className="h-5 w-5 text-green-600" />} subtitle="Successful placements" color="green" />
          </div>
        </div>
      );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Analytics, Monitoring & Feedback Layer</h1>
        <p className="text-gray-500 mt-1">Role-based dashboards for allocation management</p>
      </div>

      {/* Role Selector */}
      <div className="flex gap-2 mb-10">
        {['student','organization','government'].map((role) => (
          <button
            key={role}
            onClick={() => setActiveRole(role)}
            className={`px-4 py-2 rounded-lg font-semibold border transition ${
              activeRole === role ? 'bg-blue-600 text-white shadow-md' : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
            }`}
          >
            {role === 'student' && <User className="inline h-4 w-4 mr-1" />}
            {role === 'organization' && <Building className="inline h-4 w-4 mr-1" />}
            {role === 'government' && <Shield className="inline h-4 w-4 mr-1" />}
            {role.charAt(0).toUpperCase() + role.slice(1)} Dashboard
          </button>
        ))}
      </div>

      {/* Dashboard Content */}
      {renderRoleDashboard()}
    </div>
  );
}

// MetricCard Component
function MetricCard({ title, value, icon, subtitle, color }) {
  const colorMap = {
    blue: 'bg-blue-100 text-blue-800',
    green: 'bg-green-100 text-green-800',
    yellow: 'bg-amber-100 text-amber-800',
    red: 'bg-red-100 text-red-800'
  };
  return (
    <div className="p-6 border rounded-xl shadow-lg bg-white hover:shadow-2xl transition">
      <div className="flex justify-between items-center">
        <span className="text-gray-700 font-medium">{title}</span>
        {icon}
      </div>
      <div className="text-3xl font-bold mt-2">{value}</div>
      <p className="text-sm text-gray-400 mt-1">{subtitle}</p>
    </div>
  );
}

