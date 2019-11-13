import React from 'react';
import styled from 'styled-components';
import Photo from './Photo.jsx';

const BDiv = styled.div`
  display: flex;
  flex-direction: row
`;

const PhotoList = ({ photos }) => (
  <BDiv>
    {photos.map((photo, index) =>
      <Photo photo={photo} key={index} />
    )}
  </BDiv>
);

export default PhotoList;
