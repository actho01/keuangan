import React from 'react';
import NavItem from '../molekules/NavItem';

const Navbar = () => {
  return (
    <nav className="flex px-3 py-6 space-x-5 shadow-md">
      <NavItem text={'Home'} link={'#'} />
      <NavItem text={'Home'} link={'#'} />
      <NavItem text={'Home'} link={'#'} />
      <div className="flex items-center space-x-2">
      <input
        type="text"
        placeholder="Search here..."
        className="py-1 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
      />
      <button
        
        className="px-5 py-1 text-black bg-white rounded-md hover:bg-blue-600 focus:outline-none border shadow-lg"
      >
        Search
      </button>
    </div>
    <div className="container mx-auto my-auto">
      <div className="flex justify-end items-center">
        <p> nanti disini userlink</p>
      </div>
    </div>
    </nav>
    
  );
};

export default Navbar;
