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
  PointElement,
  RadialLinearScale
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  RadialLinearScale,
  Title,
  Tooltip,
  Legend
);

const RadarChart = () => {
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
        label: 'Courses',
        data: [430, 100, 52, 327, 200, 430, 345],
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
      <div className="h-full w-full ">
        <Radar options={options} data={data} />
      </div>
    </>
  );
};

export default RadarChart;
