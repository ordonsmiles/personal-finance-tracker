import React, { useEffect, useState } from 'react';

const FinancialSummary = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5001/api/transactions')  // Fetch the data from your API
      .then((response) => response.json())
      .then((data) => {
        console.log('Fetched transactions:', data);  // Log to inspect the data
        setTransactions(data);
      })
      .catch((error) => {
        console.log('Error fetching data:', error);  // Handle any errors
      });
  }, []);

  // Check if transactions is an array before using reduce
  const totalAmount = Array.isArray(transactions)
    ? transactions.reduce((acc, transaction) => acc + (transaction.amount || 0), 0)
    : 0;  // Initialize to 0 if transactions is not an array

  return (
    <div>
      <h2>Financial Summary</h2>
      <p>Total Amount: ${totalAmount}</p>
      {/* You can add other financial summary elements here */}
    </div>
  );
};

export default FinancialSummary;
