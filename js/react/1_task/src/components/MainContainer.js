import React from "react";
import {Row , Container} from "reactstrap";
import Item from "./parts/item";

export default function MainContainer(props) {
    let {data}=props;
    return data.map((item)=><Item remove={props.remove}
                                  ChangeDone={props.ChangeDone}
                                  item={item}
                                  key={item.id}/>)



}