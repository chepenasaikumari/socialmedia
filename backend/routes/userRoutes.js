const express = require('express');
const pool = require('../config/db');
const fs = require('fs');
const router = express.Router();

// Handle user submission
router.post('/', async (req, res) => {
  const { name, socialMediaHandle } = req.body;
  const images = req.files.map(file => file.path);

  try {
    const result = await pool.query(
      'INSERT INTO users (name, social_media_handle, images) VALUES ($1, $2, $3) RETURNING *',
      [name, socialMediaHandle, images]
    );
    res.json(result.rows[0]);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

// Fetch all submissions
router.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM users');
    res.json(result.rows);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
