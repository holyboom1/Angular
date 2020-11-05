import React ,{Component} from "react";
import Item from "./../list/item";

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default class Posts extends Component {
    constructor(props){

        console.log(222);
        super(props)
        this.state = {
            data:{},
            modal : false,
            message:"Пост удален"
        }

    }

    render(){

        return (
            <div>
                Post № {this.props.match.params.id}
                <Item info={this.state.data} />
            </div>
        )
    }

    componentWillMount(){
    }

    componentDidMount(){

        const id = this.props.match.params.id;
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((res)=>res.json())
            .then((item)=>{
                this.setState({
                    data : Object.assign({},item)
                })
            })
        // console.log('------componentDidMount')
    }



    toggle =()=>{
        this.setState({
            modal: !this.state.modal
        })
    }


}
