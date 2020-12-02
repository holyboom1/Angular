import React, {Fragment,useState} from "react"
import {Alert, Form, FormGroup,Label,Input, Button} from "reactstrap"
import {connect} from "react-redux";

class Comments extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
                name:null,
                email:null,
                comment_text:null,

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
                "url": `https://testitschool-c0b7.restdb.io/rest/news-1/${this.props.id}["comments"]`,
                "method": "PUT",
                "headers": {
                    "content-type": "application/json",
                    "x-apikey": "5fadbc0e8639597288385325",
                    "cache-control": "no-cache"
                },
                "processData": false,
                "data": JSON.stringify(submitData)
            }
            console.log(submitData)
            $.ajax(settings).done(console.log("ok"))
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

        let data = {comments : [{
            name : this.state.name,
            email :this.state.email,
            comment_text :this.state.comment_text}
            ]};

        console.log(data)

         this.submitComment(data)


    }

    render() {
        console.log(this.state.name,this.props.id)
        return <Fragment>
            <Form onSubmit={this.onSubmit}>
                <FormGroup>
                    <Label for="name">Name</Label>
                    <Input type="Name" name="Name" id="Name" placeholder="Name" onChange={this.onChangeName}/>

                    <Label for="exampleEmail">Email</Label>
                    <Input type="email" name="email" id="exampleEmail" placeholder="email" onChange={this.onChangeEmail}/>

                    <Label for="exampleText">Text Area</Label>
                    <Input type="textarea" name="text" id="textarea" onChange={this.onChangeComment_text}/>
                </FormGroup>

                <Button>Submit</Button>
            </Form>
            {this.props.comments.map(
                (comment, i) => {
                    return <Alert color="success" key={i}>
                        <h4 className="alert-heading">Name : {comment.name}</h4>
                        <p>
                            {comment.comment_text}
                        </p>
                        <hr/>
                        <p className="mb-0">
                            {comment.email}
                        </p>
                    </Alert>
                }
            )}

        </Fragment>
    }
}
const mapStateFromProps = (store)=>{


    return {
        GlobalStore:store
    }
}


export default connect(mapStateFromProps)(Comments);