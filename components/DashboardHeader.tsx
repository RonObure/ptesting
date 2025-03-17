// components/DashboardHeader.tsx
import Image from 'next/image';

export default function DashboardHeader() {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="px-6 py-4 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Welcome, Alexa A.</h1>
          <p className="text-sm text-gray-500">Have a good day!</p>
        </div>
        
        <div className="flex-1 max-w-lg mx-8">
          <div className="relative">
            <i className="fas fa-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
            <input 
              type="text" 
              placeholder="Search" 
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-custom focus:border-custom"
            />
          </div>
        </div>
        <div className="flex items-center">
          <span className="mr-4">
            <span className="text-sm font-medium text-gray-900">Good Morning</span><br/>
            <span className="text-xs text-gray-500">Continue Your Journey</span>
          </span>
          <Image 
            className="h-10 w-10 rounded-full" 
            src="/profile-placeholder.png" 
            alt="Profile"
            width={40}
            height={40}
          />
          <button className="ml-2 text-gray-500 hover:text-gray-700">
            <i className="fas fa-ellipsis-v"></i>
          </button>
        </div>
      </div>
      
      {/* Quick Access Tools */}
      <div className="px-6 py-2 flex space-x-4 border-b border-gray-200">
        <button className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-lg">
          <i className="fas fa-book mr-2"></i>
          Textbook
        </button>
        <button className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-lg">
          <i className="fas fa-book-open mr-2"></i>
          Dictionary
        </button>
        <button className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-lg">
          <i className="fas fa-running mr-2"></i>
          Sprint
        </button>
        <button className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-lg">
          <i className="fas fa-headset mr-2"></i>
          Audio-Call
        </button>
      </div>
      
      {/* Course Levels */}
      <div className="px-6 py-2 flex space-x-4">
        <button className="px-4 py-2 bg-custom text-white rounded-lg text-sm font-medium">
          A1 <span className="text-xs ml-1">Easy</span>
        </button>
        <button className="px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg text-sm font-medium">
          A2 <span className="text-xs ml-1">Easy</span>
        </button>
        <button className="px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg text-sm font-medium">
          B1 <span className="text-xs ml-1 text-yellow-600">Medium</span>
        </button>
        <button className="px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg text-sm font-medium">
          B2 <span className="text-xs ml-1 text-yellow-600">Medium</span>
        </button>
        <button className="px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg text-sm font-medium">
          C1 <span className="text-xs ml-1 text-red-600">Hard</span>
        </button>
        <button className="px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg text-sm font-medium">
          C2 <span className="text-xs ml-1 text-red-600">Hard</span>
        </button>
      </div>
    </header>
  );
}