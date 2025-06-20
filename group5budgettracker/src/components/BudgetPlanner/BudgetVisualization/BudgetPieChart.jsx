import {
  PieChart as RechartsPieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip as ChartTooltip,
  Legend,
} from "recharts";
import { useTheme } from "@mui/material/styles";
import { categoryColors } from "../../../constants/CategoryConfig";

const BudgetPieChart = ({ data }) => {

   const theme = useTheme();

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 border border-gray-200 rounded shadow-lg">
          <p className="font-semibold">{payload[0].name}</p>
          <p>Amount: ${payload[0].value.toFixed(2)}</p>
          <p>{payload[0].payload.percent}% of income</p>
        </div>
      );
    }
    return null;
  };

  return (
      <div
      style={{
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.primary,
        padding: theme.spacing(2),
        borderRadius: theme.shape.borderRadius,
        height: 300
      }}
    >
      <ResponsiveContainer width="100%" height="100%">
        <RechartsPieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            label={({ name, percent }) => `${name}: ${percent.toFixed(0)}%`}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={categoryColors[entry.name] || categoryColors.Everything}
              />
            ))}
          </Pie>
          <ChartTooltip content={<CustomTooltip />} />
          <Legend />
        </RechartsPieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BudgetPieChart;
