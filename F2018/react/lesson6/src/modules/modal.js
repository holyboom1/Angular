import React, {Component, Fragment} from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';

export default class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            modal:true
        }
    }

    render() {
        return (
            <Fragment>
                <Modal isOpen={this.state.modal} toggle={this.props.toggle}>
                    <ModalHeader toggle={this.props.toggle}>{this.props.modalTitle}</ModalHeader>
                    <ModalBody>
                        {this.props.children}
                    </ModalBody>
                </Modal>
            </Fragment>
        )
    }
}
