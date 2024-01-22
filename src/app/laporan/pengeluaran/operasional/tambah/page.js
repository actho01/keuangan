'use client';

import AddPengeluaranOperasionalApi from '@/api/laporan/pengeluaran/AddPengeluaranOperasional';
import InputTitle from '@/app/components/atoms/InputTitle';
import SelectField from '@/app/components/atoms/SelectField';
import UserTemplate from '@/app/components/templates/UserTemplate';
import { Snackbar } from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import React, { useState } from 'react';

const TambahPengeluaran = () => {
  const [kategori, setKategori] = useState('Finance');
  const [deskripsi, setDeskripsi] = useState('');
  const [value, setValue] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertSeverity, setAlertSeverity] = useState('success');
  const [alertMessage, setAlertMessage] = useState('');

  const handleAlertClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setShowAlert(false);
    setAlertMessage('');
  };

  const handleTambahPengeluaran = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await AddPengeluaranOperasionalApi({
        kategori,
        deskripsi,
        value,
      });

      if (res.status) {
        setAlertSeverity('success');
        setShowAlert(true);
        setAlertMessage(res.message);
        setKategori('Finance');
        setDeskripsi('');
        setValue('');
      } else {
        setAlertSeverity('error');
        setShowAlert(true);
        setAlertMessage(`Error ${res.message}`);
      }
    } catch (error) {
      setAlertSeverity('error');
      setShowAlert(true);
      setAlertMessage(`Error ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const categoryOptions = [
    { label: 'Finance', value: 'Finance' },
    { label: 'Kereta', value: 'Kereta' },
  ];

  return (
    <UserTemplate page={'Tambah Laporan Pemasukan'}>
      <section className="p-4">
        <form
          onSubmit={handleTambahPengeluaran}
          className="p-3 rounded-lg shadow-lg bg-abu bg-opacity-30"
        >
          <SelectField
            label="Kategori"
            id="kategori"
            name="kategori"
            value={kategori}
            options={categoryOptions}
            onChange={(e) => setKategori(e.target.value)}
          />

          <InputTitle
            label="Deskripsi"
            id="deskripsi"
            name="deskripsi"
            value={deskripsi}
            onChange={(e) => setDeskripsi(e.target.value)}
            type="textarea"
          />

          <InputTitle
            label="Value"
            id="value"
            name="value"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />

          <div className="mt-4">
            <button
              type="submit"
              className="inline-flex items-center px-4 py-2 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Tambah'}
            </button>
          </div>
        </form>
        <Snackbar
          open={showAlert}
          autoHideDuration={4000}
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
      </section>
    </UserTemplate>
  );
};

export default TambahPengeluaran;
