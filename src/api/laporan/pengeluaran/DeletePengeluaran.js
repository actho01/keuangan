import axios from 'axios';
import GetToken from '../../utils/GetToken';
import { urlLaporan } from '../../routes/laporan';

const DeletePengeluaranAi = async ({ id }) => {
  try {
    const res = await axios({
      method: 'DELETE',
      baseURL: `${urlLaporan}/pengeluaran?id=${id}`,
      headers: {
        Authorization: GetToken(),
      },
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

export default DeletePengeluaranAi;
