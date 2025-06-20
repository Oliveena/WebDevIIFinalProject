import React, { useState } from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import CategorySelect from "./CategorySelect";
import useChartData from "./useChartData";
import { categoryColors, categoryIcons } from "../../constants/CategoryConfig";
import { useTheme } from "@mui/material/styles";

const timeRanges = ["1 Week", "1 Month", "3 Months", "All"];

export default function SpendingGraph({ expenses, showBudget, budgets }) {

  const theme = useTheme();
const isDarkMode = theme.palette.mode === "dark";

  // Add budgets prop
  const [selectedCategory, setSelectedCategory] = useState("Food");
  const [selectedRange, setSelectedRange] = useState("1 Week");

  const {
    data: chartData,
    loading,
    error,
  } = useChartData(expenses, selectedCategory, selectedRange);

  // Loading state check before showing budget line
  if (loading) return <p>Loading chart...</p>;
  if (error) return <p>Error: {error}</p>;
  if (showBudget && budgets === null) return <p>Loading budget data...</p>;

  const totalSpent = (chartData[selectedCategory] || []).at(-1)?.value || 0;
  const budget =
    selectedCategory !== "Everything"
      ? budgets?.[selectedCategory]
      : budgets?.totalIncome; // Use totalIncome for "Everything" view
  const status =
    budget !== null ? (totalSpent > budget ? "above" : "below") : null;
    
let budgetMessage = "";

if (selectedCategory === "Everything") {
  const totalBudget = budgets?.totalIncome || 0;
  const status = totalSpent > totalBudget ? "above" : "below";
  budgetMessage = `Your total spending for ${selectedRange} is $${totalSpent.toFixed(
    2
  )}. You're ${status} $${totalBudget.toFixed(2)} budget.`;
} else if (budget !== null) {
  budgetMessage = `Your expenses for ${selectedRange} in category ${selectedCategory} is $${totalSpent.toFixed(
    2
  )}. You're ${status} $${budget?.toFixed(2)} budget.`;
} else {
  budgetMessage = `Your expenses for ${selectedRange} in category ${selectedCategory} is $${totalSpent.toFixed(
    2
  )}.`;
}

  if (loading) return <p>Loading chart...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
 <div
  className="container my-4"
  style={{
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.primary,
    padding: "1rem",
    borderRadius: "8px"
  }}
>
        {/* Summary message */}
        <div className="text-center text-lg font-medium text-gray-700 mb-6">
          {budgetMessage}
        </div>

        {/* Graph and its components*/}
        <label className="fw-semibold p-5" style={{ minWidth: 70 }}>
          Category:
        </label>
        <CategorySelect
          selectedCategory={selectedCategory}
          onChange={setSelectedCategory}
        />

        <label
          className="fw-semibold p-5"
          htmlFor="range-select"
          style={{ minWidth: 70 }}
        >
          Time Range:
        </label>
        <select
          id="range-select"
          className="form-select w-auto"
          value={selectedRange}
          onChange={(e) => setSelectedRange(e.target.value)}
          style={{ minWidth: 120 }}
        >
          {timeRanges.map((range) => (
            <option key={range} value={range}>
              {range}
            </option>
          ))}
        </select>

      {/* Chart */}
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={chartData[selectedCategory] || []}>
         <CartesianGrid stroke={theme.palette.divider} />
<XAxis stroke={theme.palette.text.secondary} />
<YAxis stroke={theme.palette.text.secondary} />
<Tooltip
  contentStyle={{
    backgroundColor: theme.palette.background.paper,
    borderRadius: "4px",
    color: theme.palette.text.primary,
  }}
  formatter={(value, name) => {
    if (name === "Planned Budget") {
      return [`$${value}`, "Planned Budget (gray dashed)"];
    }
    return [`$${value}`, name];
  }}
/>
          <Legend wrapperStyle={{ color: theme.palette.text.secondary }} />
          <Line
            type="monotone"
            dataKey="value"
            stroke={categoryColors[selectedCategory]}
            strokeWidth={3}
            dot={{ r: 7 }}
            name="Actual Expenses"
          />

          {showBudget && budgets && (
            <Line
              type="monotone"
              dataKey={() => budget} // Now uses the computed budget value
              stroke="#8884d8"
              name="Planned Budget"
              strokeDasharray="5 5"
              dot={false}
            />
          )}
        </LineChart>
      </ResponsiveContainer>
      {showBudget && (
        <p
  style={{
    textAlign: "center",
    fontSize: "0.9rem",
    color: theme.palette.text.secondary,
    marginTop: "0.5rem",
  }}
>

          <span style={{ borderBottom: "1px dashed #8884d8", marginRight: 6 }}>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </span>
          Gray dashed line represents your budget for the selected category.
        </p>
      )}
    </div>
  );
}
