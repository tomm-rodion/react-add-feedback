import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import { ModalBackdrop, ModalContent } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.hendelKeyDown);
    console.log('componentDidMount');
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.hendelKeyDown);
    console.log('Modal componentWillUnMount');
  }

  hendelKeyDown = e => {
    if (e.code === 'Escape') {
      console.log('жмакнули на ESC, зачиняємо модалку.');
      this.props.onClose();
    }
  };

  handleBackdropClick = e => {
    console.log('target', e.target);
    console.log(e.currentTarget);
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <ModalBackdrop onClick={this.handleBackdropClick}>
        <ModalContent>{this.props.children}</ModalContent>
      </ModalBackdrop>,
      modalRoot
    );
  }
}
