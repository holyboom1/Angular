import {Col, Row, Button} from "reactstrap";
import {Link} from "react-router-dom";
import React, {Fragment} from "react"
import {connect} from "react-redux";
import {ButtonGroup} from "reactstrap/es";


 function MenuUI(props) {

    return <Row >
        <Col xs={2}>
            <Link className={"btn btn-secondary btn-sm"} to={"/"}>Home</Link>
        </Col>
        <Col xs={2}>
            <Link className={"btn btn-secondary btn-sm"} to={"/news"}>News</Link>
        </Col>
        {!document.cookie.split(";").map((item)=>{ return item.trim()}).includes("loginUser=true")?
        <Col xs={2}>
            <Link className={"btn btn-secondary btn-sm"} to={"/article"}>Article</Link>
        </Col>:null}


        {props.footer!==true ?
            <Fragment >
            {document.cookie.split(";").map((item)=>{ return item.trim()}).includes("loginUser=true")  ?
                    <Col xs={4} className={"offset-4 "}>
                        <ButtonGroup className={"offset-3"}>
                            <Link className={"btn btn-success btn-sm"} to={"/profile"}>Profile</Link>
                            <Button color="danger" size="sm"
                                    onClick={()=>{props.dispatch({type : "LOGOFF"})
                                                         document.cookie=`loginUser=false;max-age=0`;}}>
                                    LogOut
                            </Button>
                        </ButtonGroup>
                    </Col>
                :
                    <Col xs={2} className={"offset-4"}>
                        <Button color="success" size="sm" onClick={()=>{
                            props.dispatch({type:"LOGIN_MODAL"})
                            // props.dispatch({type: "LOGIN"})
                            //
                        }}>Login</Button>
                    </Col>
            }


            </Fragment>
        : null }

    </Row>
}
const mapStateFromProps = (store)=>{


    return {
        GlobalStore:store.login
    }
}


export default connect(mapStateFromProps)(MenuUI);