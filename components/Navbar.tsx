import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="bg-[#F6F5F4] shadow-sm fixed w-full z-50">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 border-b border-gray-200">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/">
              <Image 
                className="h-8 w-auto" 
                src="/logo.png" 
                alt="Peersvel" 
                width={32} 
                height={32} 
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden sm:flex sm:space-x-8">
            <Link href="/" className="border-[#8932EB] text-[#8932EB] inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
              Home
            </Link>
            <Link href="/battle" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
              5V5 Battle
            </Link>
            <Link href="/courses" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
              VIP Courses
            </Link>
            <Link href="/teachers" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
              Teachers
            </Link>
            <Link href="/contact" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
              Contact Us
            </Link>
          </div>

          {/* Get Started Button */}
          <div className="hidden sm:flex sm:items-center">
            <Link href="/get-started">
              <button className="rounded-md bg-[#8932EB] text-white px-4 py-2 text-sm font-medium hover:bg-[#8932EB]/90">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
