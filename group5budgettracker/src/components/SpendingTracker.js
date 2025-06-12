import SpendingGraph from "./spendingTrackerComponents/SpendingGraph"
import ListOfExpenses from "./spendingTrackerComponents/ListOfExpenses"
import React, { useState } from 'react';
import { useChartData } from './spendingTrackerComponents/useChartData';

const MOCK_EXPENSES = [
  { name: 'Coffee', amount: 3, category: 'Food', date: '2025-06-01' },
  { name: 'Groceries', amount: 15, category: 'Food', date: '2025-06-02' },
  { name: 'Bus Ticket', amount: 2.75, category: 'Transport', date: '2025-06-01' },
  { name: 'Lunch', amount: 10, category: 'Food', date: '2025-06-03' },
];

export default function SpendingTracker() {
  return (
    <div>
      <h2>Yes, this is Spending Tracker</h2><br/>

      <SpendingGraph expenses={MOCK_EXPENSES} />

      <p>List of expenses will go here.</p><br/>
      <ListOfExpenses expenses={MOCK_EXPENSES} />
    </div>
  );
}