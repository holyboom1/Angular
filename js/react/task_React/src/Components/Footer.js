import  React from "react"
import {Col, Row} from "reactstrap/es";
import MenuUI from "./HeaderParts/menuUI";

export default function Footer(props) {



    return <footer>
            <Row>
                <Col >
                    <MenuUI footer={true}/>
                </Col>
            </Row>
            <Row>
                <Col >
                    Footer text ///
                </Col>
            </Row>

            </footer>

}