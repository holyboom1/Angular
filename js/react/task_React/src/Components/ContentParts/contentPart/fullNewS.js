import React, {Fragment} from "react"
import {CardImg, CardImgOverlay, CardText, CardTitle, Jumbotron, CardGroup,Card} from "reactstrap"
import {connect} from "react-redux";
import {Link, Redirect} from "react-router-dom"
import Comments from "../../AppParts/comments";

function FullNews(props) {


    return <Fragment>

        {props.location.item===undefined || !document.cookie.split(";").map((item)=>{ return item.trim()}).includes("loginUser=true")?<Redirect to="/news" /> :
                <Fragment>
                <Jumbotron>
                    <CardImg src={`${props.location.item.src}`}/>

                    <h1 className="display-5">{props.location.item.title}</h1>


                    <p className="lead">
                        {props.location.item.full_text}
                    </p>
                    <hr className="my-2" />

                    <CardGroup>
                        {props.location.item.gallery.map((item, i)=>{
                            return   <Card key={i}>
                                <CardImg top width="100%" src={item}  />
                            </Card>

                        })}

                    </CardGroup>

                    <p className="lead">

                    </p>
                </Jumbotron>
                    <Comments comments={props.location.item.comments}/>
                </Fragment>
            }
        </Fragment>



}
const mapStateFromProps = (store)=>{


    return {
        GlobalStore:store
    }
}


export default connect(mapStateFromProps)(FullNews);