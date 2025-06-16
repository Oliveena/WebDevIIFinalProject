import CategoryRow from "./CategoryRow.jsx";

const BudgetForm = ({ 
  totalIncome, 
  categories, 
  onIncomeChange, 
  onCategoryChange 
}) => {
  return (
    <div>
      {/* Income Input */}
      <div className="bg-gray-50 rounded-xl p-6 mb-8">
        <div className="flex items-center mb-3">
          <label className="block text-lg font-medium text-gray-700">
            Total Monthly Income
          </label>
        </div>
        <div className="relative rounded-md shadow-sm max-w-xs">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <span className="text-gray-500 sm:text-sm">$</span>
          </div>
          <input
            type="number"
            className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-7 pr-12 py-4 border-gray-300 rounded-lg text-lg"
            placeholder="0.00"
            value={totalIncome || ""}
            onChange={onIncomeChange}
          />
        </div>
      </div>

      {/* Category Table */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden mb-8">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Category
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount ($)
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  % of Income
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {categories.map((cat) => (
                <CategoryRow 
                  key={cat.id} 
                  category={cat} 
                  onChange={onCategoryChange} 
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BudgetForm;