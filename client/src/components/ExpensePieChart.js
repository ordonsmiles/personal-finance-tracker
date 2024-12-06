// src/components/ExpensePieChart.js
import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale } from 'chart.js';

// Register chart components
ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale);

const ExpensePieChart = ({ expenses }) => {
  const categories = expenses.reduce((acc, curr) => {
    acc[curr.category] = (acc[curr.category] || 0) + curr.amount;
    return acc;
  }, {});

  const data = {
    labels: Object.keys(categories),
    datasets: [{
      data: Object.values(categories),
      backgroundColor: ['#FF5733', '#33FF57', '#3357FF', '#FF33A6'],
    }],
  };

  return (
    <div>
      <h2>Expense Breakdown by Category</h2>
      <Pie data={data} />
    </div>
  );
};

export default ExpensePieChart;
