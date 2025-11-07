import { Bell, Search, User } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-20 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <h1 className="text-xl sm:text-2xl font-semibold text-gray-800">BizFlow Dashboard</h1>
        <div className="flex items-center gap-3 w-full max-w-xl ml-4">
          <div className="relative flex-1 hidden md:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search employees, projects, tasks..."
              className="w-full rounded-md border border-gray-200 pl-9 pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/70"
            />
          </div>
          <button className="p-2 rounded-lg hover:bg-gray-100 text-gray-600">
            <Bell className="h-5 w-5" />
          </button>
          <div className="flex items-center gap-2 px-2 py-1 rounded-lg border border-gray-200 bg-white">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-white grid place-items-center">
              <User className="h-4 w-4" />
            </div>
            <div className="hidden sm:block">
              <p className="text-sm font-medium text-gray-800 leading-4">Alex Morgan</p>
              <p className="text-xs text-gray-500">Admin</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
