import React from 'react';
import TitlleOne from '../atoms/TitlleOne';
import Link from 'next/link';

const SideItem = ({ text, link }) => {
  return (
    <Link
      href={link}
      className="w-full p-2 text-white transition-all duration-300 rounded hover:bg-white hover:text-primary"
    >
      <TitlleOne text={text} />
    </Link>
  );
};

export default SideItem;
