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
        throw err;
      } else {
        res.send(photos);
      }
    });
  } else {
    var param = req.query.id;
    db.getById(param, (err, photos) => {
      if (err) {
        throw err;
      } else {
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
