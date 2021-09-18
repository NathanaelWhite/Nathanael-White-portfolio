import React from "react";
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';


function Navigation() {
    const tabs = ["Home", "About", "Work", "Contact"];
    return (
        <>
        <Nav className="justify-content-center" activeKey="/home">
            {tabs.map(tab => (
                <Nav.item>
                    <Nav.link href="#" eventKey={tab}>{tab}</Nav.link>
                </Nav.item> 
            ))}
        </Nav>
        </>
    )
}

export default Navigation;