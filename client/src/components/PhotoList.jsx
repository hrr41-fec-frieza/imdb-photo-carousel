import React from 'react';
import styled from 'styled-components';
import Photo from './Photo.jsx';

const Div = styled.div`
  display: flex;
  flex-direction: row
`;

const PhotoList = ({ photos }) => (
  <Div>
    {photos.map((photo, index) =>
      <Photo photo={photo} key={index} />
    )}
  </Div>
);

export default PhotoList;
