import React ,{Component} from "react";
import PropTypes from 'prop-types';
import Footer from "./footer";
import Item from "./list/item";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default class Content extends Component {
    constructor(props){
        super(props)
        this.state = {
            data:[
                {
                    "userId": 5000,
                    "id": "001",
                    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
                }
            ],
            modal : false,
            message:"Пост удален"
        }

    }

    render(){
        const my = 20;
        return (
            <div>
                {
                    this.state.data.map((item,i)=>(
                    <div key={i}>
                        <Item info={item} remove={this.removeItem}/>
                    </div>))
                }

                <Modal isOpen={this.state.modal} toggle={this.toggle} >
                    <ModalBody>
                        {this.state.message}
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={this.toggle}>Ок</Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }

    componentWillMount(){
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/posts')
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
