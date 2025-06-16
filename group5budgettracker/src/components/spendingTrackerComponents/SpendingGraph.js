import React, { useState } from 'react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import CategorySelect from './CategorySelect'; 
import useChartData from './useChartData';
import { categoryColors, categoryIcons } from '../../constants/CategoryConfig';

const timeRanges = ['1 Week', '1 Month', '3 Months', 'All'];

  // TODO: connect to budget data
const mockBudgets = {
  Food: 300,
  Clothes: 200,
  Transport: 250,
  Rent: 1200,
  Utilities: 150,
};

export default function SpendingGraph({ expenses, showBudget }) {
  const [selectedCategory, setSelectedCategory] = useState('Food');
  const [selectedRange, setSelectedRange] = useState('1 Week');

const { data: chartData, loading, error } = useChartData(expenses, selectedCategory, selectedRange);
const totalSpent = (chartData[selectedCategory] || []).at(-1)?.value || 0;
const budget = selectedCategory !== 'Everything' ? mockBudgets[selectedCategory] : null;

const status =
  budget !== null
    ? totalSpent > budget
      ? 'above'
      : 'below'
    : null;

const budgetMessage =
  selectedCategory === 'Everything'
    ? `Your total spending for ${selectedRange} across all categories is $${totalSpent.toFixed(2)}.`
    : `Your expenses for ${selectedRange} in category ${selectedCategory} is $${totalSpent.toFixed(
        2
      )}. You're ${status} budget.`;

  
  if (loading) return <p>Loading chart...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container my-4">
      <div className="mb-3 d-flex align-items-center gap-3">
        {/* Summary message */}
      <div className="text-center text-lg font-medium text-gray-700 mb-6">
        {budgetMessage}
      </div>


    {/* Graph and its components*/}
        <label className="fw-semibold p-5" style={{ minWidth: 70 }}>Category:</label>
        <CategorySelect selectedCategory={selectedCategory} onChange={setSelectedCategory} />

        <label className="fw-semibold p-5" htmlFor="range-select" style={{ minWidth: 70 }}>
          Time Range:
        </label>
        <select
          id="range-select"
          className="form-select w-auto"
          value={selectedRange}
          onChange={e => setSelectedRange(e.target.value)}
          style={{ minWidth: 120 }}
        >
          {timeRanges.map(range => (
            <option key={range} value={range}>{range}</option>
          ))}
        </select>
      </div>

      {/* Chart */}
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={chartData[selectedCategory] || []}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip
  formatter={(value, name) => {
    if (name === 'Planned Budget') {
      return [`$${value}`, 'Planned Budget (gray dashed)'];
    }
    return [`$${value}`, name];
  }}
/>
          <Legend />
         <Line
  type="monotone"
  dataKey="value"
  stroke={categoryColors[selectedCategory]}
  strokeWidth={3}
  dot={{ r: 7 }} 
  name="Actual Expenses"
/>

{showBudget && (
  <Line
    type="monotone"
    dataKey={() => mockBudgets[selectedCategory]} // Flat line
    stroke="#8884d8"
    name="Planned Budget"
    strokeDasharray="5 5"
    dot={false}
  />
)}
        </LineChart>
      </ResponsiveContainer>
      {showBudget && (
  <p style={{ textAlign: 'center', fontSize: '0.9rem', color: '#6b7280', marginTop: '0.5rem' }}>
    <span style={{ borderBottom: '1px dashed #8884d8', marginRight: 6 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
    Gray dashed line represents your budget for the selected category.
  </p>
)}
    </div>
  );
}
