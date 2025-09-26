"use client";

import { useState } from "react";

export default function Login() {
  const [userType, setUserType] = useState(null);
  const [isLogin, setIsLogin] = useState(true);

  const handleUserTypeSelect = (type) => {
    setUserType(type);
  };

  const handleBack = () => {
    setUserType(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`[${userType}] form submitted`);
    alert(`[${userType}] authentication would happen here`);
  };

  // Simple inline SVG icons instead of lucide-react
  const StudentIcon = () => (
    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5V8H2v12h5m10-8V4H7v8m10 0v8H7v-8h10z" />
    </svg>
  );

  const OrgIcon = () => (
    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 21V9l9-7 9 7v12H3z" />
    </svg>
  );

  const GovIcon = () => (
    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );

  // Landing page view
  if (!userType) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-6xl space-y-10">
          <div className="text-center space-y-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 px-4">
              Centralized Internship Allocation System
            </h1>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              Streamlining internship opportunities for students, organizations, and government agencies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 px-4">
            {/* Student */}
            <div
              className="bg-white cursor-pointer hover:shadow-md transition-all border border-gray-200 rounded-xl p-6 h-full flex flex-col"
              onClick={() => handleUserTypeSelect("student")}
            >
              <div className="flex flex-col items-center pb-3">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-blue-100 flex items-center justify-center mb-3">
                  <StudentIcon />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold">Student Portal</h3>
              </div>
              <div className="text-center text-gray-600 pb-4 flex-grow">
                <p className="text-sm sm:text-base">
                  Discover opportunities, apply for internships, and manage your applications
                </p>
              </div>
              <div className="flex justify-center">
                <button className="w-full py-2 px-4 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                  Access Portal
                </button>
              </div>
            </div>

            {/* Organization */}
            <div
              className="bg-white cursor-pointer hover:shadow-md transition-all border border-gray-200 rounded-xl p-6 h-full flex flex-col"
              onClick={() => handleUserTypeSelect("organization")}
            >
              <div className="flex flex-col items-center pb-3">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-green-100 flex items-center justify-center mb-3">
                  <OrgIcon />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold">Organization Portal</h3>
              </div>
              <div className="text-center text-gray-600 pb-4 flex-grow">
                <p className="text-sm sm:text-base">
                  Post internships, review applications, and manage your internship programs
                </p>
              </div>
              <div className="flex justify-center">
                <button className="w-full py-2 px-4 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                  Access Portal
                </button>
              </div>
            </div>

            {/* Government */}
            <div
              className="bg-white cursor-pointer hover:shadow-md transition-all border border-gray-200 rounded-xl p-6 h-full flex flex-col"
              onClick={() => handleUserTypeSelect("government")}
            >
              <div className="flex flex-col items-center pb-3">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-purple-100 flex items-center justify-center mb-3">
                  <GovIcon />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold">Government Portal</h3>
              </div>
              <div className="text-center text-gray-600 pb-4 flex-grow">
                <p className="text-sm sm:text-base">
                  Oversee allocations, ensure compliance, and generate system reports
                </p>
              </div>
              <div className="flex justify-center">
                <button className="w-full py-2 px-4 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                  Access Portal
                </button>
              </div>
            </div>
          </div>

          <div className="text-center text-xs sm:text-sm text-gray-500 pt-2 px-4">
            <p>Select your role to access the appropriate portal</p>
          </div>
        </div>
      </div>
    );
  }

  // Login/Registration forms
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white shadow-sm border border-gray-200 rounded-xl">
        <div className="text-center space-y-2 p-6 pb-5">
          <div className="flex justify-center">
            {userType === "student" && (
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                <StudentIcon />
              </div>
            )}
            {userType === "organization" && (
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                <OrgIcon />
              </div>
            )}
            {userType === "government" && (
              <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                <GovIcon />
              </div>
            )}
          </div>
          <h2 className="text-xl sm:text-2xl font-bold">
            {userType === "student" && "Student Portal"}
            {userType === "organization" && "Organization Portal"}
            {userType === "government" && "Government Portal"}
          </h2>
          <p className="text-sm text-gray-500">
            {isLogin ? "Sign in to your account" : "Create a new account"}
          </p>
        </div>

        <div className="px-6 pb-5">
          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Full Name</label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="block w-full h-10 px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                  required
                />
              </div>
            )}

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Email Address</label>
              <input
                type="email"
                placeholder="name@organization.edu"
                className="block w-full h-10 px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="block w-full h-10 px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                required
              />
            </div>

            {!isLogin && (
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
                <input
                  type="password"
                  placeholder="Confirm your password"
                  className="block w-full h-10 px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                  required
                />
              </div>
            )}

            {userType === "government" && isLogin && (
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Aadhaar Number</label>
                <input
                  type="text"
                  placeholder="XXXX-XXXX-XXXX"
                  className="block w-full h-10 px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                  required
                />
              </div>
            )}

            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 rounded-md text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 h-10"
            >
              {isLogin ? "Sign In" : "Create Account"}
            </button>
          </form>
        </div>

        <div className="px-6 pb-6 flex flex-col space-y-4">
          <div className="text-xs sm:text-sm text-center text-gray-600">
            {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
            <button
              type="button"
              className="text-blue-600 hover:underline font-medium"
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin ? "Create one" : "Sign in"}
            </button>
          </div>

          <button
            type="button"
            className="w-full text-gray-600 hover:text-gray-900 h-9 text-sm flex items-center justify-center"
            onClick={handleBack}
          >
            ← Back to role selection
          </button>
        </div>
      </div>
    </div>
  );
}
