import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import StatCards from "./components/StatCards";
import AnalyticsPanel from "./components/AnalyticsPanel";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-gray-900">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex gap-6">
        <Sidebar />

        <main className="flex-1 space-y-6">
          <div className="rounded-2xl border border-dashed border-gray-200 p-4 bg-white/60 backdrop-blur">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold text-gray-800">Welcome back</h2>
                <p className="text-sm text-gray-500">Here's what's happening across your organization today.</p>
              </div>
              <div className="flex items-center gap-2">
                <button className="px-3 py-2 text-sm rounded-md border border-gray-200 bg-white hover:bg-gray-50">Export</button>
                <button className="px-3 py-2 text-sm rounded-md bg-blue-600 text-white hover:bg-blue-700">Add Project</button>
              </div>
            </div>
          </div>

          <StatCards />
          <AnalyticsPanel />

          <section className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="rounded-xl border border-gray-200 bg-white p-4">
              <h3 className="font-semibold text-gray-800 mb-3">Active Projects</h3>
              <ul className="divide-y divide-gray-100">
                {[
                  { name: "NextGen ERP", progress: 78, lead: "Samantha" },
                  { name: "Mobile Banking", progress: 54, lead: "Diego" },
                  { name: "AI Helpdesk", progress: 32, lead: "Priya" },
                  { name: "E-Comm Revamp", progress: 86, lead: "Ken" },
                ].map((p) => (
                  <li key={p.name} className="py-3 flex items-center justify-between">
                    <div>
                      <p className="font-medium text-gray-800">{p.name}</p>
                      <p className="text-xs text-gray-500">Lead: {p.lead}</p>
                    </div>
                    <div className="w-40">
                      <div className="h-2 bg-gray-100 rounded-full">
                        <div className="h-2 bg-blue-600 rounded-full" style={{ width: `${p.progress}%` }} />
                      </div>
                      <p className="text-xs text-gray-500 mt-1 text-right">{p.progress}%</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-4">
              <h3 className="font-semibold text-gray-800 mb-3">Recent Activity</h3>
              <div className="space-y-3">
                {[
                  { t: "Leave approved for John Doe (2 days)", ts: "2h ago" },
                  { t: "Task completed: API Integration #142", ts: "4h ago" },
                  { t: "New employee added: Mia Park", ts: "1d ago" },
                  { t: "Timesheet submitted: Week 45", ts: "2d ago" },
                ].map((i, idx) => (
                  <div key={idx} className="flex items-start justify-between">
                    <p className="text-sm text-gray-700">{i.t}</p>
                    <span className="text-xs text-gray-500">{i.ts}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
