import React from 'react';
import styled from  'styled-components';

const BigImg = styled.img`
  margin: auto;
  position: fixed;
  top: 150px;
  left: 0;
  right: 0;
  width: 70%;
  max-width: 700px;
  min-width: 600px;
  height: auto;
`;

const Section = styled.section`
  position: fixed;
  width: 100%
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  align-items: center;
  cursor: pointer;
  backface-visibility: hidden;
  background: black;

`;

const H4 = styled.h4`
  text-align: center;
  color: white;
`;

const Modal = ({show, handleClose, children, img}) => {
  let appearHide = show ? 'modal display-block' : 'modal display-none';

  if (!show) {
    return null;
  }

  return (
    <div className={appearHide}>
      <Section>
        <BigImg onClick={handleClose} src={img} />
        <H4>{children}</H4>
      </Section>
    </div>
  );
};

export default Modal;
