require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const compression = require('compression');
const db = require('./server/src/models');

const app = express();

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text({ type: 'text/html' }));
app.use(bodyParser.json({ type: 'application/json' }));

app.use(compression());

// Routes
require('./server/src/routes/index')(app, process.env.API_VERSION);

// Database connection
db.sequelize
  .authenticate()
  .then(() => {
    console.log(`Database connected`);
  })
  .catch(err => {
    console.log(err);
  });

// App
app.listen(process.env.API_PORT, () => {
  console.log(`App is running on http://localhost:${process.env.API_PORT}`);
});
