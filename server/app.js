const express = require('express');
const app = express();
const PORT = process.env.PORT || 5001;

// Middleware (if any)
app.use(express.json());

// Example root route
app.get('/', (req, res) => {
    res.send('Welcome to the Personal Finance Manager!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
