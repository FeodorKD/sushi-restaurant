import React from 'react';
import styles from './Modal.module.css'
import ReactDom from "react-dom";

const BackDrop = (props) => {
    return <div className={styles.backdrop} onClick={props.onClick}></div>
}

const ModalWindow = (props) => {
    return <div className={styles.modal}>
        <div className={styles.content}>{props.children}</div>
    </div>
}
const Modal = (props) => {
    const portalElement = document.getElementById('overlays')
    return (
        <React.Fragment>
            {ReactDom.createPortal(<BackDrop onClick={props.onHideModal}/>, portalElement)}
            {ReactDom.createPortal(<ModalWindow>{props.children}</ModalWindow>, portalElement)}
        </React.Fragment>
    );
};

export default Modal;