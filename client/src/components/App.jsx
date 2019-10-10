import React from 'react';
import PhotoList from './PhotoList.jsx';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      photos: []
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/photos')
      .then(results => {
        return results.json();
      })
      .then(data => {
        this.setState({ photos: data });
      })
      .catch(error => {
        console.log('FETCH was unsuccessful: ', error);
      });
  }

  render() {
    return (
      <div>
        <h1>Photos</h1>
        <div>
          <PhotoList photos={this.state.photos} />
        </div>

      </div>
    );
  }
}

export default App;