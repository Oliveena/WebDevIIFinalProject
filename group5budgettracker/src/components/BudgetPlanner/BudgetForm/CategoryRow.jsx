import Tooltip from "../Tooltip/Tooltip.jsx";

const CategoryRow = ({ category, onChange, getIconComponent }) => {
  return (
    <tr className="hover:bg-gray-50">
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="flex-shrink-0 bg-blue-100 p-2 rounded-lg">
            {category.icon || getIconComponent(category.name)}
          </div>
          <div className="ml-4">
            <div className="flex items-center">
              <span className="text-sm font-medium text-gray-900">
                {category.name}
              </span>
              <Tooltip content={category.tooltip} width="64">
                <span className="sr-only">{category.name} information</span>
              </Tooltip>
            </div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <input
          type="number"
          className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-3 pr-3 py-2 border-gray-300 rounded-md text-sm"
          placeholder="0.00"
          value={category.amount || ""}
          onChange={(e) => {
            const value = e.target.value;
            onChange(category.id, value === "" ? 0 : value);
          }}
        />
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        <div className="flex items-center">
          <span
            className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
              category.percent > 100
                ? "bg-red-100 text-red-800"
                : "bg-green-100 text-green-800"
            }`}
          >
            {category.percent}%
          </span>
          {category.percent > 100 && (
            <Tooltip content="Warning: This allocation exceeds your total income.">
              <span className="sr-only">Warning</span>
            </Tooltip>
          )}
        </div>
      </td>
    </tr>
  );
};

export default CategoryRow;
