import React, { useState } from 'react';
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
import { Bell, Search, AlertCircle, LayoutDashboard, MoreHorizontal } from 'lucide-react';

// Custom Gauge Chart Component
const GaugeChart = ({ value = 44, max = 100 }) => {
  const angle = (value / max) * 180;
  const radius = 80;
  const startAngle = -180;
  const endAngle = 0;
  
  const createArc = (start, end, radius) => {
    const startRad = (start * Math.PI) / 180;
    const endRad = (end * Math.PI) / 180;
    const x1 = radius * Math.cos(startRad);
    const y1 = radius * Math.sin(startRad);
    const x2 = radius * Math.cos(endRad);
    const y2 = radius * Math.sin(endRad);
    const largeArc = end - start <= 180 ? 0 : 1;
    return `M ${x1} ${y1} A ${radius} ${radius} 0 ${largeArc} 1 ${x2} ${y2}`;
  };

  return (
    <div className="w-full flex flex-col items-center">
      <div className="relative w-48 h-24">
        <svg viewBox="-100 -100 200 120" className="w-full transform">
          <path
            d={createArc(startAngle, endAngle, radius)}
            fill="none"
            stroke="#E5E7EB"
            strokeWidth="12"
            strokeLinecap="round"
          />
          <path
            d={createArc(startAngle, -180 + (value / max) * 180, radius)}
            fill="none"
            stroke="#047857"
            strokeWidth="12"
            strokeLinecap="round"
          />
          <path
            d={createArc(-180 + (value / max) * 180, -180 + ((value + 16) / max) * 180, radius)}
            fill="none"
            stroke="#6EE7B7"
            strokeWidth="12"
            strokeLinecap="round"
          />
          <line
            x1="0" y1="0" x2="0" y2="-80"
            stroke="#1F2937"
            strokeWidth="2"
            transform={`rotate(${angle - 90})`}
          />
          <circle cx="0" cy="0" r="4" fill="#1F2937" />
        </svg>
      </div>
      
      <div className="text-center mt-8">
        <p className="text-gray-600 text-sm">
          You can achieve <span className="text-emerald-700 font-semibold">{value}%</span> more opportunities in market
        </p>
      </div>
      
      <div className="mt-6 space-y-2">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-emerald-700" />
          <span className="text-sm text-gray-600">Your Position in Market</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-gray-200" />
          <span className="text-sm text-gray-600">Total Market Opportunities</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-emerald-200" />
          <span className="text-sm text-gray-600">Achievable Market Opportunities</span>
        </div>
      </div>
    </div>
  );
};

// Visibility Section Component
const VisibilitySection = () => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const data = {
    labels: months,
    datasets: [
      {
        data: [45, 47, 48, 50, 52, 53, 51, 54, 56, 55, 57, 60],
        borderColor: '#10B981',
        backgroundColor: 'rgba(16, 185, 129, 0.1)',
        tension: 0.4,
        fill: true,
        pointRadius: 0,
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      }
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        display: false,
        min: 0,
      }
    }
  };

  const metrics = [
    { label: 'Impressions', value: '4,862', change: 9.2 },
    { label: 'Views', value: '2,671', change: 6.6 },
    { label: 'Clicks', value: '822', change: 8.1 },
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm p-4 md:p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold">Visibility</h3>
        <button className="text-gray-400 hover:text-gray-600">
          <MoreHorizontal size={20} />
        </button>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-6">
        {metrics.map((metric, index) => (
          <div key={index} className="text-center">
            <p className="text-sm text-gray-600">{metric.label}</p>
            <p className="text-xl font-semibold mt-1">{metric.value}</p>
            <p className="text-sm text-green-500">↑ {metric.change}%</p>
          </div>
        ))}
      </div>

      <div className="h-48">
        <Line data={data} options={chartOptions} />
      </div>
    </div>
  );
};

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
      trend: Array.from({ length: 7 }, () => Math.random() * 100),
    },
    {
      title: "Today's orders",
      value: "14",
      change: 10,
      trend: Array.from({ length: 7 }, () => Math.random() * 100),
    },
    {
      title: "Avg. order value",
      value: "$91.42",
      change: 20,
      trend: Array.from({ length: 7 }, () => Math.random() * 100),
    },
  ];

  // Sample data for market trend
  const marketTrendData = {
    labels: [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
    ],
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
    datasets: [
      {
        data: [49, 32, 27],
        backgroundColor: ['#4CAF50', '#2196F3', '#FFC107'],
        borderWidth: 0,
      },
    ],
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      <Navbar />

      <div className="flex-1 md:ml-16">
        {/* Header */}
        <header className="bg-white shadow-sm px-4 md:px-6 py-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-8">
              <h1 className="text-2xl ml-12 font-semibold">Dashboard</h1>
              <div className="flex space-x-4 md:space-x-6">
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
            <div className="flex items-center space-x-2 md:space-x-4">
              <Search size={18} />
              <button className="px-2 md:px-4 py-2 flex items-center space-x-1 md:space-x-2 border rounded-lg">
                <LayoutDashboard size={18} />
                <span>Customize</span>
              </button>
              <button className="px-2 md:px-4 py-2 flex items-center space-x-1 md:space-x-2 border rounded-lg">
                <Bell size={18} />
                <span>Export</span>
              </button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="p-4 md:p-6">
          {/* Metrics Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6">
            {cardData.map((card, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-4 md:p-6">
                <h3 className="text-sm text-gray-600">{card.title}</h3>
                <div className="flex items-center justify-between mt-2">
                  <div>
                    <p className="text-xl md:text-2xl font-semibold">{card.value}</p>
                    <p className="text-sm text-green-500">
                      ↑ {card.change}% last mth
                    </p>
                  </div>
                  <div className="w-20 h-10 md:w-24 md:h-12">
                    <Line
                      data={{
                        labels: card.trend.map((_, i) => i),
                        datasets: [
                          {
                            data: card.trend,
                            borderColor: '#10B981',
                            tension: 0.4,
                            pointRadius: 0,
                          },
                        ],
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 mb-6">
            {/* Industry Opportunities with Gauge Chart */}
            <div className="bg-white rounded-lg shadow-sm p-4 md:p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Industry Opportunities</h3>
                <button className="text-gray-400 hover:text-gray-600">
                  <MoreHorizontal size={20} />
                </button>
              </div>
              <GaugeChart value={44} />
            </div>

            <div className="bg-white rounded-lg shadow-sm p-4 md:p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Current Market Trend</h3>
                <select className="border rounded-lg px-2 md:px-3 py-1">
                  <option>12 months</option>
                </select>
              </div>
              <Line 
                data={marketTrendData} 
                options={{
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
                }} 
              />
            </div>
          </div>

          {/* Bottom Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
            <div className="bg-white rounded-lg shadow-sm p-4 md:p-6">
              <h3 className="text-lg font-semibold mb-4">Trending in your industry</h3>
              <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-8">
                <div className="w-40 h-40 lg:w-48 lg:h-48">
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
                  ].map((trend, i) => (
                    <div key={i} className="flex items-center space-x-2">
                      <span
                        className="w-4 h-4 rounded-full"
                        style={{ backgroundColor: trend.color }}
                      />
                      <span className="text-sm font-semibold">{trend.label}</span>
                      <span className="ml-auto text-sm text-gray-600">{trend.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Visibility Section */}
            <VisibilitySection />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;       

 