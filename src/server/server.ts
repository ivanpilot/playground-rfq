// import * as express from 'express';
import {Application} from 'express';
// import {newsletterRoute} from "./newsletterRoute";
// import {loginRoute} from "./loginRoute";
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const DATA_FILE = path.join(__dirname, 'data.json');

const app: Application = express();

app.set('port', (process.env.PORT || 3000));

app.use(bodyParser.json());


console.log('Starting server ...');


// app.route('/api/newsletter').post(newsletterRoute);
// app.route('/api/login').post(loginRoute);

app.use('/', express.static(path.join(__dirname, 'server')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');
  next();
});

app.get('/bonds', (req, res) => {
  fs.readFile(DATA_FILE, (err, data) => {
    res.setHeader('Cache-Control', 'no-cache');
    res.json(JSON.parse(data));
  });
});


// app.listen(8090, () => {
//     console.log('Server is now running on port 8090 ...');
// });

app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});

