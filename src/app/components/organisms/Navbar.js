import React, { useEffect, useState } from 'react';
import NavItem from '../molekules/NavItem';
import Cookies from 'js-cookie';

const Navbar = ({ page }) => {
  const [user, setUser] = useState({});
  useEffect(() => {
    const fetchData = () => {
      try {
        const token = Cookies.get('token');
        const User = Cookies.get('User');

        if (!token) {
          window.location.href = '/login';
        }

        if (User) {
          setUser(JSON.parse(User));
        }
      } catch (error) {
        console.error('Error retrieving token or user:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <nav
      className="flex items-center justify-between w-full px-8 py-6 space-x-5 shadow-md"
      style={{
        background: 'linear-gradient(45deg, #FFD700, #1E90FF, #FF4500)',
      }}
    >
      <NavItem text={page} link={'#'} />
      <NavItem text={`Selamat Datang, ${user.name}`} link={'#'} />
    </nav>
  );
};

export default Navbar;
