import React from 'react';

const ButtonSmall = ({ title, variant }) => {
  let color;
  if (variant === 'biru') {
    color = 'text-white bg-biru-btn border border-black';
  }
  if (variant === 'putih') {
    color = 'text-black bg-white border border-gray-400  ';
  }
  if (variant === 'hijau') {
    color = 'text-white bg-hijau border border-black';
  }
  if (variant === 'merah') {
    color = 'text-white bg-red-500 border border-black';
  }
  return (
    <button className={` w-full p-1 text-xs rounded-lg uppercase ${color}`}>
      {title}
    </button>
  );
};

export default ButtonSmall;
