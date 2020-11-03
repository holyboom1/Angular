import React from "react";
import CatalogMenu from "./CatalogMenu";
import ContentText from "./ContentText";

export default function Content(props) {
    return <section className={"container"}>
        <div className={"row"}>
        <CatalogMenu />
        <ContentText />
    </div>
    </section>
}