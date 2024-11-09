import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import { Line, Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import { Bell, Search, AlertCircle, LayoutDashboard } from 'lucide-react';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const Dashboard = () => {
  const [selectedTab, setSelectedTab] = useState('Market Analysis');

  // Sample data for cards
  const cardData = [
    {
      title: "Today's revenue",
      value: "$1,280",
      change: 15,
      trend: Array.from({ length: 7 }, () => Math.random() * 100)
    },
    {
      title: "Today's orders",
      value: "14",
      change: 10,
      trend: Array.from({ length: 7 }, () => Math.random() * 100)
    },
    {
      title: "Avg. order value",
      value: "$91.42",
      change: 20,
      trend: Array.from({ length: 7 }, () => Math.random() * 100)
    }
  ];

  // Sample data for market trend
  const marketTrendData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Your Position in Market',
        data: [65, 67, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79],
        borderColor: '#FF6B6B',
        tension: 0.4,
      },
      {
        label: 'Current Market',
        data: [60, 62, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74],
        borderColor: '#4CAF50',
        tension: 0.4,
      },
    ],
  };

  // Sample data for industry trends
  const industryTrendData = {
    labels: ['Wooden Floor', 'Pattern Tiles', 'Stone Textured tiles'],
    datasets: [{
      data: [49, 32, 27],
      backgroundColor: ['#4CAF50', '#2196F3', '#FFC107'],
      borderWidth: 0,
    }],
  };

  // Visibility data
  const visibilityData = {
    impressions: { value: 4862, change: 6.2 },
    views: { value: 2671, change: 8.6 },
    clicks: { value: 822, change: 9.1 },
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Navbar />
      
      <div className="flex-1 ml-16">
        {/* Header */}
        <header className="bg-white shadow-sm px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-8">
              <h1 className="text-2xl font-semibold">Dashboard</h1>
              <div className="flex space-x-6">
                {['Market Analysis', 'Performance'].map((tab) => (
                  <button
                    key={tab}
                    className={`pb-2 ${
                      selectedTab === tab
                        ? 'text-blue-600 border-b-2 border-blue-600'
                        : 'text-gray-500'
                    }`}
                    onClick={() => setSelectedTab(tab)}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Search size={18} />
              <button className="px-4 py-2 flex items-center space-x-2 border rounded-lg">
                <LayoutDashboard size={18} />
                <span>Customize</span>
              </button>
              <button className="px-4 py-2 flex items-center space-x-2 border rounded-lg">
                <Bell size={18} />
                <span>Export</span>
              </button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="p-6">
          {/* Metrics Cards */}
          <div className="grid grid-cols-3 gap-6 mb-6">
            {cardData.map((card, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-sm text-gray-600">{card.title}</h3>
                <div className="flex items-center justify-between mt-2">
                  <div>
                    <p className="text-2xl font-semibold">{card.value}</p>
                    <p className="text-sm text-green-500">
                      ↑ {card.change}% last mth
                    </p>
                  </div>
                  <div className="w-24 h-12">
                    <Line
                      data={{
                        labels: card.trend.map((_, i) => i),
                        datasets: [{
                          data: card.trend,
                          borderColor: '#10B981',
                          tension: 0.4,
                          pointRadius: 0,
                        }],
                      }}
                      options={{
                        plugins: { legend: { display: false } },
                        scales: {
                          x: { display: false },
                          y: { display: false }
                        },
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Marketing Alert */}
          <div className="bg-orange-50 border border-orange-100 rounded-lg p-4 mb-6">
            <div className="flex items-center space-x-2">
              <AlertCircle className="text-orange-500" size={20} />
              <p className="text-orange-800">
                Your customer market is increasing! Set up Ad Campaign to reach your customers
              </p>
            </div>
          </div>

          {/* Market Trends */}
          <div className="grid grid-cols-2 gap-6 mb-6">
            {/* Gauge Chart */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-4">Industry Opportunities</h3>
              <div className="relative h-48">
                {/* Add your gauge chart component here */}
                <p className="text-center mt-4">
                  You can achieve <span className="text-green-500 font-semibold">44%</span> more opportunities in market
                </p>
              </div>
            </div>

            {/* Line Chart */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Current Market Trend</h3>
                <select className="border rounded-lg px-3 py-1">
                  <option>12 months</option>
                </select>
              </div>
              <div className="flex space-x-4 mb-4">
                {['Category', 'Products', 'Cross Selling', 'Geography'].map((filter) => (
                  <button
                    key={filter}
                    className="text-sm text-gray-500 hover:text-gray-700"
                  >
                    {filter}
                  </button>
                ))}
              </div>
              <Line data={marketTrendData} options={{
                plugins: {
                  legend: {
                    position: 'bottom',
                  },
                },
                scales: {
                  y: {
                    beginAtZero: true,
                  },
                },
              }} />
            </div>
          </div>

          {/* Bottom Section */}
          <div className="grid grid-cols-2 gap-6">
            {/* Industry Trends */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-4">Trending in your industry</h3>
              <div className="flex items-center space-x-8">
                <div className="w-48 h-48">
                  <Doughnut
                    data={industryTrendData}
                    options={{
                      plugins: {
                        legend: {
                          display: false,
                        },
                      },
                      cutout: '70%',
                    }}
                  />
                </div>
                <div className="space-y-4">
                  {[
                    { label: 'Wooden Floor', value: '49%', color: '#4CAF50' },
                    { label: 'Pattern Tiles', value: '32%', color: '#2196F3' },
                    { label: 'Stone Textured tiles', value: '27%', color: '#FFC107' },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center space-x-2">
                      <div
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: item.color }}
                      />
                      <span className="text-sm">{item.label}</span>
                      <span className="text-sm font-semibold">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Visibility Metrics */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-4">Visibility</h3>
              <div className="grid grid-cols-3 gap-4 mb-6">
                {Object.entries(visibilityData).map(([key, data]) => (
                  <div key={key}>
                    <h4 className="text-sm text-gray-600 capitalize">{key}</h4>
                    <p className="text-xl font-semibold mt-1">{data.value}</p>
                    <p className="text-sm text-green-500">↑ {data.change}%</p>
                  </div>
                ))}
              </div>
              <div className="h-32">
                <Line
                  data={{
                    labels: Array.from({ length: 12 }, (_, i) => i + 1),
                    datasets: [{
                      data: Array.from({ length: 12 }, () => Math.random() * 100),
                      borderColor: '#10B981',
                      tension: 0.4,
                    }],
                  }}
                  options={{
                    plugins: { legend: { display: false } },
                    scales: {
                      x: { display: false },
                      y: { display: false },
                    },
                  }}
                />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;