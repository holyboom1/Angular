import React from "react";
import Copyright from "./sectionsParts/Copyright";
import InfoText from "./sectionsParts/InfoText";

export default function Footer(props) {
    return <section className={"container"}>
    <div className={"row"}>
        <section className={`col-lg-6`}>
       <Copyright />
        </section>
        <section className={`col-lg-6`}>
        <InfoText/>
        </section>
    </div>
    </section>

}