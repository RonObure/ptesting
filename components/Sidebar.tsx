import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="w-64 bg-white border-r border-gray-200 flex flex-col h-screen">
      <div className="p-6">
        <img src="/logo.png" alt="Logo" className="h-8" />
      </div>

      <nav className="flex-1 px-4">
        <div className="space-y-1">
          <h3 className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
            Overview
          </h3>
          <Link href="/dashboard" className="flex items-center px-3 py-2 text-sm font-medium rounded-lg bg-indigo-600 text-white">
            <i className="fas fa-th-large w-5 h-5 mr-3"></i>
            Dashboard
          </Link>
          <Link href="#" className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-50">
            <i className="fas fa-compass w-5 h-5 mr-3"></i>
            Explore
          </Link>
          <Link href="#" className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-50">
            <i className="fas fa-chalkboard-teacher w-5 h-5 mr-3"></i>
            Tutoring
          </Link>
          <Link href="#" className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-50">
            <i className="fas fa-user w-5 h-5 mr-3"></i>
            Profile
          </Link>
          <Link href="#" className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-50">
            <i className="fas fa-users w-5 h-5 mr-3"></i>
            Group
          </Link>
        </div>

        <div className="mt-8 space-y-1">
          <h3 className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
            Settings
          </h3>
          <Link href="#" className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-50">
            <i className="fas fa-cog w-5 h-5 mr-3"></i>
            Settings
          </Link>
          <Link href="#" className="flex items-center px-3 py-2 text-sm font-medium text-red-600 rounded-lg hover:bg-red-50">
            <i className="fas fa-sign-out-alt w-5 h-5 mr-3"></i>
            Logout
          </Link>
        </div>
      </nav>
    </div>
  );
}
