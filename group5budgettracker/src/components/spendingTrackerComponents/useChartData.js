import { useState, useEffect } from 'react';
import dayjs from 'dayjs';

export default function useChartData(expenses, selectedCategory, selectedRange) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const budgets = {
    Food: 300,
    Clothes: 200,
    Transport: 250,
    Rent: 1200,
    Utilities: 300,
  };

  const getStartDate = () => {
    const now = dayjs();
    switch (selectedRange) {
      case '1 Day': return now.subtract(1, 'day');
      case '1 Week': return now.subtract(1, 'week');
      case '1 Month': return now.subtract(1, 'month');
      case '1 Year': return now.subtract(1, 'year');
      default: return dayjs('2000-01-01'); // All time
    }
  };

  useEffect(() => {
    const startDate = getStartDate();

    try {
      setLoading(true);
      setError(null);

      // Filter expenses by date and exclude future dates
      const filtered = expenses.filter(exp => {
        const expDate = dayjs(exp.date);
        return expDate.isAfter(startDate) && expDate.isBefore(dayjs().add(1, 'day')); // excludes future dates
      });

      // Decide which categories to include
      const categoriesToInclude = selectedCategory === 'Everything'
        ? ['Food', 'Clothes', 'Transport', 'Rent', 'Utilities']
        : [selectedCategory];

      const groupedByCategory = {};

      categoriesToInclude.forEach(cat => {
        // Group expenses by date for this category
        const grouped = filtered
          .filter(exp => exp.category === cat)
          .reduce((acc, exp) => {
            const date = exp.date;
            acc[date] = (acc[date] || 0) + exp.amount;
            return acc;
          }, {});

        // Sort dates ascending
        const sortedDates = Object.keys(grouped).sort((a, b) => dayjs(a).isBefore(dayjs(b)) ? -1 : 1);

        // Compute cumulative sum per date
        let runningTotal = 0;
        groupedByCategory[cat] = sortedDates.map(date => {
          runningTotal += grouped[date];
          return { name: date, value: runningTotal };
        });
      });

      setData(groupedByCategory);
      setLoading(false);
    } catch (err) {
      setError('Failed to load chart data.');
      setLoading(false);
    }
  }, [expenses, selectedCategory, selectedRange]);

  return { data, loading, error };
}