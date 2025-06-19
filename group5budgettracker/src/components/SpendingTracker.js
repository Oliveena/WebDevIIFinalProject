import React, { useState, useEffect } from "react";
import SpendingGraph from "./spendingTrackerComponents/SpendingGraph";
import AddExpenseForm from "./spendingTrackerComponents/AddExpenseForm";
import ListOfExpenses from "./spendingTrackerComponents/ListOfExpenses";
import { categoryColors, categoryIcons } from "../constants/CategoryConfig";
import { useNavigate } from "react-router-dom";
import { FaChartLine, FaArrowRight } from "react-icons/fa";

export default function SpendingTracker() {
  const [budgets, setBudgets] = useState(null);

  const [expenses, setExpenses] = useState([
    // Food - June
    { name: "Coffee", amount: 3, category: "Food", date: "2025-06-01" },
    { name: "Groceries", amount: 85, category: "Food", date: "2025-06-02" },
    { name: "Lunch", amount: 12, category: "Food", date: "2025-06-03" },
    { name: "Dinner Out", amount: 45, category: "Food", date: "2025-06-04" },
    { name: "Cinema Snacks", amount: 15, category: "Food", date: "2025-06-05" },
    { name: "Coffee", amount: 3, category: "Food", date: "2025-06-11" },
    { name: "Birthday Cake", amount: 60, category: "Food", date: "2025-06-12" },
    { name: "Coffee", amount: 3, category: "Food", date: "2025-06-14" },
    { name: "Onigiri", amount: 15, category: "Food", date: "2025-06-15" },

    // Clothes - June
    { name: "T-shirt", amount: 25, category: "Clothes", date: "2025-06-01" },
    { name: "Jeans", amount: 60, category: "Clothes", date: "2025-06-03" },
    { name: "Sneakers", amount: 90, category: "Clothes", date: "2025-06-07" },
    {
      name: "Pashmina Scarf",
      amount: 30,
      category: "Clothes",
      date: "2025-06-14",
    },

    // Transport - June
    {
      name: "Bus Ticket",
      amount: 2.75,
      category: "Transport",
      date: "2025-06-01",
    },
    {
      name: "Opus Card Monthly",
      amount: 90,
      category: "Transport",
      date: "2025-06-01",
    },
    {
      name: "Car Payment",
      amount: 300,
      category: "Transport",
      date: "2025-06-03",
    },
    { name: "Gas", amount: 60, category: "Transport", date: "2025-06-04" },
    { name: "Gas", amount: 75, category: "Transport", date: "2025-06-15" },

    // Rent - June
    { name: "June Rent", amount: 1200, category: "Rent", date: "2025-06-01" },
    {
      name: "July Rent (early)",
      amount: 1200,
      category: "Rent",
      date: "2025-06-15",
    },

    // Utilities - June
    {
      name: "Hydro-Québec",
      amount: 200,
      category: "Utilities",
      date: "2025-06-02",
    },
    {
      name: "Cellphone Bill",
      amount: 50,
      category: "Utilities",
      date: "2025-06-03",
    },
    { name: "Internet", amount: 65, category: "Utilities", date: "2025-06-04" },
    {
      name: "Plumbing Repairs",
      amount: 275,
      category: "Utilities",
      date: "2025-06-14",
    },

    // Food - May
    { name: "Groceries", amount: 95, category: "Food", date: "2025-05-10" },
    {
      name: "Dinner with Friends",
      amount: 60,
      category: "Food",
      date: "2025-05-15",
    },
    { name: "Coffee", amount: 4, category: "Food", date: "2025-05-18" },
    { name: "Bakery", amount: 10, category: "Food", date: "2025-05-20" },

    // Clothes - May
    {
      name: "Summer Dress",
      amount: 45,
      category: "Clothes",
      date: "2025-05-05",
    },
    { name: "Flip Flops", amount: 20, category: "Clothes", date: "2025-05-12" },

    // Transport - May
    { name: "Gas", amount: 50, category: "Transport", date: "2025-05-03" },
    { name: "Bus Pass", amount: 80, category: "Transport", date: "2025-05-15" },

    // Rent - May
    { name: "May Rent", amount: 1200, category: "Rent", date: "2025-05-01" },

    // Utilities - May
    {
      name: "Electric Bill",
      amount: 190,
      category: "Utilities",
      date: "2025-05-07",
    },
    { name: "Internet", amount: 65, category: "Utilities", date: "2025-05-10" },

    // Food - April
    { name: "Lunch", amount: 14, category: "Food", date: "2025-04-11" },
    { name: "Groceries", amount: 80, category: "Food", date: "2025-04-15" },
    { name: "Coffee", amount: 3, category: "Food", date: "2025-04-20" },

    // Clothes - April
    { name: "Jacket", amount: 120, category: "Clothes", date: "2025-04-05" },
    { name: "Socks", amount: 10, category: "Clothes", date: "2025-04-15" },

    // Transport - April
    {
      name: "Car Payment",
      amount: 300,
      category: "Transport",
      date: "2025-04-01",
    },
    { name: "Gas", amount: 45, category: "Transport", date: "2025-04-10" },

    // Rent - April
    { name: "April Rent", amount: 1200, category: "Rent", date: "2025-04-01" },

    // Utilities - April
    {
      name: "Water Bill",
      amount: 70,
      category: "Utilities",
      date: "2025-04-05",
    },
    {
      name: "Cellphone Bill",
      amount: 50,
      category: "Utilities",
      date: "2025-04-15",
    },

    // Food - March
    { name: "Coffee", amount: 3, category: "Food", date: "2025-03-10" },
    { name: "Lunch", amount: 12, category: "Food", date: "2025-03-15" },
    { name: "Groceries", amount: 90, category: "Food", date: "2025-03-20" },

    // Clothes - March
    { name: "Sweater", amount: 70, category: "Clothes", date: "2025-03-05" },
    { name: "Jeans", amount: 60, category: "Clothes", date: "2025-03-10" },

    // Transport - March
    {
      name: "Bus Ticket",
      amount: 3,
      category: "Transport",
      date: "2025-03-12",
    },
    { name: "Gas", amount: 55, category: "Transport", date: "2025-03-20" },

    // Rent - March
    { name: "March Rent", amount: 1200, category: "Rent", date: "2025-03-01" },

    // Utilities - March
    {
      name: "Electric Bill",
      amount: 180,
      category: "Utilities",
      date: "2025-03-07",
    },
    { name: "Internet", amount: 65, category: "Utilities", date: "2025-03-15" },
  ]);

  useEffect(() => {
    const savedBudget = localStorage.getItem("budgetData");
    if (savedBudget) {
      const parsedData = JSON.parse(savedBudget);
      // Transform categories array into {category: amount} object
      const budgetMap = parsedData.categories.reduce((acc, category) => {
        acc[category.name] = category.amount;
        return acc;
      }, {});
      setBudgets({
        ...budgetMap,
        totalIncome: parsedData.totalIncome,
      });
    }
  }, []);

  const handleAddExpense = (newExpense) => {
    setExpenses((prev) => [...prev, newExpense]);
  };

  // for accessing Budget page from Spending page
  const navigate = useNavigate();

  // toggle for budget data being compared to expenses data
  const [showBudget, setShowBudget] = useState(false);

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Track your
            <span className="block text-primary-600">
              spending effortlessly
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Visualize where your money goes and keep tabs on your spending
            habits over time.
          </p>
        </div>

        <div className="mb-6 flex items-center gap-4 justify-center">
          {/* Compare with Budget Button */}
          <button
            onClick={() => setShowBudget((prev) => !prev)}
            className="flex items-center gap-2 px-4 py-2 text-white font-semibold rounded-md"
            style={{ backgroundColor: showBudget ? "#2563eb" : "#6b7280" }}
          >
            <FaChartLine />
            {showBudget ? "Hide Budget Comparison" : "Compare with Budget"}
          </button>

          {/* Manage Budget Button */}
          <button
            onClick={() => navigate("/budget")}
            className="flex items-center gap-2 px-4 py-2 text-primary-600 border border-primary-600 font-semibold rounded-md hover:bg-primary-50"
          >
            Manage Budget
            <FaArrowRight />
          </button>
        </div>

        {/* Graph + Dropdown */}
        <div className="mb-12">
          <SpendingGraph
            expenses={expenses}
            showBudget={showBudget}
            budgets={budgets} // Pass the budgets data
          />
        </div>

        {/* CTA: Add Expense */}
        <AddExpenseForm onAdd={handleAddExpense} />

        {/* Table of Expenses */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-4 p-5">
            Recent Expenses
          </h3>
          <ListOfExpenses expenses={expenses} categoryColors={categoryColors} />
        </div>
      </div>
    </section>
  );
}
