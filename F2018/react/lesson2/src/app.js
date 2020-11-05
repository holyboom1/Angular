import React from "react";
import reactDom from "react-dom";
import Header from "./module/header";
import Content from "./module/content";
import Footer from "./module/footer";
import data from "./data/items";


const x =
    <div>
        <Header params={{
            my:true,
            test: "Привет",
            message: "Hello",
            className : "active"
        }} />
        <Content params={{
            items: data
        }}  />
        <Footer />

    </div>;

reactDom.render(x, document.getElementById("app"));

