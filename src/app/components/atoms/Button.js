import React from 'react';

const Button = ({ title, variant, onClick }) => {
  let color;
  if ((variant = 'biru')) {
    color = 'text-white bg-biru-btn';
  }
  if ((variant = 'putih')) {
    color = 'text-black bg-white border-2 border-biru-btn';
  }
  return (
    <button className={`w-full p-2  rounded ${color}`} onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;
