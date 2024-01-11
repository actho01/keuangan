'use client';

import React, { useState } from 'react';
import SideItem from '../molekules/SideItem';
import Dropdown from '../molekules/Dropdown';
import Image from 'next/image';
import { RiComputerLine } from 'react-icons/ri';
import { TbReportAnalytics } from 'react-icons/tb';
import { TbReportMoney } from 'react-icons/tb';

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
    <nav className="flex flex-col min-h-screen p-1 shadow-xl">
      <div className="flex items-center justify-center h-20 text-white">
        <Image src={'/dafema-logo.png'} width={120} height={50} alt="dafema" />
      </div>
      <SideItem text={'Dashboard'} link={'#'}>
        <RiComputerLine />
      </SideItem>
      <SideItem text={'Laporan Pemasukan '} link={'#'}>
        <TbReportAnalytics />
      </SideItem>
      <Dropdown options={options} onSelect={handleSelect}>
        <TbReportMoney />
      </Dropdown>
    </nav>
  );
};

export default Sidebar;
