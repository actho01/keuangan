import React from 'react';
import NavItem from '../molekules/NavItem';

const Navbar = () => {
  return (
    <nav className="flex px-3 py-6 space-x-5 shadow-md">
      <NavItem text={'Home'} link={'#'} />
      <NavItem text={'Home'} link={'#'} />
      <NavItem text={'Home'} link={'#'} />
    </nav>
  );
};

export default Navbar;
