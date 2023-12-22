import React from 'react';
import SideItem from '../molekules/SideItem';

const Sidebar = () => {
  return (
    <nav className="flex flex-col min-h-screen p-1 bg-black">
      <div className="h-20 p-2 text-white">Logo</div>
      <SideItem text={'Dashboard'} link={'#'} />
      <SideItem text={'Side 2'} link={'#'} />
    </nav>
  );
};

export default Sidebar;
