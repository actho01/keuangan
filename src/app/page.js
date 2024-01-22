'use client';
import UserTemplate from './components/templates/UserTemplate';
import LineCharts from './components/molekules/LineChart';
import PieCharts from './components/molekules/PieChart';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import GetAllPemasukan from '@/api/laporan/pemasukan/GetAllPemasukan';
import GetAllPengeluaranApi from '@/api/laporan/pengeluaran/GetAllPengeluaran';
import GetSummaryPemasukanApi from '@/api/laporan/pemasukan/GetSummaryPemasukan';

export default function Home() {
  const [pemasukan, setPemasukan] = useState([]);
  const [pengeluaran, setPengeluaran] = useState([]);
  const [pieChartData, setPieChartData] = useState([]);
  //const [tableData, setTableData] = useState([]);
  const [lineChartData, setLineChartData] = useState([]);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);

  const fetchPemasukan = async () => {
    try {
      const res = await GetSummaryPemasukanApi();

      if (res.status) {
        setPemasukan(res.data.pemasukan);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  };

  const fetchPengeluaran = async () => {
    try {
      const res = await GetAllPengeluaranApi();

      if (res.status) {
        setPengeluaran(res.data.Pengeluaran);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await fetchPemasukan();
      await fetchPengeluaran();
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchLineChartData = () => {
      const pemasukanMap = new Map(
        pemasukan.map((item) => [
          `${item.year}-${item.month}`,
          item.totalPemasukan,
        ]),
      );
      const pengeluaranMap = new Map(
        pengeluaran.map((item) => [
          `${item.year}-${item.month}`,
          item.totalPengeluaran,
        ]),
      );

      const months = Array.from(
        new Set([...pemasukanMap.keys(), ...pengeluaranMap.keys()]),
      );

      const transformedData = months.map((month) => {
        const [year, monthName] = month.split('-');
        const pemasukanValue = pemasukanMap.get(month) || '0';
        const pengeluaranValue = pengeluaranMap.get(month) || '0';

        return {
          name: monthName.substring(0, 3),
          year: parseInt(year),
          pemasukan: parseInt(pemasukanValue),
          pengeluaran: parseInt(pengeluaranValue),
          amt: parseInt(pemasukanValue) + parseInt(pengeluaranValue),
        };
      });

      transformedData.sort((a, b) => {
        if (a.year !== b.year) {
          return a.year - b.year;
        }
        const monthOrder = [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec',
        ];
        return monthOrder.indexOf(a.name) - monthOrder.indexOf(b.name);
      });

      setLineChartData(transformedData);
    };

    if (pemasukan.length > 0 && pengeluaran.length > 0) {
      fetchLineChartData();
    }
  }, [pemasukan, pengeluaran]);

  const fetchPieChartData = () => {
    try {
      const totalPemasukan = pemasukan.reduce(
        (sum, item) => sum + parseInt(item.totalPemasukan),
        0,
      );

      const totalPengeluaran = pengeluaran.reduce(
        (sum, item) => sum + parseInt(item.totalPengeluaran),
        0,
      );

      setPieChartData([
        { name: 'Pemasukan', value: totalPemasukan },
        { name: 'Pengeluaran', value: totalPengeluaran },
      ]);
    } catch (error) {
      console.error('Error calculating Pie Chart data:', error);
    }
  };

  useEffect(() => {
    fetchPieChartData();
  }, [pemasukan, pengeluaran]);

  const tableData = lineChartData.map((item) => {
    const percentage =
      item.pemasukan !== 0
        ? ((item.pengeluaran - item.pemasukan) / item.pemasukan) * 100
        : 0;

    return {
      id: `${item.year}-${item.name}`,
      bulan: `${item.name} ${item.year}`,
      pemasukan: item.pemasukan,
      pengeluaran: item.pengeluaran,
      percentage: isFinite(percentage) ? percentage.toFixed() : 0,
    };
  });
  return (
    <UserTemplate page={'Dashboard'}>
      <section className="flex justify-between w-full px-5 mt-5">
        <div className="w-3/5 rounded shadow-md bg-dark">
          <div className="p-4 px-14">
            <div className="text-xs uppercase text-slate-400">Overview</div>
            <div className="text-lg font-medium text-white">Summary</div>
          </div>
          <div className="flex items-center justify-center w-full">
            <LineCharts data={lineChartData} pv="pengeluaran" uv="pemasukan" />
          </div>
        </div>
        <div className="flex flex-col items-center p-2 rounded shadow-md">
          <div className="font-medium">Laba Rugi</div>
          <PieCharts data={pieChartData} />
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
              {tableData.map((item) => (
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
                    {item.percentage}%
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
