import React, {Fragment, useState} from "react"
import {CardImg, CardImgOverlay, CardText, CardTitle, Jumbotron, CardGroup, Card, Row} from "reactstrap"
import {connect} from "react-redux";
import {Link, Redirect} from "react-router-dom"
import Comments from "../../AppParts/comments";
import {Spinner} from "reactstrap/es";
import Carusel from "../../AppParts/carusel";

function FullNews(props) {
    const [data,setData] = useState(null);

    let getThisNews = ()=> {
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": `https://testitschool-c0b7.restdb.io/rest/news-1/${props.match.params.id}`,
            "method": "GET",
            "headers": {
                "content-type": "application/json",
                "x-apikey": "5fadbc0e8639597288385325",
                "cache-control": "no-cache"
            }
        }
        $.ajax(settings).done(response=>{setData(response)});
    }

    return <Fragment>

        {!document.cookie.split(";").map((item)=>{ return item.trim()}).includes("loginUser=true")?<Redirect to="/news" /> :
            data==null ?
                <Row className={"justify-content-center p-2"}>
                    {getThisNews()}
                    <Spinner color={"secondary"} className={"align-self-center"}/>
                </Row>
                :
            <Fragment>
                <Jumbotron>
                    <CardImg src={`https://testitschool-c0b7.restdb.io/media/${data.src}?key=5fadbc0e8639597288385325`}/>

                    <h1 className="display-5">{data.title}</h1>


                    <p className="lead">
                        {data.full_text}
                    </p>
                    <hr className="my-2" />

                    <CardGroup>
                        <Carusel items={data.gallery}/>
                        {/*{data.gallery.map((item, i)=>{*/}
                        {/*    return   <Card key={i}>*/}
                        {/*                <CardImg top width="100%" src={`https://testitschool-c0b7.restdb.io/media/${item}?key=5fadbc0e8639597288385325`}  />*/}
                        {/*            </Card>*/}

                        {/*})}*/}

                    </CardGroup>

                    <p className="lead">

                    </p>
                </Jumbotron>
                    <Comments comments={data.comments} id={data._id}/>
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