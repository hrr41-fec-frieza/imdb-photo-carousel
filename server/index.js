const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;
const db = require('../database/index.js');
const seedDb = require('../database/dbSeed.js');

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());


app.get('/photos', (req, res) => {
  db.get( (err, photos) => {
    if (err) {
      console.log('Error getting photos at server: ', err);
    } else {
      console.log('Successful at getting photos ');
      res.send(photos);
    }
  });
});

app.post('/photos', (req, res) => {

});


app.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});