import React from "react";
import {Row } from "reactstrap";
import Item from "./parts/item";

export default function MainContainer(props) {
    let {data}=props;
    return <div>
    {
        data.map((item,i)=><Item item={item} key={item.id} i={i}/>)
    }
    </div>

}