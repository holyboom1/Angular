import React, {Fragment, useState} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter , Label, Input} from 'reactstrap';
import {connect} from "react-redux";
import {Form, Alert} from "reactstrap/es";

class ModalWindow extends React.Component{

    constructor(props) {
        super(props);
        this.state={
            login:null,
            password:null,
            errorinput:false
        }
        this.onChangeLogin = this.onChangeLogin.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChangePassword(event){
        this.setState({password: event.target.value});
    }

    onChangeLogin(event) {
        this.setState({login: event.target.value});
    }
    onSubmit(event){

        event.preventDefault();
        let name = this.state.login.toLowerCase()

        if(name==="admin" && this.state.password==="123"){
                 this.props.dispatch({type : "TOGGLE", text : "" ,})
                this.props.dispatch({type :"LOGIN"} )
                this.props.dispatch({type : "SHOW_ALERT" , text : "Вы успешно авторизованы" ,})
                 setTimeout(()=>{this.props.dispatch({type : "HIDE_ALERT" })},5000)
            }
        else {this.setState({errorinput: true})}

        }



    render() {
        const modal=this.props.GlobalStore.modal.toggle
        let toggle= ()=>{
            this.setState({errorinput:false})
            this.props.dispatch(
            {
                type : "TOGGLE", text : "" ,})}
        let className=null
        const closeBtn = <button className="close" onClick={toggle}>&times;</button>;




        return <Fragment>
                {this.props.GlobalStore.modal.type_of_modal === "login_modal" ?
                        <Modal isOpen={modal} toggle={toggle} className={className}>

                            <ModalHeader toggle={toggle} close={closeBtn}>
                                {this.props.GlobalStore.modal.text}
                            </ModalHeader>

                            <Form onSubmit={this.onSubmit}>
                                <ModalBody>

                                    <Label for="userName">User Name</Label>
                                    <Input onChange={this.onChangeLogin} type="UserName" name="UserName" id="userName"
                                           placeholder="User Name"/>

                                    {this.state.errorinput==true?
                                        <Alert color="danger">
                                        Неверные данные !!!
                                         </Alert>: null}

                                    <Label for="password">Password</Label>
                                    <Input  onChange={this.onChangePassword} type="password" name="password" id="password" placeholder="password"/>
                                    {this.state.errorinput==true?
                                        <Alert color="danger">
                                            Неверные данные !!!
                                        </Alert>: null}
                                </ModalBody>

                                <ModalFooter>
                                    <p>log ^ admin
                                        pass ^ 123</p>
                                    <input className={"btn btn-primary"} type="submit" value="Login"/>
                                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                                </ModalFooter>

                            </Form>
                        </Modal>
                        : null
                }

                {
                    this.props.GlobalStore.modal.type_of_modal === "message" ?
                        <Modal isOpen={modal} toggle={toggle} className={className}>

                            <ModalHeader toggle={toggle} close={closeBtn}>
                                {this.props.GlobalStore.modal.text}
                            </ModalHeader>


                            <ModalBody>


                            </ModalBody>

                            <ModalFooter>

                                <Button color="primary" onClick={toggle}>OK</Button>
                                <Button color="secondary" onClick={toggle}>Cancel</Button>

                            </ModalFooter>


                        </Modal>
                        : null
                }

            </Fragment>
        }

}


const mapStateFromProps = (store)=>{


    return {
        GlobalStore:store
    }
}


export default connect(mapStateFromProps)(ModalWindow);
