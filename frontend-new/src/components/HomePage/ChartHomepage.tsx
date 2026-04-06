import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

//Ändra att hämta från backend sen
const data = [
  { day: "Mon", amount: 400 },
  { day: "Tue", amount: 100 },
  { day: "Wed", amount: 600 },
  { day: "Thu", amount: 0 },
  { day: "Fri", amount: 500 },
  { day: "Sun", amount: 200 },
  { day: "Sat", amount: 400 },
];

export const ChartHomepage = () => {
  return (
    <div className="bg-surface-container-low rounded-xl p-6 border border-outline-variant/10 shadow-sm">
      <div className="flex justify-between items-end mb-6">
        <div>
          <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-[0.2em] mb-1">
            Total Monthly Spend
          </p>
          <h2 className="text-3xl font-headline font-bold text-on-surface">
            $4,285.90
          </h2>
        </div>
        <div className="flex bg-surface-container-highest p-1 rounded-lg border border-outline-variant/20">
          <button className="px-3 py-1 text-xs font-bold text-primary bg-surface-bright rounded shadow-sm hover:text-on-surface transition-colors">
            Week
          </button>
          <button className="px-3 py-1 text-xs font-bold text-on-surface-variant hover:text-on-surface transition-colors">
            Month
          </button>
          <button className="px-3 py-1 text-xs font-bold text-on-surface-variant hover:text-on-surface transition-colors">
            Year
          </button>
        </div>
      </div>

      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height={256}>
          <AreaChart
            data={data}
            margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorAmount" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#a0ffc3" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#a0ffc3" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#20262f"
            />
            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#72757d", fontSize: 10, fontWeight: "bold" }}
              dy={10}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#72757d", fontSize: 10 }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "#1b2028",
                border: "1px solid #44484f",
                borderRadius: "8px",
              }}
              itemStyle={{ color: "#a0ffc3", fontWeight: "bold" }}
              labelStyle={{ color: "#f1f3fc", fontWeight: "bold" }}
            />
            <Area
              type="monotone"
              dataKey="amount"
              stroke="#a0ffc3"
              strokeWidth={3}
              fillOpacity={1}
              fill="url(#colorAmount)"
              animationDuration={1500}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
