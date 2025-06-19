import { useState, useEffect } from "react";
import { PieChart as RechartsPieChart, Pie, Cell, ResponsiveContainer, Tooltip as ChartTooltip, Legend } from "recharts";
import { PieChart, Info, ArrowRightCircle, Save, RefreshCw } from "lucide-react";
import { categoryColors, categoryIcons } from '../../constants/CategoryConfig';

import BudgetForm from "./BudgetForm/BudgetForm.jsx";
import BudgetVisualization from "./BudgetVisualization/BudgetVisualization.jsx";
import ActionButtons from "./ActionButtons.jsx";
import Tooltip from "./Tooltip/Tooltip.jsx";

const BudgetPlanner = () => {
  const [totalIncome, setTotalIncome] = useState(0);
  const [categories, setCategories] = useState([
  {
    id: 1,
    name: "Rent",
    icon: categoryIcons.Rent,
    amount: 0,
    percent: 0,
    tooltip: "Monthly housing expenses including rent or mortgage payments"
  },
  {
    id: 2,
    name: "Food",
    icon: categoryIcons.Food,
    amount: 0,
    percent: 0,
    tooltip: "All food-related expenses"
  },
  {
    id: 3,
    name: "Transport",
    icon: categoryIcons.Transport,
    amount: 0,
    percent: 0,
    tooltip: "Transportation costs"
  },
  {
    id: 4,
    name: "Clothes",
    icon: categoryIcons.Clothes,
    amount: 0,
    percent: 0,
    tooltip: "Clothing and apparel expenses"
  },
  {
    id: 5,
    name: "Utilities",
    icon: categoryIcons.Utilities,
    amount: 0,
    percent: 0,
    tooltip: "Bills like electricity, water, and internet"
  }
]);

  const handleCategoryChange = (id, value) => {
    const updatedCategories = categories.map((cat) => {
      if (cat.id === id) {
        const amount = Number(value) || 0;
        const percent = totalIncome > 0 ? Math.round((amount / totalIncome) * 100) : 0;
        return { ...cat, amount, percent };
      }
      return cat;
    });
    setCategories(updatedCategories);
  };

  const handleSave = () => {
    const saveData = {
      totalIncome,
      categories: categories.map(({ icon, ...rest }) => rest)
    };
    localStorage.setItem("budgetData", JSON.stringify(saveData));
    alert("Budget saved successfully!");
  };

  const handleReset = () => {
    setTotalIncome(0);
    setCategories(categories.map((cat) => ({ ...cat, amount: 0, percent: 0 })));
  };

  const getIconComponent = (name) => {
    return categoryIcons[name] || null;
  };

  useEffect(() => {
    const savedData = localStorage.getItem("budgetData");
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      setTotalIncome(parsedData.totalIncome);
      setCategories(parsedData.categories.map(cat => ({
        ...cat,
        icon: getIconComponent(cat.name)
      })));
    }
  }, []);

  // Prepare data for pie chart
  const pieData = categories
    .filter((cat) => cat.amount > 0)
    .map((cat) => ({
      name: cat.name,
      value: cat.amount,
      percent: cat.percent,
    }));

  const totalAllocated = categories.reduce((sum, cat) => sum + cat.amount, 0);

  return (
    <section className="py-12 lg:py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 rounded-xl bg-blue-100 mb-6">
            <PieChart className="h-8 w-8 text-blue-600" />
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Plan Your Monthly Budget
          </h2>
          <div className="flex items-center justify-center">
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Allocate your income across different categories
            </p>
            <Tooltip 
              content="Start by entering your total monthly take-home income, then distribute it across categories. The percentages will calculate automatically. Try to keep total allocations at or below 100% of your income for a balanced budget." 
              width="72"
            >
              <span className="sr-only">Budget planning instructions</span>
            </Tooltip>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Inputs */}
          <div>
            <BudgetForm
              totalIncome={totalIncome}
              categories={categories}
              onIncomeChange={(e) => {
                const value = e.target.value;
                setTotalIncome(value === "" ? 0 : Number(value));
              }}
              onCategoryChange={handleCategoryChange}
              getIconComponent={getIconComponent}
            />
            
            <ActionButtons onSave={handleSave} onReset={handleReset} />
          </div>

          {/* Right Column - Visualization */}
          <BudgetVisualization
            pieData={pieData}
            totalIncome={totalIncome}
            totalAllocated={totalAllocated}
          />
        </div>
      </div>
    </section>
  );
};

export default BudgetPlanner;