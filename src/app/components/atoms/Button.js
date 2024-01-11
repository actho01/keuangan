import React from 'react';

const Button = ({ title }) => {
  return (
    <button className="w-full p-2 text-white rounded bg-biru-btn">
      {title}
    </button>
  );
};

export default Button;
