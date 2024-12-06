import React, { useEffect, useState } from 'react';

const TransactionList = () => {
  const [data, setData] = useState([]);  // Initialize state with an empty array

  useEffect(() => {
    fetch('http://localhost:5001/api/transactions')  // Replace with your backend API URL
      .then(response => response.json())
      .then(data => {
        console.log('Fetched data:', data);  // Log the data to inspect its structure
        setData(data);  // Set data to state
      })
      .catch(error => {
        console.log('Error fetching data:', error);  // Handle any errors
      });
  }, []);

  // Check if data exists and is an array
  if (!Array.isArray(data)) {
    return <div>Loading...</div>;  // Show loading message while waiting for data
  }

  return (
    <div>
      <h2>Transaction List</h2>
      {data.length === 0 ? (
        <p>No transactions available.</p>  // Show a message if there are no transactions
      ) : (
        <ul>
          {data.map((transaction) => (
            <li key={transaction.id}>
              {transaction.name} - ${transaction.amount} {/* Modify these fields according to your data structure */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TransactionList;
