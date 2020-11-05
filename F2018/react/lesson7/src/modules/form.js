import React, {Component, Fragment} from 'react';
import {Button, Form, FormGroup, Label, Input, FormText} from 'reactstrap';



export default class AddForm extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <Fragment>
                <Form onSubmit={this.submitData}>
                    <FormGroup>
                        <Input type={'text'} placeholder={"Title"} id={'title'}/>
                    </FormGroup>
                    <FormGroup>
                        <Input type={'textarea'} placeholder={"Описание"} id={'info'}/>
                    </FormGroup>
                    <FormGroup>
                        <Input type={'submit'}/>
                    </FormGroup>
                </Form>
            </Fragment>
        )
    }

    submitData = (e) => {
        e.preventDefault();
        let title = document.getElementById('title').value;
        let info = document.getElementById('info').value;
        let item = {
            id: localStorage.length + 1,
            title: title,
            info: info
        }
       localStorage.setItem(localStorage.length + 1,JSON.stringify(item));
        this.props.addItem(item);
        this.props.toggle();
        // Array.isArray(arr) ?
        //     localStorage.setItem('list', [...arr,
        //         {
        //             id: arr.length + 1,
        //             title: title,
        //             info: info
        //         }]) :
        //     localStorage.setItem('list',[
        //         {
        //             id: 1,
        //             title: title,
        //             info: info
        //         }])

    }
}
