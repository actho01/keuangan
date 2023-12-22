import React from 'react';
import Navbar from '../organisms/Navbar';
import Footer from '../organisms/Footer';
import Sidebar from '../organisms/Sidebar';

const UserTemplate = ({ children }) => {
  return (
    <main className="flex w-full min-h-screen">
      <div className="w-1/5">
        <Sidebar />
      </div>
      <div className="w-5/6">
        <Navbar />
        <section className="p-5">{children}</section>
      </div>
    </main>
  );
};

export default UserTemplate;
