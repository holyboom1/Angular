import React, { useState } from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, FormGroup, Form, Label} from 'reactstrap';

export default function ModalShow(props) {
        if (props.inputModal===false) {
            return <Modal isOpen={props.modal} toggle={props.modalToggle}>
                        <ModalBody className={"align-self-center m-2"}>
                             {props.modalText}
                        </ModalBody>
                        <ModalFooter>
                            <Button color="success" onClick={() => props.modalOk()}>Ok</Button>
                            <Button color="secondary" onClick={props.modalToggle}>Cancel</Button>
                        </ModalFooter>
                    </Modal>
        }
        if (props.inputModal==="edit") {

        return <Modal isOpen={props.modal} toggle={props.modalToggle}>

            <ModalBody >
                <Form id="CreateForm">
                <FormGroup>
                    <Label for="NameText">Название</Label>
                    <Input type="text" name="name" id="NameText" placeholder="Название"  defaultValue={props.modalName}  />
                </FormGroup>
                <FormGroup>
                    <Label for="FormText">Содержание</Label>
                    <Input type="textarea" name="text" id="FormText" defaultValue={props.modalText} rows={5}/>
                </FormGroup>
                </Form>
            </ModalBody>
            <ModalFooter>
                <Button color="success" onClick={() =>  props.modalOk()}>Ok</Button>
                <Button color="secondary" onClick={props.modalToggle}>Cancel</Button>
            </ModalFooter>
        </Modal>
    }

    if (props.inputModal==="new") {

        return <Modal isOpen={props.modal} toggle={props.modalToggle}>
            <ModalBody >
                <Form id="CreateForm">
                    <FormGroup>
                        <Label for="NameText">Название</Label>
                        <Input type="text" name="name" id="NameText" placeholder="Название" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="FormText">Содержание</Label>
                        <Input type="textarea" name="text" id="FormText" rows={5}/>
                    </FormGroup>
                </Form>
            </ModalBody>
            <ModalFooter>
                <Button color="success" onClick={() =>  props.modalOk()}>Ok</Button>
                <Button color="secondary" onClick={props.modalToggle}>Cancel</Button>
            </ModalFooter>
        </Modal>
    }
}

