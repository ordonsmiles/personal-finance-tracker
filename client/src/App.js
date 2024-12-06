import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Import Routes instead of Switch
import Navbar from './components/Navbar';
import TransactionList from './components/TransactionList';
import AddTransactionForm from './components/AddTransactionForm';
import FinancialSummary from './components/FinancialSummary';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router> {/* Wrap the app in BrowserRouter */}
      <div>
        <Navbar />
        <h1>Personal Finance Manager</h1>

        {/* Define your routes using Routes */}
        <Routes>  {/* Switch is now replaced by Routes */}
          <Route path="/" element={<TransactionList />} />
          <Route path="/add" element={<AddTransactionForm />} />
          <Route path="/summary" element={<FinancialSummary />} />
          {/* Add more routes as needed */}
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
