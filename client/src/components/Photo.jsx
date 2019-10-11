import React from 'react';
import styled from 'styled-components';

const Img = styled.img`
  height: 150px;
  width: 200px;
`;

const BigImg = styled.img`
  height: 300px;
  width: 400px;
`
// const Photo = ({img}) => (
//   <div>
//     <Img src={img} />
//   </div>
// );

class Photo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };

    this.expandPic = this.expandPic.bind(this);
  }

  expandPic() {
    // console.log('Works');
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    const isOpen = this.state.isOpen;
    let pic;

    if (isOpen) {
      pic = <Img onClick={this.expandPic} src={this.props.img} />
    } else {
      pic = <BigImg onClick={this.expandPic} src={this.props.img} />
    }

    return (
      <div>
        {pic}
      </div>
    )
  }
}

export default Photo;