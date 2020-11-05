import React, {Component, Fragment} from 'react';
import {Button, ButtonGroup} from 'reactstrap';
import Modal from './modal';
import AddForm from './form';
import DatePicker from "react-datepicker";


export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            form: false,
            date: false,
            startDate: new Date()
        }
    }

    render() {
        console.log(this.state.startDate)
        return (
            <Fragment>
                <ButtonGroup>
                    <Button
                        onClick={this.createCalendar}>Date
                    </Button>
                    <Button
                        onClick={this.createForm}>Add
                    </Button>
                </ButtonGroup>
                {this.state.form ? <Modal toggle={this.createForm} modalTitle={'Добавление записи'}>
                    <AddForm toggle={this.createForm} addItem={this.props.addItem}/>
                </Modal>: null}


                {this.state.date ? <Modal toggle={this.createCalendar} modalTitle={'Календарь'}>

                    <DatePicker selected={this.state.startDate}
                                onChange={this.handleChange}/>
                </Modal> : null}
            </Fragment>
        )
    }

    createForm = () => {
        this.setState({
            form: !this.state.form
        })

    }


    createCalendar = () => {
        this.setState({
            date: !this.state.date
        })
    }

    handleChange = (date) => {
        this.setState({
            startDate: date,
            date:!this.state.date
        });

    }
}
