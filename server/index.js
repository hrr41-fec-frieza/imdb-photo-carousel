const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('../database/index.js');
const port = process.env.PORT || 1258;

const app = express();
app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());
app.use(cors());


app.get('/', (req, res) => {
  res.send('Rendering onto HTML successful');
});

app.get('/photos', (req, res) => {
  db.get((err, photos) => {
    if (err) {
      console.log('Error getting photos at server: ', err);
    } else {
      console.log('Successful at getting photos ');
      res.send(photos); // photos is an array
    }
  });
});

app.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});

module.exports = {
  get: app.get,
};
