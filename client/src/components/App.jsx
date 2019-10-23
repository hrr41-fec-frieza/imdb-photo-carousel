import React from 'react';
import axios from 'axios';
import PhotoList from './PhotoList.jsx';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      photos: [],
    };
  }

  componentDidMount() {
    axios.get('http://localhost:1258/photos')
      .then( (results) => { return results.data; })
      .then( (data) => {
        this.setState({ photos: data });
      })
      .catch( (error) => {
        console.log('GET was unsuccessful: ', error);
      });
  }

  render() {
    return (
      <div>
        <h1>Photos</h1>
        <div>
          <PhotoList photos={this.state.photos} />
          <p>See all photos</p>
        </div>
      </div>
    );
  }
}

export default App;
