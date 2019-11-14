import React from 'react';
import axios from 'axios';
import PhotoList from './PhotoList.jsx';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      photos: [],
    };

    this.getPhotos = this.getPhotos.bind(this);
  }

  getPhotos(path) {
    if (path === '/') {
      axios.get('/api/photos')
        .then( (results) => { return results.data; })
        .then( (data) => {
          console.log('yes')
          this.setState({ photos: data });
        })
        .catch( (error) => {
          console.log('GET was unsuccessful: ', error);
        });
    } else {
      path = path.slice(2); //199
      axios.get(`http://localhost:1258/api/photos/?id=${path}`)
        .then( (results) => { return results.data; })
        .then( (data) => {
          console.log('yes yes')
          this.setState({ photos: data });
        })
        .catch( (error) => {
          console.log('GET was unsuccessful: ', error);
        });
    }
  };

  componentDidMount() {
    var path = window.location.href.slice(21);
    this.getPhotos(path);
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
