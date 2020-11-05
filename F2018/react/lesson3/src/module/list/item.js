import React ,{Component} from "react";
import { Button } from 'reactstrap';

export default class Item extends Component {
    constructor(props){
        super(props)
        this.state = {

        }

    }

    render(){
        return (
            <div>
                <h2>{this.props.info.title}
                    <Button color="danger"  onClick={()=>this.handleClick(this.props.info.id)}>danger</Button>
                </h2>
                <p>{this.props.info.userId}</p>
                <p>{this.props.info.body}</p>
            </div>
        )
    }

    handleClick = (id)=> {
        this.props.remove(id)
        //console.log(id);
        //console.log(e.target.getAttribute("data-id"));
    }




}
