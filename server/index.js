import 'dotenv/config';
import express from 'express';
import mysql from 'mysql2/promise';

const app = express();
const port = Number(process.env.API_PORT || 3001);

app.use(express.json({ limit: '20kb' }));

const pool = mysql.createPool({
  host: process.env.DB_HOST || '127.0.0.1',
  port: Number(process.env.DB_PORT || 3306),
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME || 'zidstyling',
  waitForConnections: true,
  connectionLimit: 5,
  queueLimit: 0,
});

app.get('/api/health', async (_request, response) => {
  try {
    await pool.query('SELECT 1');
    response.json({ status: 'ok', database: 'connected' });
  } catch (error) {
    console.error('Database health check failed:', error.message);
    response.status(503).json({ status: 'error', database: 'unavailable' });
  }
});

app.post('/api/consultations', async (request, response) => {
  const { name, email, phone = '', occasion, neededBy = '', idea = '' } = request.body ?? {};
  if (![name, email, occasion].every((value) => typeof value === 'string' && value.trim())) {
    return response.status(400).json({ message: 'Please provide your name, email, and occasion.' });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
    return response.status(400).json({ message: 'Please provide a valid email address.' });
  }
  if (neededBy && (!/^\d{4}-\d{2}-\d{2}$/.test(neededBy) || Number.isNaN(Date.parse(`${neededBy}T00:00:00`)))) {
    return response.status(400).json({ message: 'Please provide a valid date.' });
  }

  const clean = (value, max) => String(value).trim().slice(0, max);
  const values = [
    clean(name, 120),
    clean(email, 254),
    clean(phone, 40),
    clean(occasion, 100),
    neededBy ? clean(neededBy, 10) : null,
    clean(idea, 3000),
  ];

  try {
    const [result] = await pool.execute(
      `INSERT INTO consultation_requests
        (full_name, email, phone, occasion, needed_by, idea)
       VALUES (?, ?, ?, ?, ?, ?)`,
      values,
    );
    response.status(201).json({ id: result.insertId, message: 'Consultation request saved.' });
  } catch (error) {
    console.error('Saving consultation request failed:', error.message);
    // response.status(503).json({ message: 'The booking service is temporarily unavailable. Please try again.' });
  }
});

app.listen(port, () => {
  console.log(`Zidstyling booking API listening at http://localhost:${port}`);
});
