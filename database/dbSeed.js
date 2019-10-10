// this is where the photos will be saved/fetched from the db

// this is the model
const Photo = require('./index.js');

const save = (req, res, cb) => {
  const photos = [
    {
      'id': 1,
      'img_Url': 'https://cdn.britannica.com/55/174255-050-526314B6/brown-Guernsey-cow.jpg',
      'description': 'A cow looking at the camera',
      'title': 'Cows',
      'people': 'One Cow'
    }
  ];

  for (photo of photos) {
    var newPhoto = new Photo(photo);
    newPhoto.save();
  }

  console.log('Database seeded');
};


module.exports.save = save;