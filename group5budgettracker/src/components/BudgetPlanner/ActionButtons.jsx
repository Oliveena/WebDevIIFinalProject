import { Save, RefreshCw } from "lucide-react";
import Tooltip from "./Tooltip/Tooltip";
import { useTheme } from "@mui/material/styles";

const ActionButtons = ({ onSave, onReset }) => {
  return (
    <div className="flex justify-center space-x-4">
      <Tooltip content="Save your budget plan to your browser's local storage.">
        <button
          onClick={onSave}
          className="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium text-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
        >
          <Save className="mr-2 h-5 w-5" />
          Save Budget
        </button>
      </Tooltip>
      <Tooltip content="Clear all entered values and start fresh.">
        <button
          onClick={onReset}
          className="flex items-center bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 px-6 py-3 rounded-xl font-medium text-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
        >
          <RefreshCw className="mr-2 h-5 w-5" />
          Reset
        </button>
      </Tooltip>
    </div>
  );
};

export default ActionButtons;