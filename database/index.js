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
  imgUrl: String,
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
  }).limit(6);
};

var getById = (id, callback) => {
  Photo.find({id: id}, (err, data) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, data);
    }
  }).limit(6);
};


var save = (id, description, title, people, imgUrl) => {
  var newPhoto = new Photo({id, imgUrl, description, title, people});

  newPhoto.save( (err, photo) => {
    if (err) {
      console.log('Error: ', err);
    } else {
      console.log('Database seeded');
    }
  });
};

module.exports = {
  getById: getById,
  save: save,
  get: get
};
