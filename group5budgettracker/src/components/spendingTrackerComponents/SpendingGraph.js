import React, { useState } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend
} from 'recharts';
import useChartData from './useChartData';

export default function SpendingGraph({ expenses }) {
    // useState and useChartData(custom hook)
  const [selectedCategory, setSelectedCategory] = useState('Food');
  const { data: chartData, loading, error } = useChartData(expenses, selectedCategory);

  // messages for user
  if (loading) return <p>Loading chart...</p>;
  if (error) return <p>Error: {error}</p>;

  {/*dropdown of categories + graph from Recharts*/}
  return (
    <>
      <select value={selectedCategory} onChange={e => setSelectedCategory(e.target.value)}>
        <option value="Food">Food</option>
        <option value="Clothes">Clothes</option>
        <option value="Transport">Transport</option>
        <option value="Rent">Rent</option>
        <option value="Utilities">Utilities</option>
      </select>

      <LineChart width={700} height={400} data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="value" stroke="#FFC300" name="Actual Expenses" />
      </LineChart>
    </>
  );
}

{/*TODO: add option for displaying expenses AND budget on graph*/}
