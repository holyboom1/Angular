import React from "react";
//<Component />
export default function Header(props) {
    console.log(props);
    return (
        <header className={"head"}>
            <div className={"logo"}>
                <img src={"rrrr"} />
            </div>
            {props.params.my ?
            <nav className={props.params.className}>
                <ul>
                    <li>
                        <a href={"https://"}>
                            {"test"}
                        </a>
                    </li>
                    <li>
                        <a href={"https://"}>
                            {"test"}
                        </a>
                    </li>
                    <li>
                        <a href={"https://"}>
                            {"test"}
                        </a>
                    </li>
                </ul>
            </nav>:null}
        </header>
    )
}