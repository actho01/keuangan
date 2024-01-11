import React from 'react';
import TitlleOne from '../atoms/TitlleOne';
import Link from 'next/link';

const SideItem = ({ text, link, children }) => {
  return (
    <Link
      href={link}
      className="flex items-center w-full p-2 px-4 space-x-3 text-black transition-all duration-300 rounded hover:bg-primary"
    >
      <div>{children}</div> <TitlleOne text={text} />
    </Link>
  );
};

export default SideItem;
