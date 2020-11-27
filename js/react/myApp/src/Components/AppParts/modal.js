import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {connect} from "react-redux";

const ModalWindow = (props) => {

    // const {
    //     buttonLabel,
    //     className
    // } = props;
    //
    // const [modal, setModal] = useState(false);
    //
    // const toggle = () => setModal(!modal);



    const modal=props.GlobalStore.modal.toggle
    let toggle= ()=>{console.log(1111)}
    let className=""
    const closeBtn = <button className="close" onClick={toggle}>&times;</button>;
    console.log(props.GlobalStore.modal)
    return (
        <div>
            <Modal isOpen={modal} toggle={toggle} className={className}>
                <ModalHeader toggle={toggle} close={closeBtn}>Modal title</ModalHeader>
                <ModalBody>

                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}


const mapStateFromProps = (store)=>{


    return {
        GlobalStore:store
    }
}


export default connect(mapStateFromProps)(ModalWindow);
