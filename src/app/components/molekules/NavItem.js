import React from 'react';
import TitlleOne from '../atoms/TitlleOne';
import Link from 'next/link';

const NavItem = ({ text, link }) => {
  return (
    <Link
      href={link}
      className="text-black transition-all duration-300 cursor-pointer hover:text-primary"
    >
      <TitlleOne text={text} />
    </Link>
  );
};

export default NavItem;
