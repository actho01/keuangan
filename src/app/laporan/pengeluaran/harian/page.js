'use client';
import Button from '@/app/components/atoms/Button';
import ButtonSmall from '@/app/components/atoms/ButtonSmall';
import UserTemplate from '@/app/components/templates/UserTemplate';
import React, { useState } from 'react';
import { FaArrowDown, FaArrowUp, FaChevronRight } from 'react-icons/fa';
import { FaChevronLeft } from 'react-icons/fa';

const LaporanPengeluaranHarian = () => {
  const data = [
    {
      name: 'Jan',
      pemasukan: 4000,
      pengeluaran: 2400,
      amt: 2400,
      value: '1.000.000',
    },
    {
      name: 'Feb',
      pemasukan: 3000,
      pengeluaran: 1398,
      amt: 2210,
      value: '1.000.000',
    },
    {
      name: 'Mar',
      pemasukan: 2000,
      pengeluaran: 9800,
      amt: 2290,
      value: '1.000.000',
    },
    {
      name: 'Apr',
      pemasukan: 2780,
      pengeluaran: 3908,
      amt: 2000,
      value: '1.000.000',
    },
    {
      name: 'May',
      pemasukan: 1890,
      pengeluaran: 4800,
      amt: 2181,
      value: '1.000.000',
    },
    {
      name: 'Jun',
      pemasukan: 2390,
      pengeluaran: 3800,
      amt: 2500,
      value: '1.000.000',
    },
    {
      name: 'Jul',
      pemasukan: 3490,
      pengeluaran: 4300,
      amt: 2100,
      value: '1.000.000',
    },
  ];
  const totalPemasukan = data.reduce(
    (total, entry) => total + entry.pemasukan,
    0,
  );
  const totalPengeluaran = data.reduce(
    (total, entry) => total + entry.pengeluaran,
    0,
  );
  const dataPie = [
    { name: 'Pemasukan', value: totalPemasukan },
    { name: 'Pengeluaran', value: totalPengeluaran },
  ];

  const dataTable = data.map((item, index) => ({
    id: index + 1,
    bulan: item.name,
    pemasukan: item.pemasukan,
    pengeluaran: item.pengeluaran,
    percentage: ((item.pemasukan - item.pengeluaran) / item.pemasukan) * 100,
    value: item.value,
  }));

  const itemsPerPage = 10;

  // Menghitung jumlah halaman
  const totalPages = Math.ceil(dataTable.length / itemsPerPage);

  // State untuk mengelola halaman saat ini
  const [currentPage, setCurrentPage] = useState(1);

  // Menghitung index awal dan akhir untuk item yang ditampilkan pada halaman saat ini
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Mendapatkan data yang sesuai dengan halaman saat ini
  const currentData = dataTable.slice(startIndex, endIndex);

  // Fungsi untuk mengubah halaman
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <UserTemplate page={'Pengeluaran Harian'}>
      <div className="p-4">
        <section className="flex flex-col items-end space-y-3">
          <fieldset className="flex w-1/6 space-x-4">
            <ButtonSmall variant={'putih'} title={'Edit'} />
            <ButtonSmall variant={'merah'} title={'Hapus'} />
          </fieldset>
          <fieldset className="w-1/6 ">
            <Button variant={'putih'} title={'TAMBAH LAPORAN'} />
          </fieldset>
        </section>
        <section className="w-full mt-3">
          <table className="w-full ">
            <thead className="bg-white border border-black rounded-t-xl">
              <tr className="p-1 font-light border ">
                <th className="w-20 p-1 text-xs font-normal border border-black text-start text-abu">
                  <div className="p-1 text-center border ">Nomor</div>
                </th>
                <th className="p-1 text-xs font-normal border border-black text-abu">
                  <div className="p-1 text-center border">Kategori</div>
                </th>
                <th className="p-1 text-xs font-normal border border-black text-abu">
                  <div className="p-1 text-center border">Deskripsi</div>
                </th>
                <th className="p-1 text-xs font-normal border border-black text-abu">
                  <div className="p-1 text-center border">Created Date</div>
                </th>
                <th className="p-1 text-xs font-normal border border-black text-abu">
                  <div className="p-1 text-center border">Value</div>
                </th>
              </tr>
            </thead>
            <tbody>
              {dataTable.map((item) => (
                <tr
                  key={item.id}
                  className="border border-black rounded text-abu"
                >
                  <td className="p-2 text-sm text-center">{item.id}</td>
                  <td className="p-2 text-sm text-center">{item.pemasukan}</td>
                  <td className="p-2 text-sm text-center">
                    {item.pengeluaran}
                  </td>
                  <td className="flex items-center justify-center p-1 text-sm text-center">
                    <div className="w-3/4 border rounded">
                      {item.percentage}
                    </div>
                  </td>
                  <td className="p-2 text-sm text-center">Rp. {item.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
        <section className="flex justify-center mt-3">
          <fieldset className="flex items-center space-x-5 text-abu">
            <FaChevronLeft
              className="cursor-pointer"
              onClick={() => handlePageChange(currentPage - 1)}
            />
            <div className="flex space-x-3 ">
              {Array.from({ length: totalPages }, (_, index) => (
                <p
                  key={index + 1}
                  className={`cursor-pointer ${
                    currentPage === index + 1 ? 'text-primary' : ''
                  }`}
                  onClick={() => handlePageChange(index + 1)}
                >
                  {index + 1}
                </p>
              ))}
            </div>

            <FaChevronRight
              className="cursor-pointer"
              onClick={() => handlePageChange(currentPage + 1)}
            />
          </fieldset>
        </section>
        <section className="flex justify-end">
          <fieldset className="flex w-1/6 space-x-4 ">
            <ButtonSmall variant={'hijau'} title={'CETAK PDF'} />
            <ButtonSmall variant={'biru'} title={'PRINT'} />
          </fieldset>
        </section>
      </div>
    </UserTemplate>
  );
};

export default LaporanPengeluaranHarian;
