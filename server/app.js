const express = require('express');
const mysql = require('mysql');
const cors = require('cors');  // To allow requests from your React app
const app = express();
const port = 5001;
const path = require('path');
app.use(express.static(path.join(__dirname, '../client/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});


app.use(cors());  // Enable Cross-Origin Resource Sharing

// Set up your database connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'finance_manager'
});

// Test DB connection
db.connect((err) => {
  if (err) {
    console.log('Error connecting to DB: ', err);
  } else {
    console.log('Connected to DB');
  }
});

// API route to get transactions
app.get('/api/transactions', (req, res) => {
  const query = 'SELECT * FROM transactions';
  db.query(query, (err, results) => {
    if (err) {
      res.status(500).send('Error fetching data');
    } else {
      res.json(results);
    }
  });
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
