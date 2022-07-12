import React from 'react';
import ReactModal from 'react-modal';
import styles from './Modal.module.scss';
import Close from 'assets/icons/Close.svg';
import { IconButton } from 'components/shared/IconButton';

ReactModal.setAppElement('#root');

type PropsType = {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const Modal = ({ open, onClose, children }: PropsType) => {
  return (
    <ReactModal
      isOpen={open}
      className={styles.modal}
      overlayClassName={styles.overlay}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      closeTimeoutMS={300}
      onRequestClose={onClose}
    >
      <IconButton
        icon={Close}
        onClick={onClose}
        buttonStyle={styles.buttonStyle}
        iconStyle={styles.iconStyle}
      />
      {children}
    </ReactModal>
  );
};

Modal.defaultProps = {
  open: false,
};

export default Modal;
