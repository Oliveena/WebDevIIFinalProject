import React, { useState } from "react";

const BudgetPlanner = () => {
  const [totalIncome, setTotalIncome] = useState(0);
  const [categories, setCategories] = useState([
    { id: 1, name: "Rent", icon: "🏠", amount: 0, percent: 0 },
    { id: 2, name: "Food", icon: "🍔", amount: 0, percent: 0 },
    { id: 3, name: "Transport", icon: "🚗", amount: 0, percent: 0 },
    { id: 4, name: "Lifestyle", icon: "🎉", amount: 0, percent: 0 },
    { id: 5, name: "Savings", icon: "💰", amount: 0, percent: 0 },
  ]);

  // update category amount and auto-calculate %
  const handleCategoryChange = (id, value) => {
    const updatedCategories = categories.map((cat) => {
      if (cat.id === id) {
        const amount = Number(value) || 0;
        const percent =
          totalIncome > 0 ? Math.round((amount / totalIncome) * 100) : 0;
        return { ...cat, amount, percent };
      }
      return cat;
    });
    setCategories(updatedCategories);
  };

  // save to localStorage (testing)
  const handleSave = () => {
    localStorage.setItem(
      "budgetData",
      JSON.stringify({ totalIncome, categories })
    );
    alert("Budget saved!");
  };

  // reset all the fields
  const handleReset = () => {
    setTotalIncome(0);
    setCategories(categories.map((cat) => ({ ...cat, amount: 0, percent: 0 })));
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Plan Your Monthly Budget</h2>

      {/* Income Input */}
      <div style={styles.incomeContainer}>
        <label>Total Monthly Income: $</label>
        <input
          type="number"
          value={totalIncome || ""}
          onChange={(e) => {
            const value = e.target.value;
            setTotalIncome(value === "" ? 0 : Number(value));
          }}
          style={styles.input}
        />
      </div>

      {/* Category Table */}
      <table style={styles.table}>
        <thead>
          <tr>
            <th>Category</th>
            <th>Amount ($)</th>
            <th>% of Income</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((cat) => (
            <tr key={cat.id}>
              <td>
                {cat.icon} {cat.name}
              </td>
              <td>
                <input
                  type="number"
                  value={cat.amount || ""}
                  onChange={(e) => {
                    const value = e.target.value;
                    handleCategoryChange(cat.id, value === "" ? 0 : value);
                  }}
                  style={styles.input}
                />
              </td>
              <td>{cat.percent}%</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Action Buttons */}
      <div style={styles.buttonContainer}>
        <button onClick={handleSave} style={styles.button}>
          Save Budget
        </button>
        <button
          onClick={handleReset}
          style={{ ...styles.button, backgroundColor: "#f5f5f5" }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    maxWidth: "600px",
    margin: "0 auto",
    padding: "20px",
  },
  header: {
    color: "#2563EB",
    textAlign: "center",
  },
  incomeContainer: {
    margin: "20px 0",
  },
  input: {
    padding: "8px",
    margin: "5px",
    border: "1px solid #ddd",
    borderRadius: "4px",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    margin: "20px 0",
  },
  button: {
    padding: "10px 15px",
    backgroundColor: "#2563EB",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    marginRight: "10px",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
  },
};

export default BudgetPlanner;
