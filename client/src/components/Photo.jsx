import React from 'react';
import styled from 'styled-components';

const Img = styled.img`
  height: 150px;
  width: 200px;
`;

const Photo = ({img}) => (
  <div>
    <Img src={img} />
  </div>
);

export default Photo;