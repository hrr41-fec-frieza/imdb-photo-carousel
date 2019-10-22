// this is where the photos will be saved from the db

// this is the model
const model = require('./index.js');
const data = require('./data.js');

const save = () => {
  for (photo of data.photos) {
    var newPhoto = new model.Photo(photo);
    newPhoto.save();
  }

  console.log('Database seeded');
};

save();

module.exports.save = save;
