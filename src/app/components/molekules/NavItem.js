import React from 'react';

import Link from 'next/link';
import TitleTwo from '../atoms/TitleTwo';

const NavItem = ({ text, link }) => {
  return (
    <Link
      href={link}
      className="text-xl text-white transition-all duration-300 cursor-pointer hover:underline"
    >
      <TitleTwo text={text} />
    </Link>
  );
};

export default NavItem;
