import React from 'react';
import Navbar from '../organisms/Navbar';
import Footer from '../organisms/Footer';
import Sidebar from '../organisms/Sidebar';

const UserTemplate = ({ children }) => {
  return (
    <main className="flex w-full min-h-screen bg-white">
      <div className=" w-1/8">
        <Sidebar />
      </div>
      <div className="w-full ">
        <Navbar />
        <div>{children}</div>
      </div>
    </main>
  );
};

export default UserTemplate;
