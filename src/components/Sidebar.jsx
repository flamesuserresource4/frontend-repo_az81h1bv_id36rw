import { Home, Users, Briefcase, ListChecks, CalendarClock, BarChart3, Settings } from "lucide-react";

const nav = [
  { name: "Overview", icon: Home },
  { name: "Employees", icon: Users },
  { name: "Projects", icon: Briefcase },
  { name: "Tasks & Time", icon: ListChecks },
  { name: "Leave & Attendance", icon: CalendarClock },
  { name: "Reports", icon: BarChart3 },
  { name: "Settings", icon: Settings },
];

export default function Sidebar() {
  return (
    <aside className="hidden md:flex md:flex-col w-64 border-r border-gray-200 bg-white/60 backdrop-blur supports-[backdrop-filter]:bg-white/50">
      <div className="h-16 flex items-center px-6 border-b border-gray-200">
        <span className="text-lg font-semibold tracking-tight">BizFlow</span>
      </div>
      <nav className="p-3 space-y-1">
        {nav.map((item) => (
          <button
            key={item.name}
            className="w-full flex items-center gap-3 px-3 py-2 rounded-md text-gray-700 hover:bg-blue-50 hover:text-blue-700"
          >
            <item.icon className="h-4 w-4" />
            <span className="text-sm font-medium">{item.name}</span>
          </button>
        ))}
      </nav>
      <div className="mt-auto p-4 text-xs text-gray-500">© {new Date().getFullYear()} BizFlow Inc.</div>
    </aside>
  );
}
