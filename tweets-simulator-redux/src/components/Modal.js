import React from 'react'
import { Modal as ModalB } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import {openCloseAddTweetModalActions} from '../actions/modalsActions';

export default function Modal(props) {
    const {children} = props

    // dispact para ejecutar nuestras acciones
    const dispatch = useDispatch();
    const closeModal = state => dispatch(openCloseAddTweetModalActions(state))

    // use Selector para acceder a un valor en el storage
    const isOpenModal = useSelector(state => state.modals.stateModalAddTweet);
  return (
      <ModalB 
      show={isOpenModal}
      onHide={() => closeModal(false)}
      size="lg"
      centered
      >{children}</ModalB>
  );
}
