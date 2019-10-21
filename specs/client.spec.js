import React from 'react';
import App from '../client/src/components/App.jsx';
import PhotoList from '../client/src/components/PhotoList.jsx';
import Photo from '../client/src/components/Photo.jsx';
import { shallow, mount, render } from 'enzyme';

describe('App', () => {
  const wrapper = shallow(<App />);
  test('App is successfully rendered', () => {
    expect(wrapper.exists()).toBe(true);
  });

  test('State should be an object', () => {
    expect(typeof wrapper.state('photos')).toBe('object');
  });

  test('Renders <PhotoList /> component successfully', () => {
    expect(wrapper.find(PhotoList)).toHaveLength(1);
  });
});
