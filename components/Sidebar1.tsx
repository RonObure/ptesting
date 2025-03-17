"use client";

import { useState } from "react";
import Link from "next/link";
import { Home, Calendar, User, Settings, LogOut, Menu, X } from "lucide-react";
import { signOut } from "next-auth/react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={`h-screen bg-indigo-700 text-white transition-all ${isOpen ? "w-64" : "w-20"} fixed md:relative flex flex-col`}>
      {/* Sidebar Header */}
      <div className="flex items-center justify-between p-4">
        {isOpen && <h1 className="text-lg font-bold">Dashboard</h1>}
        <button onClick={() => setIsOpen(!isOpen)} className="p-2">
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col space-y-4 p-4">
        <Link href="/dashboard" legacyBehavior>
          <a className="flex items-center space-x-3 p-2 rounded hover:bg-indigo-500">
            <Home className="h-5 w-5" /> {isOpen && <span>Home</span>}
          </a>
        </Link>
        <Link href="/dashboard/sessions" legacyBehavior>
          <a className="flex items-center space-x-3 p-2 rounded hover:bg-indigo-500">
            <Calendar className="h-5 w-5" /> {isOpen && <span>Sessions</span>}
          </a>
        </Link>
        <Link href="/dashboard/profile" legacyBehavior>
          <a className="flex items-center space-x-3 p-2 rounded hover:bg-indigo-500">
            <User className="h-5 w-5" /> {isOpen && <span>Profile</span>}
          </a>
        </Link>
        <Link href="/dashboard/settings" legacyBehavior>
          <a className="flex items-center space-x-3 p-2 rounded hover:bg-indigo-500">
            <Settings className="h-5 w-5" /> {isOpen && <span>Settings</span>}
          </a>
        </Link>
      </nav>

      {/* Logout Button */}
      <div className="mt-auto p-4">
        <button onClick={() => signOut()} className="flex items-center space-x-3 w-full p-2 rounded hover:bg-red-500">
          <LogOut className="h-5 w-5" /> {isOpen && <span>Logout</span>}
        </button>
      </div>
    </div>
  );
}
