import React from 'react';
import { LineChart as Chart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const LineChart = ({ data, title }) => {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-lg font-bold mb-4">{title}</h2>
      <Chart width={800} height={400} data={data}>
        <XAxis dataKey="month" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="value" stroke="#8884d8" />
      </Chart>
    </div>
  );
};

export default LineChart;