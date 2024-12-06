// src/App.js
import React, { useEffect, useState } from 'react';
import Header from './components/header';


const App = () => {
  const [data, setData] = useState([]);

  // Fetch data from the backend when the app loads
  useEffect(() => {
    fetch('http://localhost:5001/api/transactions')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <Header />
      <div>
        <h2>Transactions</h2>
        <ul>
          {data.map((transaction, index) => (
            <li key={index}>
              {transaction.description}: ${transaction.amount}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;

