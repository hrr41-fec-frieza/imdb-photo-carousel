import React from 'react';
import Photo from './Photo.jsx';

const PhotoList = ({ photos }) => (
  <div className="row">
    {photos.map((photo, index) =>
      <Photo img={photo.img_url} key={index} />
    )}
  </div>
);

export default PhotoList;