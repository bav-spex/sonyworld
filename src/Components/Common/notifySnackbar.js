import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as services from "./../../services/services";
// import { ToastContainer, Toast } from 'react-bootstrap';

function NotifySnackbar(props) {

    const dispatch = useDispatch();

    const { notifyMsg } = useSelector((state) => state.commonReducer);

    const [notifyData, setNotifyData] = useState({
        open: "",
        message: "",
        messageType: ""
    });

    useEffect(() => {
        if (notifyMsg) {
            let messageType = notifyMsg && notifyMsg.status === true ? 'success' : 'error';
            let isOpen = notifyMsg && notifyMsg.message ? true : false
            let message = notifyMsg && notifyMsg.message;
            setNotifyData({ ...notifyData, open: isOpen, messageType: messageType, message: message });
            setTimeout(() => {
                let notifyMsg = { message: '' }
                dispatch(services.notifyClear(notifyMsg))
            }, 3000);
        }
    }, [notifyMsg])

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            let notifyMsg = { message: '' }
            dispatch(services.notifyClear(notifyMsg))
            return;
        }
        setNotifyData({ ...notifyData, open: false });
    };

    return (
        <>
            {/* {notifyMsg && notifyData.message !== "" &&
                <div
                    aria-live="polite"
                    aria-atomic="true"
                    className="bg-dark position-relative"
                >
                    <ToastContainer position="top-end" className="p-3">
                        <Toast show={notifyData.open} onClose={handleClose} className="d-inline-block m-1" bg={notifyData.messageType === 'success' ? 'success' : 'danger'} key={1} delay={3000} autohide >
                            <Toast.Header closeButton={true}>
                                <strong className="me-auto">{notifyData.messageType === 'success' ? 'Success' : 'Error'}</strong>
                            </Toast.Header>
                            <Toast.Body className={'text-white'}>
                                {notifyData.message}
                            </Toast.Body>
                        </Toast>
                    </ToastContainer>
                </div>
            } */}
        </>
    );
}

export default NotifySnackbar;