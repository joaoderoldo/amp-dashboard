import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { day: "Mon", workout: 30 },
  { day: "Tue", workout: 40 },
  { day: "Wed", workout: 35 },
  { day: "Thu", workout: 50 },
  { day: "Fri", workout: 60 },
  { day: "Sat", workout: 20 },
  { day: "Sun", workout: 45 },
];

const WorkoutChart = () => {
  return (
    <section className="workout-chart">
      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            style={{
              stroke: "var(--common-black)",
            }}
          />
          <XAxis
            dataKey="day"
            style={{
              stroke: "var(--common-black)",
            }}
          />
          <YAxis
            style={{
              stroke: "var(--common-black)",
            }}
          />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="workout"
            strokeWidth={1}
            style={{
              stroke: "var(--chart-line-color)",
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </section>
  );
};

export default WorkoutChart;
