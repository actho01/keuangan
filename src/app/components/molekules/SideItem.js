import React from 'react';
import TitlleOne from '../atoms/TitlleOne';
import Link from 'next/link';

const SideItem = ({ text, link }) => {
  return (
    <Link href={link} className="w-full p-2 rounded hover:bg-white">
      <TitlleOne text={text} variant={'putih'} />
    </Link>
  );
};

export default SideItem;
