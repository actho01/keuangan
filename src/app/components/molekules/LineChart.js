import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

const LineCharts = ({ data, pv, uv }) => {
  return (
    <LineChart id="#" width={600} height={300} data={data}>
      <XAxis dataKey="name" />
      <YAxis />
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey={pv}
        stroke="#E7483F"
        activeDot={{ r: 8 }}
      />
      <Line type="monotone" dataKey={uv} stroke="#82ca9d" />
    </LineChart>
  );
};

export default LineCharts;
