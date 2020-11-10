import React from "react";
import { Row, Col , Badge ,Button, ButtonGroup } from "reactstrap";
import { GoTrashcan , GoPencil} from "react-icons/go";

export default function Item(props) {
    let {item}=props;
    let {i}=props;
    let dateCreate=new Date;
        dateCreate.setTime(item.created_at)
    let dateChange;
    if (item.status){
        let dateDone=new Date;
        dateDone.setTime(item.done_at)
        dateChange= ` Выполнено : ${dateDone.getDate()}.${dateDone.getMonth()+1}.${dateDone.getFullYear()} ${dateDone.getHours()}:${dateDone.getMinutes()}`

    }
    else {
        var dateUpdate = new Date;
        dateUpdate.setTime(item.updated_at)
        dateChange  = `Изменено : ${dateUpdate.getDate()}.${dateUpdate.getMonth()+1}.${dateUpdate.getFullYear()} ${dateUpdate.getHours()}:${dateUpdate.getMinutes()}`

         }
    function click() {
        console.log(1111)
    }
    return <Row>
        <Col className={"align-self-center"}>
             {i+1}. {item.title}
        </Col>
        <Col sm={"5"} className={"align-self-center"}>
            <Col className={"m-1"}>
                Создано : {dateCreate.getDate()}.{dateCreate.getMonth()+1}.{dateCreate.getFullYear()} {dateCreate.getHours()}:{dateCreate.getMinutes()}
            </Col>
            <Col className={"m-1"}>
                {dateChange}
            </Col>
        </Col>
        <Col sm={"4"} className={"align-self-center pt-2"}>
            <Row className={"align-items-center justify-content-center p-1 flex-nowrap"} >
                <ButtonGroup className={"m-1"}>
                <Col className={"border-0 align-self-center  p-1"} >
                     {item.status ? <Badge color="success"  >Done</Badge> : <Badge color="danger" >UnDone</Badge>}
                </Col>
                <Col className={"border-0  p-1"} >
                    <Button color="danger" className={"btn-sm"} ><GoTrashcan/></Button>{}
                </Col>
                <Col className={"border-0  p-1"}>
                    <Button color="success" className={"btn-sm"}><GoPencil/></Button>{' '}
                </Col>
                </ButtonGroup>
                </Row>

        </Col>
    </Row>
}