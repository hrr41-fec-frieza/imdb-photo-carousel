import React from 'react';
import styles from './css/Modal.css';


const Modal = ({show, handleClose, children, img}) => {
  let appearHide = show ? 'modal display-block' : 'modal display-none';

  if (!show) {
    return null;
  }

  return (
    <div className={appearHide}>
      <div className={styles.section}>
        <img className={styles.bigImg} onClick={handleClose} src={img} />
        <h4 className={styles.h4}>{children}</h4>
      </div>
    </div>
  );
};

export default Modal;
