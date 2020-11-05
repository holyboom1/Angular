import PropTypes from 'prop-types';
import React from "react";
export default function Footer(props) {
    return (
        <footer className={props.name}>
            <nav>
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
            </nav>
        </footer>
    )
}

Footer.propTypes = {
    name: PropTypes.string
}

Footer.defaultProps = {
    name: 'base'
};