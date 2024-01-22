import axios from 'axios';
import { urlLaporan } from '../../routes/laporan';

const UpdatePemasukanApi = async ({ id, kategori, deskripsi, value }) => {
  try {
    const data = {
      kategori,
      deskripsi,
      value,
    };
    const res = await axios({
      baseURL: `${urlLaporan}/pemasukan?id=${id}`,
      method: 'PUT',
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

export default UpdatePemasukanApi;
