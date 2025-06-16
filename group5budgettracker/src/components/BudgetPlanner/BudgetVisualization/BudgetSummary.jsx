import { ArrowRightCircle } from "lucide-react";

const BudgetSummary = ({ totalIncome, totalAllocated }) => {
  return (
    <div className="mt-6 bg-blue-50 rounded-2xl p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <p className="text-sm text-gray-500">Total Income</p>
          <p className="text-2xl font-bold text-gray-900">
            ${totalIncome.toFixed(2)}
          </p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <p className="text-sm text-gray-500">Total Allocated</p>
          <p
            className={`text-2xl font-bold ${
              totalAllocated > totalIncome ? "text-red-600" : "text-gray-900"
            }`}
          >
            ${totalAllocated.toFixed(2)}
          </p>
          <div className="mt-2 flex items-center">
            <ArrowRightCircle className="h-4 w-4 text-gray-400 mr-1" />
            <span className="text-xs text-gray-500">
              {((totalAllocated / totalIncome) * 100).toFixed(1)}% of income
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BudgetSummary;