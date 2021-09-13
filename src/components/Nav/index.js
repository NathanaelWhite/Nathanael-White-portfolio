import React from "react";

function Nav() {
    const tabs = ["Home", "About", "Work", "Contact"];
    return (
        <ul className="nav-tabs">
            {tabs.map(tab => (
                <li className="nav-tab" key={tab}>
                    <a href="#" className="nav-link">
                        {tab}
                    </a>
                </li>
            ))}
        </ul>
    )
}

export default Nav;