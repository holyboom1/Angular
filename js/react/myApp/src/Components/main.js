import React, {Fragment} from "react"
import Header from "./header";
import Content from "./Content";
import Footer from "./Footer";

export default class MainApp extends React.Component{
    constructor(props) {
        super(props)

    }

    render() {
        return <Fragment>
                   <Header/>
                   <Content/>
                   <Footer/>
                </Fragment>
    }

    componentDidMount() {

    }

}