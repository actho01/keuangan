import React from 'react';
import NavItem from '../molekules/NavItem';

const Navbar = ({ page }) => {
  return (
    <nav
      className="flex items-center justify-between w-full px-8 py-6 space-x-5 shadow-md"
      style={{
        background: 'linear-gradient(45deg, #FFD700, #1E90FF, #FF4500)',
      }}
    >
      <NavItem text={page} link={'#'} />
      <NavItem text={'Selamat Datang, Admin'} link={'#'} />
    </nav>
  );
};

export default Navbar;
