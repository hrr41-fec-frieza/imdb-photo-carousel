const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/???');
var db = mongoose.connection;

db.on('error', console.err.bind(console, 'connection error: '));
db.once('open', () => {
  console.log('Successful connection');
});

