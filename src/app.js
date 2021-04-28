const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const taskRoutes = require('./routes/task.routes');

const app = express();
// const corsOptions = {origin: 'url', Credential: true}

// middlewares basics
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Settings
app.set('PORT', process.env.PORT || 5001);

// Routes
app.get('/', (req, res) => {
  res.send('<h2>Welcome to my application</h2>');
});

app.use('/api/tasks', taskRoutes);

module.exports = app;
