import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function NavbarMenu({ activePage }) {
    return (
        <Navbar bg="dark" variant="dark" fixed="top" className="justify-content-end">
            <Nav activeKey={activePage}>
                <Nav.Item>
                    <Nav.Link href="/business">Business</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/technology">Technology</Nav.Link>
                </Nav.Item>
            </Nav>
        </Navbar>
    )
}