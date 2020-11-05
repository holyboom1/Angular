import React from "react";
//<Component />
export default function Item(props) {
    console.log(props)
    return (
        <div>
            <div key={props.data.id}>
                <div className={"title"}>
                    {props.data.name}
                </div>
                <div className={"price"}>
                    {props.data.price}
                </div>
                <div className={"gallery"}>
                    {props.data.images.map((url,i)=>(
                        <div key={i}>
                            <img src={url} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}