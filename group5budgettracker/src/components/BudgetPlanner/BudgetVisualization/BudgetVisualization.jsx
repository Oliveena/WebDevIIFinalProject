import BudgetPieChart from "./BudgetPieChart"
import BudgetSummary from "./BudgetSummary";
import { PieChart } from "lucide-react";

const BudgetVisualization = ({ pieData, totalIncome, totalAllocated }) => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
        Budget Visualization
      </h3>

      {pieData.length > 0 ? (
        <>
          <BudgetPieChart data={pieData} />
          <BudgetSummary 
            totalIncome={totalIncome} 
            totalAllocated={totalAllocated} 
          />
        </>
      ) : (
        <div className="h-80 flex flex-col items-center justify-center text-gray-400">
          <PieChart className="h-16 w-16 mb-4" />
          <p className="text-lg">Enter your budget to see the visualization</p>
          <p className="text-sm mt-2">
            Start by adding your income and category amounts
          </p>
        </div>
      )}
    </div>
  );
};

export default BudgetVisualization;