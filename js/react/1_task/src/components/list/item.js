import React from "react";
import {
    Card, CardBody,
    CardTitle, Badge, Button, ButtonGroup
} from 'reactstrap';

import { FaTrashAlt, FaEdit } from "react-icons/fa";

export default function Item(props) {
    let {info} = props;
    return  <Card>
        <CardBody>
            <CardTitle tag="h5">
                #{info.id} {info.title}
                {
                    info.status ? <Badge color={"success"}>Ok</Badge> : <Badge color={"danger"}>:(</Badge>
                }
                <div>
                    <ButtonGroup>
                        <Button color={'primary'}><FaTrashAlt /></Button>
                        <Button color={'success'}><FaEdit /></Button>
                    </ButtonGroup>

                </div>
            </CardTitle>
        </CardBody>
    </Card>
}