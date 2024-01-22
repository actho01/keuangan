import axios from 'axios';
import { urlLaporan } from '../../routes/laporan';

const AddPengeluaranOperasionalApi = async ({ kategori, deskripsi, value }) => {
  try {
    const data = {
      kategori,
      deskripsi,
      value,
    };
    const res = await axios({
      baseURL: `${urlLaporan}/pengeluaran-operasional`,
      method: 'POST',
      data,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      timeout: 10000,
      timeoutErrorMessage: 'Request time out, coba lagi',
    });
    return res.data;
  } catch (error) {
    if (error.code === 'ECONNABORTED') {
      console.log(error.message);
    } else {
      return error.response.data;
    }
  }
};

export default AddPengeluaranOperasionalApi;
