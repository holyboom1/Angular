import React, {Fragment, useEffect} from "react"
import {connect} from "react-redux";
import {Redirect, Link} from "react-router-dom";


function HomeContent(props) {


    return <Fragment>
    <h1>Categories</h1>
        <Link to="/news"  className={"m-1  btn btn-small btn-secondary"} onClick={()=>{setFilter("people", props)}}>
            people
        </Link>

        <Link to="/news"  className={"m-1  btn btn-small btn-secondary"} onClick={()=>{setFilter("tech", props)}}>
            tech
        </Link>

        <Link  to="/news"  className={"m-1  btn btn-small btn-secondary"} onClick={()=>{setFilter("auto", props)}}>
            auto
        </Link>

    </Fragment>

}
function setFilter (filter, props){
    props.dispatch({type : "SetFilter", set_filter: filter })

}

const mapStateFromProps = (store)=>{


    return {
        GlobalStore:store
    }
}


export default connect(mapStateFromProps)(HomeContent);