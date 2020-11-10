import React from "react";
import { Row, Col , Button , ButtonGroup } from "reactstrap";

export default function Header(props) {
    let {count}=props;
    return <Row>
        <Col className={"text-center"} xs={"3"}>
            MY Task's
        </Col>
        <Col className={"text-center "} xs={"7"}>
            Count of task - {count!=undefined ? count : 0}
        </Col>

        <Col xs={"2"}>
            <Button color={"success"}>Add</Button>
        </Col>
    </Row>
}