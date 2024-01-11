import React from 'react';

const Input = ({ onChange, type }) => {
  return (
    <input
      type={type}
      className="w-full p-1 border rounded bg-slate-100"
      onChange={onChange}
    />
  );
};

export default Input;
