const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('../database/index.js');
const port = process.env.PORT || 1258;
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname + '/../client/dist')));
app.use(bodyParser.json());
app.use(cors());

app.get('/api/photos', (req, res) => {
  if (req.url === '/api/photos') {
    db.get((err, photos) => {
      if (err) {
        console.log('Error getting photos at server: ', err);
      } else {
        console.log('Successful at getting photos ');
        res.send(photos); // photos is an array
      }
    });
  } else {
    var param = req.query.id;
    db.getById(param, (err, photos) => {
      if (err) {
        console.log('Error getting photos by Id: ', err);
      } else {
        console.log('Successful at getting photos by Id: ', param);
        res.send(photos);
      }
    });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});

module.exports = {
  get: app.get,
};
