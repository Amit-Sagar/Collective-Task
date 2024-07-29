import React from "react";

const Select = ({ label, options }) => {
  return (
    <div className="flex items-center justify-center p-2 border border-gray-300 rounded-md">
      <label className="text-[#666666] text-xs">{label}:</label>
      <select className="border-none focus:outline-none focus:ring-0 text-xs">
        {options.map((item, i) => (
          <option key={item + i}>{item}</option>
        ))}
      </select>
    </div>
  );
};

export default Select;
