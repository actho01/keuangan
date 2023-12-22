import React from 'react';

const TitlleOne = ({ text, variant }) => {
  let textColor;
  if (variant === 'hitam') {
    textColor = `text-black`;
  }
  if (variant === 'putih') {
    textColor = `text-white hover:text-primary`;
  }
  return <div className={`font-medium text-sm  ${textColor}`}>{text}</div>;
};

export default TitlleOne;
