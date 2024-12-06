const express = require('express');
const router = express.Router();
const db = require('../config/db');

// Test database connection
router.get('/test', async (req, res) => {
    try {
        const [rows] = await db.query('SELECT 1 + 1 AS result');
        res.json({ message: 'Database connection successful!', result: rows[0].result });
    } catch (error) {
        res.status(500).json({ error: 'Database connection failed', details: error });
    }
});

module.exports = router;
