const photos = [
  {
    'id': 1,
    'img_url': 'https://fecphotosbucket.s3.us-east-2.amazonaws.com/cow1.jpeg',
    'description': 'A cow looking at the camera',
    'title': 'Cows',
    'people': 'Brown cow'
  },
  {
    'id': 2,
    'img_url': 'https://fecphotosbucket.s3.us-east-2.amazonaws.com/cow24.jpeg',
    'description': 'Another cow looking at the camera',
    'title': 'Cows',
    'people': 'Another brown cow'
  },
  {
    'id': 3,
    'img_url': 'https://fecphotosbucket.s3.us-east-2.amazonaws.com/cow3.jpeg',
    'description': 'Cows wandering about',
    'title': 'Cows',
    'people': 'Many cows'
  },
  {
    'id': 4,
    'img_url': 'https://fecphotosbucket.s3.us-east-2.amazonaws.com/cow13.jpeg',
    'description': 'A cow laying down on the grass',
    'title': 'Cows',
    'people': 'Brown cow'
  },
  {
    'id': 5,
    'img_url': 'https://fecphotosbucket.s3.us-east-2.amazonaws.com/cow10.jpeg',
    'description': 'Two cows eating ripe grass',
    'title': 'Cows',
    'people': 'Two cows'
  },
  {
    'id': 6,
    'img_url': 'https://fecphotosbucket.s3.us-east-2.amazonaws.com/cow27.jpeg',
    'description': 'Cow using its tongue',
    'title': 'Cows',
    'people': 'Cow and his tongue'
  },
  {
    'id': 7,
    'img_url': 'https://fecphotosbucket.s3.us-east-2.amazonaws.com/cow12.jpeg',
    'description': 'A cow stuck on the fence',
    'title': 'Cows',
    'people': 'Cow and its fence'
  },
  {
    'id': 8,
    'img_url': 'https://fecphotosbucket.s3.us-east-2.amazonaws.com/cow13.jpeg',
    'description': 'A cow posing with its tongue out',
    'title': 'Cows',
    'people': 'Cow and its tongue'
  },
  {
    'id': 9,
    'img_url': 'https://fecphotosbucket.s3.us-east-2.amazonaws.com/cow14.jpeg',
    'description': 'A cow looking at the camera through other cows',
    'title': 'Cows',
    'people': 'Black and white cow'
  },
  {
    'id': 10,
    'img_url': 'https://fecphotosbucket.s3.us-east-2.amazonaws.com/cow15.jpeg',
    'description': 'A cute cow looking at the camera',
    'title': 'Cows',
    'people': 'Colored cow'
  },
  {
    'id': 11,
    'img_url': 'https://fecphotosbucket.s3.us-east-2.amazonaws.com/cow16.jpeg',
    'description': 'A cow cooking its friend',
    'title': 'Cows',
    'people': 'Cooking cow'
  },
  {
    'id': 12,
    'img_url': 'https://fecphotosbucket.s3.us-east-2.amazonaws.com/cow17.jpeg',
    'description': 'A cow daydreaming',
    'title': 'Cows',
    'people': 'Daydreaming cow'
  },
  {
    'id': 13,
    'img_url': 'https://fecphotosbucket.s3.us-east-2.amazonaws.com/cow18.jpeg',
    'description': 'A bunch of little cows',
    'title': 'Cows',
    'people': 'Little cows'
  },
  {
    'id': 14,
    'img_url': 'https://fecphotosbucket.s3.us-east-2.amazonaws.com/cow19.jpeg',
    'description': 'A cow relaxing',
    'title': 'Cows',
    'people': 'Relaxing cow'
  },
  {
    'id': 15,
    'img_url': 'https://fecphotosbucket.s3.us-east-2.amazonaws.com/cow20.jpeg',
    'description': 'A cow staring at the sun',
    'title': 'Cows',
    'people': 'Staring cow'
  },
  {
    'id': 16,
    'img_url': 'https://fecphotosbucket.s3.us-east-2.amazonaws.com/cow21.jpeg',
    'description': 'A cow looking at the camera',
    'title': 'Cows',
    'people': 'Staring cow'
  },
  {
    'id': 17,
    'img_url': 'https://fecphotosbucket.s3.us-east-2.amazonaws.com/cow22.jpeg',
    'description': 'Cows strolling down',
    'title': 'Cows',
    'people': 'Strolling cows'
  },
  {
    'id': 18,
    'img_url': 'https://fecphotosbucket.s3.us-east-2.amazonaws.com/cow23.jpeg',
    'description': 'A cow looking at the camera',
    'title': 'Cows',
    'people': 'Brown cow'
  },
  {
    'id': 19,
    'img_url': 'https://fecphotosbucket.s3.us-east-2.amazonaws.com/cow24.jpeg',
    'description': 'A cow looking at the camera',
    'title': 'Cows',
    'people': 'Brown cow'
  },
  {
    'id': 20,
    'img_url': 'https://fecphotosbucket.s3.us-east-2.amazonaws.com/cow25.jpeg',
    'description': 'A baby cow drinking',
    'title': 'Cows',
    'people': 'Drinking cow'
  },
  {
    'id': 21,
    'img_url': 'https://fecphotosbucket.s3.us-east-2.amazonaws.com/cow26.jpeg',
    'description': 'Fluffy baby cows',
    'title': 'Cows',
    'people': 'Fluffy cows'
  },
  {
    'id': 22,
    'img_url': 'https://fecphotosbucket.s3.us-east-2.amazonaws.com/cow27.jpeg',
    'description': 'A mother cow and its baby cow',
    'title': 'Cows',
    'people': 'Family cows'
  },
  {
    'id': 23,
    'img_url': 'https://fecphotosbucket.s3.us-east-2.amazonaws.com/cow28.jpeg',
    'description': 'A muscular looking cow',
    'title': 'Cows',
    'people': 'Muscular cow'
  },
  {
    'id': 24,
    'img_url': 'https://fecphotosbucket.s3.us-east-2.amazonaws.com/cow29.jpeg',
    'description': 'A cow looking at the camera',
    'title': 'Cows',
    'people': 'Cow'
  },
  {
    'id': 25,
    'img_url': 'https://fecphotosbucket.s3.us-east-2.amazonaws.com/cow30.jpeg',
    'description': 'A big cow amongst little cows',
    'title': 'Cows',
    'people': 'Big and little cows'
  },
  {
    'id': 26,
    'img_url': 'https://fecphotosbucket.s3.us-east-2.amazonaws.com/cow5.jpeg',
    'description': 'A cow looking at the camera',
    'title': 'Cows',
    'people': 'Cow'
  },
  {
    'id': 27,
    'img_url': 'https://fecphotosbucket.s3.us-east-2.amazonaws.com/cow6.jpeg',
    'description': 'Three standing cows',
    'title': 'Cows',
    'people': 'Three cows'
  },
  {
    'id': 28,
    'img_url': 'https://fecphotosbucket.s3.us-east-2.amazonaws.com/cow7.jpeg',
    'description': 'A lonely cow standing in the grass',
    'title': 'Cows',
    'people': 'Lonely cow'
  },
  {
    'id': 29,
    'img_url': 'https://fecphotosbucket.s3.us-east-2.amazonaws.com/cow8.jpeg',
    'description': 'Cows lying on the grass',
    'title': 'Cows',
    'people': 'Relaxed cows'
  },
  {
    'id': 30,
    'img_url': 'https://fecphotosbucket.s3.us-east-2.amazonaws.com/cow9.jpeg',
    'description': 'A cow looking at the camera',
    'title': 'Cows',
    'people': 'Staring cow'
  }
];

module.exports.photos = photos;
