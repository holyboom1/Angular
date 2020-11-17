import React from "react";
import { Row, Col , Badge ,Button, ButtonGroup , UncontrolledPopover, PopoverBody, PopoverHeader} from "reactstrap";
import { GoTrashcan , GoPencil, GoInfo} from "react-icons/go";


export default function Item(props) {
    let {item}=props;
    let dateCreate=new Date;
        dateCreate.setTime(item.created_at)
    let dateChange;
    if (item.completed){
        let dateDone=new Date;
        dateDone.setTime(item.done_at)
        dateChange= ` Выполнено : ${dateDone.getDate()}.${dateDone.getMonth()+1}.${dateDone.getFullYear()} ${dateDone.getHours()}:${dateDone.getMinutes()}`

    }
    else {
        var dateUpdate = new Date;
        dateUpdate.setTime(item.updated_at)
        dateChange  = `Изменено : ${dateUpdate.getDate()}.${dateUpdate.getMonth()+1}.${dateUpdate.getFullYear()} ${dateUpdate.getHours()}:${dateUpdate.getMinutes()}`

         }
    return <Row>
        <Col  sm={"3"} className={"align-self-center border-my"}>
              {item.title}
        </Col>

        <Col  sm={"5"} className={"align-self-center border-my"}>
            {item.body!=undefined ? item.body : "...."}
        </Col>

        <Col sm={"4"} className={"align-self-center   pt-2"}>
            <Row className={"align-items-center justify-content-space-around p-1 flex-nowrap"} >

                <Col sm={"4"} className={"border-0 align-self-center p-1  "}  >
                     {item.completed ? <Badge color="success"  onClick={()=>props.messageModal(item.id,"Изменить статус?",props.ChangeDone, "change", "")}>Done</Badge> :<Badge color="danger"  onClick={()=>props.messageModal(item.id,"Изменить статус?",props.ChangeDone, "change", "")}>UnDone</Badge>}
                </Col>

                <Col  sm={"5"}className={"border-0  p-1 "} >
                    <ButtonGroup className={"m-1"}>
                        <Button color="danger" className={"btn-sm"} onClick={()=>props.messageModal(item.id,"Удалить?",props.remove, "change", "")} ><GoTrashcan/></Button>
                        <Button color="success" className={"btn-sm"} onClick={()=>props.messageModal(item.id,item.title,props.EditPost,"edit",item.body)}><GoPencil/></Button>
                        <Button color="info" id={`UncontrolledPopover${item.id}`} type="button" className={"btn-sm"}><GoInfo/></Button>
                        <UncontrolledPopover placement="bottom" target={`UncontrolledPopover${item.id}`}>
                            <PopoverHeader>Даты создания/Изменения</PopoverHeader>
                            <PopoverBody>
                                <Row className={"m-1 justify-content-center"}>
                                    Создано : {dateCreate.getDate()}.{dateCreate.getMonth()+1}.{dateCreate.getFullYear()} {dateCreate.getHours()}:{dateCreate.getMinutes()}
                                </Row>
                                <Row className={"m-1 justify-content-center"}>
                                    {dateChange}
                                </Row>

                            </PopoverBody>
                        </UncontrolledPopover>
                    </ButtonGroup>
                </Col>
            </Row>

        </Col>
    </Row>
}