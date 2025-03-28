const express = require('express');
const router = express.Router();
const connectDB = require('../config/testConnection');

router.get('/users', async (req, res) => {
    let connection;
    try {
        connection = await connectDB();
        const result = await connection.execute(`SELECT ID, NAME FROM USERS`);
        res.json(result.rows);
    } catch (err) {
        console.error('Error fetching users:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    } finally {
        if (connection) await connection.close();
    }
});

module.exports = router;
