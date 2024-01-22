// EditPengeluaran.js

import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import InputTitle from '../atoms/InputTitle';
import SelectField from '../atoms/SelectField';
import { Snackbar } from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import UpdatePengeluaranApi from '@/api/laporan/pengeluaran/UpdatePengeluaran';

const EditPengeluaran = ({ isOpen, onClose, selectedItem }) => {
  const [id, setId] = useState('');
  const [kategori, setKategori] = useState('');
  const [deskripsi, setDeskripsi] = useState('');
  const [value, setValue] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertSeverity, setAlertSeverity] = useState('success');
  const [alertMessage, setAlertMessage] = useState('');

  useEffect(() => {
    if (selectedItem) {
      setId(selectedItem.id || '');
      setKategori(selectedItem.kategori || '');
      setDeskripsi(selectedItem.deskripsi || '');
      setValue(selectedItem.value || '');
    }
  }, [selectedItem]);

  const categoryOptions = [
    { label: 'Finance', value: 'Finance' },
    { label: 'Kereta', value: 'Kereta' },
  ];

  const handleEditLaporan = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await UpdatePengeluaranApi({
        id,
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
      window.location.reload();
    }
  };

  const handleAlertClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setShowAlert(false);
    setAlertMessage('');
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Edit Modal"
      ariaHideApp={false}
    >
      <div className="flex justify-end">
        <AiOutlineCloseCircle
          className="mb-5 text-3xl cursor-pointer text-secondary"
          onClick={onClose}
        />
      </div>

      <form
        className="p-3 rounded-lg shadow-lg bg-abu bg-opacity-30"
        onSubmit={handleEditLaporan}
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
            {isSubmitting ? 'Submitting...' : 'Update'}
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
    </Modal>
  );
};

export default EditPengeluaran;
