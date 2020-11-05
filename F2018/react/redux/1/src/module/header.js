import React from "react";
import { Link } from "react-router-dom";
export default function Header(props) {

    return (
        <header className={"head"}>
            <div className={"logo"}>
                <img src={"rrrr"} />
            </div>

            <nav className={""}>
                <ul>
                    <li>
                        <Link to={"/dist/"}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to={"/dist/posts"}>
                            Posts
                        </Link>
                    </li>
                    <li>
                        <Link to={"/dist/users"}>
                            Users
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}