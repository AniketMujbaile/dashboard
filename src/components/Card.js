import React from 'react';
import { Line } from 'react-chartjs-2';

const Card = ({ title, value, change, chartData }) => {
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
    elements: {
      line: {
        tension: 0.4,
        borderColor: '#10B981',
        borderWidth: 2,
      },
      point: {
        radius: 0,
      },
    },
  };

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h2 className="text-sm text-gray-600 mb-1">{title}</h2>
          <p className="text-2xl font-bold">{value}</p>
          <p className={`text-sm ${change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
            {change >= 0 ? '↑' : '↓'} {Math.abs(change)}% last mth
          </p>
        </div>
        <div className="w-24 h-12">
          <Line
            data={{
              labels: chartData.map(d => d.month),
              datasets: [{
                data: chartData.map(d => d.value),
                fill: false,
              }],
            }}
            options={chartOptions}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;