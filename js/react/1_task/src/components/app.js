import React from "react";
import {Container, Row, Col} from "reactstrap";
import Header from "Comp/header";
import MainContainer from "./MainContainer";
import data from "./../json/items.json"
import Sort from "./Sort";

export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            todos:null
        }
    }

    render() {
        console.log(this.state.todos)
        return(
        <Container>
            <Row>
                <Col className={"text-center head"}>
                    MY Task's
                </Col>
            </Row>
            <Header count={data.length}/>
            <Sort/>
            <MainContainer data={data}/>
        </Container>

        )}

    componentDidMount() {
       fetch("https://jsonplaceholder.typicode.com/todos")
           .then(data=>data.json())
           .then(todos=>this.setState({
               todos:todos
           }))
           .catch(error=>console.log(error))
    }
}