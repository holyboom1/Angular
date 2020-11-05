import React, {Component, Fragment} from "react";

import { Card, Badge , CardText, CardBody,
    CardTitle, CardSubtitle, Button , Modal, ModalHeader, ModalBody} from 'reactstrap';


export default class Tobos extends Component {
    constructor(props){
        super(props)
        this.state = {
            user : {},
            modal : false,
            message:"Пост удален"
        }

    }

    render(){

        return (
            <Fragment>
                {
                    this.props.list.map((item,i)=>(
                        <Card key={item.id}>
                            <CardBody>
                                <CardTitle>
                                    <Badge color={item.completed ===true ? "success" : "danger"}>
                                        {item.completed ===true ? "Все ок" : "Беда"}
                                    </Badge>
                                    <Badge color="info">
                                        {item.id}
                                    </Badge>
                                    {item.title}

                                    <Badge color={"info"} onClick={()=>this.toggle(item.userId)}>
                                        user
                                    </Badge>
                                    <Badge color={"danger"}
                                           onClick={()=>{this.props.removeItem(item.id)}}
                                    >
                                        Удалить
                                    </Badge>
                                </CardTitle>
                                {item.completed !=true ?
                                    <Button color={"danger"}
                                            onClick={()=>{this.props.changeStatus(item.id)}}>
                                        Завершить
                                    </Button>: null}

                            </CardBody>
                        </Card>
                    ))


                }

                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>Инфо о пользователе</ModalHeader>
                    <ModalBody>
                        <p>id - {this.state.user.id}</p>
                        <p>name - {this.state.user.name}</p>
                        <p>username - {this.state.user.username}</p>
                        <p>email - {this.state.user.email}</p>
                    </ModalBody>
                </Modal>

            </Fragment>
        )
    }




    removeItem = (id) =>{
        let newArray = this.state.data.filter((item)=>item.id!=id)
        this.setState({
            data: [...newArray],
            modal : !this.state.modal,
            message : `Пост № ${id} удален`
        })


    }

    toggle =(id)=>{

        fetch("https://jsonplaceholder.typicode.com/users")
             .then(data=>data.json())
             .then(users=>{

                 for (let i =0; i<users.length; i++){
                    if(users[i].id===id) {
                        var user = Object.assign({},users[i]);
                        break;
                    }
                 }

                 return user;
             })
             .then(user=>{
                 this.setState({
                     user: Object.assign({},user),
                     modal : !this.state.modal
                 })
             })


    }


}
