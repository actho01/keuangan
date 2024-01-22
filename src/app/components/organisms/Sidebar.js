'use client';

import React, { useState } from 'react';
import SideItem from '../molekules/SideItem';
import Dropdown from '../molekules/Dropdown';
import Image from 'next/image';
import { RiComputerLine } from 'react-icons/ri';
import { TbReportAnalytics } from 'react-icons/tb';
import { TbReportMoney } from 'react-icons/tb';
import Button from '../atoms/Button';
import Cookies from 'js-cookie';

const Sidebar = () => {
  const [selectedOption, setSelectedOption] = useState('Laporan Pengeluaran');

  const options = [
    { value: 'laporan', label: 'Laporan Pengeluaran' },
    {
      value: '/laporan/pengeluaran/operasional',
      label: 'Pengeluaran Operasional',
    },
    { value: '/laporan/pengeluaran/harian', label: 'Pengeluaran Harian' },
  ];

  const handleSelect = (value) => {
    setSelectedOption(value);
  };

  const handleLogout = () => {
    Cookies.remove('token');
    Cookies.remove('User');

    window.location.href = '/login';
  };

  return (
    <nav className="flex flex-col justify-between min-h-screen p-1 shadow-xl">
      <div>
        <div className="flex items-center justify-center h-20 text-white">
          <Image
            src={'/dafema-logo.png'}
            width={120}
            height={50}
            alt="dafema"
          />
        </div>
        <SideItem text={'Dashboard'} link={'/'}>
          <RiComputerLine />
        </SideItem>
        <SideItem text={'Laporan Pemasukan '} link={'/laporan/pemasukan'}>
          <TbReportAnalytics />
        </SideItem>
        <Dropdown options={options} onSelect={handleSelect}>
          <TbReportMoney />
        </Dropdown>
      </div>
      <div className="flex justify-center p-4">
        <Button
          title={'Log Out'}
          variant={'putih'}
          onClick={() => handleLogout()}
        />
      </div>
    </nav>
  );
};

export default Sidebar;
