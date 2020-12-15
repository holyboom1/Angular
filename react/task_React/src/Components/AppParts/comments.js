import React, {Fragment,useState} from "react"
import {Alert, Form, FormGroup,Label,Input, Button} from "reactstrap"
import {connect} from "react-redux";
import {Spinner} from "reactstrap/es";

class Comments extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
                name:null,
                email:null,
                comment_text:null,
                comments: null ,

            errorForm:false
        }
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeComment_text = this.onChangeComment_text.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }


    submitComment  ( submitData) {

            var settings = {
                "async": true,
                "crossDomain": true,
                "url": `https://testitschool-c0b7.restdb.io/rest/news-1/${this.props.id}`,
                "method": "PUT",
                "headers": {
                    "content-type": "application/json",
                    "x-apikey": "5fadbc0e8639597288385325",
                    "cache-control": "no-cache"
                },
                "processData": false,
                "data": JSON.stringify(submitData)
            }
            $.ajax(settings).done( ()=>{
                this.props.dispatch({type : "SHOW_ALERT" , text : "Ваш Комментарий добавлен!!" ,})
                setTimeout(()=>{this.props.dispatch({type : "HIDE_ALERT" })},5000)
            })

            ;
        }

    onChangeEmail(event) {
        this.setState({email : event.target.value});

    }

    onChangeComment_text(event) {
        this.setState({comment_text: event.target.value});
    }

    onChangeName(event) {
        this.setState({name: event.target.value});
    }

    onSubmit(event) {
        event.preventDefault();
        let comments_new= [].concat(this.state.comments)
        comments_new.push({
                email :this.state.email,
                name : this.state.name,
                comment_text :this.state.comment_text})
        let data = {comments : comments_new};
        this.setState({comments : comments_new})
         this.submitComment(data)

    }


    render() {


        return <Fragment>

            <Form onSubmit={this.onSubmit}>
                <FormGroup>
                    <h3>COMMENTS</h3>
                    <Label for="name">Name</Label>
                    <Input type="Name" name="Name" id="Name" placeholder="Name" onChange={this.onChangeName} required/>

                    <Label for="exampleEmail">Email</Label>
                    <Input type="email" name="email" id="exampleEmail" placeholder="email" onChange={this.onChangeEmail} required/>

                    <Label for="exampleText">Text Area</Label>
                    <Input type="textarea" name="text" id="textarea" onChange={this.onChangeComment_text} required/>
                </FormGroup>

                <Button>Submit</Button>
            </Form>
            { this.state.comments!=null ?
                this.state.comments.map(
                    (comment, i) => {
                        return <Alert color="success" key={i}>
                            <h4 className="alert-heading">Name : {comment.name}</h4>
                            <h5>text</h5>
                            <p>
                                {comment.comment_text}
                            </p>
                            <hr/>
                            <h5>email</h5>
                            <p className="mb-0">
                                {comment.email}
                            </p>
                        </Alert>
                    })
                :
                <Fragment>
                <Spinner/>
                </Fragment>
                }


        </Fragment>
    }
    componentDidMount() {
        this.setState({comments: this.props.comments})
    }
}
const mapStateFromProps = (store)=>{


    return {
        GlobalStore:store
    }
}

export default connect(mapStateFromProps)(Comments);