import React from "react";
import {Container} from "reactstrap";
import Header from "Comp/header";
import Sort from "Comp/sort";
import List from "Comp/list";
import data from "./../json/items";

export default function App() {
    return <Container>
        <Header count={15} />
        <Sort />
        <List items={data} />
    </Container>
}