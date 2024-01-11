import React from 'react';
import TitlleOne from '../atoms/TitlleOne';

const Dropdown = ({ options, children }) => {
  const handleSelect = (value) => {
    window.location.href = `/${value}`;
  };

  return (
    <div className="flex items-center p-2 px-4 space-x-3 rounded hover:bg-primary">
      <div>{children}</div>
      <select
        onChange={(e) => handleSelect(e.target.value)}
        className="text-sm font-medium text-black transition-all duration-300 bg-transparent rounded "
      >
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
