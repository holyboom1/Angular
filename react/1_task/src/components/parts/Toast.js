import React, { useState } from 'react';
import {Toast, ToastHeader, ToastBody, Button} from 'reactstrap'

export default function ToastShow(props) {

    return (
            <Toast  style={{
                    position: 'absolute',
                    top: 10,
                    right: 10,
            }} >
                <ToastHeader>
                    {props.toastHead}
                </ToastHeader>
                <ToastBody className={"align-self-center m-2"}>
                    {props.toastText}
                </ToastBody>
            </Toast>
        );

}