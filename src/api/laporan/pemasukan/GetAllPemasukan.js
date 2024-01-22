import axios from 'axios';
import GetToken from '../../utils/GetToken';
import { urlLaporan } from '../../routes/laporan';

const GetAllPemasukan = async (params) => {
  try {
    const res = await axios({
      method: 'GET',
      baseURL: `${urlLaporan}/pemasukan`,
      headers: {
        Authorization: GetToken(),
      },
      params,
      timeout: 5000,
      timeoutErrorMessage: 'Request time out, coba lagi',
    });
    return res.data;
  } catch (error) {
    if (error.code === 'ECONNABORTED') {
      console.log(error.message);
    } else {
      console.log(error);
      return error.response.data;
    }
  }
};

export default GetAllPemasukan;
