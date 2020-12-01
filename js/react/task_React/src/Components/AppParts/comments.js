import React, {Fragment} from "react"
import {Alert} from "reactstrap"
import {connect} from "react-redux";

function Comments(props) {

console.log(props)
    return <Fragment>

            {props.comments.map(
                (comment, i)=>{
                    return <Alert color="success" key={i}>
                            <h4 className="alert-heading">Name : {comment.name}</h4>
                            <p>
                                {comment.comment_text}
                            </p>
                            <hr />
                            <p className="mb-0">
                                {comment.email}
                            </p>
                    </Alert>
                }
            )}

            </Fragment>
}
const mapStateFromProps = (store)=>{


    return {
        GlobalStore:store
    }
}


export default connect(mapStateFromProps)(Comments);