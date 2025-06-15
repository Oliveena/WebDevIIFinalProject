import React, { useState } from 'react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import CategorySelect from './CategorySelect'; 
import useChartData from './useChartData';
import { categoryColors, categoryIcons } from '../../constants/CategoryConfig';

const timeRanges = ['1 Week', '1 Month', '3 Months', 'All'];

export default function SpendingGraph({ expenses }) {
  const [selectedCategory, setSelectedCategory] = useState('Food');
  const [selectedRange, setSelectedRange] = useState('1 Week');

  const { data: chartData, loading, error } = useChartData(expenses, selectedCategory, selectedRange);

  if (loading) return <p>Loading chart...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container my-4">
      <div className="mb-3 d-flex align-items-center gap-3">
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
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="value"
            stroke={categoryColors[selectedCategory]}
            name="Actual Expenses"
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

{/*TODO: add option for displaying expenses AND budget on graph*/}
