// this is where the photos will be saved/fetched from the db

// this is the model
const model = require('./index.js');

const save = () => {
  const photos = [
    {
      'id': 1,
      'img_url': 'https://cdn.britannica.com/55/174255-050-526314B6/brown-Guernsey-cow.jpg',
      'description': 'A cow looking at the camera',
      'title': 'Cows',
      'people': 'Cow'
    }
  ];

  for (photo of photos) {
    var newPhoto = new model.Photo(photo);
    newPhoto.save();
  }

  console.log('Database seeded');
};

save()

module.exports.save = save;