import React, {Fragment} from 'react';
import classes from './Modal.module.css';
import Backdrop from '../Backdrop/Backdrop';

const Modal = props => (
    <Fragment>
        <Backdrop show={props.show} clicked={props.modalClosed}></Backdrop>
        <div 
            className={classes.Modal}
            style={{
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.show ? '1' : '0'}}>
            {props.children}
        </div>
    </Fragment>
);

export default Modal;