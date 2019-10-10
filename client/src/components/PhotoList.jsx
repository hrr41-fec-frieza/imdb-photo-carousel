import React from 'react';
import Photo from './Photo.jsx';

const PhotoList = ({photos}) => (
  <div>
    {photos.map( (photo, index) =>
      <Photo img={photo.img_Url} key={index} />
    )}
  </div>
);

export default PhotoList;