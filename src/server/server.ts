import {Application} from 'express';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as fs from 'fs-extra';
import * as path from 'path';

// const express = require('express');
// const bodyParser = require('body-parser');
// const fs = require('fs');
// const path = require('path');

const DATA_FILE = path.join(__dirname, 'data.json');

const app: Application = express();

app.set('port', (process.env.PORT || 3000));

app.use(bodyParser.json());

console.log('Starting server ...');

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

app.put('/bonds', (req, res) => {
  // debugger
  fs.readFile(DATA_FILE, (err, data) => {
    const bonds = JSON.parse(data)
    const updatedBonds = bonds.map(bond => {
      if(bond.id === req.body.id){
        return {...bond, price: req.body.price}
        // bond.price = req.body.price
      }
    })
    fs.writeFile(DATA_FILE, JSON.stringify(updatedBonds, null, 4), () => {
      // debugger
      // console.log('Hey, I am a PUT action from the server')
      res.json(JSON.parse(updatedBonds));
    });
    // res.json(JSON.parse(updatedBonds));
  // )
  });
});

// app.put('/api/timers', (req, res) => {
//   fs.readFile(DATA_FILE, (err, data) => {
//     const timers = JSON.parse(data);
//     timers.forEach((timer) => {
//       if (timer.id === req.body.id) {
//         timer.title = req.body.title;
//         timer.project = req.body.project;
//       }
//     });
//     fs.writeFile(DATA_FILE, JSON.stringify(timers, null, 4), () => {
//       res.json({});
//     });
//   });
// });


app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});

