import React from 'react';
import styles from './css/PhotoList.css';
import Photo from './Photo.jsx';

const BDiv = styled.div`
  display: flex;
  flex-direction: row
`;

const PhotoList = ({ photos }) => (
  <div className={styles.div}>
    {photos.map((photo, index) =>
      <Photo photo={photo} key={index} />
    )}
  </div>
);

export default PhotoList;
