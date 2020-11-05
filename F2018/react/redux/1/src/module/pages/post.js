import React ,{Component} from "react";
import Item from "./../list/item";
import { Card,  CardText, CardBody,
    CardTitle, CardSubtitle } from 'reactstrap';

export default class Post extends Component {
    constructor(props){

        console.log(222);
        super(props)
        this.state = {
            data:{},
            comments: [],

        }

    }

    render(){
        return (
            <div>
                Post № {this.props.match.params.id}
                <Item info={this.state.data} />
                {
                    this.state.comments.map((item)=>(
                        <Card key={item.id} data-id={item.postId}>
                            <CardBody >
                                <CardTitle>{item.name}</CardTitle>
                                <CardText>
                                    {item.body}
                                </CardText>
                            </CardBody>
                        </Card>
                    ))
                }
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


        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
            .then((res)=>res.json())
            .then((items)=>{
                this.setState({
                    comments : [...this.state.comments, ...items]
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
