import React, { Component } from 'react';
import './Modal.css';

class Modal extends Component {

    render() {
        const {show, close, modalData} = this.props;
        const modalWrapperStyle = {
            visibility: show ? 'visible' : 'hidden',
            transform: show ? 'translate(-50%, -45%)' : 'translate(-50%, -100vh)',
            opacity: show ? '1' : '0'
        }

        const myModalBullets = modalData.modalBullets.map((e) => {
            return (
                <li key={e}>{e}</li>
            )
        })

        return (
            <div>
                <div style={modalWrapperStyle} className="modal-wrapper">

                    <div className="modal-header">
                        <h3>{modalData.modalTitle}</h3>
                        <span className="close-modal-btn" onClick={close}>x</span>
                    </div>
                    <p>{modalData.modalDescription}</p>
                    <ul>
                        {myModalBullets}
                    </ul>
                    <div className="modal-footer">
                        <button className="btn-cancel" onClick={close}>CLOSE</button>
                        <button form="newSongForm" type="submit" className="btn-continue" >Submit</button>
                    </div>


                </div>
            </div>
        )
    }
}

export default Modal;