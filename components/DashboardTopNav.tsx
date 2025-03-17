export default function DashboardTopNav() {
    return (
      <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
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
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
        </div>
  
        <div className="flex items-center">
          <span className="mr-4">
            <span className="text-sm font-medium text-gray-900">Good Morning</span>
            <br />
            <span className="text-xs text-gray-500">Continue Your Journey</span>
          </span>
          <img className="h-10 w-10 rounded-full" src="" alt="Profile" />
        </div>
      </header>
    );
  }
  