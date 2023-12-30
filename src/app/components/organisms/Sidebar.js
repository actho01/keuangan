'use client';

import React, { useState } from 'react';
import SideItem from '../molekules/SideItem';
import Dropdown from '../molekules/Dropdown';

const Sidebar = () => {
  const [selectedOption, setSelectedOption] = useState('Laporan Pengeluaran');

  const options = [
    { value: 'laporan', label: 'Laporan Pengeluaran' },
    { value: 'pengeluaran-operasional', label: 'Pengeluaran Operasional' },
    { value: 'pengeluaran-harian', label: 'Pengeluaran Harian' },
  ];

  const handleSelect = (value) => {
    setSelectedOption(value);
  };

  return (
    <nav className="flex flex-col min-h-screen p-1 bg-black">
      <div>
        <img src='images/dafema-logo.png'></img>
      </div>
      <SideItem text={'Dashboard'} link={'#'} />
      <SideItem text={'Laporan Pemasukan '} link={'#'} />
      <Dropdown options={options} onSelect={handleSelect} />
      <SideItem text={'Profit'} link={'#'} />
    </nav>
  );
};

export default Sidebar;
