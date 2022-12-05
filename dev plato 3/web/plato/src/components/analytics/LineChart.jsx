import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  PointElement
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = () => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top'
      },
      title: {
        display: true
      }
    }
  };

  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  const data = {
    labels: labels,
    datasets: [
      {
        label: 'User Registered',
        data: [7, 152, 345, 425, 530, 158, 595],
        borderColor: '#14b8a6',
        fill: false,
    tension: 0.3

      },
      {
        label: 'Sales',
        data: [230, 100, 52, 327, 327, 345, 430],
        borderColor: '#06b6d4',
        tension: 0.3
      },
      {
        label: 'Courses',
        data: [152, 230, 230, 327, 127, 430, 345],
        borderColor: '#6366f1',
        tension: 0.3
      },
      {
        label: 'Teachers',
        data: [47, 352, 475, 125, 530, 158, 495],
        borderColor: '#a855f7',
        tension: 0.3
      }
    ]
  };
  return (
    <>
      <div className="h-64 w-full">
        <Line options={options} data={data} />
      </div>
    </>
  );
};

export default LineChart;
