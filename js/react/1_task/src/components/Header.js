import React from "react";
import { Row, Col , Button , ButtonGroup } from "reactstrap";

export default function Header(props) {
    let {count}=props;
    return <Row>
        <Col className={"text-center align-self-center"} xs={"3"}>
            MY Task's
        </Col>
        <Col className={"text-center align-self-center"} xs={"6"}>
            Count of task - {count!==undefined ? count : 0}
        </Col>
        <Col xs={"3"} className={"align-self-center p-1"}>

                <Button color={"success"} className={"btn-sm"} onClick={()=>props.messageModal("new",null,props.modalOk,"new")}>Add</Button>

        </Col>
    </Row>
}