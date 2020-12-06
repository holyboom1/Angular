import {Col, Row, Button} from "reactstrap";
import {Link} from "react-router-dom";
import React, {Fragment} from "react"
import {connect} from "react-redux";
import {ButtonGroup} from "reactstrap/es";


 function MenuUI(props) {

     let login = ()=> {
         props.dispatch({type: "LOGIN_MODAL", text: "Необходимо авторизоваться!"})
         props.dispatch({type : "SHOW_ALERT" , text : "Необходимо авторизоваться!" ,})
         setTimeout(()=>{props.dispatch({type : "HIDE_ALERT" })},5000)
     }

    return <Row >
        <Col xs={2}>
            <Link className={"btn btn-secondary btn-sm"} to={"/"} onClick={()=>{props.dispatch({type : "SetFilter", set_filter: 0 })}}>Home</Link>
        </Col>
        <Col xs={2}>
            <Link className={"btn btn-secondary btn-sm"} to={"/news"} onClick={()=>{props.dispatch({type : "SetFilter", set_filter: 0 })}}>News</Link>
        </Col>
        {!document.cookie.split(";").map((item)=>{ return item.trim()}).includes("loginUser=true")?
        <Col xs={2}>
            <Link className={"btn btn-secondary btn-sm"} to={"/article"} onClick={()=>{props.dispatch({type : "SetFilter", set_filter: 0 })}}>Article</Link>
        </Col>:null}
        <Col xs={2}>
            {document.cookie.split(";").map((item)=>{ return item.trim()}).includes("loginUser=true")?
                <Link className={"btn btn-secondary btn-sm"} to={"/profile"} onClick={()=>{props.dispatch({type : "SetFilter", set_filter: 0 })}}>Profile</Link>:
                <Button className={"btn btn-secondary btn-sm"} onClick={login}>Profile</Button>
            }
        </Col>

        {props.footer!==true ?
            <Fragment >
            {document.cookie.split(";").map((item)=>{ return item.trim()}).includes("loginUser=true")  ?
                    <Col xs={2} className={"offset-4 "}>

                            <Button color="danger" size="sm"
                                    onClick={()=>{props.dispatch({type : "LOGOFF"})
                                                         document.cookie=`loginUser=false;max-age=0`;
                                        props.dispatch({type : "SHOW_ALERT" , text : "Вы вышил!" ,})
                                        setTimeout(()=>{props.dispatch({type : "HIDE_ALERT" })},5000)}}>
                                    LogOut
                            </Button>

                    </Col>
                :
                    <Col xs={2} className={"offset-2"}>
                        <Button color="success" size="sm" onClick={()=>{
                            props.dispatch({type:"LOGIN_MODAL"})

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