import React, { useEffect } from 'react';
import Navbar from '../organisms/Navbar';
import Footer from '../organisms/Footer';
import Sidebar from '../organisms/Sidebar';

const UserTemplate = ({ children, page }) => {
  return (
    <main className="flex w-full min-h-screen bg-white">
      <div className="h-auto w-1/8">
        <Sidebar />
      </div>
      <div className="w-full">
        <Navbar page={page} />
        <div>{children}</div>
        <div className="flex p-4 space-x-2 text-sm font-extralight">
          <span>© 2024</span>{' '}
          <span className="text-ungu">DAFEMATRANS LOGISTICS</span>
        </div>
      </div>
    </main>
  );
};

export default UserTemplate;
