import { useState, useEffect } from 'react';

const useChartData = (expenses, filterCategory) => {
    // setting states for user-entered data
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // starts with loading
    setLoading(true);
    try {
      let filteredExpenses = expenses;
      // filtering expenses by category
      if (filterCategory) {
        filteredExpenses = expenses.filter(e => e.category === filterCategory);
      }

      // filtering list of expense (aggregated data) by categories
      const aggregatedData = filteredExpenses.reduce((array, item) => {
        const existing = array.find(x => x.name === item.category);

        if (existing) {
            // if the category exists, add the item there
            existing.value += item.amount;
        } else {
            // if category doesn't exist, create it and add item there
        array.push({ name: item.category, value: item.amount });
        }
        return array;
        }, []);

      setData(aggregatedData);
        } catch (e) {
      setError(e.message || 'Error processing data');
        } finally {
            // stop loading once expenses are returned
      setLoading(false);
    }
  }, [expenses, filterCategory]);

  return { data, loading, error };
};

export default useChartData;
