import { Info } from "lucide-react";
import { useState } from "react";

const Tooltip = ({ content, children, width = "64" }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="relative inline-flex items-center group">
      <div
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        className="inline-flex items-center cursor-help"
      >
        {children}
        <Info className="ml-1 h-4 w-4 text-gray-400 hover:text-gray-600" />
      </div>
      {isVisible && (
        <div
          className={`absolute z-20 left-full ml-2 w-${width} p-3 text-sm text-gray-700 bg-white border border-gray-200 rounded-lg shadow-lg`}
          style={{ minWidth: `${width}px`, maxWidth: "320px" }}
        >
          <div className="whitespace-normal">{content}</div>
          <div className="absolute top-3 -left-1 w-2 h-2 bg-white border-l border-t border-gray-200 transform rotate-45"></div>
        </div>
      )}
    </div>
  );
};

export default Tooltip;