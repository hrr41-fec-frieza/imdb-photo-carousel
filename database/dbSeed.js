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
    },
    {
      'id': 2,
      'img_url': 'https://4al52k24l8r51wpym5i46ltd-wpengine.netdna-ssl.com/wp-content/uploads/sites/2/2019/06/cowsa.jpg',
      'description': 'Two cows looking at the camera',
      'title': 'More cows',
      'people': 'Two cows'
    },
    {
      'id': 3,
      'img_url': 'https://oldmooresalmanac.com/wp-content/uploads/2017/11/cow-2896329_960_720-Copy.jpg',
      'description': 'Funny cow looking at me',
      'title': 'Another cow',
      'people': 'Funny cow'
    },
    {
      'id': 4,
      'img_url': 'https://animalogic.ca/wp-content/uploads/2018/05/shutterstock_481623085.jpg',
      'description': 'Lots of cows',
      'title': 'Some more cows',
      'people': 'Normal cows and weird cow'
    },
    {
      'id': 5,
      'img_url': 'https://upload.wikimedia.org/wikipedia/commons/0/0c/Cow_female_black_white.jpg',
      'description': 'Black and white cow',
      'title': 'Last cow',
      'people': 'Chilling cow'
    }
  ];

  for (photo of photos) {
    var newPhoto = new model.Photo(photo);
    newPhoto.save();
  }

  console.log('Database seeded');
};

save();

module.exports.save = save;