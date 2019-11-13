import React from 'react';
<<<<<<< HEAD
import styled from 'styled-components';
import Photo from './Photo.jsx';

const BDiv = styled.div`
  display: flex;
  flex-direction: row
`;

const PhotoList = ({ photos }) => (
  <BDiv>
=======
import styles from './css/PhotoList.css';
import Photo from './Photo.jsx';

const PhotoList = ({ photos }) => (
  <div className={styles.div}>
>>>>>>> 64d665d37cda8f6d27abb2dd04152902d6b8bba5
    {photos.map((photo, index) =>
      <Photo photo={photo} key={index} />
    )}
  </BDiv>
);

export default PhotoList;
