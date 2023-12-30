import React from 'react';
import TitlleOne from '../atoms/TitlleOne';

const Dropdown = ({ options }) => {
  const handleSelect = (value) => {
    window.location.href = `/${value}`;
  };

  return (
    <select
      onChange={(e) => handleSelect(e.target.value)}
      className="p-2 text-sm font-medium text-white transition-all duration-300 bg-transparent rounded hover:bg-white hover:text-primary"
    >
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
