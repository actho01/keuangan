'use client';
import GetAllPemasukan from '@/api/laporan/pemasukan/GetAllPemasukan';
import Button from '@/app/components/atoms/Button';
import ButtonSmall from '@/app/components/atoms/ButtonSmall';
import UserTemplate from '@/app/components/templates/UserTemplate';
import React, { useEffect, useState } from 'react';
import { FaArrowDown, FaArrowUp, FaChevronRight } from 'react-icons/fa';
import { FaChevronLeft } from 'react-icons/fa';
import { format } from 'date-fns';
import { FaRegTrashAlt } from 'react-icons/fa';
import { AiOutlineEdit } from 'react-icons/ai';
import DeletePemasukanApi from '@/api/laporan/pemasukan/DeletePemasukanApi';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { CircularProgress } from '@mui/material';

import EditModal from '@/app/components/molekules/EditModal';

const LaporanPemasukan = () => {
  const [pemasukan, setPemasukan] = useState([]);
  const [isDelete, setIsDelete] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [count, setCount] = useState(0);
  const [showAlert, setShowAlert] = useState(false);
  const [alertSeverity, setAlertSeverity] = useState('success');
  const [alertMessage, setAlertMessage] = useState('');
  const [loading, setLoading] = useState(true);

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleAlertClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setShowAlert(false);
    setAlertMessage('');
  };

  const toggleDelete = () => {
    setIsDelete(!isDelete);
  };

  const toggleEdit = () => {
    setIsEdit(!isEdit);
  };

  const handleEdit = (item) => {
    setIsEditModalOpen(!isEditModalOpen);
    setSelectedItem(item);
  };

  const fetchPemasukan = async () => {
    try {
      const res = await GetAllPemasukan();
      console.log('res', res);
      if (res.status) {
        setPemasukan(res.data.pemasukan);
        setCount(res.data.count);
        setTimeout(() => {
          setLoading(false);
        }, 1200);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchPemasukan();
  }, []);

  const handleDelete = async (id) => {
    try {
      const res = await DeletePemasukanApi({ id });
      if (res.status) {
        setAlertSeverity('success');
        setShowAlert(true);
        setAlertMessage(res.message);
        setTimeout(() => {
          setShowAlert(false);
          setAlertMessage('');
          window.location.reload();
        }, 3000);
      } else {
        setAlertSeverity('error');
        setShowAlert(true);
        setAlertMessage(res.message);
        setTimeout(() => {
          setShowAlert(false);
          setAlertMessage('');
        }, 3000);
      }
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };

  const handleEditLaporan = async (e) => {
    e.preventDefault();
  };

  const itemsPerPage = 10;
  const totalPages = Math.ceil((pemasukan.length ?? 1) / itemsPerPage);

  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // const currentData = pemasukan.slice(startIndex, endIndex);

  // Fungsi untuk mengubah halaman
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <UserTemplate page={'Laporan Pemasukan'}>
      <div className="p-4">
        <section className="flex flex-col items-end space-y-3">
          <fieldset className="flex w-1/6 space-x-4">
            <ButtonSmall
              variant={'putih'}
              title={'Edit'}
              onClick={toggleEdit}
            />
            <ButtonSmall
              variant={'merah'}
              title={'Hapus'}
              onClick={toggleDelete}
            />
          </fieldset>
          <fieldset className="w-1/6 ">
            <Button
              variant={'putih'}
              title={'TAMBAH LAPORAN'}
              onClick={() =>
                (window.location.href = '/laporan/pemasukan/tambah')
              }
            />
          </fieldset>
        </section>
        {loading ? (
          <div className="flex justify-center mt-4">
            <CircularProgress />
          </div>
        ) : count <= 0 ? (
          <p className="text-center text-red-500">
            Tidak ada data laporan pemasukan
          </p>
        ) : (
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
                  {isDelete || isEdit ? (
                    <th className="p-1 text-xs font-normal border border-black text-abu">
                      <div className="p-1 text-center border">Aksi</div>
                    </th>
                  ) : null}
                </tr>
              </thead>
              <tbody>
                {pemasukan.map((item, index) => (
                  <tr
                    key={index}
                    className="border border-black rounded text-abu"
                  >
                    <td className="p-2 text-sm text-center">{index + 1}</td>
                    <td className="p-2 text-sm text-center">{item.kategori}</td>
                    <td className="p-2 text-sm text-center">
                      {item.deskripsi}
                    </td>
                    <td className="flex items-center justify-center p-1 text-sm text-center">
                      <div className="w-3/4 border rounded">
                        {format(new Date(item.createdAt), 'dd/MM/yyyy')}
                      </div>
                    </td>
                    <td className="p-2 text-sm text-center">
                      Rp. {item.value}
                    </td>
                    {isDelete || isEdit ? (
                      <td className="flex items-center justify-center text-sm">
                        {isDelete && (
                          <div className="p-2 mr-2 rounded">
                            <FaRegTrashAlt
                              className="cursor-pointer text-secondary text-opacity-65 hover:text-opacity-100"
                              onClick={() => handleDelete(item.id)}
                            />
                          </div>
                        )}
                        {isEdit && (
                          <div className="p-2 rounded">
                            <AiOutlineEdit
                              className="text-lg cursor-pointer text-third text-opacity-80 hover:text-opacity-100"
                              onClick={() => handleEdit(item)}
                            />
                          </div>
                        )}
                      </td>
                    ) : null}
                  </tr>
                ))}
              </tbody>
            </table>
            <EditModal
              isOpen={isEditModalOpen}
              onClose={() => setIsEditModalOpen(false)}
              selectedItem={selectedItem}
            />
          </section>
        )}

        <Snackbar
          open={showAlert}
          autoHideDuration={3000}
          onClose={handleAlertClose}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        >
          <MuiAlert
            elevation={6}
            variant="filled"
            onClose={handleAlertClose}
            severity={alertSeverity}
          >
            {alertMessage}
          </MuiAlert>
        </Snackbar>

        <section className="flex justify-center mt-3">
          <fieldset className="flex items-center space-x-5 text-abu">
            <FaChevronLeft
              className="cursor-pointer"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
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
              disabled={currentPage === 1}
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

export default LaporanPemasukan;
