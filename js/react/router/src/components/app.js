import React, {Component} from "react";
import {Button, Container, Modal, ModalBody, ModalFooter, ModalHeader, Spinner} from "reactstrap";
import Header from "Comp/header";
import Home from "Comp/home";
import Posts from "Comp/posts";
import Page404 from "Comp/404";
import PostInside from "Comp/posts/itemInside";

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

export default class App extends Component{

    constructor(props){
        super(props);
        this.state = {
            items:null,
        }

    }

    render(){


        return(
            <Router>
                <Container>
                    <Header />

                    <Switch>
                        <Route exact path={"/"} component = {Home} />
                        <Route exact path={"/posts"} component = {()=><Posts/>} />
                        <Route exact path={"/posts/id/:id"} component = {PostInside} />

                        <Route component = {Page404} />

                    </Switch>


                </Container>
            </Router>
        )
    }

    componentDidMount(){

    }




}