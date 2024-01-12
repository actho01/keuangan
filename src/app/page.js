'use client';
import Image from 'next/image';
import UserTemplate from './components/templates/UserTemplate';
import LineCharts from './components/molekules/LineChart';
import PieCharts from './components/molekules/PieChart';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';

export default function Home() {
  const data = [
    { name: 'Jan', pemasukan: 4000, pengeluaran: 2400, amt: 2400 },
    { name: 'Feb', pemasukan: 3000, pengeluaran: 1398, amt: 2210 },
    { name: 'Mar', pemasukan: 2000, pengeluaran: 9800, amt: 2290 },
    { name: 'Apr', pemasukan: 2780, pengeluaran: 3908, amt: 2000 },
    { name: 'May', pemasukan: 1890, pengeluaran: 4800, amt: 2181 },
    { name: 'Jun', pemasukan: 2390, pengeluaran: 3800, amt: 2500 },
    { name: 'Jul', pemasukan: 3490, pengeluaran: 4300, amt: 2100 },
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
  }));

  return (
    <UserTemplate>
      <section className="flex justify-between w-full px-5 mt-5">
        <div className="w-3/5 rounded shadow-md bg-dark">
          <div className="p-4 px-14">
            <p className="text-xs uppercase text-slate-400">Overview</p>
            <p className="text-lg font-medium text-white">Summary</p>
          </div>
          <div className="flex items-center justify-center w-full">
            <LineCharts data={data} pv="pengeluaran" uv="pemasukan" />
          </div>
        </div>
        <div className="flex flex-col items-center p-2 rounded shadow-md">
          <div className="font-medium">Laba Rugi</div>
          <PieCharts data={dataPie} />
        </div>
      </section>
      <section className="p-5">
        <div className="rounded-lg shadow-md">
          <p className="p-4 font-light">Summary</p>
          <table className="w-full ">
            <thead className="bg-light">
              <tr className="font-light border-y">
                <th className="p-2 text-xs font-normal text-start text-abu">
                  BULAN
                </th>
                <th className="p-2 text-xs font-normal text-abu">PEMASUKAN</th>
                <th className="p-2 text-xs font-normal text-abu">
                  PENGELUARAN
                </th>
                <th className="p-2 text-xs font-normal text-abu">%</th>
              </tr>
            </thead>
            <tbody>
              {dataTable.map((item) => (
                <tr key={item.id}>
                  <td className="p-2 text-sm font-medium">{item.bulan}</td>
                  <td className="p-2 text-sm font-medium text-center">
                    {item.pemasukan}
                  </td>
                  <td className="p-2 text-sm font-medium text-center">
                    {item.pengeluaran}
                  </td>
                  <td className="flex items-center justify-center p-2 text-sm font-medium text-center">
                    {item.percentage >= 0 ? (
                      <span className="text-green-500">
                        <FaArrowUp />
                      </span>
                    ) : (
                      <span className="text-red-500">
                        <FaArrowDown />
                      </span>
                    )}
                    {item.percentage.toFixed(3)}%
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </UserTemplate>
  );
}
