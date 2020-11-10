import React from "react";
import {Container, Row, Col} from "reactstrap";
import Header from "Comp/header";
import MainContainer from "./MainContainer";
import data from "./../json/items.json"
import Sort from "./Sort";

export default function App() {
    return <Container>
        <Row>
            <Col className={"text-center head"}>
                MY Task's
            </Col>
        </Row>

        <Header count={data.length}/>
        <Sort/>
        <MainContainer data={data}/>


    </Container>
}