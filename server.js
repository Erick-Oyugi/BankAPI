const path = require('path');
const express = require('express');

const dotenv = require('dotenv').config();
const { errorHandler } = require('./middleware/error');
const connectDB = require('./config/db');
const cors = require('cors');
const port = process.env.PORT || 8001

connectDB();

const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:8001",
    ],
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', require('./routes/apiRoutes'));
// app.use('/api/users', require('./routes/userRoutes'));

//Serve frontend
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../frontend')));

  app.get('*', (req, res) =>
    res.sendFile(
      path.resolve(__dirname, 'frontend', 'konnectapi', 'index.html')
    )
  );
} else {
  app.get('/', (req, res) => res.send('Please set to production'));
}

app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));