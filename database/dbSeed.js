// this is where the photos will be saved from the db

// this is the model
const model = require('./index.js');
const data = require('./data.js');
const faker = require('faker');

const seed = () => {
  for (let i = 100; i <= 199; i++) {
    let id = i;
    for (photo of data.photos) {
      let description = faker.lorem.sentence();
      let title = faker.lorem.words();
      let people = faker.lorem.word();
      let imgUrl = photo.img_url;

      model.save(id, description, title, people, imgUrl);
    }
  }
};

seed();
