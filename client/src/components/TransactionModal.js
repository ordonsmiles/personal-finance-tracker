// src/components/TransactionModal.js
import React, { useState } from 'react';

const TransactionModal = ({ transaction, onSave, onClose }) => {
  const [description, setDescription] = useState(transaction.description);
  const [amount, setAmount] = useState(transaction.amount);
  const [category, setCategory] = useState(transaction.category);

  const handleSave = () => {
    const updatedTransaction = { ...transaction, description, amount, category };
    onSave(updatedTransaction);
    onClose();
  };

  return (
    <div className="modal">
      <h2>Edit Transaction</h2>
      <form onSubmit={handleSave}>
        <label>Description</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <label>Amount</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <label>Category</label>
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <button type="submit">Save</button>
        <button type="button" onClick={onClose}>Close</button>
      </form>
    </div>
  );
};

export default TransactionModal;
