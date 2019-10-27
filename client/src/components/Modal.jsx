import React from 'react';
import './css/Modal.css';


const Modal = ({show, handleClose, children, img}) => {
  let appearHide = show ? 'modal display-block' : 'modal display-none';

  if (!show) {
    return null;
  }

  return (
    <div className={appearHide}>
      <div className='section'>
        <img className='big-image' onClick={handleClose} src={img} />
        <h4 className='h4'>{children}</h4>
      </div>
    </div>
  );
};

export default Modal;
