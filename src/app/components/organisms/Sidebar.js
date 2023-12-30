import React from 'react';
import SideItem from '../molekules/SideItem';

const Sidebar = () => {
  return (
    <nav className="flex flex-col min-h-screen p-1 bg-black">
      <div className="h-20 p-2 text-white">Logo</div>
      <SideItem text={'Dashboard'} link={'#'} />
      <SideItem text={'Laporan Pemasukan '} link={'#'} />
      <SideItem text={'Laporan Pengeluaran'} link={'#'} />
      {/* pengeluaran nanti dibuat dropdown yang didalamnya ada pengeluaran operasional dan pengeluaran harian */}
      <SideItem text={'Profit'} link={'#'} />
    </nav>
  );
};

export default Sidebar;
