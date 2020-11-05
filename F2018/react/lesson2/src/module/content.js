import React from "react";
import PropTypes from 'prop-types';
import Item from "./list/item";
import Footer from "./footer";
export default function Content(props) {
    console.log("----Content---",props.params.title)
    return (
        <main>
            <h1>{props.title}
                <span>
                    {props.params.items.length!=0 ?
                        props.params.items.length : null}
                </span>
            </h1>
            {
                props.params.items.map((item,i)=>(
                    <Item data={item} key={i}/>
                ))
            }
        </main>
    )
}

Content.defaultProps = {
    title: "Content"
};