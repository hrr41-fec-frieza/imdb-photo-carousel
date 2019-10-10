import React from 'react';

const Photo = ({img}) => (
  <div>
    {console.log({img})}
    <img src={img} />
  </div>
);

export default Photo;