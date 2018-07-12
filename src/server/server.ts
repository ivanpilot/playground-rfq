import {Application} from 'express';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as fs from 'fs-extra';
// import * as path from 'path';


const DATA_FILE = '/Users/iplab/Documents/education/angular/projects/playground-rfq/src/server/data.json';

const app: Application = express();

app.set('port', 3000);

console.log('Starting server ...');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');
  next();
});

app.get('/bonds', (req, res) => {
  fs.readJSON(DATA_FILE, (err, data) => {
    // console.log(`file address is ${DATA_FILE}`)
    // console.log(`data is ${data}`)
    res.setHeader('Cache-Control', 'no-cache');
    res.json(data);
  });
});

app.put('/bonds/:id', (req, res) => {
  fs.readJSON(DATA_FILE, (err, data) => {
    let index = parseInt(req.params.id)
    console.log('data are: ', data)
    let updatedBonds = [
      ...data.slice(0, index),
      req.body,
      ...data.slice(index + 1, data.length)
    ]
    console.log('updatedBonds are: ', updatedBonds)
    fs.writeJSON(DATA_FILE, JSON.stringify(updatedBonds, null, 2), () => {
      res.setHeader('Content-Type', 'application/json');
      res.json(updatedBonds);
    });
  });
});


app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});

