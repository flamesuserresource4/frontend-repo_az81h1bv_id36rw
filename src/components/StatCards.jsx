import { Users, Briefcase, Clock3, TrendingUp } from "lucide-react";

const cards = [
  { title: "Employees", value: "248", change: "+12 this month", icon: Users, color: "from-blue-500 to-indigo-600" },
  { title: "Active Projects", value: "36", change: "+3 this week", icon: Briefcase, color: "from-emerald-500 to-teal-600" },
  { title: "Hours Logged", value: "1,284", change: "+148 today", icon: Clock3, color: "from-amber-500 to-orange-600" },
  { title: "Performance", value: "92%", change: "KPI avg", icon: TrendingUp, color: "from-fuchsia-500 to-pink-600" },
];

export default function StatCards() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
      {cards.map((c) => (
        <div key={c.title} className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">{c.title}</p>
              <p className="text-2xl font-semibold text-gray-800">{c.value}</p>
              <p className="text-xs text-gray-500 mt-1">{c.change}</p>
            </div>
            <div className={`h-12 w-12 rounded-lg bg-gradient-to-br ${c.color} text-white grid place-items-center`}>
              <c.icon className="h-5 w-5" />
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
