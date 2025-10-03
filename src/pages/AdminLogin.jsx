"use client";

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Simple client-side admin login. In a real app this must be replaced
// with a secure backend authentication flow. For this prototype we
// use a hard-coded credential (username: admin, password: admin123).

export default function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // NOTE: hard-coded credentials for prototype/demo only
    if (username === "admin" && password === "admin123") {
      localStorage.setItem("isAdmin", "true");
      setError("");
      navigate("/analysis");
    } else {
      setError("Invalid admin credentials");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow border border-gray-200 p-6">
        <h2 className="text-xl font-bold mb-2">Admin Portal Sign In</h2>
        <p className="text-sm text-gray-500 mb-4">Enter administrator credentials to access analytics.</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Username</label>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="block w-full mt-1 px-3 py-2 border rounded-md"
              placeholder="admin"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="block w-full mt-1 px-3 py-2 border rounded-md"
              placeholder="••••••••"
              required
            />
          </div>

          {error && <div className="text-sm text-red-600">{error}</div>}

          <div>
            <button type="submit" className="w-full py-2 px-4 bg-blue-600 text-white rounded-md">Sign In</button>
          </div>
        </form>

        <div className="text-xs text-gray-500 mt-4">
          <p>
            Note: this is a prototype login. Replace with a secure backend
            authentication flow for production.
          </p>
        </div>
      </div>
    </div>
  );
}
