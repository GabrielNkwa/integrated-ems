import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

const DataChart = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    datasets: [
      {
        label: 'Fire Outbreaks',
        data: [10, 5, 7, 15, 20, 12, 9, 8, 6, 4, 3, 2],
        backgroundColor: 'rgb(255, 0, 0)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
      {
        label: 'Floods',
        data: [4, 3, 7, 15, 30, 12, 6, 2, 10, 0, 1, 2],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
      {
        label: 'Collapsed Building',
        data: [10, 5, 3, 4, 20, 12, 0, 6, 14, 6, 10, 2],
        backgroundColor: 'rgb(102, 255, 102)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
      {
        label: 'Security Incident',
        data: [15, 25, 17, 15, 20, 12, 9, 8, 6, 4, 3, 2],
        backgroundColor: 'rgb(204, 102, 255)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
      {
        label: 'Vehicle Accidents',
        data: [3, 5, 2, 1, 2, 1, 2, 3, 4, 5, 2, 1],
        backgroundColor: 'rgb(0, 51, 0)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return <Bar data={data} options={options} className='pt-10' />;
};

export default DataChart;
