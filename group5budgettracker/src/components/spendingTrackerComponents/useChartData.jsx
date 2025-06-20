import { useState, useEffect } from 'react';
import dayjs from 'dayjs';

export default function useChartData(expenses, selectedCategory, selectedRange) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // mock budgets 
  // TODO: link Budget values with Spending 
  const budgets = {
    Food: 300,
    Clothes: 200,
    Transport: 250,
    Rent: 1200,
    Utilities: 300,
  };

  const getStartDate = () => {
    const now = dayjs();
    // declaring time periods for graph display
    switch (selectedRange) {
      case '1 Day': return now.subtract(1, 'day');
      case '1 Week': return now.subtract(1, 'week');
      case '1 Month': return now.subtract(1, 'month');
      case '1 Year': return now.subtract(1, 'year');
      default: return dayjs('2000-01-01'); // All time
    }
  };

  // calculating length of selected time periods 
  useEffect(() => {
    // declaring start date
    const startDate = getStartDate();

    // initial states: loading with no errors 
    try {
      setLoading(true);
      setError(null);

      // Filter expenses by date and exclude future dates
      const filtered = expenses.filter(exp => {
        const expDate = dayjs(exp.date);
        // excluding future dates
        return expDate.isAfter(startDate) && expDate.isBefore(dayjs().add(1, 'day'));
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

      // Add "Everything" by merging all categories
if (selectedCategory === 'Everything') {
  const allDates = new Set();
  Object.values(groupedByCategory).forEach(arr => {
    arr.forEach(item => allDates.add(item.name));
  });

  const sortedAllDates = Array.from(allDates).sort((a, b) => dayjs(a).isBefore(dayjs(b)) ? -1 : 1);

  let runningTotal = 0;
  // merging all data from all categories 
  const mergedData = sortedAllDates.map(date => {
    const dailySum = Object.values(groupedByCategory).reduce((sum, categoryData) => {
      const entry = categoryData.find(item => item.name === date);
      return sum + (entry ? entry.value - (categoryData.find((_, i) => i === categoryData.findIndex(d => d.name === date) - 1)?.value || 0) : 0);
    }, 0);

    runningTotal += dailySum;
    return { name: date, value: runningTotal };
  });

  groupedByCategory['Everything'] = mergedData;
}


      setData(groupedByCategory);
      setLoading(false);
    } catch (err) {
      setError('Failed to load chart data.');
      setLoading(false);
    }
  }, [expenses, selectedCategory, selectedRange]);

  return { data, loading, error };
}