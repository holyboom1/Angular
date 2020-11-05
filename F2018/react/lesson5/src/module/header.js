import React from "react";
import { Button, ButtonGroup } from 'reactstrap';
export default function Header(props) {

    return (
        <header className={"head"}>
            <ButtonGroup>
                <Button color="primary">Все записи</Button>
                <Button color="success">Ok</Button>
                <Button color="danger">Not Ok</Button>
            </ButtonGroup>
        </header>
    )
}