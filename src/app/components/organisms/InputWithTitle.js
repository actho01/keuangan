import React from 'react';
import Input from '../molekules/Input';

const InputWithTitle = ({ title, onChange, type }) => {
  return (
    <div>
      <div className="mb-2 text-md text-slate-500">{title}</div>
      <Input type={type} onChange={onChange} />
    </div>
  );
};

export default InputWithTitle;
