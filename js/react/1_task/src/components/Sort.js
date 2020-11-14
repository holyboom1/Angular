import React from "react";
import { Row, Col , Button , ButtonGroup } from "reactstrap";

export default function Sort(props) {
    return <Row className={"justify-content-center p-1"}>

            <Button  color="secondary" className={"btn-sm m-1"} onClick={()=>props.sortDone()}>Sort by "Done"</Button>

            <Button  color="secondary" className={"btn-sm m-1"} onClick={()=>props.sortUnDone()}>Sort by "UnDone"</Button>

    </Row>
}