const express = require('express');
const { Pool } = require('pg');

const app = express();
const port = 7272;

// db config
const pool = new Pool({
  user: 'tix',
  host: 'localhost',
  database: 'reskue',
  password: 'password',
  port: 5432, // Postgresql port
});

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// route who nest read (check form -> app.service.ts)
app.post('/ajout', async (req, res) => {
    // console.log(req.body)
  try {
    const { title, description, date, ticket, location } = req.body; // data

    // SQL request for put in the db data
    const query = 'INSERT INTO public.event (name,date,location,tickets_available, description) VALUES ($1, $2, $3, $4, $5)';
    await pool.query(query, [title,date, location, ticket, description]);

    res.redirect('http://localhost:3000/home');
  } catch (error) {
    console.error('Erreur', error);
    res.status(500).json({ message: 'Erreur' });
  }
});


app.post('/events/getTickets', async (req, res) => {
  const eventId = req.body.eventId;

  try {
    // update on click (/view/event.hbs button) ticket available
    const query = 'UPDATE public.event SET tickets_available = tickets_available - 1 WHERE id = $1';
    await pool.query(query, [eventId]);

    // send data to view -> event.hbs
    res.redirect('http://localhost:3000/show/events');
  } catch (error) {
    console.error('Erreur lors de la suppression du ticket', error);
    res.status(500).json({ message: 'Erreur lors de la suppression du ticket' });
  }
});


app.listen(port, () => {
  console.log(` listening  ${port}`);
});
