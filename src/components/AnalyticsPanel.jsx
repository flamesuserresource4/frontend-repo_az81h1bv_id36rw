import { BarChart3, Calendar, Activity } from "lucide-react";

export default function AnalyticsPanel() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      <div className="col-span-2 rounded-xl border border-gray-200 bg-white p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <BarChart3 className="h-4 w-4 text-blue-600" />
            <h3 className="font-semibold text-gray-800">Department Performance</h3>
          </div>
          <select className="text-sm border border-gray-200 rounded-md px-2 py-1 bg-white">
            <option>This Quarter</option>
            <option>Last Quarter</option>
            <option>This Year</option>
          </select>
        </div>
        <div className="h-56 grid grid-cols-12 items-end gap-2">
          {[40, 55, 62, 48, 70, 58, 77, 64, 72, 68, 80, 75].map((h, i) => (
            <div key={i} className="bg-gradient-to-t from-blue-200 to-blue-500 rounded-t-md" style={{ height: `${h}%` }} />
          ))}
        </div>
        <p className="text-xs text-gray-500 mt-2">KPI scores by month</p>
      </div>

      <div className="rounded-xl border border-gray-200 bg-white p-4 space-y-4">
        <div className="flex items-center gap-2">
          <Calendar className="h-4 w-4 text-emerald-600" />
          <h3 className="font-semibold text-gray-800">Attendance Overview</h3>
        </div>
        <div className="grid grid-cols-7 gap-1">
          {Array.from({ length: 70 }).map((_, i) => (
            <div
              key={i}
              className={`h-4 rounded ${[0,1,2].includes(i%7) ? 'bg-emerald-200' : i%10===0 ? 'bg-red-200' : 'bg-emerald-400'}`}
              title={`Day ${i+1}`}
            />
          ))}
        </div>
        <div className="flex items-center gap-2 text-xs text-gray-500">
          <span className="inline-block h-3 w-3 rounded bg-emerald-400" /> Present
          <span className="inline-block h-3 w-3 rounded bg-emerald-200 ml-3" /> WFH
          <span className="inline-block h-3 w-3 rounded bg-red-200 ml-3" /> Leave
        </div>

        <div className="pt-2">
          <div className="flex items-center gap-2">
            <Activity className="h-4 w-4 text-amber-600" />
            <h4 className="font-medium text-gray-700">Utilization</h4>
          </div>
          <div className="mt-2 h-2 w-full bg-gray-100 rounded-full">
            <div className="h-2 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full" style={{ width: '72%' }} />
          </div>
          <p className="text-xs text-gray-500 mt-1">72% avg billable hours</p>
        </div>
      </div>
    </section>
  );
}
