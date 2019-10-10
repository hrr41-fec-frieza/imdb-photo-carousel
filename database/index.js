// this is where the database will be connected to
// and the schema is created
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/photocarousel');
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', () => {
  console.log('Successful connection');
});

const Schema = mongoose.Schema;
var photoSchema = new Schema({
  id: Number,
  img_Url: String,
  description: String, // description of the picture
  title: String, // movie title
  people: String, // names of people in the picture
});

var Photo = mongoose.model('Photo', photoSchema);

var get = (callback) => {
  Photo.find((err, data) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, data);
    }
  });
};

module.exports = {
  Photo: Photo,
  get: get
};