import React, {Fragment} from "react"
import {Button, Row} from "reactstrap";


export default function HomeContent(props) {



    return <Fragment>
    <h1>Categories</h1>
        <Button  className={"m-1"} size="sm" color="secondary" >
            people
        </Button>

        <Button className={"m-1"} size="sm" color="secondary" >
            tech
        </Button>

        <Button className={"m-1"} size="sm" color="secondary">
            auto
        </Button>

    </Fragment>

}