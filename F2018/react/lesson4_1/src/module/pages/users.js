import React ,{Component,Fragment} from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default class Users extends Component {
    constructor(props){

        console.log(222);
        super(props)
        this.state = {
            data:[
            ],
            modal : false,
            message:"Пост удален"
        }

    }

    render(){
        const my = 20;
        return (
            <Fragment>
                <h1>{"Users list"}</h1>
                {
                    this.state.data.map((user)=>(
                        <div key={user.id}>
                            <p>
                                {user.name}
                            </p>
                            <p>
                                {user.email}
                            </p>
                            <p>
                                {user.address.street}
                            </p>
                            <p>
                                {user.phone}
                            </p>
                            <p>
                                {user.website}
                            </p>
                        </div>
                    ))
                }
            </Fragment>
        )
    }

    componentWillMount(){
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((res)=>res.json())
            .then((items)=>{
                this.setState({
                    data : [...this.state.data,...items]
                })
            })
        console.log('------componentDidMount')
    }

    removeItem = (id) =>{
        let newArray = this.state.data.filter((item)=>item.id!=id)
        this.setState({
            data: [...newArray],
            modal : !this.state.modal,
            message : `Пост № ${id} удален`
        })

        //this.toggle()
        // ТАК В БОЮ.
        // fetch("api/item/remove/${id}").then(data=>{
        //     if(data) {
        //         let newArray = this.state.data.filter((item)=>item.id!=id)
        //         this.setState({
        //             data: [...newArray]
        //         })
        //     }
        // })

    }

    toggle =()=>{
        this.setState({
            modal: !this.state.modal
        })
    }


}
