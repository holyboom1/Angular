import React from "react";
import { Button, ButtonGroup } from 'reactstrap';
export default function Filter(props) {
    return (
        <div>
            <ButtonGroup>
                <Button color="link">{props.count}</Button>
                <Button color="success" onClick={props.filter}>up</Button>
            </ButtonGroup>
        </div>
    )
}
