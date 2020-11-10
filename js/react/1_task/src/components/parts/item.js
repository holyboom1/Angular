import React from "react";
import { Row, Col , Badge ,Button, ButtonGroup } from "reactstrap";
import { GoTrashcan , GoPencil} from "react-icons/go";

export default function Item(props) {
    let {item}=props;
    let {i}=props;
    let dateCreate=new Date;
    // console.log(item.created_at)
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
        <Col>
             {i+1}. {item.title}
        </Col>
        <Col sm={"5"}>
            <Col >
                Создано : {dateCreate.getDate()}.{dateCreate.getMonth()+1}.{dateCreate.getFullYear()} {dateCreate.getHours()}:{dateCreate.getMinutes()}
            </Col>
            <Col>
                {dateChange}
            </Col>
        </Col>
        <Col sm={"1"} className={"TaskDone"} >
            {item.status ? <Badge color="success" className={"TaskDone"} >Done</Badge> : <Badge color="danger" className={"TaskDone"}>UnDone</Badge>}
        </Col>
        <Col sm={"2"} className={"row align-items-center h-150"}>
            <Button color="danger" className={""} ><GoTrashcan/></Button>{}
            <Button color="success"><GoPencil/></Button>{' '}
        </Col>
    </Row>
}