import React from 'react';
import './css/Photo.css';
import Modal from './Modal.jsx';


class Photo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false
    };

    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal(e) {
    this.setState({
      show: true
    });
  }

  hideModal(e) {
    this.setState({
      show: false
    });
  }

  render() {
    return (
      <div>
        <Modal show={this.state.show} handleClose={this.hideModal} img={this.props.photo.imgUrl}>
          <p>Description: {this.props.photo.description}</p>
          <p>Titles: {this.props.photo.title}</p>
          <p>People: {this.props.photo.people}</p>
        </Modal>
        <img className='b-Image' src={this.props.photo.imgUrl} onClick={this.showModal}/>
      </div>
    );
  }
}
export default Photo;
