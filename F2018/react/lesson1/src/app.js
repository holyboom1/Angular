import React from "react";
import reactDom from "react-dom";
import Header from "./module/header";
import Footer from "./module/footer";

const x =
    <div>
        <Header />
        <Footer />

    </div>;

reactDom.render(x, document.getElementById("app"));

